import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { createInsight, listInsights } from "@/lib/db";
import { cleanText, slugify, validPublicImage } from "@/lib/validation";

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
  if (!title || !excerpt || !content) return NextResponse.json({ error: "Title, excerpt and content are required." }, { status: 400 });
  const requestedImage = cleanText(body.image, 300);
  const image = validPublicImage(requestedImage) ? requestedImage : "/images/ai-security-matrix.png";
  try {
    const insight = createInsight({
      slug: slugify(cleanText(body.slug, 120) || title), title, excerpt, content,
      category: cleanText(body.category, 80) || "Intelligence",
      image,
      published: body.published ? 1 : 0,
      publishedAt: body.publishedAt || new Date().toISOString(),
    });
    return NextResponse.json({ insight }, { status: 201 });
  } catch { return NextResponse.json({ error: "The slug must be unique." }, { status: 409 }); }
}
