import Image from "next/image";
import Link from "next/link";
import { CoursePlayerProvider, ExpandAllButton, PlayModuleButton, StartCourseButton, WatchedBadge, WatchedSummary } from "./CoursePreview";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsappButton } from "./WhatsappButton";
import { aiEssentialsCourse, moduleDuration } from "@/lib/training";

const icons = {
  check: <path d="m3 8.5 3.2 3L13 4.5" />,
  video: <><rect x="1.75" y="3.25" width="12.5" height="9.5" rx="1" /><path d="m6.75 6 3 2-3 2Z" /></>,
  modules: <path d="M8 1.5 1.5 4.75 8 8l6.5-3.25L8 1.5Zm-6.5 6.5L8 11.25 14.5 8M1.5 11.25 8 14.5l6.5-3.25" />,
  device: <><rect x="1.75" y="2.75" width="12.5" height="8.5" rx="1" /><path d="M5.5 13.75h5" /></>,
  globe: <><circle cx="8" cy="8" r="6.25" /><path d="M1.75 8h12.5M8 1.75c1.8 2 2.6 4 2.6 6.25S9.8 12.25 8 14.25C6.2 12.25 5.4 10.25 5.4 8S6.2 3.75 8 1.75Z" /></>,
  play: <path d="M5.5 3.5v9l7-4.5Z" />,
};

function Icon({ name }: { name: keyof typeof icons }) {
  return <svg className="course-icon" viewBox="0 0 16 16" aria-hidden="true">{icons[name]}</svg>;
}

export function CourseDetailPage() {
  const course = aiEssentialsCourse;

  return (
    <>
      <Header active="TRAINING" />
      <CoursePlayerProvider courseSlug={course.slug} courseTitle={course.title} modules={course.modules}>
        <main className="course-landing">
          <section className="course-landing-hero">
            <div className="shell course-landing-hero-inner">
              <nav className="course-landing-crumbs" aria-label="Breadcrumb">
                <Link href="/training">Training</Link>
                <span aria-hidden="true">›</span>
                <Link href="/training#available-courses">Courses</Link>
                <span aria-hidden="true">›</span>
                <span aria-current="page">{course.shortTitle}</span>
              </nav>
              <h1>{course.title}</h1>
              <p className="course-landing-subtitle">{course.description}</p>
              <span className="course-landing-badge">{course.level}</span>
              <p className="course-landing-by">Created by <strong>{course.creator}</strong></p>
              <ul className="course-landing-facts">
                <li><Icon name="modules" />{course.modules.length} modules</li>
                <li><Icon name="video" />{course.duration} of video</li>
                <li><Icon name="globe" />{course.language}</li>
              </ul>
            </div>
          </section>

          <div className="shell course-landing-body">
            <aside className="course-landing-card" aria-label="Course access">
              <PlayModuleButton moduleNumber={1} className="course-landing-preview">
                <Image src={course.cover} alt="" width={960} height={540} sizes="(max-width: 900px) 100vw, 360px" priority />
                <span className="course-landing-play" aria-hidden="true"><Icon name="play" /></span>
                <span className="course-landing-preview-label">Preview this course</span>
              </PlayModuleButton>
              <div className="course-landing-card-body">
                <StartCourseButton moduleNumbers={course.modules.map((module) => module.number)} className="course-landing-start" />
                <h2>This course includes:</h2>
                <ul className="course-landing-includes">
                  <li><Icon name="video" />{course.duration} of on-demand video</li>
                  <li><Icon name="modules" />{course.modules.length} modules</li>
                  <li><Icon name="device" />Access in your web browser on mobile and desktop</li>
                  <li><Icon name="globe" />{course.language}</li>
                </ul>
              </div>
            </aside>

            <div className="course-landing-main">
              <section className="course-learn-box" aria-labelledby="course-learn-title">
                <h2 id="course-learn-title">What you&apos;ll learn</h2>
                <ul>{course.outcomes.map((outcome) => <li key={outcome}><Icon name="check" />{outcome}</li>)}</ul>
              </section>

              <section className="course-content" aria-labelledby="course-content-title">
                <h2 id="course-content-title">Course content</h2>
                <div className="course-content-summary">
                  <span>{course.modules.length} modules • {course.modules.length} lectures • {course.duration} total length <WatchedSummary /></span>
                  <ExpandAllButton targetId="course-content-list" />
                </div>
                <div className="course-content-list" id="course-content-list">
                  {course.modules.map((module) => (
                    <details key={module.number} open={module.number === 1}>
                      <summary>
                        <svg className="course-content-chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4" /></svg>
                        <span className="course-content-name">Module {module.number}: {module.title}</span>
                        <WatchedBadge moduleNumber={module.number} />
                        <span className="course-content-meta">1 lecture • {moduleDuration(module.duration)}</span>
                      </summary>
                      <div className="course-content-lecture">
                        <Icon name="video" />
                        <div>
                          <PlayModuleButton moduleNumber={module.number} className="course-content-play">{module.title}</PlayModuleButton>
                          <p>{module.description}</p>
                        </div>
                        <PlayModuleButton moduleNumber={module.number} className="course-content-preview" label={`Play module ${module.number}: ${module.title}`}>Play</PlayModuleButton>
                        <span className="course-content-time">{moduleDuration(module.duration)}</span>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              <section className="course-landing-text" aria-labelledby="course-requirements-title">
                <h2 id="course-requirements-title">Requirements</h2>
                <ul>{course.requirements.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>

              <section className="course-landing-text" aria-labelledby="course-description-title">
                <h2 id="course-description-title">Description</h2>
                <p>{course.description}</p>
                {course.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>

              <section className="course-landing-text" aria-labelledby="course-audience-title">
                <h2 id="course-audience-title">Who this course is for:</h2>
                <ul>{course.audience.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            </div>
          </div>
        </main>
      </CoursePlayerProvider>
      <Footer />
      <WhatsappButton />
    </>
  );
}
