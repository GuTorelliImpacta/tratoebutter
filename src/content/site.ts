export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tratoebutter.vercel.app";

export const business = {
  name: "Trato & Butter",
  phone: "(11) 2996-1767",
  phoneHref: "tel:+551129961767",
  street: "R. Maria Amália Lopes Azevedo, 629",
  district: "Tremembé",
  city: "São Paulo",
  state: "SP",
  zip: "02350-001",
  whatsapp: "" as string, // número com DDI, ex.: 5511999999999 — vazio oculta o botão
  instagram: "https://www.instagram.com/tratobutter",
  instagramHandle: "@tratobutter",
  ifood:
    "https://www.ifood.com.br/delivery/sao-paulo-sp/trato-e-butter-vila-albertina/47318918-c0e1-4230-a55c-2c74084aa305",
  rating: { value: "4,7", count: 376, readAt: "06/11/2026" },
  priceRange: "R$ 40–80 por pessoa",
};

export const fullAddress = `${business.street} — ${business.district}, ${business.city} – ${business.state}, ${business.zip}`;
const mapQuery = encodeURIComponent(
  `${business.street} - ${business.district}, ${business.city} - ${business.state}, ${business.zip}`,
);
export const mapEmbedSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
export const mapRouteHref = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

export const whatsappHref = (msg = "Olá! Vim pelo site da Trato & Butter e gostaria de saber sobre…") =>
  business.whatsapp ? `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(msg)}` : "";

export type Turn = { open: string; close: string };
export const hours: { day: string; short: string; turns: Turn[] }[] = [
  { day: "Segunda-feira", short: "Seg", turns: [{ open: "08:00", close: "15:30" }] },
  { day: "Terça-feira", short: "Ter", turns: [{ open: "08:00", close: "15:30" }, { open: "18:00", close: "22:00" }] },
  { day: "Quarta-feira", short: "Qua", turns: [{ open: "08:00", close: "15:30" }, { open: "18:00", close: "22:00" }] },
  { day: "Quinta-feira", short: "Qui", turns: [{ open: "08:00", close: "15:30" }, { open: "18:00", close: "22:00" }] },
  { day: "Sexta-feira", short: "Sex", turns: [{ open: "08:00", close: "15:30" }, { open: "18:00", close: "22:00" }] },
  { day: "Sábado", short: "Sáb", turns: [{ open: "08:00", close: "17:00" }, { open: "18:00", close: "22:00" }] },
  { day: "Domingo", short: "Dom", turns: [{ open: "08:00", close: "17:00" }, { open: "18:00", close: "22:00" }] },
];

export const award = "Top 50 Hamburguerias 2026 — Guia do Hambúrguer";

export const highlights = [
  { title: "O de queijo e bacon", text: "Queijo derretido, bacon e molho escuro no pão tostado.", img: "/img/burger-bacon.webp", alt: "Hambúrguer com queijo derretido, bacon crocante e molho escuro sobre pão tostado" },
  { title: "Com fritas e molho", text: "Hambúrguer com bacon e uma porção generosa de fritas.", img: "/img/burger-fritas.webp", alt: "Hambúrguer com bacon servido em prato com fritas e pote de molho vermelho" },
  { title: "Carnes ao ponto", text: "Corte fatiado, selado por fora e rosado por dentro.", img: "/img/carne-fatiada.webp", alt: "Fatias de carne selada, rosada no centro, sobre tábua escura" },
];

export const faqs = [
  { q: "Vocês abrem que horas?", a: "De segunda a quinta, das 08:00 às 15:30 e, de terça a quinta, também das 18:00 às 22:00. Sexta, das 08:00 às 15:30 e das 18:00 às 22:00. Sábado e domingo, das 08:00 às 17:00 e das 18:00 às 22:00. Horários conforme a ficha no Google; na dúvida, ligue." },
  { q: "Quanto custa em média?", a: "Segundo informações no Google, de R$ 40 a R$ 80 por pessoa." },
  { q: "Tem delivery?", a: "Sim, pelo iFood. Basta tocar em “Pedir no iFood”." },
  { q: "Onde fica a Trato & Butter?", a: `${fullAddress}.` },
  { q: "Como falo com vocês?", a: `Ligue para ${business.phone} ou mande uma mensagem pelo Instagram ${business.instagramHandle}.` },
];

export const nav = [
  { href: "/cardapio", label: "Cardápio" },
  { href: "/sobre", label: "Sobre" },
  { href: "/premio", label: "Prêmio" },
  { href: "/contato", label: "Onde estamos" },
];
