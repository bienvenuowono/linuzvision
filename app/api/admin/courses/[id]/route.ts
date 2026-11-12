import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { parseCourse, refreshPublicSite, rowId } from "@/lib/admin-input";
import { deleteCourse, updateCourse } from "@/lib/content";

type Context = { params: Promise<{ id: string }> };

export async function PUT(request: Request, { params }: Context) {
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const id = rowId((await params).id);
  if (!id) return NextResponse.json({ error: "Cet élément n'existe plus. Rechargez la page pour voir la liste à jour." }, { status: 404 });
  const parsed = parseCourse(await request.json().catch(() => ({})));
  if (parsed.error !== undefined) return NextResponse.json({ error: parsed.error }, { status: 400 });
  try {
    const course = updateCourse(id, parsed.input);
    if (!course) return NextResponse.json({ error: "Cet élément n'existe plus. Rechargez la page pour voir la liste à jour." }, { status: 404 });
    refreshPublicSite();
    return NextResponse.json({ course });
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    if (message.includes("UNIQUE constraint failed")) return NextResponse.json({ error: "Une autre formation utilise déjà cette adresse web." }, { status: 409 });
    return NextResponse.json({ error: "La formation n'a pas pu être enregistrée. Réessayez." }, { status: 503 });
  }
}

export async function DELETE(_: Request, { params }: Context) {
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const id = rowId((await params).id);
  try {
    if (!id || !deleteCourse(id)) return NextResponse.json({ error: "Cet élément n'existe plus. Rechargez la page pour voir la liste à jour." }, { status: 404 });
    refreshPublicSite();
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "La formation n'a pas pu être supprimée." }, { status: 503 });
  }
}
