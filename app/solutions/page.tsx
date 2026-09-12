import type { Metadata } from "next";
import { SolutionsPage } from "@/components/SolutionsPage";

export const metadata: Metadata = {
  title: "AI Solutions & Enterprise Automation",
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
    title: "AI Solutions & Enterprise Automation | LinuZvision",
    description:
      "Applied AI solutions and intelligent automation for enterprise operations across Africa and America.",
    url: "/solutions",
    images: [
      {
        url: "/images/human-machine-synergy.png",
        width: 1200,
        height: 675,
        alt: "Human-Machine Intelligence Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions & Enterprise Automation | LinuZvision",
    description:
      "Applied AI solutions and intelligent automation for enterprise operations.",
    images: ["/images/human-machine-synergy.png"],
  },
};

export default function Page() { return <SolutionsPage />; }
