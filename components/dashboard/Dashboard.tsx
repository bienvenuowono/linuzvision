"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import type { Insight } from "@/lib/db";
import { AdminNav } from "./AdminNav";
import { MediaField } from "./MediaField";
import { confirmDiscard, requestProblem, showEditor, useUnsavedGuard } from "./useUnsavedGuard";

const empty: Insight = {
  id: 0, title: "", slug: "", excerpt: "", content: "", category: "Artificial Intelligence", image: "/images/ai-security-matrix.png",
  published: 0, publishedAt: new Date().toISOString().slice(0, 10), createdAt: "", updatedAt: "",
};

export function Dashboard({ initialInsights, initialInquiries }: { initialInsights: Insight[]; initialInquiries: Array<Record<string, unknown>> }) {
  const router = useRouter();
  const [items, setItems] = useState(initialInsights);
  const [editing, setEditing] = useState<Insight>(empty);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [dirty, setDirty] = useState(false);
  useUnsavedGuard(dirty || uploading);

  const change = (patch: Partial<Insight>) => {
    setDirty(true);
    setEditing((current) => ({ ...current, ...patch }));
  };

  function open(item?: Insight) {
    if (uploading) {
      setMessage("L'image est en cours d'envoi. Attendez la fin de l'envoi avant de changer de publication.");
      showEditor("insight-editor");
      return;
    }
    if (!confirmDiscard(dirty)) return;
    setEditing(item ? { ...item, publishedAt: item.publishedAt.slice(0, 10) } : empty);
    setDirty(false);
    setMessage("");
    showEditor("insight-editor");
  }

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    let response: Response;
    let data: { error?: string; insight?: Insight };
    try {
      response = await fetch(editing.id ? `/api/insights/${editing.id}` : "/api/insights", {
        method: editing.id ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editing),
      });
      data = await response.json().catch(() => ({}));
    } catch {
      setMessage("Le serveur est injoignable. Vérifiez la connexion et réessayez.");
      return;
    } finally {
      setBusy(false);
    }
    const saved = data.insight;
    if (!response.ok || !saved) {
      setMessage(requestProblem(response.status, data.error, "La publication n'a pas pu être enregistrée. Réessayez dans un instant."));
      return;
    }
    setItems((current) => (editing.id ? current.map((item) => (item.id === editing.id ? saved : item)) : [saved, ...current]));
    setEditing(empty);
    setDirty(false);
    setMessage("Publication enregistrée.");
    router.refresh();
  }

  async function remove(id: number) {
    if (!window.confirm("Supprimer cette publication ?")) return;
    const response = await fetch(`/api/insights/${id}`, { method: "DELETE" }).catch(() => null);
    if (response?.ok || response?.status === 404) {
      setItems((current) => current.filter((item) => item.id !== id));
      setEditing(empty);
      setDirty(false);
      setMessage("Publication supprimée.");
    } else {
      setMessage(response ? requestProblem(response.status, null, "La publication n'a pas pu être supprimée. Réessayez dans un instant.") : "Le serveur est injoignable. Vérifiez la connexion et réessayez.");
    }
  }

  return (
    <main className="admin-shell">
      <AdminNav active="insights" />
      <section className="admin-summary">
        <div><strong>{items.length}</strong><span>PUBLICATIONS</span></div>
        <div><strong>{items.filter((item) => item.published).length}</strong><span>EN LIGNE</span></div>
        <div><strong>{initialInquiries.length}</strong><span>DEMANDES DE CONTACT</span></div>
      </section>
      <div className="admin-workspace">
        <section className="admin-list">
          <div className="admin-section-head">
            <h1>PUBLICATIONS</h1>
            <button type="button" onClick={() => open()}>NOUVELLE PUBLICATION</button>
          </div>
          {items.map((item) => (
            <article key={item.id}>
              <div>
                <span>{item.category} · {item.published ? "EN LIGNE" : "BROUILLON"}</span>
                <h2>{item.title}</h2>
                <p>{item.excerpt}</p>
              </div>
              <button type="button" onClick={() => open(item)} aria-label={`Modifier ${item.title}`}>MODIFIER</button>
            </article>
          ))}
          {items.length === 0 && <p>Aucune publication pour le moment.</p>}
        </section>
        <section className="admin-editor" id="insight-editor">
          <h2>{editing.id ? "MODIFIER LA PUBLICATION" : "NOUVELLE PUBLICATION"}</h2>
          <form onSubmit={save}>
            <label><span>TITRE</span><input value={editing.title} maxLength={160} required onChange={(event) => change({ title: event.target.value })} /></label>
            <label><span>CATÉGORIE</span><input value={editing.category} maxLength={80} onChange={(event) => change({ category: event.target.value })} /></label>
            <label><span>RÉSUMÉ</span><textarea value={editing.excerpt} maxLength={500} rows={4} required onChange={(event) => change({ excerpt: event.target.value })} /></label>
            <label><span>CONTENU — UNE LIGNE VIDE ENTRE DEUX PARAGRAPHES</span><textarea value={editing.content} maxLength={20000} rows={10} required onChange={(event) => change({ content: event.target.value })} /></label>
            <label><span>DATE DE PUBLICATION</span><input type="date" value={editing.publishedAt.slice(0, 10)} required onChange={(event) => change({ publishedAt: event.target.value })} /></label>
            <MediaField kind="image" label="IMAGE DE L'ARTICLE" hint="Format paysage conseillé. PNG, JPG ou WebP, 12 Mo maximum." value={editing.image} onChange={(image) => change({ image })} onBusyChange={setUploading} />
            <details className="admin-more">
              <summary>PLUS D&apos;OPTIONS</summary>
              <label><span>ADRESSE WEB DE L&apos;ARTICLE</span><input value={editing.slug} maxLength={120} placeholder="Créée à partir du titre si vide" onChange={(event) => change({ slug: event.target.value })} /></label>
            </details>
            <label className="admin-check"><input type="checkbox" checked={Boolean(editing.published)} onChange={(event) => change({ published: event.target.checked ? 1 : 0 })} /><span>METTRE EN LIGNE SUR LE SITE</span></label>
            <button type="submit" disabled={busy || uploading}>{uploading ? "ENVOI DE L'IMAGE…" : busy ? "ENREGISTREMENT…" : "ENREGISTRER LA PUBLICATION"}</button>
            {editing.id > 0 && <button className="admin-delete" type="button" onClick={() => remove(editing.id)} disabled={busy || uploading}>SUPPRIMER</button>}
            <p className="admin-status" role="status" aria-live="polite">{message}</p>
          </form>
        </section>
      </div>
      <section className="admin-inquiries">
        <h2>DEMANDES DE CONTACT</h2>
        {initialInquiries.length === 0 ? <p>Aucune demande pour le moment.</p> : initialInquiries.map((item, index) => (
          <article key={String(item.id ?? index)}>
            <strong>{String(item.subject)}</strong>
            <span>{String(item.fullName)} · {String(item.email)}</span>
            <p>{String(item.message)}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
