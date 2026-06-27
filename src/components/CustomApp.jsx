import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutGrid, Layers, Database, Lock, Code2, Shield, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function CustomApp() {
  const navigate = useNavigate();

  const capabilities = [
    {
      icon: LayoutGrid,
      title: "Custom Portal & Dashboard UI/UX",
      description: "Sleek, responsive admin panels and client dashboards tailored to your workflows.",
      highlight: false
    },
    {
      icon: Layers,
      title: "Robust Full-Stack Web App Build",
      description: "Enterprise-grade architecture built with modern frameworks for ultimate speed and scale.",
      highlight: false
    },
    {
      icon: Database,
      title: "Secure Database Integration",
      description: "Configured with PostgreSQL or MongoDB, optimized for fast querying and high availability.",
      highlight: true // Specially highlighted border
    },
    {
      icon: Lock,
      title: "Authentication & Role Management",
      description: "Secure login system with strict user roles, session tokens, and access permissions.",
      highlight: false
    },
    {
      icon: Code2,
      title: "Custom API & Third-Party Integrations",
      description: "Seamless connections to payment processors, CRMs, maps, notifications, and custom backends.",
      highlight: false
    },
    {
      icon: Shield,
      title: "Advanced Security Hardening",
      description: "Equipped with CORS safety, rate limiting, and robust input validation to keep user data secure.",
      highlight: false
    }
  ];

  const handleStartConsultation = () => {
    navigate('/contact', { state: { service: "Custom Web App Development" } });
  };

  const handleComparePlans = () => {
    navigate('/pricing');
  };

  return (
    <section className="py-24 relative overflow-hidden bg-transparent min-h-screen">
      {/* Background visual accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header Block */}
        <div className="text-center space-y-6 max-w-4xl mx-auto mb-16">
          <ScrollReveal delay={100}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-900/60 shadow-sm">
              <span className="text-[10px] font-extrabold text-indigo-400 uppercase tracking-wider">
                Custom Web App & Portal
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Custom Web App & <span className="text-gradient font-black">Portal Development</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
              From SaaS portals and client dashboards to complex directory platforms. If you have a business idea, we have the full-stack engineering power to bring it to life.
            </p>
          </ScrollReveal>
        </div>

        {/* Pricing/Call-To-Action Box Row */}
        <ScrollReveal delay={400} className="mb-20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-3xl mx-auto bg-[#121214]/55 backdrop-blur-md border border-zinc-800/80 rounded-3xl p-6 shadow-md">
            {/* Price tag block */}
            <div className="bg-indigo-950/40 border border-indigo-900/60 rounded-2xl p-4 px-6 text-center md:text-left flex flex-col justify-center min-w-[200px]">
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest leading-none block mb-1">
                Investment Starting At
              </span>
              <span className="text-2xl font-black text-indigo-400 tracking-tight">
                ₹ 9,999
              </span>
            </div>

            {/* Initiate Button */}
            <button
              onClick={handleStartConsultation}
              className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4.5 px-8 rounded-2xl transition-all duration-300 w-full md:w-auto text-sm"
            >
              <span>Initiate Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Compare plans button */}
            <button
              onClick={handleComparePlans}
              className="py-4.5 px-6 rounded-2xl border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850 text-zinc-400 hover:text-white font-semibold transition-all duration-300 w-full md:w-auto text-sm"
            >
              Compare All Plans
            </button>
          </div>
        </ScrollReveal>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 100} className="h-full">
                <div
                  className={`relative rounded-3xl p-8 pt-10 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between text-left h-full group/card overflow-hidden ${
                    cap.highlight
                      ? 'border border-indigo-500/50 bg-[#121214] shadow-xl shadow-indigo-950/40 ring-4 ring-indigo-500/5'
                      : 'border border-zinc-800/80 bg-[#121214]/50 backdrop-blur-md hover:bg-[#121214]/90 hover:shadow-lg'
                  }`}
                >
                  {/* Accent border at top */}
                  <div className={`absolute top-0 left-0 right-0 h-[3px] ${
                    cap.highlight ? 'bg-indigo-600' : 'bg-zinc-850 group-hover/card:bg-indigo-500'
                  } transition-colors duration-300`}></div>

                  <div className="space-y-6">
                    {/* Double-offset dynamic icon container */}
                    <div className="relative w-12 h-12">
                      <div className={`absolute inset-0 rounded-2xl border flex items-center justify-center z-10 transition-all duration-300 group-hover/card:rotate-6 group-hover/card:scale-105 ${
                        cap.highlight
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                          : 'bg-indigo-950/40 text-indigo-400 border-indigo-900/40'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      {/* Secondary outline container */}
                      <div className={`absolute inset-0 rounded-2xl border scale-95 opacity-40 transition-all duration-300 group-hover/card:-rotate-6 ${
                        cap.highlight ? 'border-purple-500/50' : 'border-indigo-900/50'
                      }`} style={{ transform: 'translate(4px, 4px)' }}></div>
                    </div>

                    {/* Titles & Description */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-white tracking-tight transition-colors group-hover/card:text-indigo-400">
                        {cap.title}
                      </h3>
                      <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* WhatsApp & Chat Widgets */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
            title="Chat on WhatsApp"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.07 1.948 12.01 1.948c-5.44 0-9.866 4.372-9.87 9.802 0 1.724.475 3.411 1.373 4.888L2.52 20.25l4.127-1.096z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
