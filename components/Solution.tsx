import React from 'react';
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
              Uma abordagem estratégica para quem busca autoridade nacional e vendas online, mas também "visibilidade no seu bairro".
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
                  Para qualquer empresa, o Google Perfil de Empresa (antigo Google Meu Negócio) é a uma "carteira de identidade" digital. Otimizamos seu perfil para que sua empresa apareça nas buscas do Google Maps.
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

export default Solution;