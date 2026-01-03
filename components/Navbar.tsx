import React, { useState, useEffect } from 'react';
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/95 backdrop-blur-sm border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
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
              Solicitar Diagnóstico Gratuito
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

export default Navbar;