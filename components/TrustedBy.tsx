import React from 'react';
import { Network, Database, Layers, Box } from 'lucide-react';

const TrustedBy: React.FC = () => {
  const clients = [
    { name: 'BioMaps', icon: Network },
    { name: 'SchoolLabs', icon: Database },
    { name: 'TryOn_Studio', icon: Layers },
    { name: 'Custom Clients', icon: Box },
  ];

  return (
    <section className="border-y border-brand-charcoal bg-brand-black/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-brand-gray text-sm tracking-widest uppercase font-medium whitespace-nowrap">
          Systems built for
        </p>
        
        <div className="flex flex-wrap justify-center md:justify-end gap-12 md:gap-16 w-full opacity-60">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center gap-3 group">
              <client.icon className="w-6 h-6 text-brand-white group-hover:text-brand-teal transition-colors" strokeWidth={1.5} />
              <span className="text-lg font-display font-semibold text-brand-white group-hover:text-brand-white transition-colors">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;