import React from 'react';
import { Shield, Linkedin, Rocket, Code, Heart, Palette, Zap, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Palette,
      title: "Custom UI Designs",
      desc: "Bespoke digital design systems, user journey flows, and high-fidelity interactive wireframes for modern brands."
    },
    {
      icon: Zap,
      title: "Speed Optimization",
      desc: "We compile, compress, and deliver highly optimized assets for lightning-fast speeds and top performance scores."
    },
    {
      icon: Users,
      title: "Direct Partnerships",
      desc: "Speak directly with engineers. No middle-men, no account managers, and no delayed emails."
    },
    {
      icon: Rocket,
      title: "Same-Day Delivery",
      desc: "Our AI-enhanced workflow means we can deliver quality websites in record time."
    },
    {
      icon: Code,
      title: "Clean, Modern Code",
      desc: "We build websites that are maintainable, scalable, and optimized for performance."
    },
    {
      icon: Heart,
      title: "Ongoing Support",
      desc: "We don't just build and leave. Our team provides continued support for your success."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white/20">
      {/* Background accents */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-indigo-50/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-purple-50/10 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Header Hero Section */}
        <div className="space-y-6 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            About <span className="text-indigo-650 font-black">Nextshop</span>
          </h2>
          <p className="text-slate-600 font-light text-base md:text-lg leading-relaxed max-w-2xl">
            We're not a DIY website builder. We're a team of expert engineers who build your website for you.
          </p>


        </div>

        {/* How We're Different Card */}
        <div className="max-w-4xl mx-auto mt-16 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-[32px] p-6 md:p-8 shadow-sm text-center">
          <h3 className="text-lg font-extrabold text-slate-800 tracking-tight mb-8">
            How We're Different
          </h3>

          <div className="space-y-8 max-w-2xl mx-auto text-left">
            {/* Point 1 */}
            <div className="flex gap-4.5 items-start">
              <div className="w-9 h-9 rounded-full bg-indigo-50 border border-indigo-100/80 flex items-center justify-center text-indigo-600 font-bold flex-shrink-0 text-xs shadow-sm">
                1
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-800 tracking-tight">
                  You Don't Build Anything
                </h4>
                <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                  Unlike DIY builders where you drag and drop, you simply tell us what you need. Our engineers handle all the technical work.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex gap-4.5 items-start">
              <div className="w-9 h-9 rounded-full bg-indigo-50 border border-indigo-100/80 flex items-center justify-center text-indigo-600 font-bold flex-shrink-0 text-xs shadow-sm">
                2
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-800 tracking-tight">
                  AI Is Our Internal Tool
                </h4>
                <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                  We use AI technology internally to speed up our development process. You never interact with AI — you only deal with our professional team.
                </p>
              </div>
            </div>
          </div>
        </div>



        {/* Our Values Section */}
        <div className="mt-24 space-y-12">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-extrabold text-slate-850 tracking-tight">
              Our Values
            </h3>
            <p className="text-slate-500 text-xs md:text-sm font-light">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-[32px] p-6 shadow-sm hover:shadow-md transition-all flex flex-col gap-4.5 text-left"
                >
                  <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100/80 flex items-center justify-center text-indigo-650 flex-shrink-0 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-slate-850 tracking-tight">
                      {val.title}
                    </h4>
                    <p className="text-slate-500 text-xs font-light leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
