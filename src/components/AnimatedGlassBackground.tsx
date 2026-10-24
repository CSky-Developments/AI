"use client";

import Image from "next/image";

interface AnimatedGlassBackgroundProps {
  hueRotate?: string; // e.g. "0deg", "145deg", "195deg", "285deg"
  saturation?: string; // e.g. "1.2"
  bgWash?: string; // e.g. "#F8FAFE", "#FFF1F2"
  primaryColor?: string; // e.g. "#3b82f6", "#e11d48"
  lightColor?: string; // e.g. "#dbeafe", "#ffe4e6"
}

export function AnimatedGlassBackground({
  hueRotate = "0deg",
  saturation = "1.2",
  bgWash = "#F8FAFE",
  primaryColor = "#3b82f6",
  lightColor = "#dbeafe",
}: AnimatedGlassBackgroundProps) {
  return (
    <div
      className="absolute inset-0 -z-20 overflow-hidden pointer-events-none select-none"
      style={{ backgroundColor: bgWash }}
    >
      {/* 1. GENTLY WAVING & BREATHING FLUTED GLASS IMAGE */}
      <div
        className="absolute inset-[-8%] w-[116%] h-[116%]"
        style={{
          animation: "glass-wave-drift 22s ease-in-out infinite alternate",
          willChange: "transform",
        }}
      >
        <Image
          src="/hero-bg.jpg"
          alt="Atmospheric Glass"
          fill
          priority
          className="object-cover object-center scale-105"
          style={{
            filter: `blur(4px) hue-rotate(${hueRotate}) saturate(${saturation}) brightness(1.04)`,
          }}
        />
      </div>

      {/* 2. SECOND GHOST LAYER FOR OPTICAL DEPTH & SHIMMER INTERFERENCE */}
      <div
        className="absolute inset-[-5%] w-[110%] h-[110%] mix-blend-soft-light opacity-65"
        style={{
          animation: "glass-wave-counter 28s ease-in-out infinite alternate",
          willChange: "transform",
        }}
      >
        <Image
          src="/hero-bg.jpg"
          alt="Refraction Layer"
          fill
          className="object-cover object-center scale-110"
          style={{
            filter: `blur(8px) hue-rotate(${hueRotate}) saturate(1.4) brightness(1.08)`,
          }}
        />
      </div>

      {/* 3. MOVING VERTICAL LIGHT BARS (Simulates Light Sweeping Across the Ribbed Flutes) */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 25%, transparent 50%, rgba(255,255,255,0.3) 75%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "ribbed-shimmer 14s linear infinite",
        }}
      />

      {/* 4. DRAGGING / FLOATING LUMINOUS COLOR ORBS */}
      <div
        className="absolute top-1/4 -left-20 w-[480px] h-[480px] rounded-full blur-[110px] opacity-35"
        style={{
          background: primaryColor,
          animation: "orb-float-left 18s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute bottom-1/4 -right-20 w-[520px] h-[520px] rounded-full blur-[120px] opacity-40"
        style={{
          background: lightColor,
          animation: "orb-float-right 24s ease-in-out infinite alternate",
        }}
      />

      {/* 5. SOFT READABILITY FROST OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-transparent to-[#F8FAFE]/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-[#F8FAFE]/65" />
    </div>
  );
}
