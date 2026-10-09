import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";
import { aiEssentialsCourse } from "@/lib/training";

export function CourseCard({ featured = false }: { featured?: boolean }) {
  const course = aiEssentialsCourse;

  return (
    <Link className={`course-card${featured ? " course-card-featured" : ""}`} href={`/training/${course.slug}`}>
      <div className="course-card-media">
        <img src={course.cover} alt="AI connecting government, research, education, and business" />
        <span>{course.modules.length} MODULES</span>
      </div>
      <div className="course-card-body">
        <div className="course-card-meta">
          <span>{course.level}</span>
          <span>{course.duration}</span>
        </div>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <div className="course-card-action">
          <span>VIEW COMPLETE COURSE</span>
          <ArrowIcon />
        </div>
      </div>
    </Link>
  );
}
