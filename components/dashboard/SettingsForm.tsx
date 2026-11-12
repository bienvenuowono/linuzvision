"use client";

import { FormEvent, useState } from "react";
import type { SiteSettings } from "@/lib/content";
import { AdminNav } from "./AdminNav";

export function SettingsForm({ initialSettings }: { initialSettings: SiteSettings }) {
  const [settings, setSettings] = useState(initialSettings);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  const set = (patch: Partial<SiteSettings>) => setSettings((current) => ({ ...current, ...patch }));

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      const response = await fetch("/api/admin/settings", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(settings) });
      const data = await response.json();
      if (!response.ok) {
        setMessage(response.status === 401 ? "Votre session a expiré. Reconnectez-vous." : data.error || "Les coordonnées n'ont pas pu être enregistrées.");
        return;
      }
      setSettings(data.settings);
      setMessage("Coordonnées enregistrées. Le site est à jour.");
    } catch {
      setMessage("Le serveur est injoignable. Vérifiez la connexion et réessayez.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="admin-shell">
      <AdminNav active="settings" />
      <section className="admin-editor admin-settings">
        <h1>COORDONNÉES DU SITE</h1>
        <p className="admin-hint">Ces informations apparaissent dans le pied de page, sur la page Contact et dans le bouton WhatsApp.</p>
        <form onSubmit={save}>
          <label><span>E-MAIL DE CONTACT</span><input type="email" value={settings.contactEmail} maxLength={180} required onChange={(event) => set({ contactEmail: event.target.value })} /></label>
          <label><span>NUMÉRO WHATSAPP</span><input inputMode="tel" value={settings.whatsappNumber} maxLength={40} placeholder="Exemple : 14432488520" onChange={(event) => set({ whatsappNumber: event.target.value })} /><small>Format international, chiffres uniquement, sans + ni espaces. Laissez vide pour masquer le bouton WhatsApp.</small></label>
          <label><span>TÉLÉPHONE</span><input inputMode="tel" value={settings.phone} maxLength={40} onChange={(event) => set({ phone: event.target.value })} /><small>Transmis aux moteurs de recherche ; il n&apos;est pas affiché sur les pages.</small></label>
          <label><span>ADRESSE POSTALE</span><input value={settings.address} maxLength={200} onChange={(event) => set({ address: event.target.value })} /></label>
          <label><span>PAGE LINKEDIN</span><input type="url" value={settings.linkedinUrl} maxLength={300} placeholder="https://www.linkedin.com/company/…" onChange={(event) => set({ linkedinUrl: event.target.value })} /><small>Laissez vide pour retirer l&apos;icône du pied de page.</small></label>
          <label><span>PAGE FACEBOOK</span><input type="url" value={settings.facebookUrl} maxLength={300} placeholder="https://facebook.com/…" onChange={(event) => set({ facebookUrl: event.target.value })} /><small>Laissez vide pour retirer l&apos;icône du pied de page.</small></label>
          <button type="submit" disabled={saving}>{saving ? "ENREGISTREMENT…" : "ENREGISTRER LES COORDONNÉES"}</button>
          <p className="admin-status" role="status" aria-live="polite">{message}</p>
        </form>
      </section>
    </main>
  );
}
