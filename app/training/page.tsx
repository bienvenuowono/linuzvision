import type { Metadata } from "next";
import { TrainingPage } from "../../components/TrainingPage";
export const metadata: Metadata = {
  title: "AI Training for Organizations",
  alternates: { canonical: "/training" },
  description:
    "Practical AI training for institutions, government, education, and business, delivered through complete modular courses in American English.",
  keywords: [
    "AI training",
    "responsible AI course",
    "AI for government",
    "AI for education",
    "enterprise AI training",
    "organizational AI adoption",
  ],
  openGraph: {
    title: "AI Training for Organizations | LinuZvision",
    description:
      "Complete modular AI learning for institutions, government, education, and business.",
    url: "/training",
    images: [
      {
        url: "/images/human-machine-synergy.png",
        width: 1376,
        height: 768,
        alt: "AI Training for Organizations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Training for Organizations | LinuZvision",
    description:
      "Complete modular AI learning for institutions, government, education, and business.",
    images: ["/images/human-machine-synergy.png"],
  },
};
export default function Page() { return <TrainingPage />; }
