import type { Metadata } from "next";
import { InsightsPage } from "@/components/InsightsPage";
import { listInsights } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Insights",
  alternates: { canonical: "/insights" },
  description: "Strategic perspectives on artificial intelligence, autonomous systems, and global infrastructure.",
};

export default function Page() {
  return <InsightsPage insights={listInsights(false)} />;
}
