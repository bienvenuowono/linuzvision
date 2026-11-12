import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { deleteInsight, updateInsight } from "@/lib/db";
import { validMedia } from "@/lib/media";
import { cleanDate, cleanText, slugify } from "@/lib/validation";

function insightId(value: string) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const id = insightId((await params).id);
  if (!id) return NextResponse.json({ error: "Cette publication n'existe plus. Rechargez la page pour voir la liste à jour." }, { status: 404 });
  const body = await request.json().catch(() => ({}));
  const input: Record<string, string | number> = {};
  for (const [field, max] of [["title", 160], ["excerpt", 500], ["content", 20000]] as const) {
    if (body[field] === undefined) continue;
    const value = cleanText(body[field], max);
    if (!value) return NextResponse.json({ error: "Le titre, le résumé et le contenu ne peuvent pas être vides." }, { status: 400 });
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
    if (!validMedia(image, "image")) return NextResponse.json({ error: "L'image est introuvable. Envoyez-la de nouveau." }, { status: 400 });
    input.image = image;
  }
  if (body.published !== undefined) input.published = body.published ? 1 : 0;
  if (body.publishedAt !== undefined) {
    const publishedAt = cleanDate(body.publishedAt);
    if (!publishedAt) return NextResponse.json({ error: "La date de publication n'est pas valide." }, { status: 400 });
    input.publishedAt = publishedAt;
  }
  try {
    const insight = updateInsight(id, input);
    return insight ? NextResponse.json({ insight }) : NextResponse.json({ error: "Cette publication n'existe plus. Rechargez la page pour voir la liste à jour." }, { status: 404 });
  } catch { return NextResponse.json({ error: "La publication n'a pas pu être modifiée." }, { status: 409 }); }
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const id = insightId((await params).id);
  return id && deleteInsight(id) ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "Cette publication n'existe plus. Rechargez la page pour voir la liste à jour." }, { status: 404 });
}
