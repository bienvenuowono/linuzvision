import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/auth";
import { listInsights, listInquiries } from "@/lib/db";
import { Dashboard } from "@/components/dashboard/Dashboard";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Dashboard", robots: { index:false,follow:false } };
export default async function Page(){if(!await isAdmin())redirect("/dashboard/login");return <Dashboard initialInsights={listInsights(true)} initialInquiries={listInquiries() as Array<Record<string,unknown>>}/>}
