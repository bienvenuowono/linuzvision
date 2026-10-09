import type { Metadata } from "next";
import { CourseDetailPage } from "@/components/CourseDetailPage";

export const metadata: Metadata = {
  title: "AI Essentials for Organizations",
  description: "A 13-module American English course on responsible AI for institutions, government, education, and business.",
  alternates: { canonical: "/training/ai-essentials" },
  openGraph: {
    title: "AI Essentials for Organizations | LinuZvision",
    description: "Learn how AI works, where it creates value, and how organizations can adopt it responsibly.",
    url: "/training/ai-essentials",
    images: [{ url: "/images/human-machine-synergy.png", width: 1376, height: 768, alt: "AI Essentials for Organizations" }],
  },
};

export default function Page() {
  return <CourseDetailPage />;
}
