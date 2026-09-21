import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://linuzvision.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI Automation, Cloud & Cybersecurity | LinuZvision",
    template: "%s | LinuZvision",
  },
  description:
    "LinuZvision designs, builds, maintains, and secures enterprise AI automation, cloud infrastructure, datacenters, and cybersecurity across America and Africa.",
  applicationName: "LinuZvision",
  keywords: [
    "LinuZvision",
    "TASHA AI",
    "sovereign artificial intelligence",
    "agentic AI",
    "datacenter engineering",
    "critical infrastructure",
    "cloud computing architecture",
    "zero-trust cybersecurity",
    "IT support and training",
    "enterprise automation",
    "Africa America technology corridor",
    "mission-critical facilities",
  ],
  authors: [{ name: "LinuZvision, LLC" }],
  creator: "LinuZvision, LLC",
  publisher: "LinuZvision, LLC",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "LinuZvision",
    title: "AI Automation, Cloud & Cybersecurity | LinuZvision",
    description:
      "Enterprise AI automation, cloud infrastructure, datacenter engineering, and zero-trust cybersecurity across America and Africa.",
    images: [
      {
        url: "/images/linuzvision-logo-color.png",
        width: 1400,
        height: 442,
        alt: "LinuZvision LLC Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation, Cloud & Cybersecurity | LinuZvision",
    description:
      "Enterprise AI automation, cloud infrastructure, datacenter engineering, and zero-trust cybersecurity.",
    images: ["/images/linuzvision-logo-color.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "LinuZvision, LLC",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/linuzvision-logo-color.png`,
          width: 1400,
          height: 442,
        },
        email: "support@linuzvision.com",
        telephone: "+1-443-248-8520",
        sameAs: [
          "https://linkedin.com/linuzvision",
          "https://facebook.com/linuzvision",
        ],
        areaServed: ["Africa", "United States"],
        description:
          "LinuZvision builds intelligent AI, automation and technology solutions for businesses across Africa and America.",
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "LinuZvision",
        description:
          "Enterprise AI automation, cloud infrastructure, datacenter engineering, and cybersecurity.",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
