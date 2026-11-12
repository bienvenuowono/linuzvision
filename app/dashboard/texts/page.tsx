import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { getTextOverrides } from "@/lib/content";
import { TextsEditor } from "@/components/dashboard/TextsEditor";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Textes", robots: { index: false, follow: false } };

export default async function Page() {
  if (!await getAdminSession()) redirect("/dashboard/login");
  return <TextsEditor initialOverrides={getTextOverrides()} />;
}
