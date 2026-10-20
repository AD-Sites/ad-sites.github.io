# AD Sites (`ad-sites.github.io`)

Repositório central para hospedagem e publicação de landing pages e sites institucionais de clientes da **AD Sites** via GitHub Pages.

## 🌐 Endereço Oficial
- **Hub Central**: `https://ad-sites.github.io/`
- **Páginas dos Clientes**: `https://ad-sites.github.io/<cliente>/<pagina>`

---

## 📁 Estrutura de Pastas

```text
ad-sites.github.io/
├── index.html                   # Portal principal com índice dos sites ativos
├── .nojekyll                    # Impede que o Jekyll ignore arquivos com underline
├── docs/                        # 📚 Documentação e Processos Agnósticos
│   └── PROCESSO_AGNOSTICO_LANDING_PAGE_MOCKUP.md # Padrão de simulação mobile (ADR-135)
├── dr-hector-chaves/            # Hotsite de Diagnóstico & Test Drive
│   ├── index.html               # Hotsite SPA com as 6 abas estratégicas
│   ├── estrategia.md            # Planejamento Estratégico 3Ps & Manual da Marca
│   ├── assets/                  # Capas de posts fixados e destaques
│   └── landingpage/             # 📱 Simulação da Landing Page de Alta Conversão
│       └── index.html           # LP móvel com as 7 dobras (renderizada no mockup)
├── daniela-wernhart/            # Cliente: Daniela Wernhart (Psicologia)
│   ├── index.html               # Página principal do site
│   └── assets/                  # Imagens, CSS, fontes e ícones
└── <novo-cliente>/              # Próximos clientes
    ├── index.html
    └── assets/
```

---

## 🚀 Como Adicionar um Novo Cliente

1. Crie uma pasta com o identificador do cliente (ex: `nome-do-cliente`):
   ```bash
   mkdir nome-do-cliente
   ```
2. Adicione os arquivos do site (`index.html`, `assets/`, etc.) dentro dessa pasta.
3. Se desejar que o site apareça no catálogo do hub principal, adicione o card correspondente no `index.html` da raiz.
4. Envie as alterações para a branch `main`:
   ```bash
   git add .
   git commit -m "feat: adiciona site do cliente <nome>"
   git push origin main
   ```
5. O site estará disponível em instantes no endereço:
   `https://ad-sites.github.io/<nome-do-cliente>/`
