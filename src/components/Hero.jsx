import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let lastTime = performance.now();

    let width = (canvas.width = canvas.getBoundingClientRect().width);
    let height = (canvas.height = canvas.getBoundingClientRect().height);
    let cx = width / 2;
    let cy = height / 2;

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = canvas.getBoundingClientRect().width;
        height = canvas.height = canvas.getBoundingClientRect().height;
        cx = width / 2;
        cy = height / 2;
        for (let p of particles) {
          p.updateHome();
        }
      }
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates tracking with target smoothing
    let mouse = { x: null, y: null, targetX: null, targetY: null };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = null;
      mouse.targetY = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    class Particle {
      constructor(relRadius, relAngle, color) {
        this.relRadius = relRadius;
        this.relAngle = relAngle;
        this.color = color;
        
        this.homeX = cx + Math.cos(this.relAngle) * this.relRadius;
        this.homeY = cy + Math.sin(this.relAngle) * this.relRadius;

        // Start particles with a small random offset from their home position
        this.x = this.homeX + (Math.random() - 0.5) * 80;
        this.y = this.homeY + (Math.random() - 0.5) * 80;

        this.vx = 0;
        this.vy = 0;
        this.size = Math.random() * 2.2 + 0.8;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.015 + 0.005;
      }

      updateHome() {
        this.homeX = cx + Math.cos(this.relAngle) * this.relRadius;
        this.homeY = cy + Math.sin(this.relAngle) * this.relRadius;
      }

      update(dt) {
        // 1. Spring force to home position
        const dxHome = this.homeX - this.x;
        const dyHome = this.homeY - this.y;
        this.vx += dxHome * 0.015 * dt;
        this.vy += dyHome * 0.015 * dt;

        // 2. Mouse interaction (smooth repulsion)
        if (mouse.x !== null) {
          const dxMouse = this.x - mouse.x;
          const dyMouse = this.y - mouse.y;
          const dist = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
          const repelDist = 200;
          if (dist < repelDist) {
            const force = (repelDist - dist) / repelDist;
            this.vx += (dxMouse / dist) * force * 0.7 * dt;
            this.vy += (dyMouse / dist) * force * 0.7 * dt;
          }
        }

        // 3. Gentle float drift (Brownian noise)
        this.wobble += this.wobbleSpeed * dt;
        this.vx += Math.cos(this.wobble) * 0.018 * dt;
        this.vy += Math.sin(this.wobble) * 0.018 * dt;

        // 4. Movement execution and damping
        this.x += this.vx * dt;
        this.y += this.vy * dt;
        
        this.vx *= Math.pow(0.88, dt);
        this.vy *= Math.pow(0.88, dt);
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = [];

    // Create concentric spiral arm particles (the primary ring patterns)
    const arms = 12;
    const particlesPerArm = 24;
    const colors = [
      '#4285F4', // Google Blue
      '#EA4335', // Google Red
      '#FBBC05', // Google Yellow
      '#34A853', // Google Green
      '#A855F7', // Purple
      '#06B6D4'  // Cyan
    ];

    for (let a = 0; a < arms; a++) {
      const baseAngle = (a / arms) * Math.PI * 2;
      for (let p = 0; p < particlesPerArm; p++) {
        const progress = p / particlesPerArm;
        const relRadius = 180 + progress * 520; // spiral starts 180px out and goes to 700px
        const relAngle = baseAngle + progress * 1.6; // spiral twist factor
        
        const isLeft = Math.cos(relAngle) < 0.15;
        const color = isLeft 
          ? colors[Math.floor(Math.random() * colors.length)] 
          : 'rgba(71, 85, 105, 0.22)';
        
        particles.push(new Particle(relRadius, relAngle, color));
      }
    }

    // Create random scattered background dust particles
    for (let i = 0; i < 100; i++) {
      const relRadius = Math.random() * 650 + 100;
      const relAngle = Math.random() * Math.PI * 2;
      const isLeft = Math.cos(relAngle) < 0.15;
      const color = isLeft 
        ? 'rgba(168, 85, 247, 0.15)' 
        : 'rgba(71, 85, 105, 0.12)';
      particles.push(new Particle(relRadius, relAngle, color));
    }

    const animate = (time) => {
      const dt = Math.min((time - lastTime) / 16.666, 3);
      lastTime = time;

      // Smooth mouse coordinate interpolation
      if (mouse.targetX !== null && mouse.x === null) {
        mouse.x = mouse.targetX;
        mouse.y = mouse.targetY;
      } else if (mouse.targetX !== null) {
        mouse.x += (mouse.targetX - mouse.x) * 0.12;
        mouse.y += (mouse.targetY - mouse.y) * 0.12;
      } else {
        mouse.x = null;
        mouse.y = null;
      }

      ctx.clearRect(0, 0, width, height);
      for (let p of particles) {
        p.update(dt);
        p.draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="home" className="relative pt-36 pb-16 overflow-hidden min-h-screen flex flex-col justify-between bg-grid-pattern">
      {/* Interactive Launch Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none -z-10" />
      
      {/* Dynamic Background Glowing Blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-indigo-200/30 blur-3xl animate-blob -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-200/20 blur-3xl animate-blob animation-delay-2000 -z-10"></div>
      <div className="absolute bottom-10 left-1/2 w-80 h-80 rounded-full bg-pink-100/30 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center items-center text-center pb-12">
        
        {/* Centered Hero Content */}
        <div className="space-y-8 w-full max-w-4xl flex flex-col items-center">
          
          <ScrollReveal delay={100} className="space-y-4 flex flex-col items-center">
            {/* Badges Row */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* AI-Powered Development Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 shadow-sm text-zinc-300 text-[10px] font-bold uppercase tracking-wider hover:border-indigo-500/50 transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-indigo-650" />
                <span>AI-Powered Engineering</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="space-y-4">
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
                AI-Powered Websites. <br />
                <span className="text-gradient font-black">Delivered the Same Day.</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed mx-auto">
                We build high-converting websites and launch them the same day — cheaper than any 
                traditional web design provider. Customized React apps and modern software solutions.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300} className="w-full flex justify-center">
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-2 w-full max-w-md">
              <Link 
                to="/contact"
                state={{ service: "Custom Website Package" }}
                className="group relative flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-full hover:-translate-y-0.5 transition-all duration-300 text-sm"
              >
                <span>Build My Website</span>
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/services"
                className="flex items-center justify-center gap-2 bg-zinc-900/40 hover:bg-zinc-900/90 border border-zinc-800/85 text-zinc-300 font-semibold py-4 px-8 rounded-full transition-all duration-300 text-sm"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400} className="w-full max-w-3xl pt-8">
            {/* Stats Bar Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-zinc-800/60">
              <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/45 rounded-2xl p-4 shadow-sm hover:bg-zinc-900/70 transition-colors">
                <span className="block text-2xl font-black text-white font-mono leading-none">24h</span>
                <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-wider mt-1">Same-Day Delivery</span>
              </div>
              <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/45 rounded-2xl p-4 shadow-sm hover:bg-zinc-900/70 transition-colors">
                <span className="block text-2xl font-black text-white font-mono leading-none">500+</span>
                <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-wider mt-1">Projects Completed</span>
              </div>
              <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/45 rounded-2xl p-4 shadow-sm hover:bg-zinc-900/70 transition-colors">
                <span className="block text-2xl font-black text-white font-mono leading-none">99%</span>
                <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-wider mt-1">Success Rate</span>
              </div>
              <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/45 rounded-2xl p-4 shadow-sm hover:bg-zinc-900/70 transition-colors flex flex-col justify-between min-h-[72px]">
                <div>
                  <span className="block text-2xl font-black text-white font-mono leading-none">15+</span>
                  <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-wider mt-1">Dedicated Experts</span>
                </div>
                <div className="flex justify-center -space-x-1.5 mt-2">
                  <div className="w-5 h-5 rounded-full border border-zinc-800 bg-indigo-500 flex items-center justify-center text-[7px] text-white font-bold">A</div>
                  <div className="w-5 h-5 rounded-full border border-zinc-800 bg-purple-500 flex items-center justify-center text-[7px] text-white font-bold">B</div>
                  <div className="w-5 h-5 rounded-full border border-zinc-800 bg-pink-500 flex items-center justify-center text-[7px] text-white font-bold">C</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
