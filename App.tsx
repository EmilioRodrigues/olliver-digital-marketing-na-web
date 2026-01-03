import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Differentiator from './components/Differentiator';
import Benefits from './components/Benefits';
import Authority from './components/Authority';
import EbookCTA from './components/EbookCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-slate-50 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <EbookCTA />
        <Differentiator />
        <Benefits />
        <Authority />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;