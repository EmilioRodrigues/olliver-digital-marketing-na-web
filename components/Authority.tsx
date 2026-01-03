import React from 'react';
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

export default Authority;