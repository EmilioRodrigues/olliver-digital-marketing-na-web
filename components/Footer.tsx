import React from 'react';
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
              &copy; {new Date().getFullYear()} Olliver Digital. <br/>Todos os direitos reservados.<br/>
              <span className="block mt-2 text-xs text-slate-600">
                CNPJ: 64.104.526/0001-02<br/>
                Atuando de Fortaleza para o Mundo
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
