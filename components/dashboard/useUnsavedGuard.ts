"use client";

import { useEffect } from "react";

// Asks the browser to confirm before the page is closed, reloaded or left while work is unsaved.
export function useUnsavedGuard(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const warn = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [active]);
}

export function confirmDiscard(unsaved: boolean) {
  return !unsaved || window.confirm("Vos modifications ne sont pas enregistrées. Voulez-vous les abandonner ?");
}

// Brings the form into view (it sits below the list on phones) and places the cursor in its first field.
export function showEditor(id: string) {
  const editor = document.getElementById(id);
  editor?.scrollIntoView({ block: "start" });
  editor?.querySelector<HTMLElement>("input:not([type=file]), textarea")?.focus({ preventScroll: true });
}

// Turns a failed admin request into a French sentence that says what to do next.
export function requestProblem(status: number, serverMessage: unknown, fallback: string) {
  if (status === 401) return "Votre session a expiré. Reconnectez-vous, puis recommencez.";
  if (status === 404) return "Cet élément n'existe plus. Rechargez la page pour voir la liste à jour.";
  return typeof serverMessage === "string" && serverMessage ? serverMessage : fallback;
}
