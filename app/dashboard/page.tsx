import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { listAdminAccounts, listInsights, listInquiries } from "@/lib/db";
import { Dashboard } from "@/components/dashboard/Dashboard";
import { AdminAccounts } from "@/components/dashboard/AdminAccounts";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Dashboard", robots: { index:false,follow:false } };
export default async function Page(){const session=await getAdminSession();if(!session)redirect("/dashboard/login");return <><Dashboard initialInsights={listInsights(true)} initialInquiries={listInquiries() as Array<Record<string,unknown>>}/><AdminAccounts initialAccounts={listAdminAccounts()} currentAdminId={session.adminId}/></>}
