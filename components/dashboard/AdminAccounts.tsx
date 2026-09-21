"use client";

import { FormEvent, useState } from "react";
import type { AdminAccount } from "@/lib/db";

export function AdminAccounts({ initialAccounts, currentAdminId }: { initialAccounts: AdminAccount[]; currentAdminId: number }) {
  const [accounts, setAccounts] = useState(initialAccounts);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  async function createAccount(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/admin/accounts", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await response.json();
      if (!response.ok) { setMessage(data.error || "Unable to create the account."); return; }
      setAccounts((current) => [...current, data.account]);
      form.reset();
      setMessage("Administrator account created.");
    } catch { setMessage("The server could not be reached. Try again."); }
    finally { setBusy(false); }
  }

  async function removeAccount(id: number) {
    if (!window.confirm("Remove this administrator account?")) return;
    setDeletingId(id);
    setMessage("");
    try {
      const response = await fetch(`/api/admin/accounts/${id}`, { method: "DELETE" });
      const data = await response.json();
      if (!response.ok) { setMessage(data.error || "Unable to remove the account."); return; }
      setAccounts((current) => current.filter((account) => account.id !== id));
      setMessage("Administrator account removed.");
    } catch { setMessage("The server could not be reached. Try again."); }
    finally { setDeletingId(null); }
  }

  return <aside className="admin-accounts" aria-labelledby="admin-accounts-title">
    <div className="admin-accounts-list">
      <h2 id="admin-accounts-title">ADMINISTRATOR ACCOUNTS</h2>
      {accounts.map((account) => <article key={account.id}>
        <div><strong>{account.displayName}</strong><span>{account.email}</span></div>
        <button type="button" disabled={deletingId !== null || account.id === currentAdminId || accounts.length === 1} onClick={() => removeAccount(account.id)}>{account.id === currentAdminId ? "CURRENT" : deletingId === account.id ? "REMOVING…" : "REMOVE"}</button>
      </article>)}
    </div>
    <div className="admin-account-create">
      <h2>CREATE AN ACCOUNT</h2>
      <p>Passwords are hashed before storage and are never displayed again.</p>
      <form onSubmit={createAccount}>
        <label><span>DISPLAY NAME</span><input name="displayName" maxLength={120} autoComplete="name" required/></label>
        <label><span>EMAIL</span><input name="email" type="email" maxLength={180} autoComplete="email" required/></label>
        <label><span>PASSWORD</span><input name="password" type="password" minLength={12} maxLength={128} autoComplete="new-password" required/></label>
        <button type="submit" disabled={busy}>{busy ? "CREATING…" : "CREATE ADMINISTRATOR"}</button>
        <p role="status" aria-live="polite">{message}</p>
      </form>
    </div>
  </aside>;
}
