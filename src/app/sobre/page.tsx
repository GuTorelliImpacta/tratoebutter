import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { award, business, fullAddress } from "@/content/site";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a Trato & Butter, hamburgueria premiada em Tremembé, zona norte de São Paulo.",
  alternates: { canonical: "/sobre" },
};

export default function Sobre() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2">
      <div>
        <h1 className="t-hero">Sobre a casa</h1>
        <p className="mt-6 text-lg">
          A Trato &amp; Butter fica na {fullAddress}. Hambúrguer, carnes e petiscos feitos para quem leva comida a sério e conta não.
        </p>
        <p className="mt-4 text-lg">Em 2026, a casa entrou no {award}. No Google, são {business.rating.value} ★ em {business.rating.count} avaliações.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={business.ifood}>Pedir no iFood</Button>
          <Button href="/contato" variant="ghost-dark">Como chegar</Button>
        </div>
      </div>
      <Image src="/img/carne-fatiada.webp" alt="Fatias de carne selada, rosada no centro, sobre tábua escura" width={768} height={1045} sizes="(min-width: 768px) 40vw, 100vw" className="mx-auto max-h-[600px] w-auto object-cover" />
    </section>
  );
}
