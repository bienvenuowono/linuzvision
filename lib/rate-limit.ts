import { consumeRateLimit } from "@/lib/db";

export function allowRequest(key: string, limit: number, windowMs: number) {
  return consumeRateLimit(key, limit, windowMs);
}

// Number of reverse proxies in front of the app that append to X-Forwarded-For.
// The client controls the left side of that header, so only the entry written by
// the outermost trusted proxy (counted from the right) identifies the visitor.
function trustedProxyHops() {
  const hops = Number(process.env.TRUSTED_PROXY_HOPS ?? 1);
  return Number.isInteger(hops) && hops >= 1 ? hops : 1;
}

export function requestAddress(request: Request) {
  // Vercel overwrites this header at its edge; elsewhere a client could forge it.
  if (process.env.VERCEL) {
    const vercel = request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim();
    if (vercel) return vercel;
  }
  const chain = request.headers.get("x-forwarded-for")?.split(",").map((entry) => entry.trim()).filter(Boolean) ?? [];
  if (chain.length) return chain[Math.max(0, chain.length - trustedProxyHops())];
  return request.headers.get("x-real-ip")?.trim() || "local";
}
