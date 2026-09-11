import { ArrowIcon } from "./ArrowIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsappButton } from "./WhatsappButton";

const layers = [
  ["SERVERS", "High-density compute nodes optimized for intensive workloads, virtualized for dynamic resource allocation."],
  ["STORAGE", "NVMe arrays and distributed object storage offering resilient capacity with microsecond access times."],
  ["NETWORK", "High-throughput architecture engineered to remove bottlenecks between every layer."],
];

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
        <h1>THE<br />INFRASTRUCTURE<br />BEHIND YOUR<br />BUSINESS.</h1>
        <div><p>We architect, deploy, and manage high-performance cloud environments designed for extreme reliability, zero-trust security, and seamless scalability. Your operations, solidified across continents.</p><a className="button" href="#hybrid">INITIATE PROTOCOL <ArrowIcon /></a></div>
      </section>

      <section className="topology"><div className="shell"><header><h2>TOPOLOGY MAP</h2><span>LIVE VIEW · SYSTEM LZV</span></header><div className="topology-frame"><img src="/images/cloud-topology.png" alt="Cloud computing and infrastructure topology" /><div><span>COMPUTE</span><span>STORAGE</span><span>NETWORK</span></div></div></div></section>

      <section className="hybrid shell" id="hybrid"><div><h2>BRIDGING ON-<br />PREMISES &amp; CLOUD</h2><p>Seamless integration across continents. Our hybrid architecture connects secure on-premises data centers in Africa with hyper-scalable cloud infrastructure in America, ensuring low latency, data sovereignty, and uncompromised performance.</p><div className="hybrid-stats"><span>LATENCY<strong>&lt; 50ms</strong></span><span>REDUNDANCY<strong>N+2</strong></span></div></div><div className="hybrid-diagram"><span>ON-PREM<br />AFRICA</span><span>CLOUD<br />AMERICA</span><i /></div></section>

      <section className="hardware"><div className="shell"><h2>DEEP INFRASTRUCTURE. RAW POWER.</h2><div className="hardware-grid">{layers.map(([title,text],i)=><article key={title}><HardwareIcon type={i} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="cloud-intelligence shell"><article><h2>ZERO-TRUST<br />PROTOCOL</h2><p>Security is not a layer; it is the foundation. Every request is verified. Every packet is encrypted. Our cloud architecture operates on a default-deny principle, fortified by automated threat response.</p><ul><li>EDGE ENCRYPTION</li><li>IDENTITY-AWARE ACCESS</li><li>MICROSEGMENTATION</li></ul></article><article className="ai-cloud"><h2>AI-OPTIMIZED<br />INFRASTRUCTURE</h2><p>TASHA continuously monitors telemetry data, predicts load spikes and automatically reallocates resources to ensure optimal performance and cost-efficiency.</p><span><i /> TASHA MONITORING ACTIVE</span></article></section>

      <section className="cloud-specs shell"><h2>TECHNICAL SPECIFICATIONS</h2><div>{[["99.99%","UPTIME SLA"],["10+","GLOBAL REGIONS"],["∞","AUTO-SCALABILITY"],["24/7","NOC SUPPORT"]].map(([value,label])=><span key={label}><strong>{value}</strong><small>{label}</small></span>)}</div></section>

      <section className="cloud-final"><div className="shell"><h2>LET’S SCALE<br />YOUR AMBITION</h2><a className="button button-light" href="/contact">START A CONVERSATION <ArrowIcon /></a></div></section>
    </main>
    <Footer /><WhatsappButton />
  </>;
}
