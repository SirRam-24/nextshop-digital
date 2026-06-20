import React from 'react';
import { Shield, FileText, Lock, Eye } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-grid-pattern">
      {/* Background accents */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-indigo-100/30 blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-100/20 blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 text-left">
        
        {/* Page Header */}
        <div className="space-y-4 mb-12">
          <span className="text-xs font-black text-indigo-600 uppercase tracking-widest block">LEGAL POLICY</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Terms of Service & <span className="text-gradient font-black">Privacy Policy</span>
          </h1>
          <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
            Last updated: June 16, 2026. Please read these terms carefully before using our software engineering services.
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white/60 backdrop-blur-md border border-slate-200/50 rounded-3xl p-8 md:p-12 shadow-xl space-y-10">
          
          {/* Section 1: Terms of Service */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-650" />
              1. Terms of Service
            </h2>
            <div className="text-slate-600 font-light text-xs md:text-sm leading-relaxed space-y-3">
              <p>
                By engaging Nextshop Solutions ("Nextshop", "we", "us") or using our interactive cost calculators, you agree to comply with and be bound by the following terms and conditions.
              </p>
              <p>
                We construct custom software models, website configurations, and database endpoints based on client requirements. While we strive to meet all scheduled deadlines (including expedited 24-hour deliveries where explicitly scoped), delivery schedules are dependent on clients providing prompt feedback and operational assets.
              </p>
              <p>
                Any estimated pricing generated via our online App Cost & Timeline Estimator constitutes an initial proposal and estimate, not a binding contract. Final scoping documents and development terms will be formalised via signed service agreements.
              </p>
            </div>
          </div>

          {/* Section 2: Privacy Policy */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Lock className="w-5 h-5 text-indigo-655" />
              2. Privacy & Data Handling
            </h2>
            <div className="text-slate-600 font-light text-xs md:text-sm leading-relaxed space-y-3">
              <p>
                Your privacy is paramount to Nextshop. When you submit names, email addresses, or custom project configurations through our quotation forms, we process this information solely to generate design outlines and contact you regarding custom solutions.
              </p>
              <p>
                We do not sell, rent, or distribute client contact credentials or project configurations to third-party advertisers. All data collected is stored securely in encrypted databases.
              </p>
            </div>
          </div>

          {/* Section 3: Intellectual Property */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Shield className="w-5 h-5 text-indigo-655" />
              3. Code Ownership & Intellectual Property
            </h2>
            <div className="text-slate-600 font-light text-xs md:text-sm leading-relaxed space-y-3">
              <p>
                Upon completion of the final payment phase, ownership of the specific React code, static stylesheets, database setup records, and media configurations engineered for your business will be fully transferred to you.
              </p>
              <p>
                Nextshop retains the right to use boilerplate design models, standard utility classes, and custom software libraries built prior to or during development for other business operations.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
