# Olliver Digital - Landing Page

[![React](https://img.shields.io/badge/React-19.0-blue?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

Landing Page institucional de alta conversão desenvolvida para a **Olliver Digital**, uma consultoria estratégica de SEO e Posicionamento Digital. O projeto foca em autoridade, captura de leads e otimização para motores de busca (SEO Local).

## 🚀 Funcionalidades Principais

### 🎯 Estratégia e Conversão (CRO)
*   **Hero Section de Alto Impacto**: Headline e subheadline refinadas para atacar a dor do cliente (invisibilidade no Google) e oferecer a solução imediata.
*   **Lead Magnet Integrado**: Componente dedicado (`EbookCTA`) para captura de leads através do "Manual de Bolso do Negócio Local".
*   **CTAs Padronizados**: Botões de chamada para ação ("Solicitar Diagnóstico Gratuito") distribuídos estrategicamente para maximizar a conversão via WhatsApp.
*   **Gatilhos Mentais**: Uso de escassez ("Apenas 2 vagas") e autoridade (Badges de especialista).

### 🎨 UI/UX e Design
*   **Design Premium**: Estética moderna utilizando Glassmorphism (efeitos de vidro), gradientes suaves e tipografia otimizada (Inter).
*   **Animações de Entrada**: Componente reutilizável `Reveal.tsx` para animações suaves de scroll (fade-up, fade-in).
*   **Totalmente Responsivo**: Layout fluido que se adapta perfeitamente a dispositivos móveis, tablets e desktops.

### 🔍 SEO e Performance
*   **SEO Local (JSON-LD)**: Implementação de Schema.org para `MarketingAgency`, incluindo dados geográficos (Fortaleza/CE) e fiscais (CNPJ) para fortalecer o rankeamento local.
*   **Metadados Robustos**: Configuração completa de Open Graph (OG Tags), descrições e títulos otimizados para compartilhamento social.
*   **Performance (Vite)**: Build otimizado para carregamento instantâneo.

## 🛠️ Tecnologias Utilizadas

*   **Core**: React 19 + TypeScript
*   **Semântica**: HTML5 semântico
*   **Estilização**: Tailwind CSS (Utilitários + Configuração Customizada de Cores `brand`)
*   **Ícones**: Lucide React
*   **Build Tool**: Vite

## 📂 Estrutura do Projeto

```
src/
├── components/        # Componentes reutilizáveis (Hero, Navbar, Footer, etc.)
│   ├── Authority.tsx  # Seção de Autoridade e Prova Social
│   ├── EbookCTA.tsx   # [Novo] Seção de Captura de Lead (Ebook)
│   ├── Reveal.tsx     # [Core] Componente de animação
│   └── ...
├── App.tsx           # Componente Raiz e orquestração de seções
├── index.css         # Estilos globais e diretivas do Tailwind
└── main.tsx          # Ponto de entrada da aplicação
```

## 📜 Histórico de Alterações (Changelog)

### [v1.1.0] - Refatoração CRO & Identidade - 02/01/2026
Uma atualização focada em elevar a percepção de autoridade e corrigir a comunicação de venda.

*   **✨ Novas Funcionalidades:**
    *   Adição da seção **EbookCTA** para download do "Manual de Bolso".
    *   Integração total do **CNPJ** e localização no Rodapé e nos metadados (SEO).
*   **♻️ Refatoração:**
    *   **Hero**: Nova headline focada em "Primeira escolha no Google".
    *   **Problem Section**: Ajuste de copy no card "Instabilidade de Leads" focando na dependência de algoritmos.
    *   **CTAs**: Padronização global para "Solicitar Diagnóstico Gratuito".
*   **🐛 Correções:**
    *   Correção de typos ("Goole" -> "Google").
    *   Ajuste de badges de escassez para maior credibilidade.

### [v1.0.0] - Lançamento Inicial
*   Estrutura base da Landing Page.
*   Seções de Problema, Solução, Diferenciais e Benefícios.
*   Integração inicial com WhatsApp.

---

<p align="center">
  Desenvolvido por <strong>Olliver Digital</strong>
</p>
