"use client";

import { useState } from "react";

export default function ReservationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      date: String(formData.get("date") || ""),
      time: String(formData.get("time") || ""),
      party_size: Number(formData.get("party_size") || 0),
      allergies: String(formData.get("allergies") || ""),
      notes: String(formData.get("notes") || ""),
    };

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Erreur inconnue");
      }

      setStatus("success");
      setMessage("Réservation envoyée avec succès.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Impossible d'envoyer la réservation.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-4 rounded-[28px] border border-neutral-200 bg-[#fbf6f3] p-6 lg:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-neutral-800">
          Nom
          <input name="name" required className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none ring-0 focus:border-terracotta-500" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-neutral-800">
          Email
          <input name="email" type="email" className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none ring-0 focus:border-terracotta-500" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-neutral-800">
          Téléphone
          <input name="phone" type="tel" className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none ring-0 focus:border-terracotta-500" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-neutral-800">
          Nombre de personnes
          <input name="party_size" type="number" min="1" defaultValue="2" required className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none ring-0 focus:border-terracotta-500" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-neutral-800">
          Date
          <input name="date" type="date" required className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none ring-0 focus:border-terracotta-500" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-neutral-800">
          Heure
          <input name="time" type="time" required className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none ring-0 focus:border-terracotta-500" />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium text-neutral-800">
        Allergies
        <input name="allergies" placeholder="Ex: fruits à coque, gluten..." className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none ring-0 focus:border-terracotta-500" />
      </label>

      <label className="grid gap-2 text-sm font-medium text-neutral-800">
        Notes
        <textarea name="notes" rows={4} placeholder="Anniversaire, table au calme, etc." className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none ring-0 focus:border-terracotta-500" />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={status === "loading"} className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-terracotta-800 disabled:opacity-60">
          {status === "loading" ? "Envoi..." : "Envoyer la réservation"}
        </button>
        {message ? (
          <p className={`text-sm ${status === "success" ? "text-emerald-700" : "text-rose-700"}`}>{message}</p>
        ) : null}
      </div>
    </form>
  );
}
