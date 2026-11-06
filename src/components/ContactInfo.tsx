import { Button } from "./Button";
import { HoursTable } from "./HoursTable";
import { business, fullAddress, mapRouteHref, whatsappHref } from "@/content/site";

export function ContactInfo() {
  const wa = whatsappHref();
  return (
    <div className="space-y-6">
      <address className="not-italic">
        <p className="font-slab text-2xl font-bold">{business.name}</p>
        <p className="mt-1">{fullAddress}</p>
        <p className="mt-1">
          Telefone:{" "}
          <a className="font-bold underline underline-offset-4" href={business.phoneHref}>
            {business.phone}
          </a>
        </p>
        <p className="mt-1 text-sm">{business.priceRange} (informado no Google)</p>
      </address>
      <div>
        <h3 className="mb-2 font-slab text-lg font-bold">Horários</h3>
        <HoursTable />
        <p className="mt-2 text-sm">Horários conforme a ficha no Google. Na dúvida, ligue antes.</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button href={business.phoneHref} variant="ghost-dark">Ligar agora</Button>
        {wa && <Button href={wa} variant="ghost-dark">Chamar no WhatsApp</Button>}
        <a
          href={mapRouteHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[48px] items-center px-2 font-bold underline underline-offset-4"
        >
          Traçar rota
        </a>
      </div>
    </div>
  );
}
