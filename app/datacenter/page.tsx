import type { Metadata } from "next";
import { DatacenterPage } from "@/components/DatacenterPage";

export const metadata: Metadata = {
  title: "Datacenter Engineering & Critical Infrastructure | LinuZvision",
  alternates: { canonical: "/datacenter" },
  description:
    "Turnkey datacenter engineering, high-density server deployment, precision cooling, power redundancy, and mission-critical facility operations across America and Africa.",
};

export default function Page() {
  return <DatacenterPage />;
}
