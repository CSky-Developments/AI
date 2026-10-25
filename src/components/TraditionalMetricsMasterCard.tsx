"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { getModelTraditionalSymbol } from "@/components/TraditionalSymbols";

interface MetricItem {
  value: string;
  label: string;
}

interface TraditionalMetricsMasterCardProps {
  metrics: MetricItem[];
  productName: string;
  primaryColor: string;
  lightColor: string;
  bgWash: string;
}

/**
 * TraditionalCartoucheBackground:
 * Renders an authentic Indian scalloped cartouche panel (Karna-Koshtha)
 * with concave circular corner cutouts, double hairline border,
 * 4 corner bindu nodes, and top/bottom apex crests.
 */
function TraditionalCartoucheBackground({
  primaryColor,
  fill = "#FFFFFF",
  isHovered = false,
  gradientId,
  showDoubleBorder = true,
}: {
  primaryColor: string;
  fill?: string;
  isHovered?: boolean;
  gradientId?: string;
  showDoubleBorder?: boolean;
}) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-300"
      viewBox="0 0 300 160"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {gradientId && (
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#F8FAFE" stopOpacity="0.9" />
          </linearGradient>
        )}
      </defs>

      {/* 1. Outer Scalloped Cartouche Body (R=24 concave corner scallops) */}
      <path
        d="M 24 0 L 276 0 A 24 24 0 0 0 300 24 L 300 136 A 24 24 0 0 0 276 160 L 24 160 A 24 24 0 0 0 0 136 L 0 24 A 24 24 0 0 0 24 0 Z"
        fill={gradientId ? `url(#${gradientId})` : fill}
        stroke={isHovered ? primaryColor : "#E2E8F0"}
        strokeWidth={isHovered ? "1.8" : "1.2"}
        className="transition-colors duration-300"
      />

      {/* 2. Inner Royal Double Hairline Border (inset by 5px, R=19) */}
      {showDoubleBorder && (
        <path
          d="M 24 5 L 276 5 A 19 19 0 0 0 295 24 L 295 136 A 19 19 0 0 0 276 155 L 24 155 A 19 19 0 0 0 5 136 L 5 24 A 19 19 0 0 0 24 5 Z"
          stroke={isHovered ? primaryColor : primaryColor}
          strokeWidth="0.8"
          strokeDasharray={isHovered ? "none" : "3 2"}
          opacity={isHovered ? 0.65 : 0.25}
          className="transition-all duration-300"
        />
      )}

      {/* 3. Four Corner Bindu Nodes (at the center of each concave scallop) */}
      <circle cx="12" cy="12" r="2.2" fill={primaryColor} opacity={isHovered ? 0.9 : 0.4} />
      <circle cx="288" cy="12" r="2.2" fill={primaryColor} opacity={isHovered ? 0.9 : 0.4} />
      <circle cx="288" cy="148" r="2.2" fill={primaryColor} opacity={isHovered ? 0.9 : 0.4} />
      <circle cx="12" cy="148" r="2.2" fill={primaryColor} opacity={isHovered ? 0.9 : 0.4} />

      {/* 4. Top & Bottom Torana Crest Peaks */}
      <polygon
        points="150,1 153.5,5 150,9 146.5,5"
        fill={primaryColor}
        opacity={isHovered ? 0.9 : 0.45}
      />
      <polygon
        points="150,151 153.5,155 150,159 146.5,155"
        fill={primaryColor}
        opacity={isHovered ? 0.9 : 0.45}
      />
    </svg>
  );
}

/**
 * BigMasterCardBackground:
 * SVG frame for the large enclosing traditional card panel.
 * Scalloped corners (R=44), dual royal border, and gradient wash.
 */
function BigMasterCardBackground({
  primaryColor,
  bgWash,
  lightColor,
}: {
  primaryColor: string;
  bgWash: string;
  lightColor: string;
}) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 420"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="big-card-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={bgWash} stopOpacity="0.85" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="100%" stopColor={lightColor} stopOpacity="0.75" />
        </linearGradient>
      </defs>

      {/* Grand Outer Scalloped Boundary (R=44) */}
      <path
        d="M 44 0 L 1156 0 A 44 44 0 0 0 1200 44 L 1200 376 A 44 44 0 0 0 1156 420 L 44 420 A 44 44 0 0 0 0 376 L 0 44 A 44 44 0 0 0 44 0 Z"
        fill="url(#big-card-grad)"
        stroke={primaryColor}
        strokeWidth="1.2"
        opacity="0.85"
      />

      {/* Inset Double Hairline Border (inset by 8px, R=36) */}
      <path
        d="M 44 8 L 1156 8 A 36 36 0 0 0 1192 44 L 1192 376 A 36 36 0 0 0 1156 412 L 44 412 A 36 36 0 0 0 8 376 L 8 44 A 36 36 0 0 0 44 8 Z"
        stroke={primaryColor}
        strokeWidth="0.8"
        strokeDasharray="4 3"
        opacity="0.35"
      />

      {/* 4 Grand Corner Bindu Rosettes */}
      <circle cx="22" cy="22" r="3.5" fill={primaryColor} opacity="0.6" />
      <circle cx="1178" cy="22" r="3.5" fill={primaryColor} opacity="0.6" />
      <circle cx="1178" cy="398" r="3.5" fill={primaryColor} opacity="0.6" />
      <circle cx="22" cy="398" r="3.5" fill={primaryColor} opacity="0.6" />

      {/* Top Center Torana Arch Crest Point */}
      <polygon
        points="600,1 606,7 600,13 594,7"
        fill={primaryColor}
        opacity="0.75"
      />
    </svg>
  );
}

export function TraditionalMetricsMasterCard({
  metrics,
  productName,
  primaryColor,
  lightColor,
  bgWash,
}: TraditionalMetricsMasterCardProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="relative w-full">
      {/* 1. THE BIG MASTER CARD (Traditional Scalloped Shape with Ambient Gradient) */}
      <div className="relative rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 shadow-lg overflow-hidden border border-[#CBD5E1]/40">
        {/* Dynamic SVG Grand Traditional Frame */}
        <BigMasterCardBackground
          primaryColor={primaryColor}
          bgWash={bgWash}
          lightColor={lightColor}
        />

        {/* Ambient Watermark of Model's Sacred Symbol in Center Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.045] select-none scale-125">
          {getModelTraditionalSymbol(productName, 360, primaryColor)}
        </div>

        {/* Soft Radial Ambient Glow */}
        <div
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-40"
          style={{ background: lightColor }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-40"
          style={{ background: lightColor }}
        />

        {/* Master Card Content */}
        <div className="relative z-10">
          {/* Top Decorative Torana Crest Header */}
          <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/90 border shadow-2xs text-xs font-heading font-semibold mb-3 backdrop-blur-xs"
              style={{
                borderColor: `${primaryColor}33`,
                color: primaryColor,
              }}
            >
              <span>✦</span>
              <span>॥ प्रमाण स्तम्भ ॥ · Certified Architecture Specifications</span>
              <span>✦</span>
            </div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-[#0F1B2D] tracking-tight">
              Hardware Benchmarks &amp; System Tolerances
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#5A6B7F] mt-1 max-w-lg mx-auto">
              Production-verified memory footprints, execution latency, and POSIX conformance.
            </p>
          </div>

          {/* 2. THE CARVED-OUT INNER METRIC CARDS (4-Column Grid) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {metrics.map((m, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <FadeIn key={m.label} delay={idx * 80}>
                  <div
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="relative p-6 sm:p-7 md:p-8 text-center transition-all duration-300 group cursor-default"
                    style={{
                      transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                      filter: isHovered
                        ? `drop-shadow(0 12px 24px ${primaryColor}22)`
                        : "drop-shadow(0 2px 8px rgba(15, 27, 45, 0.04))",
                    }}
                  >
                    {/* The Carved-Out Scalloped Traditional Cartouche Canvas */}
                    <TraditionalCartoucheBackground
                      primaryColor={primaryColor}
                      fill="#FFFFFF"
                      isHovered={isHovered}
                      gradientId={`card-grad-${idx}`}
                      showDoubleBorder={true}
                    />

                    {/* Inner Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center min-h-[105px] sm:min-h-[115px]">
                      {/* Metric Value */}
                      <div
                        className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight transition-transform duration-300 group-hover:scale-105"
                        style={{ color: primaryColor }}
                      >
                        {m.value}
                      </div>

                      {/* Metric Label */}
                      <div className="font-body text-xs sm:text-sm text-[#475569] mt-2.5 font-medium leading-snug">
                        {m.label}
                      </div>

                      {/* Verified Indicator Badge */}
                      <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F8FAFE] border border-[#E2E8F0] text-[10px] font-mono text-[#64748B]">
                        <span
                          className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
                          style={{
                            background: isHovered ? "#10B981" : primaryColor,
                          }}
                        />
                        <span>Verified</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
