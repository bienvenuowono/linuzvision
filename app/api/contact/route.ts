import { NextResponse } from "next/server";
import { createInquiry } from "@/lib/db";
import { cleanText, validEmail } from "@/lib/validation";
import { allowRequest, requestAddress } from "@/lib/rate-limit";

export async function POST(request: Request) {
  if (!allowRequest(`contact:${requestAddress(request)}`, 5, 60 * 60 * 1000)) return NextResponse.json({ error: "Too many requests. Try again later." }, { status: 429 });
  const body = await request.json().catch(() => ({}));
  const fullName = cleanText(body.fullName, 120), email = cleanText(body.email, 180), subject = cleanText(body.subject, 180), message = cleanText(body.message, 5000);
  if (!fullName || !validEmail(email) || !subject || !message) return NextResponse.json({ error: "Please provide a valid name, email, subject and message." }, { status: 400 });
  const id = createInquiry({ fullName, email, subject, message });
  return NextResponse.json({ id, message: "Your request has been recorded." }, { status: 201 });
}
