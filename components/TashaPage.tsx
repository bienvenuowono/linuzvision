import { ArrowIcon } from "./ArrowIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { TashaHeroVideo } from "./TashaHeroVideo";
import { WhatsappButton } from "./WhatsappButton";

const specializedAgents = [
  ["LEADS AGENT", "Qualifies requests and prepares the next commercial action."],
  ["CRM AGENT", "Reads and updates authorized customer relationship workflows."],
  ["INVOICE AGENT", "Supports document and invoice processing inside approved rules."],
  ["SUPPORT AGENT", "Assists requests, resolves known cases and escalates when judgment is needed."],
];

const operatingModes = [
  ["UNDERSTAND", "Interprets the request using conversation, available data and the operating context."],
  ["DECIDE", "Selects an appropriate next step within permissions, policies and business rules."],
  ["DELEGATE", "Routes the task to the specialized agent designed for that operational responsibility."],
  ["ACT", "Executes an authorized workflow step, records the outcome and escalates when required."],
];

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
              <h1>INTELLIGENCE<br />THAT EXECUTES.</h1>
              <div>
                <p>TASHA combines a conversational entry point with an agentic intelligence core. It understands context, decides within approved boundaries and coordinates specialized agents across business workflows.</p>
                <a className="button" href="#architecture">EXPLORE THE ARCHITECTURE <ArrowIcon /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="paradigm section-rule"><div className="shell paradigm-grid"><div><h2>FROM CONVERSATION.<br />TO COORDINATED ACTION.</h2><p>The assistant receives a request in natural language. TASHA&apos;s agentic core interprets the objective, chooses the appropriate capability and coordinates an authorized action without losing human oversight.</p></div><div className="paradigm-switch"><div><span>CONVERSATIONAL LAYER</span><strong>COMMUNICATES</strong></div><div><span>AGENTIC LAYER</span><strong>COORDINATES</strong></div></div></div></section>

        <section className="tasha-architecture shell" id="architecture">
          <div className="tasha-section-title"><h2>HOW TASHA<br />IS ORGANIZED.</h2><p>Your architecture becomes a clear operating chain: one entry point, one reasoning core, specialized agents and connected business systems.</p></div>
          <div className="tasha-architecture-map" aria-label="TASHA architecture from user request to connected business systems">
            <div className="architecture-entry"><strong>CUSTOMER / USER</strong><span>A request, question or business objective enters the system.</span></div><i className="architecture-flow" aria-hidden="true" />
            <div className="architecture-layer architecture-assistant"><span>CONVERSATIONAL ENTRY</span><h3>TASHA ASSISTANT</h3><p>Receives the request, maintains the dialogue and makes the interaction understandable to the user.</p></div><i className="architecture-flow" aria-hidden="true" />
            <div className="architecture-layer architecture-core"><span>UNDERSTAND · DECIDE · ACT</span><h3>TASHA AGENTIC CORE</h3><p>Interprets context, selects a permitted course of action, delegates work and tracks the result.</p></div><i className="architecture-flow" aria-hidden="true" />
            <div className="architecture-agent-layer"><header><h3>AI AGENT LAYER</h3><p>Purpose-built agents handle distinct responsibilities under one governance model.</p></header><div>{specializedAgents.map(([title, text]) => <article key={title}><h4>{title}</h4><p>{text}</p></article>)}</div></div><i className="architecture-flow" aria-hidden="true" />
            <div className="architecture-systems"><span>CONNECTED BUSINESS SYSTEMS</span><strong>CRM · EMAIL · WHATSAPP · DATA</strong><p>Connections are configured according to the organization&apos;s approved tools, permissions and operating rules.</p></div>
          </div>
        </section>

        <section className="operating-system"><div className="shell"><div className="operating-heading"><h2>FROM SIGNAL<br />TO ACTION.</h2><p>TASHA moves through an explicit operating sequence. Each stage can be governed, observed and connected to human oversight.</p></div><div className="operating-modes">{operatingModes.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section className="deployments shell"><div className="tasha-section-title"><h2>DESIGNED FOR<br />REAL OPERATIONS.</h2><p>One intelligence layer, adapted to the requirements of each organization.</p></div><div className="deployment-grid"><article><h3>CUSTOMER &amp; FINANCIAL OPERATIONS</h3><p>Prospect qualification, customer assistance, document workflows, service requests and operational follow-up.</p><div><span>CONTROLLED CONTEXT</span><span>HUMAN ESCALATION</span><span>TRACEABLE ACTIONS</span></div></article><article><h3>ENTERPRISE WORKFLOWS</h3><p>Lead capture, CRM updates, email coordination, scheduling, reporting and repetitive work across connected systems.</p><div><span>WORKFLOW INTEGRATION</span><span>MULTILINGUAL</span><span>ROLE-BASED CONTROL</span></div></article></div></section>

        <section className="tasha-corridor section-rule"><div className="shell corridor-grid"><div className="corridor-map"><video src="/images/tasha-2.mp4" autoPlay muted loop playsInline preload="metadata" aria-label="Network corridor video connecting America, Africa and Europe" /><div><span>AMERICA</span><i /><b>AFRICA</b><i /><span>EUROPE</span></div></div><div><h2>ONE SYSTEM.<br />DIFFERENT CONTEXTS.</h2><p>TASHA is conceived for organizations operating across African and American markets, where language, infrastructure, regulation and customer expectations can differ significantly.</p><p>Adaptation does not mean unchecked autonomy. Context, permissions and human oversight remain part of the operating model.</p></div></div></section>

        <section className="tasha-principles"><div className="shell principles-inner"><h2>POWERFUL.<br />GOVERNED.<br />HUMAN-AWARE.</h2><div><span>SECURITY</span><span>PRIVACY</span><span>TRANSPARENCY</span><span>HUMAN OVERSIGHT</span></div></div></section>
        <section className="tasha-final"><div className="shell"><h2>FROM REQUEST.<br />TO RESPONSIBLE ACTION.</h2><p>Explore how TASHA could participate in your approved business workflows.</p><a className="button button-light" href="/contact">START A CONVERSATION <ArrowIcon /></a></div></section>
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
