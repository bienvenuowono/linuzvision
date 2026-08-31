import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
  description: "Tell LinuZvision what you want to automate, improve, protect, or build.",
};

export default function Page() {
  return <ContactPage />;
}
