import { ArrowIcon } from "./ArrowIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Text } from "./Text";

// Every wording of this page comes from lib/page-texts/datacenter.ts.
const countries = [1, 2, 3, 4] as const;
const capabilities = [1, 2, 3, 4] as const;
const corridorPoints = [1, 2, 3] as const;
const engineeringPhases = [1, 2, 3, 4] as const;
const technicalPillars = [1, 2, 3, 4] as const;

export function DatacenterPage() {
  return (
    <>
      <Header active="DATACENTER" />
      <main className="datacenter-page">
        {/* 1. HERO SECTION */}
        <section className="datacenter-hero shell">
          <div className="datacenter-hero-grid">
            <div className="datacenter-hero-copy">
              <span className="micro-label"><Text id="datacenter.hero.label" /></span>
              <h1><Text id="datacenter.hero.title" /></h1>
              <p>
                <Text id="datacenter.hero.text" />
              </p>
              <div className="button-row">
                <a className="button button-dark" href="/contact">
                  <Text id="datacenter.hero.button1" /> <ArrowIcon />
                </a>
                <a className="button" href="#footprint">
                  <Text id="datacenter.hero.button2" /> <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="datacenter-hero-media">
              <img
                src="/images/server-architecture.png"
                alt="High-density secure server rack architecture in a mission-critical datacenter"
              />
              <div className="datacenter-badge">
                <i></i>
                <span><Text id="datacenter.hero.badge" /></span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PROVEN REGIONAL TRACK RECORD (CAMEROON, GABON, COTE D'IVOIRE, EQUATORIAL GUINEA) */}
        <section className="datacenter-footprint section-rule" id="footprint">
          <div className="shell">
            <div className="footprint-header">
              <div>
                <span className="micro-label"><Text id="datacenter.footprint.label" /></span>
                <h2><Text id="datacenter.footprint.title" /></h2>
              </div>
              <p>
                <Text id="datacenter.footprint.text" />
              </p>
            </div>

            <div className="footprint-grid">
              {countries.map((n) => (
                <article className="footprint-card" key={n}>
                  <header className="footprint-card-header">
                    <div className="country-tag">
                      <strong><Text id={`datacenter.footprint.${n}.country` as const} /></strong>
                      <span><Text id={`datacenter.footprint.${n}.code` as const} /></span>
                    </div>
                    <small><Text id={`datacenter.footprint.${n}.subtitle` as const} /></small>
                  </header>
                  <p><Text id={`datacenter.footprint.${n}.text` as const} /></p>
                  <div className="footprint-capabilities">
                    {capabilities.map((c) => (
                      <span key={c}><Text id={`datacenter.footprint.${n}.cap${c}` as const} /></span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. AMERICA <-> AFRICA <-> EUROPE TRANSCONTINENTAL CORRIDOR */}
        <section className="transcontinental-corridor section-rule">
          <div className="shell corridor-split">
            <div className="corridor-copy">
              <span className="micro-label"><Text id="datacenter.corridor.label" /></span>
              <h2><Text id="datacenter.corridor.title" /></h2>
              <p>
                <Text id="datacenter.corridor.text" />
              </p>
              <div className="corridor-points">
                {corridorPoints.map((n) => (
                  <div key={n}>
                    <strong><Text id={`datacenter.corridor.${n}.title` as const} /></strong>
                    <span><Text id={`datacenter.corridor.${n}.text` as const} /></span>
                  </div>
                ))}
              </div>
            </div>

            <div className="corridor-visual-frame">
              <img
                src="/images/zero-trust-datacenter.png"
                alt="Zero Trust secure physical datacenter containment aisle"
              />
              <div className="corridor-status-tag">
                <span><Text id="datacenter.corridor.tagStart" /></span>
                <i></i>
                <b><Text id="datacenter.corridor.tagMiddle" /></b>
                <i></i>
                <span><Text id="datacenter.corridor.tagEnd" /></span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. ENGINEERING LIFECYCLE PHASES */}
        <section className="datacenter-lifecycle section-rule">
          <div className="shell">
            <div className="lifecycle-header">
              <span className="micro-label"><Text id="datacenter.lifecycle.label" /></span>
              <h2><Text id="datacenter.lifecycle.title" /></h2>
              <p>
                <Text id="datacenter.lifecycle.text" />
              </p>
            </div>

            <div className="lifecycle-grid">
              {engineeringPhases.map((n) => (
                <article className="lifecycle-step" key={n}>
                  <span className="step-number">{String(n).padStart(2, "0")}</span>
                  <h3><Text id={`datacenter.lifecycle.${n}.title` as const} /></h3>
                  <p><Text id={`datacenter.lifecycle.${n}.text` as const} /></p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TECHNICAL PILLARS / SPECIFICATIONS */}
        <section className="datacenter-specs section-rule">
          <div className="shell">
            <header className="specs-header">
              <span className="micro-label"><Text id="datacenter.specs.label" /></span>
              <h2><Text id="datacenter.specs.title" /></h2>
            </header>

            <div className="specs-grid">
              {technicalPillars.map((n) => (
                <article className="spec-card" key={n}>
                  <strong><Text id={`datacenter.specs.${n}.metric` as const} /></strong>
                  <h4><Text id={`datacenter.specs.${n}.label` as const} /></h4>
                  <p><Text id={`datacenter.specs.${n}.text` as const} /></p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CLOSING CALL TO ACTION */}
        <section className="datacenter-cta section-rule">
          <div className="shell cta-inner">
            <span className="micro-label"><Text id="datacenter.final.label" /></span>
            <h2><Text id="datacenter.final.title" /></h2>
            <p>
              <Text id="datacenter.final.text" />
            </p>
            <div className="button-row">
              <a className="button button-light" href="/contact">
                <Text id="datacenter.final.button" /> <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
