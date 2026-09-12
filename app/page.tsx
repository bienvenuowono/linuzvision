import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { listInsights } from "@/lib/db";

export const metadata: Metadata = {
  title: "Sovereign AI, Cloud Architecture & Mission-Critical Infrastructure",
  description:
    "LinuZvision designs and engineers sovereign AI systems (TASHA), turnkey datacenters, resilient multi-region cloud, and zero-trust cybersecurity for enterprise operations across America and Africa.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sovereign AI, Cloud Architecture & Mission-Critical Infrastructure | LinuZvision",
    description:
      "LinuZvision designs and engineers sovereign AI systems (TASHA), turnkey datacenters, resilient multi-region cloud, and zero-trust cybersecurity for enterprise operations.",
    url: "/",
    images: [
      {
        url: "/images/server-architecture.png",
        width: 1200,
        height: 675,
        alt: "LinuZvision Server Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign AI, Cloud Architecture & Mission-Critical Infrastructure | LinuZvision",
    description:
      "LinuZvision designs and engineers sovereign AI systems (TASHA), turnkey datacenters, resilient multi-region cloud, and zero-trust cybersecurity.",
    images: ["/images/server-architecture.png"],
  },
};
export const dynamic = "force-dynamic";

export default function Page() {
  return <HomePage insights={listInsights(false).slice(0, 3)} />;
}
