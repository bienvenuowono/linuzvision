import fs from "node:fs";
import { Readable } from "node:stream";
import { extensionOf, mediaTypes, uploadPath } from "@/lib/media";

export const runtime = "nodejs";

// Serves files sent from the dashboard. Byte ranges are honoured so videos can be seeked.
export async function GET(request: Request, { params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const file = uploadPath(name);
  let size = 0;
  try {
    const stats = file ? fs.statSync(file) : undefined;
    if (!file || !stats?.isFile()) return new Response("Not found", { status: 404 });
    size = stats.size;
  } catch {
    return new Response("Not found", { status: 404 });
  }

  const headers = new Headers({
    "Content-Type": mediaTypes[extensionOf(name)] || "application/octet-stream",
    "Accept-Ranges": "bytes",
    // Names are random and never reused, so a stored copy can be kept for a year.
    "Cache-Control": "public, max-age=31536000, immutable",
  });

  const range = /^bytes=(\d*)-(\d*)$/.exec(request.headers.get("range") || "");
  let start = 0;
  let end = size - 1;
  let status = 200;
  if (range && (range[1] || range[2])) {
    if (range[1]) {
      start = Number(range[1]);
      if (range[2]) end = Math.min(Number(range[2]), size - 1);
    } else {
      start = Math.max(0, size - Number(range[2]));
    }
    if (start > end || start >= size) {
      headers.set("Content-Range", `bytes */${size}`);
      return new Response(null, { status: 416, headers });
    }
    headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
    status = 206;
  }
  headers.set("Content-Length", String(end - start + 1));
  if (size === 0) return new Response(null, { status: 200, headers });
  const stream = Readable.toWeb(fs.createReadStream(file, { start, end })) as unknown as ReadableStream;
  return new Response(stream, { status, headers });
}
