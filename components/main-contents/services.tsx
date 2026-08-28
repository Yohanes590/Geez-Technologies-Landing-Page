"use client";

import React, { useState, useEffect } from "react";
import { 
  FileCheck, 
  Crosshair, 
  ShieldAlert, 
  Siren, 
  GraduationCap, 
  ShieldCheck,
  X,
  ArrowRight,
  ExternalLink,
  LucideIcon
} from "lucide-react";

import servicesData from "@/lib/service.json";

interface ServiceDetail {
  title: string;
  tagline: string;
  description: string;
  obligation: string;
  link: string;
}

interface CategoryData {
  category: string;
  subtitle: string;
  services: ServiceDetail[];
}

// Map Lucide icons per category
const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "01 · COMPLY": FileCheck,
  "02 · ASSESS": Crosshair,
  "03 · DEFEND": ShieldAlert,
  "04 · RESPOND": Siren,
  "05 · EMPOWER": GraduationCap,
};

// Define dynamic themes for each cybersecurity pillar
interface ThemeConfig {
  primaryHex: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  glowBg: string;
  tabActive: string;
  iconActive: string;
  textPrimary: string;
  cardBorderHover: string;
  cardShadowHover: string;
  modalBorder: string;
  modalShadow: string;
  modalTaglineBorder: string;
  btnBg: string;
  btnHover: string;
}

const CATEGORY_THEMES: Record<string, ThemeConfig> = {
  // Red Team / Offensive Security -> RED
  "02 · ASSESS": {
    primaryHex: "#ef4444",
    badgeBg: "bg-red-500/10",
    badgeBorder: "border-red-500/30",
    badgeText: "text-red-400",
    glowBg: "bg-red-500",
    tabActive: "bg-red-500 text-black font-extrabold shadow-[0_0_25px_rgba(239,68,68,0.4)] scale-[1.02]",
    iconActive: "text-red-400",
    textPrimary: "text-red-400",
    cardBorderHover: "hover:border-red-500/50",
    cardShadowHover: "hover:shadow-[0_10px_30px_-10px_rgba(239,68,68,0.2)]",
    modalBorder: "border-red-500/30",
    modalShadow: "shadow-[0_0_50px_rgba(239,68,68,0.15)]",
    modalTaglineBorder: "border-red-500",
    btnBg: "bg-red-500",
    btnHover: "hover:bg-red-600",
  },
  // Blue Team / Defensive Security -> BLUE
  "03 · DEFEND": {
    primaryHex: "#3b82f6",
    badgeBg: "bg-blue-500/10",
    badgeBorder: "border-blue-500/30",
    badgeText: "text-blue-400",
    glowBg: "bg-blue-500",
    tabActive: "bg-blue-500 text-black font-extrabold shadow-[0_0_25px_rgba(59,130,246,0.4)] scale-[1.02]",
    iconActive: "text-blue-400",
    textPrimary: "text-blue-400",
    cardBorderHover: "hover:border-blue-500/50",
    cardShadowHover: "hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.2)]",
    modalBorder: "border-blue-500/30",
    modalShadow: "shadow-[0_0_50px_rgba(59,130,246,0.15)]",
    modalTaglineBorder: "border-blue-500",
    btnBg: "bg-blue-500",
    btnHover: "hover:bg-blue-600",
  },
  // Incident Response -> AMBER / ORANGE
  "04 · RESPOND": {
    primaryHex: "#f59e0b",
    badgeBg: "bg-amber-500/10",
    badgeBorder: "border-amber-500/30",
    badgeText: "text-amber-400",
    glowBg: "bg-amber-500",
    tabActive: "bg-amber-500 text-black font-extrabold shadow-[0_0_25px_rgba(245,158,11,0.4)] scale-[1.02]",
    iconActive: "text-amber-400",
    textPrimary: "text-amber-400",
    cardBorderHover: "hover:border-amber-500/50",
    cardShadowHover: "hover:shadow-[0_10px_30px_-10px_rgba(245,158,11,0.2)]",
    modalBorder: "border-amber-500/30",
    modalShadow: "shadow-[0_0_50px_rgba(245,158,11,0.15)]",
    modalTaglineBorder: "border-amber-500",
    btnBg: "bg-amber-500",
    btnHover: "hover:bg-amber-600",
  },
  // Training & Culture -> PURPLE
  "05 · EMPOWER": {
    primaryHex: "#a855f7",
    badgeBg: "bg-purple-500/10",
    badgeBorder: "border-purple-500/30",
    badgeText: "text-purple-400",
    glowBg: "bg-purple-500",
    tabActive: "bg-purple-500 text-black font-extrabold shadow-[0_0_25px_rgba(168,85,247,0.4)] scale-[1.02]",
    iconActive: "text-purple-400",
    textPrimary: "text-purple-400",
    cardBorderHover: "hover:border-purple-500/50",
    cardShadowHover: "hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.2)]",
    modalBorder: "border-purple-500/30",
    modalShadow: "shadow-[0_0_50px_rgba(168,85,247,0.15)]",
    modalTaglineBorder: "border-purple-500",
    btnBg: "bg-purple-500",
    btnHover: "hover:bg-purple-600",
  },
  // Default Governance & Compliance -> EMERALD GREEN
  "DEFAULT": {
    primaryHex: "#16f97d",
    badgeBg: "bg-[#16f97d]/10",
    badgeBorder: "border-[#16f97d]/30",
    badgeText: "text-[#16f97d]",
    glowBg: "bg-[#16f97d]",
    tabActive: "bg-[#16f97d] text-black font-extrabold shadow-[0_0_25px_rgba(22,249,125,0.4)] scale-[1.02]",
    iconActive: "text-[#16f97d]",
    textPrimary: "text-[#16f97d]",
    cardBorderHover: "hover:border-[#16f97d]/50",
    cardShadowHover: "hover:shadow-[0_10px_30px_-10px_rgba(22,249,125,0.2)]",
    modalBorder: "border-[#16f97d]/30",
    modalShadow: "shadow-[0_0_50px_rgba(22,249,125,0.15)]",
    modalTaglineBorder: "border-[#16f97d]",
    btnBg: "bg-[#16f97d]",
    btnHover: "hover:bg-[#16f97d]/90",
  }
};

const getTheme = (categoryKey: string): ThemeConfig => {
  return CATEGORY_THEMES[categoryKey] || CATEGORY_THEMES["DEFAULT"];
};

export default function ServicesSection() {
  const data = (servicesData || []) as CategoryData[];
  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectedService, setSelectedService] = useState<{
    service: ServiceDetail;
    link: string;
    category: string;
  } | null>(null);

  const activeCategory = data[activeTab] || { category: "", subtitle: "", services: [] };
  const ActiveIcon = CATEGORY_ICONS[activeCategory.category] || FileCheck;
  const currentTheme = getTheme(activeCategory.category);

  // Lock body scroll and handle Escape key when modal is open
  useEffect(() => {
    if (!selectedService) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedService(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedService]);

  return (
    <section id="services" className="relative w-full bg-black text-white py-24 px-4 sm:px-8 overflow-hidden">
      {/* Background Ambient Glows (Adapts to Active Theme) */}
      <div 
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] ${currentTheme.glowBg}/10 blur-[180px] rounded-full pointer-events-none transition-all duration-700`} 
      />
      <div 
        className={`absolute bottom-10 right-10 w-[500px] h-[350px] ${currentTheme.glowBg}/5 blur-[150px] rounded-full pointer-events-none transition-all duration-700`} 
      />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border ${currentTheme.badgeBorder} backdrop-blur-md mb-4 transition-all duration-300`}>
            <span className={`w-2 h-2 rounded-full ${currentTheme.glowBg} animate-pulse`} />
            <span className="text-xs font-mono uppercase tracking-widest text-gray-200">
              Enterprise Cyber Assurance
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4">
            Our Services & Core Pillars
          </h2>

          <p className="max-w-2xl text-gray-400 text-base sm:text-lg font-light leading-relaxed">
            Select a pillar below to review our core cybersecurity capabilities.
          </p>
        </div>

        {/* 5 Pillar Clickable Tabs */}
        <div className="p-2 mb-12 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {data.map((cat, idx) => {
              const Icon = CATEGORY_ICONS[cat.category] || FileCheck;
              const isSelected = activeTab === idx;
              const tabTheme = getTheme(cat.category);

              return (
                <button
                  key={cat.category || idx}
                  onClick={() => setActiveTab(idx)}
                  className={`relative flex flex-col items-center justify-center py-4 px-3 rounded-xl transition-all duration-300 cursor-pointer group ${
                    isSelected
                      ? tabTheme.tabActive
                      : "text-gray-300 hover:text-white hover:bg-white/[0.06] border border-white/5"
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <Icon className={`w-4 h-4 ${isSelected ? "text-black" : tabTheme.iconActive}`} />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {cat.category.split("·")[1]?.trim() || cat.category}
                    </span>
                  </div>
                  <span className={`text-[10px] font-mono ${isSelected ? "text-black/80" : "text-gray-400"}`}>
                    Pillar 0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Header Banner */}
        <div className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl ${currentTheme.badgeBg} border ${currentTheme.badgeBorder} ${currentTheme.badgeText}`}>
              <ActiveIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-white">
                {activeCategory.category}
              </h3>
              <p className="text-sm text-gray-400 mt-0.5">
                {activeCategory.subtitle}
              </p>
            </div>
          </div>

          <div className="self-start md:self-auto px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-gray-300">
            Showing <span className={`${currentTheme.textPrimary} font-bold`}>{activeCategory.services?.length || 0}</span> Services
          </div>
        </div>

        {/* Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCategory.services?.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedService({ service: item, category: activeCategory.category, link: item.link })}
              className={`group relative flex flex-col justify-between p-7 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 ${currentTheme.cardBorderHover} backdrop-blur-xl transition-all duration-300 ${currentTheme.cardShadowHover} hover:-translate-y-1 cursor-pointer`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-gray-300">
                    {activeCategory.category}
                  </span>
                  <span className={`text-xs text-gray-500 group-hover:${currentTheme.textPrimary} transition-colors flex items-center gap-1 font-mono`}>
                    View <ArrowRight className="w-3 h-3" />
                  </span>
                </div>

                <h4 className={`text-lg font-bold text-white group-hover:${currentTheme.textPrimary} transition-colors mb-2`}>
                  {item.title}
                </h4>

                <p className={`text-xs font-medium ${currentTheme.textPrimary} mb-4 line-clamp-1`}>
                  {item.tagline}
                </p>

                <p className="text-sm text-gray-400 font-light leading-relaxed mb-6 line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Obligation Footer */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="flex items-start gap-2">
                  <ShieldCheck className={`w-4 h-4 ${currentTheme.textPrimary} shrink-0 mt-0.5`} />
                  <span className="text-xs font-mono text-gray-400 leading-tight">
                    <strong className="text-gray-300 font-normal">Obligation:</strong>{" "}
                    <span className="text-gray-400/80 line-clamp-1">{item.obligation}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal Overlay */}
      {selectedService && (() => {
        const modalTheme = getTheme(selectedService.category);
        return (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedService(null)}
          >
            <div 
              className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0a0a0a] border ${modalTheme.modalBorder} p-6 sm:p-8 ${modalTheme.modalShadow} transition-all`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Ambient Background Glow inside modal */}
              <div className={`absolute top-0 right-0 w-64 h-64 ${modalTheme.glowBg}/10 blur-[100px] pointer-events-none rounded-full`} />

              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 mb-6 relative z-10">
                <div className="flex flex-col gap-2">
                  <span className={`self-start text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full ${modalTheme.badgeBg} border ${modalTheme.badgeBorder} ${modalTheme.badgeText}`}>
                    {selectedService.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {selectedService.service.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tagline Highlight */}
              <div className={`mb-6 p-4 rounded-xl bg-white/[0.02] border-l-2 ${modalTheme.modalTaglineBorder} relative z-10`}>
                <p className={`text-sm sm:text-base font-semibold ${modalTheme.textPrimary}`}>
                  {selectedService.service.tagline}
                </p>
              </div>

              {/* Detailed Description */}
              <div className="space-y-4 mb-8 text-gray-300 font-light leading-relaxed text-sm sm:text-base relative z-10">
                <h5 className="text-xs font-mono uppercase tracking-wider text-gray-400">Detailed Scope</h5>
                <p className="whitespace-pre-line">
                  {selectedService.service.description}
                </p>
              </div>

              {/* Compliance & Obligation Box */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 relative z-10 mb-8">
                <div className={`flex items-center gap-2 mb-2 ${modalTheme.textPrimary}`}>
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">Regulatory & Compliance Obligation</span>
                </div>
                <p className="text-sm font-mono text-gray-300 leading-relaxed">
                  {selectedService.service.obligation}
                </p>
              </div>

              {/* Action Footer */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-3 relative z-10">
                {selectedService.service.link ? (
                  <a
                    href={selectedService.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl ${modalTheme.btnBg} ${modalTheme.btnHover} text-black font-bold text-sm transition-all`}
                  >
                    Explore Service <ExternalLink className="w-4 h-4" />
                  </a>
                ) : <div />}
                
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-sm font-semibold text-white transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
}