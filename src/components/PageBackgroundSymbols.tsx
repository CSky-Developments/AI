"use client";

import React from "react";
import {
  AkashCosmosWatermark,
  DrishtiYantraWatermark,
  VayuMandalaWatermark,
  AgniYantraWatermark,
  PrithviYantraWatermark,
  SomaMandalaWatermark,
  TriShaktiWatermark,
  DharmaChakraWatermark,
  SahasraraGateWatermark,
  SriArchitectureWatermark,
  SuryaMandalaWatermark,
} from "@/components/TraditionalSymbols";

interface PageBackgroundSymbolsProps {
  theme?: string;
  variant?: "models" | "product" | "pricing" | "research" | "docs" | "use-cases" | "manifesto" | "access" | "default";
}

/**
 * PageBackgroundSymbols renders traditional sacred geometric watermarks in soft,
 * muted architectural gray/slate in the background margins of the page.
 * Creates an elegant, uniform, and sovereign presence across all pages without
 * interfering with readability.
 */
export function PageBackgroundSymbols({
  theme = "default",
  variant = "default",
}: PageBackgroundSymbolsProps) {
  const norm = (theme || variant).toLowerCase();

  // Select Primary (Top-Right), Secondary (Mid-Left), and Tertiary (Bottom-Right) symbols
  let PrimaryWatermark = SuryaMandalaWatermark;
  let SecondaryWatermark = TriShaktiWatermark;
  let TertiaryWatermark = SahasraraGateWatermark;

  if (norm.includes("ultra") || norm.includes("akash")) {
    PrimaryWatermark = AkashCosmosWatermark;
    SecondaryWatermark = TriShaktiWatermark;
    TertiaryWatermark = SuryaMandalaWatermark;
  } else if (norm.includes("pro") || norm.includes("drishti")) {
    PrimaryWatermark = DrishtiYantraWatermark;
    SecondaryWatermark = AkashCosmosWatermark;
    TertiaryWatermark = TriShaktiWatermark;
  } else if (norm.includes("nano") || norm.includes("vayu")) {
    PrimaryWatermark = VayuMandalaWatermark;
    SecondaryWatermark = SuryaMandalaWatermark;
    TertiaryWatermark = SahasraraGateWatermark;
  } else if (norm.includes("agni")) {
    PrimaryWatermark = AgniYantraWatermark;
    SecondaryWatermark = SriArchitectureWatermark;
    TertiaryWatermark = TriShaktiWatermark;
  } else if (norm.includes("prithvi")) {
    PrimaryWatermark = PrithviYantraWatermark;
    SecondaryWatermark = DrishtiYantraWatermark;
    TertiaryWatermark = SuryaMandalaWatermark;
  } else if (norm.includes("soma")) {
    PrimaryWatermark = SomaMandalaWatermark;
    SecondaryWatermark = AkashCosmosWatermark;
    TertiaryWatermark = DharmaChakraWatermark;
  } else if (norm.includes("model")) {
    PrimaryWatermark = TriShaktiWatermark;
    SecondaryWatermark = AkashCosmosWatermark;
    TertiaryWatermark = DrishtiYantraWatermark;
  } else if (norm.includes("pricing")) {
    PrimaryWatermark = SriArchitectureWatermark;
    SecondaryWatermark = SuryaMandalaWatermark;
    TertiaryWatermark = TriShaktiWatermark;
  } else if (norm.includes("research")) {
    PrimaryWatermark = SomaMandalaWatermark;
    SecondaryWatermark = DrishtiYantraWatermark;
    TertiaryWatermark = DharmaChakraWatermark;
  } else if (norm.includes("docs") || norm.includes("ide") || norm.includes("cli") || norm.includes("sdk") || norm.includes("app")) {
    PrimaryWatermark = SriArchitectureWatermark;
    SecondaryWatermark = AgniYantraWatermark;
    TertiaryWatermark = SahasraraGateWatermark;
  } else if (norm.includes("use-case")) {
    PrimaryWatermark = DharmaChakraWatermark;
    SecondaryWatermark = TriShaktiWatermark;
    TertiaryWatermark = SriArchitectureWatermark;
  } else if (norm.includes("manifesto")) {
    PrimaryWatermark = DharmaChakraWatermark;
    SecondaryWatermark = SuryaMandalaWatermark;
    TertiaryWatermark = SahasraraGateWatermark;
  } else if (norm.includes("access")) {
    PrimaryWatermark = SahasraraGateWatermark;
    SecondaryWatermark = TriShaktiWatermark;
    TertiaryWatermark = SuryaMandalaWatermark;
  }

  // Consistent architectural slate gray for universal background watermark harmony
  const slateGray = "#94A3B8";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* 1. Subtle Radial Ambient Lighting Mesh */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-gradient-to-b from-[#94A3B8]/6 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[45vw] h-[45vh] bg-gradient-to-r from-[#CBD5E1]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* 2. Top-Right Primary Sacred Geometric Watermark (Large, stately, subtle) */}
      <div className="absolute -top-24 -right-24 md:-top-20 md:-right-20 opacity-[0.045] text-[#94A3B8]">
        <PrimaryWatermark size={640} color={slateGray} />
      </div>

      {/* 3. Mid-Left Complementary Watermark (Center-ground balance) */}
      <div className="absolute top-[42%] -left-32 md:-left-24 opacity-[0.038] text-[#94A3B8]">
        <SecondaryWatermark size={480} color={slateGray} />
      </div>

      {/* 4. Lower-Right Grounding Watermark (Footer transition) */}
      <div className="absolute -bottom-28 -right-28 md:-bottom-20 md:-right-20 opacity-[0.042] text-[#94A3B8]">
        <TertiaryWatermark size={560} color={slateGray} />
      </div>

      {/* 5. Minimal Mathematical Coordinate Vernier Crosshairs */}
      <div className="absolute top-28 left-8 text-[#94A3B8]/20 font-mono text-[9px] hidden xl:block select-none tracking-widest">
        + 12°58&apos;40&quot;N · 77°35&apos;38&quot;E [BLR]
      </div>
      <div className="absolute top-28 right-8 text-[#94A3B8]/20 font-mono text-[9px] hidden xl:block select-none tracking-widest">
        ॥ सार्वभौम प्रज्ञा मण्डलम् ॥
      </div>
    </div>
  );
}
