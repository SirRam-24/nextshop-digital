import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import NextshopLogo from './NextshopLogo';

export default function Footer() {
  const [newsEmail, setNewsEmail] = useState('');
  const [subscribed, setSubsubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsEmail.trim()) return;
    setSubsubscribed(true);
    setTimeout(() => {
      setNewsEmail('');
    }, 2000);
  };

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'SERVICES', path: '/services' },
    { label: 'PORTFOLIO', path: '/portfolio' },
    { label: 'PRICING', path: '/pricing' },
    { label: 'CUSTOM APP', path: '/custom-app' }
  ];

  const resourceLinks = [
    { label: 'ABOUT', path: '/about' },
    { label: 'CONTACT', path: '/contact' },
    { label: 'TERMS', path: '/terms' }
  ];

  return (
    <footer className="bg-white text-slate-500 py-16 border-t border-slate-100 text-left">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Branding column */}
        <div className="md:col-span-4 space-y-6">
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <NextshopLogo className="w-8 h-8 hover:scale-105 transition-transform duration-300" />
            <span className="text-lg font-bold tracking-tight text-slate-800 flex items-center">
              Nextshop
            </span>
          </Link>
          
          <p className="text-xs font-light text-slate-550 leading-relaxed max-w-sm">
            High-converting websites delivered same day, cheaper than any traditional web design provider. Our engineers handle everything using cutting-edge AI technology.
          </p>

          <div className="space-y-3">
            <Link 
              to="/contact" 
              className="inline-block text-xs font-bold text-indigo-600 hover:text-indigo-750 transition-colors"
            >
              Talk to Website Consultant &rarr;
            </Link>

            <div>
              {/* Trustpilot Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">
                <span className="text-emerald-600 font-extrabold flex items-center gap-0.5">
                  <svg className="w-3.5 h-3.5 fill-current text-emerald-500" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  Trustpilot
                </span>
                <div className="flex items-center gap-0.5 text-white bg-emerald-500 rounded p-0.5 scale-90">
                  <span className="w-2.5 h-2.5 text-[7px] font-bold flex items-center justify-center">★</span>
                  <span className="w-2.5 h-2.5 text-[7px] font-bold flex items-center justify-center">★</span>
                  <span className="w-2.5 h-2.5 text-[7px] font-bold flex items-center justify-center">★</span>
                  <span className="w-2.5 h-2.5 text-[7px] font-bold flex items-center justify-center">★</span>
                  <span className="w-2.5 h-2.5 text-[7px] font-bold flex items-center justify-center text-emerald-250">★</span>
                </div>
                <span className="text-slate-450 font-bold font-mono text-[10px]">4.2</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a href="#" className="p-2 rounded-lg bg-slate-50 border border-slate-200/60 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-slate-50 border border-slate-200/60 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-slate-50 border border-slate-200/60 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="mailto:hello@nextshop.com" className="p-2 rounded-lg bg-slate-50 border border-slate-200/60 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-2 space-y-4">
          <span className="text-xs font-bold text-slate-850 uppercase tracking-widest block">
            Navigation
          </span>
          <ul className="space-y-2.5 text-xs">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className="text-slate-550 hover:text-indigo-650 transition-colors font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Platform Column */}
        <div className="md:col-span-2 space-y-4">
          <span className="text-xs font-bold text-slate-850 uppercase tracking-widest block">
            Resources
          </span>
          <ul className="space-y-2.5 text-xs">
            {resourceLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className="text-slate-550 hover:text-indigo-650 transition-colors font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="md:col-span-4 space-y-4">
          <span className="text-xs font-bold text-slate-850 uppercase tracking-widest block">
            Newsletter Sign-up
          </span>
          <p className="text-xs font-light text-slate-550 leading-relaxed">
            Subscribe to receive our latest insights on modern web development stacks, SEO, and business web optimization techniques.
          </p>
          
          {subscribed ? (
            <div className="text-xs text-emerald-600 font-bold bg-emerald-500/10 border border-emerald-500/20 px-4 py-3.5 rounded-xl text-center">
              Successfully Subscribed!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input 
                type="email" 
                required
                placeholder="you@email.com" 
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                className="bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:outline-none rounded-xl px-4 py-3.5 text-xs w-full text-slate-800 placeholder-slate-400 shadow-sm transition-colors"
              />
              <button 
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-xl shadow-md transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Copyright line */}
      <div className="max-w-7xl mx-auto px-6 pt-8 mt-12 border-t border-slate-100 text-center text-[10px] font-medium text-slate-450 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="space-y-1 text-left">
          <span>&copy; {new Date().getFullYear()} Nextshop Solutions. All rights reserved.</span>
          <span className="block text-[9px] text-purple-600 font-bold uppercase tracking-wider">MSME Registered Business</span>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <span className="text-[10px] font-light text-slate-400">Built with AI-powered engineering</span>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-indigo-650">Terms of Service</Link>
            <Link to="/terms" className="hover:text-indigo-650">Privacy Policy</Link>
            <a href="#" className="hover:text-indigo-650">Cookie Settings</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
