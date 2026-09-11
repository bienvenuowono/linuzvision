import type { Metadata } from "next";
import { CloudPage } from "../../components/CloudPage";

export const metadata: Metadata = { title: "Cloud Computing", description: "Secure, resilient cloud architecture and infrastructure designed for modern business operations.", alternates: { canonical: "/cloud" } };

export default function Page() { return <CloudPage />; }
