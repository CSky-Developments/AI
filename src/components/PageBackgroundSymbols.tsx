"use client";

import React from "react";
import {
  ThemeBackgroundWatermark,
  SuryaMandalaWatermark,
  TriShaktiWatermark,
  SriArchitectureWatermark,
  DharmaChakraWatermark,
  SahasraraGateWatermark,
  AkashSymbol,
  DrishtiSymbol,
  BuddhiYantraSymbol,
  KriyaChakraSymbol,
  SrishtiPadmaSymbol,
  AgniSymbol,
  PrithviSymbol,
  SomaSymbol,
  VayuSymbol,
} from "@/components/TraditionalSymbols";

interface PageBackgroundSymbolsProps {
  theme?: string;
  className?: string;
}

/**
 * Universal Page Background Watermarks
 * Renders serene, mathematically exact sacred geometry symbols in neutral gray
 * across all page backgrounds without interfering with foreground interactivity.
 */
export function PageBackgroundSymbols({
  theme = "overview",
  className = "",
}: PageBackgroundSymbolsProps) {
  const norm = theme.toLowerCase();

  // Secondary symbol selection based on theme
  const getSecondaryWatermark = () => {
    if (norm.includes("model")) return <SuryaMandalaWatermark size={640} color="#64748B" />;
    if (norm.includes("price") || norm.includes("doc")) return <TriShaktiWatermark size={640} color="#64748B" />;
    if (norm.includes("research")) return <SriArchitectureWatermark size={640} color="#64748B" />;
    if (norm.includes("use-case")) return <SriArchitectureWatermark size={640} color="#64748B" />;
    if (norm.includes("manifesto")) return <SahasraraGateWatermark size={640} color="#64748B" />;
    return <SriArchitectureWatermark size={640} color="#64748B" />;
  };

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden z-0 ${className}`}
    >
      {/* 1. Upper-Mid Primary Sacred Geometry Watermark in Neutral Gray */}
      <div className="absolute top-[22%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.038] md:opacity-[0.045] transition-opacity duration-700">
        <ThemeBackgroundWatermark theme={theme} color="#64748B" size={720} />
      </div>

      {/* 2. Lower-Mid Secondary Sacred Geometry Watermark in Neutral Gray */}
      <div className="absolute top-[68%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.032] md:opacity-[0.042] transition-opacity duration-700">
        {getSecondaryWatermark()}
      </div>

      {/* 3. Margin Floating Motifs in Gray along Left & Right borders */}
      <div className="absolute top-[38%] -left-12 opacity-[0.035] md:opacity-[0.048] transform -rotate-12">
        <DrishtiSymbol size={160} color="#64748B" />
      </div>

      <div className="absolute top-[52%] -right-14 opacity-[0.035] md:opacity-[0.048] transform rotate-12">
        <AkashSymbol size={180} color="#64748B" />
      </div>

      <div className="absolute top-[82%] -left-10 opacity-[0.032] md:opacity-[0.045] transform rotate-45">
        <BuddhiYantraSymbol size={150} color="#64748B" />
      </div>

      <div className="absolute top-[90%] -right-10 opacity-[0.032] md:opacity-[0.045] transform -rotate-30">
        <KriyaChakraSymbol size={150} color="#64748B" />
      </div>

      {/* 4. Subtle Micro Sanskrit Sutra Watermarks in Gray */}
      <div className="absolute top-[28%] left-8 font-mono text-[11px] text-[#64748B] opacity-[0.08] tracking-widest hidden lg:block">
        ॥ सत्यं ज्ञानमनन्तं ब्रह्म ॥
      </div>
      <div className="absolute top-[48%] right-8 font-mono text-[11px] text-[#64748B] opacity-[0.08] tracking-widest hidden lg:block">
        ॥ प्रज्ञा प्रतिष्ठा सर्वस्य ॥
      </div>
      <div className="absolute top-[75%] left-8 font-mono text-[11px] text-[#64748B] opacity-[0.08] tracking-widest hidden lg:block">
        ॥ स्वातन्त्र्यम् परमं सुखम् ॥
      </div>
    </div>
  );
}
