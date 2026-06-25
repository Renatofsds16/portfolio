# 🚀 Portfolio Fullstack Dinâmico — Django REST Framework & Next.js

Este é um projeto de portfólio pessoal moderno e de alta performance, construído com uma arquitetura desacoplada (decoupled). O sistema utiliza **Django** no ecossistema de backend para fornecer uma API robusta e um painel de gerenciamento flexível, enquanto o frontend em **Next.js** garante uma experiência de usuário fluida, rápida e otimizada para SEO.

O grande diferencial deste projeto é o dinamismo: todas as informações exibidas na interface são gerenciadas em tempo real via painel administrativo, eliminando a necessidade de modificações diretas no código do frontend para cada nova atualização.

---

## 📸 Demonstração & Funcionalidades

- **Gerenciamento Centralizado:** Conteúdo 100% dinâmico controlado diretamente pelo Django Admin.
- **Interface Responsiva:** Design moderno e adaptável para qualquer tamanho de tela criado com Tailwind CSS.
- **Otimização de Performance:** Renderização híbrida do Next.js para carregamento ultrarrápido de páginas.
- **API Segura e Consistente:** Comunicação estruturada em JSON através do Django REST Framework.

---

## 🧠 Arquitetura e Conceito do Projeto

A aplicação foi desenhada seguindo as melhores práticas do desenvolvimento web moderno, separando as responsabilidades de forma clara:

1. **Camada de Dados e Regras de Negócio (Backend):** O Django atua como um Headless CMS. Ele expõe endpoints REST que entregam dados estruturados sobre projetos, habilidades, experiências acadêmicas/profissionais e informações de contato.
2. **Camada de Apresentação (Frontend):** O Next.js consome esses endpoints de forma eficiente, aproveitando recursos como o *App Router* e renderização otimizada para garantir excelente pontuação no Core Web Vitals (Performance, Acessibilidade e SEO).

---

## ⚙️ Stack Tecnológica

### 🖥️ Backend (API & Gerenciamento)
- **Django:** Framework web de alto nível para desenvolvimento rápido e seguro.
- **Django REST Framework (DRF):** Kit de ferramentas poderoso para construção de APIs Web robustas.
- **SQLite:** Banco de dados relacional leve e eficiente para desenvolvimento.
- **Pillow:** Biblioteca Python voltada para o processamento e otimização de uploads de imagens.

### 🎨 Frontend (Interface do Usuário)
- **Next.js (App Router):** Framework React com suporte nativo a Server Components e otimização de rotas.
- **React:** Biblioteca base para a construção de interfaces de usuário componentizadas.
- **TypeScript:** Superset JavaScript que adiciona tipagem estática, reduzindo bugs e melhorando a manutenção.
- **Tailwind CSS:** Framework CSS utilitário para estilização rápida, moderna e consistente.

---

## 📁 Estrutura de Diretórios do Projeto

Para garantir a escalabilidade do sistema, a estrutura foi organizada de forma modular:

```text
📂 portfolio-fullstack/
├── 📂 backend/               # Código-fonte do Django
│   ├── 📂 core/              # Configurações globais do projeto Django
│   ├── 📂 api/               # Aplicação responsável pelos Models, Views e Serializers
│   ├── 📄 manage.py          # Utilitário de linha de comando do Django
│   └── 📄 requirements.txt   # Dependências e bibliotecas Python
│
└── 📂 frontend/              # Código-fonte do Next.js
    ├── 📂 src/
    │   ├── 📂 app/           # Estrutura de rotas e páginas (App Router)
    │   ├── 📂 components/    # Componentes React reutilizáveis (Navbar, ProjectCard, etc.)
    │   └── 📂 services/      # Configuração de requisições de API (Ex: Axios ou Fetch)
    ├── 📄 package.json       # Gerenciador de dependências do Node.js
    └── 📄 tailwind.config.ts # Configurações personalizadas do Tailwind CSS