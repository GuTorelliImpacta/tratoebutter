import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { award, business } from "@/content/site";

export const metadata: Metadata = {
  title: "Top 50 Hamburguerias 2026",
  description: "A Trato & Butter está no Top 50 Hamburguerias 2026 do Guia do Hambúrguer.",
  alternates: { canonical: "/premio" },
};

export default function Premio() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2">
        <Image src="/img/trofeu-top50.webp" alt="Troféu Top 50 Hamburguerias 2026 do Guia do Hambúrguer com o nome Trato & Butter" width={776} height={850} sizes="(min-width: 768px) 45vw, 100vw" className="w-full object-cover" />
        <div>
          <h1 className="t-h2 break-words">Top 50 Hamburguerias 2026</h1>
          <p className="mt-6 text-lg">A Trato &amp; Butter foi reconhecida no ranking do Guia do Hambúrguer: {award}.</p>
          <p className="mt-4">Do bairro para o ranking. Prove e confira.</p>
          <div className="mt-6"><Button href={business.ifood}>Pedir no iFood</Button></div>
        </div>
      </div>
    </section>
  );
}
