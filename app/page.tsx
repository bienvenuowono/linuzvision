import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { listInsights } from "@/lib/db";

export const metadata: Metadata = { alternates: { canonical: "/" } };
export const dynamic = "force-dynamic";

export default function Page() {
  return <HomePage insights={listInsights(false).slice(0, 3)} />;
}
