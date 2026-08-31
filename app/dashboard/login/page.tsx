import type { Metadata } from "next";
import { LoginForm } from "@/components/dashboard/LoginForm";
export const metadata: Metadata = { title: "Admin Login", robots: { index: false, follow: false } };
export default function Page() { return <LoginForm />; }
