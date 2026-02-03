import React from 'react';
import { 
  Workflow, 
  Code2, 
  FileJson, 
  Bot, 
  Database, 
  Table2, 
  MessageCircle, 
  MessageSquare, 
  Webhook, 
  Server 
} from 'lucide-react';

const TechStack: React.FC = () => {
  const tools = [
    { name: 'n8n', icon: Workflow },
    { name: 'Python', icon: Code2 },
    { name: 'JavaScript', icon: FileJson },
    { name: 'OpenAI / Claude', icon: Bot },
    { name: 'Vector DB', icon: Database },
    { name: 'Google Sheets', icon: Table2 },
    { name: 'Slack', icon: MessageCircle },
    { name: 'WhatsApp', icon: MessageSquare },
    { name: 'Webhooks', icon: Webhook },
    { name: 'PostgreSQL', icon: Server },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 text-center">
      <h2 className="font-display text-3xl font-bold mb-16">
        My Tech Stack
      </h2>

      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        {tools.map((tool) => (
          <div key={tool.name} className="flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-brand-charcoal bg-brand-charcoal/10 flex items-center justify-center group-hover:border-brand-teal group-hover:bg-brand-teal/5 transition-all duration-300">
              <tool.icon className="w-8 h-8 text-brand-gray group-hover:text-brand-teal transition-colors" strokeWidth={1.5} />
            </div>
            <span className="text-sm font-medium text-brand-gray group-hover:text-brand-white transition-colors">{tool.name}</span>
          </div>
        ))}
      </div>
      
      <p className="mt-16 text-brand-gray italic opacity-70">
        “I pick the right tools — not the trendiest ones.”
      </p>
    </section>
  );
};

export default TechStack;