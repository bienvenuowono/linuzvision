import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";
import { CourseExperience } from "./CourseExperience";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsappButton } from "./WhatsappButton";
import { aiEssentialsCourse } from "@/lib/training";

const outcomes = [
  "Explain how modern AI systems work and where their limits matter.",
  "Identify valuable AI applications across public, educational, institutional, and business settings.",
  "Evaluate ethics, privacy, cybersecurity, and governance requirements.",
  "Build a practical roadmap for responsible adoption and organizational readiness.",
];

export function CourseDetailPage() {
  const course = aiEssentialsCourse;

  return (
    <>
      <Header active="TRAINING" />
      <main className="course-detail-page">
        <section className="course-detail-hero shell">
          <nav aria-label="Breadcrumb"><Link href="/training">Training</Link><span>/</span><span>{course.shortTitle}</span></nav>
          <div className="course-detail-grid">
            <h1>{course.title}</h1>
            <div>
              <p>{course.description}</p>
              <a className="button button-dark" href="#course-player">START WITH MODULE 1 <ArrowIcon /></a>
            </div>
            <dl>
              <div><dt>Modules</dt><dd>{course.modules.length}</dd></div>
              <div><dt>Duration</dt><dd>{course.duration}</dd></div>
              <div><dt>Level</dt><dd>{course.level}</dd></div>
              <div><dt>Language</dt><dd>{course.language}</dd></div>
            </dl>
          </div>
        </section>

        <div id="course-player"><CourseExperience modules={course.modules} /></div>

        <section className="course-outcomes shell">
          <div>
            <h2>What you will learn</h2>
            <p>This course connects technical understanding with the decisions leaders and teams make in real organizations.</p>
          </div>
          <ul>{outcomes.map((outcome, index) => <li key={outcome}><span>{String(index + 1).padStart(2, "0")}</span><p>{outcome}</p></li>)}</ul>
        </section>

        <section className="course-audience">
          <div className="shell">
            <h2>Built for people shaping how organizations use AI</h2>
            <div>
              <p>For leaders, public servants, educators, researchers, managers, and professionals who need a clear foundation without unnecessary technical complexity.</p>
              <a className="button button-light" href="#course-player">BEGIN THE COURSE <ArrowIcon /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
