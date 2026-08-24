"use client";

import React from "react";
import { 
  SiKaspersky, 
  SiPaloaltonetworks, 
  SiFortinet, 
  SiMalwarebytes 
} from "react-icons/si";

export default function TrustedPartners() {
  return (
    <section className="relative w-full bg-black text-white py-24 px-4 sm:px-8 border-y border-white/10 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#16f97d]/5 blur-[170px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#16f97d]/30 backdrop-blur-md mb-3 shadow-[0_0_15px_rgba(22,249,125,0.1)]">
            <span className="w-2 h-2 rounded-full bg-[#16f97d] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-gray-300">
              Security Infrastructure
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Trusted Partners
          </h2>

          <p className="max-w-xl text-gray-400 text-sm sm:text-base font-light">
            Engineered around world-class enterprise security architectures.
          </p>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* CARD 1: Palo Alto (Featured - Wide 7 Cols) */}
          <div className="lg:col-span-7 group relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] hover:from-white/[0.07] hover:to-white/[0.02] border border-white/10 hover:border-[#16f97d]/50 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_10px_35px_-10px_rgba(22,249,125,0.2)] flex flex-col justify-between overflow-hidden">
            <div className="absolute -right-8 -top-8 text-white/[0.02] group-hover:text-[#16f97d]/[0.06] transition-colors duration-500 pointer-events-none">
              <SiPaloaltonetworks className="w-64 h-64" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 text-[#16f97d] group-hover:bg-[#16f97d] group-hover:text-black transition-all duration-300">
                  <SiPaloaltonetworks className="w-8 h-8" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-[#16f97d]/10 border border-[#16f97d]/30 text-[#16f97d]">
                  Primary NGFW
                </span>
              </div>

              <h3 className="text-3xl font-black text-white group-hover:text-[#16f97d] transition-colors mb-2">
                Palo Alto Networks
              </h3>
              <p className="text-xs font-mono text-gray-400 mb-4">
                Perimeter Protection & Prisma Cloud Security
              </p>
              <p className="text-sm text-gray-300 font-light leading-relaxed max-w-lg mb-8">
                Deep integration with Next-Gen Firewalls providing granular zero-trust segmentation, automated threat prevention, and centralized perimeter policy enforcement.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16f97d]" /> Enterprise Standard
              </span>
              <span className="text-gray-500">Tier 1 Perimeter</span>
            </div>
          </div>

          {/* CARD 2: Fortinet (Compact - Narrow 5 Cols) */}
          <div className="lg:col-span-5 group relative p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[#16f97d]/50 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_10px_35px_-10px_rgba(22,249,125,0.2)] flex flex-col justify-between overflow-hidden">
            <div className="absolute -right-4 -bottom-4 text-white/[0.02] group-hover:text-[#16f97d]/[0.05] transition-colors duration-500 pointer-events-none">
              <SiFortinet className="w-48 h-48" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 text-[#16f97d] group-hover:bg-[#16f97d] group-hover:text-black transition-all duration-300">
                  <SiFortinet className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-gray-400">
                  FortiGate Mesh
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white group-hover:text-[#16f97d] transition-colors mb-1">
                Fortinet
              </h3>
              <p className="text-xs font-mono text-[#16f97d] mb-3">
                Unified Threat Management
              </p>
              <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                Hardware-accelerated security fabrics for high-capacity SD-WAN and automated attack surface mitigation.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-gray-500">
              <span>Security Fabric</span>
              <span className="text-[#16f97d]">Active</span>
            </div>
          </div>

          {/* CARD 3: Kaspersky (Compact - 5 Cols) */}
          <div className="lg:col-span-5 group relative p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[#16f97d]/50 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_10px_35px_-10px_rgba(22,249,125,0.2)] flex flex-col justify-between overflow-hidden">
            <div className="absolute -right-4 -bottom-4 text-white/[0.02] group-hover:text-[#16f97d]/[0.05] transition-colors duration-500 pointer-events-none">
              <SiKaspersky className="w-48 h-48" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 text-[#16f97d] group-hover:bg-[#16f97d] group-hover:text-black transition-all duration-300">
                  <SiKaspersky className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-gray-400">
                  SIEM & Forensics
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white group-hover:text-[#16f97d] transition-colors mb-1">
                Kaspersky
              </h3>
              <p className="text-xs font-mono text-[#16f97d] mb-3">
                Threat Intelligence & Feeds
              </p>
              <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                Global telemetry and host-based intrusion protection for deep threat hunting and digital forensics.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-gray-500">
              <span>Intel Integration</span>
              <span className="text-[#16f97d]">KUMA SIEM</span>
            </div>
          </div>

          {/* CARD 4: Malwarebytes (Wide - 7 Cols Horizontal Banner Style) */}
          <div className="lg:col-span-7 group relative p-8 sm:p-10 rounded-3xl bg-gradient-to-bl from-white/[0.04] to-white/[0.01] hover:from-white/[0.07] hover:to-white/[0.02] border border-white/10 hover:border-[#16f97d]/50 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_10px_35px_-10px_rgba(22,249,125,0.2)] flex flex-col justify-between overflow-hidden">
            <div className="absolute -left-8 -bottom-8 text-white/[0.02] group-hover:text-[#16f97d]/[0.06] transition-colors duration-500 pointer-events-none">
              <SiMalwarebytes className="w-64 h-64" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 text-[#16f97d] group-hover:bg-[#16f97d] group-hover:text-black transition-all duration-300">
                  <SiMalwarebytes className="w-8 h-8" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-gray-300">
                  EDR Engine
                </span>
              </div>

              <h3 className="text-3xl font-black text-white group-hover:text-[#16f97d] transition-colors mb-2">
                Malwarebytes
              </h3>
              <p className="text-xs font-mono text-gray-400 mb-4">
                Zero-Day Isolation & Ransomware Rollback
              </p>
              <p className="text-sm text-gray-300 font-light leading-relaxed max-w-lg mb-8">
                Lightweight agent infrastructure engineered for instantaneous endpoint threat containment, memory-level scanning, and automated incident cleanup.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16f97d]" /> Instant Containment
              </span>
              <span className="text-gray-500">Incident Retainer Ready</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}