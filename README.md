# Design Playbook — Sistema de Documentação e Operação Criativa

Sistema interno desenvolvido para organizar direção de design, operação criativa e documentação por cliente.

O objetivo é transformar conhecimento disperso (memória, experiência, referências soltas) em um sistema consultável, estruturado e vivo.

---

## ✨ Visão

Este projeto nasce de uma necessidade real:

- reduzir retrabalho
- facilitar onboarding de designers
- garantir consistência visual
- centralizar decisões e aprendizados
- diminuir dependência de memória individual

Não é apenas um repositório de assets ou brandbook.

É um **sistema de leitura, decisão e execução em design**.

---

## 🧱 Estrutura do Sistema

### 1. Playbook

Camadas estruturais da operação:

- Overview
- Accounts
- Allocation
- Briefing
- Rituals

Cada seção é construída como componente React, permitindo evolução contínua.

---

### 2. Documentação por cliente

Base viva de conhecimento por conta:

- Direção visual
- Regras e restrições
- Boas práticas
- Referências que performaram
- Notas operacionais

Rotas:
/documentacao → listagem de clientes
/documentacao/[slug] → documentação específica


---

## 🧠 Conceito central

O sistema parte de uma mudança importante:

> o problema não é mais gerar — é julgar

A documentação existe para:

- apoiar decisões
- reduzir erro evitável
- dar clareza antes da execução
- transformar repertório em sistema

---

## 🎨 Direção de Interface

- abordagem editorial (não SaaS genérico)
- foco em leitura e consulta
- layout leve, com respiro
- tipografia e conteúdo como protagonistas
- uso de cards como unidades de conhecimento

---

## ⚙️ Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

---

## 📁 Estrutura
app/
page.tsx
playbook/
documentacao/
page.tsx
[slug]/

data/
documentation.ts

components/
documentation/


---

## 🚀 Rodando o projeto

```bash
npm install
npm run dev
http://localhost:3000
```

🧪 Status

v0.1 — estrutura inicial funcional

Inclui:

App shell com sidebar
Página de documentação
Rota dinâmica /documentacao/[slug]
Layout editorial para páginas internas

🔜 Próximos passos
refinar galeria de referências (curadoria visual)
conectar dados reais de contas
melhorar navegação entre documentações
evoluir sistema de leitura (tags, contexto, filtros)
transformar documentação em ferramenta ativa de decisão

📌 Nota

Este projeto não busca ser apenas um sistema interno.

Ele explora a construção de:

sistemas de pensamento aplicados ao design

🧭 Autor

Andrê — Design, sistemas e investigação na interseção entre criação, operação e tecnologia.
