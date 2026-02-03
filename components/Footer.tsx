import React from 'react';
import { Mail, Linkedin, Github, MapPin, Hexagon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black border-t border-brand-charcoal py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">

        {/* Brand */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <Hexagon className="text-brand-teal w-6 h-6" strokeWidth={1.5} />
            <span className="font-display font-bold text-xl tracking-tight">KURIA</span>
          </div>
          <p className="text-brand-gray text-sm">
            AI Automation Engineer <br />
            Built with precision, powered by AI.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-6">
            <a href={`mailto:${import.meta.env.VITE_EMAIL}`} className="text-brand-gray hover:text-brand-teal transition-colors"><Mail className="w-5 h-5" /></a>
            <a href={import.meta.env.VITE_LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-brand-teal transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href={import.meta.env.VITE_GITHUB} target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-brand-teal transition-colors"><Github className="w-5 h-5" /></a>
          </div>
          <div className="flex items-center gap-2 text-brand-gray text-xs uppercase tracking-widest">
            <MapPin className="w-3 h-3 text-brand-teal" />
            Nairobi, Kenya
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-charcoal/50 text-center md:text-left">
        <p className="text-brand-charcoal text-xs">© {new Date().getFullYear()} Kuria. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;