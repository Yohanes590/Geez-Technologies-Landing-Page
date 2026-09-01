"use client";

import dynamic from "next/dynamic";

const GlassSurface = dynamic(() => import("../GlassSurface"), {
  ssr: false,
});

export default function GlassSurfaceComponent() {
  return (
    <div className="glassContainer *:fixed top-0 left-0 w-full h-full z-[-1]">
      <GlassSurface
        displace={0.7}
        distortionScale={-100}
        redOffset={0}
        greenOffset={10}
        blueOffset={20}
        brightness={50}
        opacity={0.93}
        mixBlendMode="screen"
      >
        <span>Advanced Glass Distortion</span>
      </GlassSurface>
    </div>
  );
}