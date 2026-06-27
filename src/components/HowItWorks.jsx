import React from 'react';
import { MessageSquare, Palette, Cpu, Rocket } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: MessageSquare,
      title: "Share Requirements",
      description: "Tell us what you need — your business vision, conversion goals, and style preferences."
    },
    {
      number: 2,
      icon: Palette,
      title: "Design & Build",
      description: "Our expert software engineers design and develop your bespoke custom website or web app."
    },
    {
      number: 3,
      icon: Cpu,
      title: "AI Acceleration",
      description: "State-of-the-art AI powers our engineering pipeline internally for unmatched speed and code quality."
    },
    {
      number: 4,
      icon: Rocket,
      title: "Deploy & Launch",
      description: "Your website goes live — fully responsive, lightning fast, and search engine optimized from day one."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      {/* Background graphic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              How It <span className="text-gradient font-black">Works</span>
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base font-light">
              A simple, streamlined process that gets your website from concept to launch in record time.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps Grid with Connecting Line */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 120} className="relative h-full">
                  <div className="flex flex-col items-center text-center space-y-6 group">
                    {/* Icon Container with Step Badge */}
                    <div className="relative">
                      {/* Main Icon Circle */}
                      <div className="w-24 h-24 rounded-full bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-center text-indigo-400 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-indigo-900/40 z-10 relative">
                        <Icon className="w-10 h-10 stroke-[1.5]" />
                      </div>

                      {/* Step Number Badge */}
                      <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center border-2 border-[#0b0b0c] shadow-sm z-20 group-hover:rotate-12 transition-transform duration-300">
                        {step.number}
                      </div>

                      {/* Custom SVG Connecting S-Curve pointing to the next step */}
                      {idx < 3 && (
                        <div className="hidden lg:block absolute top-10 left-[calc(50%+48px)] w-[calc(100vw/4-108px)] h-6 z-0 overflow-visible">
                          <svg className="w-full h-full" viewBox="0 0 100 24" fill="none" preserveAspectRatio="none">
                            <path
                                d="M0,12 C30,2 70,22 100,12"
                                stroke="#27272a"
                                strokeWidth="2"
                                strokeDasharray="4 4"
                                fill="none"
                                className="group-hover:stroke-indigo-400 group-hover:stroke-solid transition-colors duration-300"
                            />
                            {/* Arrowhead */}
                            <polygon
                                points="96,9 100,12 96,15"
                                fill="#27272a"
                                className="group-hover:fill-indigo-400 transition-colors duration-300"
                            />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Text Details */}
                    <div className="space-y-2 max-w-[240px]">
                      <h3 className="text-base font-bold text-white tracking-tight transition-colors group-hover:text-indigo-400">
                        {step.title}
                      </h3>
                      <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
