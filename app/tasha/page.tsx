import type { Metadata } from "next";
import { TashaPage } from "@/components/TashaPage";

export const metadata: Metadata = {
  title: "TASHA: Multi-Agent AI for Enterprises",
  alternates: { canonical: "/tasha" },
  description:
    "Discover TASHA, LinuZvision's proprietary multi-agent AI system for secure orchestration, coordinated tasks, and governed enterprise workflows.",
  keywords: [
    "TASHA",
    "autonomous intelligence",
    "agentic AI",
    "multi-agent orchestration",
    "enterprise AI governance",
    "proprietary AI system",
    "Africa America AI corridor",
  ],
  openGraph: {
    title: "TASHA: Multi-Agent AI for Enterprises | LinuZvision",
    description:
      "Proprietary autonomous intelligence engine for secure, multi-agent orchestration and governed enterprise workflows.",
    url: "/tasha",
    images: [
      {
        url: "/images/tasha-multi-agent-system.jpeg",
        width: 1376,
        height: 768,
        alt: "TASHA Multi-Agent Autonomous Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TASHA: Multi-Agent AI for Enterprises | LinuZvision",
    description:
      "Proprietary autonomous intelligence engine for multi-agent orchestration and governed enterprise workflows.",
    images: ["/images/tasha-multi-agent-system.jpeg"],
  },
};

export default function Page() {
  return <TashaPage />;
}
