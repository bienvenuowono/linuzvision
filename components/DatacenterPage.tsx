import { ArrowIcon } from "./ArrowIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";

const regionalFootprint = [
  {
    country: "CAMEROON",
    code: "CMR",
    subtitle: "CENTRAL AFRICAN HUB",
    description:
      "Full turnkey datacenter engineering, high-density server rack deployment, fiber optic structured cabling, and 24/7 mission-critical facility maintenance for financial institutions and telecom backbones.",
    capabilities: ["TIER-STANDARD BUILD", "HIGH-DENSITY RACKS", "STRUCTURED FIBER", "SLA MAINTENANCE"],
  },
  {
    country: "GABON",
    code: "GAB",
    subtitle: "COASTAL & MARITIME CONNECTIVITY",
    description:
      "Subsea cable landing infrastructure integration, redundant power conditioning (UPS and generator synchronization), climate-controlled hot/cold aisle containment, and disaster recovery architectures.",
    capabilities: ["SUBSEA INTEGRATION", "POWER REDUNDANCY", "THERMAL EFFICIENCY", "CRITICAL CONTINUITY"],
  },
  {
    country: "CÔTE D'IVOIRE",
    code: "CIV",
    subtitle: "WEST AFRICAN FINANCIAL CORRIDOR",
    description:
      "Enterprise server room engineering, Zero-Trust physical containment, biometric security perimeters, and distributed edge computing nodes tailored to high-transaction corporate banking environments.",
    capabilities: ["ENTERPRISE SERVER ROOMS", "ZERO-TRUST CONTAINMENT", "EDGE COMPUTING", "24/7 REMOTE HANDS"],
  },
  {
    country: "EQUATORIAL GUINEA",
    code: "GNQ",
    subtitle: "ISLAND & MAINLAND RESILIENCE",
    description:
      "Turnkey institutional computer rooms, clean dual-feed electrical distribution, environmental telemetry monitoring, and specialized on-site hardware lifecycle diagnostics.",
    capabilities: ["TURNKEY FACILITY", "DUAL POWER FEEDS", "ENVIRONMENTAL SENSORS", "HARDWARE DIAGNOSTICS"],
  },
];

const engineeringPhases = [
  {
    phase: "01",
    title: "SITE SELECTION & STRUCTURAL ENGINEERING",
    desc: "Floor loading calculations, seismic and environmental risk evaluation, high-voltage utility feed assessment, and full compliance with TIA-942 and Uptime Institute Tier classifications.",
  },
  {
    phase: "02",
    title: "POWER REDUNDANCY & PRECISION COOLING",
    desc: "Dual-feed N+1 / 2N uninterruptible power supply (UPS) topologies, emergency diesel generator synchronization, automated transfer switches, and hot/cold aisle containment engineered for tropical and demanding climates.",
  },
  {
    phase: "03",
    title: "SERVER RACKING & STRUCTURED FIBER BACKBONES",
    desc: "High-density 42U-48U server enclosures, intelligent metered/switched PDU distribution, overhead cable management, Cat6A copper, and OM4/OS2 MPO high-bandwidth optical backbones.",
  },
  {
    phase: "04",
    title: "PHYSICAL ZERO-TRUST, DCIM & REMOTE HANDS",
    desc: "Multi-factor biometric access control, environmental telemetry (temperature, humidity, air velocity), inert gas fire suppression (FM200 / Novec 1230), and 24/7 on-site remote-hands hardware maintenance.",
  },
];

const technicalPillars = [
  {
    metric: "N+1 / 2N",
    label: "POWER & COOLING REDUNDANCY",
    detail: "Dual transformer feeds, isolated UPS strings, and automated generator failover guarantee continuous operations without runtime interruption.",
  },
  {
    metric: "42U – 48U",
    label: "HIGH-DENSITY RACK ARCHITECTURE",
    detail: "Standardized enterprise enclosures engineered for up to 15-20 kW per rack, with precision hot/cold aisle airflow containment.",
  },
  {
    metric: "100G / 400G",
    label: "MPO FIBER BACKBONE DENSITY",
    detail: "Zero-latency structured optical cabling connecting core switching fabrics, storage arrays, and international subsea cable gateways.",
  },
  {
    metric: "24/7/365",
    label: "REMOTE HANDS & DIAGNOSTICS",
    detail: "Certified technical field engineers stationed locally for rapid physical interventions, hardware swapping, and proactive DCIM monitoring.",
  },
];

export function DatacenterPage() {
  return (
    <>
      <Header active="DATACENTER" />
      <main className="datacenter-page">
        {/* 1. HERO SECTION */}
        <section className="datacenter-hero shell">
          <div className="datacenter-hero-grid">
            <div className="datacenter-hero-copy">
              <span className="micro-label">MISSION-CRITICAL INFRASTRUCTURE</span>
              <h1>TURNKEY<br />DATACENTERS.<br />BUILT TO LAST.</h1>
              <p>
                From architectural site planning and precision cooling to high-density server racking and 24/7 on-site operations. LinuZvision designs, constructs, and maintains resilient physical datacenter environments connecting America and Africa.
              </p>
              <div className="button-row">
                <a className="button button-dark" href="/contact">
                  START A CONVERSATION <ArrowIcon />
                </a>
                <a className="button" href="#footprint">
                  REGIONAL FOOTPRINT <ArrowIcon />
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
                <span>TIER-RESILIENT INFRASTRUCTURE // LZV-DC</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PROVEN REGIONAL TRACK RECORD (CAMEROON, GABON, COTE D'IVOIRE, EQUATORIAL GUINEA) */}
        <section className="datacenter-footprint section-rule" id="footprint">
          <div className="shell">
            <div className="footprint-header">
              <div>
                <span className="micro-label">PROVEN REGIONAL TRACK RECORD</span>
                <h2>RECOGNIZED<br />INFRASTRUCTURE<br />EXPERTISE.</h2>
              </div>
              <p>
                LinuZvision&apos;s datacenter engineering and mission-critical hardware deployment is recognized and active across high-demand African markets. We bridge North American engineering standards with the demanding environmental and power realities of Central and West Africa.
              </p>
            </div>

            <div className="footprint-grid">
              {regionalFootprint.map((item) => (
                <article className="footprint-card" key={item.country}>
                  <header className="footprint-card-header">
                    <div className="country-tag">
                      <strong>{item.country}</strong>
                      <span>{item.code}</span>
                    </div>
                    <small>{item.subtitle}</small>
                  </header>
                  <p>{item.description}</p>
                  <div className="footprint-capabilities">
                    {item.capabilities.map((cap) => (
                      <span key={cap}>{cap}</span>
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
              <span className="micro-label">TRANSCONTINENTAL SYNERGY</span>
              <h2>AMERICA ↔ AFRICA ↔ EUROPE<br />ENGINEERED FOR<br />CONTINUITY.</h2>
              <p>
                We bridge American technological rigor, certified Tier compliance methodologies, and high-density hardware supply chains with sovereign data residency and mission-critical operational requirements in europe and Africa.
              </p>
              <div className="corridor-points">
                <div>
                  <strong>SOVEREIGN RESILIENCY</strong>
                  <span>Local data sovereignty supported by clean, isolated power generation and cold-chain thermal regulation.</span>
                </div>
                <div>
                  <strong>GLOBAL INTERCONNECTIVITY</strong>
                  <span>Low-latency routing directly linked to subsea cable landing stations and international carrier-neutral exchanges.</span>
                </div>
                <div>
                  <strong>ON-THE-GROUND FIELD TEAMS</strong>
                  <span>Direct physical intervention capability with local certified technicians available 24/7 across our regional footprint.</span>
                </div>
              </div>
            </div>

            <div className="corridor-visual-frame">
              <img
                src="/images/zero-trust-datacenter.png"
                alt="Zero Trust secure physical datacenter containment aisle"
              />
              <div className="corridor-status-tag">
                <span>AMERICA</span>
                <i></i>
                <b>LZV CORRIDOR</b>
                <i></i>
                <span>AFRICA AND EUROPE</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. ENGINEERING LIFECYCLE PHASES */}
        <section className="datacenter-lifecycle section-rule">
          <div className="shell">
            <div className="lifecycle-header">
              <span className="micro-label">END-TO-END EXECUTION</span>
              <h2>FROM BLUEPRINT TO<br />MISSION-CRITICAL OPERATION.</h2>
              <p>
                A rigorous, four-phase engineering framework governing every aspect of your physical infrastructure project.
              </p>
            </div>

            <div className="lifecycle-grid">
              {engineeringPhases.map((phase) => (
                <article className="lifecycle-step" key={phase.phase}>
                  <span className="step-number">{phase.phase}</span>
                  <h3>{phase.title}</h3>
                  <p>{phase.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TECHNICAL PILLARS / SPECIFICATIONS */}
        <section className="datacenter-specs section-rule">
          <div className="shell">
            <header className="specs-header">
              <span className="micro-label">ENGINEERING SPECIFICATIONS</span>
              <h2>DESIGNED FOR ZERO UNPLANNED DOWNTIME.</h2>
            </header>

            <div className="specs-grid">
              {technicalPillars.map((pillar) => (
                <article className="spec-card" key={pillar.label}>
                  <strong>{pillar.metric}</strong>
                  <h4>{pillar.label}</h4>
                  <p>{pillar.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CLOSING CALL TO ACTION */}
        <section className="datacenter-cta section-rule">
          <div className="shell cta-inner">
            <span className="micro-label">READY TO CONSTRUCT</span>
            <h2>BUILD YOUR MISSION-CRITICAL<br />DATACENTER WITH CONFIDENCE.</h2>
            <p>
              Whether you are planning a greenfield Tier-standard facility, retrofitting existing server rooms for high-density AI compute, or seeking certified remote-hands maintenance across Cameroon, Gabon, Côte d&apos;Ivoire, or Equatorial Guinea, our engineering team is ready.
            </p>
            <div className="button-row">
              <a className="button button-light" href="/contact">
                CONSULT OUR ENGINEERS <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
