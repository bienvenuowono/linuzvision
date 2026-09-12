import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getInsightBySlug } from "@/lib/db";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const insight = getInsightBySlug((await params).slug);
  if (!insight || !insight.published) return {};
  return {
    title: insight.title,
    description: insight.excerpt,
    alternates: { canonical: `/insights/${insight.slug}` },
    openGraph: {
      title: `${insight.title} | LinuZvision`,
      description: insight.excerpt,
      type: "article",
      url: `/insights/${insight.slug}`,
      publishedTime: insight.publishedAt,
      images: [
        {
          url: insight.image,
          alt: insight.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${insight.title} | LinuZvision`,
      description: insight.excerpt,
      images: [insight.image],
    },
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const insight = getInsightBySlug((await params).slug);
  if (!insight || !insight.published) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://linuzvision.com";
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.excerpt,
    image: insight.image.startsWith("http") ? insight.image : `${siteUrl}${insight.image}`,
    datePublished: insight.publishedAt,
    author: {
      "@type": "Organization",
      name: "LinuZvision",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "LinuZvision",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/Linuzvision-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/insights/${insight.slug}`,
    },
  };

  return <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
    />
    <Header active="INSIGHTS" />
    <main className="insight-article shell">
      <header><p>{insight.category}</p><h1>{insight.title}</h1><time dateTime={insight.publishedAt}>{new Date(insight.publishedAt).toLocaleDateString("en", { day: "2-digit", month: "long", year: "numeric" })}</time></header>
      <figure><img src={insight.image} alt={`Visual for ${insight.title}`} /></figure>
      <article><p className="insight-article-lead">{insight.excerpt}</p>{insight.content.split(/\n{2,}/).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</article>
      <a className="button" href="/insights">BACK TO INSIGHTS</a>
    </main>
    <Footer />
  </>;
}
