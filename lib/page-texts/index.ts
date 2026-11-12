import type { TextField } from "./define";
import { about } from "./about";
import { cloud } from "./cloud";
import { contact } from "./contact";
import { cybersecurity } from "./cybersecurity";
import { datacenter } from "./datacenter";
import { home } from "./home";
import { insights } from "./insights";
import { services } from "./services";
import { solutions } from "./solutions";
import { tasha } from "./tasha";
import { training } from "./training";

/* Every editable text of the public pages, grouped by page. The original wording lives here;
   changes made from the dashboard are stored in the database and win over it. */
export const textPages = { home, tasha, solutions, datacenter, services, cloud, cybersecurity, training, about, insights, contact } as const;

type Pages = typeof textPages;
export type TextPageKey = keyof Pages;
export type TextId = { [P in TextPageKey]: `${P}.${Extract<keyof Pages[P]["texts"], string>}` }[TextPageKey];
export type TextOverrides = Partial<Record<TextId, string>>;

export const defaultTexts = Object.fromEntries(
  Object.entries(textPages).flatMap(([page, definition]) =>
    Object.entries(definition.texts as Record<string, TextField>).map(([key, field]) => [`${page}.${key}`, field[2]]),
  ),
) as Record<TextId, string>;

export function isTextId(id: string): id is TextId {
  return Object.prototype.hasOwnProperty.call(defaultTexts, id);
}

export const TEXT_MAX_LENGTH = 2000;
