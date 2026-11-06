import { mapEmbedSrc } from "@/content/site";

export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={`aspect-[4/3] w-full overflow-hidden border-2 border-ink bg-ink/10 md:aspect-[16/10] ${className}`}>
      <iframe
        title="Mapa com a localização da Trato & Butter, Rua Maria Amália Lopes Azevedo, 629, Tremembé, São Paulo"
        src={mapEmbedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-full w-full border-0"
      />
    </div>
  );
}
