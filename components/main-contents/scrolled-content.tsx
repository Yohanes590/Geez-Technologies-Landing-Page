"use client";

import LogoLoop from "@/components/LogoLoop";
import { 
  ShieldAlert, 
  Activity, 
  Terminal, 
  Award, 
  Eye 
} from "lucide-react";

const securityCapabilities = [
  { 
    node: (
      <div className="group flex items-center gap-2.5 font-mono text-zinc-400 hover:text-green-400 transition-colors cursor-pointer">
        <Eye className="w-5 h-5 text-green-500/70 group-hover:text-green-400 transition-colors" />
        <span className="text-sm font-bold tracking-wider uppercase">24/7 MONITORING</span>
      </div>
    ), 
    title: "24/7 Continuous Monitoring", 
    href: "#" 
  },
  { 
    node: (
      <div className="group flex items-center gap-2.5 font-mono text-zinc-400 hover:text-green-400 transition-colors cursor-pointer">
        <Activity className="w-5 h-5 text-green-500/70 group-hover:text-green-400 transition-colors" />
        <span className="text-sm font-bold tracking-wider uppercase">RAPID INCIDENT RESPONSE</span>
      </div>
    ), 
    title: "Rapid Incident Response", 
    href: "#" 
  },
  { 
    node: (
      <div className="group flex items-center gap-2.5 font-mono text-zinc-400 hover:text-green-400 transition-colors cursor-pointer">
        <ShieldAlert className="w-5 h-5 text-green-500/70 group-hover:text-green-400 transition-colors" />
        <span className="text-sm font-bold tracking-wider uppercase">THREAT INTELLIGENCE</span>
      </div>
    ), 
    title: "Threat Intelligence Feeds", 
    href: "#" 
  },
  { 
    node: (
      <div className="group flex items-center gap-2.5 font-mono text-zinc-400 hover:text-green-400 transition-colors cursor-pointer">
        <Award className="w-5 h-5 text-green-500/70 group-hover:text-green-400 transition-colors" />
        <span className="text-sm font-bold tracking-wider uppercase">CERTIFIED EXPERTS</span>
      </div>
    ), 
    title: "Certified Security Experts", 
    href: "#" 
  },
  { 
    node: (
      <div className="group flex items-center gap-2.5 font-mono text-zinc-400 hover:text-green-400 transition-colors cursor-pointer">
        <Terminal className="w-5 h-5 text-green-500/70 group-hover:text-green-400 transition-colors" />
        <span className="text-sm font-bold tracking-wider uppercase">EXPERIENCED HACKERS</span>
      </div>
    ), 
    title: "Experienced Ethical Hackers", 
    href: "#" 
  },
];

export default function SecurityPartnersLoop() {
  return (
    <section className="w-full bg-black py-10 border-y border-zinc-900 relative z-20">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
          Powered By Elite Defense & Advanced Operations
        </p>
      </div>

      <div className="h-[70px] relative overflow-hidden flex items-center">
        <LogoLoop
          logos={securityCapabilities}
          speed={40}
          direction="left"
          logoHeight={40}
          gap={60}
          hoverSpeed={10}
          scaleOnHover={false}
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Core security operations and expert capabilities"
        />
      </div>
    </section>
  );
}