import type { Metadata } from "next";
import { CybersecurityPage } from "../../components/CybersecurityPage";
export const metadata: Metadata = {
  title: "Zero Trust Cybersecurity & IT Resilience",
  alternates: { canonical: "/cybersecurity" },
  description:
    "Zero-trust cybersecurity architecture, SOC operations, threat intelligence, and operational resilience engineered by LinuZvision.",
  keywords: [
    "cybersecurity",
    "zero trust architecture",
    "threat intelligence",
    "SOC operations",
    "operational resilience",
    "data security",
    "enterprise defense",
  ],
  openGraph: {
    title: "Zero Trust Cybersecurity & IT Resilience | LinuZvision",
    description:
      "Zero-trust cybersecurity architecture, threat intelligence, and operational resilience engineered by LinuZvision.",
    url: "/cybersecurity",
    images: [
      {
        url: "/images/zero-trust-datacenter.png",
        width: 1376,
        height: 768,
        alt: "LinuZvision Zero Trust Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero Trust Cybersecurity & IT Resilience | LinuZvision",
    description:
      "Zero-trust cybersecurity architecture, threat intelligence, and operational resilience.",
    images: ["/images/zero-trust-datacenter.png"],
  },
};
export default function Page() { return <CybersecurityPage />; }
