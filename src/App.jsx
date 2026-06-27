import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/Chatbot';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PricingPage from './pages/PricingPage';
import CustomAppPage from './pages/CustomAppPage';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-zinc-100 selection:bg-indigo-600 selection:text-white">
      <ScrollToTop />

      {/* Centered Floating Header Glassmorphic Menu */}
      <Navbar />

      {/* Main Layout Sections */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/custom-app" element={<CustomAppPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Global AI Chatbot helper */}
      <Chatbot />
    </div>
  );
}
