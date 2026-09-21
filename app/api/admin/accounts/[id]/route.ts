import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { deleteAdminAccount } from "@/lib/db";

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const id = Number((await params).id);
  if (!Number.isInteger(id) || id <= 0) return NextResponse.json({ error: "Invalid account." }, { status: 400 });
  if (id === session.adminId) return NextResponse.json({ error: "You cannot delete the account currently in use." }, { status: 409 });
  try {
    return deleteAdminAccount(id)
      ? NextResponse.json({ ok: true })
      : NextResponse.json({ error: "The last administrator cannot be deleted." }, { status: 409 });
  } catch {
    return NextResponse.json({ error: "The account could not be deleted." }, { status: 500 });
  }
}
