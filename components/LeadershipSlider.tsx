"use client";

import { useEffect, useRef, useState } from "react";
import { leadershipTeam } from "./leadershipTeam";

export function LeadershipSlider() {
  const root = useRef<HTMLDivElement>(null);
  // CSS playback starts in the server-rendered page, before hydration.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting && !document.hidden));
    if (root.current) observer.observe(root.current);
    const onVisibilityChange = () => {
      if (document.hidden) setVisible(false);
      else if (root.current) {
        const rect = root.current.getBoundingClientRect();
        setVisible(rect.bottom > 0 && rect.top < window.innerHeight);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <div className="leadership-slider" ref={root} data-paused={!visible}>
      <div className="leadership-slider-window" tabIndex={0} role="region" aria-label="Executive team portraits">
        <div className="leadership-slider-track">
          {[0, 1].map((copy) => (
            <div className="leadership-slider-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {leadershipTeam.map((member) => (
                <article key={member.code} className="leadership-card">
                  <div className="leadership-photo-wrap">
                    <img src={member.image} alt={copy === 0 ? member.alt : ""} className="leadership-photo" style={{ objectPosition: member.objectPosition }} />
                    <span className="leadership-badge">{member.role}</span>
                  </div>
                  <div className="leadership-meta">
                    <div className="leadership-header">
                      <span className="leadership-role-tag">{member.role} · {member.title}</span>
                      <span className="leadership-index">{member.code}</span>
                    </div>
                    <h3 className="leadership-name">{member.name}</h3>
                    <p className="leadership-function">{member.title}</p>
                    <p className="leadership-desc">{member.description}</p>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
