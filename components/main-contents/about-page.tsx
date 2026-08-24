"use client";

import CardSwap, { Card } from "@/components/CardSwap";
import { Shield, Target, Lock } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative w-full h-screen bg-black text-zinc-100 py-24 px-6 lg:px-12 overflow-hidden border-t border-zinc-900">
      
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <div className="lg:col-span-6 flex flex-col items-start">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-950/60 border border-green-500/40 text-green-400 text-xs font-mono mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,102,0.15)]">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>OUR MISSION // EST. 2024</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.2]">
            Securing Ethiopia’s Digital Future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-500 drop-shadow-[0_0_20px_rgba(0,255,102,0.3)]">
              With Localized Defense
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Founded in 2024, <strong className="text-white font-semibold">Geez Security</strong> is an emerging cybersecurity pioneer in Ethiopia, dedicated to helping organizations strengthen their security posture and defend against modern digital threats.
          </p>

          <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
            We combine world-class cybersecurity practices with a deep understanding of the local market, delivering practical, tailored solutions built specifically for the real-world challenges faced by Ethiopian businesses today.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6 pt-6 border-t border-zinc-800/80 w-full">
            <div>
              <span className="block text-2xl font-bold font-mono text-green-400">LOCAL</span>
              <span className="text-xs text-zinc-400 mt-1 block">Context & Insight</span>
            </div>
            <div>
              <span className="block text-2xl font-bold font-mono text-white">GLOBAL</span>
              <span className="text-xs text-zinc-400 mt-1 block">Security Standards</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 w-full flex justify-center">
          <div className="w-full max-w-[500px]" style={{ height: "550px", position: "relative" }}>
            <CardSwap
              cardDistance={50}
              verticalDistance={60}
              delay={5000}
              pauseOnHover={true}
            >
              <Card>
                <div className="h-full w-full bg-zinc-950/90 border border-green-500/40 rounded-2xl p-8 backdrop-blur-xl flex flex-col justify-between shadow-[0_0_30px_rgba(0,255,102,0.1)]">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 mb-6">
                      <Shield className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-green-400 uppercase tracking-widest block mb-2">01. OUR ORIGIN</span>
                    <h3 className="text-2xl font-bold text-white mb-3">Founded in 2024</h3>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      Born in Ethiopia to address the rapidly evolving digital landscape, bringing proactive defense strategies to local enterprises.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500 flex justify-between">
                    <span>GEEZ TECH</span>
                    <span className="text-green-400">EST. 2024</span>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="h-full w-full bg-zinc-950/90 border border-green-500/40 rounded-2xl p-8 backdrop-blur-xl flex flex-col justify-between shadow-[0_0_30px_rgba(0,255,102,0.1)]">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 mb-6">
                      <Target className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-green-400 uppercase tracking-widest block mb-2">02. TAILORED PROTECTION</span>
                    <h3 className="text-2xl font-bold text-white mb-3">Deep Local Context</h3>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      We understand local infrastructure and compliance requirements, bridging the gap between global standards and Ethiopian market needs.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500 flex justify-between">
                    <span>STRATEGY</span>
                    <span className="text-green-400">TAILORED DEFENSE</span>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="h-full w-full bg-zinc-950/90 border border-green-500/40 rounded-2xl p-8 backdrop-blur-xl flex flex-col justify-between shadow-[0_0_30px_rgba(0,255,102,0.1)]">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 mb-6">
                      <Lock className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-green-400 uppercase tracking-widest block mb-2">03. PROACTIVE GOAL</span>
                    <h3 className="text-2xl font-bold text-white mb-3">Resilient Infrastructure</h3>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      Empowering local businesses with zero-trust architectures, continuous monitoring, and instant incident response capabilities.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500 flex justify-between">
                    <span>SECURITY</span>
                    <span className="text-green-400">ZERO TRUST</span>
                  </div>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>

      </div>
    </section>
  );
}