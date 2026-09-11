"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowIcon } from "./ArrowIcon";

type NavLink = {
  type: "link";
  label: string;
  href: string;
  activeKey: string;
};

type NavGroup = {
  type: "group";
  label: string;
  links: [string, string][];
};

type NavItem = NavLink | NavGroup;

const navItems: NavItem[] = [
  { type: "link", label: "HOME", href: "/", activeKey: "HOME" },
  { type: "link", label: "TASHA", href: "/tasha", activeKey: "TASHA" },
  { type: "link", label: "AI SOLUTIONS", href: "/solutions", activeKey: "SOLUTIONS" },
  { type: "link", label: "INSIGHTS", href: "/insights", activeKey: "INSIGHTS" },
  {
    type: "group",
    label: "INFRASTRUCTURE",
    links: [
      ["SERVICES", "/services"],
      ["CLOUD", "/cloud"],
      ["CYBERSECURITY", "/cybersecurity"],
      ["IT & TRAINING", "/training"],
    ],
  },
  { type: "link", label: "ABOUT", href: "/about", activeKey: "ABOUT" },
  { type: "link", label: "CONTACT", href: "/contact", activeKey: "CONTACT" },
];

export function Header({ active = "HOME" }: { active?: string }) {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setOpenGroup(null);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <header className="site-header">
      <a className="brand-logo" href="/" aria-label="LinuZvision home">
        <Image src="/images/linuzvision-logo-color.png" alt="LinuZvision LLC" width={280} height={100} priority />
      </a>
      <nav className="desktop-nav themed-nav" aria-label="Primary navigation">
        {navItems.map((item) => {
          if (item.type === "link") {
            const isActive =
              active === item.activeKey ||
              (item.activeKey === "SOLUTIONS" && active === "AI SOLUTIONS") ||
              (item.activeKey === "ABOUT" && active === "ABOUT") ||
              (item.activeKey === "CONTACT" && active === "CONTACT");
            return (
              <a key={item.label} className={isActive ? "active" : ""} href={item.href}>
                {item.label}
              </a>
            );
          }
          const id = `menu-${item.label.toLowerCase()}`;
          const expanded = openGroup === item.label;
          return (
            <div className={expanded ? "nav-group expanded" : "nav-group"} key={item.label}>
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={expanded}
                aria-controls={id}
                onClick={() => setOpenGroup(expanded ? null : item.label)}
              >
                {item.label}
                <span aria-hidden="true">+</span>
              </button>
              <div className="nav-dropdown" id={id}>
                {item.links.map(([label, href]) => {
                  const isChildActive =
                    active === label ||
                    (active === "CYBER" && label === "CYBERSECURITY") ||
                    (active === "TRAINING" && label === "IT & TRAINING") ||
                    (active === "SERVICES" && label === "SERVICES") ||
                    (active === "CLOUD" && label === "CLOUD");
                  return (
                    <a className={isChildActive ? "active" : ""} href={href} key={label}>
                      {label}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>
      <a className="button button-small header-cta" href="/contact">
        START A CONVERSATION <ArrowIcon />
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
      </button>
      <div className={open ? "mobile-menu open" : "mobile-menu"}>
        {navItems.map((item) => {
          if (item.type === "link") {
            return (
              <a href={item.href} key={item.label} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            );
          }
          return (
            <section key={item.label}>
              <strong>{item.label}</strong>
              {item.links.map(([label, href]) => (
                <a href={href} key={label} onClick={() => setOpen(false)}>
                  {label}
                </a>
              ))}
            </section>
          );
        })}
      </div>
    </header>
  );
}
