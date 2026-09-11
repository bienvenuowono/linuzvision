"use client";

import { useEffect } from "react";

export function HomeScrollNarrative() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("home-motion-ready");

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-home-scene], [data-reveal-group], [data-reveal-item]"
      )
    );

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return () => root.classList.remove("home-motion-ready");
    }

    // Configured with bottom margin so elements begin staggered entry when preceding section is scrolled ~50%
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: [0.05, 0.15, 0.3],
        rootMargin: "0px 0px -14% 0px",
      }
    );

    targets.forEach((el) => observer.observe(el));

    // Initial check for elements already in viewport on mount
    const checkImmediate = () => {
      const windowHeight = window.innerHeight;
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight * 0.9) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      });
    };

    const frameId = requestAnimationFrame(checkImmediate);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      root.classList.remove("home-motion-ready");
    };
  }, []);

  return null;
}
