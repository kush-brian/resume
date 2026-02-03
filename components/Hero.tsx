import React from 'react';
import { ArrowRight, CheckCircle2, CircuitBoard, Plus } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none -z-10 opacity-20 hidden md:block">
        {/* Outer Ring */}
        <div className="absolute inset-0 border border-brand-charcoal rounded-full animate-spin-slow dashed-border"></div>
        {/* Inner Ring */}
        <div className="absolute inset-20 border border-dashed border-brand-charcoal/50 rounded-full animate-spin-reverse-slow"></div>
        {/* Crosshairs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-brand-charcoal/30"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-brand-charcoal/30"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-teal/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-teal/5 blur-[100px] rounded-full -z-10 pointer-events-none" />

      {/* Decorative Plus Signs */}
      <div className="absolute top-24 left-10 text-brand-charcoal animate-pulse"><Plus className="w-6 h-6" /></div>
      <div className="absolute bottom-20 right-10 text-brand-charcoal animate-pulse delay-700"><Plus className="w-6 h-6" /></div>

      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-charcoal bg-brand-charcoal/30 text-brand-teal text-xs font-medium tracking-widest uppercase mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
            Available for New Projects
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
            Hey, I’m Kuria Brian. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-white to-brand-gray">
              I build AI Operating Systems.
            </span>
          </h1>

          <p className="text-brand-gray text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10 font-light">
            I design and deploy intelligent automation that connects tools, data, and AI into seamless workflows — turning messy operations into smart systems that run themselves.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#work"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-brand-white text-brand-black font-semibold text-sm uppercase tracking-wide hover:bg-brand-teal transition-all duration-300 w-full sm:w-auto"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`tel:${import.meta.env.VITE_PHONE}`}
              className="group flex items-center justify-center gap-3 px-8 py-4 border border-brand-charcoal text-brand-white font-semibold text-sm uppercase tracking-wide hover:border-brand-teal hover:text-brand-teal transition-all duration-300 w-full sm:w-auto bg-brand-charcoal/20 backdrop-blur-sm"
            >
              Book a Call
            </a>
          </div>
        </div>

        {/* Right Content - Visual/Image */}
        <div className="relative w-full max-w-md lg:max-w-sm shrink-0">
          <div className="aspect-square rounded-full overflow-hidden border border-brand-charcoal relative z-10 bg-brand-charcoal/50 group">
            {/* Placeholder for "Clean professional portrait" */}
            <img
              src="/assets/images/kuria-portrait.png"
              alt="Kuria Portrait"
              className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-700"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent pointer-events-none" />
          </div>

          {/* Floating Stats */}
          <div className="absolute -right-4 top-10 bg-brand-black/90 backdrop-blur border border-brand-charcoal p-4 shadow-xl z-20 max-w-[180px] hidden md:block">
            <div className="flex items-start gap-3">
              <CircuitBoard className="text-brand-teal w-5 h-5 mt-1" />
              <div>
                <div className="text-2xl font-display font-bold text-brand-white">1.5+</div>
                <div className="text-xs text-brand-gray uppercase tracking-wider">Years n8n</div>
              </div>
            </div>
          </div>

          <div className="absolute -left-8 bottom-20 bg-brand-black/90 backdrop-blur border border-brand-charcoal p-4 shadow-xl z-20 max-w-[180px] hidden md:block">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-brand-teal w-5 h-5 mt-1" />
              <div>
                <div className="text-2xl font-display font-bold text-brand-white">100%</div>
                <div className="text-xs text-brand-gray uppercase tracking-wider">Reliability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;