import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import NextshopLogo from './NextshopLogo';

export default function Footer() {
  const serviceLinks = [
    { label: 'Landing Pages', path: '/services' },
    { label: 'E-commerce Sites', path: '/services' },
    { label: 'Corporate Websites', path: '/services' },
    { label: 'Custom Web Apps', path: '/custom-app' },
    { label: 'SEO Optimization', path: '/services' },
  ];

  const companyLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Work / Portfolio', path: '/portfolio' },
    { label: 'Pricing Plans', path: '/pricing' },
    { label: 'Careers', path: '/about' },
  ];

  const featureLinks = [
    { label: 'AI-Powered Builder', path: '/' },
    { label: 'Custom Integrations', path: '/custom-app' },
    { label: 'Same-Day Delivery', path: '/pricing' },
    { label: 'Live Chat Support', path: '/contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', path: '/terms' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Cookie Settings', path: '#' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-[#0b0b0c] text-[#9b9c9e] py-16 px-6 md:px-12 lg:px-24 font-sans text-left">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: CTA + Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          {/* Left Column: CTA */}
          <div className="lg:col-span-5 flex flex-col items-start justify-between">
            <div className="space-y-6">
              <h2 className="text-white text-3xl md:text-4xl font-normal tracking-tight leading-tight max-w-md">
                Start exploring and building with Nextshop's latest web technologies.
              </h2>
              <Link
                to="/contact"
                className="inline-block bg-white text-black hover:bg-zinc-200 transition-all font-semibold py-3 px-6 rounded-full text-sm shadow-sm"
              >
                Sign up and get started
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Columns of Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Services */}
            <div>
              <h3 className="text-white text-sm font-medium tracking-wide mb-4">Services</h3>
              <ul className="space-y-3">
                {serviceLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.path}
                      className="hover:text-white transition-colors text-xs font-normal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white text-sm font-medium tracking-wide mb-4">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.path}
                      className="hover:text-white transition-colors text-xs font-normal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-white text-sm font-medium tracking-wide mb-4">Features</h3>
              <ul className="space-y-3">
                {featureLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.path}
                      className="hover:text-white transition-colors text-xs font-normal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information */}
            <div>
              <h3 className="text-white text-sm font-medium tracking-wide mb-4">Information</h3>
              <ul className="space-y-3">
                {legalLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.path}
                      className="hover:text-white transition-colors text-xs font-normal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Giant Logo Banner */}
        <div className="border-t border-zinc-800/60 pt-8 pb-4 flex items-center justify-start gap-4">
          <NextshopLogo className="w-[10vw] h-[10vw] md:w-[8vw] md:h-[8vw] lg:w-[7.5vw] lg:h-[7.5vw] xl:w-20 xl:h-20 min-w-[40px] min-h-[40px] hover:scale-105 transition-transform duration-300" />
          <span className="text-[10vw] md:text-[8vw] lg:text-[7.5vw] xl:text-[90px] font-semibold tracking-tighter text-white select-none leading-none">
            Nextshop
          </span>
        </div>

        {/* Copyright, Socials & Legal Strip */}
        <div className="border-t border-zinc-800/40 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-zinc-500 font-light">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span>&copy; {new Date().getFullYear()} Nextshop Solutions. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a 
                href="https://www.instagram.com/nextshop.online_builders?igsh=YThsOGp6czR3cXJ6" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <span className="text-zinc-700">|</span>
            <span className="font-normal text-zinc-600">Built with AI-powered engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
