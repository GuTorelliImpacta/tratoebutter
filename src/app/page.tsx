import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ContactInfo } from "@/components/ContactInfo";
import { Drop } from "@/components/Drop";
import { JsonLd } from "@/components/JsonLd";
import { MapEmbed } from "@/components/MapEmbed";
import { award, business, fullAddress, highlights, hours, SITE_URL } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: "Trato & Butter | Hamburgueria em Tremembé, zona norte SP" },
  alternates: { canonical: "/" },
};

const dayMap = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const order = [1, 2, 3, 4, 5, 6, 0];

const ld = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: business.name,
  url: SITE_URL,
  image: `${SITE_URL}/img/og.jpg`,
  logo: `${SITE_URL}/img/logo.png`,
  telephone: "+551129961767",
  servesCuisine: "Hambúrguer",
  priceRange: "R$40–80",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: business.district + ", " + business.city,
    addressRegion: business.state,
    postalCode: business.zip,
    addressCountry: "BR",
  },
  openingHoursSpecification: hours.flatMap((h, i) =>
    h.turns.map((t) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: dayMap[order[i]], opens: t.open, closes: t.close })),
  ),
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: business.rating.count },
  sameAs: [business.instagram, business.ifood],
};

export default function Home() {
  return (
    <>
      <JsonLd data={ld} />
      <section className="relative overflow-hidden bg-ink text-paper">
        <span aria-hidden="true" className="pointer-events-none absolute -right-6 -top-10 select-none font-slab text-[22rem] font-bold leading-none text-paper/[0.06] md:text-[34rem]">&amp;</span>
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-[1.2fr_1fr] md:py-20">
          <div>
            <p className="mb-4 flex items-center gap-2 font-slab text-sm font-bold uppercase tracking-[0.2em] text-butter">
              <Drop className="drop-anim h-5 w-4" /> Tremembé · Zona Norte de SP
            </p>
            <h1 className="t-hero">Hambúrguer de bairro. Padrão de ranking.</h1>
            <p className="mt-5 max-w-xl text-lg text-paper/90">
              Trato &amp; Butter. {award}. Peça no iFood ou venha ao salão.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={business.ifood}>Pedir no iFood</Button>
              <Button href="/contato" variant="ghost">Como chegar</Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm md:max-w-none">
            <div className="aspect-square overflow-hidden rounded-full border-4 border-butter">
              <Image
                src="/img/burger-bacon.webp"
                alt="Hambúrguer com queijo derretido, bacon e molho escuro sobre pão tostado"
                width={1206}
                height={930}
                priority
                sizes="(min-width: 768px) 40vw, 80vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Prêmio" className="bg-butter text-ink">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
          <p className="font-slab text-lg font-bold uppercase tracking-wide">{award}</p>
          <p className="text-sm font-medium">
            {business.rating.value} ★ no Google · {business.rating.count} avaliações · {business.priceRange}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="t-h2">O que sai da chapa</h2>
        <p className="mt-3 max-w-xl">Fotos reais da casa. Cardápio completo e preços atualizados no iFood.</p>
        <div className="mt-10 grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <figure>
            <Image src={highlights[0].img} alt={highlights[0].alt} width={1206} height={930} sizes="(min-width: 768px) 55vw, 100vw" className="w-full object-cover" />
            <figcaption className="mt-3"><strong className="font-slab text-xl">{highlights[0].title}.</strong> {highlights[0].text}</figcaption>
          </figure>
          <div className="grid gap-8">
            {highlights.slice(1).map((h) => (
              <figure key={h.title}>
                <Image src={h.img} alt={h.alt} width={800} height={600} sizes="(min-width: 768px) 35vw, 100vw" className="aspect-[4/3] w-full object-cover" />
                <figcaption className="mt-3"><strong className="font-slab text-xl">{h.title}.</strong> {h.text}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="mt-8"><Button href="/cardapio" variant="ghost-dark">Ver cardápio</Button></div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="t-h2">Combinado é combinado</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="ticket p-6">
              <h3 className="font-slab text-2xl font-bold text-butter">Em casa</h3>
              <p className="mt-2">Peça pelo iFood e receba onde estiver.</p>
              <div className="mt-5"><Button href={business.ifood}>Pedir no iFood</Button></div>
            </div>
            <div className="ticket p-6">
              <h3 className="font-slab text-2xl font-bold text-butter">No salão</h3>
              <p className="mt-2">É só chegar. Dúvida? Ligue {business.phone}.</p>
              <div className="mt-5"><Button href={business.phoneHref} variant="ghost">Ligar agora</Button></div>
            </div>
          </div>
        </div>
      </section>

      <section id="onde-estamos" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="t-h2">Onde estamos</h2>
        <p className="mt-3">{fullAddress}</p>
        <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
          <MapEmbed />
          <ContactInfo />
        </div>
      </section>

      <section className="border-t-2 border-dashed border-ink/30">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-10">
          <p className="font-slab text-2xl font-bold">Bastidores e novidades no Instagram.</p>
          <Button href={business.instagram} variant="ghost-dark">Seguir {business.instagramHandle}</Button>
        </div>
        <p className="mx-auto max-w-6xl px-4 pb-8 text-sm">
          Quer saber mais sobre a casa? <Link className="underline underline-offset-4" href="/sobre">Leia sobre a Trato &amp; Butter</Link>.
        </p>
      </section>
    </>
  );
}
