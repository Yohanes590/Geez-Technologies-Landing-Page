"use client";

import React from "react";
import { ShieldCheck, ArrowUpRight, Lock, Phone } from "lucide-react";
import servicesData from "@/lib/service.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-black text-white border-t border-white/10 overflow-hidden">
      {/* Ambient Green Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#16f97d]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-12 z-10">
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand & Mission (4 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-[#16f97d]/10 border border-[#16f97d]/30 text-[#16f97d]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold tracking-wide text-white">
                GEEZ<span className="text-[#16f97d]">SECURITY</span>
              </span>
            </div>
            
            <p className="text-sm text-gray-400 font-light leading-relaxed max-w-sm">
              Full-spectrum cybersecurity compliance, continuous threat defense, and incident readiness built to meet national regulatory frameworks.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10">
                <Lock className="w-3 h-3 text-[#16f97d]" /> ISO/IEC Aligned
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10">
                <Phone className="w-3 h-3 text-[#16f97d]" /> 24/7 CERT Line
              </span>
            </div>
          </div>

          {/* Pillars & Quick Navigation (5 Columns) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-gray-300 mb-4">
                Core Pillars
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400 font-mono">
                {servicesData.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={`#pillar-${idx}`}
                      className="hover:text-[#16f97d] transition-colors flex items-center gap-1.5"
                    >
                      <span>0{idx + 1}.</span>
                      <span className="font-sans font-medium text-gray-300 hover:text-[#16f97d]">
                        {item.category.split("·")[1]?.trim()}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-gray-300 mb-4">
                Resources
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400 font-sans">
                <li>
                  <a href="#compliance" className="hover:text-[#16f97d] transition-colors">
                    INSA Proclamation Guide
                  </a>
                </li>
                <li>
                  <a href="#retainer" className="hover:text-[#16f97d] transition-colors">
                    48-Hour IR Retainer
                  </a>
                </li>
                <li>
                  <a href="#academy" className="hover:text-[#16f97d] transition-colors">
                    Geez Security Academy
                  </a>
                </li>
                <li>
                  <a href="#portal" className="hover:text-[#16f97d] transition-colors">
                    Client Evidence Vault
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & Status Card (3 Columns) */}
          <div className="lg:col-span-3">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400">SOC Operations</span>
                <span className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-[#16f97d]/10 text-[#16f97d] border border-[#16f97d]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16f97d] animate-pulse" /> Live
                </span>
              </div>
              
              <p className="text-xs text-gray-400 font-light">
                Direct hotline available for priority triage and CERT notification support.
              </p>

              <a
                href="mailto:security@institution.et"
                className="inline-flex items-center justify-between w-full py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs text-white font-mono transition-colors group"
              >
                <span>security@institution.et</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#16f97d] transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <p>© {currentYear} Geez Security Systems. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-gray-300 transition-colors">
              Privacy & NDA Terms
            </a>
            <a href="#regulatory" className="hover:text-gray-300 transition-colors">
              Regulatory Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}