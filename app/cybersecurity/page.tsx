import type { Metadata } from "next";
import { CybersecurityPage } from "../../components/CybersecurityPage";
export const metadata: Metadata = { title: "Cybersecurity", description: "Zero-trust cybersecurity architecture, operational resilience and intelligent protection from LinuZvision.", alternates: { canonical: "/cybersecurity" } };
export default function Page() { return <CybersecurityPage />; }
