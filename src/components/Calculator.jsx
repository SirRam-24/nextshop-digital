import React, { useState } from 'react';
import { Sparkles, Calculator as CalcIcon, Send, CheckCircle2 } from 'lucide-react';

export default function Calculator() {
  const [platform, setPlatform] = useState('web'); // web, mobile, ecommerce, portal
  const [pages, setPages] = useState(5);
  const [complexity, setComplexity] = useState('professional'); // basic, professional, premium
  const [timeline, setTimeline] = useState('standard'); // urgent, standard, relaxed
  
  const [features, setFeatures] = useState({
    database: true,
    auth: true,
    payments: false,
    dashboard: false,
    multilingual: false,
    analytics: false,
    aiIntegrations: false,
  });

  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleFeature = (feat) => {
    setFeatures(prev => ({ ...prev, [feat]: !prev[feat] }));
  };

  const calculateEstimate = () => {
    // Base platform costs
    let basePrice = 1200;
    if (platform === 'mobile') basePrice = 1800;
    if (platform === 'ecommerce') basePrice = 2000;
    if (platform === 'portal') basePrice = 2500;

    // Page calculations
    const pageCost = pages * 120;

    // Feature costs
    let featureCost = 0;
    if (features.database) featureCost += 500;
    if (features.auth) featureCost += 300;
    if (features.payments) featureCost += 400;
    if (features.dashboard) featureCost += 600;
    if (features.multilingual) featureCost += 250;
    if (features.analytics) featureCost += 350;
    if (features.aiIntegrations) featureCost += 600;

    // Complexity multipliers
    let complexityMultiplier = 1.0;
    if (complexity === 'basic') complexityMultiplier = 0.8;
    if (complexity === 'premium') complexityMultiplier = 1.35;

    // Timeline multipliers
    let timelineMultiplier = 1.0;
    if (timeline === 'urgent') timelineMultiplier = 1.25;
    if (timeline === 'relaxed') timelineMultiplier = 0.9;

    const total = Math.round((basePrice + pageCost + featureCost) * complexityMultiplier * timelineMultiplier);

    // Development time calculation in weeks
    let baseWeeks = 3;
    if (platform === 'mobile') baseWeeks = 4;
    if (platform === 'ecommerce') baseWeeks = 5;
    if (platform === 'portal') baseWeeks = 6;

    const additionalWeeks = Math.ceil(pages / 5) + Object.values(features).filter(Boolean).length;
    let totalWeeks = baseWeeks + additionalWeeks;

    if (timeline === 'urgent') totalWeeks = Math.max(2, Math.round(totalWeeks * 0.6));
    if (timeline === 'relaxed') totalWeeks = Math.round(totalWeeks * 1.3);

    return { total, weeks: totalWeeks };
  };

  const { total, weeks } = calculateEstimate();

  const handleSendQuote = (e) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim()) {
      alert('Please fill out your Name and Email address.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setContactName('');
      setContactEmail('');
      setContactMessage('');
    }, 3000);
  };

  return (
    <section id="calculator" className="py-24 relative bg-grid-pattern overflow-hidden">
      
      {/* Background soft blur spots */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl -z-10"></div>
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-900/40 shadow-sm">
            <CalcIcon className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-[10px] font-bold text-purple-400 tracking-wider uppercase">Interactive Builder</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            App Cost & <span className="text-gradient font-black">Timeline Estimator</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base font-light">
            Customize your project requirements below to see an instant delivery and price estimation.
          </p>
        </div>

        {/* Calculator content layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form - left */}
          <div className="lg:col-span-7 space-y-8 bg-[#121214]/55 backdrop-blur-md border border-zinc-800/80 rounded-3xl p-6 md:p-8 shadow-sm">
            
            {/* 1. Project Platform */}
            <div className="space-y-4 text-left">
              <label className="text-sm font-bold text-zinc-300 uppercase tracking-wider block">
                1. Select Platform
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'web', label: 'Web App' },
                  { id: 'mobile', label: 'Mobile App' },
                  { id: 'ecommerce', label: 'E-commerce' },
                  { id: 'portal', label: 'Admin Portal' },
                ].map((plat) => (
                  <button
                    key={plat.id}
                    onClick={() => setPlatform(plat.id)}
                    className={`py-3.5 px-4 rounded-2xl text-xs font-bold transition-all ${
                      platform === plat.id
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-900/40'
                        : 'bg-zinc-900 hover:bg-zinc-850 text-zinc-400 border border-zinc-800/80'
                    }`}
                  >
                    {plat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Number of screens */}
            <div className="space-y-4 text-left">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-zinc-300 uppercase tracking-wider block">
                  2. Project Scale (Screens / Pages)
                </label>
                <span className="bg-indigo-950/40 text-indigo-400 border border-indigo-900/40 font-extrabold px-3 py-1 rounded-lg text-sm">
                  {pages} {pages === 1 ? 'Page' : 'Pages'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={pages}
                onChange={(e) => setPages(parseInt(e.target.value))}
                className="range range-indigo range-xs w-full accent-indigo-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-zinc-550 font-bold px-1">
                <span>1 Page</span>
                <span>15 Pages</span>
                <span>30 Pages</span>
              </div>
            </div>

            {/* 3. Core features */}
            <div className="space-y-4 text-left">
              <label className="text-sm font-bold text-zinc-300 uppercase tracking-wider block">
                3. Choose Core Features
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'database', label: 'Database & CMS Integration', cost: '+$500' },
                  { id: 'auth', label: 'User Login & Profiles', cost: '+$300' },
                  { id: 'payments', label: 'Stripe Payments / Invoicing', cost: '+$400' },
                  { id: 'dashboard', label: 'Analytics Admin Dashboard', cost: '+$600' },
                  { id: 'multilingual', label: 'Multi-language (i18n)', cost: '+$250' },
                  { id: 'analytics', label: 'Custom User Analytics & SEO', cost: '+$350' },
                  { id: 'aiIntegrations', label: 'AI Chatbot & Automation', cost: '+$600' },
                ].map((feat) => (
                  <button
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`flex items-center justify-between p-4 rounded-2xl border text-xs font-bold text-left transition-all ${
                      features[feat.id]
                        ? 'bg-purple-950/30 border-purple-900/50 text-purple-400 shadow-sm'
                        : 'bg-zinc-900 border-zinc-800/80 text-zinc-400 hover:bg-zinc-850'
                    }`}
                  >
                    <span>{feat.label}</span>
                    <span className="text-[10px] bg-zinc-950 border border-zinc-800 px-2 py-0.5 rounded-md font-mono text-zinc-400">
                      {feat.cost}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Complexity & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              
              {/* Design Complexity */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-zinc-300 uppercase tracking-wider block">
                  4. Design Tier
                </label>
                <div className="flex flex-col gap-2">
                  {[
                    { id: 'basic', label: 'Standard UI (Clean template)', desc: '0.8x cost multiplier' },
                    { id: 'professional', label: 'Premium UI (Custom layouts)', desc: '1.0x cost multiplier' },
                    { id: 'premium', label: 'State-of-the-Art UX (3D/Animations)', desc: '1.35x cost multiplier' },
                  ].map((tier) => (
                    <label 
                      key={tier.id}
                      onClick={() => setComplexity(tier.id)}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        complexity === tier.id
                          ? 'border-indigo-500/50 bg-indigo-950/30 text-indigo-400 font-bold'
                          : 'border-zinc-800 bg-zinc-900/40 hover:bg-zinc-850 text-zinc-400'
                      }`}
                    >
                      <div>
                        <span className="block text-xs font-bold">{tier.label}</span>
                        <span className="block text-[9px] text-zinc-550 font-light">{tier.desc}</span>
                      </div>
                      <input 
                        type="radio" 
                        name="complexity" 
                        checked={complexity === tier.id} 
                        onChange={() => {}}
                        className="radio radio-xs radio-indigo" 
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Delivery Speed */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-zinc-300 uppercase tracking-wider block">
                  5. Project Timeline
                </label>
                <div className="flex flex-col gap-2">
                  {[
                    { id: 'relaxed', label: 'Relaxed (Flexible Launch)', desc: '0.9x cost - Extended delivery' },
                    { id: 'standard', label: 'Standard Schedule', desc: '1.0x cost - Average delivery' },
                    { id: 'urgent', label: 'Urgent Delivery (Express)', desc: '1.25x cost - Accelerated delivery' },
                  ].map((time) => (
                    <label 
                      key={time.id}
                      onClick={() => setTimeline(time.id)}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        timeline === time.id
                          ? 'border-purple-500/50 bg-purple-950/30 text-purple-400 font-bold'
                          : 'border-zinc-800 bg-zinc-900/40 hover:bg-zinc-850 text-zinc-400'
                      }`}
                    >
                      <div>
                        <span className="block text-xs font-bold">{time.label}</span>
                        <span className="block text-[9px] text-zinc-550 font-light">{time.desc}</span>
                      </div>
                      <input 
                        type="radio" 
                        name="timeline" 
                        checked={timeline === time.id} 
                        onChange={() => {}}
                        className="radio radio-xs radio-purple" 
                      />
                    </label>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Pricing Card & Lead Submit - right */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-zinc-900 text-white rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative overflow-hidden border border-zinc-800/80">
              {/* Background accent bubble */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl -z-0"></div>

              <div className="space-y-2 relative z-10 text-left">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block">Estimated Quote</span>
                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">Project Summary</h3>
              </div>

              {/* Financial calculations review */}
              <div className="border-t border-b border-zinc-800 py-6 space-y-3 text-xs md:text-sm font-light text-left relative z-10 text-zinc-400">
                <div className="flex justify-between">
                  <span>Platform Base ({platform.toUpperCase()})</span>
                  <span className="font-semibold text-white">
                    ${platform === 'web' ? '1,200' : platform === 'mobile' ? '1,800' : platform === 'ecommerce' ? '2,000' : '2,500'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Development Screens ({pages})</span>
                  <span className="font-semibold text-white">${pages * 120}</span>
                </div>
                <div className="flex justify-between">
                  <span>Features Add-ons</span>
                  <span className="font-semibold text-white">
                    ${Object.entries(features).reduce((acc, [key, val]) => {
                      if (!val) return acc;
                      if (key === 'database') return acc + 500;
                      if (key === 'auth') return acc + 300;
                      if (key === 'payments') return acc + 400;
                      if (key === 'dashboard') return acc + 600;
                      if (key === 'multilingual') return acc + 250;
                      if (key === 'analytics') return acc + 350;
                      if (key === 'aiIntegrations') return acc + 600;
                      return acc;
                    }, 0)}
                  </span>
                </div>
                {complexity !== 'professional' && (
                  <div className="flex justify-between">
                    <span>Design Tier Adjust</span>
                    <span className="font-semibold text-white">
                      {complexity === 'basic' ? '-20%' : '+35%'}
                    </span>
                  </div>
                )}
                {timeline !== 'standard' && (
                  <div className="flex justify-between">
                    <span>Delivery speed premium</span>
                    <span className="font-semibold text-white">
                      {timeline === 'relaxed' ? '-10%' : '+25%'}
                    </span>
                  </div>
                )}
              </div>

              {/* Calculations display results */}
              <div className="grid grid-cols-2 gap-4 py-2 relative z-10 text-left">
                <div className="space-y-1">
                  <span className="text-[10px] text-zinc-550 uppercase tracking-wider block font-bold">Price Estimate</span>
                  <span className="text-3xl md:text-4xl font-extrabold text-indigo-400 block font-mono">
                    ${total.toLocaleString()}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-zinc-550 uppercase tracking-wider block font-bold">Delivery Time</span>
                  <span className="text-2xl md:text-3xl font-extrabold text-white block">
                    {weeks} {weeks === 1 ? 'Week' : 'Weeks'}
                  </span>
                </div>
              </div>

              {/* Lead captures form */}
              <div className="relative z-10 pt-4 border-t border-zinc-800 text-left">
                {submitted ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 animate-in fade-in duration-300">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 animate-bounce" />
                    <div>
                      <span className="block font-bold text-sm">Quote Plan Submitted!</span>
                      <span className="block text-xs text-zinc-400 font-light mt-1">
                        Our engineering team will review this spec sheet and email you a customized proposal within 24 hours.
                      </span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSendQuote} className="space-y-4">
                    <span className="block text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                      Request Final Proposal
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      <input 
                        type="text" 
                        required
                        placeholder="Your Name"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="bg-zinc-950/80 border border-zinc-800 focus:border-indigo-500 focus:outline-none rounded-xl px-4 py-3 text-xs w-full transition-colors text-white placeholder-zinc-650"
                      />
                      <input 
                        type="email" 
                        required
                        placeholder="Your Email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="bg-zinc-950/80 border border-zinc-800 focus:border-indigo-500 focus:outline-none rounded-xl px-4 py-3 text-xs w-full transition-colors text-white placeholder-zinc-650"
                      />
                    </div>
                    <textarea 
                      placeholder="Add any extra custom requirements..."
                      rows="2"
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      className="bg-zinc-950/80 border border-zinc-800 focus:border-indigo-500 focus:outline-none rounded-xl px-4 py-3 text-xs w-full resize-none transition-colors text-white placeholder-zinc-650"
                    ></textarea>
                    
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-3.5 px-4 rounded-xl transition-all shadow-md shadow-indigo-900/40"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Project Spec Sheet</span>
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
