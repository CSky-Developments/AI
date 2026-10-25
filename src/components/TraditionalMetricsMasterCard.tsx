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

export function TraditionalMetricsMasterCard({
  metrics,
  productName,
  primaryColor,
  lightColor,
  bgWash,
}: TraditionalMetricsMasterCardProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Normalized corner scallop curves for objectBoundingBox (0 to 1):
  // Master Card (wide aspect ~3:1): corner scallop cx=0.035, cy=0.10
  // Metric Card (aspect ~1.6:1): corner scallop cx=0.09, cy=0.15
  const masterClipPath =
    "M 0.035 0 L 0.965 0 A 0.035 0.10 0 0 0 1 0.10 L 1 0.90 A 0.035 0.10 0 0 0 0.965 1 L 0.035 1 A 0.035 0.10 0 0 0 0 0.90 L 0 0.10 A 0.035 0.10 0 0 0 0.035 0 Z";

  const metricClipPath =
    "M 0.09 0 L 0.91 0 A 0.09 0.15 0 0 0 1 0.15 L 1 0.85 A 0.09 0.15 0 0 0 0.91 1 L 0.09 1 A 0.09 0.15 0 0 0 0 0.85 L 0 0.15 A 0.09 0.15 0 0 0 0.09 0 Z";

  return (
    <div className="relative w-full">
      {/* 1. GLOBAL SVG DEFS: Clip paths applied directly to the DOM card shapes */}
      <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="traditional-master-cartouche" clipPathUnits="objectBoundingBox">
            <path d={masterClipPath} />
          </clipPath>
          <clipPath id="traditional-metric-cartouche" clipPathUnits="objectBoundingBox">
            <path d={metricClipPath} />
          </clipPath>
        </defs>
      </svg>

      {/* 2. THE BIG TRADITIONAL MASTER CARD
          Outer wrapper uses filter:drop-shadow so the shadow hugs the actual scalloped perimeter.
          The card itself uses clipPath directly, physically changing its shape to the traditional cartouche. */}
      <div
        className="relative transition-all duration-500"
        style={{
          filter: `drop-shadow(0 20px 48px ${primaryColor}18) drop-shadow(0 4px 16px rgba(15, 27, 45, 0.06))`,
        }}
      >
        <div
          className="relative p-7 sm:p-11 md:p-14 overflow-hidden"
          style={{
            clipPath: "url(#traditional-master-cartouche)",
            background: `linear-gradient(135deg, ${bgWash} 0%, rgba(255, 255, 255, 0.96) 45%, ${lightColor} 100%)`,
          }}
        >
          {/* SVG Frame Overlay hugging the exact scalloped perimeter with royal double border */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 420"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Royal Border */}
            <path
              d="M 42 0 L 1158 0 A 42 42 0 0 0 1200 42 L 1200 378 A 42 42 0 0 0 1158 420 L 42 420 A 42 42 0 0 0 0 378 L 0 42 A 42 42 0 0 0 42 0 Z"
              stroke={primaryColor}
              strokeWidth="2.5"
              opacity="0.75"
            />

            {/* Inset Hairline Accent Border (offset by 7px) */}
            <path
              d="M 42 7 L 1158 7 A 35 35 0 0 0 1193 42 L 1193 378 A 35 35 0 0 0 1158 413 L 42 413 A 35 35 0 0 0 7 378 L 7 42 A 35 35 0 0 0 42 7 Z"
              stroke={primaryColor}
              strokeWidth="1"
              strokeDasharray="4 3"
              opacity="0.4"
            />

            {/* 4 Corner Traditional Bindu Rosettes */}
            <circle cx="21" cy="21" r="4.5" fill={primaryColor} opacity="0.8" />
            <circle cx="1179" cy="21" r="4.5" fill={primaryColor} opacity="0.8" />
            <circle cx="1179" cy="399" r="4.5" fill={primaryColor} opacity="0.8" />
            <circle cx="21" cy="399" r="4.5" fill={primaryColor} opacity="0.8" />

            {/* Top Torana Arch Peak */}
            <polygon points="600,0 607,8 600,16 593,8" fill={primaryColor} opacity="0.85" />
          </svg>

          {/* Watermark of Model's Sacred Symbol in Center Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.05] select-none scale-125">
            {getModelTraditionalSymbol(productName, 380, primaryColor)}
          </div>

          {/* Ambient Lighting Clouds */}
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
            {/* Top Torana Crest Header */}
            <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-10">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border shadow-2xs text-xs font-heading font-semibold mb-3 backdrop-blur-xs"
                style={{
                  borderColor: `${primaryColor}40`,
                  color: primaryColor,
                }}
              >
                <span>✦</span>
                <span>॥ प्रमाण स्तम्भ ॥ · Certified Architecture Specifications</span>
                <span>✦</span>
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#0F1B2D] tracking-tight">
                Hardware Benchmarks &amp; System Tolerances
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#475569] mt-1.5 max-w-lg mx-auto leading-relaxed">
                Production-verified memory footprints, execution latency, and POSIX conformance.
              </p>
            </div>

            {/* 3. THE 4 CARVED-OUT INNER METRIC CARDS
                Each card's physical shape IS directly the traditional scalloped cartouche!
                Background is pure white (#FFFFFF), appearing genuinely carved out of the gradient master panel into the open sky canvas. */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {metrics.map((m, idx) => {
                const isHovered = hoveredIdx === idx;
                return (
                  <FadeIn key={m.label} delay={idx * 80}>
                    <div
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      className="relative transition-all duration-300 group cursor-default"
                      style={{
                        transform: isHovered ? "translateY(-5px)" : "translateY(0)",
                        filter: isHovered
                          ? `drop-shadow(0 14px 28px ${primaryColor}26)`
                          : "drop-shadow(0 4px 12px rgba(15, 27, 45, 0.05))",
                      }}
                    >
                      {/* The Physically Clipped Traditional Cartouche Card */}
                      <div
                        className="relative p-6 sm:p-7 md:p-8 bg-white transition-colors duration-300"
                        style={{
                          clipPath: "url(#traditional-metric-cartouche)",
                          background: isHovered
                            ? `linear-gradient(160deg, #FFFFFF 0%, #FFFFFF 65%, ${lightColor}25 100%)`
                            : "#FFFFFF",
                        }}
                      >
                        {/* Matching Vector Double Border Overlay */}
                        <svg
                          className="absolute inset-0 w-full h-full pointer-events-none"
                          viewBox="0 0 300 160"
                          preserveAspectRatio="none"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Outer Border */}
                          <path
                            d="M 27 0 L 273 0 A 27 24 0 0 0 300 24 L 300 136 A 27 24 0 0 0 273 160 L 27 160 A 27 24 0 0 0 0 136 L 0 24 A 27 24 0 0 0 27 0 Z"
                            stroke={isHovered ? primaryColor : `${primaryColor}40`}
                            strokeWidth={isHovered ? "2.2" : "1.4"}
                            className="transition-all duration-300"
                          />

                          {/* Inner Royal Hairline Border (offset by 5px) */}
                          <path
                            d="M 27 5 L 273 5 A 22 19 0 0 0 295 24 L 295 136 A 22 19 0 0 0 273 155 L 27 155 A 22 19 0 0 0 5 136 L 5 24 A 22 19 0 0 0 27 5 Z"
                            stroke={primaryColor}
                            strokeWidth="0.8"
                            strokeDasharray={isHovered ? "none" : "3 2"}
                            opacity={isHovered ? 0.75 : 0.3}
                            className="transition-all duration-300"
                          />

                          {/* 4 Corner Bindus at the scallop center */}
                          <circle cx="13.5" cy="12" r="2.4" fill={primaryColor} opacity={isHovered ? 0.95 : 0.5} />
                          <circle cx="286.5" cy="12" r="2.4" fill={primaryColor} opacity={isHovered ? 0.95 : 0.5} />
                          <circle cx="286.5" cy="148" r="2.4" fill={primaryColor} opacity={isHovered ? 0.95 : 0.5} />
                          <circle cx="13.5" cy="148" r="2.4" fill={primaryColor} opacity={isHovered ? 0.95 : 0.5} />

                          {/* Top & Bottom Crest Peaks */}
                          <polygon
                            points="150,0 154,5 150,9 146,5"
                            fill={primaryColor}
                            opacity={isHovered ? 0.95 : 0.55}
                          />
                          <polygon
                            points="150,151 154,155 150,160 146,155"
                            fill={primaryColor}
                            opacity={isHovered ? 0.95 : 0.55}
                          />
                        </svg>

                        {/* Card Metric Content */}
                        <div className="relative z-10 flex flex-col items-center justify-center min-h-[115px] sm:min-h-[125px]">
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

                          {/* Verified Status Pill */}
                          <div className="mt-3.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F8FAFE] border border-[#E2E8F0] text-[10px] font-mono text-[#64748B]">
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
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
