import type { Metadata } from "next";
import { AboutPage } from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About Us",
  alternates: { canonical: "/about" },
  description:
    "25+ years of technology experience, bridging Africa and America through unyielding architectural intelligence, secure infrastructure, and agentic AI.",
};

export default function Page() {
  return <AboutPage />;
}
