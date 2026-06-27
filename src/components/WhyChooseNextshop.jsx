import React from 'react';
import { Zap, DollarSign, Cpu } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function WhyChooseNextshop() {
  const cards = [
    {
      icon: Zap,
      title: "Same-Day Delivery",
      description: "Get your website live within 24 hours. Our streamlined, optimized workflow ensures rapid development without compromising on quality or performance.",
      highlight: false
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Cheaper than any traditional web design agency while still delivering bespoke, premium quality. We pass our operational efficiency savings on to you.",
      highlight: false
    },
    {
      icon: Cpu,
      title: "AI-Powered Engineering",
      description: "Our engineers leverage state-of-the-art AI systems internally for speed, security, and scalability. You never touch the tools — we handle everything.",
      highlight: true
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Why Choose <span className="text-gradient font-black">Nextshop</span>?
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base font-light">
              We build high-converting websites and modern custom web applications for less than any 
              traditional web design provider, powered by AI and expert engineering.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 150} className="h-full">
                <div
                  className={`relative rounded-3xl p-8 pt-10 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between text-left h-full group/card overflow-hidden ${
                    card.highlight
                      ? 'border border-indigo-500/50 bg-[#121214] ring-4 ring-indigo-500/5 shadow-2xl shadow-indigo-900/10'
                      : 'border border-zinc-800/80 bg-[#121214]/50 backdrop-blur-md hover:bg-[#121214]/90 hover:shadow-lg'
                  }`}
                >
                  {/* Premium Top Border */}
                  <div className={`absolute top-0 left-0 right-0 h-[3.5px] ${
                    card.highlight 
                      ? 'bg-indigo-600' 
                      : 'bg-zinc-800 group-hover/card:bg-indigo-500'
                  } transition-all duration-300`}></div>

                  {/* Visual Glow overlay for highlight card */}
                  {card.highlight && (
                    <div className="absolute -inset-0.5 rounded-3xl bg-indigo-500/5 blur-lg -z-10"></div>
                  )}

                  {/* Internal blueprint grid pattern */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] rounded-3xl -z-10"></div>

                  <div className="space-y-6">
                    {/* Double-offset dynamic icon container */}
                    <div className="relative w-12 h-12">
                      <div className={`absolute inset-0 rounded-2xl transition-all duration-300 group-hover/card:rotate-6 group-hover/card:scale-105 border flex items-center justify-center z-10 ${
                        card.highlight
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                          : 'bg-indigo-950/40 text-indigo-400 border-indigo-900/40'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      {/* Accent outline container rotating oppositely */}
                      <div className={`absolute inset-0 rounded-2xl border transition-all duration-300 group-hover/card:-rotate-6 scale-95 opacity-50 ${
                        card.highlight ? 'border-purple-500/50' : 'border-indigo-900/50'
                      }`} style={{ transform: 'translate(4px, 4px)' }}></div>
                    </div>

                    {/* Heading & description */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-white tracking-tight transition-colors group-hover/card:text-indigo-400">
                        {card.title}
                      </h3>
                      <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
