import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';
import NeuralBackground from './components/NeuralBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white font-sans selection:bg-brand-teal selection:text-brand-black overflow-x-hidden relative">
      
      {/* Neural Data Flow Background */}
      <NeuralBackground />

      {/* Navbar sits on top */}
      <div className="relative z-50">
        <Navbar />
      </div>

      <main className="flex flex-col w-full relative z-10">
        <Hero />
        <TrustedBy />
        <Services />
        <Projects />
        <TechStack />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;