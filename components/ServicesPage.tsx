import { ArrowIcon } from "./ArrowIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsappButton } from "./WhatsappButton";

const ecosystem = [
  ["AI & AUTOMATION", "/solutions"],
  ["TASHA PROTOCOL", "/tasha"],
  ["IT SUPPORT", "/training"],
  ["DATA CENTER", "#security"],
  ["CLOUD INFRA", "/cloud"],
  ["CYBERSECURITY", "#security"],
];

export function ServicesPage() {
  return (
    <>
      <Header active="SERVICES" />
      <main className="services-page">
        <section className="services-hero shell">
          <h1>TECHNOLOGY<br />THAT WORKS<br />AS ONE<br />SYSTEM.</h1>
          <p>From intelligent automation to secure infrastructure, LinuZvision helps organizations build, modernize, protect and operate the technology behind their business.</p>
          <div className="button-row">
            <a className="button button-dark" href="#ecosystem">EXPLORE OUR SERVICES <ArrowIcon /></a>
            <a className="button" href="/contact">START A CONVERSATION <ArrowIcon /></a>
          </div>
          <span className="services-scroll">SCROLL TO EXPLORE</span>
        </section>

        <section className="ecosystem shell" id="ecosystem">
          <header><h2>THE LINUZVISION ECOSYSTEM</h2><p>Integrated capabilities architecture.</p></header>
          <div className="ecosystem-map">
            <div className="ecosystem-core"><strong>LZV</strong><span>ONE SYSTEM</span></div>
            {ecosystem.map(([label, href], index) => <a className={`eco-node eco-node-${index + 1}`} href={href} key={label}><span>{label}</span></a>)}
            <svg aria-hidden="true" viewBox="0 0 1000 500" preserveAspectRatio="none"><path d="M500 250 150 90 M500 250 850 90 M500 250 80 250 M500 250 920 250 M500 250 150 410 M500 250 850 410" /></svg>
          </div>
        </section>

        <section className="service-feature shell">
          <div><h2>TRANSFORM<br />REPETITIVE PROCESSES<br />INTO INTELLIGENT<br />WORKFLOWS.</h2><p>Our AI integration doesn’t just automate; it optimizes. By deploying machine learning models tailored to your operational bottlenecks, we turn static data into predictive systems.</p><a className="text-link" href="/solutions">EXPLORE AI SOLUTIONS <ArrowIcon /></a></div>
          <div className="service-ai-visual"><img src="/images/human-machine-synergy.png" alt="Abstract architecture of connected intelligent workflows" /></div>
        </section>

        <section className="service-feature tasha-service shell">
          <div className="tasha-protocol-card"><div className="tasha-mark">T</div><span>PHASE 1 <b>UNDERSTAND</b></span><span>PHASE 2 <b>ADAPT</b></span><span>PHASE 3 <b>ACT</b></span></div>
          <div><h2>OUR INTELLIGENCE.<br />TASHA.</h2><p>An adaptive intelligence protocol designed specifically for enterprise environments. TASHA doesn’t just respond; it anticipates infrastructural needs before they become critical failures.</p><a className="text-link" href="/tasha">DISCOVER TASHA <ArrowIcon /></a></div>
        </section>

        <section className="security-service" id="security"><div className="shell"><h2>SECURITY IS<br />PART OF THE<br />ARCHITECTURE.</h2><p>We do not bolt security on at the end. It is woven into the very fabric of every system we design, build, and manage.</p><a className="text-link security-link" href="/cybersecurity">REVIEW SECURITY PROTOCOLS <ArrowIcon /></a><div className="security-visual"><img src="/images/ai-security-matrix.png" alt="Cybersecurity architecture matrix" /></div></div></section>

        <section className="services-closing"><div className="shell"><h2>TECHNOLOGY SHOULD NOT BE A<br />COLLECTION OF TOOLS. IT SHOULD<br />WORK AS ONE SYSTEM.</h2><a className="button button-light" href="/contact">LET’S BUILD WHAT YOUR BUSINESS NEEDS <ArrowIcon /></a></div></section>
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
