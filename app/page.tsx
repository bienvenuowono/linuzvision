import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { listInsights } from "@/lib/db";

export const metadata: Metadata = {
  title: { absolute: "AI Automation, Cloud & Cybersecurity | LinuZvision" },
  description:
    "LinuZvision designs, builds, maintains, and secures enterprise AI automation, cloud infrastructure, datacenters, and cybersecurity across America and Africa.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI Automation, Cloud & Cybersecurity | LinuZvision",
    description:
      "Enterprise AI automation, cloud infrastructure, datacenter engineering, and zero-trust cybersecurity designed by LinuZvision.",
    url: "/",
    images: [
      {
        url: "/images/server-architecture.png",
        width: 1376,
        height: 768,
        alt: "LinuZvision Server Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation, Cloud & Cybersecurity | LinuZvision",
    description:
      "Enterprise AI automation, cloud infrastructure, datacenter engineering, and cybersecurity designed by LinuZvision.",
    images: ["/images/server-architecture.png"],
  },
};
export const dynamic = "force-dynamic";

export default function Page() {
  return <HomePage insights={listInsights(false).slice(0, 3)} />;
}
