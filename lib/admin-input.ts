import { revalidatePath } from "next/cache";
import type { CourseInput, SiteSettings, TeamMemberInput } from "@/lib/content";
import { validMedia } from "@/lib/media";
import { cleanText, slugify, validEmail } from "@/lib/validation";

type Parsed<T> = { input: T; error?: undefined } | { input?: undefined; error: string };

// Every public page reads managed content, so one admin change refreshes the whole site.
export function refreshPublicSite() {
  revalidatePath("/", "layout");
}

export function rowId(value: string) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
}

function textList(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => cleanText(item, 400)).filter(Boolean).slice(0, 20);
}

export function parseCourse(body: Record<string, unknown>): Parsed<CourseInput> {
  const title = cleanText(body.title, 160);
  const description = cleanText(body.description, 1000);
  if (!title || !description) return { error: "Une formation doit avoir un titre et une description." };
  const slug = slugify(cleanText(body.slug, 120) || title);
  if (!slug) return { error: "L'adresse web du cours doit contenir au moins une lettre ou un chiffre." };
  const cover = cleanText(body.cover, 300);
  if (!validMedia(cover, "image")) return { error: "Ajoutez une image de couverture." };
  const published = body.published ? 1 : 0;

  const rawModules = Array.isArray(body.modules) ? body.modules.slice(0, 100) : [];
  const modules: CourseInput["modules"] = [];
  for (const [index, raw] of rawModules.entries()) {
    const item = (raw ?? {}) as Record<string, unknown>;
    const label = `Module ${index + 1}`;
    const moduleTitle = cleanText(item.title, 160);
    if (!moduleTitle) return { error: `${label} : ajoutez un titre.` };
    const video = cleanText(item.video, 300);
    if (video && !validMedia(video, "video")) return { error: `${label} : la vidéo est introuvable. Envoyez-la de nouveau.` };
    if (published && !video) return { error: `${label} n'a pas encore de vidéo. Ajoutez-en une, ou décochez « Mettre en ligne » pour enregistrer un brouillon.` };
    const thumbnail = cleanText(item.thumbnail, 300);
    if (thumbnail && !validMedia(thumbnail, "image")) return { error: `${label} : l'image est introuvable. Envoyez-la de nouveau.` };
    const duration = cleanText(item.duration, 8);
    modules.push({
      title: moduleTitle,
      description: cleanText(item.description, 600),
      duration: /^\d{1,3}:[0-5]\d$/.test(duration) ? duration : "0:00",
      video,
      thumbnail: thumbnail || cover,
    });
  }
  if (published && modules.length === 0) return { error: "Ajoutez au moins un module avant de mettre en ligne, ou décochez « Mettre en ligne » pour enregistrer un brouillon." };

  return {
    input: {
      slug, title, description, cover, published, modules,
      shortTitle: cleanText(body.shortTitle, 80) || title.slice(0, 80),
      level: cleanText(body.level, 60) || "Foundational",
      language: cleanText(body.language, 60) || "English",
      creator: cleanText(body.creator, 80) || "LinuZvision",
      outcomes: textList(body.outcomes),
      requirements: textList(body.requirements),
      audience: textList(body.audience),
      about: textList(body.about),
    },
  };
}

function httpsUrl(value: unknown) {
  const text = cleanText(value, 300);
  if (!text) return "";
  try {
    const url = new URL(text);
    return url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}

export function parseSettings(body: Record<string, unknown>): Parsed<SiteSettings> {
  const contactEmail = cleanText(body.contactEmail, 180).toLowerCase();
  if (!validEmail(contactEmail)) return { error: "Saisissez une adresse e-mail de contact valide." };
  const linkedinUrl = httpsUrl(body.linkedinUrl);
  const facebookUrl = httpsUrl(body.facebookUrl);
  if (linkedinUrl === null || facebookUrl === null) return { error: "Les liens des réseaux sociaux doivent être des adresses complètes commençant par https://." };
  const whatsappNumber = cleanText(body.whatsappNumber, 40).replace(/\D/g, "");
  if (whatsappNumber && (whatsappNumber.length < 8 || whatsappNumber.length > 15)) return { error: "Le numéro WhatsApp doit être au format international, chiffres uniquement (8 à 15 chiffres)." };
  const phone = cleanText(body.phone, 40);
  if (phone && !/^[+\d][\d\s().-]{5,}$/.test(phone)) return { error: "Saisissez un numéro de téléphone valide, ou laissez le champ vide." };
  return { input: { contactEmail, phone, address: cleanText(body.address, 200), whatsappNumber, linkedinUrl, facebookUrl } };
}

export const portraitPositions = ["center top", "center 20%", "center 25%", "center 35%", "center center", "center bottom"];

export function parseTeamMember(body: Record<string, unknown>): Parsed<TeamMemberInput> {
  const name = cleanText(body.name, 120);
  const title = cleanText(body.title, 120);
  if (!name || !title) return { error: "Indiquez le nom et la fonction de la personne." };
  const image = cleanText(body.image, 300);
  if (!validMedia(image, "image")) return { error: "Ajoutez une photo." };
  const objectPosition = cleanText(body.objectPosition, 30);
  return {
    input: {
      name, title, image,
      role: cleanText(body.role, 40).toUpperCase() || title.toUpperCase().slice(0, 40),
      description: cleanText(body.description, 400),
      objectPosition: portraitPositions.includes(objectPosition) ? objectPosition : "center center",
      published: body.published === undefined || body.published ? 1 : 0,
    },
  };
}
