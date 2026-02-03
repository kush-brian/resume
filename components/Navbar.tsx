import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-brand-black/90 backdrop-blur-md border-b border-brand-charcoal py-4'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Hexagon className="text-brand-teal w-8 h-8 group-hover:rotate-180 transition-transform duration-500" strokeWidth={1.5} />
          <span className="font-display font-bold text-xl tracking-tight">KURIA</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-gray hover:text-brand-teal transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href={`tel:${import.meta.env.VITE_PHONE}`}
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-widest border border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-brand-black transition-all duration-300"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-black border-b border-brand-charcoal p-6 flex flex-col gap-6 md:hidden shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-display text-brand-white hover:text-brand-teal"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;