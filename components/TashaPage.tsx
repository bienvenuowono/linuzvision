import { ArrowIcon } from "./ArrowIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { TashaHeroVideo } from "./TashaHeroVideo";
import { Text } from "./Text";

const agents = [1, 2, 3, 4] as const;
const modes = [1, 2, 3, 4] as const;
const deployments = [1, 2] as const;
const tags = [1, 2, 3] as const;
const principles = [1, 2, 3, 4] as const;

export function TashaPage() {
  return (
    <>
      <Header active="TASHA" />
      <main className="tasha-page">
        <section className="tasha-hero">
          <div className="tasha-hero-visual">
            <TashaHeroVideo />
          </div>
          <div className="shell tasha-hero-content">
            <div className="tasha-hero-grid">
              <h1><Text id="tasha.hero.title" /></h1>
              <div>
                <p><Text id="tasha.hero.text" /></p>
                <a className="button" href="#architecture"><Text id="tasha.hero.button" /> <ArrowIcon /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="paradigm section-rule"><div className="shell paradigm-grid"><div><h2><Text id="tasha.paradigm.title" /></h2><p><Text id="tasha.paradigm.text" /></p></div><div className="paradigm-switch"><div><span><Text id="tasha.paradigm.layer1Label" /></span><strong><Text id="tasha.paradigm.layer1Value" /></strong></div><div><span><Text id="tasha.paradigm.layer2Label" /></span><strong><Text id="tasha.paradigm.layer2Value" /></strong></div></div></div></section>

        <section className="tasha-architecture shell" id="architecture">
          <div className="tasha-section-title"><h2><Text id="tasha.architecture.title" /></h2><p><Text id="tasha.architecture.text" /></p></div>
          <div className="tasha-architecture-map" aria-label="TASHA architecture from user request to connected business systems">
            <div className="architecture-entry"><strong><Text id="tasha.architecture.entryTitle" /></strong><span><Text id="tasha.architecture.entryText" /></span></div><i className="architecture-flow" aria-hidden="true" />
            <div className="architecture-layer architecture-assistant"><span><Text id="tasha.architecture.assistantLabel" /></span><h3><Text id="tasha.architecture.assistantTitle" /></h3><p><Text id="tasha.architecture.assistantText" /></p></div><i className="architecture-flow" aria-hidden="true" />
            <div className="architecture-layer architecture-core"><span><Text id="tasha.architecture.coreLabel" /></span><h3><Text id="tasha.architecture.coreTitle" /></h3><p><Text id="tasha.architecture.coreText" /></p></div><i className="architecture-flow" aria-hidden="true" />
            <div className="architecture-agent-layer"><header><h3><Text id="tasha.architecture.agentsTitle" /></h3><p><Text id="tasha.architecture.agentsText" /></p></header><div>{agents.map((n) => <article key={n}><h4><Text id={`tasha.agents.${n}.title` as const} /></h4><p><Text id={`tasha.agents.${n}.text` as const} /></p></article>)}</div></div><i className="architecture-flow" aria-hidden="true" />
            <div className="architecture-systems"><span><Text id="tasha.architecture.systemsLabel" /></span><strong><Text id="tasha.architecture.systemsTitle" /></strong><p><Text id="tasha.architecture.systemsText" /></p></div>
          </div>
        </section>

        <section className="operating-system"><div className="shell"><div className="operating-heading"><h2><Text id="tasha.operating.title" /></h2><p><Text id="tasha.operating.text" /></p></div><div className="operating-modes">{modes.map((n) => <article key={n}><h3><Text id={`tasha.modes.${n}.title` as const} /></h3><p><Text id={`tasha.modes.${n}.text` as const} /></p></article>)}</div></div></section>

        <section className="deployments shell"><div className="tasha-section-title"><h2><Text id="tasha.deployments.title" /></h2><p><Text id="tasha.deployments.text" /></p></div><div className="deployment-grid">{deployments.map((n) => <article key={n}><h3><Text id={`tasha.deployments.${n}.title` as const} /></h3><p><Text id={`tasha.deployments.${n}.text` as const} /></p><div>{tags.map((t) => <span key={t}><Text id={`tasha.deployments.${n}.tag${t}` as const} /></span>)}</div></article>)}</div></section>

        <section className="tasha-corridor section-rule"><div className="shell corridor-grid"><div className="corridor-map"><video src="/images/tasha-2.mp4" autoPlay muted loop playsInline preload="metadata" aria-label="Network corridor video connecting America, Africa and Europe" /><div><span><Text id="tasha.corridor.region1" /></span><i /><b><Text id="tasha.corridor.region2" /></b><i /><span><Text id="tasha.corridor.region3" /></span></div></div><div><h2><Text id="tasha.corridor.title" /></h2><p><Text id="tasha.corridor.text1" /></p><p><Text id="tasha.corridor.text2" /></p></div></div></section>

        <section className="tasha-principles"><div className="shell principles-inner"><h2><Text id="tasha.principles.title" /></h2><div>{principles.map((n) => <span key={n}><Text id={`tasha.principles.${n}` as const} /></span>)}</div></div></section>
        <section className="tasha-final"><div className="shell"><h2><Text id="tasha.final.title" /></h2><p><Text id="tasha.final.text" /></p><a className="button button-light" href="/contact"><Text id="tasha.final.button" /> <ArrowIcon /></a></div></section>
      </main>
      <Footer />
    </>
  );
}
