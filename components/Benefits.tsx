import React from 'react';
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

export default Benefits;