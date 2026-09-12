import type { Metadata } from "next";
import { AboutPage } from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About Us — Africa ↔ America Technology Bridge",
  alternates: { canonical: "/about" },
  description:
    "25+ years of technology experience bridging Africa and America through unyielding architectural intelligence, critical infrastructure, and sovereign agentic AI.",
  keywords: [
    "About LinuZvision",
    "Africa America technology corridor",
    "Joseph Bienvenu Owono Abega",
    "technology leadership",
    "enterprise computing history",
    "international technology bridge",
  ],
  openGraph: {
    title: "About Us — Africa ↔ America Technology Bridge | LinuZvision",
    description:
      "25+ years of technology experience bridging Africa and America through architectural intelligence and sovereign AI.",
    url: "/about",
    images: [
      {
        url: "/images/about-global-network-map.png",
        width: 1200,
        height: 675,
        alt: "LinuZvision Africa-America Global Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Africa ↔ America Technology Bridge | LinuZvision",
    description:
      "25+ years of technology experience bridging Africa and America through architectural intelligence.",
    images: ["/images/about-global-network-map.png"],
  },
};

export default function Page() {
  return <AboutPage />;
}
