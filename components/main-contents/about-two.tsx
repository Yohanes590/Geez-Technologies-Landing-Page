"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Strands from "@/components/Strands";
import { 
  ShieldCheck, 
  Activity, 
  Users, 
  GraduationCap, 
  Search, 
  Radar, 
  ArrowRight 
} from "lucide-react";

export default function AboutSection() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Smooth scroll helper using Lenis instance
  const scrollToSection = (target: string | HTMLElement) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        duration: 1.5,
        offset: -40,
      });
    } else {
      // Fallback in case Lenis hasn't mounted yet
      const el = typeof target === "string" ? document.querySelector(target) : target;
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const securityFeatures = [
    {
      icon: <Search className="w-6 h-6 text-[#16f97d]" />,
      title: "Penetration Testing Services",
      description: "Proactive simulation of real cyberattacks to find and fix security gaps before criminals exploit them."
    },
    {
      icon: <Activity className="w-6 h-6 text-[#16f97d]" />,
      title: "24/7 Monitoring & Support",
      description: "Round-the-clock defense systems keeping constant watch over your critical systems and data."
    },
    {
      icon: <Users className="w-6 h-6 text-[#16f97d]" />,
      title: "Expert Team of Professionals",
      description: "Dedicated local security specialists delivering tailored defense strategies for Ethiopian businesses."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#16f97d]" />,
      title: "Customized Training Programs",
      description: "Empowering your staff with practical training to identify phishing scams and prevent human error."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#16f97d]" />,
      title: "Comprehensive Vulnerability Assessment",
      description: "Deep security audits across your websites, databases, and internal infrastructure."
    },
    {
      icon: <Radar className="w-6 h-6 text-[#16f97d]" />,
      title: "Real-time Threat Detection",
      description: "Instant automated alerts and threat containment to prevent data leaks before they cause damage."
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-black text-zinc-100 py-28 px-6 lg:px-12 overflow-hidden flex items-center justify-center border-t border-zinc-900">
      
      {/* 1. Full-Section Ambient Canvas Background */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-full h-full">
          <Strands
            colors={["#16f97d", "#56ed3a", "#06d41f"]}
            count={4}
            speed={0.7}
            amplitude={0.5}
            waviness={1}
            thickness={1}
            glow={2.2}
            taper={3}
            spread={0.8}
            intensity={0.6}
            saturation={2}
            opacity={0.2}
            scale={1.8}
            glass={false}
            refraction={1}
            dispersion={1}
            glassSize={1}
            hueShift={0.38}
          />
        </div>
      </div>

      {/* 2. Soft Edge Vignette */}
      <div className="absolute inset-0 z-1 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.85)_75%,_#000000_100%)] pointer-events-none" />

      {/* 3. Main Content Wrapper */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-950/80 border border-[#16f97d]/30 text-[#16f97d] text-xs font-mono mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(22,249,125,0.15)]">
          <span className="w-2 h-2 rounded-full bg-[#16f97d] animate-ping" />
          <span className="tracking-widest uppercase text-[11px] font-semibold">Continuous Business Protection</span>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] max-w-4xl">
          Stay Protected With <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16f97d] via-[#56ed3a] to-[#06d41f] drop-shadow-[0_0_40px_rgba(22,249,125,0.4)]">
            Geez Security
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal max-w-2xl">
          With the rapid advancement of technology, cyber threats are a constant risk for modern enterprises. <strong className="text-white">Geez Security</strong> delivers proactive, non-disruptive defense to safeguard your business operations and customer data.
        </p>

        {/* 4. Feature Cards Grid */}
        <div className="mt-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {securityFeatures.map((feature, idx) => (
            <div 
              key={idx}
              className="group relative p-7 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-[#16f97d]/50 transition-all duration-300 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_35px_rgba(22,249,125,0.15)] hover:-translate-y-1"
            >
              <div className="p-3 w-fit rounded-xl bg-[#16f97d]/10 border border-[#16f97d]/20 mb-5 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
  
        {/* 5. Call To Action Button -> Smooth Scroll to #contact */}
        <div className="mt-14">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
            className="inline-flex items-center gap-3 px-9 py-4 text-sm font-bold text-black bg-[#16f97d] hover:bg-[#56ed3a] rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(22,249,125,0.4)] hover:shadow-[0_0_50px_rgba(22,249,125,0.7)] active:scale-95 group cursor-pointer"
          >
            <span>Request Security Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}