import React from 'react';
import Button from './Button';
import { ChevronDown, Globe, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappLink = "https://wa.me/5585986187858?text=Ol%C3%A1%2C+vim+pelo+site+da+Olliver+Digital+e+gostaria+de+um+diagn%C3%B3stico+de+visibilidade.";

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
      {/* Background image with tint + gradient shade + vignette for impact */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000')" }}
      >
        {/* Semi-opaque color tint to improve text contrast */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Gradient shade + radial vignette for more depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(2,6,23,0.15) 0%, rgba(2,6,23,0.6) 100%), radial-gradient(ellipse at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.7) 100%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">

        <div className="flex justify-center w-full">
          <div className="flex flex-col items-center gap-4 mb-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/40 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Apenas 2 vagas para diagnósticos gratuitos esta semana
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
            Seja a primeira escolha do seu cliente quando ele pesquisar no <br className="hidden lg:block" />
            <span className="gradient-text pb-2">Google</span>
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
              Solicitar Diagnóstico Gratuito
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('sistema')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 text-lg bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/80 border-slate-500/50">
              Como funciona?
            </Button>
          </div>
        </div>

        <div className="w-full">
          <div className="mt-16 flex justify-center opacity-70 cursor-pointer" onClick={() => document.getElementById('problema')?.scrollIntoView({ behavior: 'smooth' })}>
            <ChevronDown className="w-8 h-8 text-slate-400 hover:text-brand-400 transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
