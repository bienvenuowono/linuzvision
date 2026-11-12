"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { SiteSettings, TeamMember } from "@/lib/content";
import type { TextOverrides } from "@/lib/page-texts";

type SiteData = { settings: SiteSettings; team: TeamMember[]; texts: TextOverrides };

const SiteDataContext = createContext<SiteData | null>(null);

// The root layout reads the contact details, the team and the edited page texts once; shared components pick them up here.
export function SiteDataProvider({ value, children }: { value: SiteData; children: ReactNode }) {
  return <SiteDataContext.Provider value={value}>{children}</SiteDataContext.Provider>;
}

export function useSiteData() {
  const data = useContext(SiteDataContext);
  if (!data) throw new Error("useSiteData must be used inside the root layout.");
  return data;
}
