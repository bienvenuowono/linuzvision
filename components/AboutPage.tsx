"use client";

import { ArrowIcon } from "./ArrowIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";

const manifestoCards = [
  {
    title: "Secure & Scalable",
    description: "Uncompromising protection for digital assets with infrastructure built to scale seamlessly.",
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Accelerate Growth",
    description: "Streamlining operations and leveraging automation to propel organizations forward.",
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z" />
      </svg>
    ),
  },
  {
    title: "Accessible Innovation",
    description: "Democratizing advanced technologies for entities of all scales and sectors.",
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

const evolutionStages = [
  {
    stage: "STAGE 01 | 1999",
    title: "IT Systems",
    description: "Foundational mastery of hardware and localized network architectures.",
  },
  {
    stage: "STAGE 02",
    title: "Infrastructure",
    description: "Scaling robust, interconnected enterprise-grade backbones.",
  },
  {
    stage: "STAGE 03",
    title: "Data Centers",
    description: "Architecting massive, high-availability physical storage and compute facilities.",
  },
  {
    stage: "STAGE 04",
    title: "Cloud",
    description: "Virtualizing workloads for borderless scalability and resilience.",
  },
];

const globalLocations = [
  { region: "United States", role: "Headquarters & Innovation Hub" },
  { region: "Africa", role: "Strategic Expansion & Infrastructure" },
  { region: "Europe", role: "Data Governance & Cloud Nodes" },
  { region: "Asia", role: "Scaling Operations & Connectivity" },
];

const leadershipTeam = [
  {
    code: "01",
    name: "CEO",
    role: "CEO",
    title: "Chief Executive Officer",
    image: "/images/CEO.jpg",
    objectPosition: "center 20%",
    alt: "CEO — Chief Executive Officer",
    description:
      "Strategic direction, enterprise growth, and executive governance across international infrastructure and technology programs.",
  },
  {
    code: "02",
    name: "YANNICK",
    role: "CTO",
    title: "Chief Technology Officer",
    image: "/images/yannick.jpg",
    objectPosition: "center top",
    alt: "Yannick — Chief Technology Officer",
    description:
      "Enterprise systems architecture, cloud infrastructure, datacenter engineering, and mission-critical cybersecurity frameworks.",
  },
  {
    code: "03",
    name: "BIENVENU",
    role: "CPO",
    title: "Chief Product Officer",
    image: "/images/bienvenu.jpg",
    objectPosition: "center center",
    alt: "Bienvenu — Chief Product Officer",
    description:
      "Product innovation, TASHA autonomous AI multi-agent platform engineering, and enterprise solutions architecture.",
  },
];

export function AboutPage() {
  return (
    <>
      <Header active="ABOUT" />
      <main className="about-page">
        {/* Executive Leadership & Personnel (Hero Replacement) */}
        <section className="about-leadership shell" id="leadership">
          <div className="leadership-heading">
            <div>
              <span className="micro-label">EXECUTIVE PERSONNEL</span>
              <h1>LEADERSHIP &amp;<br />EXECUTIVE TEAM.</h1>
            </div>
            <p className="leadership-intro">
              Architectural vision, engineering rigor, and product stewardship driving high-performance technology operations.
            </p>
          </div>

          <div className="leadership-grid">
            {leadershipTeam.map((member) => (
              <article
                key={member.role}
                className="leadership-card"
              >
                <div className="leadership-photo-wrap">
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="leadership-photo"
                    style={{ objectPosition: member.objectPosition }}
                  />
                  <span className="leadership-badge">{member.role}</span>
                </div>
                <div className="leadership-meta">
                  <div className="leadership-header">
                    <span className="leadership-role-tag">{member.role} · {member.title}</span>
                    <span className="leadership-index">{member.code}</span>
                  </div>
                  <h3 className="leadership-name">{member.name}</h3>
                  <p className="leadership-function">{member.title}</p>
                  <p className="leadership-desc">{member.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Mission & Manifesto */}
        <section className="about-mission shell" id="mission">
          <div className="mission-content">
            <span className="mono-label">MISSION &amp; MANIFESTO</span>
            <h2>EMPOWERING ORGANIZATIONS WITH SMART TECHNOLOGY FOR GROWTH.</h2>
            <p>
              We are committed to being a trusted partner, delivering secure, scalable, and affordable
              technologies—from AI and Cloud to Automation and Cybersecurity. Our goal is to make advanced technology
              accessible to organizations of all sizes, increasing productivity and protecting digital assets.
            </p>
          </div>
          <div className="manifesto-grid">
            {manifestoCards.map((card) => (
              <article key={card.title} className="manifesto-card">
                <div className="card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Story & Evolution */}
        <section className="about-evolution shell" id="evolution">
          <div className="evolution-split">
            <div className="evolution-intro">
              <h2>25+ YEARS OF TECHNOLOGY EXPERIENCE</h2>
              <p>
                A relentless trajectory of adaptation and mastery. Our deep heritage dates back to 1999, evolving
                through every major paradigm shift in modern computing.
              </p>
            </div>
            <div className="evolution-grid">
              {evolutionStages.map((stage) => (
                <div key={stage.title} className="evolution-card">
                  <span className="mono-label">{stage.stage}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                </div>
              ))}
              <div className="evolution-card evolution-present">
                <span className="mono-label">PRESENT / FUTURE</span>
                <h3>AI &amp; Automation</h3>
                <p>
                  Integrating agentic intelligence and cybersecurity to orchestrate complex infrastructural systems
                  autonomously.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Network */}
        <section className="about-global shell" id="global">
          <div className="global-split">
            <div className="global-text">
              <span className="mono-label">THE GLOBAL NETWORK</span>
              <h2>Unbounded Reach.</h2>
              <p>
                Our operational footprint spans continents, delivering unwavering infrastructural support and strategic
                intelligence worldwide.
              </p>
              <div className="locations-grid">
                {globalLocations.map((loc) => (
                  <div key={loc.region} className="location-item">
                    <h4>{loc.region}</h4>
                    <p>{loc.role}</p>
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
            <span className="mono-label">CORE AXIS</span>
            <h2 className="about-axis-title">
              <span>AMERICA</span>
              <span><span className="axis-sep">-</span> AFRICA</span>
              <span><span className="axis-sep">-</span> EUROPE</span>
            </h2>
            <p>
              Bridging our primary continents through unyielding architectural intelligence and infrastructural
              precision, forming the spine of our global network.
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
              <span className="mono-label">PROPRIETARY TECHNOLOGY</span>
              <h2>Meet TASHA.</h2>
              <p>
                Our proprietary AI agentic technology. Designed not just to assist, but to operate, optimize, and
                orchestrate complex infrastructural systems autonomously.
              </p>
              <ul className="tasha-bullets">
                <li>
                  <span className="bullet-square" /> Autonomous Operations
                </li>
                <li>
                  <span className="bullet-square" /> Predictive Infrastructure
                </li>
                <li>
                  <span className="bullet-square" /> Unyielding Security
                </li>
              </ul>
              <a className="button button-dark" href="/tasha">
                MEET TASHA <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        {/* Final Terminal Statement */}
        <section className="about-final">
          <div className="shell">
            <p className="final-sub">25+ YEARS OF EXPERIENCE.</p>
            <h2>ONE CONSTANT: EVOLUTION.</h2>
            <a className="button button-light" href="/contact">
              START A CONVERSATION <ArrowIcon />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
