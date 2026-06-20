import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-16 overflow-hidden min-h-screen flex flex-col justify-between bg-grid-pattern">
      
      {/* Dynamic Background Glowing Blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-indigo-200/30 blur-3xl animate-blob -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-200/20 blur-3xl animate-blob animation-delay-2000 -z-10"></div>
      <div className="absolute bottom-10 left-1/2 w-80 h-80 rounded-full bg-pink-100/30 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center items-center text-center pb-12">
        
        {/* Centered Hero Content */}
        <div className="space-y-8 w-full max-w-4xl flex flex-col items-center">
          
          <ScrollReveal delay={100} className="space-y-4 flex flex-col items-center">
            {/* Badges Row */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* AI-Powered Development Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/85 shadow-sm text-slate-800 text-[10px] font-bold uppercase tracking-wider hover:border-indigo-300 transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-indigo-650" />
                <span>AI-Powered Engineering</span>
              </div>
              {/* MSME Registered Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/85 shadow-sm text-slate-800 text-[10px] font-bold uppercase tracking-wider hover:border-emerald-300 transition-colors">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>MSME Registered</span>
              </div>
            </div>

            {/* Trustpilot Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/85 shadow-sm text-xs font-semibold text-slate-700">
              <span className="text-emerald-600 font-extrabold flex items-center gap-0.5">
                <svg className="w-4 h-4 fill-current text-emerald-500" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                Trustpilot
              </span>
              <div className="flex items-center gap-0.5 text-white bg-emerald-500 rounded p-0.5 scale-90">
                <span className="w-3 h-3 text-[8px] font-bold flex items-center justify-center">★</span>
                <span className="w-3 h-3 text-[8px] font-bold flex items-center justify-center">★</span>
                <span className="w-3 h-3 text-[8px] font-bold flex items-center justify-center">★</span>
                <span className="w-3 h-3 text-[8px] font-bold flex items-center justify-center">★</span>
                <span className="w-3 h-3 text-[8px] font-bold flex items-center justify-center text-emerald-250">★</span>
              </div>
              <span className="text-slate-450 font-bold font-mono">4.2</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="space-y-4">
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
                AI-Powered Websites. <br />
                <span className="text-gradient font-black">Delivered the Same Day.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-650 max-w-2xl font-light leading-relaxed mx-auto">
                We build high-converting websites and launch them the same day — cheaper than any 
                traditional web design provider. Customized React apps and modern software solutions.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300} className="w-full flex justify-center">
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-2 w-full max-w-md">
              <Link 
                to="/contact"
                state={{ service: "Custom Website Package" }}
                className="group relative flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:shadow-indigo-300/60 hover:-translate-y-0.5 transition-all duration-300 text-sm"
              >
                <span>Build My Website</span>
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/services"
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold py-4 px-8 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-sm"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400} className="w-full max-w-3xl pt-8">
            {/* Stats Bar Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-100/80">
              <div className="bg-white/50 backdrop-blur-md border border-slate-200/40 rounded-2xl p-4 shadow-sm hover:bg-white/80 transition-colors">
                <span className="block text-2xl font-black text-slate-800 font-mono leading-none">24h</span>
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Same-Day Delivery</span>
              </div>
              <div className="bg-white/50 backdrop-blur-md border border-slate-200/40 rounded-2xl p-4 shadow-sm hover:bg-white/80 transition-colors">
                <span className="block text-2xl font-black text-slate-800 font-mono leading-none">500+</span>
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Projects Completed</span>
              </div>
              <div className="bg-white/50 backdrop-blur-md border border-slate-200/40 rounded-2xl p-4 shadow-sm hover:bg-white/80 transition-colors">
                <span className="block text-2xl font-black text-slate-800 font-mono leading-none">99%</span>
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Success Rate</span>
              </div>
              <div className="bg-white/50 backdrop-blur-md border border-slate-200/40 rounded-2xl p-4 shadow-sm hover:bg-white/80 transition-colors flex flex-col justify-between min-h-[72px]">
                <div>
                  <span className="block text-2xl font-black text-slate-800 font-mono leading-none">15+</span>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Dedicated Experts</span>
                </div>
                <div className="flex justify-center -space-x-1.5 mt-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-indigo-500 flex items-center justify-center text-[7px] text-white font-bold">A</div>
                  <div className="w-5 h-5 rounded-full border border-white bg-purple-500 flex items-center justify-center text-[7px] text-white font-bold">B</div>
                  <div className="w-5 h-5 rounded-full border border-white bg-pink-500 flex items-center justify-center text-[7px] text-white font-bold">C</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
