import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { business, highlights, SITE_URL } from "@/content/site";

export const metadata: Metadata = {
  title: "Cardápio",
  description: "Veja os pratos da Trato & Butter, hamburgueria em Tremembé, e peça no iFood.",
  alternates: { canonical: "/cardapio" },
};

// Categorias com itens e preços reais entram aqui; enquanto vazio, a seção fica oculta.
const categories: { name: string; items: { name: string; description: string; price: string }[] }[] = [];

export default function Cardapio() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Cardápio", item: `${SITE_URL}/cardapio` },
      ] }} />
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="t-hero">Cardápio</h1>
          <p className="mt-4 max-w-xl text-lg">Cardápio completo e preços atualizados no iFood. Faixa de preço: {business.priceRange}, segundo o Google.</p>
          <div className="mt-6"><Button href={business.ifood}>Ver cardápio completo no iFood</Button></div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="t-h2">Alguns pratos da casa</h2>
        <ul className="mt-8 grid gap-8 md:grid-cols-3">
          {highlights.map((h) => (
            <li key={h.title}>
              <Image src={h.img} alt={h.alt} width={800} height={800} sizes="(min-width: 768px) 30vw, 100vw" className="aspect-square w-full object-cover" />
              <h3 className="mt-3 font-slab text-2xl font-bold">{h.title}</h3>
              <p>{h.text}</p>
            </li>
          ))}
        </ul>
      </section>
      {categories.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-14">
          {categories.map((c) => (
            <div key={c.name} className="mt-8">
              <h2 className="t-h2">{c.name}</h2>
              <ul>{c.items.map((i) => (<li key={i.name} className="border-b border-dashed border-ink/30 py-3"><strong>{i.name}</strong> — {i.description} <span className="font-bold text-toast">{i.price}</span></li>))}</ul>
            </div>
          ))}
        </section>
      )}
    </>
  );
}
