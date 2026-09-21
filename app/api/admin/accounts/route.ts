import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { createAdminAccount, listAdminAccounts } from "@/lib/db";
import { allowRequest, requestAddress } from "@/lib/rate-limit";
import { cleanText, validEmail } from "@/lib/validation";

export async function GET() {
  if (!await getAdminSession()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ accounts: listAdminAccounts() });
}

export async function POST(request: Request) {
  if (!await getAdminSession()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!allowRequest(`admin-account:${requestAddress(request)}`, 10, 60 * 60 * 1000)) {
    return NextResponse.json({ error: "Too many account changes. Try again later." }, { status: 429 });
  }
  const body = await request.json().catch(() => ({}));
  const email = cleanText(body.email, 180).toLowerCase();
  const displayName = cleanText(body.displayName, 120);
  const password = typeof body.password === "string" ? body.password : "";
  if (!validEmail(email) || !displayName || password.length < 12 || password.length > 128) {
    return NextResponse.json({ error: "Provide a valid email, a name, and a password of 12 to 128 characters." }, { status: 400 });
  }
  try {
    return NextResponse.json({ account: createAdminAccount(email, displayName, password) }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    if (message.includes("UNIQUE constraint failed")) return NextResponse.json({ error: "This email already exists." }, { status: 409 });
    return NextResponse.json({ error: "The account could not be stored. Please try again." }, { status: 503 });
  }
}
