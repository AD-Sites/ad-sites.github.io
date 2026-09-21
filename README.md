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
├── daniela-psicologa/           # Cliente: Daniela Wernhart (Psicologia)
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
