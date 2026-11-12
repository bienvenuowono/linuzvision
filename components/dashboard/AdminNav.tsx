"use client";

import Image from "next/image";

const sections = [
  { key: "insights", label: "PUBLICATIONS", href: "/dashboard" },
  { key: "courses", label: "FORMATIONS", href: "/dashboard/courses" },
  { key: "team", label: "ÉQUIPE", href: "/dashboard/team" },
  { key: "settings", label: "COORDONNÉES", href: "/dashboard/settings" },
] as const;

export type AdminSection = (typeof sections)[number]["key"];

export function AdminNav({ active }: { active: AdminSection }) {
  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" }).catch(() => undefined);
    // A full page load, so the browser still warns when a form has unsaved work.
    window.location.assign("/dashboard/login");
  }

  return (
    <header className="admin-top">
      <Image src="/images/linuzvision-logo-color.png" alt="LinuZvision LLC" width={250} height={90} />
      <nav className="admin-nav" aria-label="Sections de l'administration">
        {sections.map((section) => (
          // Plain links: a full page load lets the browser warn when a form still has unsaved work.
          <a key={section.key} href={section.href} aria-current={section.key === active ? "page" : undefined}>
            {section.label}
          </a>
        ))}
      </nav>
      <div>
        <a href="/" target="_blank" rel="noopener noreferrer">VOIR LE SITE</a>
        <button type="button" onClick={logout}>DÉCONNEXION</button>
      </div>
    </header>
  );
}
