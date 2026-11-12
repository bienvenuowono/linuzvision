import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { parseCourse, refreshPublicSite } from "@/lib/admin-input";
import { createCourse, listCourses } from "@/lib/content";

export async function GET() {
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ courses: listCourses(true) });
}

export async function POST(request: Request) {
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = parseCourse(await request.json().catch(() => ({})));
  if (parsed.error !== undefined) return NextResponse.json({ error: parsed.error }, { status: 400 });
  try {
    const course = createCourse(parsed.input);
    refreshPublicSite();
    return NextResponse.json({ course }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    if (message.includes("UNIQUE constraint failed")) return NextResponse.json({ error: "Une autre formation utilise déjà cette adresse web." }, { status: 409 });
    return NextResponse.json({ error: "La formation n'a pas pu être enregistrée. Réessayez." }, { status: 503 });
  }
}
