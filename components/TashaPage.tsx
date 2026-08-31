import { ArrowIcon } from "./ArrowIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsappButton } from "./WhatsappButton";

const capabilities = [
  ["CONTEXTUAL INGESTION", "Understands conversations, documents and business signals inside a governed operating context."],
  ["STRATEGIC QUALIFICATION", "Evaluates intent, relevance and next actions against the organization’s objectives."],
  ["DEFINITIVE EXECUTION", "Participates in approved workflows, updates systems and escalates decisions when human judgment is required."],
];

const operatingModes = [
  ["UNDERSTAND", "Interprets context across conversations, data and operational systems."],
  ["ADAPT", "Adjusts its behavior to the rules and needs of each business environment."],
  ["ENGAGE", "Maintains relevant, multilingual conversations across the customer journey."],
  ["ACT", "Executes authorized workflow steps and records the outcome."],
];

export function TashaPage() {
  return (
    <>
      <Header active="TASHA" />
      <main className="tasha-page">
        <section className="tasha-hero shell">
          <div className="tasha-hero-grid">
            <h1>INTELLIGENCE<br />THAT EXECUTES.</h1>
            <div>
              <p>TASHA is not a conversational interface. It is an autonomous intelligence system designed to understand context, adapt to business environments and participate in operational workflows.</p>
              <a className="button" href="#architecture">EXPLORE THE SYSTEM <ArrowIcon /></a>
            </div>
          </div>
          <div className="tasha-hero-visual">
            <video
              src="/images/home.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="TASHA autonomous intelligence system video visualization"
            />
            <div className="tasha-core"><span>TASHA</span><small>ACTIVE INTELLIGENCE</small></div>
            <div className="axis axis-x" /><div className="axis axis-y" />
            <div className="tasha-scan" />
          </div>
        </section>

        <section className="paradigm section-rule">
          <div className="shell paradigm-grid">
            <div><h2>BEYOND TOOLS.<br />TOWARD AGENCY.</h2><p>Traditional software waits for instructions. TASHA can interpret a defined objective, coordinate the necessary steps and move work forward within approved boundaries.</p></div>
            <div className="paradigm-switch">
              <div><span>TRADITIONAL SOFTWARE</span><strong>ASSISTIVE</strong></div>
              <div><span>TASHA</span><strong>AUTONOMOUS</strong></div>
            </div>
          </div>
        </section>

        <section className="tasha-architecture shell" id="architecture">
          <div className="tasha-section-title"><h2>EXECUTIVE<br />ARCHITECTURE.</h2><p>A disciplined system for turning business context into coordinated action.</p></div>
          <div className="capability-row">
            {capabilities.map(([title, text], index) => (
              <article key={title}>
                <div className="node"><i /></div>
                <h3>{title}</h3><p>{text}</p>
                <span>NODE {String(index + 1).padStart(2, "0")}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="operating-system">
          <div className="shell">
            <div className="operating-heading"><h2>FROM SIGNAL<br />TO ACTION.</h2><p>TASHA moves through an explicit operating sequence. Every stage can be governed, observed and connected to human oversight.</p></div>
            <div className="operating-modes">
              {operatingModes.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="deployments shell">
          <div className="tasha-section-title"><h2>DESIGNED FOR<br />REAL OPERATIONS.</h2><p>One intelligence layer, adapted to the requirements of each organization.</p></div>
          <div className="deployment-grid">
            <article><h3>FINANCIAL INSTITUTIONS</h3><p>Customer engagement, prospect qualification, document workflows, service assistance and operational follow-up.</p><div><span>CONTROLLED CONTEXT</span><span>HUMAN ESCALATION</span><span>AUDITABLE ACTIONS</span></div></article>
            <article><h3>ENTERPRISE OPERATIONS</h3><p>Lead capture, CRM updates, scheduling, reporting and repetitive workflow coordination across connected systems.</p><div><span>WORKFLOW INTEGRATION</span><span>MULTILINGUAL</span><span>ROLE-BASED CONTROL</span></div></article>
          </div>
        </section>

        <section className="tasha-corridor section-rule">
          <div className="shell corridor-grid">
            <div className="corridor-map">
              <video
                src="/images/tasha-2.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Network corridor video connecting Africa and America"
              />
              <div><span>AFRICA</span><i /><b>TASHA</b><i /><span>AMERICA</span></div>
            </div>
            <div><h2>ONE SYSTEM.<br />DIFFERENT CONTEXTS.</h2><p>TASHA is conceived for organizations operating across African and American markets, where language, infrastructure, regulation and customer expectations can differ significantly.</p><p>Adaptation does not mean unchecked autonomy. Context, permissions and human oversight remain part of the operating model.</p></div>
          </div>
        </section>

        <section className="tasha-principles">
          <div className="shell principles-inner">
            <h2>POWERFUL.<br />GOVERNED.<br />HUMAN-AWARE.</h2>
            <div><span>SECURITY</span><span>PRIVACY</span><span>TRANSPARENCY</span><span>HUMAN OVERSIGHT</span></div>
          </div>
        </section>

        <section className="tasha-final">
          <div className="shell"><h2>CEASE PROMPTING.<br />START EXECUTING.</h2><p>Explore how an autonomous intelligence system could participate in your business workflows.</p><a className="button button-light" href="/contact">START A CONVERSATION <ArrowIcon /></a></div>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
