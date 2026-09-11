import type { Metadata } from "next";
import { TashaPage } from "@/components/TashaPage";

export const metadata: Metadata = {
  title: "TASHA Autonomous Intelligence",
  alternates: { canonical: "/tasha" },
  description: "Discover TASHA, LinuZvision's autonomous intelligence system for governed business workflows.",
};

export default function Page() {
  return <TashaPage />;
}
