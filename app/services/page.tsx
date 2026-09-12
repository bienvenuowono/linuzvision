import type { Metadata } from "next";
import { ServicesPage } from "../../components/ServicesPage";

export const metadata: Metadata = {
  title: "Technology Services & Infrastructure Engineering",
  alternates: { canonical: "/services" },
  description:
    "Integrated technology services spanning critical infrastructure, intelligent automation, cloud architecture, cybersecurity, and managed enterprise operations.",
  keywords: [
    "technology services",
    "IT infrastructure",
    "managed IT services",
    "systems integration",
    "enterprise IT consulting",
    "network engineering",
  ],
  openGraph: {
    title: "Technology Services & Infrastructure Engineering | LinuZvision",
    description:
      "Integrated technology services spanning infrastructure, automation, cloud, cybersecurity, and operational support.",
    url: "/services",
    images: [
      {
        url: "/images/fiber-network.png",
        width: 1200,
        height: 675,
        alt: "LinuZvision Technology Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology Services & Infrastructure Engineering | LinuZvision",
    description:
      "Integrated technology services spanning infrastructure, automation, cloud, and cybersecurity.",
    images: ["/images/fiber-network.png"],
  },
};

export default function Page() {
  return <ServicesPage />;
}
