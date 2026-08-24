"use client";

import React from "react";
import LogoLoop from "@/components/LogoLoop";
import { 
  SiKaspersky, 
  SiPaloaltonetworks, 
  SiFortinet, 
  SiMalwarebytes,
  SiShieldsdotio,
  SiCloudflare
} from "react-icons/si";

const trustedPartners = [
  { 
    node: (
      <div className="group flex items-center gap-4 font-mono text-zinc-300 hover:text-[#16f97d] transition-colors cursor-pointer">
        <SiPaloaltonetworks className="w-9 h-9 text-[#16f97d]/80 group-hover:text-[#16f97d] transition-colors" />
        <span className="text-base sm:text-lg font-extrabold tracking-wider uppercase">PALO ALTO NETWORKS</span>
      </div>
    ), 
    title: "Palo Alto Networks Integration", 
    href: "#" 
  },
  { 
    node: (
      <div className="group flex items-center gap-4 font-mono text-zinc-300 hover:text-[#16f97d] transition-colors cursor-pointer">
        <SiFortinet className="w-9 h-9 text-[#16f97d]/80 group-hover:text-[#16f97d] transition-colors" />
        <span className="text-base sm:text-lg font-extrabold tracking-wider uppercase">FORTINET FORTIGATE</span>
      </div>
    ), 
    title: "Fortinet Security Fabric", 
    href: "#" 
  },
  { 
    node: (
      <div className="group flex items-center gap-4 font-mono text-zinc-300 hover:text-[#16f97d] transition-colors cursor-pointer">
        <SiKaspersky className="w-9 h-9 text-[#16f97d]/80 group-hover:text-[#16f97d] transition-colors" />
        <span className="text-base sm:text-lg font-extrabold tracking-wider uppercase">KASPERSKY LABS</span>
      </div>
    ), 
    title: "Kaspersky Threat Intelligence", 
    href: "#" 
  },
  { 
    node: (
      <div className="group flex items-center gap-4 font-mono text-zinc-300 hover:text-[#16f97d] transition-colors cursor-pointer">
        <SiMalwarebytes className="w-9 h-9 text-[#16f97d]/80 group-hover:text-[#16f97d] transition-colors" />
        <span className="text-base sm:text-lg font-extrabold tracking-wider uppercase">MALWAREBYTES EDR</span>
      </div>
    ), 
    title: "Malwarebytes Endpoint Defense", 
    href: "#" 
  },
  { 
    node: (
      <div className="group flex items-center gap-4 font-mono text-zinc-300 hover:text-[#16f97d] transition-colors cursor-pointer">
        <SiCloudflare className="w-9 h-9 text-[#16f97d]/80 group-hover:text-[#16f97d] transition-colors" />
        <span className="text-base sm:text-lg font-extrabold tracking-wider uppercase">CLOUDFLARE ZERO TRUST</span>
      </div>
    ), 
    title: "Cloudflare Network Shield", 
    href: "#" 
  },
  // { 
  //   node: (
  //     <div className="group flex items-center gap-4 font-mono text-zinc-300 hover:text-[#16f97d] transition-colors cursor-pointer">
  //       <SiShieldsdotio className="w-9 h-9 text-[#16f97d]/80 group-hover:text-[#16f97d] transition-colors" />
  //       <span className="text-base sm:text-lg font-extrabold tracking-wider uppercase">INSA COMPLIANT</span>
  //     </div>
  //   ), 
  //   title: "INSA Certified Standards", 
  //   href: "#" 
  // },
];

export default function TrustedPartners() {
  return (
    <section className="w-full bg-black py-16 border-y border-zinc-900 relative z-20 overflow-hidden">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[200px] bg-[#16f97d]/5 blur-[140px] rounded-full pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 mb-10 text-center relative z-10">
  <span className="text-xs font-mono text-[#16f97d] uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#16f97d]/10 border border-[#16f97d]/20">
    Integrated Ecosystem
  </span>
  <h3 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-3">
    Trusted Partners
  </h3>
  <p className="max-w-xl mx-auto text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
    Collaborating with global cybersecurity leaders to deliver enterprise-grade threat intelligence and unified protection.
  </p>
</div>
      <div className="h-[90px] relative overflow-hidden flex items-center">
        <LogoLoop
          logos={trustedPartners}
          speed={35}
          direction="left"
          logoHeight={50}
          gap={80}
          hoverSpeed={10}
          scaleOnHover={false}
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Trusted enterprise security technology partners"
        />
      </div>
    </section>
  );
}