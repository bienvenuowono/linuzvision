import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { listTeam } from "@/lib/content";
import { TeamManager } from "@/components/dashboard/TeamManager";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Équipe", robots: { index: false, follow: false } };

export default async function Page() {
  if (!await getAdminSession()) redirect("/dashboard/login");
  return <TeamManager initialTeam={listTeam(true)} />;
}
