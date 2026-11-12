import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { refreshPublicSite } from "@/lib/admin-input";
import { saveTextChanges } from "@/lib/content";
import { isTextId, TEXT_MAX_LENGTH, type TextId } from "@/lib/page-texts";

// Keeps line breaks (they become line breaks on the page) and drops invisible control characters.
function cleanWording(value: string) {
  return value
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0009\u000B-\u001F\u007F]/g, "")
    .split("\n")
    .map((line) => line.trim())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// Saves page texts: { changes: { "<text id>": "new wording" | null } }. Null or an empty wording restores the original.
export async function PUT(request: Request) {
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json().catch(() => ({}));
  const raw = body && typeof body.changes === "object" && body.changes !== null ? Object.entries(body.changes as Record<string, unknown>) : [];
  if (!raw.length) return NextResponse.json({ error: "Aucune modification à enregistrer." }, { status: 400 });
  if (raw.length > 1000) return NextResponse.json({ error: "Trop de textes en une seule fois. Enregistrez page par page." }, { status: 400 });

  const changes: Array<[TextId, string | null]> = [];
  for (const [id, value] of raw) {
    if (!isTextId(id)) return NextResponse.json({ error: "Un des textes n'existe plus. Rechargez la page." }, { status: 400 });
    if (value === null) { changes.push([id, null]); continue; }
    if (typeof value !== "string") return NextResponse.json({ error: "Un des textes n'est pas valide." }, { status: 400 });
    const wording = cleanWording(value);
    if (wording.length > TEXT_MAX_LENGTH) return NextResponse.json({ error: `Un texte dépasse ${TEXT_MAX_LENGTH} caractères. Raccourcissez-le.` }, { status: 400 });
    changes.push([id, wording || null]);
  }

  try {
    const texts = saveTextChanges(changes);
    refreshPublicSite();
    return NextResponse.json({ texts });
  } catch {
    return NextResponse.json({ error: "Les textes n'ont pas pu être enregistrés. Réessayez." }, { status: 503 });
  }
}
