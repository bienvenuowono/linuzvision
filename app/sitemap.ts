import type { MetadataRoute } from "next";
import { listInsights } from "@/lib/db";

export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const routes = ["", "/tasha", "/solutions", "/services", "/cloud", "/cybersecurity", "/training", "/about", "/insights", "/contact"];
  return [...routes.map((route) => ({ url: `${site}${route}`, lastModified: new Date(), changeFrequency: route === "/insights" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : .8 })), ...listInsights(false).map((item) => ({ url: `${site}/insights/${item.slug}`, lastModified: new Date(item.updatedAt), changeFrequency: "monthly" as const, priority: .7 }))];
}
