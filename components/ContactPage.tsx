"use client";

import { FormEvent, useState } from "react";
import { ArrowIcon } from "./ArrowIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsappButton } from "./WhatsappButton";

const sectors = [
  ["BANKING & FINANCE", "Secure, scalable infrastructure for modern financial institutions."],
  ["GOVERNMENT", "Resilient technology systems designed around public-service continuity."],
  ["PRIVATE ENTERPRISE", "Connected technology foundations for evolving business operations."],
];

function SectorIcon({ index }: { index: number }) {
  return index < 2 ? (
    <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4 13h24M7 13v11m6-11v11m6-11v11m6-11v11M4 25h24M16 4 4 10h24L16 4Z" /></svg>
  ) : (
    <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 27V8h12v19M17 14h10v13M9 12h4m-4 5h4m-4 5h4m12-4h-4m4 4h-4M3 27h26" /></svg>
  );
}

export function ContactPage() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setStatus("");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error("Unable to submit");
      form.reset();
      setStatus("Thank you. Your project brief has been securely recorded. Our team will contact you shortly.");
    } catch {
      setStatus("We could not record your message. Email linuzvisionllc@gmail.com or contact us on WhatsApp.");
    } finally { setSending(false); }
  }

  return (
    <>
      <Header active="CONTACT" />
      <main className="contact-page">
        {/*
          THESIS: Turn technology ambition into a precise engagement brief without inventing a channel or footprint.
          OWN-WORLD: A bright architectural intake hall built from monumental type, grayscale evidence and ruled systems.
          STORY: Invitation, geographic vision, sectors, connection choice, then structured engagement.
          FIRST VIEWPORT: Centered statement and concise copy over a wide infrastructure film still.
          FORM: Comp-led strategic intake; Stitch Contact is the visual authority.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
        */}
        <section className="contact-hero shell">
          <h1>LET&apos;S BUILD<br />WHAT COMES<br />NEXT.</h1>
          <p>Tell us what you are trying to automate, improve, protect or build. Architecting the future requires vision and precision.</p>
          <figure className="contact-film">
            <img src="/images/about-datacenter-hero.png" alt="Architectural data center environment" />
            <figcaption>INTRODUCTION / LINUZVISION</figcaption>
          </figure>
        </section>

        <section className="contact-network shell">
          <div>
            <h2>GLOBAL NETWORK</h2>
            <p>Bridging innovation through the established <strong>AFRICA ↔ AMERICA</strong> strategic vision for technological exchange and deployment.</p>
            <div className="contact-regions"><span>AFRICA</span><span>AMERICA</span></div>
          </div>
          <div className="contact-map" aria-label="Africa to America strategic corridor">
            <span>AFRICA</span><i /><b>LZV</b><i /><span>AMERICA</span>
          </div>
        </section>

        <section className="contact-sectors shell">
          <h2>STRATEGIC SECTORS</h2>
          <div>
            {sectors.map(([title, description], index) => (
              <article key={title}>
                <SectorIcon index={index} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-choice shell">
          <h2>HOW WOULD YOU LIKE TO CONNECT?</h2>
          <div>
            <a href="#engagement">
              <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 3h11l6 6v20H8V3Zm11 0v7h6M12 16h9m-9 5h9" /></svg>
              <strong>START A PROJECT</strong>
              <span>Discuss your project in detail</span>
            </a>
            <a href="https://wa.me/14432488520" target="_blank" rel="noopener noreferrer" aria-label="Contact LinuZvision on WhatsApp at +1 443 248 8520">
              <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 5h22v17H14l-7 6v-6H5V5Zm6 7h10m-10 5h7" /></svg>
              <strong>WHATSAPP CHANNEL</strong>
              <span>+1 (443) 248-8520</span>
            </a>
          </div>
          <p className="contact-direct">EMAIL <a href="mailto:linuzvisionllc@gmail.com">linuzvisionllc@gmail.com</a></p>
        </section>

        <section className="contact-engagement" id="engagement">
          <div className="shell">
            <header>
              <h2>INITIATE ENGAGEMENT</h2>
              <p>Provide details about your vision and prepare a structured project brief.</p>
            </header>
            <form onSubmit={handleSubmit}>
              <div className="contact-field-pair">
                <label><span>FULL NAME</span><input name="fullName" autoComplete="name" required /></label>
                <label><span>ENTERPRISE EMAIL</span><input name="email" type="email" autoComplete="email" required /></label>
              </div>
              <label><span>SUBJECT / PROJECT FOCUS</span><input name="subject" required /></label>
              <label><span>MESSAGE / VISION</span><textarea name="message" rows={5} required /></label>
              <button className="button button-dark" type="submit" disabled={sending}>{sending ? "RECORDING…" : "SUBMIT PROJECT BRIEF"} <ArrowIcon /></button>
              <p className="contact-form-note">Your message is transmitted securely and stored for follow-up by LinuZvision.</p>
              <p className="contact-form-status" role="status" aria-live="polite">{status}</p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
