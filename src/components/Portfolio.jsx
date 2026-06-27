import React, { useState } from 'react';
import { Layers, Globe, Smartphone, ShoppingCart, ExternalLink, Cpu } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Projects', icon: Layers },
    { id: 'web', label: 'Web Apps', icon: Globe },
    { id: 'mobile', label: 'Mobile App', icon: Smartphone },
    { id: 'ecommerce', label: 'E-commerce', icon: ShoppingCart },
  ];

  const projects = [
    {
      title: "Fintech Dashboard System",
      category: "web",
      description: "A secure, real-time tracking panel showing financial indices, monthly sales, and custom metric analytics.",
      tech: ["React", "Tailwind", "ChartJS", "NodeJS"],
      bg: "bg-slate-900",
      stats: { primary: "12.4k users", secondary: "99.9% uptime" }
    },
    {
      title: "Task Management Suite",
      category: "web",
      description: "A drag-and-drop workflow visualizer for teams to track sprint task items, database updates, and security levels.",
      tech: ["React", "DaisyUI", "DndKit", "Firebase"],
      bg: "bg-indigo-600",
      stats: { primary: "Active sync", secondary: "50ms response" }
    },
    {
      title: "AI Chat Helper Integration",
      category: "web",
      description: "Embeddable customized assistant bot featuring automated replies, training configurations, and message logs.",
      tech: ["Next.js", "Tailwind", "OpenAI API", "Supabase"],
      bg: "bg-purple-600",
      stats: { primary: "LLM Powered", secondary: "Instant replies" }
    },
    {
      title: "Fitness Tracker App",
      category: "mobile",
      description: "Interactive mobile mockups for cross-platform workout logging, metric sliders, and personal profiles.",
      tech: ["React Native", "Expo", "Redux", "NodeJS"],
      bg: "bg-rose-600",
      stats: { primary: "iOS & Android", secondary: "Offline Mode" }
    },
    {
      title: "Fashion E-commerce Store",
      category: "ecommerce",
      description: "A full-scale online store featuring multi-language products, custom checkout cart, and stripe payments.",
      tech: ["Next.js", "Tailwind", "Stripe API", "GraphQL"],
      bg: "bg-indigo-700",
      stats: { primary: "10k+ items", secondary: "Fast checkout" }
    },
    {
      title: "IoT Control Hub",
      category: "mobile",
      description: "Control app for smart devices featuring hardware status charts, settings toggle, and notification updates.",
      tech: ["React Native", "Tailwind", "WebSockets", "Go"],
      bg: "bg-teal-600",
      stats: { primary: "BLE Connect", secondary: "Live Feed" }
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Interactive <span className="text-gradient font-black">Case Studies</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base font-light">
            Take a look at some of the industry-grade web systems and mobile interfaces we have designed and developed.
          </p>
        </div>

        {/* Filters Tabs Bar */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-zinc-900/60 rounded-full border border-zinc-800/80 max-w-full overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj, idx) => (
            <div 
              key={idx}
              className="group bg-zinc-900/40 rounded-3xl overflow-hidden border border-zinc-800/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-left hover:border-zinc-700/60"
            >
              
              {/* Card visual showcase panel */}
              <div className={`h-48 ${proj.bg} p-6 relative flex flex-col justify-between overflow-hidden`}>
                {/* Visual design shapes in background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl -z-0"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-xl -z-0"></div>

                <div className="flex justify-between items-start relative z-10">
                  <span className="text-[9px] font-bold text-white/90 uppercase tracking-widest bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    {proj.category === 'web' ? 'Web Platform' : proj.category === 'mobile' ? 'Mobile App' : 'E-commerce'}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                {/* Micro widgets visual */}
                <div className="flex items-center justify-between text-white relative z-10">
                  <div>
                    <span className="text-[10px] text-white/70 block uppercase font-bold tracking-wider">Metrics</span>
                    <span className="text-sm font-extrabold block">{proj.stats.primary}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-white/70 block uppercase font-bold tracking-wider">Speed</span>
                    <span className="text-sm font-extrabold block">{proj.stats.secondary}</span>
                  </div>
                </div>
              </div>

              {/* Title & info description */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6 bg-transparent">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {proj.title}
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {/* Tech items badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60">
                  {proj.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="text-[9px] bg-zinc-950/60 border border-zinc-800/80 text-zinc-400 px-2 py-0.5 rounded-md font-mono font-bold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
