import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, Layers, Tag, Calculator, Info, Mail, Menu, X, FileText } from 'lucide-react';
import NextshopLogo from './NextshopLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'HOME', icon: Home },
    { path: '/services', label: 'SERVICES', icon: Briefcase },
    { path: '/portfolio', label: 'PORTFOLIO', icon: Layers },
    { path: '/pricing', label: '₹ PRICING', icon: Tag },
    { path: '/custom-app', label: 'CUSTOM APP', icon: Calculator },
    { path: '/about', label: 'ABOUT', icon: Info },
    { path: '/contact', label: 'CONTACT', icon: Mail },
    { path: '/terms', label: 'TERMS', icon: FileText },
  ];

  // Items for the mobile "More Menu" horizontal scroll row
  const moreMenuItems = [
    { path: '/services', label: 'Services', icon: Briefcase, desc: 'Open page' },
    { path: '/custom-app', label: 'Custom App', icon: Calculator, desc: 'Open page' },
    { path: '/about', label: 'About', icon: Info, desc: 'Open page' },
    { path: '/contact', label: 'Contact', icon: Mail, desc: 'Open page' },
    { path: '/terms', label: 'Terms', icon: FileText, desc: 'Open page' },
  ];

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* ========================================== */}
      {/* DESKTOP HEADER BAR (Visible on xl and up) */}
      {/* ========================================== */}
      <div className="hidden xl:block fixed top-6 left-0 w-full z-50 px-6 transition-all duration-300">
        <nav className={`max-w-7xl mx-auto rounded-full px-8 flex items-center justify-between transition-all duration-300 ${scrolled
            ? 'glass-nav shadow-xl py-3.5'
            : 'bg-[#0f0f11]/35 border border-zinc-800/20 py-5 shadow-none backdrop-blur-[2px]'
          }`}>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <NextshopLogo className="w-12 h-12 hover:scale-105 transition-transform duration-300" />
            <span className="text-2xl font-black tracking-tight text-white flex items-center">
              Nextshop
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${isActive
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/40'
                    }`
                  }
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </nav>
      </div>

      {/* ========================================== */}
      {/* MOBILE FLOATING TAB BAR (Visible below xl) */}
      {/* ========================================== */}
      <div className="xl:hidden fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-50 transition-all duration-300">
        
        {/* Navigation Bar Pill */}
        <nav className="bg-[#0b0b0c]/90 backdrop-blur-lg border border-zinc-800/60 shadow-xl rounded-full py-2 px-3 flex items-center justify-between">
          
          {/* Home Tab */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                isActive
                  ? 'bg-indigo-950/40 border border-indigo-900/60 text-indigo-400 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`
            }
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </NavLink>

          {/* Portfolio Tab */}
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                isActive
                  ? 'bg-indigo-950/40 border border-indigo-900/60 text-indigo-400 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`
            }
          >
            <Layers className="w-4 h-4" />
            <span>Portfolio</span>
          </NavLink>

          {/* Pricing Tab */}
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                isActive
                  ? 'bg-indigo-950/40 border border-indigo-900/60 text-indigo-400 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`
            }
          >
            <Tag className="w-4 h-4" />
            <span>Pricing</span>
          </NavLink>

          {/* More Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-full transition-all duration-300 hover:bg-zinc-850 flex items-center justify-center ${
              isOpen ? 'bg-indigo-950/50 border border-indigo-900/65 text-indigo-400 scale-105' : 'text-zinc-400'
            }`}
          >
            {isOpen ? (
              /* Custom dynamic matching dynamic ||| icon */
              <div className="flex gap-[3px] items-center py-1 px-0.5">
                <span className="w-[2.5px] h-3.5 bg-indigo-400 rounded-full animate-pulse"></span>
                <span className="w-[2.5px] h-3.5 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></span>
                <span className="w-[2.5px] h-3.5 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></span>
              </div>
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

        </nav>

        {/* Dropdown "More Menu" Panel */}
        {isOpen && (
          <div className="bg-[#0b0b0c]/95 backdrop-blur-lg border border-zinc-800/60 shadow-2xl rounded-[32px] p-6 mt-3 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300">
            
            {/* Header */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black text-zinc-500 tracking-wider">
                MORE MENU
              </span>
              <span className="text-[10px] font-bold text-zinc-600 flex items-center gap-1">
                Swipe &rarr;
              </span>
            </div>

            {/* Horizontal Scroll Menu List */}
            <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
              {moreMenuItems.map((item, idx) => {
                const Icon = item.icon;
                const isItemActive = location.pathname === item.path;
                return (
                  <Link
                    key={idx}
                    to={item.path}
                    className={`flex flex-col items-center justify-center text-center p-3 rounded-2xl min-w-[95px] transition-all duration-300 hover:scale-102 ${
                      isItemActive
                        ? 'bg-indigo-950/40 border border-indigo-900/60 text-indigo-400'
                        : 'border border-transparent hover:bg-zinc-850'
                    }`}
                  >
                    {/* Rounded Icon container */}
                    <div className="w-12 h-12 rounded-full bg-indigo-950/60 border border-indigo-900/40 flex items-center justify-center text-indigo-450 mb-2">
                      <Icon className="w-5 h-5" />
                    </div>
                    {/* Labels */}
                    <span className="text-xs font-bold text-zinc-200 leading-tight">
                      {item.label}
                    </span>
                    <span className="text-[9px] text-zinc-500 mt-0.5 leading-none">
                      {item.desc}
                    </span>
                  </Link>
                );
              })}
            </div>

          </div>
        )}

      </div>
    </>
  );
}
