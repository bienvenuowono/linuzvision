import type { CSSProperties } from "react";
import { ArrowIcon } from "./ArrowIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { LeadershipSlider } from "./LeadershipSlider";
import { WhatsappButton } from "./WhatsappButton";
import type { Insight } from "@/lib/db";
import { HeroVideo } from "./HeroVideo";
import { HomeScrollNarrative } from "./HomeScrollNarrative";
import { TechLogoSlider } from "./TechLogoSlider";

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
    title: "Enterprise Systems and Platform operations",
    text: "Comprehensive administration and support for enterprise systems, operating platforms, hybrid environments, automated patching, high availability, and ongoing infrastructure operations.",
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
    title: "Cybersecurity and Zero-Trust Defense",
    text: "Continous protection accross infrastructure and application through proactive defense, anomaly detection, zero trust architecture, identity controls, and rapid incident response.",
    capabilities: ["ZERO TRUST POSTURE", "THREAT DETECTION", "IDENTITY ACCESS", "COMPLIANCE & AUDIT"],
  },
  {
    href: "/tasha",
    code: "ACT-05",
    title: "Artificial intelligence",
    text: "proprietary AI multi -agent systems (TASHA) engineered to coordinate enterprise workflows, qualify leads, automate decisions, and execute business operations.",
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

const securityOperations = [
  "Physical Datacenter & Support.",
  "Systems and infrastructure Operations",
  "Scalable cloud platforms and Migration.",
  "Cybersecurity and Zero Trust archictecture.",
  "AI multi- agent & Automation Systems",
];

const infrastructureFlow = ["System", "Cloud", "Security", "AI"];

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



function readTime(content: string) {
  return `${Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200))} MIN READ`;
}

export function HomePage({ insights }: { insights: Insight[] }) {
  return (
    <>
      <Header />
      <main id="home">
        <HomeScrollNarrative />

        {/* 1. HERO SCENE WITH VIDEO */}
        <section className="hero shell" data-home-scene="hero-scene">
          <div className="hero-media">
            <HeroVideo />
            <div className="scan-line" />
            <div className="media-status">
              <i /> SYSTEM ACTIVE / LINUZVISION LLC
            </div>
          </div>
        </section>

        {/* 2. OUR APPROACH / SLOGAN OPERATING MANIFESTO */}
        <section className="change-section section-rule" data-home-scene="transformation">
          <TechLogoSlider />
          <div className="shell change-stage">
            <div className="change-signal" aria-hidden="true">
              <i />
              <span>OUR APPROACH &amp; OPERATING PHILOSOPHY</span>
            </div>
            <div className="approach-intro reveal-item">
              <span className="micro-label">THE PHILOSOPHY</span>
              <h2>
                We turn ideas into technology.
              </h2>
            </div>
            <div className="change-copy approach-grid" data-reveal-group>
              <div className="change-card" style={{ "--reveal-order": 0 } as CSSProperties}>
                <span className="change-tag">01 / VISION</span>
                <span>YOU BRING IDEA</span>
                <p>You focus on your goals, mission, and business needs. We turn your ideas into practical technology solutions.</p>
              </div>
              <div className="change-card" style={{ "--reveal-order": 1 } as CSSProperties}>
                <span className="change-tag">02 / BUILD</span>
                <span>WE DESING AND BUILD</span>
                <p>We engineer the physical datacenter infrastructure, cloud architectures, and intelligent software that bring your idea into life.</p>
              </div>
              <div className="change-card" style={{ "--reveal-order": 2 } as CSSProperties}>
                <span className="change-tag">03 / MAINTAIN</span>
                <span>WE MAINTAIN</span>
                <p>We adminter and support enterprise IT infrastructure, manage cloud and datacenter workloads, and provide ongoing monitoring, maintenance, and technical support to keep operations secure, reliable, and running smoothly.</p>
              </div>
              <div className="change-card highlight" style={{ "--reveal-order": 3 } as CSSProperties}>
                <span className="change-tag">04 / SECURE</span>
                <strong>WE SECURE</strong>
                <p>We apply Zero Trust achitecture and cybersecurity, governance, access controls, and security best practices to protect your infrastructure, platforms, data, and digital assets.</p>
              </div>
            </div>
            <ol className="approach-flow" aria-label="From idea to secure technology operations">
              <li><span>YOU BRING IDEA</span><ArrowIcon /></li>
              <li><span>WE DESING AND BUILD</span><ArrowIcon /></li>
              <li><span>WE MAINTAIN</span><ArrowIcon /></li>
              <li><span>WE SECURE</span></li>
            </ol>
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
              <h2>Technology you can depend on.</h2>
            </div>
            <p className="activities-intro">
              From physical datacenter infrastructure to cloud and AI powered platforms, we design, build, maintain, and secure reliable technology that supports business operations and long-term growth.
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
                <div className="evo-step"><span>02</span><b>SYSTEMS ADMINISTRATION</b></div>
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
                We secure the environments that protect your business. Linuzvision implements Zero-Trust architectures, continuous monitoring, system hardening, and rapid disaster recovery to ensure your systems remain resilient.
              </p>
              <ol className="home-security-operations" role="list">
                {securityOperations.map((operation, index) => <li key={operation}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span>{operation}</span></li>)}
              </ol>
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
          <div className="shell">
            <ol className="home-infrastructure-flow" role="list" aria-label="Infrastructure sequence from system to AI">
              {infrastructureFlow.map((step, index) => <li key={step}><span>{step}</span>{index < infrastructureFlow.length - 1 && <ArrowIcon />}</li>)}
            </ol>
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

        {/* 9. EXECUTIVE LEADERSHIP & PERSONNEL */}
        <section className="experience section-rule" id="leadership" data-home-scene="leadership-team">
          <div className="shell">
            <div className="leadership-heading">
              <div>
                <span className="micro-label">EXECUTIVE PERSONNEL</span>
                <h2>LEADERSHIP &amp;<br />EXECUTIVE TEAM.</h2>
              </div>
              <p className="leadership-intro">
                Architectural vision, engineering rigor, and product stewardship driving high-performance technology operations.
              </p>
            </div>

            <LeadershipSlider />
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
