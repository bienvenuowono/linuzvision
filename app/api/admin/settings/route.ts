import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { parseSettings, refreshPublicSite } from "@/lib/admin-input";
import { saveSiteSettings } from "@/lib/content";

export async function PUT(request: Request) {
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = parseSettings(await request.json().catch(() => ({})));
  if (parsed.error !== undefined) return NextResponse.json({ error: parsed.error }, { status: 400 });
  try {
    const settings = saveSiteSettings(parsed.input);
    refreshPublicSite();
    return NextResponse.json({ settings });
  } catch {
    return NextResponse.json({ error: "Les coordonnées n'ont pas pu être enregistrées. Réessayez." }, { status: 503 });
  }
}
