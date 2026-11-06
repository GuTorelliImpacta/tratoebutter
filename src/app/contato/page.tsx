import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import { JsonLd } from "@/components/JsonLd";
import { MapEmbed } from "@/components/MapEmbed";
import { faqs, SITE_URL } from "@/content/site";

export const metadata: Metadata = {
  title: "Onde estamos e horários",
  description: "Endereço, horários, telefone e mapa da Trato & Butter, hamburgueria em Tremembé, zona norte de São Paulo.",
  alternates: { canonical: "/contato" },
};

export default function Contato() {
  const formOn = process.env.NEXT_PUBLIC_CONTACT_FORM === "1";
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Onde estamos", item: `${SITE_URL}/contato` },
      ] }} />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="t-hero">Onde estamos</h1>
        <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
          <MapEmbed />
          <ContactInfo />
        </div>
      </section>
      {formOn && (
        <section className="mx-auto max-w-2xl px-4 pb-14">
          <h2 className="t-h2">Fale com a gente</h2>
          <div className="mt-6"><ContactForm /></div>
        </section>
      )}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="t-h2">Perguntas frequentes</h2>
          <dl className="mt-6">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-dashed border-paper/30 py-4">
                <dt className="font-slab text-xl font-bold text-butter">{f.q}</dt>
                <dd className="mt-1">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
