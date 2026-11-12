"use client";

import { useEffect, useRef, useState } from "react";
import { useText } from "./Text";


export function HeroVideo() {
  // Four passages: the CSS loop gives each one its own three-second step.
  const phrases = [useText("home.hero.phrase1"), useText("home.hero.phrase2"), useText("home.hero.phrase3"), useText("home.hero.phrase4")];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause(); setPlaying(false); return;
    }
    void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, []);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      try { await video.play(); } catch { setPlaying(false); }
    } else video.pause();
  }

  return <>
    <video ref={videoRef} src="/images/hero-media.mp4" poster="/images/server-architecture.png" autoPlay muted loop playsInline preload="metadata" aria-label="LinuZvision technology and intelligent infrastructure" onPlaying={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setPlaying(false)} />
    <p className="hero-video-slogan" aria-label={phrases.join(", ")}>
      {phrases.map((phrase, index) => (
        <span className={`hero-slogan-passage hero-slogan-step-${index}`} key={index} aria-hidden="true">
          {phrase}
        </span>
      ))}
    </p>
    <button className="hero-video-control" type="button" onClick={togglePlayback} aria-label={playing ? "Pause hero video" : "Play hero video"}>{playing ? "PAUSE" : "PLAY"}</button>
  </>;
}
