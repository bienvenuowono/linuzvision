import type { Metadata } from "next";
import { ServicesPage } from "../../components/ServicesPage";

export const metadata: Metadata = { title: "Technology Services", description: "Integrated technology services spanning infrastructure, automation, cloud, cybersecurity and operational support.", alternates: { canonical: "/services" } };

export default function Page() {
  return <ServicesPage />;
}
