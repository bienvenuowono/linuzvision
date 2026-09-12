import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with LinuZvision to discuss enterprise AI automation, sovereign cloud architecture, cybersecurity, and datacenter engineering.",
  keywords: [
    "contact LinuZvision",
    "enterprise AI consultation",
    "datacenter engineering inquiry",
    "cloud infrastructure advisory",
    "TASHA deployment contact",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | LinuZvision",
    description: "Connect with LinuZvision to discuss enterprise AI automation, sovereign cloud architecture, cybersecurity, and datacenter engineering.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/images/server-architecture.png",
        width: 1200,
        height: 630,
        alt: "Contact LinuZvision Engineering Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | LinuZvision",
    description: "Connect with LinuZvision to discuss enterprise AI automation, sovereign cloud architecture, cybersecurity, and datacenter engineering.",
    images: ["/images/server-architecture.png"],
  },
};

export default function Page() {
  return <ContactPage />;
}
