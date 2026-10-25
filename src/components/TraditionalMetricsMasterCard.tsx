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

  // Exact Normalized Master Traditional Cartouche Path:
  // Features horizontal top/bottom edges, traditional stepped corner brackets,
  // and sharp outward Torana bracket cusps in the center of the left (x=0) and right (x=1) sides,
  // matching the red hand-drawn architectural silhouette in Screenshot 2026-10-25 104938.png.
  const masterClipPath =
    "M 0.0667 0.0435 L 0.9333 0.0435 C 0.9542 0.0435, 0.9792 0.0761, 0.9708 0.1413 C 0.9625 0.1848, 0.9542 0.2065, 0.9542 0.2609 C 0.9542 0.3696, 0.9458 0.4239, 0.9625 0.4674 C 0.9792 0.4891, 0.9983 0.4913, 0.9983 0.5 C 0.9983 0.5087, 0.9792 0.5109, 0.9625 0.5326 C 0.9458 0.5761, 0.9542 0.6304, 0.9542 0.7391 C 0.9542 0.7935, 0.9625 0.8152, 0.9708 0.8587 C 0.9792 0.9239, 0.9542 0.9565, 0.9333 0.9565 L 0.0667 0.9565 C 0.0458 0.9565, 0.0208 0.9239, 0.0292 0.8587 C 0.0375 0.8152, 0.0458 0.7935, 0.0458 0.7391 C 0.0458 0.6304, 0.0542 0.5761, 0.0375 0.5326 C 0.0208 0.5109, 0.0017 0.5087, 0.0017 0.5 C 0.0017 0.4913, 0.0208 0.4891, 0.0375 0.4674 C 0.0542 0.4239, 0.0458 0.3696, 0.0458 0.2609 C 0.0458 0.2065, 0.0375 0.1848, 0.0292 0.1413 C 0.0208 0.0761, 0.0458 0.0435, 0.0667 0.0435 Z";

  // Normalized Inner Metric Card Cartouche Path:
  // Features 4 concave circular corner scallops with balanced proportions
  const metricClipPath =
    "M 0.1 0 L 0.9 0 A 0.1 0.16 0 0 0 1 0.16 L 1 0.84 A 0.1 0.16 0 0 0 0.9 1 L 0.1 1 A 0.1 0.16 0 0 0 0 0.84 L 0 0.16 A 0.1 0.16 0 0 0 0.1 0 Z";

  return (
    <div className="relative w-full py-6">
      {/* 1. GLOBAL SVG CLIP-PATHS: Applied directly to the physical DOM card containers */}
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

      {/* 2. RADIANT ATMOSPHERIC GLOW BEHIND THE MASTER CARD */}
      <div
        className="absolute inset-0 -m-6 sm:-m-10 rounded-[50px] blur-3xl pointer-events-none opacity-70 transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${primaryColor}33 0%, ${lightColor}28 45%, transparent 75%)`,
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] rounded-full blur-2xl pointer-events-none opacity-40"
        style={{ background: primaryColor }}
      />

      {/* 3. THE BIG TRADITIONAL MASTER CARD
          Outer wrapper uses perimeter-tracing drop-shadows.
          The card element itself is physically clipped into the traditional Torana bracket shape. */}
      <div
        className="relative transition-all duration-500"
        style={{
          filter: `drop-shadow(0 24px 56px ${primaryColor}22) drop-shadow(0 6px 20px rgba(15, 27, 45, 0.08))`,
        }}
      >
        <div
          className="relative px-8 sm:px-14 md:px-16 py-12 sm:py-14 md:py-16 overflow-hidden"
          style={{
            clipPath: "url(#traditional-master-cartouche)",
            background: `linear-gradient(135deg, ${bgWash} 0%, rgba(255, 255, 255, 0.97) 50%, ${lightColor} 100%)`,
          }}
        >
          {/* Vector Frame Overlay: Traces the exact master traditional silhouette with royal double border */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 460"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Royal Border with Left/Right Cusp Points */}
            <path
              d="M 80 20 L 1120 20 C 1145 20, 1175 35, 1165 65 C 1155 85, 1145 95, 1145 120 C 1145 170, 1135 195, 1155 215 C 1175 225, 1198 226, 1198 230 C 1198 234, 1175 235, 1155 245 C 1135 265, 1145 290, 1145 340 C 1145 365, 1155 375, 1165 395 C 1175 425, 1145 440, 1120 440 L 80 440 C 55 440, 25 425, 35 395 C 45 375, 55 365, 55 340 C 55 290, 65 265, 45 245 C 25 235, 2 234, 2 230 C 2 226, 25 225, 45 215 C 65 195, 55 170, 55 120 C 55 95, 45 85, 35 65 C 25 35, 55 20, 80 20 Z"
              stroke={primaryColor}
              strokeWidth="2.2"
              opacity="0.8"
            />

            {/* Inset Royal Hairline Border (offset by 6px) */}
            <path
              d="M 80 26 L 1120 26 C 1142 26, 1168 39, 1159 66 C 1149 84, 1139 94, 1139 120 C 1139 168, 1129 192, 1149 212 C 1168 221, 1190 223, 1190 230 C 1190 237, 1168 239, 1149 248 C 1129 268, 1139 292, 1139 340 C 1139 366, 1149 376, 1159 394 C 1168 421, 1142 434, 1120 434 L 80 434 C 58 434, 32 421, 41 394 C 51 376, 61 366, 61 340 C 61 292, 71 268, 51 248 C 32 239, 10 237, 10 230 C 10 223, 32 221, 51 212 C 71 192, 61 168, 61 120 C 61 94, 51 84, 41 66 C 32 39, 58 26, 80 26 Z"
              stroke={primaryColor}
              strokeWidth="0.8"
              strokeDasharray="4 3"
              opacity="0.4"
            />

            {/* 4 Corner Traditional Rosette Bindus */}
            <circle cx="50" cy="50" r="3.5" fill={primaryColor} opacity="0.8" />
            <circle cx="1150" cy="50" r="3.5" fill={primaryColor} opacity="0.8" />
            <circle cx="1150" cy="410" r="3.5" fill={primaryColor} opacity="0.8" />
            <circle cx="50" cy="410" r="3.5" fill={primaryColor} opacity="0.8" />

            {/* Left & Right Torana Bracket Cusp Rosettes */}
            <circle cx="15" cy="230" r="3" fill={primaryColor} opacity="0.9" />
            <circle cx="1185" cy="230" r="3" fill={primaryColor} opacity="0.9" />

            {/* Top & Bottom Arch Crest Diamonds */}
            <polygon points="600,14 606,20 600,26 594,20" fill={primaryColor} opacity="0.85" />
            <polygon points="600,434 606,440 600,446 594,440" fill={primaryColor} opacity="0.85" />
          </svg>

          {/* Watermark of Model's Sacred Symbol in Center Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.045] select-none scale-125">
            {getModelTraditionalSymbol(productName, 380, primaryColor)}
          </div>

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
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#0F1B2D] tracking-tight">
                Hardware Benchmarks &amp; System Tolerances
              </h2>
              <p className="font-body text-xs sm:text-sm text-[#475569] mt-1.5 max-w-lg mx-auto leading-relaxed">
                Production-verified memory footprints, execution latency, and POSIX conformance.
              </p>
            </div>

            {/* 4. THE 4 UNIFORM CARVED-OUT INNER METRIC CARDS
                - Direct traditional cartouche shape via clipPath
                - Equal height & uniform vertical alignment across all cards
                - Pristine white canvas with balanced typography and drop shadow */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {metrics.map((m, idx) => {
                const isHovered = hoveredIdx === idx;
                const isLongText = m.value.length > 8;

                return (
                  <FadeIn key={m.label} delay={idx * 80}>
                    <div
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      className="relative transition-all duration-300 group cursor-default h-[195px] sm:h-[210px]"
                      style={{
                        transform: isHovered ? "translateY(-5px)" : "translateY(0)",
                        filter: isHovered
                          ? `drop-shadow(0 14px 28px ${primaryColor}28) drop-shadow(0 0 16px ${primaryColor}18)`
                          : "drop-shadow(0 4px 14px rgba(15, 27, 45, 0.05))",
                      }}
                    >
                      {/* The Directly Clipped Traditional Cartouche Card Container */}
                      <div
                        className="relative w-full h-full p-5 sm:p-6 flex flex-col justify-between items-center text-center transition-colors duration-300"
                        style={{
                          clipPath: "url(#traditional-metric-cartouche)",
                          background: isHovered
                            ? `linear-gradient(160deg, #FFFFFF 0%, #FFFFFF 60%, ${lightColor}30 100%)`
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
                            d="M 30 0 L 270 0 A 30 25.6 0 0 0 300 25.6 L 300 134.4 A 30 25.6 0 0 0 270 160 L 30 160 A 30 25.6 0 0 0 0 134.4 L 0 25.6 A 30 25.6 0 0 0 30 0 Z"
                            stroke={isHovered ? primaryColor : `${primaryColor}40`}
                            strokeWidth={isHovered ? "2.2" : "1.4"}
                            className="transition-all duration-300"
                          />

                          {/* Inner Royal Hairline Border (offset by 5px) */}
                          <path
                            d="M 30 5 L 270 5 A 25 21.6 0 0 0 295 25.6 L 295 134.4 A 25 21.6 0 0 0 270 155 L 30 155 A 25 21.6 0 0 0 5 134.4 L 5 25.6 A 25 21.6 0 0 0 30 5 Z"
                            stroke={primaryColor}
                            strokeWidth="0.8"
                            strokeDasharray={isHovered ? "none" : "3 2"}
                            opacity={isHovered ? 0.75 : 0.3}
                            className="transition-all duration-300"
                          />

                          {/* 4 Corner Bindus at Scallop Apexes */}
                          <circle cx="15" cy="13" r="2.4" fill={primaryColor} opacity={isHovered ? 0.95 : 0.5} />
                          <circle cx="285" cy="13" r="2.4" fill={primaryColor} opacity={isHovered ? 0.95 : 0.5} />
                          <circle cx="285" cy="147" r="2.4" fill={primaryColor} opacity={isHovered ? 0.95 : 0.5} />
                          <circle cx="15" cy="147" r="2.4" fill={primaryColor} opacity={isHovered ? 0.95 : 0.5} />

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

                        {/* Top Zone: Uniform Micro Index Badge */}
                        <div className="relative z-10 w-full flex items-center justify-center pt-1">
                          <span
                            className="font-mono text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-full bg-[#F8FAFE] border border-[#E2E8F0]"
                            style={{ color: primaryColor }}
                          >
                            0{idx + 1}
                          </span>
                        </div>

                        {/* Middle Zone: Metric Value (Balanced & Uniformly Centered) */}
                        <div className="relative z-10 w-full flex-1 flex items-center justify-center px-2">
                          <div
                            className={`font-heading font-bold tracking-tight transition-transform duration-300 group-hover:scale-105 leading-tight ${
                              isLongText
                                ? "text-xl sm:text-2xl md:text-[26px]"
                                : "text-3xl sm:text-4xl md:text-[38px]"
                            }`}
                            style={{ color: primaryColor }}
                          >
                            {m.value}
                          </div>
                        </div>

                        {/* Bottom Zone: Uniform Metric Label & Verified Badge */}
                        <div className="relative z-10 w-full pb-1 flex flex-col items-center">
                          <div className="font-body text-xs sm:text-sm text-[#475569] font-medium leading-tight mb-2 truncate max-w-full">
                            {m.label}
                          </div>

                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F8FAFE] border border-[#E2E8F0] text-[10px] font-mono text-[#64748B]">
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
