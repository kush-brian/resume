import React from 'react';
import { Bot, Workflow, Database, BarChart3, ArrowUpRight, Plus } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Intelligent Automation",
      description: "I connect CRMs, databases, APIs, and AI into reliable workflows that remove manual work.",
      icon: Workflow,
    },
    {
      title: "AI Agents & RAG",
      description: "I build AI assistants that understand your business context using documents, PDFs, and data.",
      icon: Bot,
    },
    {
      title: "Data & Integrations",
      description: "I make your tools talk to each other — Slack, WhatsApp, Google Sheets, CRMs, dashboards.",
      icon: Database,
    },
    {
      title: "Business Impact",
      description: "My systems save time, reduce errors, and let teams focus on real work.",
      icon: BarChart3,
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 relative">
      {/* Decorative Background Elements */}
      <div className="absolute left-6 top-24 text-brand-charcoal/50 hidden md:block"><Plus className="w-8 h-8" strokeWidth={1} /></div>
      <div className="absolute right-6 bottom-24 text-brand-charcoal/50 hidden md:block"><Plus className="w-8 h-8" strokeWidth={1} /></div>

      <div className="mb-16 md:mb-24 relative z-10">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          I don’t build tools — <br />
          <span className="text-brand-teal">I design systems.</span>
        </h2>
        <div className="h-1 w-20 bg-brand-teal mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group p-8 border border-brand-charcoal bg-brand-black/40 backdrop-blur-sm hover:border-brand-teal/50 transition-all duration-300 relative overflow-hidden"
          >
            {/* Corner Bracket Effect */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-charcoal group-hover:border-brand-teal transition-colors" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-charcoal group-hover:border-brand-teal transition-colors" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-charcoal group-hover:border-brand-teal transition-colors" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-charcoal group-hover:border-brand-teal transition-colors" />

            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
               <ArrowUpRight className="text-brand-teal w-5 h-5" />
            </div>
            
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded bg-brand-charcoal/50 text-brand-teal">
              <service.icon className="w-6 h-6" strokeWidth={1.5} />
            </div>
            
            <h3 className="text-xl font-display font-bold text-brand-white mb-4 group-hover:text-brand-teal transition-colors">
              {service.title}
            </h3>
            
            <p className="text-brand-gray text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;