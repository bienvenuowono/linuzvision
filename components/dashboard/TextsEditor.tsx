"use client";

import { useMemo, useState } from "react";
import { defaultTexts, textPages, TEXT_MAX_LENGTH, type TextId, type TextOverrides, type TextPageKey } from "@/lib/page-texts";
import type { TextField } from "@/lib/page-texts/define";
import { AdminNav } from "./AdminNav";
import { requestProblem, useUnsavedGuard } from "./useUnsavedGuard";

type Field = { id: TextId; group: string; label: string };

const pageKeys = Object.keys(textPages) as TextPageKey[];

const fieldsByPage = Object.fromEntries(
  pageKeys.map((page) => [
    page,
    Object.entries(textPages[page].texts as Record<string, TextField>).map(([key, [group, label]]) => ({ id: `${page}.${key}` as TextId, group, label })),
  ]),
) as Record<TextPageKey, Field[]>;

// Ignores accents, case and punctuation, so "securite" finds "Sécurité" and "zero trust" finds "ZERO-TRUST".
function fold(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function rowsFor(value: string) {
  const lines = value.split("\n").reduce((total, line) => total + Math.max(1, Math.ceil(line.length / 70)), 0);
  return Math.min(10, Math.max(1, lines));
}

export function TextsEditor({ initialOverrides }: { initialOverrides: TextOverrides }) {
  const [saved, setSaved] = useState<TextOverrides>(initialOverrides);
  const [draft, setDraft] = useState<TextOverrides>({});
  const [page, setPage] = useState<TextPageKey>("home");
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  const savedValue = (id: TextId) => saved[id] ?? defaultTexts[id];
  const currentValue = (id: TextId) => draft[id] ?? savedValue(id);
  const pending = (Object.keys(draft) as TextId[]).filter((id) => draft[id] !== savedValue(id));
  useUnsavedGuard(pending.length > 0);

  const editedCount = (key: TextPageKey) => fieldsByPage[key].filter((field) => currentValue(field.id) !== defaultTexts[field.id]).length;

  const visible = useMemo(() => {
    const needle = fold(query.trim());
    if (!needle) return [{ page, fields: fieldsByPage[page] }];
    return pageKeys
      .map((key) => ({
        page: key,
        // Matches the saved and original wording, never the draft: a field being rewritten must not
        // vanish from the results (and lose focus) once it no longer contains the searched word.
        fields: fieldsByPage[key].filter((field) => field.id in draft || fold(`${field.group} ${field.label} ${saved[field.id] ?? ""} ${defaultTexts[field.id]}`).includes(needle)),
      }))
      .filter((entry) => entry.fields.length > 0);
  }, [query, page, draft, saved]);

  function change(id: TextId, value: string) {
    setMessage("");
    setDraft((current) => ({ ...current, [id]: value }));
  }

  async function save() {
    if (!pending.length) return;
    setSaving(true);
    setMessage("");
    // An empty field, or the original wording, restores the original text.
    const changes = Object.fromEntries(pending.map((id) => {
      const value = (draft[id] ?? "").trim();
      return [id, value === "" || value === defaultTexts[id] ? null : draft[id]];
    }));
    try {
      const response = await fetch("/api/admin/texts", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ changes }) });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.texts) {
        setMessage(requestProblem(response.status, data.error, "Les textes n'ont pas pu être enregistrés. Réessayez dans un instant."));
        return;
      }
      setSaved(data.texts);
      setDraft({});
      setMessage(`${pending.length} texte${pending.length > 1 ? "s" : ""} enregistré${pending.length > 1 ? "s" : ""}. Le site est à jour.`);
    } catch {
      setMessage("Le serveur est injoignable. Vérifiez la connexion et réessayez.");
    } finally {
      setSaving(false);
    }
  }

  function cancel() {
    if (!window.confirm("Annuler toutes les modifications non enregistrées ?")) return;
    setDraft({});
    setMessage("");
  }

  return (
    <main className="admin-shell admin-texts">
      <AdminNav active="texts" />
      <section className="admin-texts-intro">
        <h1>TEXTES DES PAGES</h1>
        <p className="admin-hint">Le site public est rédigé en anglais : écrivez vos textes en anglais, la traduction française du site reste automatique. Un retour à la ligne dans un titre crée une nouvelle ligne sur la page ; dans les grands titres, gardez des mots courts, car un mot très long peut dépasser sur téléphone. Videz un champ pour revenir au texte d&apos;origine.</p>
        <label className="admin-texts-search">
          <span>RECHERCHER UN TEXTE SUR TOUT LE SITE</span>
          <input type="search" value={query} placeholder="Tapez un mot vu sur le site, par exemple : security" onChange={(event) => setQuery(event.target.value)} />
        </label>
        {!query.trim() && (
          <nav className="admin-texts-pages" aria-label="Pages du site">
            {pageKeys.map((key) => (
              <button key={key} type="button" aria-pressed={key === page} onClick={() => setPage(key)}>
                {textPages[key].name.toUpperCase()}
                {editedCount(key) > 0 && <span> · {editedCount(key)} modifié{editedCount(key) > 1 ? "s" : ""}</span>}
              </button>
            ))}
          </nav>
        )}
      </section>

      <div className="admin-texts-list">
        {visible.length === 0 && <p className="admin-texts-empty">Aucun texte ne contient « {query.trim()} ».</p>}
        {visible.map((entry) => {
          const groups = [...new Set(entry.fields.map((field) => field.group))];
          return (
            <section key={entry.page} aria-labelledby={`texts-${entry.page}`}>
              <header className="admin-texts-page-head">
                <h2 id={`texts-${entry.page}`}>{textPages[entry.page].name.toUpperCase()}</h2>
                <a href={textPages[entry.page].path} target="_blank" rel="noopener noreferrer">VOIR LA PAGE</a>
              </header>
              {groups.map((group) => (
                <fieldset key={group} className="admin-texts-group">
                  <legend>{group.toUpperCase()}</legend>
                  {entry.fields.filter((field) => field.group === group).map((field) => {
                    const value = currentValue(field.id);
                    const changed = value !== defaultTexts[field.id];
                    const unsaved = field.id in draft && value !== savedValue(field.id);
                    const inputId = `text-${field.id}`;
                    return (
                      <div key={field.id} className={unsaved ? "admin-text-field is-unsaved" : "admin-text-field"}>
                        <div className="admin-text-field-head">
                          <label htmlFor={inputId}>{field.label}</label>
                          {unsaved ? <span>NON ENREGISTRÉ</span> : changed ? <span>MODIFIÉ</span> : null}
                        </div>
                        <textarea id={inputId} value={value} rows={rowsFor(value)} maxLength={TEXT_MAX_LENGTH} onChange={(event) => change(field.id, event.target.value)} />
                        {changed && (
                          <div className="admin-text-original">
                            <p><span>Texte d&apos;origine :</span> {defaultTexts[field.id]}</p>
                            <button type="button" onClick={() => change(field.id, defaultTexts[field.id])}>RÉTABLIR L&apos;ORIGINAL</button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </fieldset>
              ))}
            </section>
          );
        })}
      </div>

      <div className="admin-texts-bar" role="region" aria-label="Enregistrement des textes">
        <p role="status" aria-live="polite">{message || (pending.length ? `${pending.length} modification${pending.length > 1 ? "s" : ""} non enregistrée${pending.length > 1 ? "s" : ""}.` : "Aucune modification en cours.")}</p>
        <div>
          <button type="button" className="admin-texts-cancel" onClick={cancel} disabled={saving || pending.length === 0}>ANNULER</button>
          <button type="button" onClick={save} disabled={saving || pending.length === 0}>{saving ? "ENREGISTREMENT…" : "ENREGISTRER LES TEXTES"}</button>
        </div>
      </div>
    </main>
  );
}
