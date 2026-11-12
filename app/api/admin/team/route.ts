import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { parseTeamMember, refreshPublicSite } from "@/lib/admin-input";
import { createTeamMember, listTeam, reorderTeam } from "@/lib/content";

export async function POST(request: Request) {
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = parseTeamMember(await request.json().catch(() => ({})));
  if (parsed.error !== undefined) return NextResponse.json({ error: parsed.error }, { status: 400 });
  try {
    const member = createTeamMember(parsed.input);
    refreshPublicSite();
    return NextResponse.json({ member }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "La fiche n'a pas pu être enregistrée. Réessayez." }, { status: 503 });
  }
}

// Saves a new display order: { ids: [3, 1, 2] }.
export async function PUT(request: Request) {
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json().catch(() => ({}));
  const ids: number[] = Array.isArray(body.ids) ? body.ids.filter((id: unknown) => Number.isInteger(id) && (id as number) > 0).slice(0, 200) : [];
  if (!ids.length) return NextResponse.json({ error: "Aucun ordre à enregistrer." }, { status: 400 });
  try {
    reorderTeam(ids);
    refreshPublicSite();
    return NextResponse.json({ team: listTeam(true) });
  } catch {
    return NextResponse.json({ error: "L'ordre n'a pas pu être enregistré. Réessayez." }, { status: 503 });
  }
}
