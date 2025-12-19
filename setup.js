const fs = require('fs');
const path = require('path');

const files = {
  'index.tsx': `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,

  'metadata.json': `{
  "name": "Olliver Digital",
  "description": "Site profissional para agência de SEO Local e Otimização de Google Meu Negócio, focado em alta conversão e autoridade.",
  "requestFramePermissions": []
}`,

  'index.html': `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Olliver Digital | SEO Local e Marketing no Google Maps</title>
    <meta name="description" content="Domine o Google Maps com a Olliver Digital. Consultoria especializada em SEO Local, Otimização de Perfil de Empresa (GBP) e Marketing na Web. Atendimento online para todo Brasil." />
    <meta name="keywords" content="Google Perfil de Empresa, SEO Local, Google Maps, Otimização GBP, Consultoria SEO, Marketing na Web, Gestão de Tráfego Orgânico" />
    <meta name="robots" content="index, follow" />
    
    <!-- Canonical URL - Crucial para SEO -->
    <link rel="canonical" href="https://olliverdigitalmarketingnaweb.netlify.app" />
    
    <!-- Open Graph / Facebook / WhatsApp -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://olliverdigitalmarketingnaweb.netlify.app" />
    <meta property="og:title" content="Olliver Digital | Domine o Google Maps na Sua Cidade" />
    <meta property="og:description" content="Estratégia avançada de SEO Local e Marketing na Web. Aumente seu faturamento com tráfego qualificado no Google." />
    <meta property="og:image" content="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" />
    <meta property="og:site_name" content="Olliver Digital" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://olliverdigitalmarketingnaweb.netlify.app" />
    <meta property="twitter:title" content="Olliver Digital | Especialistas em Google Perfil de Empresa" />
    <meta property="twitter:description" content="Consultoria de SEO Local e Marketing Digital para empresas que querem liderar o mercado regional." />
    <meta property="twitter:image" content="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" />

    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              brand: {
                50: '#f0fdfa',
                100: '#ccfbf1',
                200: '#99f6e4',
                300: '#5eead4',
                400: '#2dd4bf',
                500: '#14b8a6',
                600: '#0d9488',
                700: '#0f766e',
                800: '#115e59',
                900: '#134e4a',
                950: '#042f2e',
              },
              dark: {
                900: '#0f172a',
                800: '#1e293b',
                700: '#334155',
              }
            },
            fontFamily: {
              sans: ['Inter', 'sans-serif'],
            },
            animation: {
              'blob': 'blob 7s infinite',
              'gradient-x': 'gradient-x 3s ease infinite',
            },
            keyframes: {
              blob: {
                '0%': { transform: 'translate(0px, 0px) scale(1)' },
                '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                '100%': { transform: 'translate(0px, 0px) scale(1)' },
              },
              'gradient-x': {
                '0%, 100%': {
                  'background-size': '200% 200%',
                  'background-position': 'left center'
                },
                '50%': {
                  'background-size': '200% 200%',
                  'background-position': 'right center'
                },
              },
            }
          }
        }
      }
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
      body {
        font-family: 'Inter', sans-serif;
        background-color: #0f172a;
        color: #f8fafc;
        scroll-behavior: smooth;
      }
      
      /* Premium Scrollbar */
      ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-track {
        background: #0f172a;
      }
      ::-webkit-scrollbar-thumb {
        background: #1e293b;
        border-radius: 5px;
        border: 2px solid #0f172a;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #2dd4bf;
      }

      /* Brand Text Selection */
      ::selection {
        background: #2dd4bf;
        color: #0f172a;
      }

      .gradient-text {
        background: linear-gradient(to right, #2dd4bf, #3b82f6, #2dd4bf);
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: gradient 3s linear infinite;
      }
      
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        100% { background-position: 200% 50%; }
      }
    </style>
  <script type="importmap">
{
  "imports": {
    "react/": "https://esm.sh/react@^19.2.3/",
    "react": "https://esm.sh/react@^19.2.3",
    "react-dom/": "https://esm.sh/react-dom@^19.2.3/",
    "lucide-react": "https://esm.sh/lucide-react@^0.562.0"
  }
}
</script>
<!-- Schema Markup (JSON-LD) updated for Online/National Authority -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  "name": "Olliver Digital",
  "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
  "description": "Consultoria estratégica de SEO e Otimização de Perfil do Google com atendimento online para todo o Brasil e exterior.",
  "url": "https://olliverdigitalmarketingnaweb.netlify.app",
  "telephone": "+5585986187858",
  "priceRange": "$$",
  "sameAs": [
    "https://www.instagram.com/olliverdigital_marketingnaweb"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "BR"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Brasil"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  }
}
</script>
</head>
  <body>
    <div id="root"></div>
  </body>
</html>`,

  'App.tsx': `import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Differentiator from './components/Differentiator';
import Benefits from './components/Benefits';
import Authority from './components/Authority';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-slate-50 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Differentiator />
        <Benefits />
        <Authority />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;`,

  'components/Button.tsx': `import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  icon?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  icon = false,
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "border-transparent text-white bg-brand-600 hover:bg-brand-700 shadow-lg shadow-brand-900/50",
    secondary: "border-transparent text-brand-900 bg-brand-200 hover:bg-brand-300",
    outline: "border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={\`\${baseStyles} \${variants[variant]} \${widthClass} \${className}\`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 -mr-1 h-5 w-5" />}
    </button>
  );
};

export default Button;`,

  'components/Navbar.tsx': `import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const whatsappLink = "https://wa.me/5585986187858?text=Ol%C3%A1%2C+vim+pelo+site+da+Olliver+Digital+e+gostaria+de+um+diagn%C3%B3stico+de+visibilidade.";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={\`fixed w-full z-50 transition-all duration-300 \${scrolled ? 'bg-dark-900/95 backdrop-blur-sm border-b border-slate-800 py-3' : 'bg-transparent py-5'}\`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <span className="text-2xl font-bold text-white tracking-tighter">
              Olliver<span className="text-brand-400">Digital</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('problema')} className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
              O Problema
            </button>
            <button onClick={() => scrollToSection('sistema')} className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
              O Sistema
            </button>
            <button onClick={() => scrollToSection('diferenciais')} className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
              Diferenciais
            </button>
            <Button 
              variant="primary" 
              onClick={() => window.open(whatsappLink, '_blank')}
              className="py-2 px-4 text-sm"
            >
              Diagnóstico Gratuito
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection('problema')} 
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
            >
              O Problema
            </button>
            <button 
              onClick={() => scrollToSection('sistema')} 
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
            >
              O Sistema
            </button>
            <button 
              onClick={() => scrollToSection('diferenciais')} 
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
            >
              Diferenciais
            </button>
            <div className="pt-4 pb-2 px-3">
              <Button 
                variant="primary" 
                fullWidth 
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                Diagnóstico Gratuito
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;`,

  'components/Hero.tsx': `import React from 'react';
import Button from './Button';
import { ChevronDown, Globe, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappLink = "https://wa.me/5585986187858?text=Ol%C3%A1%2C+vim+pelo+site+da+Olliver+Digital+e+gostaria+de+um+diagn%C3%B3stico+de+visibilidade.";

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
      {/* Background Image with Overlay */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-slate-900">
        <img 
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000" 
          alt="City Lights - Local SEO" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Modern Dark Overlay - Reduced opacity to show image */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        
        <div className="flex justify-center w-full">
          <div className="flex flex-col items-center gap-4 mb-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/40 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Agenda Aberta: Março/2025
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-3">
              <div className="inline-flex items-center space-x-2 bg-slate-800/60 border border-slate-700 rounded-full px-4 py-1.5 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-brand-400" />
                <span className="text-sm font-medium text-brand-100 uppercase tracking-wide">Especialistas em GBP</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-blue-900/40 border border-blue-800 rounded-full px-4 py-1.5 backdrop-blur-sm">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-100 uppercase tracking-wide">Atendimento Online Brasil e Exterior</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-2xl">
            SEO Local através do <br className="hidden lg:block" />
            <span className="gradient-text pb-2">Google Perfil de Empresa</span>
          </h1>
        </div>
        
        <div className="w-full">
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-200 leading-relaxed font-light drop-shadow-md">
            Sua empresa no topo do <strong>Google Maps</strong> e da Pesquisa Local. 
            Aumente seu faturamento atraindo clientes qualificados na sua região através de uma estratégia avançada de Otimização de Perfil (GBP) e SEO de Autoridade.
          </p>
        </div>

        <div className="w-full">
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => window.open(whatsappLink, '_blank')} icon className="px-8 py-4 text-lg shadow-brand-500/20 shadow-2xl hover:shadow-brand-500/40 transform hover:-translate-y-1">
              Quero dominar o Google Maps
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('sistema')?.scrollIntoView({behavior: 'smooth'})} className="px-8 py-4 text-lg bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/80 border-slate-500/50">
              Como funciona a Consultoria
            </Button>
          </div>
        </div>

        <div className="w-full">
          <div className="mt-16 flex justify-center opacity-70 cursor-pointer" onClick={() => document.getElementById('problema')?.scrollIntoView({behavior: 'smooth'})}>
            <ChevronDown className="w-8 h-8 text-slate-400 hover:text-brand-400 transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;`,

  'components/Problem.tsx': `import React from 'react';
import Reveal from './Reveal';
import { AlertTriangle, TrendingDown, EyeOff, Globe2 } from 'lucide-react';

const Problem: React.FC = () => {
  const problems = [
    {
      icon: <EyeOff className="w-8 h-8 text-red-400" />,
      title: "Invisibilidade Online",
      description: "Seu cliente ideal está procurando seus serviços no Google agora, mas não encontra sua empresa. Quem não é visto online, não vende."
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-orange-400" />,
      title: "Instabilidade de Leads",
      description: "Você vive de indicações ou postagens aleatórias. Sem um funil de busca ativo, você não tem controle sobre seu faturamento mensal."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-yellow-400" />,
      title: "Marketing sem Retorno",
      description: "Já gastou com anúncios que param de funcionar quando a verba acaba, ou agências que focam em 'likes' e não em clientes qualificados."
    },
    {
      icon: <Globe2 className="w-8 h-8 text-purple-400" />,
      title: "Alcance Limitado",
      description: "Você tem potencial para atender o Brasil todo ou brasileiros no exterior, mas sua estrutura atual te prende apenas ao seu bairro."
    }
  ];

  return (
    <section id="problema" className="py-20 bg-slate-900 border-y border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sua empresa está escondida no digital?
            </h2>
          </Reveal>
          <Reveal width="100%" delay={200}>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Não importa se você está no Brasil ou no exterior: problemas de posicionamento 
              estrutural impedem que clientes qualificados encontrem sua solução.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((item, index) => (
            <Reveal 
              key={index} 
              delay={index * 100} 
              className="h-full"
              // First two slide from left, last two slide from right for a "closing in" effect
              direction={index < 2 ? 'left' : 'right'} 
            >
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all hover:bg-slate-800 group h-full">
                <div className="mb-6 p-3 bg-slate-900 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal width="100%" delay={600}>
          <div className="mt-16 bg-red-900/20 border border-red-900/50 rounded-xl p-6 md:p-8 text-center max-w-3xl mx-auto">
            <p className="text-lg md:text-xl font-medium text-red-200">
              <span className="font-bold">Atenção:</span> Empresas com baixa autoridade digital perdem credibilidade imediata. Hoje, <span className="text-white font-bold decoration-red-500 underline">93% das jornadas de compra</span> começam com uma busca online.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Problem;`,

  'components/Solution.tsx': `import React from 'react';
import Reveal from './Reveal';
import { ShieldCheck, Search, Cpu } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section id="sistema" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-900/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Reveal width="100%">
            <span className="text-brand-400 font-semibold tracking-wider uppercase text-sm">Metodologia Exclusiva</span>
            <h2 className="mt-2 text-3xl md:text-5xl font-bold text-white">
              Sistema Olliver Digital™
            </h2>
          </Reveal>
          <Reveal width="100%" delay={200}>
            <p className="mt-4 text-xl text-slate-400 max-w-3xl mx-auto">
              Uma abordagem estratégica para quem busca autoridade nacional e vendas online, não apenas "visibilidade de bairro".
            </p>
          </Reveal>
        </div>

        <div className="space-y-24">
          {/* Pillar 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 order-2 md:order-1">
              <Reveal delay={200}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-500/20 text-brand-400 font-bold text-xl border border-brand-500/30">1</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Reputação e Confiança Google</h3>
                </div>
                <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                  Mesmo para negócios online, o Perfil do Google (antigo GMN) é a sua "carteira de identidade" digital. Otimizamos sua presença para transmitir máxima confiança.
                </p>
                <ul className="space-y-3">
                  {['Validação de legitimidade para o Google', 'Gestão de prova social (Reviews) para alta conversão', 'Posicionamento de marca premium'].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-300">
                      <div className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="flex-1 order-1 md:order-2 flex justify-center">
              <Reveal delay={400}>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-1 rounded-2xl border border-slate-700 w-full max-w-md aspect-video flex items-center justify-center group">
                   <div className="absolute inset-0 bg-brand-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <ShieldCheck className="w-24 h-24 text-brand-500 opacity-80" />
                </div>
              </Reveal>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
             <div className="flex-1 flex justify-center order-1">
              <Reveal delay={200}>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-1 rounded-2xl border border-slate-700 w-full max-w-md aspect-video flex items-center justify-center group">
                   <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <Search className="w-24 h-24 text-blue-500 opacity-80" />
                </div>
              </Reveal>
            </div>
            <div className="flex-1 order-2">
              <Reveal delay={400}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xl border border-blue-500/30">2</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">SEO Estratégico Nacional</h3>
                </div>
                <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                  Rompemos barreiras geográficas. Posicionamos sua empresa para termos de busca de alta intenção, atraindo clientes do Brasil inteiro ou brasileiros no exterior.
                </p>
                <ul className="space-y-3">
                  {['Palavras-chave de fundo de funil (alta conversão)', 'Estratégia para expansão de território digital', 'Captura de demanda qualificada'].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-300">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 order-2 md:order-1">
              <Reveal delay={200}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 font-bold text-xl border border-purple-500/30">3</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Preparação para Modo IA (SGE)</h3>
                </div>
                <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                  O futuro da busca é conversacional. Estruturamos seus dados para que a IA do Google entenda você como a autoridade do nicho e recomende seu serviço.
                </p>
                <ul className="space-y-3">
                  {['Estruturação semântica para leitura por IA', 'Autoridade de tópico (Topical Authority)', 'Blindagem contra atualizações de algoritmo'].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-300">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="flex-1 order-1 md:order-2 flex justify-center">
              <Reveal delay={400}>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-1 rounded-2xl border border-slate-700 w-full max-w-md aspect-video flex items-center justify-center group">
                   <div className="absolute inset-0 bg-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <Cpu className="w-24 h-24 text-purple-500 opacity-80" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;`,

  'components/Differentiator.tsx': `import React from 'react';
import Reveal from './Reveal';
import { Check, X } from 'lucide-react';

const Differentiator: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 bg-slate-800/30 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              A Diferença é Brutal
            </h2>
            <p className="text-slate-400">
              Veja por que o sistema Olliver Digital supera agências genéricas e "sobrinhos do marketing".
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Others */}
          <Reveal delay={200}>
            <div className="bg-red-900/10 border border-red-900/30 rounded-2xl p-8 relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <X className="w-32 h-32 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-red-200 mb-6">Marketing Comum</h3>
              <ul className="space-y-4">
                {[
                  'Foco em "likes" e métricas de vaidade',
                  'Postagens aleatórias sem estratégia de busca',
                  'Gestão superficial de perfil (apenas preencher dados)',
                  'Promessas vagas sem previsibilidade',
                  'Vulnerável a qualquer mudança do Google'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-400">
                    <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Olliver */}
          <Reveal delay={400}>
            <div className="bg-brand-900/10 border border-brand-500/30 rounded-2xl p-8 relative overflow-hidden shadow-2xl shadow-black/50 h-full">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                <Check className="w-32 h-32 text-brand-500" />
              </div>
              <h3 className="text-2xl font-bold text-brand-100 mb-6">Olliver Digital</h3>
              <ul className="space-y-4">
                {[
                  'Foco total em ligações, rotas e vendas',
                  'Engenharia reversa do algoritmo local',
                  'Otimização estrutural profunda (Categories & Attributes)',
                  'Sistema previsível de aquisição de clientes',
                  'AI-Ready: Preparado para o Google SGE'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-white">
                    <Check className="w-5 h-5 text-brand-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Differentiator;`,

  'components/Benefits.tsx': `import React from 'react';
import Reveal from './Reveal';
import { Target, Lock, BarChart3, Globe } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <BarChart3 className="w-10 h-10 text-brand-400" />,
      title: "Previsibilidade",
      description: "Tenha um sistema que gera demanda constante para o seu negócio, sem depender de 'sorte'."
    },
    {
      icon: <Globe className="w-10 h-10 text-brand-400" />,
      title: "Presença Nacional",
      description: "Não se limite ao seu bairro. Torne-se a referência do seu nicho e atenda clientes de qualquer lugar."
    },
    {
      icon: <Lock className="w-10 h-10 text-brand-400" />,
      title: "Segurança Digital",
      description: "Sua empresa blindada contra atualizações de algoritmo e preparada para a Era da IA (SGE)."
    },
    {
      icon: <Target className="w-10 h-10 text-brand-400" />,
      title: "Clientes Qualificados",
      description: "Atraia quem já está procurando exatamente o que você vende, aumentando sua taxa de conversão."
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Por que escolher a Olliver Digital?
            </h2>
          </Reveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Reveal key={index} delay={index * 150} className="h-full">
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-brand-500/50 transition-colors h-full">
                <div className="mb-4 bg-slate-800 w-16 h-16 rounded-lg flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;`,

  'components/Authority.tsx': `import React from 'react';
import Button from './Button';
import Reveal from './Reveal';

const Authority: React.FC = () => {
  const whatsappLink = "https://wa.me/5585986187858?text=Ol%C3%A1%2C+vim+pelo+site+da+Olliver+Digital+e+gostaria+de+um+diagn%C3%B3stico+de+visibilidade.";

  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <Reveal width="100%">
          <div className="relative bg-slate-900/50 border border-slate-700 rounded-3xl p-8 md:p-12 overflow-hidden group hover:border-brand-500/30 transition-all duration-500">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-500/5 blur-3xl -z-10 group-hover:bg-brand-500/10 transition-colors duration-500"></div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Sua Concorrência Não Está Esperando. <br/>
              <span className="text-brand-400">Por que você deveria?</span>
            </h2>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Cada dia que seu negócio passa invisível no Google é dinheiro deixado na mesa. 
              Nossa agenda para diagnósticos estratégicos é limitada para manter a qualidade da análise.
            </p>

            <div className="flex flex-col items-center space-y-6">
              <Button 
                className="w-full md:w-auto px-8 py-5 text-xl font-bold shadow-lg hover:shadow-brand-500/30 transition-all duration-300 transform hover:scale-105" 
                onClick={() => window.open(whatsappLink, '_blank')}
                icon
              >
                Solicitar Diagnóstico Gratuito
              </Button>
              <div className="flex items-center gap-2 text-slate-500 text-sm bg-slate-950/50 px-4 py-2 rounded-full border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Resposta média em menos de 2 horas</span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
           <Reveal delay={200} className="w-full">
             <div className="pt-8 md:pt-0">
               <div className="text-4xl font-bold text-white mb-2">3 Pilares</div>
               <div className="text-slate-500 text-sm uppercase tracking-wider font-medium">Metodologia Exclusiva</div>
             </div>
           </Reveal>
           <Reveal delay={400} className="w-full">
             <div className="pt-8 md:pt-0">
               <div className="text-4xl font-bold text-white mb-2">100%</div>
               <div className="text-slate-500 text-sm uppercase tracking-wider font-medium">Foco em Estrutura</div>
             </div>
           </Reveal>
           <Reveal delay={600} className="w-full">
             <div className="pt-8 md:pt-0">
               <div className="text-4xl font-bold text-white mb-2">SGE Ready</div>
               <div className="text-slate-500 text-sm uppercase tracking-wider font-medium">Pronto para IA</div>
             </div>
           </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Authority;`,

  'components/Footer.tsx': `import React from 'react';
import { Linkedin, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 flex flex-col items-center">
            <span className="text-2xl font-bold text-white tracking-tighter">
              Olliver<span className="text-brand-600">Digital</span>
            </span>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
              Consultoria estratégica de SEO e Posicionamento Digital. 
              Atendimento 100% online para empresas que buscam autoridade no Brasil e no exterior.
            </p>
          </div>

          {/* Links */}
          <div className="col-span-1 flex flex-col items-center">
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#problema" className="hover:text-brand-400 transition-colors">O Problema</a></li>
              <li><a href="#sistema" className="hover:text-brand-400 transition-colors">Metodologia</a></li>
              <li><a href="#diferenciais" className="hover:text-brand-400 transition-colors">Por que nós?</a></li>
              <li><a href="#contato" className="hover:text-brand-400 transition-colors">Diagnóstico</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 flex flex-col items-center">
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <div className="flex space-x-4 mb-4 justify-center">
              <a href="https://www.instagram.com/olliverdigital_marketingnaweb" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="mailto:ollivergraficadigital@gmail.com" className="text-slate-400 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Olliver Digital. <br/>Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;`,

  'components/FloatingWhatsApp.tsx': `import React from 'react';

const FloatingWhatsApp: React.FC = () => {
  const whatsappLink = "https://wa.me/5585986187858?text=Ol%C3%A1%2C+vim+pelo+site+da+Olliver+Digital+e+gostaria+de+um+diagn%C3%B3stico+de+visibilidade.";

  return (
    <a 
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce-slow"
      aria-label="Falar no WhatsApp"
      style={{ boxShadow: "0 4px 14px 0 rgba(37, 211, 102, 0.39)" }}
    >
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;`,

  'components/Reveal.tsx': `import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number; // Delay in ms
  className?: string;
  direction?: 'bottom' | 'left' | 'right';
}

const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = 'fit-content', 
  delay = 0,
  className = "",
  direction = 'bottom'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      {
        threshold: 0.15, // Trigger slightly earlier (15% visibility) for a snappier feel
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getTransformClass = () => {
    if (isVisible) return 'translate-x-0 translate-y-0 opacity-100';
    
    switch (direction) {
      case 'left': return '-translate-x-20 opacity-0';
      case 'right': return 'translate-x-20 opacity-0';
      case 'bottom': default: return 'translate-y-8 opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      style={{ 
        width,
        transitionDelay: \`\${delay}ms\`
      }}
      className={\`transition-all duration-1000 ease-out transform \${getTransformClass()} \${className}\`}
    >
      {children}
    </div>
  );
};

export default Reveal;`
};

// Function to write files
for (const [filePath, content] of Object.entries(files)) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content);
  console.log(`Created: ${filePath}`);
}

console.log('Project setup complete!');