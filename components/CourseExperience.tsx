"use client";

import { useRef, useState } from "react";
import type { TrainingModule } from "@/lib/training";

export function CourseExperience({ modules }: { modules: TrainingModule[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const active = modules[activeIndex];

  function selectModule(index: number) {
    setActiveIndex(index);
    window.requestAnimationFrame(() => {
      videoRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      videoRef.current?.play().catch(() => undefined);
    });
  }

  function playNext() {
    if (activeIndex < modules.length - 1) selectModule(activeIndex + 1);
  }

  return (
    <section className="course-learning shell" aria-label="Course player and curriculum">
      <div className="course-player-column">
        <div className="course-player-frame">
          <video
            ref={videoRef}
            key={active.video}
            src={active.video}
            controls
            playsInline
            preload="metadata"
            poster="/images/ai-essentials-organizations-cover.png"
            onEnded={playNext}
          />
        </div>
        <div className="course-player-copy" aria-live="polite">
          <span>MODULE {String(active.number).padStart(2, "0")} OF {modules.length}</span>
          <h2>{active.title}</h2>
          <p>{active.description}</p>
        </div>
      </div>

      <div className="course-curriculum">
        <div className="course-curriculum-heading">
          <h2>Course curriculum</h2>
          <span>{modules.length} modules</span>
        </div>
        <ol>
          {modules.map((module, index) => (
            <li key={module.number}>
              <button
                type="button"
                className={index === activeIndex ? "active" : ""}
                onClick={() => selectModule(index)}
                aria-current={index === activeIndex ? "step" : undefined}
              >
                <span className="module-index">{String(module.number).padStart(2, "0")}</span>
                <span className="module-name">
                  <strong>{module.title}</strong>
                  <small>{module.duration}</small>
                </span>
                <span className="module-play" aria-hidden="true">PLAY</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
