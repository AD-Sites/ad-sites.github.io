# Processo Agnóstico: Simulação de Landing Page no Mockup do Celular (ADR-135)

Este documento estabelece o **padrão agnóstico oficial** para criação, estrutura e exibição da **Landing Page de Alta Conversão** simulada dentro do mockup de smartphone da **Aba 6 (Landing Page)** em todos os Hotsites de Diagnóstico Digital e Test Drive da rede **AD Sites**.

---

## 🎯 1. Objetivo & Regra de Ouro

- **Zero 404:** Nenhuma aba de Landing Page deve exibir tela de erro "404 File not found".
- **Interatividade Real:** O mockup de celular no hotsite deve renderizar uma página HTML real via `iframe`, permitindo scroll suave, leitura das dobras, teste de links e clique direto para o WhatsApp.
- **Herança Fiel dos 3Ps:** O design, paleta cromática, tipografia e copies da simulação devem ser derivados diretamente do **Planejamento Estratégico 3Ps (Posicionamento, Público e Proposta)** e do **Manual da Marca** do cliente.

---

## 📁 2. Estrutura de Diretórios Padronizada

Para qualquer cliente ou prospect gerado:

```text
ad-sites.github.io/
└── <cliente-slug>/
    ├── index.html                   # Hotsite SPA com as 6 abas estratégicas
    ├── portal.html                  # Redirecionador automático para ./
    ├── estrategia.md                # Documento completo 3Ps e Manual da Marca
    ├── assets/                      # Capas dos posts fixados e destaques
    └── landingpage/                 # 🚀 PASTA DA SIMULAÇÃO DA LANDING PAGE
        └── index.html               # Landing page mobile-first completa
```

---

## 📱 3. Integração no Mockup do Celular (`index.html`)

Na Aba 6 (`id="tab-landingpage"`), o container do celular deve utilizar caminho relativo `./landingpage/index.html` para compatibilidade total em qualquer ambiente:

```html
<div class="max-w-[400px] mx-auto bg-black rounded-[2.5rem] border-[12px] border-slate-900 shadow-2xl relative overflow-hidden" style="height: 700px;">
    <!-- Notch do Smartphone -->
    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20"></div>
    <!-- Iframe interativo para a LP -->
    <iframe src="./landingpage/index.html" class="w-full h-full bg-white z-10 relative" frameborder="0"></iframe>
</div>

<!-- Ação secundária: visualização expandida -->
<div class="text-center mt-4 mb-4">
    <a href="./landingpage/index.html" target="_blank" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-md transition transform hover:-translate-y-0.5">
        <span>🌐</span> <span>Abrir Landing Page em Tela Cheia (Nova Aba)</span> <span>↗</span>
    </a>
</div>
```

---

## 📐 4. Arquitetura das 7 Dobras de Alta Conversão

Toda Landing Page simulada deve conter as 7 dobras estratégicas descritas no Entregável 06:

| Dobra | Nome | Elementos Obrigatórios |
| :--- | :--- | :--- |
| **Top Bar** | Header Sticky | Logo/Nome, Tagline do Nicho, Cidades de Atendimento e Badge de Status (🟢 Online). |
| **Dobra 01** | Hero Section | Badge de Categoria, Headline Magnética, Subheadline Clara, Botão CTA WhatsApp e Barra de Prova Social (Avaliações Google + Anos de Mercado). |
| **Dobra 02** | Credibilidade | 4 cards de autoridade (Estrutura física, Atendimento pontual, Rigor técnico e Materiais premium). |
| **Dobra 03** | Agitação da Dor | Box com 3 medos/dores comuns do mercado (com ícones ✕) + Card de Transição com o diferencial da marca. |
| **Dobra 04** | Método em 3 Passos | 3 cards sequenciais numerados (01. Contato inicial $\to$ 02. Avaliação personalizada $\to$ 03. Execução & Resultado). |
| **Dobra 05** | Filtro de Perfil (ICP) | Comparativo de contraste: "✓ É Perfeito Para Quem" vs "✕ Não É Indicado Para Quem". |
| **Dobra 06** | Benefícios & Diferenciais | 4 diferenciais técnicos ou de acolhimento (ícones ★). |
| **Dobra 07** | FAQ & Fechamento | Acordeão interativo `<details>` com 5 dúvidas cruciais + Box de Fechamento com CTA final. |
| **Flutuante** | Floating Action Button | Botão fixo no canto inferior direito com ícone oficial do WhatsApp e link com mensagem personalizada. |

---

## 🎨 5. Aplicação da Identidade Visual (Regra 60-30-10)

A simulação de LP deve aplicar estritamente as cores definidas no **Manual da Marca (Estratégia 3Ps)**:

1. **60% Fundo de Leitura:**
   - Modo Clean: `#F8FAFC` (Gelo Soft / Acolhimento).
   - Modo Dark: `#0A2540` / `#071326` (Luxury / Alto Contraste).
2. **30% Primária Estrutural:**
   - Títulos, bordas de destaque e header (`var(--primary)`).
3. **10% Destaque / Acentos:**
   - Badges de categoria, detalhes luminosos e números dos passos (`var(--cyan)` ou `var(--gold)`).
4. **Botão de Ação Imediata (CTA):**
   - Sempre em Verde Oficial WhatsApp (`#25D366` / `#1EBE5D`) com texto de alto contraste.
5. **Tipografia Padrão:**
   - Títulos: `Plus Jakarta Sans`, sans-serif.
   - Corpo de texto: `Inter`, sans-serif.

---

## 🧪 6. Checklist de Validação Antes do Deploy

- [x] O arquivo existe no caminho `/<cliente-slug>/landingpage/index.html`.
- [x] O `iframe` no `index.html` aponta para `./landingpage/index.html`.
- [x] O botão "Abrir Landing Page em Tela Cheia" está presente e funcional.
- [x] O link do WhatsApp contém número com DDI e DDD válidos e mensagem pré-formatada.
- [x] O layout é 100% responsivo para larguras mobile (375px a 430px) sem quebras laterais.
- [x] O FAQ possui acordeões funcionais via `<details>` e `<summary>`.
- [x] O botão flutuante de WhatsApp não tampa conteúdos essenciais e possui `z-index` adequado.
