import { ArrowIcon } from "./ArrowIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Text } from "./Text";
import type { TextId } from "@/lib/page-texts";

const capabilities = [1, 2, 3, 4, 5, 6] as const;
const problems = [1, 2, 3, 4, 5, 6] as const;
const pairs = [1, 2, 3, 4] as const;
const controls = [1, 2, 3, 4] as const;
const problemFlow = [1, 2, 3, 4].map((n) => `solutions.problemFlow.${n}` as TextId);
const journey = [1, 2, 3, 4, 5].map((n) => `solutions.journey.${n}` as TextId);

function SolutionFlow({ steps, label, className = "" }: { steps: TextId[]; label: string; className?: string }) {
  return <ol className={`solution-flow ${className}`} aria-label={label}>{steps.map((step, index) => <li key={step}><span><Text id={step} /></span>{index < steps.length - 1 && <ArrowIcon />}</li>)}</ol>;
}

// The visually hidden name keeps the arrow link announced as "Discuss <solution>", with the edited wording.
function CapabilityLink({ n }: { n: (typeof capabilities)[number] }) {
  return <a href="/contact"><span className="visually-hidden">Discuss <Text id={`solutions.capabilities.${n}.title` as const} /></span><ArrowIcon /></a>;
}

export function SolutionsPage() {
  return (
    <>
      <Header active="SOLUTIONS" />
      <main className="solutions-page">
        <section className="solutions-hero shell">
          <div><h1><Text id="solutions.hero.title" /></h1></div>
          <div className="solutions-hero-copy"><p><Text id="solutions.hero.text" /></p><a className="button button-dark" href="#capabilities"><Text id="solutions.hero.button" /> <ArrowIcon /></a></div>
          <div className="solutions-hero-media"><img src="/images/ai-security-matrix.png" alt="Abstract matrix of connected artificial intelligence signals" /><div className="solution-signal" /><span><Text id="solutions.hero.caption" /></span></div>
        </section>

        <section className="problem-field section-rule">
          <div className="shell"><h2><Text id="solutions.problems.title" /></h2><div className="problem-words">{problems.map((n) => <article key={n}><h3><Text id={`solutions.problems.${n}.title` as const} /></h3><p><Text id={`solutions.problems.${n}.text` as const} /></p></article>)}</div><SolutionFlow steps={problemFlow} label="From business problem to business outcome" /></div>
        </section>

        <section className="transformation-field">
          <div className="shell transformation-grid">
            <div><h2><Text id="solutions.transformation.title" /></h2><p><Text id="solutions.transformation.text" /></p></div>
            <div className="transform-list">{pairs.map((n) => <div key={n}><span><Text id={`solutions.transformation.${n}.from` as const} /></span><strong><Text id={`solutions.transformation.${n}.to` as const} /></strong></div>)}</div>
          </div>
        </section>

        <section className="solution-capabilities shell" id="capabilities">
          <div className="solutions-title"><h2><Text id="solutions.capabilities.title" /></h2><p><Text id="solutions.capabilities.text" /></p></div>
          <div className="solution-list">{capabilities.map((n) => <article key={n}><h3><Text id={`solutions.capabilities.${n}.title` as const} /></h3><p><Text id={`solutions.capabilities.${n}.text` as const} /></p><CapabilityLink n={n} /></article>)}</div>
        </section>

        <section className="automation-story">
          <div className="shell"><div className="automation-heading"><h2><Text id="solutions.automation.title" /></h2><p><Text id="solutions.automation.text" /></p></div></div>
        </section>

        <section className="tasha-bridge shell">
          <SolutionFlow steps={journey} label="TASHA workflow from customer signal to human escalation" className="solution-flow-tasha" />
          <div><h2><Text id="solutions.bridge.title" /></h2><p><Text id="solutions.bridge.text" /></p><a className="text-link" href="/tasha"><Text id="solutions.bridge.link" /> <ArrowIcon /></a></div>
        </section>

        <section className="human-control section-rule"><div className="shell"><h2><Text id="solutions.control.title" /></h2><div>{controls.map((n) => <span key={n}><Text id={`solutions.control.${n}` as const} /></span>)}</div></div></section>

        <section className="solutions-final"><div className="shell"><h2><Text id="solutions.final.title" /></h2><p><Text id="solutions.final.text" /></p><a className="button button-light" href="/contact"><Text id="solutions.final.button" /> <ArrowIcon /></a></div></section>
      </main>
      <Footer />
    </>
  );
}
