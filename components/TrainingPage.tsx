import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";
import { ClassCatalog } from "./ClassCatalog";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Text } from "./Text";
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
            <h1><Text id="training.hero.title" /></h1>
            <p><Text id="training.hero.text" /></p>
          </div>
          <a className="button button-dark" href="#available-courses"><Text id="training.hero.button" /> <ArrowIcon /></a>
        </section>

        <section className="class-catalog class-section shell" id="available-courses" aria-labelledby="all-courses">
          <h2 id="all-courses"><Text id="training.catalog.title" /></h2>
          {courses.length > 0 ? <ClassCatalog courses={courses} /> : <p className="class-catalog-empty"><Text id="training.catalog.empty" /></p>}
        </section>

        <section className="course-catalog-closing">
          <div className="shell">
            <h2><Text id="training.closing.title" /></h2>
            <div>
              <p><Text id="training.closing.text" /></p>
              {first && <Link className="button button-light" href={`/training/${first.slug}`}><Text id="training.closing.button" /> {first.shortTitle.toUpperCase()} <ArrowIcon /></Link>}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
