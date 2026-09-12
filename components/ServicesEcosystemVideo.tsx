"use client";

import { useEffect, useRef, useState } from "react";

export function ServicesEcosystemVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyMotionPreference = () => {
      if (reducedMotion.matches) {
        videoRef.current?.pause();
        if (videoRef.current) videoRef.current.currentTime = 0;
        setPlaying(false);
      }
    };

    applyMotionPreference();
    reducedMotion.addEventListener("change", applyMotionPreference);
    return () => reducedMotion.removeEventListener("change", applyMotionPreference);
  }, []);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
      setPlaying(true);
      return;
    }

    video.pause();
    setPlaying(false);
  }

  return (
    <div className="services-ecosystem-video-frame">
      <video
        ref={videoRef}
        src="/images/linuzvision-ecosystem-expanding.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="LinuZvision ecosystem expanding into one connected technology system"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        className="hero-video-control services-video-control"
        type="button"
        onClick={togglePlayback}
        aria-label={playing ? "Pause ecosystem video" : "Play ecosystem video"}
      >
        {playing ? "PAUSE" : "PLAY"}
      </button>
    </div>
  );
}
