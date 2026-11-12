import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { listCourses } from "@/lib/content";
import { CourseManager } from "@/components/dashboard/CourseManager";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Formations", robots: { index: false, follow: false } };

export default async function Page() {
  if (!await getAdminSession()) redirect("/dashboard/login");
  return <CourseManager initialCourses={listCourses(true)} />;
}
