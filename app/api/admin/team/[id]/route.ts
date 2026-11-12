import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { parseTeamMember, refreshPublicSite, rowId } from "@/lib/admin-input";
import { deleteTeamMember, updateTeamMember } from "@/lib/content";

type Context = { params: Promise<{ id: string }> };

export async function PUT(request: Request, { params }: Context) {
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const id = rowId((await params).id);
  if (!id) return NextResponse.json({ error: "Cet élément n'existe plus. Rechargez la page pour voir la liste à jour." }, { status: 404 });
  const parsed = parseTeamMember(await request.json().catch(() => ({})));
  if (parsed.error !== undefined) return NextResponse.json({ error: parsed.error }, { status: 400 });
  try {
    const member = updateTeamMember(id, parsed.input);
    if (!member) return NextResponse.json({ error: "Cet élément n'existe plus. Rechargez la page pour voir la liste à jour." }, { status: 404 });
    refreshPublicSite();
    return NextResponse.json({ member });
  } catch {
    return NextResponse.json({ error: "La fiche n'a pas pu être enregistrée. Réessayez." }, { status: 503 });
  }
}

export async function DELETE(_: Request, { params }: Context) {
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const id = rowId((await params).id);
  try {
    if (!id || !deleteTeamMember(id)) return NextResponse.json({ error: "Cet élément n'existe plus. Rechargez la page pour voir la liste à jour." }, { status: 404 });
    refreshPublicSite();
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "La fiche n'a pas pu être supprimée." }, { status: 503 });
  }
}
