"use client";

import { FormEvent, useState } from "react";
import type { TeamMember } from "@/lib/content";
import { AdminNav } from "./AdminNav";
import { MediaField } from "./MediaField";
import { confirmDiscard, requestProblem, showEditor, useUnsavedGuard } from "./useUnsavedGuard";

const framings = [
  ["center top", "Haut de la photo"],
  ["center 20%", "Visage en haut"],
  ["center 35%", "Visage un peu plus bas"],
  ["center center", "Centre de la photo"],
  ["center bottom", "Bas de la photo"],
];

const empty: TeamMember = { id: 0, name: "", role: "", title: "", description: "", image: "", objectPosition: "center center", published: 1 };

export function TeamManager({ initialTeam }: { initialTeam: TeamMember[] }) {
  const [team, setTeam] = useState(initialTeam);
  const [draft, setDraft] = useState<TeamMember>(empty);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [dirty, setDirty] = useState(false);
  useUnsavedGuard(dirty || uploading);

  const set = (patch: Partial<TeamMember>) => {
    setDirty(true);
    setDraft((current) => ({ ...current, ...patch }));
  };

  // Opens a person (or a blank form) in the editor, unless that would silently drop work in progress.
  function open(member?: TeamMember) {
    if (uploading) {
      setMessage("La photo est en cours d'envoi. Attendez la fin de l'envoi avant de changer de fiche.");
      showEditor("team-editor");
      return;
    }
    if (!confirmDiscard(dirty)) return;
    setDraft(member ?? empty);
    setDirty(false);
    setMessage("");
    showEditor("team-editor");
  }
  const offline = "Le serveur est injoignable. Vérifiez la connexion et réessayez.";

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      const response = await fetch(draft.id ? `/api/admin/team/${draft.id}` : "/api/admin/team", {
        method: draft.id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(draft),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.member) {
        setMessage(requestProblem(response.status, data.error, "La fiche n'a pas pu être enregistrée. Réessayez dans un instant."));
        return;
      }
      const saved = data.member as TeamMember;
      setTeam((current) => (draft.id ? current.map((member) => (member.id === saved.id ? saved : member)) : [...current, saved]));
      setDraft(empty);
      setDirty(false);
      setMessage("Fiche enregistrée. Le site est à jour.");
    } catch {
      setMessage(offline);
    } finally {
      setSaving(false);
    }
  }

  async function remove() {
    if (!draft.id || !window.confirm(`Retirer ${draft.name} de l'équipe ?`)) return;
    setSaving(true);
    try {
      const response = await fetch(`/api/admin/team/${draft.id}`, { method: "DELETE" });
      if (!response.ok && response.status !== 404) {
        const data = await response.json().catch(() => ({}));
        setMessage(requestProblem(response.status, data.error, "La fiche n'a pas pu être supprimée. Réessayez dans un instant."));
        return;
      }
      setTeam((current) => current.filter((member) => member.id !== draft.id));
      setDraft(empty);
      setDirty(false);
      setMessage("Fiche supprimée.");
    } catch {
      setMessage(offline);
    } finally {
      setSaving(false);
    }
  }

  async function move(index: number, offset: number) {
    const target = index + offset;
    if (target < 0 || target >= team.length) return;
    const previous = team;
    const next = [...team];
    [next[index], next[target]] = [next[target], next[index]];
    setTeam(next);
    try {
      const response = await fetch("/api/admin/team", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ids: next.map((member) => member.id) }) });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        setTeam(previous);
        setMessage(requestProblem(response.status, data.error, "L'ordre n'a pas pu être enregistré. Réessayez dans un instant."));
        return;
      }
      setMessage("Ordre enregistré.");
    } catch {
      setTeam(previous);
      setMessage(offline);
    }
  }

  return (
    <main className="admin-shell">
      <AdminNav active="team" />
      <div className="admin-workspace">
        <section className="admin-list admin-team-list">
          <div className="admin-section-head">
            <h1>ÉQUIPE</h1>
            <button type="button" onClick={() => open()}>NOUVELLE PERSONNE</button>
          </div>
          {team.map((member, index) => (
            <article key={member.id}>
              <img src={member.image} alt="" style={{ objectPosition: member.objectPosition }} />
              <div>
                <span>{member.published ? "VISIBLE" : "MASQUÉ"} · {member.role}</span>
                <h2>{member.name}</h2>
                <p>{member.title}</p>
              </div>
              <div className="admin-row-actions">
                <button type="button" onClick={() => move(index, -1)} disabled={index === 0} aria-label={`Monter ${member.name}`}>MONTER</button>
                <button type="button" onClick={() => move(index, 1)} disabled={index === team.length - 1} aria-label={`Descendre ${member.name}`}>DESCENDRE</button>
                <button type="button" onClick={() => open(member)} aria-label={`Modifier ${member.name}`}>MODIFIER</button>
              </div>
            </article>
          ))}
          {team.length === 0 && <p>Aucune personne affichée. La galerie de l&apos;équipe est masquée sur le site.</p>}
        </section>

        <section className="admin-editor" id="team-editor">
          <h2>{draft.id ? "MODIFIER LA FICHE" : "NOUVELLE PERSONNE"}</h2>
          <form onSubmit={save}>
            <label><span>NOM COMPLET</span><input value={draft.name} maxLength={120} required onChange={(event) => set({ name: event.target.value })} /></label>
            <label><span>FONCTION</span><input value={draft.title} maxLength={120} required placeholder="Exemple : Chief Technology Officer" onChange={(event) => set({ title: event.target.value })} /></label>
            <label><span>ÉTIQUETTE COURTE</span><input value={draft.role} maxLength={40} placeholder="Exemple : CTO" onChange={(event) => set({ role: event.target.value })} /></label>
            <label><span>DESCRIPTION</span><textarea value={draft.description} maxLength={400} rows={4} onChange={(event) => set({ description: event.target.value })} /></label>
            <MediaField kind="image" label="PHOTO" hint="Portrait net, PNG, JPG ou WebP, 12 Mo maximum." value={draft.image} onChange={(image) => set({ image })} onBusyChange={setUploading} />
            <label><span>CADRAGE DE LA PHOTO</span>
              <select value={draft.objectPosition} onChange={(event) => set({ objectPosition: event.target.value })}>
                {!framings.some(([value]) => value === draft.objectPosition) && <option value={draft.objectPosition}>Cadrage actuel</option>}
                {framings.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
              </select>
            </label>
            <label className="admin-check"><input type="checkbox" checked={Boolean(draft.published)} onChange={(event) => set({ published: event.target.checked ? 1 : 0 })} /><span>AFFICHER SUR LE SITE</span></label>
            <button type="submit" disabled={saving || uploading}>{uploading ? "ENVOI DE LA PHOTO…" : saving ? "ENREGISTREMENT…" : "ENREGISTRER"}</button>
            {draft.id > 0 && <button className="admin-delete" type="button" onClick={remove} disabled={saving || uploading}>SUPPRIMER LA FICHE</button>}
            <p className="admin-status" role="status" aria-live="polite">{message}</p>
          </form>
        </section>
      </div>
    </main>
  );
}
