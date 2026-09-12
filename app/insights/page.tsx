import type { Metadata } from "next";
import { InsightsPage } from "@/components/InsightsPage";
import { listInsights } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Insights",
  description: "Strategic perspectives on artificial intelligence, autonomous systems, and global infrastructure.",
  keywords: [
    "AI insights",
    "autonomous systems analysis",
    "datacenter strategy",
    "cloud infrastructure perspectives",
    "LinuZvision insights",
    "technology corridor Africa America",
  ],
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights | LinuZvision",
    description: "Strategic perspectives on artificial intelligence, autonomous systems, and global infrastructure.",
    url: "/insights",
    type: "website",
    images: [
      {
        url: "/images/human-machine-synergy.png",
        width: 1200,
        height: 630,
        alt: "LinuZvision Insights & Engineering Perspectives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights | LinuZvision",
    description: "Strategic perspectives on artificial intelligence, autonomous systems, and global infrastructure.",
    images: ["/images/human-machine-synergy.png"],
  },
};

export default function Page() {
  return <InsightsPage insights={listInsights(false)} />;
}
