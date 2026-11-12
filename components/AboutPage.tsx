"use client";

import { ArrowIcon } from "./ArrowIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { LeadershipSlider } from "./LeadershipSlider";
import { Text } from "./Text";

const manifestoCards = [
  {
    n: 1,
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    n: 2,
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z" />
      </svg>
    ),
  },
  {
    n: 3,
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
] as const;

// Manifesto icons stay here; every wording of this page comes from lib/page-texts/about.ts.
const evolutionStages = [1, 2, 3, 4] as const;
const globalLocations = [1, 2, 3, 4] as const;



export function AboutPage() {
  return (
    <>
      <Header active="ABOUT" />
      <main className="about-page">
        {/* Executive Leadership & Personnel (Hero Replacement) */}
        <section className="about-leadership shell" id="leadership">
          <div className="leadership-heading">
            <div>
              <span className="micro-label"><Text id="about.leadership.label" /></span>
              <h1><Text id="about.leadership.title" /></h1>
            </div>
            <p className="leadership-intro">
              <Text id="about.leadership.text" />
            </p>
          </div>

          <LeadershipSlider />
        </section>

        {/* Mission & Manifesto */}
        <section className="about-mission shell" id="mission">
          <svg className="mission-network-detail" viewBox="0 0 1200 80" fill="none" aria-hidden="true" focusable="false">
            <path d="M0 40h180m40 0h360m40 0h360m40 0h180" />
            <path d="m180 40 20-20 20 20-20 20Zm400 0 20-20 20 20-20 20Zm400 0 20-20 20 20-20 20Z" />
            <path d="M200 20V0m400 20V0m400 20V0" />
          </svg>
          <div className="mission-content">
            <span className="mono-label"><Text id="about.mission.label" /></span>
            <h2><Text id="about.mission.title" /></h2>
            <p>
              <Text id="about.mission.text" />
            </p>
          </div>
          <div className="manifesto-grid">
            {manifestoCards.map((card) => (
              <article key={card.n} className="manifesto-card">
                <div className="card-icon">{card.icon}</div>
                <h3><Text id={`about.manifesto.${card.n}.title` as const} /></h3>
                <p><Text id={`about.manifesto.${card.n}.text` as const} /></p>
              </article>
            ))}
          </div>
        </section>

        {/* Story & Evolution */}
        <section className="about-evolution shell" id="evolution">
          <div className="evolution-split">
            <div className="evolution-intro">
              <h2><Text id="about.evolution.title" /></h2>
              <p>
                <Text id="about.evolution.text" />
              </p>
            </div>
            <div className="evolution-grid">
              {evolutionStages.map((n) => (
                <div key={n} className="evolution-card">
                  <span className="mono-label"><Text id={`about.evolution.${n}.stage` as const} /></span>
                  <h3><Text id={`about.evolution.${n}.title` as const} /></h3>
                  <p><Text id={`about.evolution.${n}.text` as const} /></p>
                </div>
              ))}
              <div className="evolution-card evolution-present">
                <span className="mono-label"><Text id="about.evolution.present.stage" /></span>
                <h3><Text id="about.evolution.present.title" /></h3>
                <p>
                  <Text id="about.evolution.present.text" />
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Network */}
        <section className="about-global shell" id="global">
          <div className="global-split">
            <div className="global-text">
              <span className="mono-label"><Text id="about.global.label" /></span>
              <h2><Text id="about.global.title" /></h2>
              <p>
                <Text id="about.global.text" />
              </p>
              <div className="locations-grid">
                {globalLocations.map((n) => (
                  <div key={n} className="location-item">
                    <h4><Text id={`about.global.${n}.region` as const} /></h4>
                    <p><Text id={`about.global.${n}.role` as const} /></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="global-media">
              <img src="/images/about-global-network-map.png" alt="Global network visualization on glass display" />
            </div>
          </div>
        </section>

        {/* Geographic Bridge */}
        <section className="about-bridge">
          <div className="shell">
            <span className="mono-label"><Text id="about.axis.label" /></span>
            <h2 className="about-axis-title">
              <span><Text id="about.axis.region1" /></span>
              <span><span className="axis-sep">-</span> <Text id="about.axis.region2" /></span>
              <span><span className="axis-sep">-</span> <Text id="about.axis.region3" /></span>
            </h2>
            <p>
              <Text id="about.axis.text" />
            </p>
          </div>
        </section>

        {/* TASHA Feature */}
        <section className="about-tasha shell" id="tasha">
          <div className="tasha-split">
            <div className="tasha-media">
              <img src="/images/tasha-corridor-map.png" alt="TASHA central intelligence nodes" />
            </div>
            <div className="tasha-text">
              <span className="mono-label"><Text id="about.tasha.label" /></span>
              <h2><Text id="about.tasha.title" /></h2>
              <p>
                <Text id="about.tasha.text" />
              </p>
              <ul className="tasha-bullets">
                <li>
                  <span className="bullet-square" /> <Text id="about.tasha.item1" />
                </li>
                <li>
                  <span className="bullet-square" /> <Text id="about.tasha.item2" />
                </li>
                <li>
                  <span className="bullet-square" /> <Text id="about.tasha.item3" />
                </li>
              </ul>
              <a className="button button-dark" href="/tasha">
                <Text id="about.tasha.button" /> <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        {/* Final Terminal Statement */}
        <section className="about-final">
          <div className="shell">
            <p className="final-sub"><Text id="about.final.subtitle" /></p>
            <h2><Text id="about.final.title" /></h2>
            <a className="button button-light" href="/contact">
              <Text id="about.final.button" /> <ArrowIcon />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
