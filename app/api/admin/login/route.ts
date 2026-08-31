import { NextResponse } from "next/server";
import { createSessionToken, SESSION_COOKIE, sessionMaxAge, validAdminCredentials } from "@/lib/auth";
import { allowRequest, requestAddress } from "@/lib/rate-limit";

export async function POST(request: Request) {
  if (!allowRequest(`login:${requestAddress(request)}`, 8, 15 * 60 * 1000)) return NextResponse.json({ error: "Too many attempts. Try again later." }, { status: 429 });
  const body = await request.json().catch(() => ({}));
  if (!validAdminCredentials(String(body.email || ""), String(body.password || ""))) {
    return NextResponse.json({ error: "Invalid credentials or missing admin configuration." }, { status: 401 });
  }
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, createSessionToken(), { httpOnly: true, sameSite: "strict", secure: process.env.NODE_ENV === "production", path: "/", maxAge: sessionMaxAge });
  return response;
}
