import React from 'react';
import Button from './Button';
import Reveal from './Reveal';
import { BookOpen } from 'lucide-react';

const EbookCTA: React.FC = () => {
    return (
        <section className="py-20 bg-slate-900 border-t border-slate-800">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal width="100%">
                    <div className="relative bg-brand-900/20 border border-brand-500/30 rounded-3xl p-8 md:p-12 text-center overflow-hidden group">

                        {/* Background Glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-500/5 blur-3xl -z-10 group-hover:bg-brand-500/10 transition-colors duration-500"></div>

                        <div className="flex flex-col items-center z-10 relative">
                            <div className="bg-brand-500/20 p-4 rounded-full mb-6">
                                <BookOpen className="w-8 h-8 text-brand-400" />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Baixe o Manual de Bolso do Negócio Local
                            </h2>

                            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                                Um guia prático e gratuito para dominar o posicionamento local e atrair clientes todos os dias.
                            </p>

                            <Button
                                onClick={() => window.open('https://manualdonegociolocal.com.br', '_blank')}
                                className="px-8 py-4 text-lg shadow-lg hover:shadow-brand-500/20"
                                icon
                            >
                                Download Gratuito
                            </Button>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default EbookCTA;
