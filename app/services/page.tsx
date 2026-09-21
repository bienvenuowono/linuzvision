import type { Metadata } from "next";
import { ServicesPage } from "../../components/ServicesPage";

export const metadata: Metadata = {
  title: "Technology Services & Managed IT Solutions",
  alternates: { canonical: "/services" },
  description:
    "Managed IT services, systems integration, infrastructure engineering, cloud architecture, cybersecurity, and intelligent automation for enterprise operations.",
  keywords: [
    "technology services",
    "IT infrastructure",
    "managed IT services",
    "systems integration",
    "enterprise IT consulting",
    "network engineering",
  ],
  openGraph: {
    title: "Technology Services & Managed IT Solutions | LinuZvision",
    description:
      "Integrated technology services spanning infrastructure, automation, cloud, cybersecurity, and operational support.",
    url: "/services",
    images: [
      {
        url: "/images/fiber-network.png",
        width: 1376,
        height: 768,
        alt: "LinuZvision Technology Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology Services & Managed IT Solutions | LinuZvision",
    description:
      "Integrated technology services spanning infrastructure, automation, cloud, and cybersecurity.",
    images: ["/images/fiber-network.png"],
  },
};

export default function Page() {
  return <ServicesPage />;
}
