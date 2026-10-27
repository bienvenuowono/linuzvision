"use client";

import { useRef, useState } from "react";
import { ClassCard } from "./ClassCard";
import type { Course } from "@/lib/training";

const PAGE_SIZE = 9;

export function ClassCatalog({ courses }: { courses: Course[] }) {
  const [page, setPage] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);
  const pageCount = Math.ceil(courses.length / PAGE_SIZE);
  const visible = courses.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  function goTo(nextPage: number) {
    if (nextPage < 0 || nextPage >= pageCount) return;
    setPage(nextPage);
    // Bring the section heading (not just the cards) back into view below the fixed header.
    (gridRef.current?.closest("section") ?? gridRef.current)?.scrollIntoView({ block: "start" });
  }

  return (
    <>
      <div className="class-grid" ref={gridRef}>
        {visible.map((course) => <ClassCard key={course.slug} course={course} />)}
      </div>
      {pageCount > 1 && (
        <nav className="class-pagination" aria-label="Course pages">
          <span className="visually-hidden" aria-live="polite">Page {page + 1} of {pageCount}</span>
          <button type="button" className="class-pagination-arrow" onClick={() => goTo(page - 1)} disabled={page === 0} aria-label="Previous page">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10 3.5 5.5 8l4.5 4.5" /></svg>
          </button>
          {Array.from({ length: pageCount }, (_, index) => (
            <button type="button" key={index} onClick={() => goTo(index)} aria-current={index === page ? "true" : undefined} aria-label={`Page ${index + 1}`}>
              {index + 1}
            </button>
          ))}
          <button type="button" className="class-pagination-arrow" onClick={() => goTo(page + 1)} disabled={page === pageCount - 1} aria-label="Next page">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3.5 10.5 8 6 12.5" /></svg>
          </button>
        </nav>
      )}
    </>
  );
}
