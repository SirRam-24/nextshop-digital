import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Home, Briefcase, Layers, Tag, Calculator, Info, Users, Mail, Menu, X, FileText } from 'lucide-react';
import HMILogo from './HMILogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const navItems = [
    { path: '/', label: 'HOME', icon: Home },
    { path: '/services', label: 'SERVICES', icon: Briefcase },
    { path: '/portfolio', label: 'PORTFOLIO', icon: Layers },
    // { path: '/pricing', label: 'PRICING', icon: Tag },

    { path: '/about', label: 'ABOUT', icon: Info },

    { path: '/contact', label: 'CONTACT', icon: Mail },
    { path: '/terms', label: 'TERMS', icon: FileText },
  ];

  return (
    <div className="fixed top-4 left-0 w-full z-50 px-4 transition-all duration-300">
      <nav className={`max-w-7xl mx-auto rounded-full px-6 flex items-center justify-between transition-all duration-300 ${scrolled
          ? 'glass-nav shadow-xl py-2'
          : 'bg-white/35 border border-slate-200/20 py-3 shadow-none backdrop-blur-[2px]'
        }`}>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <HMILogo className="w-9 h-9 hover:scale-105 transition-transform duration-300" />
          <span className="text-xl font-bold tracking-tight text-slate-800 flex items-center">
            HMI <span className="text-indigo-600 font-extrabold ml-1">Digital</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100'
                    : 'text-slate-650 hover:text-indigo-605 hover:bg-indigo-50/50'
                  }`
                }
              >
                <Icon className="w-3.5 h-3.5" />
                {item.label}
              </NavLink>
            );
          })}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-full hover:bg-slate-100 text-slate-700 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-lg border border-slate-200/80 rounded-3xl shadow-2xl p-6 flex flex-col gap-3 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 w-full px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-205 ${isActive
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-700 hover:text-indigo-605 hover:bg-indigo-50'
                  }`
                }
              >
                <Icon className="w-4.5 h-4.5" />
                {item.label}
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
}
