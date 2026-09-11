"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyPreference = () => {
      if (reducedMotion.matches) {
        videoRef.current?.pause();
        if (videoRef.current) videoRef.current.currentTime = 0;
        setPlaying(false);
      }
    };
    applyPreference();
    reducedMotion.addEventListener("change", applyPreference);
    return () => reducedMotion.removeEventListener("change", applyPreference);
  }, []);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) { await video.play(); setPlaying(true); }
    else { video.pause(); setPlaying(false); }
  }

  return <>
    <video ref={videoRef} src="/images/hero-media.mp4" poster="/images/server-architecture.png" autoPlay muted loop playsInline preload="metadata" aria-label="LinuZvision technology and intelligent infrastructure" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
    <button className="hero-video-control" type="button" onClick={togglePlayback} aria-label={playing ? "Pause hero video" : "Play hero video"}>{playing ? "PAUSE" : "PLAY"}</button>
  </>;
}
