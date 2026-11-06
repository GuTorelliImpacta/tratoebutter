import type { Metadata } from "next";
import { business } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Como o site da Trato & Butter trata dados pessoais, conforme a LGPD.",
  alternates: { canonical: "/privacidade" },
};

export default function Privacidade() {
  return (
    <article className="mx-auto max-w-3xl space-y-4 px-4 py-14">
      <h1 className="t-hero">Política de privacidade</h1>
      <p>Este site não usa cookies de publicidade nem ferramentas de análise. Tratamos dados pessoais conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018).</p>
      <h2 className="t-h2 !text-3xl">Mapa do Google</h2>
      <p>As páginas Início e Onde estamos exibem um mapa incorporado do Google Maps. Ao carregar o mapa, o Google pode receber seu endereço IP e dados do navegador e aplicar a própria política de privacidade.</p>
      <h2 className="t-h2 !text-3xl">Formulário de contato</h2>
      <p>Quando disponível, o formulário coleta nome e mensagem apenas para responder ao seu contato. Os dados não são vendidos e são mantidos pelo tempo necessário ao atendimento.</p>
      <h2 className="t-h2 !text-3xl">Links externos</h2>
      <p>Ao tocar em “Pedir no iFood” ou no Instagram, você sai do site e passa a seguir as regras desses serviços.</p>
      <h2 className="t-h2 !text-3xl">Seus direitos</h2>
      <p>Você pode pedir acesso, correção ou exclusão dos seus dados pelo telefone {business.phone} ou pelo Instagram {business.instagramHandle}.</p>
    </article>
  );
}
