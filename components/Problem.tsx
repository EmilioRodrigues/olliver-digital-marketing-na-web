import React from 'react';
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
      description: "Dependência de algoritmos e postagens que não trazem clientes."
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

export default Problem;