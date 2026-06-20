import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Check, ArrowRight, ExternalLink } from 'lucide-react';

// Custom Micro-Illustrations to replace simple standard icons
function WebAppVisual() {
  return (
    <div className="w-16 h-12 rounded-lg border border-slate-200 bg-slate-50 relative overflow-hidden shadow-sm flex flex-col group-hover:border-indigo-400 group-hover:bg-indigo-50/20 transition-all duration-300">
      {/* Top browser bar */}
      <div className="h-3 bg-slate-100 border-b border-slate-200 px-1.5 flex items-center gap-1 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
        <div className="w-1 h-1 rounded-full bg-red-400"></div>
        <div className="w-1 h-1 rounded-full bg-yellow-400"></div>
        <div className="w-1 h-1 rounded-full bg-green-400"></div>
        <div className="w-8 h-1.5 rounded-sm bg-slate-200 mx-auto"></div>
      </div>
      {/* Browser content */}
      <div className="flex-1 p-1 flex gap-1.5">
        <div className="w-3 bg-slate-100 rounded-sm group-hover:bg-indigo-100/40 transition-colors"></div>
        <div className="flex-1 flex flex-col gap-1 justify-center">
          <div className="w-8 h-1 rounded bg-slate-200 group-hover:bg-indigo-300/60 transition-all duration-300 group-hover:w-10"></div>
          <div className="w-6 h-1 rounded bg-slate-200 group-hover:bg-indigo-300/40 transition-all duration-300 group-hover:w-8"></div>
        </div>
      </div>
      {/* Floating badge */}
      <div className="absolute right-1 bottom-1 w-4 h-4 bg-indigo-500 rounded-full flex items-center justify-center text-[8px] text-white font-mono shadow-sm scale-75 group-hover:scale-95 transition-transform">
        {"{ }"}
      </div>
    </div>
  );
}

function MobileVisual() {
  return (
    <div className="w-10 h-14 rounded-xl border border-slate-200 bg-slate-50 relative overflow-hidden shadow-sm flex flex-col items-center p-1 group-hover:border-purple-400 group-hover:bg-purple-50/20 transition-all duration-300">
      {/* Top speaker bar */}
      <div className="w-4 h-0.5 rounded-full bg-slate-300 mb-1"></div>
      {/* Mock mobile content */}
      <div className="w-full flex-1 rounded bg-slate-100 p-1 flex flex-col gap-1 group-hover:bg-purple-100/40 transition-colors">
        <div className="w-4 h-4 rounded-full bg-slate-200 mx-auto group-hover:bg-purple-300/40 transition-colors"></div>
        <div className="w-full h-1.5 rounded bg-slate-200 group-hover:bg-purple-300/50 transition-colors"></div>
        <div className="w-3/4 h-1 rounded bg-slate-200 group-hover:bg-purple-300/30 transition-colors"></div>
      </div>
      {/* Interactive indicator bar */}
      <div className="w-5 h-0.5 rounded-full bg-slate-300 group-hover:bg-purple-400 mt-1 transition-colors"></div>
    </div>
  );
}

function UIUXVisual() {
  return (
    <div className="w-14 h-12 relative flex items-center justify-center">
      {/* Layer 1 - square */}
      <div className="absolute w-8 h-8 rounded bg-pink-100 border border-pink-200 -translate-x-2 -translate-y-2 opacity-80 group-hover:-translate-x-3 group-hover:-translate-y-3 transition-transform duration-300 shadow-sm"></div>
      {/* Layer 2 - circle */}
      <div className="absolute w-8 h-8 rounded-full bg-indigo-100 border border-indigo-200 opacity-90 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300 shadow-sm flex items-center justify-center">
        <div className="w-4 h-4 rounded-full border border-indigo-300 border-dashed"></div>
      </div>
      {/* Layer 3 - design anchor */}
      <div className="absolute w-6 h-6 rotate-45 border border-purple-400 bg-purple-50/50 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
        <div className="w-1 h-1 rounded-full bg-purple-600"></div>
      </div>
      {/* Cursor */}
      <svg className="absolute right-0 bottom-0 w-3.5 h-3.5 text-slate-700 drop-shadow group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 0l16 12.27-7.27 1.56L18 24l-3.33 1.33-5.22-9.78-5.45 5.45z"/>
      </svg>
    </div>
  );
}

function ApiVisual() {
  return (
    <div className="w-16 h-12 flex items-center justify-between px-1 relative">
      {/* Node 1 */}
      <div className="w-6 h-9 rounded bg-indigo-50 border border-indigo-200 flex flex-col justify-between p-1 group-hover:border-indigo-400 transition-colors shadow-sm">
        <div className="w-full h-1 bg-indigo-500 rounded-sm"></div>
        <div className="w-full h-0.5 bg-slate-200 rounded-sm"></div>
        <div className="w-full h-0.5 bg-slate-200 rounded-sm"></div>
      </div>
      {/* Cable line */}
      <div className="flex-1 h-[2px] bg-slate-200 relative group-hover:bg-indigo-300 transition-colors mx-1">
        {/* Pulsing signal dot */}
        <div className="absolute top-1/2 left-0 w-1.5 h-1.5 rounded-full bg-indigo-600 -translate-y-1/2 group-hover:animate-ping opacity-75"></div>
        <div className="absolute top-1/2 left-0 w-1.5 h-1.5 rounded-full bg-indigo-700 -translate-y-1/2 animate-flow"></div>
      </div>
      {/* Node 2 */}
      <div className="w-6 h-9 rounded bg-purple-50 border border-purple-200 flex flex-col justify-between p-1 group-hover:border-purple-400 transition-colors shadow-sm">
        <div className="w-full h-1 bg-purple-500 rounded-sm"></div>
        <div className="w-full h-0.5 bg-slate-200 rounded-sm"></div>
        <div className="w-full h-0.5 bg-slate-200 rounded-sm"></div>
      </div>
      
      <style>{`
        @keyframes flow {
          0% { left: 0%; }
          100% { left: 100%; }
        }
        .animate-flow {
          animation: flow 1.5s infinite linear;
        }
      `}</style>
    </div>
  );
}

function CloudVisual() {
  return (
    <div className="w-16 h-12 flex flex-col items-center justify-center relative">
      {/* Cloud shape outline */}
      <div className="w-10 h-6 bg-violet-100 rounded-full border border-violet-200 shadow-sm flex items-center justify-center relative -bottom-1.5 z-10 group-hover:bg-violet-200/40 transition-all duration-300">
        <div className="w-5 h-2.5 border-t border-violet-400 rounded-t-full opacity-60"></div>
      </div>
      {/* Server Rack */}
      <div className="w-12 h-6 bg-slate-800 rounded border border-slate-700 p-0.5 flex flex-col gap-0.5 shadow-md">
        {/* Blade 1 */}
        <div className="h-2 bg-slate-900 rounded flex items-center justify-between px-1 border-b border-slate-800/80">
          <div className="w-4 h-0.5 bg-slate-600"></div>
          <div className="flex gap-0.5">
            <div className="w-1 h-1 rounded-full bg-emerald-500 group-hover:animate-pulse"></div>
            <div className="w-1 h-1 rounded-full bg-indigo-400"></div>
          </div>
        </div>
        {/* Blade 2 */}
        <div className="h-2 bg-slate-900 rounded flex items-center justify-between px-1">
          <div className="w-4 h-0.5 bg-slate-600"></div>
          <div className="flex gap-0.5">
            <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
            <div className="w-1 h-1 rounded-full bg-indigo-400 group-hover:animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AIVisual() {
  return (
    <div className="w-14 h-12 relative flex items-center justify-center">
      {/* Central neural pulsing ring */}
      <div className="absolute w-4 h-4 bg-purple-500/20 border border-purple-500/40 rounded-full scale-100 group-hover:scale-125 group-hover:bg-purple-500/30 transition-all duration-500 flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full animate-ping"></div>
        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
      </div>
      
      {/* Outer Nodes */}
      <div className="absolute top-1 left-2 w-2.5 h-2.5 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
        <div className="w-1 h-1 rounded-full bg-indigo-500"></div>
      </div>
      <div className="absolute top-1 right-2 w-2.5 h-2.5 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
        <div className="w-1 h-1 rounded-full bg-purple-500"></div>
      </div>
      <div className="absolute bottom-1 left-1.5 w-2.5 h-2.5 rounded-full bg-pink-50 border border-pink-200 flex items-center justify-center group-hover:bg-pink-200 transition-colors">
        <div className="w-1 h-1 rounded-full bg-pink-500"></div>
      </div>
      <div className="absolute bottom-1 right-1.5 w-2.5 h-2.5 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
        <div className="w-1 h-1 rounded-full bg-indigo-500"></div>
      </div>

      {/* SVG node link paths */}
      <svg className="w-full h-full text-slate-200 group-hover:text-purple-300/40 transition-colors pointer-events-none" viewBox="0 0 56 48">
        <line x1="10" y1="10" x2="28" y2="24" stroke="currentColor" strokeWidth="1" />
        <line x1="46" y1="10" x2="28" y2="24" stroke="currentColor" strokeWidth="1" />
        <line x1="10" y1="38" x2="28" y2="24" stroke="currentColor" strokeWidth="1" />
        <line x1="46" y1="38" x2="28" y2="24" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}

export default function Services() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  // Lock scroll when modal is active
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedService(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const services = [
    {
      visual: WebAppVisual,
      title: "Web App Development",
      shortDescription: "High-performance React and Next.js applications engineered with speed, security, and responsive layouts at their core.",
      detailedDescription: "We build custom, ultra-fast web applications designed to scale. From complex SaaS dashboards to bespoke back-office database systems, we design and engineer solutions using React, Next.js, and modern styling libraries that load in milliseconds, optimize SEO indexability, and maintain clean state management architectures.",
      features: [
        "Sleek dashboards with real-time dynamic charts",
        "Server-Side Rendering (SSR) & instant static builds",
        "Optimistic state updates & client-side caching",
        "Comprehensive role-based authorization systems",
        "Responsive, mobile-optimized component layouts"
      ],
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Zustand"],
      process: [
        { label: "1. Architecture Blueprint", detail: "Structuring mockups, routing models, data layouts, and component hierarchies." },
        { label: "2. Performance Coding", detail: "Writing clean, reusable code with modern UI tokens, hooks, and responsive design systems." },
        { label: "3. Global Launch & SEO Optimization", detail: "Optimizing index meta elements, configuring caching, and hosting on lightning-fast edge networks." }
      ],
      color: "bg-indigo-600",
      glow: "glow-indigo"
    },
    {
      visual: MobileVisual,
      title: "Mobile App Design",
      shortDescription: "Smooth, interactive iOS and Android mobile designs using modern cross-platform patterns that clients love.",
      detailedDescription: "Elevate your mobile presence with interfaces that feel organic and fluid. We specialize in designing robust design systems compliant with Apple's iOS Human Interface Guidelines and Google's Android Material Design, laying out clear screen states, swipe gestures, and high-fidelity interactive wireframes.",
      features: [
        "Interactive screen flows & high-fidelity prototype testing",
        "Flexible light and dark theme templates",
        "Handoff-ready design assets, tokens, and font styles",
        "Custom app icon designs & app store promotional banners",
        "Intuitive touch layouts, button sizing, and micro-interactions"
      ],
      techStack: ["Figma", "Adobe XD", "SVG Graphics", "Mobile UI Guidelines", "Proto.io"],
      process: [
        { label: "1. Flow Mapping", detail: "Drawing user personas, screen journey connections, and logical user steps." },
        { label: "2. Core UI Layout", detail: "Drafting color schemas, button states, modern rounded grids, and text guidelines." },
        { label: "3. Interactive Prototypes", detail: "Simulating transitions, modal animations, and exporting production-ready visual specs." }
      ],
      color: "bg-purple-600",
      glow: "glow-purple"
    },
    {
      visual: UIUXVisual,
      title: "UI/UX & Branding",
      shortDescription: "Bespoke digital design systems, user journey flows, and high-fidelity interactive wireframes for modern brands.",
      detailedDescription: "Shape a cohesive digital identity that captures attention and retains customers. We engineer robust, styled UI Kits, customized logo packages, color palettes, and typographic scales that convey premium quality and make coding easier for developer handoff.",
      features: [
        "Bespoke vector logo design and visual branding materials",
        "Tailwind-integrated design token specifications",
        "User journey blueprints focused on layout conversion rates",
        "Atomic-based styled component libraries",
        "Clean, modern typography systems matching your brand tone"
      ],
      techStack: ["Tailwind CSS", "Figma", "Google Fonts", "Lottie Animations", "Illustrator"],
      process: [
        { label: "1. Brand Identity Alignment", detail: "Exploring your company vision, choosing color harmony schemes, and selecting font sizes." },
        { label: "2. Visual Layout Audits", detail: "Ensuring visual spacing, readability, and content flow align with human reading patterns." },
        { label: "3. Design Token Export", detail: "Compiling padding guides, custom colors, border radii, and styles into direct Tailwind configurations." }
      ],
      color: "bg-pink-600",
      glow: "glow-pink"
    },
    {
      visual: ApiVisual,
      title: "APIs & Core Integrations",
      shortDescription: "Robust backend system architectures, custom database APIs, secure payment gateways, and system integrations.",
      detailedDescription: "Power your user interfaces with high-performance backends and clean database modeling. We build RESTful and GraphQL APIs, integrate third-party payment options (Stripe, PayPal), secure endpoints via modern Auth patterns, and establish reliable background worker tasks.",
      features: [
        "Optimized relational schemas (PostgreSQL, MySQL, Prisma)",
        "Secure JWT and OAuth2 authorization strategies",
        "Stripe webhook integrations for automated subscriptions",
        "Real-time client synchronization with WebSockets",
        "Detailed Swagger or Postman API sandboxes"
      ],
      techStack: ["Node.js", "Express", "PostgreSQL", "GraphQL", "Prisma", "Stripe API"],
      process: [
        { label: "1. Schema Design", detail: "Drafting tables, indexing keys, foreign key relations, and access controls." },
        { label: "2. Endpoint Construction", detail: "Coding routing logic, request checks, and security validation middlewares." },
        { label: "3. Scaling & Testing", detail: "Executing integration tests, load profiling, and pre-configuring production sandbox triggers." }
      ],
      color: "bg-indigo-500",
      glow: "glow-indigo"
    },
    {
      visual: CloudVisual,
      title: "Cloud Infrastructure",
      shortDescription: "Scaleable deployment set-ups utilizing Vercel, AWS, and Cloudflare to achieve 99.99% uptime and global content delivery.",
      detailedDescription: "Deploy your applications with ultimate confidence. We design production-ready continuous delivery pipelines, configure global Content Delivery Networks (CDNs), establish secure firewall protocols, and configure multi-environment hosting to ensure global scalability.",
      features: [
        "Edge computing & Serverless function configurations",
        "Cloudflare caching layers & custom security shields",
        "CI/CD workflow scripts (GitHub Actions, Vercel Pipelines)",
        "Real-time system health checks & anomaly alerts",
        "Automated SSL routing & custom domain configurations"
      ],
      techStack: ["Vercel", "AWS Cloudfront", "Cloudflare DNS", "GitHub Actions", "Docker"],
      process: [
        { label: "1. Environment Isolation", detail: "Configuring production, staging, and development domains and API keys." },
        { label: "2. Pipeline Automation", detail: "Writing deployment configuration files, lint runners, and auto-build triggers." },
        { label: "3. Health Checks", detail: "Setting up server monitoring pages, custom firewall settings, and automated backup schedules." }
      ],
      color: "bg-violet-600",
      glow: "glow-indigo"
    },
    {
      visual: AIVisual,
      title: "AI & Automation Services",
      shortDescription: "Intelligent chatbot modules, workflow automations, and LLM implementations to speed up your operations.",
      detailedDescription: "Supercharge your business productivity by automating repetitive tasks and introducing intelligent helper features. We configure custom LLM connectors, design Retrieval-Augmented Generation (RAG) files for corporate document search, and build automated cross-service webhooks.",
      features: [
        "Custom GPT-4 & Gemini API integrations and prompt rules",
        "Intelligent support agents tuned to your company docs",
        "No-code / low-code workflow automation (Zapier, Make)",
        "Automated custom reporting, data scrapers, and summaries",
        "Automated text alerts, email responses, and leads capture"
      ],
      techStack: ["OpenAI API", "Gemini API", "Zapier", "LangChain", "Node.js", "Make.com"],
      process: [
        { label: "1. Workflow Analysis", detail: "Finding manual tasks and establishing webhook points and prompt guidelines." },
        { label: "2. Prompt & Model Tuning", detail: "Fine-tuning prompt inputs, system contexts, and training RAG documents." },
        { label: "3. Automated Run Checks", detail: "Testing chatbot responses and validating daily automation tasks." }
      ],
      color: "bg-purple-500",
      glow: "glow-purple"
    }
  ];

  const handleLearnMore = (svc) => {
    setSelectedService(svc);
  };

  const handleDiscussProject = (title) => {
    setSelectedService(null);
    navigate('/contact', { state: { service: title } });
  };

  return (
    <section id="services" className="py-24 bg-white/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            How We Can <span className="text-gradient font-black">Help Your Business</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base font-light">
            We handle the design, code, architecture, and deployment so you can focus entirely on growing your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, index) => {
            const VisualComponent = svc.visual;
            return (
              <div 
                key={index} 
                className="group relative rounded-3xl p-8 glass-card hover:bg-white/80 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between text-left cursor-pointer"
                onClick={() => handleLearnMore(svc)}
              >
                {/* Glow layer on hover */}
                <div className={`absolute -inset-0.5 rounded-3xl ${svc.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`}></div>
                
                <div className="space-y-6 relative z-10">
                  {/* Custom Graphic Visual Wrapper instead of standard icons */}
                  <div className="w-20 h-16 rounded-2xl bg-white/50 border border-slate-200/50 flex items-center justify-center shadow-sm relative overflow-hidden group-hover:border-slate-300 transition-all duration-300">
                    <VisualComponent />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                      {svc.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100/60 flex items-center justify-between relative z-10">
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-indigo-600 transition-colors">
                    Learn more
                  </span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLearnMore(svc);
                    }}
                    className="p-2 rounded-full bg-slate-50 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Service Popup Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300 animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          {/* Modal Container */}
          <div 
            className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white border border-slate-200/80 shadow-2xl flex flex-col text-left animate-in fade-in zoom-in-95 duration-350 custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header section with cover gradient and Close button */}
            <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-slate-100 px-6 py-4 flex items-center justify-between z-20">
              <div className="flex items-center gap-3">
                <div className="w-16 h-12 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center shadow-sm">
                  {React.createElement(selectedService.visual)}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">
                    {selectedService.title}
                  </h3>
                  <p className="text-[10px] text-indigo-500 uppercase font-extrabold tracking-widest mt-0.5">
                    Nextshop Service Specs
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedService(null)}
                className="p-2 rounded-full bg-slate-50 border border-slate-200/40 text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-8">
              
              {/* Detailed introduction */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Overview</h4>
                <p className="text-slate-650 text-sm md:text-base leading-relaxed font-light">
                  {selectedService.detailedDescription}
                </p>
              </div>

              {/* Grid: Features & Tech Stack */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2">
                
                {/* Column 1: Key Features (7 cols) */}
                <div className="md:col-span-7 space-y-4">
                  <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Key Features included</h4>
                  <ul className="space-y-3">
                    {selectedService.features.map((feat, idx) => (
                      <li key={idx} className="flex gap-3 items-start text-xs md:text-sm text-slate-600 font-light">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="leading-normal">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Tech Stack (5 cols) */}
                <div className="md:col-span-5 space-y-4">
                  <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Standard Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.techStack.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs font-semibold tracking-tight shadow-sm hover:bg-indigo-50/20 hover:border-indigo-200 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* The Delivery Process */}
              <div className="space-y-4 pt-2 border-t border-slate-100">
                <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Our Delivery Process</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {selectedService.process.map((proc, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200 flex flex-col gap-2">
                      <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                        {proc.label}
                      </span>
                      <p className="text-[11px] md:text-xs text-slate-500 font-light leading-relaxed">
                        {proc.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Sticky Footer CTA */}
            <div className="sticky bottom-0 bg-white/95 border-t border-slate-100 px-6 py-4 flex flex-col sm:flex-row gap-4 items-center justify-between z-20">
              <span className="text-xs text-slate-400 font-light text-center sm:text-left">
                Ready to build? Let's align on your custom features.
              </span>
              <div className="flex w-full sm:w-auto gap-3">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl border border-slate-200 text-slate-550 hover:text-slate-800 hover:bg-slate-50 text-xs font-semibold tracking-wide transition-colors"
                >
                  Close Specification
                </button>
                <button 
                  onClick={() => handleDiscussProject(selectedService.title)}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-750 text-white text-xs font-semibold tracking-wide transition-all shadow-md shadow-indigo-100 flex items-center justify-center gap-1.5 hover:-translate-y-0.5"
                >
                  <span>Discuss Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
