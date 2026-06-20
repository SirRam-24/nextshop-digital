import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket, Zap, TrendingUp, ShoppingBag, HelpCircle, Check, Shield } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Pricing() {
  const navigate = useNavigate();

  const plans = [
    {
      title: "Starter Landing Page",
      description: "Essential Static Presence in 24 hours",
      badgeText: "STARTUPS & PERSONAL BRANDING",
      priceType: "ONE-TIME INVESTMENT",
      price: "999",
      icon: Rocket,
      ctaText: "LAUNCH MY SITE",
      subCtaText: "FAST TURNAROUND GUARANTEED",
      highlight: false,
      badgeColor: "text-indigo-650 bg-indigo-50 border border-indigo-100",
      btnStyle: "bg-indigo-50 hover:bg-indigo-100 text-indigo-750 font-bold",
      features: [
        "Professional Single Page",
        "24-Hour Speed Launch",
        "Mobile-Responsive Layout",
        "Direct WhatsApp Link",
        "Modern Visual Design",
        "SSL Trust Security",
        "Social Media Integration",
        "High-Speed Static Site"
      ]
    },
    {
      topPill: "MOST POPULAR",
      topPillBg: "bg-indigo-600 text-white",
      title: "Business Website",
      description: "Establish authority & capture more leads",
      badgeText: "PROFESSIONAL SERVICES & AGENCIES",
      priceType: "ONE-TIME INVESTMENT",
      price: "2,499",
      icon: Zap,
      ctaText: "BUILD MY WEBSITE",
      subCtaText: "FAST TURNAROUND GUARANTEED",
      highlight: true,
      badgeColor: "text-indigo-650 bg-indigo-50 border border-indigo-100",
      btnStyle: "bg-indigo-600 hover:bg-indigo-750 text-white font-bold shadow-md shadow-indigo-200",
      features: [
        "4-Page Professional Sales Machine",
        "Everything in Starter plan",
        "Authority-Building UI/UX",
        "Google Local SEO Setup",
        "Custom Multi-Step Lead Forms",
        "Google Maps Local Visibility",
        "Testimonials (Social Proof)",
        "Traffic Insights (Analytics)"
      ]
    },
    {
      topPill: "GROWTH READY",
      topPillBg: "bg-emerald-500 text-white",
      title: "Growth Website",
      description: "Scale your traffic & dominate your niche",
      badgeText: "ESTABLISHED BRANDS & HIGH GROWTH",
      priceType: "ONE-TIME INVESTMENT",
      price: "3,499",
      icon: TrendingUp,
      ctaText: "GROW MY BUSINESS",
      subCtaText: "FAST TURNAROUND GUARANTEED",
      highlight: false,
      badgeColor: "text-indigo-650 bg-indigo-50 border border-indigo-100",
      btnStyle: "bg-indigo-50 hover:bg-indigo-100 text-indigo-750 font-bold",
      features: [
        "Up to 6 Professional Pages",
        "Everything in Business plan",
        "Full ROI-Focused Architecture",
        "High-Impact Sales Animations",
        "SEO Blog (Traffic Generator)",
        "Advanced Keywords Strategy",
        "Newsletter (Lead Nurturing)",
        "Core Web Vitals (Google Fast)",
        "Sales Funnel Strategy Call"
      ]
    },
    {
      topPill: "EXCLUSIVE LIMITED OFFER",
      topPillBg: "bg-rose-500 text-white",
      title: "Ecommerce Website",
      description: "Limited Offer: Sell anything 24/7",
      badgeText: "PRODUCT SALES & RETAIL BRANDS",
      priceType: "STARTING AT",
      price: "4,999",
      icon: ShoppingBag,
      ctaText: "START SELLING",
      subCtaText: "SCALABLE STORE",
      highlight: false,
      badgeColor: "text-indigo-650 bg-indigo-50 border border-indigo-100",
      btnStyle: "bg-indigo-50 hover:bg-indigo-100 text-indigo-750 font-bold",
      features: [
        "Multi-Page Store (20+ Product Pages)",
        "Everything in Growth plan",
        "24/7 Global Sales Engine",
        "Frictionless Checkout UI",
        "Payment Gateway Integration",
        "Automated Order Management",
        "Abandoned Cart Recovery",
        "Inventory Sync Alerts"
      ]
    }
  ];

  const handleSelectPlan = (planTitle) => {
    navigate('/contact', { state: { service: planTitle } });
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-indigo-50/10 via-purple-50/20 to-white min-h-screen">
      {/* Background visual accents */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-purple-100/10 via-indigo-50/5 to-transparent -z-10 blur-3xl"></div>
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-purple-100/20 blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-indigo-100/15 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        {/* Header Block */}
        <div className="text-center space-y-6 max-w-4xl mx-auto mb-16">
          <ScrollReveal delay={50}>
            <h1 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-tight">
              Simple, Transparent <span className="text-indigo-600">Pricing</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={150}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full border border-indigo-600/30 text-indigo-650 bg-indigo-50/30 text-xs font-semibold">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                One-time Payment
              </span>
              <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full border border-indigo-600/30 text-indigo-650 bg-indigo-50/30 text-xs font-semibold">
                <Shield className="w-3.5 h-3.5" />
                100% Ownership
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 100} className="h-full flex">
                <div
                  className={`w-full relative rounded-[32px] p-6 bg-white/90 border transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between text-left overflow-hidden ${
                    plan.highlight
                      ? 'border-indigo-600/40 ring-4 ring-indigo-600/5 shadow-2xl shadow-indigo-150'
                      : 'border-slate-200/80 hover:border-indigo-200 hover:shadow-xl'
                  }`}
                >
                  
                  {/* Top Pill / Badge if present */}
                  {plan.topPill && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`px-3 py-1 rounded-full text-[9px] font-black tracking-wider uppercase ${plan.topPillBg}`}>
                        {plan.topPill}
                      </span>
                    </div>
                  )}

                  {/* Top spacing depending on whether there's a pill */}
                  <div className={`space-y-6 flex-1 ${plan.topPill ? 'pt-8' : ''}`}>
                    {/* Header: Icon & Titles */}
                    <div className="space-y-4 pt-2">
                      <div className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                          {plan.title}
                        </h3>
                        <p className="text-slate-500 text-xs font-light leading-relaxed">
                          {plan.description}
                        </p>
                      </div>

                      {/* Small badge list */}
                      <div>
                        <span className={`inline-block px-2.5 py-1 rounded-md text-[9px] font-bold tracking-wider leading-none ${plan.badgeColor}`}>
                          {plan.badgeText}
                        </span>
                      </div>
                    </div>

                    {/* Price Block */}
                    <div className="py-4 border-y border-slate-100/80 space-y-1.5">
                      <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                        {plan.priceType}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-3xl font-black text-slate-900 tracking-tight flex items-center">
                          ₹ {plan.price}
                        </span>
                        <button className="text-slate-400 hover:text-slate-650 transition-colors">
                          <HelpCircle className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Features checklist */}
                    <div className="pt-2">
                      <ul className="space-y-3.5">
                        {plan.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex gap-2.5 items-start text-xs text-slate-600 font-light leading-relaxed">
                            <div className="w-4.5 h-4.5 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0 mt-0.5 shadow-sm">
                              <Check className="w-3 h-3 stroke-[2.5]" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Footer */}
                  <div className="pt-8 space-y-2 mt-6">
                    <button
                      onClick={() => handleSelectPlan(plan.title)}
                      className={`w-full py-4.5 px-4 rounded-2xl text-xs tracking-wider transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${plan.btnStyle}`}
                    >
                      {plan.ctaText}
                    </button>
                    <span className="block text-[8px] font-bold text-slate-450 tracking-widest uppercase text-center leading-none">
                      {plan.subCtaText}
                    </span>
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
