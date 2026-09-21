import crypto from "node:crypto";
import { cookies } from "next/headers";
import { authenticateAdmin, getAdminAccount } from "@/lib/db";

export const SESSION_COOKIE = "linuzvision_admin";
const MAX_AGE = 60 * 60 * 8;

function secret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || "";
}

function signature(value: string) {
  return crypto.createHmac("sha256", secret()).update(value).digest("hex");
}

type AdminSession = { adminId: number; email: string; exp: number };

export function createSessionToken(adminId: number, email: string) {
  const payload = Buffer.from(JSON.stringify({ adminId, email, exp: Date.now() + MAX_AGE * 1000 })).toString("base64url");
  return `${payload}.${signature(payload)}`;
}

export function verifySessionToken(token?: string) {
  if (!token || !secret()) return false;
  const [payload, suppliedSignature] = token.split(".");
  if (!payload || !suppliedSignature) return false;
  const expected = signature(payload);
  if (suppliedSignature.length !== expected.length || !crypto.timingSafeEqual(Buffer.from(suppliedSignature), Buffer.from(expected))) return false;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString()) as AdminSession;
    if (!Number.isInteger(data.adminId) || !data.email || data.exp <= Date.now()) return undefined;
    return getAdminAccount(data.adminId) ? data : undefined;
  } catch { return undefined; }
}

export async function getAdminSession() {
  return verifySessionToken((await cookies()).get(SESSION_COOKIE)?.value);
}

export async function isAdmin() {
  return Boolean(await getAdminSession());
}

export function validAdminCredentials(email: string, password: string) {
  return authenticateAdmin(email, password);
}

export const sessionMaxAge = MAX_AGE;
