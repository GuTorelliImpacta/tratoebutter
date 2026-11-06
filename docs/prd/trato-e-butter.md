# PRD — Site institucional Trato & Butter

Data: 2026-11-06 · Autora: pensadora · Próxima etapa: orquestra-dev

## 1. Resumo
Site institucional de uma página principal + páginas internas para a **Trato & Butter**, hamburgueria de Tremembé (zona norte de São Paulo), reconhecida no **Top 50 Hamburguerias 2026 do Guia do Hambúrguer** (troféu em foto enviada pelo dono).

- **Conversão principal:** pedir delivery (iFood) e, secundária, **chegar ao salão** (rota/telefone/WhatsApp).
- **Conversões secundárias:** ligar, ver cardápio, ver horários, seguir no Instagram.
- **Suposições declaradas:** (a) público local de zona norte + visitantes de outras zonas atraídos pelo prêmio; (b) a casa atende salão e delivery; (c) site estático, rápido, sem login nem pagamento próprio (pedido sai pelo iFood); (d) o dono validará todos os `[CONFIRMAR]` antes da publicação final.

## 2. Fatos confirmados (fonte)
| Fato | Fonte |
|---|---|
| Nome: Trato & Butter ("Trato e butter" no Google) | Logo e print do Google |
| Endereço: R. Maria Amália Lopes Azevedo, 629 — Tremembé, São Paulo – SP, 02350-001 | Print Google Maps |
| Telefone: (11) 2996-1767 | Print Google Maps |
| Avaliação Google: 4,7 ★ com 376 avaliações (maioria 5 estrelas) | Print Google Maps (lido em 2026-11-06) |
| Faixa de preço: R$ 40–80 por pessoa (informado por 52 pessoas) | Print Google Maps |
| Prêmio: Top 50 Hamburguerias 2026, Guia do Hambúrguer, ranking São Paulo | Foto do troféu enviada |
| Delivery no iFood, bairro Vila Albertina | Link fornecido pelo usuário |
| Instagram: @tratobutter | Link fornecido pelo usuário |
| Pratos fotografados: hambúrguer com queijo, bacon e molho escuro; hambúrguer com cheddar, creme e chips de bacon; hambúrguer com fritas e molho; carne fatiada ao ponto; tábua de petiscos; prato de linguiça | Fotos enviadas |

Horários (print Google, estruturado):
```json
{"segunda":["08:00-15:30"],"terca":["08:00-15:30","18:00-22:00"],"quarta":["08:00-15:30","18:00-22:00"],"quinta":["08:00-15:30","18:00-22:00"],"sexta":["08:00-15:30","18:00-22:00"],"sabado":["08:00-17:00","18:00-22:00"],"domingo":["08:00-17:00","18:00-22:00"],"acesso_google":"08:00-20:00"}
```

## 3. [CONFIRMAR] e regras de integridade
**[CONFIRMAR] com o dono:**
1. Horários: abertura às 08:00 é incomum para hamburgueria; confirmar se é café da manhã/almoço ou erro na ficha. Segunda sem jantar? Significado do item "Acesso 08:00–20:00" do Google.
2. Cardápio completo: nomes, ingredientes e preços dos hambúrgueres, porções, bebidas, sobremesas (nenhum nome foi informado; as fotos não identificam o prato).
3. WhatsApp oficial (só há telefone fixo).
4. História, fundadores, ano de abertura, quantidade de lugares, estacionamento, acessibilidade, pet friendly, reservas.
5. Posição exata no Top 50 e link da publicação do Guia do Hambúrguer (a busca pública não localizou o ranking; o troféu em foto é a única prova).
6. Link do Google Maps "Compartilhar > Incorporar um mapa".
7. Autorização de uso das fotos e da pessoa que aparece com o troféu (rosto identificável).
8. Se há carne maturada, blend próprio, pão próprio: só afirmar com confirmação.

**Regras:**
- Proibido inventar depoimento, número, prêmio, preço, certificação, parceria ou história.
- Seções dependentes de dado real (depoimentos, cardápio com preços, galeria de eventos) ficam **ocultas enquanto vazias**.
- Sem logos de terceiros: a foto do hambúrguer com garrafas Heinz **não entra**; o selo do Guia do Hambúrguer só aparece com autorização, como texto "Top 50 Hamburguerias 2026 — Guia do Hambúrguer".
- Sem hotlink de imagem do Instagram/iFood; imagens servidas pelo próprio site.
- Não exibir a nota do Google como "depoimento"; é dado agregado com data de leitura.

## 4. Marca
- **Nome:** "Trato" = acordo, combinado, também "tratar bem"; "Butter" = manteiga. "&" liga promessa e ingrediente. A gota estilizada no "O" de TRATO é uma gota/chama de manteiga: assinatura gráfica reaproveitável.
- **Logo:** círculo preto, texto branco em serifa slab de estilo máquina de escrever ("TRATO / &BUTTER"), o "&" grande e inclinado, gota no O. Tom: artesanal, direto, com humor seco.
- **Paleta (amostrada dos arquivos):**
  - Preto do logo `#000000` (fundo do círculo, amostrado) e branco `#FFFFFF` (texto, amostrado).
  - Acento "manteiga queimada" `#D98D42`, amostrado do pão/queijo na foto do hambúrguer (9684ce10). Decisão: usar como único acento.
  - Apoio "pão tostado" `#75411A` (amostrado do blend/pão) para detalhes escuros quentes.
  - Papel `#F4EEE3` (creme): **decisão de design**, não amostrado, para seções claras.
  - Descartado: laranja/vermelho do troféu (`#C5432B`), pertence ao Guia do Hambúrguer.
- **Personalidade:** artesanal, confiante, urbana de bairro, sem pose.
- **Posicionamento:** hamburgueria de bairro premiada, com padrão de ranking e preço acessível (R$ 40–80 por pessoa). "Prêmio de centro, endereço de zona norte."
- **Fraquezas atuais:** nome aparece escrito de formas diferentes ("Trato e butter"); informações dispersas entre Instagram, iFood e Google; horários confusos; sem página própria para o prêmio; cardápio só em plataformas de terceiros.

## 5. Nicho e mercado
- São Paulo lidera pedidos de hambúrguer no iFood no Brasil: 73,5 milhões de pedidos (Times Brasil/CNBC, matéria citando iFood; data a confirmar na fonte, ver seção 15).
- Hambúrguer de SP tem projeção internacional em rankings (Burgerdudes 2026 e World's 101 Best Burger Places 2026, segundo Gazeta SP e Travel.com.br): o público já procura "hamburguerias premiadas".
- Concorrência local de Tremembé encontrada na busca: Garage 84 Burger (Google 4,9 com 741 avaliações, segundo diretório) e Hamburgueria do Vale. Trato & Butter tem menos avaliações; a vantagem comprovável é o **prêmio Top 50**.
- Diferenciais que a casa pode provar hoje: (1) Top 50 Hamburguerias 2026; (2) 4,7 ★ em 376 avaliações; (3) preço médio R$ 40–80; (4) cardápio além de hambúrguer (carnes e petiscos nas fotos).
- Limitação: Instagram (HTTP 429) e iFood (HTTP 403) bloquearam a leitura automática; nada foi contornado.

## 6. Público e jornada
| Perfil | Dor | Objeção | Decide quando vê |
|---|---|---|---|
| Morador de Tremembé/Vila Albertina/Mandaqui | Quer hambúrguer bom perto | "É caro?" | Preço, horário, botão de pedir |
| Visitante de outra zona que viu o prêmio | Quer provar o melhor | "Vale o deslocamento?" | Prêmio, fotos reais, mapa, estacionamento |
| Casal/grupo de fim de semana | Onde ir hoje à noite | "Está aberto? Tem fila?" | Horário, telefone, rota |
| Pedido recorrente por delivery | Pedir rápido | "Taxa e tempo" | Link direto iFood |

Chegada: Instagram (bio), Google Maps/pesquisa "hamburgueria Tremembé", indicação, iFood.
**KPIs:** cliques em "Pedir no iFood"; cliques em "Como chegar"/"Ligar"; visualizações do cardápio; rolagem até localização; Core Web Vitals verdes no 4G.

## 7. Proposta de valor e mensagens
- **Frase principal (H1, rascunho):** "Hambúrguer de bairro. Padrão de ranking."
- Apoio: (1) Top 50 Hamburguerias 2026 — Guia do Hambúrguer; (2) 4,7 ★ em 376 avaliações no Google; (3) R$ 40–80 por pessoa; (4) Tremembé, zona norte: peça no iFood ou venha ao salão; (5) carne, pão e manteiga em primeiro plano [CONFIRMAR ingredientes].
- Provas disponíveis: troféu (foto), nota Google (print datado), fotos próprias.

## 8. Identidade e direção de design
**Arquétipo:** **manifesto tipográfico utilitário** — a grande tipografia slab do logo é o herói; o cardápio e o pedido são a ação.
1. **Arquétipo:** manifesto tipográfico + utilitário. Porquê: o logo já é tipográfico; o visitante quer pedir ou chegar.
2. **Tipografia:** títulos em slab "máquina de escrever" (candidatas: **Zilla Slab Highlight/Zilla Slab**, **Roboto Slab**, **Courier Prime** só para detalhes). Corpo: **DM Sans** ou **Inter**. Contraste entre slab pesada e sans neutra. O "&" gigante como elemento gráfico.
3. **Forma:** círculo (herdado do selo), cantos retos nas caixas, linhas finas tracejadas como "ticket de comanda", gota de manteiga como marcador de lista e separador.
4. **Imagem:** cor natural, alto contraste, fundo escuro; recortes em círculo para ecoar o selo; sem filtros pesados.
5. **Cor:** alternar blocos pretos (`#000`) e creme (`#F4EEE3`); acento `#D98D42` só em CTAs, gota e preços; texto sobre preto em branco; contraste AA verificado.
6. **Ritmo:** respiro médio, informação objetiva; cardápio denso e escaneável.
7. **Movimento:** um gesto próprio: a gota de manteiga que "derrete" (escala/translate sutil) no hover do CTA e no carregamento; respeitar `prefers-reduced-motion`.
8. **Voz:** direta, bem-humorada, de bairro ("combinado é combinado").

**Referências (inspiração, não cópia):**
| Referência | Verificado ao vivo | O que a análise mostrou | Princípio aproveitado |
|---|---|---|---|
| Mocotó (nicho, restaurante) | Sim (texto, sem CSS) | Seções âncora, cardápio em páginas HTML, reservas/iFood separados, mas conteúdo desatualizado e "test" no rodapé | Cardápio em HTML; delivery separado de reserva; manter conteúdo sempre atual |
| D.O.M. (nicho) | Sim (texto, sem CSS) | Menu de 6 itens, hero em slider, selo Michelin, bloco de reserva final, link "Skip to content", alt text fraco | Prêmio em destaque sóbrio; pular para conteúdo; alt text descritivo |
| Hotel Fasano (relacionado, hospitalidade) | Não verificado ao vivo | — | Localização/como chegar com clareza e foto real de ambiente |

**Clichês evitados:** hero com título gigante de um lado e foto do outro; faixa de números; grade de cards iguais; faixa final com telefone gigante; fundo de madeira e cardápio em imagem.
**Teste da troca:** com outro logo e nome, o site perde a slab "manifesto", o "&" gigante, a gota e o ticket de comanda: não serve. Aprovado.

**Hero:** H1 em um único bloco legível ("Hambúrguer de bairro. Padrão de ranking."), subtítulo com prêmio, foto principal em recorte circular, **CTAs acima da dobra no celular:** "Pedir no iFood" (primário) e "Como chegar" (secundário), estado "Aberto agora / Fecha às X" calculado pelos horários (após validação).
**Não fazer (nicho):** cardápio só em imagem/PDF; fotos de banco de imagem; autoplay com som; popups; "melhor hambúrguer do mundo" ou superlativos sem prova; ocultar preço.

## 9. Arquitetura de informação
Navegação (5 itens): **Cardápio · Sobre · Prêmio · Onde estamos · Pedir** (CTA fixo).
Páginas:
1. **Home** — hero; faixa do prêmio; 3 destaques de pratos (fotos reais); como pedir (iFood/salão); localização com mapa e horários; Instagram; rodapé. CTA: Pedir no iFood.
2. **Cardápio** — HTML por categoria (hambúrgueres, carnes, petiscos, bebidas, sobremesas) `[CONFIRMAR]`; enquanto vazio, mostrar pratos fotografados com "Cardápio completo no iFood". CTA: Pedir.
3. **Sobre** — história da casa `[CONFIRMAR]`; enquanto vazia, texto curto factual (local, prêmio).
4. **Prêmio** (seção/página) — Top 50 Hamburguerias 2026, foto do troféu (com autorização), texto do Guia `[CONFIRMAR posição]`.
5. **Contato e localização** — mapa incorporado, endereço, telefone, horários, WhatsApp `[CONFIRMAR]`, formulário simples (nome, mensagem).
6. **Política de privacidade** (rodapé).
Contato sempre a um toque no celular (barra fixa inferior: Ligar · Rota · Pedir).

## 10. Conteúdo final (copy)
**Hero:** H1 "Hambúrguer de bairro. Padrão de ranking." · Sub: "Trato & Butter, em Tremembé. Top 50 Hamburguerias 2026 — Guia do Hambúrguer." · Botões: "Pedir no iFood", "Como chegar".
**Faixa do prêmio:** "Top 50 Hamburguerias 2026 · Guia do Hambúrguer · Ranking São Paulo [CONFIRMAR posição]".
**Destaques:** títulos neutros enquanto os nomes oficiais não chegam: "O de queijo e bacon", "O de cheddar e creme", "Com fritas e molho" (substituir pelos nomes reais). Legenda: "Foto real da casa."
**Como pedir:** "Em casa: peça no iFood. No salão: é só chegar. Dúvida? Ligue (11) 2996-1767."
**Sobre (provisório):** "A Trato & Butter fica na Rua Maria Amália Lopes Azevedo, 629, em Tremembé. Hambúrguer, carnes e petiscos feitos para quem leva comida a sério e conta não." `[CONFIRMAR história]`
**Localização:** "Rua Maria Amália Lopes Azevedo, 629 — Tremembé, São Paulo – SP, 02350-001. Faixa de preço: R$ 40–80 por pessoa (informado no Google)."
**Avaliação:** "4,7 ★ no Google (376 avaliações, lido em 06/11/2026)."
**Microcopy:** botão "Pedir no iFood" · "Como chegar" · "Ligar agora" · "Ver cardápio" · formulário: "Seu nome", "Sua mensagem", "Enviar", sucesso "Recebido! Respondemos em breve.", erro "Não foi possível enviar. Ligue para (11) 2996-1767."
**FAQ (dúvidas reais):**
1. Vocês abrem que horas? (tabela de horários validada)
2. Quanto custa em média? "R$ 40–80 por pessoa, segundo informações no Google."
3. Tem delivery? "Sim, pelo iFood."
4. Preciso reservar? `[CONFIRMAR]`
5. Tem opção vegetariana/sem glúten? `[CONFIRMAR]`
6. Aceitam pet / tem estacionamento? `[CONFIRMAR]`
7. Como chegar de transporte público? "Do ponto de referência no Google Maps, 8 min de transporte, 3 min de carro a partir de 850 m (varia conforme sua origem)."  *(usar só texto genérico "veja a rota no mapa" se não validado)*
**Avisos legais:** "Imagens ilustrativas. Preços e disponibilidade sujeitos a alteração." "Consumo de carne mal passada: consulte nosso atendimento sobre alergias." `[CONFIRMAR]`

## 11. Contato e localização
- **Endereço (NAP idêntico à ficha):** Trato & Butter — R. Maria Amália Lopes Azevedo, 629 — Tremembé, São Paulo – SP, 02350-001 — (11) 2996-1767.
- **Mapa incorporado** (iframe Google Maps, `loading="lazy"` abaixo da dobra na Home e carregado na página de contato), consulta: `R. Maria Amália Lopes Azevedo, 629 - Tremembé, São Paulo - SP, 02350-001`. Sem código oficial de incorporação ainda: usar `https://www.google.com/maps?q=<endereço url-encoded>&output=embed` e `[CONFIRMAR]` o código oficial. Endereço também em texto; "Traçar rota" como link secundário.
- **WhatsApp:** `[CONFIRMAR número]`; mensagem pré-preenchida: "Olá! Vim pelo site da Trato & Butter e gostaria de saber sobre…". Enquanto não houver número, o botão fica oculto.
- **Horários:** ver JSON acima; exibir "Aberto agora" só após validação; mostrar a nota "horários sujeitos a confirmação".

## 12. Requisitos não funcionais
- **Performance:** site estático, imagens em WebP/AVIF com `srcset`, fontes com `font-display: swap`, LCP < 2,5 s em 4G, CLS < 0,1, sem bibliotecas pesadas.
- **SEO local:** termos "hamburgueria em Tremembé", "hambúrguer zona norte SP", "melhor hamburgueria zona norte", "hamburgueria Vila Albertina", "delivery de hambúrguer Tremembé". JSON-LD `Restaurant` com NAP idêntico, horários, `servesCuisine`, `priceRange` "R$40–80", `sameAs` Instagram/iFood; title/description por página; sitemap e robots. **Checklist da ficha Google (para o dono):** corrigir nome ("Trato & Butter"), validar horários, incluir cardápio e fotos próprias, link do site, categoria "Hamburgueria", responder avaliações.
- **Acessibilidade:** WCAG 2.1 AA; contraste verificado; foco visível; alt descritivo; skip link; alvos de toque ≥ 44 px; `prefers-reduced-motion`.
- **Segurança e privacidade (LGPD):** política de privacidade citando Google Maps (cookies/IP do iframe) e formulário (nome e mensagem; finalidade, retenção, contato); honeypot + limite de envio contra spam; sem dados sensíveis; cabeçalhos de segurança (CSP, X-Content-Type-Options, Referrer-Policy); sem analytics invasivo (preferir contagem sem cookie).

## 13. Assets e imagens
Origem de todas: fotos enviadas pelo dono (prints/capturas de redes). Todas com largura ≤ 1206 px: **nenhuma serve para hero em tela cheia (≥ 1600 px)**; usar em recorte circular/ cartões ≥ 800 px.
| Arquivo | Mostra | Res. | Uso |
|---|---|---|---|
| ce0e574d-image.jpg | Logo (círculo preto) | 1145×1320 (com fundo borrado) | Extrair o círculo; **preferir logo vetorial/original** `[CONFIRMAR]` |
| 9684ce10-image.jpg | Hambúrguer com queijo, bacon, molho; garrafas desfocadas ao fundo | 1206×930 | Hero em recorte circular / destaque 1 |
| 037c3d83-image.jpg | Hambúrguer cheddar + garrafas Heinz | 1206×923 | **Não usar** (logos de terceiros) |
| feac4ac0-image.jpg | Hambúrguer com fritas e molho, visão superior | 1206×1052 | Destaque 3 / cardápio |
| c1300363-image.jpg | Carne fatiada ao ponto | 768×1045 | Seção Sobre / carnes (baixa resolução, uso pequeno) |
| 45068cdf-image.jpg | Pessoa com troféu Top 50 | 1206×1493 | Seção Prêmio, **mediante autorização** |
| 7587e9d3-image.jpg | Print Google Maps | — | Só fonte de dados, não publicar |
| 68fb44df-image.png | Print de horários | — | Só fonte de dados, não publicar |
Fotos de petiscos/linguiça (prints do Maps) são miniaturas: não usar.
**Fotos necessárias:** fachada, salão, equipe com autorização, cada hambúrguer em ≥ 1600 px, carnes, petiscos, logo vetorial (SVG).

## 14. Critérios de aceite de produto
- [ ] Home, Cardápio, Sobre, Prêmio, Contato e Privacidade existem; navegação com no máximo 5 itens.
- [ ] Nome, endereço, telefone, horários e nota idênticos aos fatos da seção 2.
- [ ] Nenhum dado inventado; itens `[CONFIRMAR]` ocultos ou claramente marcados no código/painel de pendências.
- [ ] CTA "Pedir no iFood" e "Como chegar" visíveis acima da dobra a 375 px.
- [ ] Os 8 eixos de identidade aplicados; teste da troca aprovado.
- [ ] Mapa incorporado carrega no endereço correto, com endereço em texto ao lado.
- [ ] Barra fixa mobile com Ligar, Rota e Pedir.
- [ ] Imagens conforme o inventário; nenhuma imagem com logo de terceiros; nenhuma repetida.
- [ ] Lighthouse mobile ≥ 90 (performance, acessibilidade, SEO, boas práticas).
- [ ] Política de privacidade publicada; formulário com proteção contra spam.

## 15. Fontes
- Google Maps (print do dono), ficha "Trato e butter", lida em 2026-11-06.
- Foto do troféu Top 50 Hamburguerias 2026 (arquivo do dono).
- iFood, página da loja (link do dono): bloqueado (HTTP 403) em 2026-11-06; não verificado.
- Instagram @tratobutter: bloqueado (HTTP 429) em 2026-11-06; não verificado.
- Times Brasil/CNBC: "SP lidera consumo de hambúrguer no Brasil com 73,5 milhões de pedidos, diz iFood" — https://timesbrasil.com.br/empresas-e-negocios/sp-lidera-consumo-de-hamburguer-no-brasil-com-735-milhoes-de-pedidos-diz-ifood/ (data não confirmada).
- Gazeta SP, "Dois restaurantes de SP entram na lista de melhores hambúrgueres do mundo" — https://www.gazetasp.com.br/entretenimento/dois-restaurantes-de-sp-entram-na-lista-de-melhores-hamburgueres-do/1177649/
- Garage 84 Burger (diretório) — https://www.enprimeurclub.com/restaurants/garage-84-burger-hamburgueria-em-trememb-tremembe-restaurant (dado de terceiros, `[CONFIRMAR]`).
- Mocotó — https://mocoto.com.br/ (verificado 2026-11-06, apenas texto).
- D.O.M. — https://domrestaurante.com.br/ (verificado 2026-11-06, apenas texto).
- Busca pelo ranking "Guia do Hambúrguer Top 50 2026": não localizado em fontes públicas em 2026-11-06.
