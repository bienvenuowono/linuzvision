"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type Language = "en" | "fr";
type TranslationState = "idle" | "loading" | "ready" | "error";

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          options: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean },
          elementId: string,
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

const TRANSLATION_COOKIE = "googtrans";

function readLanguage(): Language {
  return document.cookie.includes(`${TRANSLATION_COOKIE}=/en/fr`) ? "fr" : "en";
}

function writeTranslationCookie(language: Language) {
  const value = language === "fr" ? "/en/fr" : "/en/en";
  document.cookie = `${TRANSLATION_COOKIE}=${value}; path=/; max-age=31536000; SameSite=Lax`;

  if (window.location.hostname.includes(".")) {
    document.cookie = `${TRANSLATION_COOKIE}=${value}; path=/; domain=.${window.location.hostname}; max-age=31536000; SameSite=Lax`;
  }
}

export function LanguageSelector() {
  const [language, setLanguage] = useState<Language>("en");
  const [translationState, setTranslationState] = useState<TranslationState>("idle");
  const requestedLanguage = useRef<Language>("en");
  const translationTimer = useRef<number | null>(null);

  function applyFrenchTranslation(attemptsRemaining = 50) {
    const googleSelect = document.querySelector<HTMLSelectElement>(".goog-te-combo");

    if (googleSelect) {
      googleSelect.value = "fr";
      googleSelect.dispatchEvent(new Event("change", { bubbles: true }));
      setTranslationState("ready");
      return;
    }

    if (attemptsRemaining > 0 && requestedLanguage.current === "fr") {
      translationTimer.current = window.setTimeout(
        () => applyFrenchTranslation(attemptsRemaining - 1),
        100,
      );
      return;
    }

    openFallbackTranslation();
  }

  function openFallbackTranslation() {
    setTranslationState("error");

    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") return;

    const sourceUrl = `${window.location.origin}${window.location.pathname}${window.location.search}${window.location.hash}`;
    const fallbackUrl = `https://translate.google.com/translate?sl=en&tl=fr&u=${encodeURIComponent(sourceUrl)}`;
    window.location.assign(fallbackUrl);
  }

  function initializeGoogleTranslate() {
    const mount = document.getElementById("google_translate_element");
    if (!mount || !window.google?.translate?.TranslateElement) return;

    if (!mount.dataset.initialized) {
      mount.dataset.initialized = "true";
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "en,fr", autoDisplay: false },
        "google_translate_element",
      );
    }

    if (requestedLanguage.current === "fr") applyFrenchTranslation();
  }

  useEffect(() => {
    const currentLanguage = readLanguage();
    requestedLanguage.current = currentLanguage;
    setLanguage(currentLanguage);
    document.documentElement.lang = currentLanguage;

    window.googleTranslateElementInit = initializeGoogleTranslate;

    if (window.google?.translate?.TranslateElement) initializeGoogleTranslate();

    return () => {
      if (translationTimer.current) window.clearTimeout(translationTimer.current);
    };
    // The translator is initialized once; subsequent language changes are handled directly.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function selectLanguage(nextLanguage: Language) {
    requestedLanguage.current = nextLanguage;
    writeTranslationCookie(nextLanguage);
    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage;

    if (nextLanguage === "fr") {
      setTranslationState("loading");
      initializeGoogleTranslate();
      applyFrenchTranslation();
      return;
    }

    const originalOrigin = process.env.NEXT_PUBLIC_SITE_URL || "https://linuzvision.com";
    if (window.location.hostname.endsWith(".translate.goog") || window.location.hostname === "translate.google.com") {
      window.location.assign(`${originalOrigin}${window.location.pathname}`);
      return;
    }

    window.location.reload();
  }

  return (
    <div
      className="language-selector notranslate"
      translate="no"
      role="group"
      aria-label="Website language"
      aria-busy={translationState === "loading"}
    >
      <button type="button" aria-pressed={language === "en"} onClick={() => selectLanguage("en")}>EN</button>
      <button type="button" aria-pressed={language === "fr"} onClick={() => selectLanguage("fr")}>FR</button>
      <span className="translation-status" aria-live="polite">
        {translationState === "loading" ? "Translation en cours" : ""}
      </span>
      <div id="google_translate_element" aria-hidden="true" />
      <Script
        id="google-translate"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
        onReady={initializeGoogleTranslate}
        onError={() => {
          if (requestedLanguage.current === "fr") openFallbackTranslation();
        }}
      />
    </div>
  );
}
