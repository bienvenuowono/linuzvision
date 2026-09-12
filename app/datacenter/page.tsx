import type { Metadata } from "next";
import { DatacenterPage } from "@/components/DatacenterPage";

export const metadata: Metadata = {
  title: "Datacenter Engineering & Critical Infrastructure",
  alternates: { canonical: "/datacenter" },
  description:
    "Turnkey datacenter engineering, high-density server deployment, precision cooling, power redundancy, and mission-critical facility operations across America and Africa.",
  keywords: [
    "datacenter engineering",
    "critical infrastructure",
    "server architecture",
    "tier IV datacenter",
    "precision cooling",
    "power redundancy",
    "high-density compute",
  ],
  openGraph: {
    title: "Datacenter Engineering & Critical Infrastructure | LinuZvision",
    description:
      "Turnkey datacenter engineering, high-density server deployment, precision cooling, power redundancy, and mission-critical facility operations.",
    url: "/datacenter",
    images: [
      {
        url: "/images/server-architecture.png",
        width: 1200,
        height: 675,
        alt: "LinuZvision Datacenter Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Datacenter Engineering & Critical Infrastructure | LinuZvision",
    description:
      "Turnkey datacenter engineering, high-density server deployment, and mission-critical facility operations.",
    images: ["/images/server-architecture.png"],
  },
};

export default function Page() {
  return <DatacenterPage />;
}
