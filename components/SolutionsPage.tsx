import { ArrowIcon } from "./ArrowIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";

const solutions = [
  ["AI CUSTOMER SERVICE", "Understand customer requests, answer routine questions, trigger approved actions, and escalate complex situations to people when needed."],
  ["AI CRM AUTOMATION", "Capture leads, qualify opportunities, update records, and coordinate follow-up across the customer journey."],
  ["DOCUMENT INTELLIGENCE", "Extract, classify, validate, and route information from documents while preserving approval checkpoints."],
  ["FINANCIAL WORKFLOWS", "Support operational processes such as applications, verification, collections and service requests."],
  ["FRAUD & RISK SIGNALS", "Surface anomalies and contextual signals for review without replacing accountable human decisions."],
  ["BUSINESS AUTOMATION", "Connect repetitive tasks across tools, teams and infrastructure into observable workflows."],
];

const problems = [
  ["Repetitive tasks", "Teams spend hours on work that can be automated.."],
  ["Manual follow up", "Leads and customers are missed when follow up depends on memory"],
  ["Disconnected systems", "Data is spread across tools that do not work together"],
  ["Slow customer service", "response delays reduce customer satisfaction and opportunities."],
  ["Operational complexity", "too many manual steps make workflows harder to manage and scale"],
  ["Security risk", "poorly connected tools and uncontrolled automation can increase operational risk"],
];

const problemFlow = ["Problem", "AI solution", "Capability", "Business outcome"];
const journey = ["Customer signal", "Intent understanding", "Workflow action", "System update", "Human escalation"];

function SolutionFlow({ steps, label, className = "" }: { steps: string[]; label: string; className?: string }) {
  return <ol className={`solution-flow ${className}`} aria-label={label}>{steps.map((step, index) => <li key={step}><span>{step}</span>{index < steps.length - 1 && <ArrowIcon />}</li>)}</ol>;
}

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
          <div className="shell"><h2>BUSINESSES ARE STILL<br />DOING TOO MUCH MANUALLY.</h2><div className="problem-words">{problems.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div><SolutionFlow steps={problemFlow} label="From business problem to business outcome" /></div>
        </section>

        <section className="transformation-field">
          <div className="shell transformation-grid">
            <div><h2>FROM FRICTION<br />TO FLOW.</h2><p>Technology should work with the business. We turn repetitive, fragmented processes into connected systems that can understand context and move work forward.</p></div>
            <div className="transform-list"><div><span>MANUAL</span><strong>AUTOMATED</strong></div><div><span>SLOW</span><strong>RESPONSIVE</strong></div><div><span>DISCONNECTED</span><strong>CONNECTED</strong></div><div><span>REACTIVE</span><strong>PROACTIVE</strong></div></div>
          </div>
        </section>

        <section className="solution-capabilities shell" id="capabilities">
          <div className="solutions-title"><h2>APPLIED<br />INTELLIGENCE.</h2><p>Technology should move with the business. We transform repetitive, fragmented processes into connected systems that understand context, coordinate work, and move operation forward.</p></div>
          <div className="solution-list">{solutions.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p><a href="/contact" aria-label={`Discuss ${title}`}><ArrowIcon /></a></article>)}</div>
        </section>

        <section className="automation-story">
          <div className="shell"><div className="automation-heading"><h2>AI AUTOMATES<br />THE REPETITIVE WORK.</h2><p>Human teams remain involved wherever judgment, approval, empathy, or escalation is required.</p></div></div>
        </section>

        <section className="tasha-bridge shell">
          <SolutionFlow steps={journey} label="TASHA workflow from customer signal to human escalation" className="solution-flow-tasha" />
          <div><h2>THE INTELLIGENCE<br />BEHIND THE WORKFLOW.</h2><p>TASHA brings contextual understanding, adaptation and governed execution into the LinuZvision automation ecosystem.</p><a className="text-link" href="/tasha">DISCOVER TASHA <ArrowIcon /></a></div>
        </section>

        <section className="human-control section-rule"><div className="shell"><h2>AUTONOMOUS<br />DOES NOT MEAN<br />UNCONTROLLED.</h2><div><span>DEFINED PERMISSIONS</span><span>HUMAN OVERSIGHT</span><span>SECURITY & PRIVACY</span><span>TRANSPARENT ESCALATION</span></div></div></section>

        <section className="solutions-final"><div className="shell"><h2>WHAT SHOULD YOUR BUSINESS STOP DOING MANUALLY?</h2><p>Show us the workflow. We’ll explore where intelligence and automation can create meaningful operational value.</p><a className="button button-light" href="/contact">START A CONVERSATION <ArrowIcon /></a></div></section>
      </main>
      <Footer />
    </>
  );
}
