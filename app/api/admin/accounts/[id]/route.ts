import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { deleteAdminAccount } from "@/lib/db";

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const id = Number((await params).id);
  if (!Number.isInteger(id) || id <= 0) return NextResponse.json({ error: "Compte invalide." }, { status: 400 });
  if (id === session.adminId) return NextResponse.json({ error: "Vous ne pouvez pas supprimer le compte avec lequel vous êtes connecté." }, { status: 409 });
  try {
    return deleteAdminAccount(id)
      ? NextResponse.json({ ok: true })
      : NextResponse.json({ error: "Le dernier administrateur ne peut pas être supprimé." }, { status: 409 });
  } catch {
    return NextResponse.json({ error: "Le compte n'a pas pu être supprimé." }, { status: 500 });
  }
}
