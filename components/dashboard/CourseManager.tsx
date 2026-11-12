"use client";

import { FormEvent, useRef, useState } from "react";
import type { Course } from "@/lib/training";
import { AdminNav } from "./AdminNav";
import { MediaField } from "./MediaField";
import { confirmDiscard, requestProblem, showEditor, useUnsavedGuard } from "./useUnsavedGuard";

type ModuleDraft = { key: number; title: string; description: string; duration: string; video: string; thumbnail: string };

type Draft = {
  id: number;
  title: string;
  description: string;
  cover: string;
  level: string;
  language: string;
  slug: string;
  shortTitle: string;
  creator: string;
  outcomes: string;
  requirements: string;
  audience: string;
  about: string;
  published: boolean;
  modules: ModuleDraft[];
};

const lines = (items: string[]) => items.join("\n");
const items = (text: string) => text.split("\n").map((line) => line.trim()).filter(Boolean);

export function CourseManager({ initialCourses }: { initialCourses: Course[] }) {
  const nextKey = useRef(1);
  const [courses, setCourses] = useState(initialCourses);
  const [draft, setDraft] = useState<Draft>(() => emptyDraft());
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploads, setUploads] = useState(0);
  const [dirty, setDirty] = useState(false);
  useUnsavedGuard(dirty || uploads > 0);

  function newModule(): ModuleDraft {
    return { key: nextKey.current++, title: "", description: "", duration: "0:00", video: "", thumbnail: "" };
  }

  function emptyDraft(): Draft {
    return {
      id: 0, title: "", description: "", cover: "", level: "Foundational", language: "American English", slug: "", shortTitle: "",
      creator: "LinuZvision", outcomes: "", requirements: "", audience: "", about: "", published: false, modules: [],
    };
  }

  function toDraft(course: Course): Draft {
    return {
      id: course.id ?? 0,
      title: course.title,
      description: course.description,
      cover: course.cover,
      level: course.level,
      language: course.language,
      slug: course.slug,
      shortTitle: course.shortTitle,
      creator: course.creator,
      outcomes: lines(course.outcomes),
      requirements: lines(course.requirements),
      audience: lines(course.audience),
      about: lines(course.about),
      published: Boolean(course.published),
      modules: course.modules.map((module) => ({
        key: nextKey.current++, title: module.title, description: module.description, duration: module.duration, video: module.video,
        // A picture equal to the cover means "none chosen": keep following the cover.
        thumbnail: module.thumbnail === course.cover ? "" : module.thumbnail,
      })),
    };
  }

  const set = (patch: Partial<Draft>) => {
    setDirty(true);
    setDraft((current) => ({ ...current, ...patch }));
  };
  const setModule = (key: number, patch: Partial<ModuleDraft>) => {
    setDirty(true);
    setDraft((current) => ({ ...current, modules: current.modules.map((module) => (module.key === key ? { ...module, ...patch } : module)) }));
  };
  const trackUpload = (busy: boolean) => setUploads((count) => Math.max(0, count + (busy ? 1 : -1)));

  function moveModule(index: number, offset: number) {
    setDirty(true);
    setDraft((current) => {
      const modules = [...current.modules];
      const target = index + offset;
      if (target < 0 || target >= modules.length) return current;
      [modules[index], modules[target]] = [modules[target], modules[index]];
      return { ...current, modules };
    });
  }

  // Opens a course (or a blank form) in the editor, unless that would silently drop work in progress.
  function open(course?: Course) {
    if (uploads > 0) {
      setMessage("Un fichier est en cours d'envoi. Attendez la fin de l'envoi avant de changer de formation.");
      showEditor("course-editor");
      return;
    }
    if (!confirmDiscard(dirty)) return;
    setDraft(course ? toDraft(course) : emptyDraft());
    setDirty(false);
    setMessage("");
    showEditor("course-editor");
  }

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setMessage("");
    const payload = {
      ...draft,
      outcomes: items(draft.outcomes),
      requirements: items(draft.requirements),
      audience: items(draft.audience),
      about: items(draft.about),
      modules: draft.modules.map(({ key: _key, ...module }) => module),
    };
    try {
      const response = await fetch(draft.id ? `/api/admin/courses/${draft.id}` : "/api/admin/courses", {
        method: draft.id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.course) {
        setMessage(requestProblem(response.status, data.error, "La formation n'a pas pu être enregistrée. Réessayez dans un instant."));
        return;
      }
      const saved = data.course as Course;
      setCourses((current) => (draft.id ? current.map((course) => (course.id === saved.id ? saved : course)) : [...current, saved]));
      setDraft(toDraft(saved));
      setDirty(false);
      setMessage(saved.published ? "Formation enregistrée et en ligne." : "Brouillon enregistré. Il n'est pas visible sur le site.");
    } catch {
      setMessage("Le serveur est injoignable. Vérifiez la connexion et réessayez.");
    } finally {
      setSaving(false);
    }
  }

  async function remove() {
    if (!draft.id || !window.confirm(`Supprimer définitivement « ${draft.title} » et ses vidéos ?`)) return;
    setSaving(true);
    try {
      const response = await fetch(`/api/admin/courses/${draft.id}`, { method: "DELETE" });
      if (!response.ok && response.status !== 404) {
        const data = await response.json().catch(() => ({}));
        setMessage(requestProblem(response.status, data.error, "La formation n'a pas pu être supprimée. Réessayez dans un instant."));
        return;
      }
      setCourses((current) => current.filter((course) => course.id !== draft.id));
      setDraft(emptyDraft());
      setDirty(false);
      setMessage("Formation supprimée.");
    } catch {
      setMessage("Le serveur est injoignable. Vérifiez la connexion et réessayez.");
    } finally {
      setSaving(false);
    }
  }

  const blocked = saving || uploads > 0;

  return (
    <main className="admin-shell">
      <AdminNav active="courses" />
      <div className="admin-workspace">
        <section className="admin-list">
          <div className="admin-section-head">
            <h1>FORMATIONS</h1>
            <button type="button" onClick={() => open()}>NOUVELLE FORMATION</button>
          </div>
          {courses.map((course) => (
            <article key={course.id}>
              <div>
                <span>{course.published ? "EN LIGNE" : "BROUILLON"} · {course.modules.length} MODULE{course.modules.length > 1 ? "S" : ""} · {course.duration.toUpperCase()}</span>
                <h2>{course.title}</h2>
                <p>{course.description}</p>
              </div>
              <button type="button" onClick={() => open(course)} aria-label={`Modifier ${course.title}`}>MODIFIER</button>
            </article>
          ))}
          {courses.length === 0 && <p>Aucune formation pour le moment. Remplissez le formulaire pour créer la première.</p>}
        </section>

        <section className="admin-editor" id="course-editor">
          <h2>{draft.id ? "MODIFIER LA FORMATION" : "NOUVELLE FORMATION"}</h2>
          <form onSubmit={save}>
            <label><span>TITRE</span><input value={draft.title} maxLength={160} required onChange={(event) => set({ title: event.target.value })} /></label>
            <label><span>DESCRIPTION</span><textarea value={draft.description} maxLength={1000} rows={4} required onChange={(event) => set({ description: event.target.value })} /></label>
            <MediaField kind="image" label="IMAGE DE COUVERTURE" hint="Format paysage (16:9) conseillé. PNG, JPG ou WebP, 12 Mo maximum." value={draft.cover} onChange={(cover) => set({ cover })} onBusyChange={trackUpload} />
            <div className="admin-pair">
              <label><span>NIVEAU</span><input value={draft.level} maxLength={60} onChange={(event) => set({ level: event.target.value })} /></label>
              <label><span>LANGUE DU COURS</span><input value={draft.language} maxLength={60} onChange={(event) => set({ language: event.target.value })} /></label>
            </div>

            <fieldset className="admin-modules">
              <legend>MODULES ({draft.modules.length})</legend>
              {draft.modules.map((module, index) => (
                <div className="admin-module" key={module.key}>
                  <div className="admin-module-head">
                    <strong>MODULE {index + 1}</strong>
                    <div>
                      <button type="button" onClick={() => moveModule(index, -1)} disabled={index === 0} aria-label={`Monter le module ${index + 1}`}>MONTER</button>
                      <button type="button" onClick={() => moveModule(index, 1)} disabled={index === draft.modules.length - 1} aria-label={`Descendre le module ${index + 1}`}>DESCENDRE</button>
                      <button type="button" onClick={() => set({ modules: draft.modules.filter((item) => item.key !== module.key) })} aria-label={`Retirer le module ${index + 1}`}>RETIRER</button>
                    </div>
                  </div>
                  <label><span>TITRE DU MODULE</span><input value={module.title} maxLength={160} required onChange={(event) => setModule(module.key, { title: event.target.value })} /></label>
                  <label><span>DESCRIPTION</span><textarea value={module.description} maxLength={600} rows={2} onChange={(event) => setModule(module.key, { description: event.target.value })} /></label>
                  <MediaField
                    kind="video"
                    label="VIDÉO"
                    hint="Fichier MP4, 600 Mo maximum. Les vidéos .mov (iPhone) doivent d'abord être converties en MP4. La durée et l'image du module sont détectées automatiquement."
                    value={module.video}
                    onChange={(video) => setModule(module.key, { video })}
                    onVideoDetails={({ duration, poster }) => setModule(module.key, poster ? { duration, thumbnail: poster } : { duration })}
                    onBusyChange={trackUpload}
                  />
                  <div className="admin-pair">
                    <label><span>DURÉE (MIN:SEC)</span><input value={module.duration} maxLength={6} pattern="\d{1,3}:[0-5]\d" title="Exemple : 6:29" onChange={(event) => setModule(module.key, { duration: event.target.value })} /></label>
                    <MediaField kind="image" label="IMAGE DU MODULE (FACULTATIVE)" value={module.thumbnail} onChange={(thumbnail) => setModule(module.key, { thumbnail })} onBusyChange={trackUpload} />
                  </div>
                </div>
              ))}
              <button type="button" className="admin-secondary" onClick={() => set({ modules: [...draft.modules, newModule()] })}>AJOUTER UN MODULE</button>
            </fieldset>

            <details className="admin-more">
              <summary>PLUS D&apos;OPTIONS (PAGE DU COURS)</summary>
              <label><span>CE QUE L&apos;ON APPREND — UNE LIGNE PAR POINT</span><textarea value={draft.outcomes} rows={4} onChange={(event) => set({ outcomes: event.target.value })} /></label>
              <label><span>PRÉREQUIS — UNE LIGNE PAR POINT</span><textarea value={draft.requirements} rows={2} onChange={(event) => set({ requirements: event.target.value })} /></label>
              <label><span>PUBLIC VISÉ — UNE LIGNE PAR POINT</span><textarea value={draft.audience} rows={4} onChange={(event) => set({ audience: event.target.value })} /></label>
              <label><span>PRÉSENTATION DÉTAILLÉE — UNE LIGNE PAR PARAGRAPHE</span><textarea value={draft.about} rows={4} onChange={(event) => set({ about: event.target.value })} /></label>
              <label><span>TITRE COURT (FIL D&apos;ARIANE)</span><input value={draft.shortTitle} maxLength={80} placeholder="Repris du titre si vide" onChange={(event) => set({ shortTitle: event.target.value })} /></label>
              <label><span>AUTEUR AFFICHÉ</span><input value={draft.creator} maxLength={80} onChange={(event) => set({ creator: event.target.value })} /></label>
              <label><span>ADRESSE WEB DU COURS</span><input value={draft.slug} maxLength={120} placeholder="Créée à partir du titre si vide" onChange={(event) => set({ slug: event.target.value })} /></label>
            </details>

            <label className="admin-check"><input type="checkbox" checked={draft.published} onChange={(event) => set({ published: event.target.checked })} /><span>METTRE EN LIGNE SUR LE SITE</span></label>
            <button type="submit" disabled={blocked}>{uploads > 0 ? "ENVOI DE FICHIER EN COURS…" : saving ? "ENREGISTREMENT…" : "ENREGISTRER LA FORMATION"}</button>
            {dirty && !blocked && <p className="admin-hint">Modifications non enregistrées.</p>}
            {draft.id > 0 && draft.published && <a className="admin-view" href={`/training/${draft.slug}`} target="_blank" rel="noopener noreferrer">VOIR LA PAGE DU COURS</a>}
            {draft.id > 0 && <button className="admin-delete" type="button" onClick={remove} disabled={blocked}>SUPPRIMER LA FORMATION</button>}
            <p className="admin-status" role="status" aria-live="polite">{message}</p>
          </form>
        </section>
      </div>
    </main>
  );
}
