import { ArrowIcon } from "./ArrowIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Text } from "./Text";

const layers = [1, 2, 3] as const;
const specs = [1, 2, 3, 4] as const;

function HardwareIcon({ type }: { type: number }) {
  return <svg className="hardware-icon" aria-hidden="true" viewBox="0 0 32 32" fill="none">
    {type === 0 && <><rect x="6" y="5" width="20" height="22" stroke="currentColor"/><path d="M9 10h14M9 16h14M9 22h14" stroke="currentColor"/><circle cx="11" cy="8" r="1" fill="currentColor"/></>}
    {type === 1 && <><ellipse cx="16" cy="7" rx="10" ry="4" stroke="currentColor"/><path d="M6 7v9c0 2.2 4.5 4 10 4s10-1.8 10-4V7M6 16v9c0 2.2 4.5 4 10 4s10-1.8 10-4v-9" stroke="currentColor"/></>}
    {type === 2 && <><rect x="5" y="12" width="22" height="12" stroke="currentColor"/><path d="M10 12V7h12v5M9 18h2m3 0h2m3 0h4M11 24v3m10-3v3" stroke="currentColor"/></>}
  </svg>;
}

export function CloudPage() {
  return <>
    <Header active="CLOUD" />
    <main className="cloud-page">
      <section className="cloud-hero shell">
        <h1><Text id="cloud.hero.title" /></h1>
        <div><p><Text id="cloud.hero.text" /></p><a className="button" href="#hybrid"><Text id="cloud.hero.button" /> <ArrowIcon /></a></div>
      </section>

      <section className="topology"><div className="shell"><header><h2><Text id="cloud.topology.title" /></h2><span><Text id="cloud.topology.status" /></span></header><div className="topology-frame"><img src="/images/cloud-topology.png" alt="Cloud computing and infrastructure topology" /><div><span><Text id="cloud.topology.layer1" /></span><span><Text id="cloud.topology.layer2" /></span><span><Text id="cloud.topology.layer3" /></span></div></div></div></section>

      <section className="hybrid shell" id="hybrid"><div><h2><Text id="cloud.hybrid.title" /></h2><p><Text id="cloud.hybrid.text" /></p><div className="hybrid-stats"><span><Text id="cloud.hybrid.stat1Label" /><strong><Text id="cloud.hybrid.stat1Value" /></strong></span><span><Text id="cloud.hybrid.stat2Label" /><strong><Text id="cloud.hybrid.stat2Value" /></strong></span></div></div><div className="hybrid-diagram"><span><Text id="cloud.hybrid.node1" /></span><span><Text id="cloud.hybrid.node2" /></span><i /></div></section>

      <section className="hardware"><div className="shell"><h2><Text id="cloud.hardware.title" /></h2><div className="hardware-grid">{layers.map((n, i) => <article key={n}><HardwareIcon type={i} /><h3><Text id={`cloud.hardware.${n}.title` as const} /></h3><p><Text id={`cloud.hardware.${n}.text` as const} /></p></article>)}</div></div></section>

      <section className="cloud-intelligence shell"><article><h2><Text id="cloud.zeroTrust.title" /></h2><p><Text id="cloud.zeroTrust.text" /></p><ul><li><Text id="cloud.zeroTrust.item1" /></li><li><Text id="cloud.zeroTrust.item2" /></li><li><Text id="cloud.zeroTrust.item3" /></li></ul></article><article className="ai-cloud"><h2><Text id="cloud.ai.title" /></h2><p><Text id="cloud.ai.text" /></p><span><i /> <Text id="cloud.ai.status" /></span></article></section>

      <section className="cloud-specs shell"><h2><Text id="cloud.specs.title" /></h2><div>{specs.map((n) => <span key={n}><strong><Text id={`cloud.specs.${n}.value` as const} /></strong><small><Text id={`cloud.specs.${n}.label` as const} /></small></span>)}</div></section>

      <section className="cloud-final"><div className="shell"><h2><Text id="cloud.final.title" /></h2><a className="button button-light" href="/contact"><Text id="cloud.final.button" /> <ArrowIcon /></a></div></section>
    </main>
    <Footer />
  </>;
}
