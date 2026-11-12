import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { createInsight, listInsights } from "@/lib/db";
import { validMedia } from "@/lib/media";
import { cleanDate, cleanText, slugify } from "@/lib/validation";

export async function GET(request: Request) {
  const drafts = new URL(request.url).searchParams.get("drafts") === "1" && await isAdmin();
  return NextResponse.json({ insights: listInsights(drafts) });
}

export async function POST(request: Request) {
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json().catch(() => ({}));
  const title = cleanText(body.title, 160);
  const excerpt = cleanText(body.excerpt, 500);
  const content = cleanText(body.content, 20000);
  if (!title || !excerpt || !content) return NextResponse.json({ error: "Le titre, le résumé et le contenu sont obligatoires." }, { status: 400 });
  const slug = slugify(cleanText(body.slug, 120) || title);
  if (!slug) return NextResponse.json({ error: "L'adresse web doit contenir au moins une lettre ou un chiffre." }, { status: 400 });
  const publishedAt = body.publishedAt ? cleanDate(body.publishedAt) : new Date().toISOString();
  if (!publishedAt) return NextResponse.json({ error: "La date de publication n'est pas valide." }, { status: 400 });
  const requestedImage = cleanText(body.image, 300);
  const image = validMedia(requestedImage, "image") ? requestedImage : "/images/ai-security-matrix.png";
  try {
    const insight = createInsight({
      slug, title, excerpt, content,
      category: cleanText(body.category, 80) || "Intelligence",
      image,
      published: body.published ? 1 : 0,
      publishedAt,
    });
    return NextResponse.json({ insight }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    if (message.includes("UNIQUE constraint failed")) return NextResponse.json({ error: "Une autre publication utilise déjà cette adresse web." }, { status: 409 });
    return NextResponse.json({ error: "La publication n'a pas pu être enregistrée. Réessayez." }, { status: 503 });
  }
}
