"use client";

import { useState } from "react";
import Link from "next/link";
import MoltenMetal from "@/components/MoltenMetal";
import BlurText from "@/components/BlurText";
import  SpecularButton  from "@/components/SpecularButton";
export default function HeroPage() {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);

  return (
    <section className="relative min-h-screen w-full bg-black text-zinc-100 flex items-center justify-center overflow-hidden pt-[100px] pb-16 font-sans">
      
      <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
        <MoltenMetal
          color1="#00ff66"
          color2="#80ffb3"
          color3="#00cc52"
          speed={0.12}
          scale={5.0}
          detail={4}
          glow={0.8}
          coreSize={0.05}
          swirl={0.5}
          fold={-0.2}
          blackPoint={0.05}
          brightness={1.3}
          colorMode="ember"
          grain={false}
          grainIntensity={0}
          mouseInteraction={false}
          mouseStrength={0.3}
          opacity={1}
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/60 to-black pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-green-950/70 border border-green-500/50 text-green-400 text-xs font-mono mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,102,0.2)]">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>24/7 Enterprise Data Protection</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            <BlurText
        text="Protect Your Company Data / Legacy"
        delay={200}
  animateBy="words"
  direction="top"
  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]"
        />
            <div className="">
                    <BlurText
        text="With Geez Security"
        delay={200}
  animateBy="letters"
  direction="bottom"
  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-green-400 leading-[1.15]"/>
              
            </div>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed font-normal">
            Our cybersecurity experts protect your digital assets, guard against ransomware attacks, and secure your customer data before cybercriminals can exploit vulnerabilities.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
 <SpecularButton
  size="lg"
  radius={12}
  tint="#00e937"
  tintOpacity={0.1}
  blur={16}
  textColor="#f4f4f5"
  lineColor="#00ff55"
  baseColor="#02170b"
  intensity={2}
  shineSize={38}
  shineFade={30}
  thickness={0.6}
  speed={0.6}
  followMouse={false}
  proximity={200}
  autoAnimate
  onClick={() => console.log('clicked')}
>
  Get Started
</SpecularButton>
            
         <Link
  href="/#about"
  className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-[#16f97d] bg-zinc-950/80 border border-[#16f97d]/30 hover:bg-[#16f97d]/10 hover:border-[#16f97d] hover:shadow-[0_0_20px_rgba(22,249,125,0.15)] rounded-xl backdrop-blur-md transition-all duration-300 active:scale-95 shrink-0"
>
  Learn More
</Link>
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-800/80 w-full grid grid-cols-3 gap-6">
            <div>
              <span className="block text-2xl sm:text-3xl font-extrabold text-green-400 font-mono">100%</span>
              <span className="text-xs sm:text-sm text-zinc-400 mt-1 block">Threat Detection</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono">24/7</span>
              <span className="text-xs sm:text-sm text-zinc-400 mt-1 block">Live Monitoring</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono">Zero</span>
              <span className="text-xs sm:text-sm text-zinc-400 mt-1 block">Data Loss Guarantee</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 w-full">
          <div className="bg-zinc-950/90 border border-green-500/40 rounded-2xl p-6 shadow-[0_0_50px_rgba(0,0,0,0.9)] backdrop-blur-xl relative">
            
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-green-400 font-medium">Geez Security Shield</span>
            </div>

            <div className="mt-6 space-y-4">
              <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Interactive System Diagnostic</p>
              
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setActiveStep(1)}
                  className={`py-2 px-3 text-xs rounded-lg transition-all font-medium ${
                    activeStep === 1
                      ? "bg-green-500/20 text-green-400 border border-green-500/50"
                      : "bg-zinc-900 text-zinc-400 border border-zinc-800"
                  }`}
                >
                  1. Scan
                </button>
                <button
                  onClick={() => setActiveStep(2)}
                  className={`py-2 px-3 text-xs rounded-lg transition-all font-medium ${
                    activeStep === 2
                      ? "bg-green-500/20 text-green-400 border border-green-500/50"
                      : "bg-zinc-900 text-zinc-400 border border-zinc-800"
                  }`}
                >
                  2. Protect
                </button>
                <button
                  onClick={() => setActiveStep(3)}
                  className={`py-2 px-3 text-xs rounded-lg transition-all font-medium ${
                    activeStep === 3
                      ? "bg-green-500/20 text-green-400 border border-green-500/50"
                      : "bg-zinc-900 text-zinc-400 border border-zinc-800"
                  }`}
                >
                  3. Prevent
                </button>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 min-h-[140px] flex flex-col justify-between">
                {activeStep === 1 && (
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-white">Vulnerability Scanning</span>
                      <span className="text-xs text-green-400 font-mono">Active</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      We check your networks, websites, and databases for hidden security holes before hackers find them.
                    </p>
                  </div>
                )}

                {activeStep === 2 && (
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-white">Ransomware Defense</span>
                      <span className="text-xs text-green-400 font-mono">Encrypted</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Real-time protection that blocks malicious software and locks down sensitive financial and customer records.
                    </p>
                  </div>
                )}

                {activeStep === 3 && (
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-white">Employee & Access Control</span>
                      <span className="text-xs text-green-400 font-mono">Secured</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Safe multi-factor logins and anti-phishing protection to ensure only authorized staff access your system.
                    </p>
                  </div>
                )}

                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                  <span>System Health Status</span>
                  <span className="text-green-400 font-semibold">Protected by Geez Tech</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 text-center">
              <Link
                href="/contact"
                className="text-xs font-semibold text-green-400 hover:text-green-300 underline underline-offset-4"
              >
                Schedule a 15-minute consultation with an expert →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}