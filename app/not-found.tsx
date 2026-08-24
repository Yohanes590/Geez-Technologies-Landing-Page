"use client";

import Link from "next/link";
import LightTunnel from "@/components/LightTunnel";

export default function NotFound() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center font-mono select-none">
      {/* Background Light Tunnel Component */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <LightTunnel
          cableColor="#55f778"
          pulseColor="#55f768"
          tunnelColor="#38ff27"
          tunnelOpacity={0}
          speed={0.05}
          flowDirection="outward"
          pulseSpeed={0.9}
          pulseLength={0.12}
          pulseBlend={0.21}
          pulseWidth={0.29}
          cableCount={20}
          thickness={0.71}
          rimWidth={0}
          waviness={0.3}
          sway={0.68}
          size={1}
          centerX={0}
          centerY={0}
          glow={1}
          fadeNear={0.5}
          fadeFar={2}
          brightness={1}
          colorVariance
          grain
          grainIntensity={0.05}
          opacity={1}
          mouseInteraction={false}
          mouseStrength={0.1}
        />
      </div>

      {/* Cyberpunk/Tech Overlay UI */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#38ff27]/30 bg-[#38ff27]/10 backdrop-blur-md mb-6">
          <span className="w-2 h-2 rounded-full bg-[#38ff27] animate-pulse" />
          <span className="text-xs tracking-widest text-[#55f778] uppercase font-semibold">
            SYSTEM_ERROR // ROUTE_NOT_FOUND
          </span>
        </div>

        {/* 404 Hero Heading */}
        <h1 className="text-8xl sm:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#55f778] to-[#1b5e20] drop-shadow-[0_0_35px_rgba(56,255,39,0.4)]">
          404
        </h1>

        {/* Subtitle & Info */}
        <p className="mt-4 text-xl sm:text-2xl font-bold text-white tracking-wide">
          Lost in the Data Stream
        </p>
        <p className="mt-2 text-sm text-gray-400 max-w-md leading-relaxed">
          The node or pathway you are trying to access has been disconnected, moved, or deleted from the matrix.
        </p>

        {/* Action Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="group relative inline-flex items-center gap-3 px-8 py-3 rounded-xl bg-black border border-[#38ff27]/50 text-[#55f778] font-semibold tracking-wide transition-all duration-300 hover:bg-[#38ff27] hover:text-black hover:shadow-[0_0_30px_rgba(56,255,39,0.6)] active:scale-95"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>RETURN TO BASE</span>
          </Link>
        </div>
      </div>

      {/* Subtle Bottom Grid lines overlay */}
      <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center text-[10px] text-gray-600 border-t border-gray-800/80 pt-3 z-10 hidden sm:flex">
        <span>GATEWAY_STATUS: ACTIVE</span>
        <span>LATENCY: 0.05ms</span>
        <span>GEEZ_TECH_OS v2.4</span>
      </div>
    </div>
  );
}