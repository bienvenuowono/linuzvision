"use client";

import { Fragment } from "react";
import { defaultTexts, type TextId } from "@/lib/page-texts";
import { useSiteData } from "./SiteData";

// The wording to show: the version saved from the dashboard, otherwise the original.
export function useText(id: TextId) {
  return useSiteData().texts[id] ?? defaultTexts[id];
}

// Renders one editable text; a line break typed in the dashboard becomes a line break on the page.
export function Text({ id }: { id: TextId }) {
  const lines = useText(id).split("\n");
  return <>{lines.map((line, index) => <Fragment key={index}>{index > 0 && <br />}{line}</Fragment>)}</>;
}
