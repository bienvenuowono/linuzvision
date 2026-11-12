import fs from "node:fs";
import path from "node:path";
import { dataDirectory } from "@/lib/db";

// Files sent from the dashboard live outside the build output so a redeploy never erases them.
// Point UPLOADS_DIRECTORY (or DATABASE_DIRECTORY) at a persistent volume in production.
export const uploadsDirectory = process.env.UPLOADS_DIRECTORY
  ? path.resolve(process.env.UPLOADS_DIRECTORY)
  : path.join(dataDirectory, "uploads");

export type MediaKind = "image" | "video";

export const mediaRules: Record<MediaKind, { extensions: string[]; maxBytes: number }> = {
  image: { extensions: ["png", "jpg", "jpeg", "webp", "avif"], maxBytes: 12 * 1024 * 1024 },
  video: { extensions: ["mp4", "webm"], maxBytes: 600 * 1024 * 1024 },
};

export const mediaTypes: Record<string, string> = {
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  webp: "image/webp",
  avif: "image/avif",
  mp4: "video/mp4",
  webm: "video/webm",
};

const UPLOAD_NAME = /^[a-f0-9]{24}\.(png|jpe?g|webp|avif|mp4|webm)$/;

export function extensionOf(name: string) {
  return path.extname(name).slice(1).toLowerCase();
}

// Resolves "/media/<name>" to a file inside the uploads directory, or null when the name is not ours.
export function uploadPath(name: string) {
  return UPLOAD_NAME.test(name) ? path.join(uploadsDirectory, name) : null;
}

function isFile(file: string) {
  try { return fs.statSync(file).isFile(); } catch { return false; }
}

// A media reference is either a file shipped in /public or a file sent from the dashboard.
export function validMedia(value: string, kind: MediaKind) {
  if (!mediaRules[kind].extensions.includes(extensionOf(value)) || value.includes("..")) return false;
  if (value.startsWith("/media/")) {
    const file = uploadPath(value.slice("/media/".length));
    return Boolean(file && isFile(file));
  }
  if (!/^\/(images|training)\/[a-zA-Z0-9._/-]+$/.test(value)) return false;
  const publicRoot = path.resolve(process.cwd(), "public");
  const resolved = path.resolve(publicRoot, value.slice(1));
  return resolved.startsWith(`${publicRoot}${path.sep}`) && isFile(resolved);
}

// The first bytes must match the announced format, whatever the file was named.
export function matchesSignature(head: Buffer, extension: string) {
  const ascii = (start: number, end: number) => head.subarray(start, end).toString("latin1");
  switch (extension) {
    case "png": return head.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
    case "jpg":
    case "jpeg": return head[0] === 0xff && head[1] === 0xd8 && head[2] === 0xff;
    case "webp": return ascii(0, 4) === "RIFF" && ascii(8, 12) === "WEBP";
    case "avif":
    case "mp4": return ascii(4, 8) === "ftyp";
    case "webm": return head.subarray(0, 4).equals(Buffer.from([0x1a, 0x45, 0xdf, 0xa3]));
    default: return false;
  }
}

// Files sent from the dashboard need a disk that survives restarts; serverless hosts only offer /tmp.
export function uploadsArePersistent() {
  return !process.env.VERCEL || Boolean(process.env.UPLOADS_DIRECTORY);
}

const ABANDONED_AFTER_MS = 24 * 60 * 60 * 1000;

// Removes uploads that nothing points to. A day of grace protects files of a form still being filled in.
export function sweepUploads(referenced: Set<string>) {
  let names: string[];
  try { names = fs.readdirSync(uploadsDirectory); } catch { return; }
  const cutoff = Date.now() - ABANDONED_AFTER_MS;
  for (const name of names) {
    const unfinished = name.endsWith(".part");
    if (!unfinished && (!UPLOAD_NAME.test(name) || referenced.has(`/media/${name}`))) continue;
    const file = path.join(uploadsDirectory, name);
    try {
      if (fs.statSync(file).mtimeMs < cutoff) fs.rmSync(file, { force: true });
    } catch {
      // Another request may have removed it already.
    }
  }
}

export function deleteUpload(value: string) {
  if (!value.startsWith("/media/")) return;
  const file = uploadPath(value.slice("/media/".length));
  if (file) fs.rmSync(file, { force: true });
}
