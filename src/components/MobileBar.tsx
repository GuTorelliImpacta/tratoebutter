import { business, mapRouteHref } from "@/content/site";

const item =
  "flex min-h-[56px] flex-1 items-center justify-center font-slab text-sm font-bold uppercase tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-butter";

export function MobileBar() {
  return (
    <nav aria-label="Ações rápidas" className="fixed inset-x-0 bottom-0 z-40 flex border-t-2 border-butter bg-ink text-paper md:hidden">
      <a className={item} href={business.phoneHref}>Ligar</a>
      <a className={`${item} border-x border-paper/30`} href={mapRouteHref} target="_blank" rel="noopener noreferrer">Rota</a>
      <a className={`${item} bg-butter text-ink`} href={business.ifood} target="_blank" rel="noopener noreferrer">Pedir</a>
    </nav>
  );
}
