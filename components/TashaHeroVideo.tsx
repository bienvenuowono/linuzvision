"use client";

import { useEffect, useRef, useState } from "react";

export function TashaHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

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
    if (video.paused) {
      try {
        await video.play();
        setPlaying(true);
      } catch (err) {
        console.error("Playback error", err);
      }
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  return (
    <div className="tasha-video-frame">
      <video
        ref={videoRef}
        src="/images/tasha2.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="TASHA autonomous intelligence system"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <div className="tasha-video-controls">
        <button
          className="hero-video-control"
          type="button"
          onClick={togglePlayback}
          aria-label={playing ? "Pause TASHA video" : "Play TASHA video"}
        >
          {playing ? "PAUSE" : "PLAY"}
        </button>
        <button
          className="hero-video-control"
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute TASHA video" : "Mute TASHA video"}
        >
          {muted ? "AUDIO OFF" : "AUDIO ON"}
        </button>
      </div>
    </div>
  );
}
