import Link from "next/link";
import { Drop } from "./Drop";
import { business, fullAddress, nav } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink pb-24 pt-12 text-paper md:pb-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 font-slab text-2xl font-bold">
            <Drop className="h-5 w-4 text-butter" /> Trato &amp; Butter
          </p>
          <p className="mt-2 text-sm">Hambúrguer de bairro. Padrão de ranking.</p>
        </div>
        <div className="text-sm">
          <p>{fullAddress}</p>
          <p className="mt-2">
            <a className="underline underline-offset-4" href={business.phoneHref}>{business.phone}</a>
          </p>
          <p className="mt-2">
            <a className="underline underline-offset-4" href={business.instagram} target="_blank" rel="noopener noreferrer">
              Instagram {business.instagramHandle}
            </a>
          </p>
        </div>
        <ul className="text-sm">
          {nav.map((n) => (
            <li key={n.href}><Link className="inline-flex min-h-[44px] items-center underline underline-offset-4" href={n.href}>{n.label}</Link></li>
          ))}
          <li><Link className="inline-flex min-h-[44px] items-center underline underline-offset-4" href="/privacidade">Política de privacidade</Link></li>
        </ul>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-4 text-xs text-paper/70">
        Imagens ilustrativas. Preços e disponibilidade sujeitos a alteração.
      </p>
    </footer>
  );
}
