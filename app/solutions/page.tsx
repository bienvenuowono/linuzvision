import type { Metadata } from "next";
import { SolutionsPage } from "@/components/SolutionsPage";

export const metadata: Metadata = {
  title: "AI Solutions & Automation",
  alternates: { canonical: "/solutions" },
  description: "Applied AI and intelligent automation for customer service, CRM, financial workflows and connected business operations.",
};

export default function Page() { return <SolutionsPage />; }
