import React from 'react';
import { MessageSquare, MousePointerClick, Activity, Globe, ArrowRight, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "AI-Powered WhatsApp Brain",
      subtitle: "Flagship Project",
      icon: MessageSquare,
      description: "A multi-modal AI assistant that understands text, voice, images, and PDFs. Users can ask questions, upload documents, and get smart answers grounded in real business data.",
      features: ["RAG over PDFs", "Voice transcription", "Image understanding", "Smart retrieval"],
      impact: "Turned WhatsApp into a knowledge system, not just a chat app.",
      image: "/assets/images/project-whatsapp-ai.png"
    },
    {
      title: "Lead Generation Engine",
      subtitle: "Automation System",
      icon: MousePointerClick,
      description: "Built an automated system that extracts business leads from Google Maps, validates emails, and exports them to Google Sheets for outreach.",
      features: ["Scraped businesses", "Cleaned data", "Verified emails", "Auto-exported to Sheets"],
      impact: "Built a hands-off lead engine for outbound sales.",
      image: "/assets/images/project-lead-gen.png"
    },
    {
      title: "Uptime Monitoring Bot",
      subtitle: "Reliability Tool",
      icon: Activity,
      description: "A system that continuously checks website health and sends instant alerts when a service goes down.",
      features: ["Periodic checks", "Failure detection", "Slack/Email alerts", "Status dashboard"],
      impact: "Zero surprise downtime.",
      image: "/assets/images/project-uptime-bot.png"
    },
  ];

  return (
    <section id="work" className="bg-brand-charcoal/10 py-24 md:py-32 border-y border-brand-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-brand-teal text-sm font-bold tracking-widest uppercase mb-3 block">Featured Case Studies</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Selected Work</h2>
          </div>
          <p className="text-brand-gray max-w-md text-right md:text-right text-sm">
            Real problems solved with engineered systems. <br />No fluff, just impact.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 border-b border-brand-charcoal pb-12 last:border-0"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden border border-brand-charcoal bg-brand-black">
                <div className="absolute top-4 left-4 z-10 bg-brand-black/80 backdrop-blur px-3 py-1 border border-brand-charcoal text-xs font-bold uppercase tracking-wider text-brand-white">
                  {project.subtitle}
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out min-h-[300px]"
                />
                <div className="absolute inset-0 bg-brand-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-brand-charcoal/30 rounded text-brand-teal">
                    <project.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-3xl font-display font-bold mb-4 text-brand-white group-hover:text-brand-teal transition-colors">
                  {project.title}
                </h3>

                <p className="text-brand-gray text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-xs uppercase tracking-widest text-brand-white/50 mb-4 font-semibold">Key Capabilities</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-brand-charcoal/20 border border-brand-charcoal text-brand-gray text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pl-4 border-l-2 border-brand-teal/50">
                  <p className="text-brand-white italic font-medium">"{project.impact}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mini Section for Websites */}
        <div className="mt-24 pt-12 border-t border-brand-charcoal/50">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="text-brand-teal w-6 h-6" />
            <h3 className="text-2xl font-display font-bold">Websites I Built</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'BioMaps', type: 'Data-driven Site' },
              { name: 'SchoolLabs', type: 'Educational Platform' },
              { name: 'TryOn_Studio', type: 'AI virtual Try-on' }
            ].map((site, i) => (
              <div key={i} className="group cursor-pointer border border-brand-charcoal bg-brand-black p-6 hover:border-brand-teal/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-brand-charcoal/30 rounded-full flex items-center justify-center text-brand-gray group-hover:text-brand-white group-hover:bg-brand-teal/20 transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="font-bold text-lg text-brand-white mb-1">{site.name}</h4>
                <p className="text-xs text-brand-gray uppercase tracking-wider">{site.type}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-brand-gray mt-8 text-sm italic">"Clean, functional, fast, and user-first."</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;