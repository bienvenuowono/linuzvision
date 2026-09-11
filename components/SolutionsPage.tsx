import { ArrowIcon } from "./ArrowIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsappButton } from "./WhatsappButton";

const solutions = [
  ["AI CUSTOMER SERVICE", "Understand requests, answer routine questions, trigger actions and escalate complex situations to people."],
  ["AI CRM AUTOMATION", "Capture leads, qualify opportunities, update records and coordinate follow-up across the sales journey."],
  ["DOCUMENT INTELLIGENCE", "Extract, classify and route information from documents while preserving approval checkpoints."],
  ["FINANCIAL WORKFLOWS", "Support operational processes such as applications, verification, collections and service requests."],
  ["FRAUD & RISK SIGNALS", "Surface anomalies and contextual signals for review without replacing accountable human decisions."],
  ["BUSINESS AUTOMATION", "Connect repetitive tasks across tools, teams and infrastructure into observable workflows."],
];

const journey = ["CUSTOMER SIGNAL", "AI UNDERSTANDING", "WORKFLOW ACTION", "SYSTEM UPDATE", "HUMAN ESCALATION"];

export function SolutionsPage() {
  return (
    <>
      <Header active="SOLUTIONS" />
      <main className="solutions-page">
        <section className="solutions-hero shell">
          <div><h1>INTELLIGENCE<br />FOR REAL<br />BUSINESS<br />PROBLEMS.</h1></div>
          <div className="solutions-hero-copy"><p>We design AI systems and intelligent automations that reduce repetitive work, improve response times and connect business operations.</p><a className="button button-dark" href="#capabilities">EXPLORE CAPABILITIES <ArrowIcon /></a></div>
          <div className="solutions-hero-media"><img src="/images/ai-security-matrix.png" alt="Abstract matrix of connected artificial intelligence signals" /><div className="solution-signal" /><span>AI / AUTOMATION / OPERATIONAL SYSTEMS</span></div>
        </section>

        <section className="problem-field section-rule">
          <div className="shell"><h2>BUSINESSES ARE STILL<br />DOING TOO MUCH MANUALLY.</h2><div className="problem-words"><span>REPETITIVE TASKS</span><span>MANUAL FOLLOW-UP</span><span>DISCONNECTED SYSTEMS</span><span>SLOW CUSTOMER SERVICE</span><span>OPERATIONAL COMPLEXITY</span><span>SECURITY RISKS</span></div></div>
        </section>

        <section className="transformation-field">
          <div className="shell transformation-grid">
            <div><h2>FROM FRICTION<br />TO FLOW.</h2><p>Technology should work with the business. We turn repetitive, fragmented processes into connected systems that can understand context and move work forward.</p></div>
            <div className="transform-list"><div><span>MANUAL</span><strong>AUTOMATED</strong></div><div><span>SLOW</span><strong>INTELLIGENT</strong></div><div><span>DISCONNECTED</span><strong>CONNECTED</strong></div><div><span>REACTIVE</span><strong>PROACTIVE</strong></div></div>
          </div>
        </section>

        <section className="solution-capabilities shell" id="capabilities">
          <div className="solutions-title"><h2>APPLIED<br />INTELLIGENCE.</h2><p>Capabilities designed around real workflows, measurable constraints and accountable decisions.</p></div>
          <div className="solution-list">{solutions.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p><a href="/contact" aria-label={`Discuss ${title}`}><ArrowIcon /></a></article>)}</div>
        </section>

        <section className="automation-story">
          <div className="shell"><div className="automation-heading"><h2>AI AUTOMATES<br />THE REPETITIVE WORK.</h2><p>Human teams remain involved where judgment, approval, empathy or escalation is required.</p></div><div className="journey-line">{journey.map((item,index) => <div key={item}><i /><span>{item}</span>{index < journey.length - 1 && <b />}</div>)}</div></div>
        </section>

        <section className="tasha-bridge shell">
          <div className="tasha-bridge-core"><span>TASHA</span><small>AUTONOMOUS AI AGENT</small></div>
          <div><h2>THE INTELLIGENCE<br />BEHIND THE WORKFLOW.</h2><p>TASHA brings contextual understanding, adaptation and governed execution into the LinuZvision automation ecosystem.</p><a className="text-link" href="/tasha">DISCOVER TASHA <ArrowIcon /></a></div>
        </section>

        <section className="human-control section-rule"><div className="shell"><h2>AUTONOMOUS<br />DOES NOT MEAN<br />UNCONTROLLED.</h2><div><span>DEFINED PERMISSIONS</span><span>HUMAN OVERSIGHT</span><span>SECURITY & PRIVACY</span><span>TRANSPARENT ESCALATION</span></div></div></section>

        <section className="solutions-final"><div className="shell"><h2>WHAT SHOULD YOUR BUSINESS STOP DOING MANUALLY?</h2><p>Show us the workflow. We’ll explore where intelligence and automation can create meaningful operational value.</p><a className="button button-light" href="/contact">START A CONVERSATION <ArrowIcon /></a></div></section>
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
