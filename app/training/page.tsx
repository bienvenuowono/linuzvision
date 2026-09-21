import type { Metadata } from "next";
import { TrainingPage } from "../../components/TrainingPage";
export const metadata: Metadata = {
  title: "Enterprise IT Support & Technology Training",
  alternates: { canonical: "/training" },
  description:
    "Practical enterprise IT support, technical workforce training, and skills development built to strengthen teams, systems, and institutional capability.",
  keywords: [
    "IT support",
    "technology training",
    "workforce development",
    "technical certifications",
    "enterprise IT training",
    "systems administration",
  ],
  openGraph: {
    title: "Enterprise IT Support & Technology Training | LinuZvision",
    description:
      "Practical enterprise IT support and technology training built to strengthen teams and institutional capability.",
    url: "/training",
    images: [
      {
        url: "/images/human-machine-synergy.png",
        width: 1376,
        height: 768,
        alt: "Enterprise IT Support and Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise IT Support & Technology Training | LinuZvision",
    description:
      "Practical enterprise IT support and technology training built to strengthen teams.",
    images: ["/images/human-machine-synergy.png"],
  },
};
export default function Page() { return <TrainingPage />; }
