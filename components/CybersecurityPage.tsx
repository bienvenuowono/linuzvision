import { ArrowIcon } from "./ArrowIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsappButton } from "./WhatsappButton";

const principles = [
  ["IDENTITY-BASED ACCESS", "Every request is authenticated and continuously evaluated."],
  ["MICROSEGMENTATION", "Workloads and systems remain isolated by design."],
  ["CONTINUOUS VERIFICATION", "Trust is never inherited from location or device."],
];
const response = [
  ["DETECT & ISOLATE", "Immediate identification of abnormal behavior and isolation of affected systems."],
  ["ANALYZE & CONTAIN", "TASHA correlates signals and supports a governed containment response."],
  ["ERADICATE & RECOVER", "Systems return through verified restoration and documented recovery steps."],
];

export function CybersecurityPage() {
  return <><Header active="CYBER" /><main className="cyber-page">
    <section className="cyber-hero shell"><h1>SECURITY THAT<br />MOVES WITH<br />YOUR BUSINESS.</h1><p>Building resilient ecosystems across hybrid infrastructures, autonomous agents, and global networks. Absolute precision. Zero compromise.</p><div className="button-row"><a className="button button-dark" href="#framework">ASSESS THE RISK <ArrowIcon /></a><a className="button" href="/contact">TALK TO AN ARCHITECT <ArrowIcon /></a></div></section>

    <section className="cyber-split shell" id="framework"><h2>ZERO-TRUST<br />FRAMEWORK</h2><div><h3>VERIFY EXPLICITLY.<br />ENFORCE LEAST PRIVILEGE.<br />ASSUME BREACH.</h3><p>Our zero-trust architecture fundamentally shifts the security paradigm from traditional perimeter defense to a dynamic, identity-aware model. Every connection is verified, authorized, and encrypted before gaining access.</p><div className="zero-visual"><img src="/images/zero-trust-datacenter.png" alt="Secure zero-trust data center aisle" /></div><div className="principle-grid">{principles.map(([title,text])=><article key={title}><h4>{title}</h4><p>{text}</p></article>)}</div></div></section>

    <section className="autonomous-defense"><div className="shell cyber-split"><h2>AUTONOMOUS<br />DEFENSE</h2><div><h3>MACHINE SPEED REACTION.<br />PREDICTIVE MITIGATION.</h3><p>TASHA ingests millions of telemetry signals per second, allowing advanced machine learning models to detect anomalies, predict attack vectors, and autonomously initiate containment before threats escalate.</p><div className="defense-visual"><img src="/images/ai-security-matrix.png" alt="TASHA autonomous security matrix" /></div><div className="defense-cards"><article><svg aria-hidden="true" viewBox="0 0 32 32"><circle cx="16" cy="16" r="10"/><path d="M8 17c4-8 12-8 16 0M11 12l2 3 3-5 3 5 3-3"/></svg><h4>BEHAVIORAL ANALYTICS</h4><p>Continuous baselines reveal subtle deviations and unknown threats.</p></article><article><svg aria-hidden="true" viewBox="0 0 32 32"><path d="M16 4 27 9v8c0 6-4.6 10-11 12C9.6 27 5 23 5 17V9l11-5Z"/><path d="m11 16 3 3 7-8"/></svg><h4>AUTONOMOUS REMEDIATION</h4><p>Automated isolation and governed recovery reduce response time.</p></article></div></div></div></section>

    <section className="resilience shell cyber-split"><h2>ARCHITECTURAL<br />RESILIENCE</h2><div className="resilience-media"><img src="/images/server-architecture.png" alt="Resilient infrastructure architecture" /><aside><strong>HARDWARE-ROOTED SECURITY</strong><span>Physical trust foundations protect critical infrastructure from the ground up.</span></aside><div className="resilience-stats"><span><strong>99.999%</strong><small>UPTIME SLA</small></span><span><strong>TIER IV</strong><small>DATA CENTER</small></span><span><strong>N+2</strong><small>REDUNDANCY</small></span></div></div></section>

    <section className="transatlantic"><div className="shell"><div><h2>SECURING THE<br />TRANSATLANTIC DATA FLOW</h2><p>Navigating the complex regulatory landscape of international data transfer. We architect secure bridges ensuring strict compliance with local data sovereignty laws while maintaining seamless continuity between Africa and the Americas.</p><ul><li>Localized Data Residency Options</li><li>Cross-Border Compliance Auditing</li><li>Latency-Optimized Encrypted Routing</li></ul></div><div className="flow-diagram"><svg aria-hidden="true" viewBox="0 0 500 430"><circle cx="250" cy="215" r="58"/><circle cx="250" cy="215" r="112"/><path d="M30 215h440M250 25v380M70 115c95 65 265 65 360 0M70 315c95-65 265-65 360 0"/><circle cx="70" cy="115" r="5"/><circle cx="430" cy="115" r="5"/><circle cx="70" cy="315" r="5"/><circle cx="430" cy="315" r="5"/></svg><b>LZV</b><span className="flow-africa">AFRICA · DATA SOVEREIGNTY</span><span className="flow-america">AMERICA · CLOUD EDGE</span><small>ENCRYPTED TRANSATLANTIC CORRIDOR</small></div></div></section>

    <section className="response shell cyber-split"><h2>RESPONSE<br />PROTOCOLS</h2><div><p>Precision execution when milliseconds matter. Our incident response framework is a structured, automated and software-led recovery model.</p>{response.map(([title,text],i)=><article key={title}><strong>{String(i+1).padStart(2,"0")}</strong><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

    <section className="cyber-specs"><div className="shell"><header><h2>SYSTEM SPECIFICATIONS</h2><span>LIVE TELEMETRY · GOVERNED</span></header><div>{[["AES-256-GCM","ENCRYPTION STANDARD"],["65 Tpps","THREAT DETECTION"],["ISO 27001","CONTROL FRAMEWORK"],["< 15 MIN","RESPONSE SLA"]].map(([v,l])=><span key={l}><small>{l}</small><strong>{v}</strong></span>)}</div></div></section>
    <section className="cyber-final"><div className="shell"><h2>THREATS EVOLVE. YOUR SECURITY<br />SHOULD TOO. BUILD FOR RESILIENCE.</h2><a className="button" href="/contact">START A CONVERSATION <ArrowIcon /></a></div></section>
  </main><Footer /><WhatsappButton /></>;
}
