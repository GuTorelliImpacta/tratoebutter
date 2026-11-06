# Trato & Butter — site institucional

Site estático (Next.js 15, TypeScript, Tailwind) da hamburgueria Trato & Butter, Tremembé, zona norte de São Paulo.

- PRD: `docs/prd/trato-e-butter.md` · Spec: `docs/spec/trato-e-butter-tasks.md`
- Conteúdo editável: `src/content/site.ts` (endereço, horários, WhatsApp, links, FAQ)
- Cardápio com preços: preencher `categories` em `src/app/cardapio/page.tsx` (oculto enquanto vazio)

## Rodar
```bash
npm install
npm run dev        # desenvolvimento
npm run build && npm start
npm run lint && npm run typecheck
```

## Variáveis de ambiente (`.env.example`)
- `NEXT_PUBLIC_SITE_URL`: URL pública (canonical, sitemap, OG)
- `NEXT_PUBLIC_CONTACT_FORM=1` + `CONTACT_WEBHOOK_URL`: ativam o formulário de contato

## Pendências com o dono
Horários (abertura às 08:00 e item "Acesso" do Google), cardápio e preços, WhatsApp, história da casa, posição no Top 50, logo vetorial, fotos em alta resolução, autorização de imagem.
