"use client";

import { FormEvent, useState } from "react";
import { ArrowIcon } from "./ArrowIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useSiteData } from "./SiteData";
import { Text, useText } from "./Text";

const sectors = [1, 2, 3] as const;

function SectorIcon({ index }: { index: number }) {
  return index < 2 ? (
    <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4 13h24M7 13v11m6-11v11m6-11v11m6-11v11M4 25h24M16 4 4 10h24L16 4Z" /></svg>
  ) : (
    <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 27V8h12v19M17 14h10v13M9 12h4m-4 5h4m-4 5h4m12-4h-4m4 4h-4M3 27h26" /></svg>
  );
}

export function ContactPage() {
  const { contactEmail } = useSiteData().settings;
  const success = useText("contact.form.success");
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
      setStatus(success);
    } catch {
      setStatus(`We could not record your message. Email ${contactEmail} for assistance.`);
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
          <h1><Text id="contact.hero.title" /></h1>
          <p><Text id="contact.hero.text" /></p>
          <figure className="contact-film">
            <img src="/images/about-datacenter-hero.png" alt="Architectural data center environment" />
            <figcaption><Text id="contact.hero.caption" /></figcaption>
          </figure>
        </section>

        <section className="contact-network shell">
          <div>
            <h2><Text id="contact.network.title" /></h2>
            <p><Text id="contact.network.textBefore" /> <strong><Text id="contact.network.textHighlight" /></strong> <Text id="contact.network.textAfter" /></p>
            <div className="contact-regions"><span><Text id="contact.network.region1" /></span><span><Text id="contact.network.region2" /></span><span><Text id="contact.network.region3" /></span></div>
          </div>
          <div className="contact-map" aria-label="America, Africa and Europe strategic corridor">
            <span><Text id="contact.network.region1" /></span><i aria-hidden="true" /><b><Text id="contact.network.center" /></b><i aria-hidden="true" /><span><Text id="contact.network.region2" /></span><i aria-hidden="true" /><span><Text id="contact.network.region3" /></span>
          </div>
        </section>

        <section className="contact-sectors shell">
          <h2><Text id="contact.sectors.title" /></h2>
          <div>
            {sectors.map((n, index) => (
              <article key={n}>
                <SectorIcon index={index} />
                <h3><Text id={`contact.sectors.${n}.title` as const} /></h3>
                <p><Text id={`contact.sectors.${n}.text` as const} /></p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-choice shell">
          <h2><Text id="contact.choice.title" /></h2>
          <div>
            <a href="#engagement">
              <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 3h11l6 6v20H8V3Zm11 0v7h6M12 16h9m-9 5h9" /></svg>
              <strong><Text id="contact.choice.projectTitle" /></strong>
              <span><Text id="contact.choice.projectText" /></span>
            </a>
            <a href={`mailto:${contactEmail}`} aria-label={`Email LinuZvision at ${contactEmail}`}>
              <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4 6h24v20H4V6Zm2 2v2.5l10 6.5 10-6.5V8H6Zm20 16V13l-10 6.5L6 13v11h20Z" /></svg>
              <strong><Text id="contact.choice.supportTitle" /></strong>
              <span>{contactEmail}</span>
            </a>
          </div>
        </section>

        <section className="contact-engagement" id="engagement">
          <div className="shell">
            <header>
              <h2><Text id="contact.form.title" /></h2>
              <p><Text id="contact.form.text" /></p>
            </header>
            <form onSubmit={handleSubmit}>
              <div className="contact-field-pair">
                <label><span><Text id="contact.form.name" /></span><input name="fullName" autoComplete="name" required /></label>
                <label><span><Text id="contact.form.email" /></span><input name="email" type="email" autoComplete="email" required /></label>
              </div>
              <label><span><Text id="contact.form.subject" /></span><input name="subject" required /></label>
              <label><span><Text id="contact.form.message" /></span><textarea name="message" rows={5} required /></label>
              <button className="button button-dark" type="submit" disabled={sending}>{sending ? "RECORDING…" : <Text id="contact.form.button" />} <ArrowIcon /></button>
              <p className="contact-form-note"><Text id="contact.form.note" /></p>
              <p className="contact-form-status" role="status" aria-live="polite">{status}</p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
