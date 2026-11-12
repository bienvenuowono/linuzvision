import { ArrowIcon } from "./ArrowIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ServicesEcosystemVideo } from "./ServicesEcosystemVideo";
import { Text } from "./Text";

export function ServicesPage() {
  return (
    <>
      <Header active="SERVICES" />
      <main className="services-page">
        <section className="ecosystem-map services-ecosystem-film" aria-label="LinuZvision ecosystem video">
          <ServicesEcosystemVideo />
        </section>

        <section className="services-hero shell">
          <h1><Text id="services.hero.title" /></h1>
          <p><Text id="services.hero.text" /></p>
          <div className="button-row">
            <a className="button button-dark" href="#ecosystem"><Text id="services.hero.button1" /> <ArrowIcon /></a>
            <a className="button" href="/contact"><Text id="services.hero.button2" /> <ArrowIcon /></a>
          </div>
          <span className="services-scroll"><Text id="services.hero.scroll" /></span>
        </section>

        <section className="service-feature shell" id="ecosystem">
          <div><h2><Text id="services.ai.title" /></h2><p><Text id="services.ai.text" /></p><a className="text-link" href="/solutions"><Text id="services.ai.link" /> <ArrowIcon /></a></div>
          <div className="service-ai-visual"><img src="/images/human-machine-synergy.png" alt="Abstract architecture of connected intelligent workflows" /></div>
        </section>

        <section className="service-feature tasha-service shell">
          <div className="tasha-protocol-card"><div className="tasha-mark">T</div><span><Text id="services.tasha.phase1Label" /> <b><Text id="services.tasha.phase1" /></b></span><span><Text id="services.tasha.phase2Label" /> <b><Text id="services.tasha.phase2" /></b></span><span><Text id="services.tasha.phase3Label" /> <b><Text id="services.tasha.phase3" /></b></span></div>
          <div><h2><Text id="services.tasha.title" /></h2><p><Text id="services.tasha.text" /></p><a className="text-link" href="/tasha"><Text id="services.tasha.link" /> <ArrowIcon /></a></div>
        </section>

        <section className="security-service" id="security"><div className="shell"><h2><Text id="services.security.title" /></h2><p><Text id="services.security.text" /></p><a className="text-link security-link" href="/cybersecurity"><Text id="services.security.link" /> <ArrowIcon /></a><div className="security-visual"><img src="/images/ai-security-matrix.png" alt="Cybersecurity architecture matrix" /></div></div></section>

        <section className="services-closing"><div className="shell"><h2><Text id="services.final.title" /></h2><a className="button button-light" href="/contact"><Text id="services.final.button" /> <ArrowIcon /></a></div></section>
      </main>
      <Footer />
    </>
  );
}
