import React from 'react';
import { Search, PenTool, Rocket } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Understand the problem",
      desc: "I map your workflow and find friction points.",
      icon: Search
    },
    {
      number: "02",
      title: "Design the system",
      desc: "I create a clear architecture before building.",
      icon: PenTool
    },
    {
      number: "03",
      title: "Ship reliable automation",
      desc: "I deploy, test, document, and support the system.",
      icon: Rocket
    }
  ];

  return (
    <section id="process" className="bg-brand-black border-y border-brand-charcoal py-24 md:py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-teal/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Dashed Path Background (Mobile/Desktop distinct) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <svg className="w-full h-full" preserveAspectRatio="none">
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="10 10" className="text-brand-gray hidden md:block" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="10 10" className="text-brand-gray md:hidden" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-teal text-sm font-bold tracking-widest uppercase mb-4 block">Process</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">How I Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-2xl bg-brand-black border border-brand-charcoal flex items-center justify-center mb-8 relative group-hover:border-brand-teal transition-all duration-500 shadow-2xl shadow-brand-black">
                <span className="absolute -top-3 bg-brand-black px-2 text-xs font-bold text-brand-charcoal group-hover:text-brand-teal transition-colors border border-brand-charcoal group-hover:border-brand-teal rounded">
                    {step.number}
                </span>
                <step.icon className="w-8 h-8 text-brand-white group-hover:text-brand-teal transition-colors duration-300 transform group-hover:scale-110" strokeWidth={1.5} />
                
                {/* Connecting dots for tech feel */}
                <div className="absolute -right-12 top-1/2 w-8 h-px bg-brand-charcoal hidden md:block opacity-50"></div>
                {index !== 2 && <div className="absolute right-0 top-1/2 translate-x-1/2 w-2 h-2 bg-brand-black border border-brand-charcoal rounded-full z-20 hidden md:block"></div>}
              </div>
              
              <h3 className="text-xl font-display font-bold mb-4 group-hover:text-brand-teal transition-colors">{step.title}</h3>
              <p className="text-brand-gray text-sm max-w-xs mx-auto leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;