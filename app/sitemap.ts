import type { MetadataRoute } from "next";
import { listInsights } from "@/lib/db";

export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://linuzvision.com";
  const routes = [
    { path: "", changeFrequency: "daily" as const, priority: 1.0 },
    { path: "/tasha", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/solutions", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/datacenter", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/cloud", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/cybersecurity", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/services", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/training", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/insights", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const staticEntries = routes.map((route) => ({
    url: `${site}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const insightEntries = listInsights(false).map((item) => ({
    url: `${site}/insights/${item.slug}`,
    lastModified: new Date(item.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...insightEntries];
}
