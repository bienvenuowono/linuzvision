import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { deleteInsight, updateInsight } from "@/lib/db";
import { cleanText, slugify, validPublicImage } from "@/lib/validation";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const id = Number((await params).id); const body = await request.json().catch(() => ({}));
  const input: Record<string, string | number> = {};
  if (body.title !== undefined) input.title = cleanText(body.title, 160);
  if (body.slug !== undefined) input.slug = slugify(cleanText(body.slug, 120));
  if (body.excerpt !== undefined) input.excerpt = cleanText(body.excerpt, 500);
  if (body.content !== undefined) input.content = cleanText(body.content, 20000);
  if (body.category !== undefined) input.category = cleanText(body.category, 80);
  if (body.image !== undefined) {
    const image = cleanText(body.image, 300);
    if (!validPublicImage(image)) return NextResponse.json({ error: "Use an existing image from /public/images." }, { status: 400 });
    input.image = image;
  }
  if (body.published !== undefined) input.published = body.published ? 1 : 0;
  if (body.publishedAt !== undefined) input.publishedAt = String(body.publishedAt);
  try {
    const insight = updateInsight(id, input);
    return insight ? NextResponse.json({ insight }) : NextResponse.json({ error: "Not found" }, { status: 404 });
  } catch { return NextResponse.json({ error: "Unable to update this publication." }, { status: 409 }); }
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return deleteInsight(Number((await params).id)) ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "Not found" }, { status: 404 });
}
