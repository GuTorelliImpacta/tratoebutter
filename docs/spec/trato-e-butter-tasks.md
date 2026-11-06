# Spec de tarefas — Trato & Butter

PRD: `docs/prd/trato-e-butter.md`

**Stack:** Next.js 15 (App Router) + TypeScript strict + Tailwind 3, páginas estáticas, sem backend além de uma rota de contato opcional.
**Tokens:** ink `#000`, paper `#F4EEE3`, butter `#D98D42`, toast `#75411A`; fontes Zilla Slab (títulos) + DM Sans (corpo); escala fluida com `clamp()`.
**Estrutura:** `src/app` (rotas), `src/components`, `src/content/site.ts` (fatos do PRD), `public/img` (imagens tratadas).

| PRD | Tarefas |
|---|---|
| 3, 4, 8 | T01–T03 |
| 9, 10 | T04–T06 |
| 11 | T07 |
| 12 | T08–T10 |
| 14 | T11 |

- [x] T01 Setup do projeto (config, headers de segurança, imagens tratadas). Pronto: `npm run build` roda.
- [x] T02 Tokens, fontes, layout base (header, menu mobile, rodapé, barra fixa Ligar/Rota/Pedir).
- [x] T03 Conteúdo em `src/content/site.ts` (NAP, horários, prêmio, FAQ).
- [x] T04 Home completa (hero, prêmio, destaques, como pedir, localização, Instagram).
- [x] T05 Páginas Cardápio, Sobre, Prêmio.
- [x] T06 Página Contato e Privacidade.
- [x] T07 `MapEmbed` carregado na Home e em Contato; WhatsApp só com número configurado.
- [x] T08 SEO: metadata, JSON-LD Restaurant/FAQPage/Breadcrumb, sitemap, robots, OG.
- [x] T09 Segurança: CSP e demais headers, rota de contato (zod, honeypot, rate limit), oculta por padrão.
- [x] T10 Performance e acessibilidade (next/image, skip link, foco, reduced motion).
- [x] T11 QA (Playwright, build, lint, typecheck) e aceite do PRD.
- [x] T12 README, PR, deploy Vercel.
