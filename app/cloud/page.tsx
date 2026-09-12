import type { Metadata } from "next";
import { CloudPage } from "../../components/CloudPage";

export const metadata: Metadata = {
  title: "Cloud Computing & Distributed Architecture",
  alternates: { canonical: "/cloud" },
  description:
    "Secure, resilient multi-cloud architecture, high-availability migration, and sovereign infrastructure designed for mission-critical business operations.",
  keywords: [
    "cloud computing",
    "cloud architecture",
    "multi-cloud deployment",
    "cloud migration",
    "cloud disaster recovery",
    "sovereign cloud infrastructure",
  ],
  openGraph: {
    title: "Cloud Computing & Distributed Architecture | LinuZvision",
    description:
      "Secure, resilient multi-cloud architecture and sovereign infrastructure for mission-critical operations.",
    url: "/cloud",
    images: [
      {
        url: "/images/cloud-topology.png",
        width: 1200,
        height: 675,
        alt: "LinuZvision Cloud Topology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Computing & Distributed Architecture | LinuZvision",
    description:
      "Secure, resilient multi-cloud architecture and sovereign infrastructure.",
    images: ["/images/cloud-topology.png"],
  },
};

export default function Page() { return <CloudPage />; }
