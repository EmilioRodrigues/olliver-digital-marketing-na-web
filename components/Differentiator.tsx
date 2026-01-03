import React from 'react';
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

export default Differentiator;