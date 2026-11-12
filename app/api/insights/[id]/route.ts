import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { deleteInsight, updateInsight } from "@/lib/db";
import { cleanDate, cleanText, slugify, validPublicImage } from "@/lib/validation";

function insightId(value: string) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const id = insightId((await params).id);
  if (!id) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const body = await request.json().catch(() => ({}));
  const input: Record<string, string | number> = {};
  for (const [field, max] of [["title", 160], ["excerpt", 500], ["content", 20000]] as const) {
    if (body[field] === undefined) continue;
    const value = cleanText(body[field], max);
    if (!value) return NextResponse.json({ error: "Title, excerpt and content cannot be empty." }, { status: 400 });
    input[field] = value;
  }
  if (body.slug !== undefined) {
    // An empty slug field keeps the current slug instead of storing an unreachable article.
    const slug = slugify(cleanText(body.slug, 120));
    if (slug) input.slug = slug;
  }
  if (body.category !== undefined) input.category = cleanText(body.category, 80) || "Intelligence";
  if (body.image !== undefined) {
    const image = cleanText(body.image, 300);
    if (!validPublicImage(image)) return NextResponse.json({ error: "Use an existing image from /public/images." }, { status: 400 });
    input.image = image;
  }
  if (body.published !== undefined) input.published = body.published ? 1 : 0;
  if (body.publishedAt !== undefined) {
    const publishedAt = cleanDate(body.publishedAt);
    if (!publishedAt) return NextResponse.json({ error: "The publication date is not valid." }, { status: 400 });
    input.publishedAt = publishedAt;
  }
  try {
    const insight = updateInsight(id, input);
    return insight ? NextResponse.json({ insight }) : NextResponse.json({ error: "Not found" }, { status: 404 });
  } catch { return NextResponse.json({ error: "Unable to update this publication." }, { status: 409 }); }
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const id = insightId((await params).id);
  return id && deleteInsight(id) ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "Not found" }, { status: 404 });
}
