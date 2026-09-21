import type { Metadata } from "next";
import { CloudPage } from "../../components/CloudPage";

export const metadata: Metadata = {
  title: "Cloud Infrastructure, Migration & Architecture",
  alternates: { canonical: "/cloud" },
  description:
    "Secure cloud infrastructure, migration, multi-cloud architecture, disaster recovery, and resilient platforms for mission-critical business operations.",
  keywords: [
    "cloud computing",
    "cloud architecture",
    "multi-cloud deployment",
    "cloud migration",
    "cloud disaster recovery",
    "sovereign cloud infrastructure",
  ],
  openGraph: {
    title: "Cloud Infrastructure, Migration & Architecture | LinuZvision",
    description:
      "Secure, resilient multi-cloud architecture and sovereign infrastructure for mission-critical operations.",
    url: "/cloud",
    images: [
      {
        url: "/images/cloud-topology.png",
        width: 1536,
        height: 1024,
        alt: "LinuZvision Cloud Topology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Infrastructure, Migration & Architecture | LinuZvision",
    description:
      "Secure, resilient multi-cloud architecture and sovereign infrastructure.",
    images: ["/images/cloud-topology.png"],
  },
};

export default function Page() { return <CloudPage />; }
