import type { Metadata } from "next";
import { TrainingPage } from "../../components/TrainingPage";
export const metadata: Metadata = { title: "IT Support & Training", description: "Practical IT support and technology training built to strengthen teams, operations and long-term capability.", alternates: { canonical: "/training" } };
export default function Page() { return <TrainingPage />; }
