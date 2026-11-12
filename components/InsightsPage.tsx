"use client";

import { useEffect, useState } from "react";
import { ArrowIcon } from "./ArrowIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Text, useText } from "./Text";
import type { Insight } from "@/lib/db";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(value)).toUpperCase();
}

function readTime(content: string) {
  return `${Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200))} MIN READ`;
}

export function InsightsPage({ insights }: { insights: Insight[] }) {
  // The rotating words are edited in the dashboard, one per line.
  const rotatingWords = useText("insights.hero.words").split("\n").map((word) => word.trim()).filter(Boolean);
  const wordCount = Math.max(1, rotatingWords.length);
  const [wordIndex, setWordIndex] = useState(0);
  const featuredInsight = insights[0];

  useEffect(() => {
    if (wordCount < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % wordCount);
    }, 2000);
    return () => window.clearInterval(timer);
  }, [wordCount]);

  const activeWord = rotatingWords[wordIndex % wordCount] ?? "";

  return (
    <>
      <Header active="INSIGHTS" />
      <main className="insights-page">
        {/*
          THESIS: Knowledge becomes operational intelligence through a calm editorial threshold, never a crowded article grid.
          OWN-WORLD: Luminous paper, faint infrastructure, monumental kinetic language and hairline editorial structure.
          STORY: Enter through the idea transformation, encounter one featured perspective, then continue into the wider LinuZvision system.
          FIRST VIEWPORT: A near-full-height chamber centers FROM beside a vertical word reel, with the proposition and scroll cue beneath.
          FORM: Comp-led editorial narrative; Google Stitch Insights is the authority.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
        */}
        <section className="insights-hero shell" aria-labelledby="insights-title">
          <div className="insights-hero-material" aria-hidden="true" />
          <h1 id="insights-title">
            <span><Text id="insights.hero.from" /></span>
            <span className="insights-word-window" aria-label="Insights to action">
              <span className="insights-active-word" aria-hidden="true" key={activeWord}>
                {activeWord}
              </span>
              <span className="sr-only">{rotatingWords[0]}</span>
            </span>
          </h1>
          <p><Text id="insights.hero.text" /></p>
          <a className="insights-scroll" href="#featured">
            <span><Text id="insights.hero.scroll" /></span>
            <ArrowIcon />
          </a>
        </section>

        {featuredInsight ? <section className="featured-insight shell" id="featured">
          <article>
            <div className="featured-insight-copy">
              <p className="insight-label"><span /><Text id="insights.featured.label" /></p>
              <h2>{featuredInsight.title}</h2>
              <p className="featured-summary">{featuredInsight.excerpt}</p>
              <div className="insight-meta">
                <time dateTime={featuredInsight.publishedAt}>{formatDate(featuredInsight.publishedAt)}</time>
                <span aria-hidden="true" />
                <span>{readTime(featuredInsight.content)}</span>
              </div>
              <a className="button" href={`/insights/${featuredInsight.slug}`}>
                <Text id="insights.featured.button" /> <ArrowIcon />
              </a>
            </div>
            <div className="featured-insight-media" aria-hidden="true">
              <img src="/images/ai-security-matrix.png" alt="" />
              <div className="featured-insight-node"><Text id="insights.featured.media" /></div>
            </div>
          </article>
        </section> : <section className="featured-insight insights-empty shell" id="featured"><h2><Text id="insights.featured.empty" /></h2></section>}

        {insights.length > 1 && <section className="insights-publications shell" aria-labelledby="publications-title">
          <header><p><Text id="insights.list.label" /></p><h2 id="publications-title"><Text id="insights.list.title" /></h2></header>
          <div className="insight-list">{insights.slice(1).map((insight, index) => <article key={insight.id}>
            <span className="insight-index">{String(index + 2).padStart(2, "0")}</span>
            <div><span>{insight.category} / {formatDate(insight.publishedAt)}</span><h3>{insight.title}</h3></div>
            <a href={`/insights/${insight.slug}`} aria-label={`Read ${insight.title}`}><ArrowIcon /></a>
          </article>)}</div>
        </section>}
      </main>
      <Footer />
    </>
  );
}
