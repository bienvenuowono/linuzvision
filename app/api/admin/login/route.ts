import { NextResponse } from "next/server";
import { createSessionToken, SESSION_COOKIE, sessionMaxAge, validAdminCredentials } from "@/lib/auth";
import { allowRequest, requestAddress } from "@/lib/rate-limit";
import { isDatabaseAvailable } from "@/lib/db";

export async function POST(request: Request) {
  if (!isDatabaseAvailable()) return NextResponse.json({ error: "Persistent database configuration is unavailable." }, { status: 503 });
  if (!allowRequest(`login:${requestAddress(request)}`, 8, 15 * 60 * 1000)) return NextResponse.json({ error: "Too many attempts. Try again later." }, { status: 429 });
  const body = await request.json().catch(() => ({}));
  if (!process.env.ADMIN_SESSION_SECRET) return NextResponse.json({ error: "Admin session configuration is missing." }, { status: 503 });
  const admin = validAdminCredentials(String(body.email || ""), String(body.password || ""));
  if (!admin) {
    return NextResponse.json({ error: "Invalid credentials or missing admin configuration." }, { status: 401 });
  }
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, createSessionToken(admin.id, admin.email), { httpOnly: true, sameSite: "strict", secure: process.env.NODE_ENV === "production", path: "/", maxAge: sessionMaxAge });
  return response;
}
