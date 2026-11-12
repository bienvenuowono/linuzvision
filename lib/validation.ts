import fs from "node:fs";
import path from "node:path";

export function cleanText(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().replace(/[<>]/g, "").slice(0, max) : "";
}

export function slugify(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 100);
}

// Accepts "2026-10-27" or a full ISO date; returns a normalized ISO string, or null when unreadable.
export function cleanDate(value: unknown) {
  if (typeof value !== "string" || !value.trim() || value.length > 40) return null;
  const date = new Date(value.trim());
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

export function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validPublicImage(value: string) {
  if (!/^\/images\/[a-zA-Z0-9._/-]+\.(png|jpe?g|webp|avif)$/.test(value) || value.includes("..")) return false;
  const publicRoot = path.resolve(process.cwd(), "public");
  const resolved = path.resolve(publicRoot, value.slice(1));
  return resolved.startsWith(`${publicRoot}${path.sep}`) && fs.existsSync(resolved) && fs.statSync(resolved).isFile();
}
