import { ArrowIcon } from "./ArrowIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Text } from "./Text";

const principles = [1, 2, 3] as const;
const response = [1, 2, 3] as const;
const specs = [1, 2, 3, 4] as const;

export function CybersecurityPage() {
  return <><Header active="CYBER" /><main className="cyber-page">
    <section className="cyber-hero shell"><h1><Text id="cybersecurity.hero.title" /></h1><p><Text id="cybersecurity.hero.text" /></p><div className="button-row"><a className="button button-dark" href="#framework"><Text id="cybersecurity.hero.button1" /> <ArrowIcon /></a><a className="button" href="/contact"><Text id="cybersecurity.hero.button2" /> <ArrowIcon /></a></div></section>

    <section className="cyber-split shell" id="framework"><h2><Text id="cybersecurity.zeroTrust.title" /></h2><div><h3><Text id="cybersecurity.zeroTrust.subtitle" /></h3><p><Text id="cybersecurity.zeroTrust.text" /></p><div className="zero-visual"><img src="/images/zero-trust-datacenter.png" alt="Secure zero-trust data center aisle" /></div><div className="principle-grid">{principles.map((n) => <article key={n}><h4><Text id={`cybersecurity.principles.${n}.title` as const} /></h4><p><Text id={`cybersecurity.principles.${n}.text` as const} /></p></article>)}</div></div></section>

    <section className="autonomous-defense"><div className="shell cyber-split"><h2><Text id="cybersecurity.defense.title" /></h2><div><h3><Text id="cybersecurity.defense.subtitle" /></h3><p><Text id="cybersecurity.defense.text" /></p><div className="defense-visual"><img src="/images/ai-security-matrix.png" alt="TASHA autonomous security matrix" /></div><div className="defense-cards"><article><svg aria-hidden="true" viewBox="0 0 32 32"><circle cx="16" cy="16" r="10"/><path d="M8 17c4-8 12-8 16 0M11 12l2 3 3-5 3 5 3-3"/></svg><h4><Text id="cybersecurity.defense.card1Title" /></h4><p><Text id="cybersecurity.defense.card1Text" /></p></article><article><svg aria-hidden="true" viewBox="0 0 32 32"><path d="M16 4 27 9v8c0 6-4.6 10-11 12C9.6 27 5 23 5 17V9l11-5Z"/><path d="m11 16 3 3 7-8"/></svg><h4><Text id="cybersecurity.defense.card2Title" /></h4><p><Text id="cybersecurity.defense.card2Text" /></p></article></div></div></div></section>

    <section className="resilience shell cyber-split"><h2><Text id="cybersecurity.resilience.title" /></h2><div className="resilience-media"><img src="/images/server-architecture.png" alt="Resilient infrastructure architecture" /><aside><strong><Text id="cybersecurity.resilience.noteTitle" /></strong><span><Text id="cybersecurity.resilience.noteText" /></span></aside><div className="resilience-stats"><span><strong><Text id="cybersecurity.resilience.stat1Value" /></strong><small><Text id="cybersecurity.resilience.stat1Label" /></small></span><span><strong><Text id="cybersecurity.resilience.stat2Value" /></strong><small><Text id="cybersecurity.resilience.stat2Label" /></small></span><span><strong><Text id="cybersecurity.resilience.stat3Value" /></strong><small><Text id="cybersecurity.resilience.stat3Label" /></small></span></div></div></section>

    <section className="transatlantic"><div className="shell"><div><h2><Text id="cybersecurity.transatlantic.title" /></h2><p><Text id="cybersecurity.transatlantic.text" /></p><ul><li><Text id="cybersecurity.transatlantic.item1" /></li><li><Text id="cybersecurity.transatlantic.item2" /></li><li><Text id="cybersecurity.transatlantic.item3" /></li></ul></div><div className="flow-diagram"><svg aria-hidden="true" viewBox="0 0 500 430"><circle cx="250" cy="215" r="58"/><circle cx="250" cy="215" r="112"/><path d="M30 215h440M250 25v380M70 115c95 65 265 65 360 0M70 315c95-65 265-65 360 0"/><circle cx="70" cy="115" r="5"/><circle cx="430" cy="115" r="5"/><circle cx="70" cy="315" r="5"/><circle cx="430" cy="315" r="5"/></svg><b>LZV</b><div className="flow-region flow-america"><strong><Text id="cybersecurity.transatlantic.region1" /></strong><span><Text id="cybersecurity.transatlantic.region1Detail" /></span></div><div className="flow-region flow-africa"><strong><Text id="cybersecurity.transatlantic.region2" /></strong></div><small><Text id="cybersecurity.transatlantic.corridor" /></small></div></div></section>

    <section className="response shell cyber-split"><h2><Text id="cybersecurity.response.title" /></h2><div><p><Text id="cybersecurity.response.text" /></p>{response.map((n) => <article key={n}><strong>{String(n).padStart(2, "0")}</strong><div><h3><Text id={`cybersecurity.response.${n}.title` as const} /></h3><p><Text id={`cybersecurity.response.${n}.text` as const} /></p></div></article>)}</div></section>

    <section className="cyber-specs"><div className="shell"><header><h2><Text id="cybersecurity.specs.title" /></h2><span><Text id="cybersecurity.specs.status" /></span></header><div>{specs.map((n) => <span key={n}><small><Text id={`cybersecurity.specs.${n}.label` as const} /></small><strong><Text id={`cybersecurity.specs.${n}.value` as const} /></strong></span>)}</div></div></section>
    <section className="cyber-final"><div className="shell"><h2><Text id="cybersecurity.final.title" /></h2><a className="button" href="/contact"><Text id="cybersecurity.final.button" /> <ArrowIcon /></a></div></section>
  </main><Footer /></>;
}
