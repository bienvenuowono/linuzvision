"use client";

import { useId, useRef, useState } from "react";

type Kind = "image" | "video";

const accept: Record<Kind, string> = {
  image: "image/png,image/jpeg,image/webp,image/avif",
  video: "video/mp4,video/webm",
};

const limits: Record<Kind, number> = { image: 12, video: 600 };

// Sends one file to the server and reports progress (fetch cannot report upload progress).
export function uploadFile(file: Blob, name: string, kind: Kind, onProgress?: (percent: number) => void) {
  return new Promise<string>((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("POST", `/api/admin/uploads?kind=${kind}&name=${encodeURIComponent(name)}`);
    request.responseType = "json";
    request.upload.onprogress = (event) => {
      if (event.lengthComputable) onProgress?.(Math.round((event.loaded / event.total) * 100));
    };
    request.onload = () => {
      const data = request.response as { url?: string; error?: string } | null;
      if (request.status === 201 && data?.url) resolve(data.url);
      else if (request.status === 401) reject(new Error("Votre session a expiré. Reconnectez-vous puis recommencez."));
      else if (request.status === 413) reject(new Error(data?.error || "L'hébergement a refusé ce fichier car il est trop lourd. Réduisez sa taille, ou faites augmenter la limite d'envoi de l'hébergement."));
      else if (request.status === 503) reject(new Error(data?.error || "Le serveur ne peut pas enregistrer de fichier pour le moment. Réessayez dans un instant."));
      else reject(new Error(data?.error || "Le fichier n'a pas pu être envoyé."));
    };
    request.onerror = () => reject(new Error("La connexion a été interrompue pendant l'envoi. Réessayez."));
    request.send(file);
  });
}

type VideoDetails = { duration: string; poster: Blob | null };

// Reads the length of a video and captures one frame to use as its picture, without leaving the browser.
function inspectVideo(file: File) {
  return new Promise<VideoDetails | null>((resolve) => {
    const video = document.createElement("video");
    const source = URL.createObjectURL(file);
    const finish = (details: VideoDetails | null) => {
      URL.revokeObjectURL(source);
      resolve(details);
    };
    const timer = window.setTimeout(() => finish(null), 15000);
    let duration = "0:00";
    video.muted = true;
    video.preload = "auto";
    video.onerror = () => { window.clearTimeout(timer); finish(null); };
    video.onloadedmetadata = () => {
      const seconds = Number.isFinite(video.duration) ? Math.round(video.duration) : 0;
      duration = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
      video.currentTime = Math.min(2, video.duration / 2 || 0);
    };
    video.onseeked = () => {
      window.clearTimeout(timer);
      try {
        const canvas = document.createElement("canvas");
        const scale = Math.min(1, 1280 / (video.videoWidth || 1280));
        canvas.width = Math.round((video.videoWidth || 1280) * scale);
        canvas.height = Math.round((video.videoHeight || 720) * scale);
        canvas.getContext("2d")?.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((poster) => finish({ duration, poster }), "image/jpeg", 0.82);
      } catch {
        finish({ duration, poster: null });
      }
    };
    video.src = source;
  });
}

type Props = {
  kind: Kind;
  label: string;
  hint?: string;
  value: string;
  onChange: (url: string) => void;
  // Video only: the detected length ("6:29") and the address of a picture captured from the video.
  onVideoDetails?: (details: { duration: string; poster: string | null }) => void;
  onBusyChange?: (busy: boolean) => void;
};

export function MediaField({ kind, label, hint, value, onChange, onVideoDetails, onBusyChange }: Props) {
  const inputId = useId();
  const input = useRef<HTMLInputElement>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  async function send(file: File) {
    setError("");
    setNotice("");
    if (file.size > limits[kind] * 1024 * 1024) {
      setError(`Ce fichier dépasse la limite de ${limits[kind]} Mo.`);
      return;
    }
    setProgress(0);
    onBusyChange?.(true);
    try {
      const details = kind === "video" && onVideoDetails ? await inspectVideo(file) : null;
      const url = await uploadFile(file, file.name, kind, setProgress);
      onChange(url);
      if (details) {
        const poster = details.poster ? await uploadFile(details.poster, "poster.jpg", "image").catch(() => null) : null;
        onVideoDetails?.({ duration: details.duration, poster });
        if (!poster) setNotice("Vidéo envoyée. L'image du module n'a pas pu être extraite : la couverture du cours sera utilisée, ou choisissez une image.");
      } else if (kind === "video" && onVideoDetails) {
        // The browser could not read the file (unusual encoding): the owner must not publish "0:00" unknowingly.
        setNotice("Vidéo envoyée, mais sa durée n'a pas pu être détectée. Saisissez la durée à la main (exemple : 6:29) et vérifiez que la vidéo se lit ci-dessus.");
      }
    } catch (problem) {
      setError(problem instanceof Error ? problem.message : "Le fichier n'a pas pu être envoyé.");
    } finally {
      setProgress(null);
      onBusyChange?.(false);
      if (input.current) input.current.value = "";
    }
  }

  const busy = progress !== null;

  return (
    <div className="admin-media">
      <span className="admin-media-label">{label}</span>
      {value && kind === "image" && <img src={value} alt="" />}
      {value && kind === "video" && <video src={value} controls preload="metadata" />}
      <div className="admin-media-actions">
        <label htmlFor={inputId} className={busy ? "admin-media-pick is-busy" : "admin-media-pick"}>
          {busy ? `ENVOI… ${progress}%` : value ? "REMPLACER LE FICHIER" : kind === "video" ? "CHOISIR UNE VIDÉO" : "CHOISIR UNE IMAGE"}
        </label>
        <input
          ref={input}
          id={inputId}
          className="visually-hidden"
          type="file"
          accept={accept[kind]}
          disabled={busy}
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) void send(file);
          }}
        />
        {busy && <progress value={progress ?? 0} max={100} aria-label="Progression de l'envoi" />}
      </div>
      {hint && <p className="admin-hint">{hint}</p>}
      <p className="admin-media-notice" role="status">{notice}</p>
      <p className="admin-media-error" role="alert">{error}</p>
    </div>
  );
}
