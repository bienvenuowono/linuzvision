import { ArrowIcon } from "./ArrowIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsappButton } from "./WhatsappButton";

const services = [
  ["PROACTIVE MONITORING", "Detecting failures before they interrupt operations."],
  ["ARCHITECTURAL RESOLUTION", "Engineering permanent fixes rather than temporary patches."],
  ["ENTERPRISE AI TRAINING", "Competency programs for safe and effective AI adoption."],
  ["INFRASTRUCTURE SUPPORT", "Maintaining the digital foundation your teams depend on."],
  ["CYBERSECURITY ALIGNMENT", "Keeping support decisions aligned with security protocols."],
  ["DATA SOVEREIGNTY", "Supporting regional requirements across Africa and America."],
];
const training = [
  ["AI LITERACY FUNDAMENTALS", "Establish a baseline understanding of AI, responsible use and its role in daily operations."],
  ["ADVANCED PRODUCTIVITY TOOLS", "Move teams into intelligent, repeatable and governed workflows."],
  ["DIGITAL TRANSFORMATION WORKSHOPS", "Translate business priorities into an actionable technology roadmap."],
];

export function TrainingPage() {
  return <><Header active="TRAINING" /><main className="training-page">
    <section className="training-hero shell"><h1>TECHNOLOGY<br />SHOULD HELP<br />YOUR PEOPLE<br />MOVE FASTER.</h1><p>Empowering teams with seamless IT support and advanced AI training. We bridge the gap between human potential and technological capability.</p><a className="button button-dark" href="#ecosystem">EXPLORE SUPPORT SERVICES <ArrowIcon /></a></section>
    <section className="support-story shell"><h2>IT IS MORE<br />THAN FIXING<br />PROBLEMS.</h2><div><p>True technical support transcends the helpdesk. It is an architectural foundation that connects infrastructure, knowledge, and artificial intelligence to create a resilient operational environment. We don't just react to tickets; we engineer systems that prevent them.</p><img src="/images/enterprise-training.png" alt="Enterprise team collaborating around a technology plan" /></div></section>
    <section className="training-services shell" id="ecosystem"><header><h2>CORE SERVICES ECOSYSTEM</h2><p>A systemic approach to identifying friction and engineering resolution.</p></header><div>{services.map(([title,text])=><article key={title}><span /><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="synergy-training"><div className="shell"><img src="/images/human-machine-synergy.png" alt="Human-machine collaboration architecture" /><div><h2>HUMAN-MACHINE<br />SYNERGY</h2><p>At the core of our support architecture is TASHA, an advanced AI entity that assists our support teams to resolve issues at machine speed. TASHA doesn't replace human expertise; she amplifies it.</p><a className="button button-light" href="/tasha">MEET TASHA <ArrowIcon /></a></div></div></section>
    <section className="training-bridge shell"><div className="bridge-symbol">AFRICA <i /> AMERICA</div><h2>THE AFRICA ↔ AMERICA BRIDGE</h2><p>LinuZvision operates seamlessly across continents, providing organizations with localized expertise backed by global standards. We understand the nuanced infrastructure challenges and operational requirements in both regions.</p></section>
    <section className="programs"><div className="shell"><h2>TRAINING &amp;<br />TRANSFORMATION</h2><div><p>Adopting artificial intelligence is not merely a software update. It is a fundamental shift in expertise, operations and culture.</p>{training.map(([title,text])=><article key={title}><div><h3>{title}</h3><p>{text}</p></div><span>+</span></article>)}</div></div></section>
    <section className="training-benchmarks shell"><h2>TECHNICAL BENCHMARKS</h2><div><span><strong>&lt; 15m</strong><small>AVERAGE RESPONSE</small></span><span><strong>99.99%</strong><small>SYSTEM AVAILABILITY</small></span><span><strong>L3</strong><small>EXPERT SUPPORT TIER</small></span></div></section>
    <section className="training-final"><div className="shell"><h2><span>IT SYSTEMS...</span><span>INFRASTRUCTURE...</span><span>PEOPLE...</span><strong>INTELLIGENCE.</strong></h2><a className="button button-light" href="/contact">START A CONVERSATION <ArrowIcon /></a></div></section>
  </main><Footer /><WhatsappButton /></>;
}
