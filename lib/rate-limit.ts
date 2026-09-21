import { consumeRateLimit } from "@/lib/db";

export function allowRequest(key: string, limit: number, windowMs: number) {
  return consumeRateLimit(key, limit, windowMs);
}

export function requestAddress(request: Request) {
  return request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || "local";
}
