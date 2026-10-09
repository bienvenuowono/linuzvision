import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";
import { CourseCard } from "./CourseCard";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsappButton } from "./WhatsappButton";

export function TrainingPage() {
  return (
    <>
      <Header active="TRAINING" />
      <main className="course-catalog-page">
        <section className="course-catalog-hero shell">
          <div>
            <h1>Build practical AI capability</h1>
            <p>Focused training for the people responsible for adopting, governing, and applying artificial intelligence across modern organizations.</p>
          </div>
          <a className="button button-dark" href="#available-courses">EXPLORE COURSES <ArrowIcon /></a>
        </section>

        <section className="course-catalog shell" id="available-courses">
          <header>
            <div>
              <h2>Available courses</h2>
              <p>Complete learning programs designed as connected modules, with every lesson available in American English.</p>
            </div>
            <span>1 COMPLETE PROGRAM</span>
          </header>
          <div className="course-catalog-list"><CourseCard /></div>
        </section>

        <section className="course-catalog-closing">
          <div className="shell">
            <h2>Learning designed for real organizational decisions</h2>
            <div>
              <p>Build shared understanding across leadership, operations, education, public service, research, and technology teams.</p>
              <Link className="button button-light" href="/training/ai-essentials">VIEW AI ESSENTIALS <ArrowIcon /></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
