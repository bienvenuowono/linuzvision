"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { moduleDuration, type TrainingModule } from "@/lib/training";

type PlayerContext = { open: (moduleNumber: number) => void; watched: Set<number>; total: number };

const CoursePlayerContext = createContext<PlayerContext>({ open: () => undefined, watched: new Set(), total: 0 });

// Watched modules are a per-visitor convenience kept in this browser only.
function storageKey(courseSlug: string) {
  return `linuzvision-course-${courseSlug}-watched`;
}

function readWatched(courseSlug: string) {
  try {
    const stored = JSON.parse(window.localStorage.getItem(storageKey(courseSlug)) || "[]");
    return new Set<number>(Array.isArray(stored) ? stored.filter(Number.isInteger) : []);
  } catch {
    return new Set<number>();
  }
}

function writeWatched(courseSlug: string, watched: Set<number>) {
  try {
    window.localStorage.setItem(storageKey(courseSlug), JSON.stringify([...watched]));
  } catch {
    // Storage can be unavailable (private mode, blocked site data); progress then lasts for this visit only.
  }
}

function CheckIcon() {
  return <svg className="course-watched-icon" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="7" /><path d="m4.75 8.25 2.25 2.25 4.25-4.5" /></svg>;
}

// Wraps the course page so any module control can open the shared popup player.
export function CoursePlayerProvider({ courseSlug, courseTitle, modules, children }: { courseSlug: string; courseTitle: string; modules: TrainingModule[]; children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [watched, setWatched] = useState<Set<number>>(() => new Set());
  const [problem, setProblem] = useState("");
  const active = modules[activeIndex];

  useEffect(() => setWatched(readWatched(courseSlug)), [courseSlug]);

  // The source is swapped and play() called inside the click (or ended) handler itself:
  // Safari, iOS and Firefox refuse to start sound playback from a later effect.
  function select(index: number) {
    const video = videoRef.current;
    const module = modules[index];
    setActiveIndex(index);
    setProblem("");
    if (!video) return;
    if (video.getAttribute("src") !== module.video) {
      video.poster = module.thumbnail;
      video.src = module.video;
    }
    video.play().catch((error: unknown) => {
      // Surface refusals instead of failing silently: the visitor can still press the video's own play control.
      if (error instanceof DOMException && error.name === "AbortError") return;
      console.warn("Course video could not start automatically:", error);
      setProblem("Press play on the video to start this module.");
    });
  }

  function open(moduleNumber: number) {
    dialogRef.current?.showModal();
    select(Math.max(0, modules.findIndex((module) => module.number === moduleNumber)));
  }

  function finishModule() {
    setWatched((current) => {
      const next = new Set(current).add(active.number);
      writeWatched(courseSlug, next);
      return next;
    });
    if (activeIndex < modules.length - 1) select(activeIndex + 1);
  }

  return (
    <CoursePlayerContext.Provider value={{ open, watched, total: modules.length }}>
      {children}
      <dialog ref={dialogRef} className="course-preview-dialog" aria-labelledby="course-preview-title" onClose={() => videoRef.current?.pause()}>
        <div className="course-preview-head">
          <div>
            <span>{watched.size} of {modules.length} modules watched</span>
            <h2 id="course-preview-title">{courseTitle}</h2>
          </div>
          <button type="button" className="course-preview-close" onClick={() => dialogRef.current?.close()} aria-label="Close player">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m3.5 3.5 9 9m0-9-9 9" /></svg>
          </button>
        </div>
        <video
          ref={videoRef}
          controls
          playsInline
          preload="none"
          onEnded={finishModule}
          onPlaying={() => setProblem("")}
          onError={() => {
            console.error("Course video failed to load:", videoRef.current?.currentSrc, videoRef.current?.error);
            setProblem("This video could not be loaded. Please try again in a moment.");
          }}
        />
        {problem && <p className="course-preview-problem" role="alert">{problem}</p>}
        <p className="course-preview-now" aria-live="polite">Module {String(active.number).padStart(2, "0")} of {modules.length}: {active.title}</p>
        <ol className="course-preview-list">
          {modules.map((module, index) => (
            <li key={module.number}>
              <button type="button" onClick={() => select(index)} aria-current={index === activeIndex ? "true" : undefined}>
                <img src={module.thumbnail} alt="" width={96} height={54} loading="lazy" />
                <span>{module.title}</span>
                {watched.has(module.number) && <span className="course-watched"><CheckIcon />Watched</span>}
                <small>{moduleDuration(module.duration)}</small>
              </button>
            </li>
          ))}
        </ol>
      </dialog>
    </CoursePlayerContext.Provider>
  );
}

export function PlayModuleButton({ moduleNumber, className, children, label }: { moduleNumber: number; className?: string; children: ReactNode; label?: string }) {
  const { open } = useContext(CoursePlayerContext);
  return <button type="button" className={className} onClick={() => open(moduleNumber)} aria-label={label}>{children}</button>;
}

// Opens the first module not yet watched in this browser.
export function StartCourseButton({ moduleNumbers, className }: { moduleNumbers: number[]; className?: string }) {
  const { open, watched } = useContext(CoursePlayerContext);
  const next = moduleNumbers.find((number) => !watched.has(number)) ?? moduleNumbers[0];
  const started = watched.size > 0 && watched.size < moduleNumbers.length;
  return <button type="button" className={className} onClick={() => open(next)}>{started ? "Continue course" : "Start course"}</button>;
}

export function WatchedBadge({ moduleNumber }: { moduleNumber: number }) {
  const { watched } = useContext(CoursePlayerContext);
  return watched.has(moduleNumber) ? <span className="course-watched"><CheckIcon />Watched</span> : null;
}

export function WatchedSummary() {
  const { watched, total } = useContext(CoursePlayerContext);
  return watched.size ? <span className="course-watched-summary">{watched.size} of {total} watched</span> : null;
}

// Opens or closes every <details> section of the course content list.
export function ExpandAllButton({ targetId }: { targetId: string }) {
  const [expanded, setExpanded] = useState(false);
  function toggle() {
    const next = !expanded;
    document.querySelectorAll<HTMLDetailsElement>(`#${targetId} details`).forEach((section) => { section.open = next; });
    setExpanded(next);
  }
  return <button type="button" className="course-content-toggle" onClick={toggle} aria-controls={targetId}>{expanded ? "Collapse all sections" : "Expand all sections"}</button>;
}
