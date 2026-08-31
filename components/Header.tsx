"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowIcon } from "./ArrowIcon";

const menuGroups = [
  { label: "INTELLIGENCE", links: [["TASHA", "/tasha"], ["AI SOLUTIONS", "/solutions"], ["INSIGHTS", "/insights"]] },
  { label: "INFRASTRUCTURE", links: [["SERVICES", "/services"], ["CLOUD", "/cloud"], ["CYBERSECURITY", "/cybersecurity"], ["IT & TRAINING", "/training"]] },
  { label: "COMPANY", links: [["ABOUT", "/about"], ["CONTACT", "/contact"]] },
];

export function Header({ active = "HOME" }: { active?: string }) {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); setOpenGroup(null); } };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return <header className="site-header">
    <a className="brand-logo" href="/" aria-label="LinuZvision home"><Image src="/images/linuzvision-logo.jpg" alt="LinuZvision LLC" width={280} height={100} priority /></a>
    <nav className="desktop-nav themed-nav" aria-label="Primary navigation">
      <a className={active === "HOME" ? "active" : ""} href="/">HOME</a>
      {menuGroups.map((group) => { const id = `menu-${group.label.toLowerCase()}`; const expanded = openGroup === group.label; return <div className={expanded ? "nav-group expanded" : "nav-group"} key={group.label}>
        <button type="button" aria-haspopup="true" aria-expanded={expanded} aria-controls={id} onClick={() => setOpenGroup(expanded ? null : group.label)}>{group.label}<span aria-hidden="true">+</span></button>
        <div className="nav-dropdown" id={id}>{group.links.map(([label, href]) => <a className={active === label || (active === "CYBER" && label === "CYBERSECURITY") || (active === "TRAINING" && label === "IT & TRAINING") ? "active" : ""} href={href} key={label}>{label}</a>)}</div>
      </div>; })}
    </nav>
    <a className="button button-small header-cta" href="/contact">START A CONVERSATION <ArrowIcon /></a>
    <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
    <div className={open ? "mobile-menu open" : "mobile-menu"}>
      <a href="/" onClick={() => setOpen(false)}>HOME</a>
      {menuGroups.map((group) => <section key={group.label}><strong>{group.label}</strong>{group.links.map(([label, href]) => <a href={href} key={label} onClick={() => setOpen(false)}>{label}</a>)}</section>)}
    </div>
  </header>;
}
