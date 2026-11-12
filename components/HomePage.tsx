import type { CSSProperties } from "react";
import { ArrowIcon } from "./ArrowIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { LeadershipSlider } from "./LeadershipSlider";
import { WhatsappButton } from "./WhatsappButton";
import type { Insight } from "@/lib/db";
import type { Course } from "@/lib/training";
import { HeroVideo } from "./HeroVideo";
import { HomeScrollNarrative } from "./HomeScrollNarrative";
import { TechLogoSlider } from "./TechLogoSlider";
import { CourseCard } from "./CourseCard";
import { Text } from "./Text";

// Links and layout stay here; every wording of this page comes from lib/page-texts/home.ts.
const activities = [
  { n: 1, href: "/datacenter", code: "ACT-01" },
  { n: 2, href: "/services", code: "ACT-02" },
  { n: 3, href: "/cloud", code: "ACT-03" },
  { n: 4, href: "/cybersecurity", code: "ACT-04" },
  { n: 5, href: "/tasha", code: "ACT-05" },
  { n: 6, href: "/solutions", code: "ACT-06" },
] as const;

const capabilities = [1, 2, 3, 4] as const;

const approach = [1, 2, 3, 4] as const;

const securityOperations = [1, 2, 3, 4, 5] as const;

const infrastructureFlow = [1, 2, 3, 4] as const;

const solutionsBento = [
  { n: 1, href: "/tasha", isLarge: true },
  { n: 2, href: "/solutions", isLarge: false },
  { n: 3, href: "/solutions", isLarge: false },
  { n: 4, href: "/solutions", isLarge: false },
  { n: 5, href: "/solutions", isLarge: false },
  { n: 6, href: "/solutions", isLarge: false },
] as const;

function readTime(content: string) {
  return `${Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200))} MIN READ`;
}

export function HomePage({ insights, featuredCourse }: { insights: Insight[]; featuredCourse?: Course }) {
  return (
    <>
      <Header />
      <main id="home">
        <HomeScrollNarrative />

        {/* 1. HERO SCENE WITH VIDEO */}
        <section className="hero shell" data-home-scene="hero-scene">
          <h1 className="visually-hidden"><Text id="home.hero.h1" /></h1>
          <div className="hero-media">
            <HeroVideo />
            <div className="scan-line" />
            <div className="media-status">
              <i /> <Text id="home.hero.status" />
            </div>
          </div>
        </section>

        {/* 2. OUR APPROACH / SLOGAN OPERATING MANIFESTO */}
        <section className="change-section section-rule" data-home-scene="transformation">
          <TechLogoSlider />
          <div className="shell change-stage">
            <div className="change-signal" aria-hidden="true">
              <i />
              <span><Text id="home.approach.signal" /></span>
            </div>
            <div className="approach-intro reveal-item">
              <span className="micro-label"><Text id="home.approach.label" /></span>
              <h2>
                <Text id="home.approach.title" />
              </h2>
            </div>
            <div className="change-copy approach-grid" data-reveal-group>
              {approach.map((n, index) => (
                <div className={n === 4 ? "change-card highlight" : "change-card"} style={{ "--reveal-order": index } as CSSProperties} key={n}>
                  <span className="change-tag"><Text id={`home.approach.${n}.tag` as const} /></span>
                  {n === 4 ? <strong><Text id="home.approach.4.title" /></strong> : <span><Text id={`home.approach.${n}.title` as const} /></span>}
                  <p><Text id={`home.approach.${n}.text` as const} /></p>
                </div>
              ))}
            </div>
            <ol className="approach-flow" aria-label="From idea to secure technology operations">
              {approach.map((n) => <li key={n}><span><Text id={`home.approach.${n}.title` as const} /></span>{n < 4 && <ArrowIcon />}</li>)}
            </ol>
            <div className="change-footer">
              <p className="change-close"><Text id="home.approach.close" /></p>
            </div>
          </div>
        </section>

        {/* 3. 6-PILLAR ACTIVITY LEDGER — IT & INFRASTRUCTURE */}
        <section className="solutions shell home-activities section-rule" id="services" data-home-scene="ledger">
          <div className="section-heading">
            <div>
              <span className="micro-label"><Text id="home.activities.label" /></span>
              <h2><Text id="home.activities.title" /></h2>
            </div>
            <p className="activities-intro">
              <Text id="home.activities.text" />
            </p>
          </div>
          <div className="activity-ledger" data-reveal-group>
            {activities.map((activity, index) => (
              <a
                href={activity.href}
                className="activity-row"
                key={activity.code}
                style={{ "--reveal-order": index } as CSSProperties}
              >
                <div className="activity-meta">
                  <span className="activity-code">{activity.code}</span>
                  <h3><Text id={`home.activities.${activity.n}.title` as const} /></h3>
                </div>
                <p><Text id={`home.activities.${activity.n}.text` as const} /></p>
                <div className="activity-capabilities">
                  {capabilities.map((c) => (
                    <span key={c}><Text id={`home.activities.${activity.n}.cap${c}` as const} /></span>
                  ))}
                </div>
                <div className="activity-arrow">
                  <ArrowIcon />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 4. BUSINESS TECHNOLOGY SOLUTIONS BENTO GRID */}
        <section className="home-solutions-bento shell section-rule" id="solutions" data-home-scene="bento">
          <div className="section-heading">
            <div>
              <span className="micro-label"><Text id="home.solutions.label" /></span>
              <h2><Text id="home.solutions.title" /></h2>
            </div>
            <a href="/solutions" className="text-link">
              <Text id="home.solutions.link" /> <ArrowIcon />
            </a>
          </div>
          <div className="bento-grid" data-reveal-group>
            {solutionsBento.map((item, index) => (
              <a
                href={item.href}
                className={`bento-card ${item.isLarge ? "bento-large" : ""}`}
                key={item.n}
                style={{ "--reveal-order": index } as CSSProperties}
              >
                <div className="bento-top">
                  <span className="bento-category"><Text id={`home.solutions.${item.n}.category` as const} /></span>
                  <div className="bento-icon">
                    <ArrowIcon />
                  </div>
                </div>
                <div className="bento-content">
                  <h3><Text id={`home.solutions.${item.n}.title` as const} /></h3>
                  <p><Text id={`home.solutions.${item.n}.text` as const} /></p>
                </div>
              </a>
            ))}
          </div>
        </section>


        {/* 6. FROM DATACENTER TO CLOUD INFRASTRUCTURE */}
        <section className="foundation section-rule" id="cloud" data-home-scene="foundation-split">
          <div className="shell foundation-grid">
            <div className="foundation-visual" data-reveal-item>
              <img
                src="/images/fiber-network.png"
                alt="High-speed fiber optic network and datacenter infrastructure"
              />
              <div className="visual-caption">
                <span><Text id="home.foundation.caption" /></span>
              </div>
            </div>
            <div className="foundation-copy" data-reveal-item style={{ "--reveal-order": 1 } as CSSProperties}>
              <span className="micro-label"><Text id="home.foundation.label" /></span>
              <h2><Text id="home.foundation.title" /></h2>
              <p>
                <Text id="home.foundation.text" />
              </p>
              <div className="evolution">
                <div className="evo-step"><span>01</span><b><Text id="home.foundation.step1" /></b></div>
                <div className="evo-step"><span>02</span><b><Text id="home.foundation.step2" /></b></div>
                <div className="evo-step"><span>03</span><b><Text id="home.foundation.step3" /></b></div>
                <div className="evo-step active"><span>04</span><strong><Text id="home.foundation.step4" /></strong></div>
              </div>
              <div className="foundation-cta">
                <a className="button" href="/cloud">
                  <Text id="home.foundation.button" /> <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 7. ZERO-TRUST CYBERSECURITY & THREAT RESILIENCE */}
        <section className="home-security-section section-rule" id="cybersecurity" data-home-scene="security-split">
          <div className="shell home-security-grid">
            <div className="security-copy" data-reveal-item>
              <span className="micro-label"><Text id="home.security.label" /></span>
              <h2><Text id="home.security.title" /></h2>
              <p>
                <Text id="home.security.text" />
              </p>
              <ol className="home-security-operations" role="list">
                {securityOperations.map((n) => <li key={n}><span aria-hidden="true">{String(n).padStart(2, "0")}</span><span><Text id={`home.security.operation${n}` as const} /></span></li>)}
              </ol>
              <div className="security-cta">
                <a className="button" href="/cybersecurity">
                  <Text id="home.security.button" /> <ArrowIcon />
                </a>
              </div>
            </div>
            <div className="security-visual" data-reveal-item style={{ "--reveal-order": 1 } as CSSProperties}>
              <img
                src="/images/continuous-monitoring-security.jpg"
                alt="Continuous monitoring security center with holographic threat intelligence shield"
              />
              <div className="visual-caption">
                <span><Text id="home.security.caption" /></span>
              </div>
            </div>
          </div>
          <div className="shell">
            <ol className="home-infrastructure-flow" role="list" aria-label="Infrastructure sequence from system to AI">
              {infrastructureFlow.map((n) => <li key={n}><span><Text id={`home.security.flow${n}` as const} /></span>{n < infrastructureFlow.length && <ArrowIcon />}</li>)}
            </ol>
          </div>
        </section>

        {/* 8. FEATURED COURSES */}
        {featuredCourse && <section className="home-featured-courses section-rule" id="training" data-home-scene="featured-courses">
          <div className="shell">
            <div className="featured-courses-heading">
              <div>
                <span className="micro-label"><Text id="home.courses.label" /></span>
                <h2><Text id="home.courses.title" /></h2>
              </div>
              <div>
                <p><Text id="home.courses.text" /></p>
                <a className="text-link" href="/training"><Text id="home.courses.link" /> <ArrowIcon /></a>
              </div>
            </div>
            <CourseCard course={featuredCourse} featured />
          </div>
        </section>}

        {/* 9. EXECUTIVE LEADERSHIP & PERSONNEL */}
        <section className="experience section-rule" id="leadership" data-home-scene="leadership-team">
          <div className="shell">
            <div className="leadership-heading">
              <div>
                <span className="micro-label"><Text id="home.leadership.label" /></span>
                <h2><Text id="home.leadership.title" /></h2>
              </div>
              <p className="leadership-intro">
                <Text id="home.leadership.text" />
              </p>
            </div>

            <LeadershipSlider />
          </div>
        </section>

        {/* 10. EDITORIAL INTELLIGENCE & INSIGHTS */}
        <section className="insights shell section-rule" id="insights" data-home-scene="insights-ledger">
          <div className="section-heading">
            <div>
              <span className="micro-label"><Text id="home.insights.label" /></span>
              <h2><Text id="home.insights.title" /></h2>
            </div>
            <a href="/insights" className="text-link">
              <Text id="home.insights.link" /> <ArrowIcon />
            </a>
          </div>
          <div className="insight-list" data-reveal-group>
            {insights.map((insight, index) => (
              <article
                key={insight.id}
                style={{ "--reveal-order": index } as CSSProperties}
              >
                <div>
                  <span>{insight.category}</span>
                  <h3>{insight.title}</h3>
                </div>
                <span>{readTime(insight.content)}</span>
                <a href={`/insights/${insight.slug}`} aria-label={`Read ${insight.title}`}>
                  <ArrowIcon />
                </a>
              </article>
            ))}
            {insights.length === 0 && (
              <p className="home-insights-empty"><Text id="home.insights.empty" /></p>
            )}
          </div>
        </section>

        {/* 11. STRATEGIC CONVERSATION / FINAL CTA & SLOGAN */}
        <section className="final-cta section-rule" id="contact" data-home-scene="final-cta">
          <div className="shell final-inner">
            <span className="signal tasha-tag"><Text id="home.final.tag" /></span>
            <h2><Text id="home.final.title" /></h2>
            <div className="final-prompt">
              <p>
                <Text id="home.final.text" />
              </p>
              <div className="button-row">
                <a className="button button-light" href="/contact">
                  <Text id="home.final.button1" /> <ArrowIcon />
                </a>
                <a className="button button-light" href="/services">
                  <Text id="home.final.button2" /> <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
