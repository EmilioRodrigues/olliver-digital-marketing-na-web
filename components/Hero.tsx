import React from 'react';
import Button from './Button';
import Reveal from './Reveal';
import { ChevronDown, Globe, ShieldCheck, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappLink = "https://wa.me/5585986187858?text=Ol%C3%A1%2C+vim+pelo+site+da+Olliver+Digital+e+gostaria+de+um+diagn%C3%B3stico+de+visibilidade.";

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <Reveal width="100%" className="flex justify-center">
          <div className="flex flex-col items-center gap-4 mb-8">
            {/* Status Badge - Scarcity Trigger */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider animate-pulse">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Agenda Aberta: Março/2025
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-3">
              <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-brand-400" />
                <span className="text-sm font-medium text-brand-100 uppercase tracking-wide">Especialistas em GBP</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-blue-900/30 border border-blue-800 rounded-full px-4 py-1.5 backdrop-blur-sm">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-100 uppercase tracking-wide">Atendimento Online Brasil e Exterior</span>
              </div>
            </div>
          </div>
        </Reveal>
        
        <Reveal width="100%" delay={200}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
            SEO Local através do <br className="hidden lg:block" />
            <span className="gradient-text pb-2">Google Perfil de Empresa</span>
          </h1>
        </Reveal>
        
        <Reveal width="100%" delay={400}>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed">
            Sua empresa no topo do <strong>Google Maps</strong> e da Pesquisa Local. 
            Aumente seu faturamento atraindo clientes qualificados na sua região através de uma estratégia avançada de Otimização de Perfil (GBP) e SEO de Autoridade.
          </p>
        </Reveal>

        <Reveal width="100%" delay={600}>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => window.open(whatsappLink, '_blank')} icon className="px-8 py-4 text-lg shadow-brand-500/20 shadow-2xl hover:shadow-brand-500/40 transform hover:-translate-y-1">
              Quero dominar o Google Maps
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('sistema')?.scrollIntoView({behavior: 'smooth'})} className="px-8 py-4 text-lg">
              Como funciona a Consultoria
            </Button>
          </div>
        </Reveal>

        <Reveal width="100%" delay={1000}>
          <div className="mt-16 animate-bounce flex justify-center opacity-50 cursor-pointer" onClick={() => document.getElementById('problema')?.scrollIntoView({behavior: 'smooth'})}>
            <ChevronDown className="w-8 h-8 text-slate-500 hover:text-brand-400 transition-colors" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;