import { ArrowIcon, PlusIcon } from "./ArrowIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsappButton } from "./WhatsappButton";
import type { Insight } from "@/lib/db";
import { HeroVideo } from "./HeroVideo";

const services = [
  { title: "AI CUSTOMER SERVICE", text: "Intelligent support that understands, responds and escalates when human judgment matters." },
  { title: "AI CRM AUTOMATION", text: "Prospecting, follow-up and data updates orchestrated across the customer journey." },
  { title: "FINANCIAL OPERATIONS", text: "Applied intelligence for workflows, document processing and operational decision support." },
  { title: "CLOUD & INFRASTRUCTURE", text: "Modern foundations designed to support secure, resilient and scalable business systems." },
  { title: "CYBERSECURITY", text: "A continuous approach to protection, detection, response and recovery." },
  { title: "AI & IT TRAINING", text: "Practical adoption programs that turn new technology into organizational capability." },
];

function readTime(content: string) {
  return `${Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200))} MIN READ`;
}

export function HomePage({ insights }: { insights: Insight[] }) {
  return (
    <>
      <Header />
      <main id="home">
        <section className="hero shell">
          <div className="hero-heading">
            <h1>INTELLIGENCE<br />THAT MOVES<br />BUSINESS<br />FORWARD.</h1>
            <div className="hero-intro">
              <p>LinuZvision builds intelligent AI, automation and technology solutions that help businesses operate smarter, faster and more efficiently.</p>
              <div className="button-row">
                <a className="button button-dark" href="/solutions">EXPLORE OUR AI SOLUTIONS <ArrowIcon /></a>
                <a className="button" href="/solutions">MEET TASHA <ArrowIcon /></a>
              </div>
            </div>
          </div>
          <div className="hero-media">
            <HeroVideo />
            <div className="scan-line" />
            <div className="media-status"><i /> SYSTEM ACTIVE / ENTERPRISE INTELLIGENCE</div>
          </div>
        </section>

        <section className="change-section section-rule">
          <div className="shell change-stage">
            <div className="change-copy">
              <span>BUSINESS IS CHANGING.</span>
              <span>WORK IS CHANGING.</span>
              <strong>INTELLIGENCE IS BECOMING AUTONOMOUS.</strong>
            </div>
            <p className="change-close">LINUZVISION IS BUILDING FOR THAT FUTURE.</p>
          </div>
        </section>

        <section className="tasha" id="tasha">
          <div className="shell tasha-grid">
            <div className="tasha-copy">
              <h2>OUR AUTONOMOUS<br />AI AGENT.</h2>
              <p>TASHA is LinuZvision&apos;s proprietary AI agent designed to adapt to different business environments, engage with prospects and automate follow-up workflows.</p>
              <a className="button button-light" href="/solutions">DISCOVER TASHA&apos;S CAPABILITIES <ArrowIcon /></a>
            </div>
            <div className="tasha-system" aria-label="TASHA capability sequence">
              <span className="signal tasha-name">TASHA</span>
              {['UNDERSTANDS', 'ADAPTS', 'INTERACTS', 'PROSPECTS', 'FOLLOWS UP', 'AUTOMATES'].map((item) => (
                <div className="system-step" key={item}><i /><span>{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="solutions shell" id="solutions">
          <div className="section-heading">
            <div>
              <h2>INTELLIGENCE APPLIED<br />ACROSS THE ENTERPRISE.</h2>
            </div>
            <a href="/solutions" className="text-link">VIEW ALL SOLUTIONS <ArrowIcon /></a>
          </div>
          <div className="services-grid" id="services">
            {services.map((service, index) => (
              <article className={index === 0 ? "service featured" : "service"} key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact" aria-label={`Explore ${service.title}`}><PlusIcon /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="foundation section-rule" id="cloud">
          <div className="shell foundation-grid">
            <div className="foundation-visual">
              <img src="/images/fiber-network.png" alt="High-speed fiber optic network infrastructure" />
            </div>
            <div className="foundation-copy">
              <h2>BEFORE THE AI,<br />THERE IS<br />INFRASTRUCTURE.</h2>
              <p>More than fifteen years across technology systems, infrastructure, data centers, cloud and security inform every intelligent solution we build.</p>
              <div className="evolution"><span>SERVER</span><span>INFRASTRUCTURE</span><span>CLOUD</span><strong>AI</strong></div>
            </div>
          </div>
        </section>

        <section className="experience section-rule">
          <div className="shell experience-grid">
            <div className="years"><strong>15+</strong><span>YEARS OF TECHNOLOGY EXPERIENCE</span></div>
            <div className="bridge">
              <h2>BUILT BETWEEN<br />AFRICA AND AMERICA.</h2>
              <p>Technology expertise, AI innovation and business understanding across two dynamic markets.</p>
              <div><span>AFRICA</span><i /><span>AI</span><i /><span>AMERICA</span></div>
            </div>
          </div>
        </section>

        <section className="human-ai">
          <div className="shell human-inner">
            <h2>AI DOES NOT REPLACE<br />HUMAN EXPERTISE.<br /><em>IT AMPLIFIES IT.</em></h2>
            <div className="equation"><span>HUMAN</span><b>+</b><span>TASHA</span><b>+</b><span>AUTOMATION</span><b>=</b><strong>MORE CAPABLE BUSINESS</strong></div>
          </div>
        </section>

        <section className="insights shell" id="insights">
          <div className="section-heading">
            <div><h2>IDEAS FOR THE<br />INTELLIGENT BUSINESS.</h2></div>
            <a href="/insights" className="text-link">EXPLORE INSIGHTS <ArrowIcon /></a>
          </div>
          <div className="insight-list">
            {insights.map((insight) => (
              <article key={insight.id}>
                <div><span>{insight.category}</span><h3>{insight.title}</h3></div>
                <span>{readTime(insight.content)}</span>
                <a href={`/insights/${insight.slug}`} aria-label={`Read ${insight.title}`}><ArrowIcon /></a>
              </article>
            ))}
            {insights.length === 0 && <p className="home-insights-empty">New intelligence is being prepared.</p>}
          </div>
        </section>

        <section className="final-cta" id="contact">
          <div className="shell final-inner">
            <h2>WHAT COULD YOUR BUSINESS DO WITH MORE INTELLIGENCE?</h2>
            <div><p>Tell us what you want to automate, improve, protect or build.</p><a className="button button-light" href="/contact">START A CONVERSATION <ArrowIcon /></a></div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
