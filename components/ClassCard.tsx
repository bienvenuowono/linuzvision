import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/training";

export function ClassCard({ course }: { course: Course }) {
  return (
    <Link className="class-card" href={`/training/${course.slug}`}>
      <div className="class-card-media">
        <Image src={course.cover} alt="" width={960} height={540} sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" />
      </div>
      <h3>{course.title}</h3>
      <p className="class-card-course">{course.creator}</p>
      <div className="class-card-meta">
        <span>
          <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.5 1.5 4.75 8 8l6.5-3.25L8 1.5Zm-6.5 6.5L8 11.25 14.5 8M1.5 11.25 8 14.5l6.5-3.25" /></svg>
          {course.modules.length} modules
        </span>
        <span>
          <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.25" /><path d="M8 4.5V8l2.5 1.5" /></svg>
          <span className="visually-hidden">Duration </span>{course.duration}
        </span>
      </div>
    </Link>
  );
}
