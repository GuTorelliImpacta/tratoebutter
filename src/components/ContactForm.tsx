"use client";

import { useState } from "react";
import { business } from "@/content/site";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const r = await fetch("/api/contato", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setState(r.ok ? "ok" : "error");
    } catch {
      setState("error");
    }
  }

  const field = "mt-1 w-full border-2 border-ink bg-white px-3 py-3 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-butter";
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="nome" className="font-bold">Seu nome</label>
        <input id="nome" name="nome" required minLength={2} maxLength={80} autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="mensagem" className="font-bold">Sua mensagem</label>
        <textarea id="mensagem" name="mensagem" required minLength={5} maxLength={800} rows={5} className={field} />
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="site">Não preencha</label>
        <input id="site" name="site" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="text-sm">Ao enviar, você concorda com o uso do seu nome e mensagem para responder o contato, conforme a <a className="underline" href="/privacidade">política de privacidade</a>.</p>
      <button type="submit" disabled={state === "sending"} className="min-h-[48px] bg-ink px-6 font-slab font-bold uppercase text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-butter">
        {state === "sending" ? "Enviando…" : "Enviar"}
      </button>
      <p role="status" aria-live="polite">
        {state === "ok" && "Recebido! Respondemos em breve."}
        {state === "error" && `Não foi possível enviar. Ligue para ${business.phone}.`}
      </p>
    </form>
  );
}
