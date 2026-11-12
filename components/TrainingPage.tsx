import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";
import { ClassCatalog } from "./ClassCatalog";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsappButton } from "./WhatsappButton";
import type { Course } from "@/lib/training";

export function TrainingPage({ courses }: { courses: Course[] }) {
  const first = courses[0];
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

        <section className="class-catalog class-section shell" id="available-courses" aria-labelledby="all-courses">
          <h2 id="all-courses">All Courses</h2>
          {courses.length > 0 ? <ClassCatalog courses={courses} /> : <p className="class-catalog-empty">New courses are being prepared.</p>}
        </section>

        <section className="course-catalog-closing">
          <div className="shell">
            <h2>Learning designed for real organizational decisions</h2>
            <div>
              <p>Build shared understanding across leadership, operations, education, public service, research, and technology teams.</p>
              {first && <Link className="button button-light" href={`/training/${first.slug}`}>VIEW {first.shortTitle.toUpperCase()} <ArrowIcon /></Link>}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
