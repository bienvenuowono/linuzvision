import type { MetadataRoute } from "next";
import { listInsights } from "@/lib/db";

export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = (process.env.NEXT_PUBLIC_SITE_URL || "https://linuzvision.com").replace(/\/$/, "");
  const routes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0, image: "/images/server-architecture.png" },
    { path: "/tasha", changeFrequency: "monthly" as const, priority: 0.9, image: "/images/tasha-multi-agent-system.jpeg" },
    { path: "/solutions", changeFrequency: "monthly" as const, priority: 0.9, image: "/images/human-machine-synergy.png" },
    { path: "/datacenter", changeFrequency: "monthly" as const, priority: 0.9, image: "/images/server-architecture.png" },
    { path: "/cloud", changeFrequency: "monthly" as const, priority: 0.9, image: "/images/cloud-topology.png" },
    { path: "/cybersecurity", changeFrequency: "monthly" as const, priority: 0.9, image: "/images/zero-trust-datacenter.png" },
    { path: "/services", changeFrequency: "monthly" as const, priority: 0.8, image: "/images/fiber-network.png" },
    { path: "/training", changeFrequency: "monthly" as const, priority: 0.8, image: "/images/enterprise-training.png" },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.8, image: "/images/about-global-network-map.png" },
    { path: "/insights", changeFrequency: "weekly" as const, priority: 0.8, image: "/images/human-machine-synergy.png" },
    { path: "/contact", changeFrequency: "yearly" as const, priority: 0.7, image: "/images/server-architecture.png" },
  ];

  const staticEntries = routes.map((route) => ({
    url: `${site}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images: [`${site}${route.image}`],
  }));

  const insightEntries = listInsights(false).map((item) => ({
    url: `${site}/insights/${item.slug}`,
    lastModified: new Date(item.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: [item.image.startsWith("http") ? item.image : `${site}${item.image}`],
  }));

  return [...staticEntries, ...insightEntries];
}
