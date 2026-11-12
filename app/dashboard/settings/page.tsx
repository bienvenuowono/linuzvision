import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { getSiteSettings } from "@/lib/content";
import { SettingsForm } from "@/components/dashboard/SettingsForm";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Coordonnées", robots: { index: false, follow: false } };

export default async function Page() {
  if (!await getAdminSession()) redirect("/dashboard/login");
  return <SettingsForm initialSettings={getSiteSettings()} />;
}
