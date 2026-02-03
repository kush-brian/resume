import React from 'react';
import { Calendar, Github, FileText } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-5xl mx-auto text-center">
      <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-tight">
        Want your business <br />
        <span className="text-brand-teal">to run itself?</span>
      </h2>

      <p className="text-xl text-brand-gray mb-12 max-w-2xl mx-auto font-light">
        I’m currently accepting new projects for Q1. Let's discuss how we can automate your operations.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <a
          href={`tel:${import.meta.env.VITE_PHONE}`}
          className="flex items-center gap-3 px-8 py-4 bg-brand-teal text-brand-black font-bold uppercase tracking-wide hover:bg-brand-white transition-all duration-300 w-full md:w-auto justify-center"
        >
          <Calendar className="w-5 h-5" />
          Book a Call
        </a>

        <a
          href={import.meta.env.VITE_GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 border border-brand-charcoal text-brand-white font-bold uppercase tracking-wide hover:border-brand-teal hover:text-brand-teal transition-all duration-300 w-full md:w-auto justify-center bg-brand-charcoal/10"
        >
          <Github className="w-5 h-5" />
          View GitHub
        </a>
      </div>
    </section>
  );
};

export default CTA;