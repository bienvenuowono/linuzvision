import type { CSSProperties } from "react";
import { ArrowIcon } from "./ArrowIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsappButton } from "./WhatsappButton";
import type { Insight } from "@/lib/db";
import { HeroVideo } from "./HeroVideo";
import { HomeScrollNarrative } from "./HomeScrollNarrative";

const activities = [
  {
    href: "/datacenter",
    code: "ACT-01",
    title: "DATACENTER INFRASTRUCTURE & SUPPORT",
    text: "Physical server deployment, racking, cabling, hardware diagnostics, and mission-critical datacenter facility support.",
    capabilities: ["DATACENTER DEPLOYMENT", "HARDWARE SUPPORT", "CABLING & POWER", "PHYSICAL RESILIENCE"],
  },
  {
    href: "/services",
    code: "ACT-02",
    title: "SYSTEMS ADMINISTRATION (LINUX & WINDOWS)",
    text: "Comprehensive administration for Linux and Windows environments, hybrid directory, automated patching, and high availability.",
    capabilities: ["LINUX SYSTEMS", "WINDOWS SERVER", "HYBRID DIRECTORY", "SYSTEM MAINTENANCE"],
  },
  {
    href: "/cloud",
    code: "ACT-03",
    title: "CLOUD COMPUTING & INFRASTRUCTURE",
    text: "Scalable cloud environments, hybrid multi-cloud platforms, infrastructure-as-code, and seamless enterprise workload migrations.",
    capabilities: ["HYBRID CLOUD", "CLOUD MIGRATION", "INFRASTRUCTURE AS CODE", "SCALE & CONTINUITY"],
  },
  {
    href: "/cybersecurity",
    code: "ACT-04",
    title: "CYBERSECURITY & ZERO-TRUST DEFENSE",
    text: "Continuous operational protection spanning proactive prevention, anomaly detection, Zero-Trust network segmentation, and rapid incident response.",
    capabilities: ["ZERO TRUST POSTURE", "THREAT DETECTION", "IDENTITY ACCESS", "COMPLIANCE & AUDIT"],
  },
  {
    href: "/tasha",
    code: "ACT-05",
    title: "ARTIFICIAL INTELLIGENCE & MULTI-AGENT SYSTEMS",
    text: "Proprietary AI multi-agent systems (TASHA) engineered to participate in enterprise workflows, qualify leads, and execute autonomous operations.",
    capabilities: ["MULTI-AGENT SYSTEMS", "TASHA AI", "NATURAL INTERACTION", "AUTONOMOUS EXECUTION"],
  },
  {
    href: "/solutions",
    code: "ACT-06",
    title: "AUTOMATION & BUSINESS SOLUTIONS",
    text: "Intelligent lead management, workflow automation, document generation, reporting systems, and custom enterprise software.",
    capabilities: ["WORKFLOW AUTOMATION", "LEAD MANAGEMENT", "REPORTING SYSTEMS", "DOCUMENT GENERATION"],
  },
];

const solutionsBento = [
  {
    href: "/tasha",
    title: "AI Multi-Agent System (TASHA)",
    category: "PROPRIETARY INTELLIGENCE",
    description: "Our proprietary autonomous AI multi-agent system that adapts to complex business environments, interacts in natural dialogue, qualifies prospects, and coordinates cross-functional tasks under human direction.",
    isLarge: true,
  },
  {
    href: "/solutions",
    title: "Intelligent Lead Management",
    category: "REVENUE AUTOMATION",
    description: "Automated prospect qualification, real-time lead routing, and intelligent CRM pipeline acceleration.",
    isLarge: false,
  },
  {
    href: "/solutions",
    title: "Workflow Automation",
    category: "OPERATIONAL EFFICIENCY",
    description: "End-to-end automation of manual routines, system bridges, API orchestrations, and event-driven task pipelines.",
    isLarge: false,
  },
  {
    href: "/solutions",
    title: "Reporting Systems & Analytics",
    category: "DECISION INTELLIGENCE",
    description: "Data-grounded reporting frameworks that synthesize live business metrics into actionable decision support.",
    isLarge: false,
  },
  {
    href: "/solutions",
    title: "Document Generation & Comms",
    category: "DOCUMENT & COMMS AI",
    description: "Automated document assembly, contract generation, transactional messaging, and unified communications integration.",
    isLarge: false,
  },
  {
    href: "/solutions",
    title: "Cloud Apps & Custom Solutions",
    category: "ENTERPRISE ENGINEERING",
    description: "Tailored enterprise web applications and scalable cloud-native platforms built for specific organizational workflows.",
    isLarge: false,
  },
];

const tashaPipeline = [
  { step: "01", name: "UNDERSTANDS CONTEXT", detail: "Semantic parsing & multi-modal intake" },
  { step: "02", name: "ADAPTS TO WORKFLOWS", detail: "Dynamic process orchestration & routing" },
  { step: "03", name: "ENGAGES NATURALLY", detail: "High-empathy conversational dialogue" },
  { step: "04", name: "QUALIFIES PROSPECTS", detail: "Multi-dimensional lead scoring & triage" },
  { step: "05", name: "GENERATES & REPORTS", detail: "Automated document assembly & CRM sync" },
  { step: "06", name: "EXECUTES END-TO-END", detail: "Secure API invocation & autonomous execution" },
];

function readTime(content: string) {
  return `${Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200))} MIN READ`;
}

export function HomePage({ insights }: { insights: Insight[] }) {
  return (
    <>
      <Header />
      <main id="home">
        <HomeScrollNarrative />

        {/* 1. HERO SCENE WITH VIDEO & DIRECT ACTIONS */}
        <section className="hero shell" data-home-scene="hero-scene">
          <div className="hero-media">
            <HeroVideo />
            <div className="scan-line" />
            <div className="media-status">
              <i /> SYSTEM ACTIVE / LINUZVISION LLC
            </div>
          </div>
          <div className="hero-heading" data-home-scene="hero-copy">
            <h1 className="reveal-item">
              YOU THINK.<br />WE BUILD, MAINTAIN,<br />AND SECURE.
            </h1>
            <div className="hero-intro reveal-item" style={{ "--reveal-order": 1 } as CSSProperties}>
              <p>
                Linuzvision LLC is a technology and infrastructure solutions company helping businesses, organizations, and government entities build, maintain, and secure modern IT environments — from physical datacenters to cloud and AI-powered platforms.
              </p>
              <div className="button-row">
                <a className="button button-dark" href="/contact">
                  START A CONVERSATION <ArrowIcon />
                </a>
                <a className="button" href="/services">
                  EXPLORE OUR SERVICES <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. OUR APPROACH / SLOGAN OPERATING MANIFESTO */}
        <section className="change-section section-rule" data-home-scene="transformation">
          <div className="shell change-stage">
            <div className="change-signal" aria-hidden="true">
              <i />
              <span>OUR APPROACH & OPERATING PHILOSOPHY</span>
            </div>
            <div className="approach-intro reveal-item">
              <span className="micro-label">THE PHILOSOPHY</span>
              <h3>
                At Linuzvision, we believe organizations should be able to focus on their ideas, missions, and business objectives while having a technology partner capable of turning those ideas into reliable solutions.
              </h3>
            </div>
            <div className="change-copy approach-grid" data-reveal-group>
              <div className="change-card" style={{ "--reveal-order": 0 } as CSSProperties}>
                <span className="change-tag">01 / VISION</span>
                <span>YOU BRING THE VISION.</span>
                <p>Focus on your core ideas, organizational mission, and strategic business goals without operational friction.</p>
              </div>
              <div className="change-card" style={{ "--reveal-order": 1 } as CSSProperties}>
                <span className="change-tag">02 / BUILD</span>
                <span>WE DESIGN & BUILD.</span>
                <p>We engineer the physical datacenter infrastructure, cloud architectures, and intelligent software behind your vision.</p>
              </div>
              <div className="change-card" style={{ "--reveal-order": 2 } as CSSProperties}>
                <span className="change-tag">03 / MAINTAIN</span>
                <span>WE MAINTAIN.</span>
                <p>We administer Linux and Windows systems, manage cloud workloads, and provide ongoing support to keep operations running smoothly.</p>
              </div>
              <div className="change-card highlight" style={{ "--reveal-order": 3 } as CSSProperties}>
                <span className="change-tag">04 / SECURE</span>
                <strong>WE SECURE.</strong>
                <p>We engineer Zero-Trust cybersecurity and governance to protect your critical environments, platforms, and digital assets.</p>
              </div>
            </div>
            <div className="change-footer">
              <p className="change-close">FROM DEPLOYMENT TO LONG-TERM OPERATIONS, TECHNOLOGY YOU CAN DEPEND ON.</p>
            </div>
          </div>
        </section>

        {/* 3. 6-PILLAR ACTIVITY LEDGER — IT & INFRASTRUCTURE */}
        <section className="solutions shell home-activities section-rule" id="services" data-home-scene="ledger">
          <div className="section-heading">
            <div>
              <span className="micro-label">COMPLETE IT & INFRASTRUCTURE SPECTRUM</span>
              <h2>END-TO-END TECHNOLOGY<br />YOU CAN DEPEND ON.</h2>
            </div>
            <p className="activities-intro">
              From physical datacenter infrastructure to cloud and AI-powered platforms, we deliver reliable, scalable, and secure technology designed to support business operations and long-term growth.
            </p>
          </div>
          <div className="activity-ledger" data-reveal-group>
            {activities.map((activity, index) => (
              <a
                href={activity.href}
                className="activity-row"
                key={activity.title}
                style={{ "--reveal-order": index } as CSSProperties}
              >
                <div className="activity-meta">
                  <span className="activity-code">{activity.code}</span>
                  <h3>{activity.title}</h3>
                </div>
                <p>{activity.text}</p>
                <div className="activity-capabilities">
                  {activity.capabilities.map((item) => (
                    <span key={item}>{item}</span>
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
              <span className="micro-label">BUSINESS TECHNOLOGY SOLUTIONS</span>
              <h2>CONNECTING INFRASTRUCTURE<br />WITH REAL BUSINESS REQUIREMENTS.</h2>
            </div>
            <a href="/solutions" className="text-link">
              VIEW ALL BUSINESS SOLUTIONS <ArrowIcon />
            </a>
          </div>
          <div className="bento-grid" data-reveal-group>
            {solutionsBento.map((item, index) => (
              <a
                href={item.href}
                className={`bento-card ${item.isLarge ? "bento-large" : ""}`}
                key={item.title}
                style={{ "--reveal-order": index } as CSSProperties}
              >
                <div className="bento-top">
                  <span className="bento-category">{item.category}</span>
                  <div className="bento-icon">
                    <ArrowIcon />
                  </div>
                </div>
                <div className="bento-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 5. AI MULTI-AGENT SYSTEM (TASHA) SPOTLIGHT */}
        <section className="tasha section-rule" id="tasha" data-home-scene="tasha-system">
          <div className="shell tasha-grid">
            <div className="tasha-copy">
              <span className="signal tasha-tag">PROPRIETARY MULTI-AGENT AI</span>
              <h2>AI MULTI-AGENT<br />SYSTEM (TASHA).</h2>
              <p>
                TASHA is Linuzvision&apos;s proprietary autonomous multi-agent system engineered to adapt to complex enterprise environments, engage with prospects in natural dialogue, qualify opportunities, generate documents, and automate workflows under human direction.
              </p>
              <div className="tasha-actions">
                <a className="button button-light" href="/tasha">
                  MEET TASHA <ArrowIcon />
                </a>
              </div>
            </div>
            <div className="tasha-system-wrapper" data-reveal-group>
              <div className="tasha-system-header">
                <span className="signal tasha-name">TASHA MULTI-AGENT PIPELINE</span>
                <span className="tasha-badge">AUTONOMOUS / LOW LATENCY</span>
              </div>
              <div className="tasha-pipeline-grid">
                {tashaPipeline.map((item, index) => (
                  <div
                    className="pipeline-node"
                    key={item.name}
                    style={{ "--reveal-order": index } as CSSProperties}
                  >
                    <span className="pipeline-num">{item.step}</span>
                    <div className="pipeline-body">
                      <strong>{item.name}</strong>
                      <span>{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                <span>DATACENTER & CLOUD INFRASTRUCTURE</span>
              </div>
            </div>
            <div className="foundation-copy" data-reveal-item style={{ "--reveal-order": 1 } as CSSProperties}>
              <span className="micro-label">ROBUST DIGITAL FOUNDATIONS</span>
              <h2>FROM THE DATACENTER<br />TO THE CLOUD.</h2>
              <p>
                From physical datacenter infrastructure to cloud and AI-powered platforms, Linuzvision LLC delivers reliable, scalable, and secure technology designed to support business operations and long-term growth.
              </p>
              <div className="evolution">
                <div className="evo-step"><span>01</span><b>PHYSICAL DATACENTER & SUPPORT</b></div>
                <div className="evo-step"><span>02</span><b>LINUX & WINDOWS SYSTEMS ADMINISTRATION</b></div>
                <div className="evo-step"><span>03</span><b>SCALABLE CLOUD PLATFORMS & MIGRATION</b></div>
                <div className="evo-step active"><span>04</span><strong>AI MULTI-AGENT & AUTOMATION SYSTEMS</strong></div>
              </div>
              <div className="foundation-cta">
                <a className="button" href="/cloud">
                  EXPLORE CLOUD COMPUTING <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 7. ZERO-TRUST CYBERSECURITY & THREAT RESILIENCE */}
        <section className="home-security-section section-rule" id="cybersecurity" data-home-scene="security-split">
          <div className="shell home-security-grid">
            <div className="security-copy" data-reveal-item>
              <span className="micro-label">MISSION-CRITICAL PROTECTION</span>
              <h2>PROTECTION AS A<br />CONTINUOUS DISCIPLINE.</h2>
              <p>
                We secure the environments that protect your business. Linuzvision implements Zero-Trust architectures, continuous monitoring, Linux & Windows hardening, and rapid disaster recovery to ensure your systems remain resilient.
              </p>
              <div className="security-matrix-bars" data-reveal-group>
                <div className="sec-bar" style={{ "--reveal-order": 0 } as CSSProperties}>
                  <span>PREVENTION</span>
                  <div className="bar-track"><div className="bar-fill" style={{ width: "95%" }} /></div>
                  <em>ZERO TRUST</em>
                </div>
                <div className="sec-bar" style={{ "--reveal-order": 1 } as CSSProperties}>
                  <span>DETECTION</span>
                  <div className="bar-track"><div className="bar-fill" style={{ width: "92%" }} /></div>
                  <em>ANOMALY ML</em>
                </div>
                <div className="sec-bar" style={{ "--reveal-order": 2 } as CSSProperties}>
                  <span>RESPONSE</span>
                  <div className="bar-track"><div className="bar-fill" style={{ width: "88%" }} /></div>
                  <em>ISOLATION</em>
                </div>
                <div className="sec-bar" style={{ "--reveal-order": 3 } as CSSProperties}>
                  <span>RECOVERY</span>
                  <div className="bar-track"><div className="bar-fill" style={{ width: "96%" }} /></div>
                  <em>RESILIENCE</em>
                </div>
              </div>
              <div className="security-cta">
                <a className="button" href="/cybersecurity">
                  EXPLORE CYBERSECURITY <ArrowIcon />
                </a>
              </div>
            </div>
            <div className="security-visual" data-reveal-item style={{ "--reveal-order": 1 } as CSSProperties}>
              <img
                src="/images/continuous-monitoring-security.jpg"
                alt="Continuous monitoring security center with holographic threat intelligence shield"
              />
              <div className="visual-caption">
                <span>SECURITY ARCHITECTURE & THREAT INTELLIGENCE</span>
              </div>
            </div>
          </div>
        </section>

        {/* 8. TRAINING & TECHNOLOGY ENABLEMENT */}
        <section className="human-ai section-rule" id="training" data-home-scene="human-synergy">
          <div className="shell human-inner">
            <span className="signal tasha-tag">TRAINING & TECHNOLOGY ENABLEMENT</span>
            <h2>
              TECHNOLOGY DELIVERS GREATER VALUE<br />WHEN TEAMS MASTER IT.<br /><em>PRACTICAL SKILLS FOR MODERN TECH.</em>
            </h2>
            <div className="equation" data-reveal-group>
              <div className="eq-item" style={{ "--reveal-order": 0 } as CSSProperties}>
                <span>MODERN INFRASTRUCTURE</span>
                <small>LINUX, WINDOWS & DATACENTER</small>
              </div>
              <b style={{ "--reveal-order": 1 } as CSSProperties}>+</b>
              <div className="eq-item" style={{ "--reveal-order": 2 } as CSSProperties}>
                <span>CLOUD COMPUTING</span>
                <small>ARCHITECTURE & DEPLOYMENT</small>
              </div>
              <b style={{ "--reveal-order": 3 } as CSSProperties}>+</b>
              <div className="eq-item" style={{ "--reveal-order": 4 } as CSSProperties}>
                <span>AI & AUTOMATION</span>
                <small>MULTI-AGENT & WORKFLOWS</small>
              </div>
              <b style={{ "--reveal-order": 5 } as CSSProperties}>=</b>
              <div className="eq-item highlight" style={{ "--reveal-order": 6 } as CSSProperties}>
                <strong>ORGANIZATIONAL MASTERY</strong>
                <small>INDEPENDENT CAPABILITY</small>
              </div>
            </div>
            <div className="human-cta">
              <p>
                Linuzvision provides technology and AI training designed to help professionals, businesses, and organizations develop practical skills in modern infrastructure, cloud computing, artificial intelligence, automation, cybersecurity, and emerging technologies.
              </p>
              <a className="button button-light" href="/training">
                EXPLORE TRAINING & SUPPORT <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        {/* 9. BUSINESSES, ORGANIZATIONS & GOVERNMENT REACH */}
        <section className="experience section-rule" id="about" data-home-scene="experience-bridge">
          <div className="shell experience-grid">
            <div className="years" data-reveal-item>
              <strong>15+</strong>
              <span>YEARS OF TECHNOLOGY EXPERIENCE</span>
            </div>
            <div className="bridge" data-reveal-item style={{ "--reveal-order": 1 } as CSSProperties}>
              <span className="micro-label">GLOBAL EXECUTION</span>
              <h2>BUILT FOR BUSINESSES,<br />ORGANIZATIONS & GOVERNMENT.</h2>
              <p>
                Helping businesses, organizations, and government entities build, maintain, and secure modern IT environments across international standards and dynamic global markets.
              </p>
              <div className="bridge-route">
                <span>AFRICA</span>
                <i />
                <span>INFRASTRUCTURE, CLOUD & AI CORRIDOR</span>
                <i />
                <span>AMERICA</span>
              </div>
              <div className="bridge-cta">
                <a className="button" href="/about">
                  OUR STORY & VISION <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 10. EDITORIAL INTELLIGENCE & INSIGHTS */}
        <section className="insights shell section-rule" id="insights" data-home-scene="insights-ledger">
          <div className="section-heading">
            <div>
              <span className="micro-label">PERSPECTIVES</span>
              <h2>IDEAS FOR THE<br />INTELLIGENT BUSINESS.</h2>
            </div>
            <a href="/insights" className="text-link">
              EXPLORE ALL INSIGHTS <ArrowIcon />
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
              <p className="home-insights-empty">New intelligence is being prepared.</p>
            )}
          </div>
        </section>

        {/* 11. STRATEGIC CONVERSATION / FINAL CTA & SLOGAN */}
        <section className="final-cta section-rule" id="contact" data-home-scene="final-cta">
          <div className="shell final-inner">
            <span className="signal tasha-tag">YOU THINK. WE BUILD, MAINTAIN, AND SECURE.</span>
            <h2>YOU BRING THE VISION.<br />WE BUILD, MAINTAIN & SECURE THE TECHNOLOGY BEHIND IT.</h2>
            <div className="final-prompt">
              <p>
                From the datacenter to the cloud, from infrastructure to artificial intelligence, and from deployment to long-term operations, Linuzvision LLC helps organizations build technology they can depend on.
              </p>
              <div className="button-row">
                <a className="button button-light" href="/contact">
                  START A CONVERSATION <ArrowIcon />
                </a>
                <a className="button button-light" href="/services">
                  EXPLORE OUR SERVICES <ArrowIcon />
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
