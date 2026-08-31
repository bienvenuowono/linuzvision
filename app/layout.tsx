import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: "LinuZvision | AI, Cloud & Cybersecurity Solutions", template: "%s | LinuZvision" },
  description:
    "LinuZvision builds intelligent AI, automation and technology solutions for businesses across Africa and America.",
  applicationName: "LinuZvision",
  keywords: ["artificial intelligence", "AI automation", "cloud computing", "cybersecurity", "IT services", "technology training", "Africa", "America"],
  authors: [{ name: "LinuZvision, LLC" }],
  creator: "LinuZvision, LLC",
  publisher: "LinuZvision, LLC",
  openGraph: {
    type: "website", locale: "en_US", siteName: "LinuZvision",
    title: "LinuZvision | AI, Cloud & Cybersecurity Solutions",
    description: "Intelligent AI, automation and technology infrastructure for businesses across Africa and America.",
    images: [{ url: "/images/linuzvision-logo.jpg", width: 1200, height: 430, alt: "LinuZvision LLC" }],
  },
  twitter: { card: "summary_large_image", title: "LinuZvision", description: "AI, automation and technology infrastructure across Africa and America.", images: ["/images/linuzvision-logo.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = { "@context": "https://schema.org", "@type": "Organization", name: "LinuZvision, LLC", url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000", logo: "/images/linuzvision-logo.jpg", email: "linuzvisionllc@gmail.com", telephone: "+1-443-248-8520", areaServed: ["Africa", "United States"] };
  return (
    <html lang="en">
      <body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} /></body>
    </html>
  );
}
