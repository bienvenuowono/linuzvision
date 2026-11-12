import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { Readable, Transform } from "node:stream";
import { pipeline } from "node:stream/promises";
import type { ReadableStream as NodeReadableStream } from "node:stream/web";
import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { cleanAbandonedUploads } from "@/lib/content";
import { extensionOf, matchesSignature, mediaRules, uploadsArePersistent, uploadsDirectory, type MediaKind } from "@/lib/media";

export const runtime = "nodejs";

class TooLarge extends Error {}

function megabytes(bytes: number) {
  return `${Math.round(bytes / (1024 * 1024))} Mo`;
}

// Receives one raw file body (not a form), so a large video is streamed to disk instead of held in memory.
export async function POST(request: Request) {
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  // Never answer "saved" for a file that the host will erase a few minutes later.
  if (!uploadsArePersistent()) {
    return NextResponse.json({ error: "Cet hébergement n'a pas de dossier permanent pour les fichiers. Définissez UPLOADS_DIRECTORY sur un espace de stockage persistant." }, { status: 503 });
  }
  cleanAbandonedUploads();
  const url = new URL(request.url);
  const kind = url.searchParams.get("kind") as MediaKind;
  const rules = mediaRules[kind];
  if (!rules) return NextResponse.json({ error: "Type de fichier inconnu." }, { status: 400 });
  const extension = extensionOf(url.searchParams.get("name") || "");
  if (!rules.extensions.includes(extension)) {
    return NextResponse.json({ error: `Utilisez l'un de ces formats : ${rules.extensions.join(", ")}.` }, { status: 400 });
  }
  const tooLarge = () => NextResponse.json({ error: `Ce fichier est trop lourd. La limite est de ${megabytes(rules.maxBytes)}.` }, { status: 413 });
  if (Number(request.headers.get("content-length") || 0) > rules.maxBytes) return tooLarge();
  if (!request.body) return NextResponse.json({ error: "Le fichier est vide." }, { status: 400 });

  const name = `${crypto.randomBytes(12).toString("hex")}.${extension}`;
  const target = path.join(uploadsDirectory, name);
  const partial = `${target}.part`;
  let received = 0;
  const limit = new Transform({
    transform(chunk: Buffer, _encoding, done) {
      received += chunk.length;
      done(received > rules.maxBytes ? new TooLarge() : null, chunk);
    },
  });

  try {
    fs.mkdirSync(uploadsDirectory, { recursive: true });
    await pipeline(Readable.fromWeb(request.body as unknown as NodeReadableStream), limit, fs.createWriteStream(partial));
    const head = Buffer.alloc(16);
    const handle = fs.openSync(partial, "r");
    try { fs.readSync(handle, head, 0, 16, 0); } finally { fs.closeSync(handle); }
    if (received === 0 || !matchesSignature(head, extension)) {
      fs.rmSync(partial, { force: true });
      return NextResponse.json({ error: `Ce fichier n'est pas un fichier .${extension} valide.` }, { status: 400 });
    }
    fs.renameSync(partial, target);
    return NextResponse.json({ url: `/media/${name}`, bytes: received }, { status: 201 });
  } catch (error) {
    fs.rmSync(partial, { force: true });
    if (error instanceof TooLarge) return tooLarge();
    console.error("Upload failed:", error);
    return NextResponse.json({ error: "Le fichier n'a pas pu être enregistré. Vérifiez la connexion et réessayez." }, { status: 500 });
  }
}
