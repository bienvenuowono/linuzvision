import type { Metadata } from "next";
import { SolutionsPage } from "@/components/SolutionsPage";

export const metadata: Metadata = {
  title: "Enterprise AI Solutions & Business Automation",
  alternates: { canonical: "/solutions" },
  description:
    "Applied AI solutions and intelligent automation for customer service, CRM, financial workflows, and connected business operations across Africa and America.",
  keywords: [
    "AI solutions",
    "enterprise automation",
    "intelligent workflows",
    "CRM automation",
    "financial AI automation",
    "operational intelligence",
  ],
  openGraph: {
    title: "Enterprise AI Solutions & Business Automation | LinuZvision",
    description:
      "Applied AI solutions and intelligent automation for enterprise operations across Africa and America.",
    url: "/solutions",
    images: [
      {
        url: "/images/human-machine-synergy.png",
        width: 1376,
        height: 768,
        alt: "Human-Machine Intelligence Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise AI Solutions & Business Automation | LinuZvision",
    description:
      "Applied AI solutions and intelligent automation for enterprise operations.",
    images: ["/images/human-machine-synergy.png"],
  },
};

export default function Page() { return <SolutionsPage />; }
