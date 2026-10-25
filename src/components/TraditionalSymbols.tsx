"use client";

import React from "react";

interface SymbolProps {
  className?: string;
  size?: number;
  color?: string;
}

/* =========================================================================
   PART 1: THE SIX FOUNDATION MODEL SYMBOLS (viewBox 0 0 64 64, Center: 32, 32)
   Every vertex, chord, and intersection is mathematically exact and jointed.
   ========================================================================= */

/**
 * 1. AKASH (आकाश - Infinite Celestial Ether · Flagship 405B)
 * Concentric ether shells, 4 cardinal axis scepters, and 4 precision diamond bindus.
 */
export function AkashSymbol({ className = "", size = 32, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="32" cy="32" r="30" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      <circle cx="32" cy="32" r="24" stroke={color} strokeWidth="1.4" opacity="0.6" />
      <circle cx="32" cy="32" r="16" stroke={color} strokeWidth="1.5" />
      <circle cx="32" cy="32" r="8" stroke={color} strokeWidth="1.2" opacity="0.8" />
      <circle cx="32" cy="32" r="3" fill={color} />

      {/* 4 Cardinal Rays collinear with axis: 32 - 30 = 2, 32 - 24 = 8 */}
      <line x1="32" y1="2" x2="32" y2="8" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="56" x2="32" y2="62" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="2" y1="32" x2="8" y2="32" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="56" y1="32" x2="62" y2="32" stroke={color} strokeWidth="2" strokeLinecap="round" />

      {/* 4 Cardinal Diamond Bindus centered at distance 16 on circle R=16 */}
      <polygon points="32,12 34.5,16 32,20 29.5,16" fill={color} opacity="0.85" />
      <polygon points="32,44 34.5,48 32,52 29.5,48" fill={color} opacity="0.85" />
      <polygon points="12,32 16,29.5 20,32 16,34.5" fill={color} opacity="0.85" />
      <polygon points="44,32 48,29.5 52,32 48,34.5" fill={color} opacity="0.85" />

      {/* 4 Diagonal Orbital Nodes at R=24: 32 +/- 16.97 = 48.97, 15.03 */}
      <circle cx="48.97" cy="15.03" r="1.5" fill={color} opacity="0.75" />
      <circle cx="48.97" cy="48.97" r="1.5" fill={color} opacity="0.75" />
      <circle cx="15.03" cy="48.97" r="1.5" fill={color} opacity="0.75" />
      <circle cx="15.03" cy="15.03" r="1.5" fill={color} opacity="0.75" />
    </svg>
  );
}

/**
 * 2. DRISHTI (दृष्टि - The Eye of Focused Wisdom · Workhorse 70B)
 * Precision Diamond perimeter, Vernier calipers, and mathematically closed eye curves.
 */
export function DrishtiSymbol({ className = "", size = 32, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer Diamond Boundary (R=30): (32,2), (62,32), (32,62), (2,32) */}
      <polygon points="32,2 62,32 32,62 2,32" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      {/* Inner Concentric Diamond (R=24): (32,8), (56,32), (32,56), (8,32) */}
      <polygon points="32,8 56,32 32,56 8,32" stroke={color} strokeWidth="1.2" opacity="0.7" />

      {/* Shatkona (Focus & Perception) inscribed in R=18: R*sqrt(3)/2 = 15.59, R/2 = 9 */}
      <polygon points="32,14 47.59,41 16.41,41" stroke={color} strokeWidth="1.2" opacity="0.6" />
      <polygon points="32,50 16.41,23 47.59,23" stroke={color} strokeWidth="1.2" opacity="0.6" />

      {/* Double-Curved Eye of Wisdom spanning from (4,32) to (60,32) */}
      <path
        d="M 4 32 C 16 16, 48 16, 60 32 C 48 48, 16 48, 4 32 Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Concentric Iris Rings & Pupil */}
      <circle cx="32" cy="32" r="13" stroke={color} strokeWidth="1.4" />
      <circle cx="32" cy="32" r="8" stroke={color} strokeWidth="1.2" opacity="0.8" />
      <circle cx="32" cy="32" r="4" fill={color} />
      <circle cx="33.5" cy="30.5" r="1.2" fill="#FFFFFF" />

      {/* Vernier Calipers connecting inner diamond vertices (32,8) and (32,56) to Shatkona tips (32,14) and (32,50) */}
      <line x1="32" y1="8" x2="32" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="32" y1="50" x2="32" y2="56" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * 3. VAYU (वायु - Wind & Dynamic Prana · Edge 8B)
 * Mathematically exact equilateral Air Shatkona (R=25) with integrated prana vortex.
 */
export function VayuSymbol({ className = "", size = 32, color = "currentColor" }: SymbolProps) {
  // R=25: R*sqrt(3)/2 = 21.65, R/2 = 12.5 => points (32, 7), (53.65, 44.5), (10.35, 44.5)
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="32" cy="32" r="29" stroke={color} strokeWidth="1" strokeDasharray="4 2" opacity="0.4" />
      
      {/* Upward Air Triangle */}
      <polygon points="32,7 53.65,44.5 10.35,44.5" stroke={color} strokeWidth="1.4" opacity="0.75" />
      {/* Downward Air Triangle */}
      <polygon points="32,57 10.35,19.5 53.65,19.5" stroke={color} strokeWidth="1.4" opacity="0.75" />

      {/* Concentric Incircle tangent to Shatkona edges at r=12.5 */}
      <circle cx="32" cy="32" r="12.5" stroke={color} strokeWidth="1.2" opacity="0.6" strokeDasharray="2 2" />

      {/* Harmonic Prana Spiral Arc */}
      <path
        d="M 20 32 C 20 25.37, 25.37 20, 32 20 C 38.63 20, 44 25.37, 44 32 C 44 37.52, 39.52 42, 34 42 C 29.58 42, 26 38.42, 26 34 C 26 30.69, 28.69 28, 32 28 C 34.21 28, 36 29.79, 36 32"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="32" cy="32" r="2.5" fill={color} />
    </svg>
  );
}

/**
 * 4. AGNI (अग्नि - Cosmic Fire of Computation · Code & Agentic 120B)
 * Concentric equilateral Fire Triangles sharing exact centroid (32, 32), with apex scepter.
 */
export function AgniSymbol({ className = "", size = 32, color = "currentColor" }: SymbolProps) {
  // Primary Fire Triangle R=24: R*sqrt(3)/2 = 20.78, R/2 = 12 => Top: (32, 8), BR: (52.78, 44), BL: (11.22, 44)
  // Inner Fire Triangle R=15: R*sqrt(3)/2 = 12.99, R/2 = 7.5 => Top: (32, 17), BR: (44.99, 39.5), BL: (19.01, 39.5)
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="32" cy="32" r="28" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      
      {/* Outer Equilateral Fire Triangle (Centroid: 32, 32) */}
      <polygon points="32,8 52.78,44 11.22,44" stroke={color} strokeWidth="1.8" />
      {/* Inner Nested Fire Triangle (Centroid: 32, 32) */}
      <polygon points="32,17 44.99,39.5 19.01,39.5" stroke={color} strokeWidth="1.2" opacity="0.65" />

      {/* Scepter line from top vertex (32, 8) to boundary (32, 3) */}
      <line x1="32" y1="3" x2="32" y2="8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />

      {/* Central Flame Core */}
      <path
        d="M 32 23 C 35.5 28.5, 38 31.5, 38 34.5 C 38 37.81, 35.31 40.5, 32 40.5 C 28.69 40.5, 26 37.81, 26 34.5 C 26 31.5, 28.5 28.5, 32 23 Z"
        fill={color}
        opacity="0.85"
      />
      <circle cx="32" cy="34.5" r="2" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * 5. PRITHVI (पृथ्वी - Grounded Earth Foundation · Multimodal 32B)
 * Unified Ashtalakshmi dual-square foundation (R=25.46) with 4 cardinal anchors.
 */
export function PrithviSymbol({ className = "", size = 32, color = "currentColor" }: SymbolProps) {
  // Orthogonal Square: half-width = 18 => (14,14) to (50,50). Corner radius = 18*sqrt(2) = 25.46
  // 45-degree Rotated Square: vertices on axes at R=25.46 => (32, 6.54), (57.46, 32), (32, 57.46), (6.54, 32)
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="32" cy="32" r="28" stroke={color} strokeWidth="1" strokeDasharray="4 2" opacity="0.4" />

      {/* Orthogonal Earth Square */}
      <rect x="14" y="14" width="36" height="36" rx="2" stroke={color} strokeWidth="1.8" />
      {/* 45-degree Rotated Earth Diamond (same circumradius 25.46) */}
      <polygon points="32,6.54 57.46,32 32,57.46 6.54,32" stroke={color} strokeWidth="1.2" opacity="0.65" />

      {/* Inner Concentric Diamond (R=10): midpoints of inner square */}
      <polygon points="32,22 42,32 32,42 22,32" stroke={color} strokeWidth="1.4" />
      <circle cx="32" cy="32" r="3" fill={color} />

      {/* 4 Cardinal Anchor Bindus touching outer square edge midpoints */}
      <circle cx="14" cy="32" r="1.5" fill={color} />
      <circle cx="50" cy="32" r="1.5" fill={color} />
      <circle cx="32" cy="14" r="1.5" fill={color} />
      <circle cx="32" cy="50" r="1.5" fill={color} />
    </svg>
  );
}

/**
 * 6. SOMA (सोम - Lunar Nectar & Formal Logic · Math 14B)
 * True circular arc crescent with sharp jointed cusps and distilled Amrita bindu.
 */
export function SomaSymbol({ className = "", size = 32, color = "currentColor" }: SymbolProps) {
  // Outer arc: R=20 centered at (32, 32) from (32, 12) to (32, 52)
  // Inner arc: R=24.22 centered at (18.33, 32) meeting the same cusps (32, 12) and (32, 52)
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="32" cy="32" r="28" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

      {/* Mathematically Closed Waxing Crescent */}
      <path
        d="M 32 12 A 20 20 0 0 1 32 52 A 24.22 24.22 0 0 0 32 12 Z"
        stroke={color}
        strokeWidth="1.8"
        fill="none"
      />

      {/* Distilled Amrita Teardrop */}
      <path
        d="M 26 23 C 28.5 27, 30 29.5, 30 32 C 30 34.21, 28.21 36, 26 36 C 23.79 36, 22 34.21, 22 32 C 22 29.5, 23.5 27, 26 23 Z"
        fill={color}
        opacity="0.85"
      />

      {/* 3 Deductive Constellation Proof Bindus */}
      <circle cx="43.5" cy="22" r="1.6" fill={color} />
      <circle cx="47" cy="32" r="1.8" fill={color} />
      <circle cx="43.5" cy="42" r="1.6" fill={color} />
    </svg>
  );
}

/**
 * 7. BUDDHI YANTRA (Universal Intellect & Cognition)
 * Inscribed Shatkona (R=18) with tangent incircle (r=9) touching all 6 sides.
 */
export function BuddhiYantraSymbol({ className = "", size = 32, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="32" cy="32" r="28" stroke={color} strokeWidth="1" opacity="0.4" strokeDasharray="3 3" />
      <circle cx="32" cy="32" r="22" stroke={color} strokeWidth="1.4" />

      {/* Equilateral Shatkona (R=18, centroid: 32, 32) */}
      <polygon points="32,14 47.59,41 16.41,41" stroke={color} strokeWidth="1.6" />
      <polygon points="32,50 16.41,23 47.59,23" stroke={color} strokeWidth="1.6" />

      {/* Tangent Incircle (r = R/2 = 9) */}
      <circle cx="32" cy="32" r="9" stroke={color} strokeWidth="1.2" opacity="0.75" />
      <circle cx="32" cy="32" r="2.5" fill={color} />
    </svg>
  );
}

/**
 * 8. SRISHTI PADMA (Creation Lotus Chakra)
 */
export function SrishtiPadmaSymbol({ className = "", size = 32, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="32" cy="32" r="28" stroke={color} strokeWidth="1" opacity="0.4" strokeDasharray="3 3" />
      <circle cx="32" cy="32" r="20" stroke={color} strokeWidth="1.2" />
      <circle cx="32" cy="32" r="8" stroke={color} strokeWidth="1.5" />
      <circle cx="32" cy="32" r="2.5" fill={color} />

      {/* 8 Lotus Petals radiating from R=20 to R=29 */}
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={i} transform={`rotate(${i * 45} 32 32)`}>
          <path d="M 32 3 C 28 9, 28 15, 32 20 C 36 15, 36 9, 32 3 Z" stroke={color} strokeWidth="1.3" fill="none" />
        </g>
      ))}
    </svg>
  );
}

/**
 * 9. SANGAM YANTRA (Confluence of Three Powers · Triquetra)
 * 3 Interlocking Circles with radius 16 passing through central bindu (32, 32).
 */
export function SangamYantraSymbol({ className = "", size = 32, color = "currentColor" }: SymbolProps) {
  // Centers at distance 8: (32, 24), (38.93, 36), (25.07, 36). Radius 16 ensures every circle passes through (32, 32).
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="32" cy="32" r="28" stroke={color} strokeWidth="1" strokeDasharray="2 4" opacity="0.4" />
      <circle cx="32" cy="24" r="16" stroke={color} strokeWidth="1.5" opacity="0.8" />
      <circle cx="38.93" cy="36" r="16" stroke={color} strokeWidth="1.5" opacity="0.8" />
      <circle cx="25.07" cy="36" r="16" stroke={color} strokeWidth="1.5" opacity="0.8" />
      <circle cx="32" cy="32" r="3" fill={color} />
    </svg>
  );
}

/**
 * 10. KRIYA CHAKRA (Action & Manifestation Wheel)
 */
export function KriyaChakraSymbol({ className = "", size = 32, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="32" cy="32" r="28" stroke={color} strokeWidth="1.5" />
      <circle cx="32" cy="32" r="23" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
      <circle cx="32" cy="32" r="10" stroke={color} strokeWidth="1.5" />
      <circle cx="32" cy="32" r="3" fill={color} />
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 32 32)`}>
          <line x1="32" y1="10" x2="32" y2="23" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}

/* =========================================================================
   PART 2: DEDICATED FULL-SCALE BACKGROUND WATERMARKS (viewBox 0 0 600 600, Center: 300, 300)
   Depth-of-field architecture: soft ambient aura + razor-sharp precision core.
   Every single polygon, chord, arc, and star vertex joins with mathematical exactness.
   ========================================================================= */

/**
 * 1. SURYA MANDALA WATERMARK (Sun Mandala / Overview & Universal Hero)
 * Complete 16-point Ashtalakshmi star (R=150), 16-petal lotus blooming from vertices (R=150 to R=215),
 * and 32 radiant sun flares anchored to astronomical rim ticks.
 */
export function SuryaMandalaWatermark({ className = "", size = 600, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* --- SELECTIVELY BLURRED OUTER RADIANCE & SOLAR FLARES --- */}
      <g style={{ filter: "blur(8px)" }} opacity="0.35">
        <circle cx="300" cy="300" r="260" stroke={color} strokeWidth="8" />
        <circle cx="300" cy="300" r="215" stroke={color} strokeWidth="4" />
      </g>

      <g style={{ filter: "blur(2.2px)" }} opacity="0.75">
        {/* Outer Cosmic Division Ring (64 division ticks) */}
        <circle cx="300" cy="300" r="285" stroke={color} strokeWidth="1" strokeDasharray="3 5" opacity="0.5" />
        <circle cx="300" cy="300" r="275" stroke={color} strokeWidth="1.2" opacity="0.6" />

        {/* 64 Astronomical Rim Ticks */}
        {Array.from({ length: 64 }).map((_, i) => (
          <g key={`rim-${i}`} transform={`rotate(${i * (360 / 64)} 300 300)`}>
            <line x1="300" y1="275" x2="300" y2={i % 4 === 0 ? "264" : "270"} stroke={color} strokeWidth={i % 4 === 0 ? "1.6" : "0.8"} />
          </g>
        ))}

        {/* 32 Radiant Sun Flares: Blooming from R=215 (y=85) to R=275 (y=25) */}
        {Array.from({ length: 32 }).map((_, i) => (
          <g key={`flare-${i}`} transform={`rotate(${i * 11.25} 300 300)`}>
            <path
              d="M 300 25 C 306 45, 306 65, 300 85 C 294 65, 294 45, 300 25 Z"
              stroke={color}
              strokeWidth="1.2"
              fill="none"
              opacity={i % 2 === 0 ? "0.85" : "0.5"}
            />
            {i % 2 === 0 && (
              <circle cx="300" cy="35" r="2.5" fill={color} opacity="0.8" />
            )}
          </g>
        ))}
      </g>

      {/* --- CRISP, DETAILED FOCAL GEOMETRY (Sharp, precision sacred lines) --- */}
      <circle cx="300" cy="300" r="215" stroke={color} strokeWidth="1.5" opacity="0.8" />
      <circle cx="300" cy="300" r="185" stroke={color} strokeWidth="1" strokeDasharray="4 4" opacity="0.65" />

      {/* 16-Petal Layered Lotus Ring blooming from star vertices (R=150, y=150) to circle (R=215, y=85) */}
      {Array.from({ length: 16 }).map((_, i) => (
        <g key={`lotus-${i}`} transform={`rotate(${i * 22.5} 300 300)`}>
          <path
            d="M 300 85 C 316 105, 316 130, 300 150 C 284 130, 284 105, 300 85 Z"
            stroke={color}
            strokeWidth="1.4"
            fill="none"
            opacity="0.9"
          />
          <line x1="300" y1="85" x2="300" y2="150" stroke={color} strokeWidth="0.8" opacity="0.6" />
        </g>
      ))}

      {/* Interlocking 8-Point Ashtalakshmi Star (R=150):
          Square 1 (Diamond): (300,150), (450,300), (300,450), (150,300)
          Square 2 (Square): (193.93,193.93), (406.07,193.93), (406.07,406.07), (193.93,406.07) */}
      <polygon points="300,150 450,300 300,450 150,300" stroke={color} strokeWidth="1.6" opacity="0.85" />
      <polygon points="193.93,193.93 406.07,193.93 406.07,406.07 193.93,406.07" stroke={color} strokeWidth="1.6" opacity="0.85" />

      {/* Exact 16-Point Ashtalakshmi Star Outer Perimeter (Unified closed geometry) */}
      <polygon
        points="300,150 343.93,193.93 406.07,193.93 406.07,256.07 450,300 406.07,343.93 406.07,406.07 343.93,406.07 300,450 256.07,406.07 193.93,406.07 193.93,343.93 150,300 193.93,256.07 193.93,193.93 256.07,193.93"
        stroke={color}
        strokeWidth="1.2"
        fill="none"
        opacity="0.65"
      />

      {/* Incircle Tangent to all 8 edges of the Ashtalakshmi Star at R=106.07 */}
      <circle cx="300" cy="300" r="106.07" stroke={color} strokeWidth="1.6" opacity="0.85" />
      <circle cx="300" cy="300" r="85" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.75" />
      <circle cx="300" cy="300" r="60" stroke={color} strokeWidth="2" />
      <circle cx="300" cy="300" r="35" stroke={color} strokeWidth="1.4" opacity="0.85" />
      <circle cx="300" cy="300" r="14" stroke={color} strokeWidth="2.2" />
      <circle cx="300" cy="300" r="6" fill={color} />

      {/* 8 Cardinal Axis Ray Markers */}
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={`axis-${i}`} transform={`rotate(${i * 45} 300 300)`}>
          <line x1="300" y1="20" x2="300" y2="50" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <polygon points="300,52 304,60 300,68 296,60" fill={color} opacity="0.9" />
        </g>
      ))}
    </svg>
  );
}

/**
 * 2. AKASH COSMOS WATERMARK (Akash · Flagship 405B)
 * Infinite celestial ether: 4 equilateral triangles forming a regular 12-point Dodecagram (R=205),
 * with 4 orbital ellipses whose nodes pass directly through star tips.
 */
export function AkashCosmosWatermark({ className = "", size = 600, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Selectively Blurred Atmospheric Halos */}
      <g style={{ filter: "blur(9px)" }} opacity="0.32">
        <circle cx="300" cy="300" r="270" stroke={color} strokeWidth="6" />
        <ellipse cx="300" cy="300" rx="275" ry="95" stroke={color} strokeWidth="5" />
        <ellipse cx="300" cy="300" rx="275" ry="95" stroke={color} strokeWidth="5" transform="rotate(90 300 300)" />
      </g>

      <g style={{ filter: "blur(2.6px)" }} opacity="0.75">
        <circle cx="300" cy="300" r="290" stroke={color} strokeWidth="0.8" strokeDasharray="4 6" opacity="0.4" />
        <circle cx="300" cy="300" r="270" stroke={color} strokeWidth="1.2" opacity="0.5" />

        {/* 48 Meridian Ticks */}
        {Array.from({ length: 48 }).map((_, i) => (
          <g key={`meridian-${i}`} transform={`rotate(${i * 7.5} 300 300)`}>
            <line x1="300" y1="270" x2="300" y2={i % 4 === 0 ? "258" : "264"} stroke={color} strokeWidth={i % 4 === 0 ? "1.6" : "0.75"} />
          </g>
        ))}

        {/* 4 Intersecting Orbital Ellipses rotated by 0, 45, 90, 135 deg */}
        <ellipse cx="300" cy="300" rx="275" ry="95" stroke={color} strokeWidth="1.4" opacity="0.7" />
        <ellipse cx="300" cy="300" rx="275" ry="95" stroke={color} strokeWidth="1.4" transform="rotate(45 300 300)" opacity="0.7" />
        <ellipse cx="300" cy="300" rx="275" ry="95" stroke={color} strokeWidth="1.4" transform="rotate(90 300 300)" opacity="0.7" />
        <ellipse cx="300" cy="300" rx="275" ry="95" stroke={color} strokeWidth="1.4" transform="rotate(135 300 300)" opacity="0.7" />

        {/* Orbital Nodes along axes at R=205 (matching the 12-point star apexes!) */}
        <circle cx="300" cy="95" r="4.5" fill={color} opacity="0.9" />
        <circle cx="505" cy="300" r="4.5" fill={color} opacity="0.9" />
        <circle cx="300" cy="505" r="4.5" fill={color} opacity="0.9" />
        <circle cx="95" cy="300" r="4.5" fill={color} opacity="0.9" />
      </g>

      {/* --- CRISP, PRECISE ASTRAL GEOMETRY --- */}
      {/* Circumcircle passing through all 12 star vertices at R=205 */}
      <circle cx="300" cy="300" r="205" stroke={color} strokeWidth="1.5" opacity="0.8" />
      <circle cx="300" cy="300" r="165" stroke={color} strokeWidth="1.2" strokeDasharray="3 3" opacity="0.7" />

      {/* 12-Point Astral Geometry: 4 Equilateral Triangles at 0, 30, 60, 90 deg (R=205)
          T1 (0 deg): (300, 95), (477.54, 402.5), (122.46, 402.5)
          T2 (30 deg): (402.5, 122.46), (402.5, 477.54), (95, 300)
          T3 (60 deg / upside down T1): (477.54, 197.5), (300, 505), (122.46, 197.5)
          T4 (90 deg / horizontal T2): (505, 300), (197.5, 477.54), (197.5, 122.46) */}
      <polygon points="300,95 477.54,402.5 122.46,402.5" stroke={color} strokeWidth="1.5" opacity="0.75" />
      <polygon points="402.5,122.46 402.5,477.54 95,300" stroke={color} strokeWidth="1.5" opacity="0.75" />
      <polygon points="477.54,197.5 300,505 122.46,197.5" stroke={color} strokeWidth="1.5" opacity="0.75" />
      <polygon points="505,300 197.5,477.54 197.5,122.46" stroke={color} strokeWidth="1.5" opacity="0.75" />

      {/* Incircle tangent to all 12 edges of the 12-point star at r = R/2 = 102.5 */}
      <circle cx="300" cy="300" r="102.5" stroke={color} strokeWidth="1.8" opacity="0.85" />
      <circle cx="300" cy="300" r="60" stroke={color} strokeWidth="1.4" opacity="0.8" />
      <circle cx="300" cy="300" r="25" stroke={color} strokeWidth="2" />
      <circle cx="300" cy="300" r="8" fill={color} />

      {/* 4 Cardinal Axis Scepters connecting from R=205 to R=275 */}
      {Array.from({ length: 4 }).map((_, i) => (
        <g key={`axis-${i}`} transform={`rotate(${i * 90} 300 300)`}>
          <line x1="300" y1="25" x2="300" y2="95" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
          <polygon points="300,95 306,105 300,115 294,105" fill={color} opacity="0.9" />
        </g>
      ))}
    </svg>
  );
}

/**
 * 3. DRISHTI YANTRA WATERMARK (Drishti · Workhorse 70B)
 * Optical focal clarity: 3 concentric diamonds, regular Shatkona (R=190),
 * and double-curved eye of perception jointed directly with the diamond vertices.
 */
export function DrishtiYantraWatermark({ className = "", size = 600, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Blurred Diamond Halo */}
      <g style={{ filter: "blur(9px)" }} opacity="0.32">
        <polygon points="300,15 585,300 300,585 15,300" stroke={color} strokeWidth="7" />
        <circle cx="300" cy="300" r="235" stroke={color} strokeWidth="5" />
      </g>

      <g style={{ filter: "blur(2.4px)" }} opacity="0.75">
        {/* Diamond 1 (R=285): (300,15), (585,300), (300,585), (15,300) */}
        <polygon points="300,15 585,300 300,585 15,300" stroke={color} strokeWidth="1.2" strokeDasharray="5 5" opacity="0.5" />
        {/* Diamond 2 (R=255): (300,45), (555,300), (300,555), (45,300) */}
        <polygon points="300,45 555,300 300,555 45,300" stroke={color} strokeWidth="1.5" opacity="0.7" />
        {/* Diamond 3 (R=225): (300,75), (525,300), (300,525), (75,300) */}
        <polygon points="300,75 525,300 300,525 75,300" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      </g>

      {/* --- CRISP EYE OF PERCEPTION & VERNIER MARKERS --- */}
      {/* Shatkona (R=190, centroid: 300, 300):
          Upward: (300, 110), (464.54, 395), (135.46, 395)
          Downward: (300, 490), (135.46, 205), (464.54, 205) */}
      <polygon points="300,110 464.54,395 135.46,395" stroke={color} strokeWidth="1.8" opacity="0.75" />
      <polygon points="300,490 135.46,205 464.54,205" stroke={color} strokeWidth="1.8" opacity="0.75" />
      <circle cx="300" cy="300" r="190" stroke={color} strokeWidth="1.2" strokeDasharray="4 4" opacity="0.6" />

      {/* Outer Eye of Wisdom: Connected directly to Outer Diamond tips (15, 300) and (585, 300) */}
      <path
        d="M 15 300 C 110 130, 490 130, 585 300 C 490 470, 110 470, 15 300 Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
        opacity="0.95"
      />
      {/* Inner Eye of Wisdom: Connected directly to Third Diamond tips (75, 300) and (525, 300) */}
      <path
        d="M 75 300 C 145 180, 455 180, 525 300 C 455 420, 145 420, 75 300 Z"
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
        opacity="0.75"
      />

      {/* Iris Ring & 36 Fine Radial Iris Striations */}
      <circle cx="300" cy="300" r="110" stroke={color} strokeWidth="2.2" opacity="0.9" />
      <circle cx="300" cy="300" r="70" stroke={color} strokeWidth="1.6" opacity="0.8" />

      {Array.from({ length: 36 }).map((_, i) => (
        <g key={`iris-${i}`} transform={`rotate(${i * 10} 300 300)`}>
          <line x1="300" y1="190" x2="300" y2="230" stroke={color} strokeWidth={i % 3 === 0 ? "1.6" : "0.8"} opacity={i % 3 === 0 ? "0.9" : "0.6"} />
        </g>
      ))}

      {/* Pupil with Reflection Gleam */}
      <circle cx="300" cy="300" r="42" stroke={color} strokeWidth="2.2" />
      <circle cx="300" cy="300" r="24" stroke={color} strokeWidth="1.5" opacity="0.85" />
      <circle cx="300" cy="300" r="10" fill={color} />
      <circle cx="312" cy="288" r="4" fill="#FFFFFF" opacity="0.95" />

      {/* Vernier Calipers:
          Top connects from Diamond tip (300, 15) to Shatkona apex (300, 110)
          Bottom connects from Shatkona apex (300, 490) to Diamond tip (300, 585) */}
      <line x1="300" y1="15" x2="300" y2="110" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="300" y1="490" x2="300" y2="585" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * 4. VAYU MANDALA WATERMARK (Vayu · Edge 8B)
 * Kinetic wind & dynamic prana: Outer Shatkona (R=235) and nested inner Shatkona (R=185),
 * with 6 collinear wind beacons and harmonic spiral ribbons.
 */
export function VayuMandalaWatermark({ className = "", size = 600, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g style={{ filter: "blur(8px)" }} opacity="0.32">
        <circle cx="300" cy="300" r="265" stroke={color} strokeWidth="6" />
      </g>

      <g style={{ filter: "blur(2.6px)" }} opacity="0.75">
        <circle cx="300" cy="300" r="285" stroke={color} strokeWidth="1" strokeDasharray="6 4" opacity="0.5" />
        <circle cx="300" cy="300" r="265" stroke={color} strokeWidth="1.4" opacity="0.65" />

        {/* 36 Directional Airflow Micro-Ticks */}
        {Array.from({ length: 36 }).map((_, i) => (
          <g key={`wind-${i}`} transform={`rotate(${i * 10} 300 300)`}>
            <line x1="300" y1="265" x2="300" y2={i % 3 === 0 ? "252" : "258"} stroke={color} strokeWidth={i % 3 === 0 ? "1.8" : "0.8"} />
          </g>
        ))}

        {/* 12 Sweeping Harmonic Spiral Vortex Ribbons */}
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={`vortex-${i}`} transform={`rotate(${i * 30} 300 300)`}>
            <path
              d="M 300 300 C 340 260, 390 240, 440 280 C 480 310, 490 350, 470 390"
              stroke={color}
              strokeWidth={i % 2 === 0 ? "1.8" : "1.2"}
              strokeLinecap="round"
              fill="none"
              opacity={i % 2 === 0 ? "0.85" : "0.55"}
            />
          </g>
        ))}
      </g>

      {/* --- CRISP SHATKONA AIR ELEMENT & BREATH CORES --- */}
      {/* Outer Air Shatkona (R=235):
          Upward: (300, 65), (503.52, 417.5), (96.48, 417.5)
          Downward: (300, 535), (96.48, 182.5), (503.52, 182.5) */}
      <polygon points="300,65 503.52,417.5 96.48,417.5" stroke={color} strokeWidth="2.2" opacity="0.85" />
      <polygon points="300,535 96.48,182.5 503.52,182.5" stroke={color} strokeWidth="2.2" opacity="0.85" />

      {/* Inner Nested Air Shatkona (R=185):
          Upward: (300, 115), (460.21, 392.5), (139.79, 392.5)
          Downward: (300, 485), (139.79, 207.5), (460.21, 207.5) */}
      <polygon points="300,115 460.21,392.5 139.79,392.5" stroke={color} strokeWidth="1.4" opacity="0.65" />
      <polygon points="300,485 139.79,207.5 460.21,207.5" stroke={color} strokeWidth="1.4" opacity="0.65" />

      {/* Incircle Tangent to Inner Shatkona at r = 185/2 = 92.5 */}
      <circle cx="300" cy="300" r="185" stroke={color} strokeWidth="1.2" strokeDasharray="4 4" opacity="0.7" />
      <circle cx="300" cy="300" r="120" stroke={color} strokeWidth="2" opacity="0.85" />
      <circle cx="300" cy="300" r="75" stroke={color} strokeWidth="1.6" opacity="0.8" />
      <circle cx="300" cy="300" r="40" stroke={color} strokeWidth="2.2" />
      <circle cx="300" cy="300" r="10" fill={color} />
      <circle cx="300" cy="300" r="4" fill="#FFFFFF" />

      {/* 6 Cardinal Wind Beacons: Collinear rays through the vertices out to R=285 */}
      {Array.from({ length: 6 }).map((_, i) => (
        <g key={`breeze-${i}`} transform={`rotate(${i * 60} 300 300)`}>
          <line x1="300" y1="15" x2="300" y2="65" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="300" cy="40" r="2.5" fill={color} />
        </g>
      ))}
    </svg>
  );
}

/**
 * 5. AGNI YANTRA WATERMARK (Agni · Code & Agentic 120B)
 * Five Ascending Panchagni Triangles (all centered at 300, 300), balanced by Downward Ether Triangle (R=210).
 */
export function AgniYantraWatermark({ className = "", size = 600, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g style={{ filter: "blur(9px)" }} opacity="0.35">
        <circle cx="300" cy="300" r="260" stroke={color} strokeWidth="7" />
        <polygon points="300,45 520.84,427.5 79.16,427.5" stroke={color} strokeWidth="5" />
      </g>

      <g style={{ filter: "blur(2.4px)" }} opacity="0.75">
        <circle cx="300" cy="300" r="285" stroke={color} strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
        <circle cx="300" cy="300" r="260" stroke={color} strokeWidth="1.5" opacity="0.7" />

        {/* 24 Radiant Flame Tongues */}
        {Array.from({ length: 24 }).map((_, i) => (
          <g key={`tongue-${i}`} transform={`rotate(${i * 15} 300 300)`}>
            <path
              d="M 300 180 C 306 205, 308 220, 300 240 C 292 220, 294 205, 300 180 Z"
              stroke={color}
              strokeWidth="1.4"
              fill="none"
              opacity={i % 2 === 0 ? "0.9" : "0.55"}
            />
          </g>
        ))}
      </g>

      {/* --- CRISP 5 ASCENDING PANCHAGNI TRIANGLES (Shared Centroid: 300, 300) --- */}
      {/* T1: R=255 => (300, 45), (520.84, 427.5), (79.16, 427.5) */}
      <polygon points="300,45 520.84,427.5 79.16,427.5" stroke={color} strokeWidth="2.5" opacity="0.95" />
      {/* T2: R=210 => (300, 90), (481.87, 405), (118.13, 405) */}
      <polygon points="300,90 481.87,405 118.13,405" stroke={color} strokeWidth="2" opacity="0.9" />
      {/* T3: R=165 => (300, 135), (442.89, 382.5), (157.11, 382.5) */}
      <polygon points="300,135 442.89,382.5 157.11,382.5" stroke={color} strokeWidth="1.6" opacity="0.85" />
      {/* T4: R=120 => (300, 180), (403.92, 360), (196.08, 360) */}
      <polygon points="300,180 403.92,360 196.08,360" stroke={color} strokeWidth="1.4" opacity="0.8" />
      {/* T5: R=75 => (300, 225), (364.95, 337.5), (235.05, 337.5) */}
      <polygon points="300,225 364.95,337.5 235.05,337.5" stroke={color} strokeWidth="1.2" opacity="0.75" />

      {/* Balancing Downward Ether Triangle (R=210): (300, 510), (118.13, 195), (481.87, 195)
          Base width exactly matches T2 (481.87 - 118.13 = 363.74) */}
      <polygon points="300,510 118.13,195 481.87,195" stroke={color} strokeWidth="1.5" opacity="0.65" />

      {/* Central Flame Teardrop Mandala */}
      <path
        d="M 300 240 C 325 295, 345 325, 345 355 C 345 385, 325 405, 300 405 C 275 405, 255 385, 255 355 C 255 325, 275 295, 300 240 Z"
        stroke={color}
        strokeWidth="2.2"
        fill="none"
        opacity="0.95"
      />
      <circle cx="300" cy="355" r="16" stroke={color} strokeWidth="2.2" />
      <circle cx="300" cy="355" r="7" fill={color} />
      <circle cx="300" cy="355" r="2.5" fill="#FFFFFF" />

      {/* 4 Cardinal Flame Scepters aligned from R=255 to R=285 */}
      <line x1="300" y1="15" x2="300" y2="45" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="300" y1="555" x2="300" y2="585" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="15" y1="300" x2="45" y2="300" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="555" y1="300" x2="585" y2="300" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * 6. PRITHVI YANTRA WATERMARK (Prithvi · Grounded Multimodal 32B)
 * Closed Bhupura with 4 stepped Gopuram gateways, Ashtalakshmi dual-square (R=183.85),
 * and 3D coordinate crosshairs terminating on vertices.
 */
export function PrithviYantraWatermark({ className = "", size = 600, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g style={{ filter: "blur(8px)" }} opacity="0.32">
        <rect x="75" y="75" width="450" height="450" stroke={color} strokeWidth="6" />
      </g>

      <g style={{ filter: "blur(2.2px)" }} opacity="0.75">
        <circle cx="300" cy="300" r="285" stroke={color} strokeWidth="1" strokeDasharray="5 3" opacity="0.45" />

        {/* Outer Bhupura Wall: Mathematically closed with 4 symmetric stepped gateways */}
        <path
          d="M 60 60 H 210 V 45 H 235 V 30 H 365 V 45 H 390 V 60 H 540 V 210 H 555 V 235 H 570 V 365 H 555 V 390 H 540 V 540 H 390 V 555 H 365 V 570 H 235 V 555 H 210 V 540 H 60 V 390 H 45 V 365 H 30 V 235 H 45 V 210 H 60 Z"
          stroke={color}
          strokeWidth="2.2"
          fill="none"
          opacity="0.85"
        />
        <rect x="90" y="90" width="420" height="420" rx="4" stroke={color} strokeWidth="1.4" opacity="0.7" />
      </g>

      {/* --- CRISP 8-PETALED FOUNDATION LOTUS, DUAL CHATURASRA & 3D AXES --- */}
      {/* 8-Petaled Foundation Lotus blooming between R=165 and R=215 */}
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={`padma-${i}`} transform={`rotate(${i * 45} 300 300)`}>
          <path
            d="M 300 85 C 320 115, 320 145, 300 165 C 280 145, 280 115, 300 85 Z"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
            opacity="0.85"
          />
          <circle cx="300" cy="95" r="2" fill={color} />
        </g>
      ))}

      <circle cx="300" cy="300" r="165" stroke={color} strokeWidth="1.5" opacity="0.8" />

      {/* Orthogonal Square (side 260, half-width 130 => corner radius 183.85) */}
      <rect x="170" y="170" width="260" height="260" rx="2" stroke={color} strokeWidth="1.8" opacity="0.85" />
      {/* 45-degree Rotated Diamond Square (exact same circumradius 183.85: 300 +/- 183.85) */}
      <polygon points="300,116.15 483.85,300 300,483.85 116.15,300" stroke={color} strokeWidth="1.8" opacity="0.9" />

      {/* Inner Concentric Diamond (R=78): (300, 222), (378, 300), (300, 378), (222, 300) */}
      <polygon points="300,222 378,300 300,378 222,300" stroke={color} strokeWidth="1.4" opacity="0.8" />

      {/* 3D Spatial Coordinate Crosshairs terminating EXACTLY on the diamond corners */}
      <line x1="116.15" y1="300" x2="483.85" y2="300" stroke={color} strokeWidth="1.6" strokeDasharray="4 2" opacity="0.8" />
      <line x1="300" y1="116.15" x2="300" y2="483.85" stroke={color} strokeWidth="1.6" strokeDasharray="4 2" opacity="0.8" />

      {/* Central Solid Grounding Anchor */}
      <circle cx="300" cy="300" r="45" stroke={color} strokeWidth="2.2" />
      <circle cx="300" cy="300" r="24" stroke={color} strokeWidth="1.6" opacity="0.85" />
      <circle cx="300" cy="300" r="8" fill={color} />
      <circle cx="300" cy="300" r="3" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * 7. SOMA MANDALA WATERMARK (Soma · Formal Math & Logic 14B)
 * True circular arc waxing crescent (R1=205, R2=242.74) sharing exact cusp vertices (300, 95) and (300, 505),
 * with 5 Amrita proof drops placed on circle R=150.
 */
export function SomaMandalaWatermark({ className = "", size = 600, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g style={{ filter: "blur(9px)" }} opacity="0.32">
        <circle cx="300" cy="300" r="265" stroke={color} strokeWidth="6" />
        <circle cx="300" cy="300" r="195" stroke={color} strokeWidth="4" />
      </g>

      <g style={{ filter: "blur(2.4px)" }} opacity="0.75">
        <circle cx="300" cy="300" r="285" stroke={color} strokeWidth="1" strokeDasharray="4 4" opacity="0.45" />
        <circle cx="300" cy="300" r="265" stroke={color} strokeWidth="1.4" opacity="0.65" />

        {/* 28 Nakshatra Lunar Phase Ticks */}
        {Array.from({ length: 28 }).map((_, i) => (
          <g key={`nakshatra-${i}`} transform={`rotate(${i * (360 / 28)} 300 300)`}>
            <line x1="300" y1="265" x2="300" y2="252" stroke={color} strokeWidth={i % 4 === 0 ? "1.8" : "0.8"} />
            {i % 4 === 0 && (
              <circle cx="300" cy="246" r="2" fill={color} />
            )}
          </g>
        ))}

        {/* 16 Chandra Kalas (Lunar Digits) */}
        {Array.from({ length: 16 }).map((_, i) => (
          <g key={`chandra-${i}`} transform={`rotate(${i * 22.5} 300 300)`}>
            <path
              d="M 300 175 C 310 195, 310 215, 300 230 C 306 215, 306 195, 300 175 Z"
              fill={color}
              opacity="0.7"
            />
          </g>
        ))}
      </g>

      {/* --- CRISP WAXING CHANDRA CRESCENT & DEDUCTIVE LOGIC CORE --- */}
      <circle cx="300" cy="300" r="195" stroke={color} strokeWidth="1.5" opacity="0.75" />

      {/* Grand Waxing Chandra (Lunar Crescent):
          Both arcs meet at exact cusps (300, 95) and (300, 505) */}
      <path
        d="M 300 95 A 205 205 0 0 1 300 505 A 242.74 242.74 0 0 0 300 95 Z"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        opacity="0.95"
      />

      {/* 5 Amrita Proof Drops placed at R=150 on angles -45, -22.5, 0, 22.5, 45 deg */}
      <circle cx="406.07" cy="193.93" r="5" fill={color} opacity="0.85" />
      <circle cx="438.57" cy="242.60" r="6" fill={color} opacity="0.9" />
      <circle cx="450" cy="300" r="7" fill={color} opacity="0.95" />
      <circle cx="438.57" cy="357.40" r="6" fill={color} opacity="0.9" />
      <circle cx="406.07" cy="406.07" r="5" fill={color} opacity="0.85" />

      {/* Central Deductive Reasoning Core */}
      <circle cx="300" cy="300" r="85" stroke={color} strokeWidth="1.8" opacity="0.85" />
      <circle cx="300" cy="300" r="30" stroke={color} strokeWidth="1.6" />
      <circle cx="300" cy="300" r="9" fill={color} />
      <circle cx="300" cy="300" r="3" fill="#FFFFFF" />

      {/* Coordinate Axes */}
      <line x1="300" y1="20" x2="300" y2="60" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="300" y1="540" x2="300" y2="580" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="300" x2="60" y2="300" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="540" y1="300" x2="580" y2="300" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * 8. SHAT-SHAKTI MANDALA WATERMARK (Models Directory · ॥ षट्शक्ति मण्डल ॥)
 * Six foundation models: 6 circles (R=115) whose centers form the vertices of the connecting Shatkona.
 */
export function TriShaktiWatermark({ className = "", size = 600, color = "currentColor" }: SymbolProps) {
  // 6 Node Centers at distance 115:
  // Node 0 (0 deg): (415, 300)
  // Node 1 (60 deg): (357.5, 399.59)
  // Node 2 (120 deg): (242.5, 399.59)
  // Node 3 (180 deg): (185, 300)
  // Node 4 (240 deg): (242.5, 200.41)
  // Node 5 (300 deg): (357.5, 200.41)
  return (
    <svg width={size} height={size} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g style={{ filter: "blur(8px)" }} opacity="0.32">
        <circle cx="300" cy="300" r="270" stroke={color} strokeWidth="6" />
      </g>

      <g style={{ filter: "blur(2.2px)" }} opacity="0.75">
        <circle cx="300" cy="300" r="285" stroke={color} strokeWidth="1" strokeDasharray="4 4" opacity="0.45" />
        <circle cx="300" cy="300" r="270" stroke={color} strokeWidth="1.4" opacity="0.65" />

        {/* 72 Micro Ticks */}
        {Array.from({ length: 72 }).map((_, i) => (
          <g key={`shat-rim-${i}`} transform={`rotate(${i * 5} 300 300)`}>
            <line x1="300" y1="270" x2="300" y2={i % 6 === 0 ? "258" : "264"} stroke={color} strokeWidth={i % 6 === 0 ? "1.6" : "0.75"} />
          </g>
        ))}

        {/* 24 Outer Lotus Petals */}
        {Array.from({ length: 24 }).map((_, i) => (
          <g key={`petal-${i}`} transform={`rotate(${i * 15} 300 300)`}>
            <path
              d="M 300 185 C 312 210, 312 235, 300 245 C 288 235, 288 210, 300 185 Z"
              stroke={color}
              strokeWidth="1.3"
              fill="none"
              opacity="0.75"
            />
          </g>
        ))}
      </g>

      {/* --- CRISP 6 INTERLOCKING CIRCLES & COORDINATING SHATKONA --- */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const cx = 300 + 115 * Math.cos(angle);
        const cy = 300 + 115 * Math.sin(angle);
        return (
          <g key={`node-${i}`}>
            <circle cx={cx} cy={cy} r="115" stroke={color} strokeWidth="1.6" opacity="0.8" />
            <circle cx={cx} cy={cy} r="16" stroke={color} strokeWidth="1.6" fill="none" opacity="0.85" />
            <circle cx={cx} cy={cy} r="6" fill={color} />
          </g>
        );
      })}

      {/* Connecting Shatkona passing DIRECTLY through all 6 node centers:
          Triangle 1: (415, 300), (242.5, 399.59), (242.5, 200.41)
          Triangle 2: (357.5, 399.59), (185, 300), (357.5, 200.41) */}
      <polygon points="415,300 242.5,399.59 242.5,200.41" stroke={color} strokeWidth="1.8" opacity="0.85" />
      <polygon points="357.5,399.59 185,300 357.5,200.41" stroke={color} strokeWidth="1.8" opacity="0.85" />

      {/* Outer Extended Shatkona (R=215) collinear with the 6 nodes */}
      <polygon points="515,300 192.5,486.2 192.5,113.8" stroke={color} strokeWidth="1.4" opacity="0.6" />
      <polygon points="407.5,486.2 85,300 407.5,113.8" stroke={color} strokeWidth="1.4" opacity="0.6" />

      <circle cx="300" cy="300" r="115" stroke={color} strokeWidth="2" opacity="0.9" />
      <circle cx="300" cy="300" r="28" stroke={color} strokeWidth="2.2" />
      <circle cx="300" cy="300" r="8" fill={color} />
    </svg>
  );
}

/**
 * 9. DHARMA CHAKRA WATERMARK (Manifesto / Sovereignty)
 * 24 precision spokes connecting from hub (R=95) to rim (R=235) with anchoring pins.
 */
export function DharmaChakraWatermark({ className = "", size = 600, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g style={{ filter: "blur(8px)" }} opacity="0.32">
        <circle cx="300" cy="300" r="260" stroke={color} strokeWidth="7" />
      </g>

      <g style={{ filter: "blur(2.2px)" }} opacity="0.75">
        <circle cx="300" cy="300" r="285" stroke={color} strokeWidth="1" strokeDasharray="6 4" opacity="0.45" />
        <circle cx="300" cy="300" r="260" stroke={color} strokeWidth="2.5" />

        {/* 72 Boundary Teeth Along Outer Rim */}
        {Array.from({ length: 72 }).map((_, i) => (
          <g key={`tooth-${i}`} transform={`rotate(${i * 5} 300 300)`}>
            <line x1="300" y1="260" x2="300" y2="248" stroke={color} strokeWidth={i % 3 === 0 ? "1.6" : "0.8"} />
          </g>
        ))}
      </g>

      {/* --- CRISP 24 SPOKES & DUAL HUB RING --- */}
      <circle cx="300" cy="300" r="235" stroke={color} strokeWidth="1.5" opacity="0.8" />

      {/* 24 Spoke rays connecting from hub R=95 (y=205) to rim R=235 (y=65) */}
      {Array.from({ length: 24 }).map((_, i) => (
        <g key={`spoke-${i}`} transform={`rotate(${i * 15} 300 300)`}>
          <line x1="300" y1="65" x2="300" y2="205" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="300" cy="205" r="3.5" fill={color} opacity="0.9" />
          <circle cx="300" cy="65" r="3.5" fill={color} opacity="0.9" />
        </g>
      ))}

      <circle cx="300" cy="300" r="95" stroke={color} strokeWidth="2.5" />
      <circle cx="300" cy="300" r="40" stroke={color} strokeWidth="2.2" />
      <circle cx="300" cy="300" r="14" fill={color} />
      <circle cx="300" cy="300" r="5" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * 10. SAHASRARA GATE WATERMARK (Early Access / Community)
 * 1000-petal crown lotus: Tier 1 (32 petals, R=225 to 285), Tier 2 (16 petals, R=195 to 265), Tier 3 (8 petals, R=130 to 195).
 */
export function SahasraraGateWatermark({ className = "", size = 600, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g style={{ filter: "blur(9px)" }} opacity="0.32">
        <circle cx="300" cy="300" r="265" stroke={color} strokeWidth="6" />
      </g>

      <g style={{ filter: "blur(2.6px)" }} opacity="0.75">
        <circle cx="300" cy="300" r="285" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.45" />

        {/* Tier 1: 32 Outer Crown Petals blooming from R=225 to R=285 */}
        {Array.from({ length: 32 }).map((_, i) => (
          <g key={`crown-32-${i}`} transform={`rotate(${i * 11.25} 300 300)`}>
            <path
              d="M 300 15 C 310 45, 312 65, 300 75 C 288 65, 290 45, 300 15 Z"
              stroke={color}
              strokeWidth="1.3"
              fill="none"
              opacity="0.75"
            />
          </g>
        ))}
      </g>

      {/* --- CRISP MIDDLE & INNER PETALS --- */}
      <circle cx="300" cy="300" r="195" stroke={color} strokeWidth="1.6" opacity="0.8" />

      {/* Tier 2: 16 Middle Petals blooming from R=195 (y=105) to R=265 (y=35) */}
      {Array.from({ length: 16 }).map((_, i) => (
        <g key={`crown-16-${i}`} transform={`rotate(${i * 22.5} 300 300)`}>
          <path
            d="M 300 35 C 316 65, 316 90, 300 105 C 284 90, 284 65, 300 35 Z"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
            opacity="0.85"
          />
          <circle cx="300" cy="45" r="2" fill={color} />
        </g>
      ))}

      {/* Tier 3: 8 Inner Petals blooming from R=130 (y=170) to R=195 (y=105) */}
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={`crown-8-${i}`} transform={`rotate(${i * 45} 300 300)`}>
          <path
            d="M 300 105 C 318 130, 318 155, 300 170 C 282 155, 282 130, 300 105 Z"
            stroke={color}
            strokeWidth="1.6"
            fill="none"
            opacity="0.9"
          />
        </g>
      ))}

      <circle cx="300" cy="300" r="130" stroke={color} strokeWidth="1.8" opacity="0.9" />
      <circle cx="300" cy="300" r="80" stroke={color} strokeWidth="1.4" opacity="0.75" />
      <circle cx="300" cy="300" r="45" stroke={color} strokeWidth="2.2" />
      <circle cx="300" cy="300" r="12" fill={color} />
      <circle cx="300" cy="300" r="4" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * 11. SRI ARCHITECTURE WATERMARK (Developer Tools: IDE, CLI, App, SDK)
 * Authentic Navayoni Sri Chakra: 9 interlocking triangles with exact base chord intersections on circle R=160.
 */
export function SriArchitectureWatermark({ className = "", size = 600, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g style={{ filter: "blur(8px)" }} opacity="0.32">
        <rect x="75" y="75" width="450" height="450" stroke={color} strokeWidth="6" />
      </g>

      <g style={{ filter: "blur(2.4px)" }} opacity="0.75">
        <rect x="50" y="50" width="500" height="500" stroke={color} strokeWidth="1.2" opacity="0.5" />
        <rect x="75" y="75" width="450" height="450" stroke={color} strokeWidth="1.5" opacity="0.7" />

        {/* Outer 16-Petal Lotus Band blooming from R=160 to R=225 */}
        <circle cx="300" cy="300" r="225" stroke={color} strokeWidth="1.4" opacity="0.75" />
        {Array.from({ length: 16 }).map((_, i) => (
          <g key={`sri-16-${i}`} transform={`rotate(${i * 22.5} 300 300)`}>
            <path
              d="M 300 75 C 312 105, 312 135, 300 140 C 288 135, 288 105, 300 75 Z"
              stroke={color}
              strokeWidth="1.2"
              fill="none"
              opacity="0.7"
            />
          </g>
        ))}
      </g>

      {/* --- CRISP 9 INTERLOCKING NAVAYONI TRIANGLES (Circle R=160) --- */}
      <circle cx="300" cy="300" r="160" stroke={color} strokeWidth="1.8" opacity="0.9" />

      {/* 4 Upward Shiva Triangles (Base chords anchored on circle R=160):
          T1: apex (300, 140), base y=365, x in [153.8, 446.2]
          T2: apex (300, 185), base y=390, x in [167.7, 432.3]
          T3: apex (300, 210), base y=415, x in [188.8, 411.2]
          T4: apex (300, 245), base y=440, x in [222.5, 377.5] */}
      <polygon points="300,140 446.2,365 153.8,365" stroke={color} strokeWidth="2" opacity="0.95" />
      <polygon points="300,185 432.3,390 167.7,390" stroke={color} strokeWidth="1.7" opacity="0.9" />
      <polygon points="300,210 411.2,415 188.8,415" stroke={color} strokeWidth="1.5" opacity="0.85" />
      <polygon points="300,245 377.5,440 222.5,440" stroke={color} strokeWidth="1.4" opacity="0.8" />

      {/* 5 Downward Shakti Triangles (Base chords anchored on circle R=160):
          T5: apex (300, 460), base y=235, x in [153.8, 446.2]
          T6: apex (300, 415), base y=210, x in [167.7, 432.3]
          T7: apex (300, 390), base y=185, x in [188.8, 411.2]
          T8: apex (300, 355), base y=160, x in [222.5, 377.5]
          T9 (Innermost): apex (300, 335), base y=268, x in [245, 355] */}
      <polygon points="300,460 153.8,235 446.2,235" stroke={color} strokeWidth="2" opacity="0.95" />
      <polygon points="300,415 167.7,210 432.3,210" stroke={color} strokeWidth="1.7" opacity="0.9" />
      <polygon points="300,390 188.8,185 411.2,185" stroke={color} strokeWidth="1.5" opacity="0.85" />
      <polygon points="300,355 222.5,160 377.5,160" stroke={color} strokeWidth="1.4" opacity="0.8" />
      <polygon points="300,335 245,268 355,268" stroke={color} strokeWidth="1.3" opacity="0.75" />

      {/* Central Mahabindu */}
      <circle cx="300" cy="300" r="14" stroke={color} strokeWidth="1.8" />
      <circle cx="300" cy="300" r="6" fill={color} />
      <circle cx="300" cy="300" r="2" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * 12. LOTUS MANDALA WATERMARK (CTA Background / Open Sky Principle)
 * Authentic Ashtalakshmi 8-pointed star (R=50) with 16-petal blooming lotus (R=50 to 82).
 */
export function LotusMandalaWatermark({ className = "", size = 260, color = "currentColor" }: SymbolProps) {
  // Center (100, 100). Star R=50:
  // Square 1: (100, 50), (150, 100), (100, 150), (50, 100)
  // Square 2: (64.64, 64.64), (135.36, 64.64), (135.36, 135.36), (64.64, 135.36)
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="100" cy="100" r="95" stroke={color} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
      <circle cx="100" cy="100" r="82" stroke={color} strokeWidth="1" opacity="0.65" />

      {/* 16-Petal Layered Lotus Ring blooming from R=50 to R=82 */}
      {Array.from({ length: 16 }).map((_, i) => (
        <g key={`cta-lotus-${i}`} transform={`rotate(${i * 22.5} 100 100)`}>
          <path
            d="M 100 18 C 105 28, 105 40, 100 50 C 95 40, 95 28, 100 18 Z"
            stroke={color}
            strokeWidth="1"
            fill="none"
            opacity="0.8"
          />
        </g>
      ))}

      {/* Ashtalakshmi Star (R=50): Square 1 + Square 2 */}
      <polygon points="100,50 150,100 100,150 50,100" stroke={color} strokeWidth="1.2" opacity="0.85" />
      <polygon points="64.64,64.64 135.36,64.64 135.36,135.36 64.64,135.36" stroke={color} strokeWidth="1.2" opacity="0.85" />

      {/* Incircle Tangent to Star edges at r = 50 * 0.7071 = 35.36 */}
      <circle cx="100" cy="100" r="35.36" stroke={color} strokeWidth="1.2" opacity="0.85" />
      <circle cx="100" cy="100" r="16" stroke={color} strokeWidth="1.4" />
      <circle cx="100" cy="100" r="5" fill={color} opacity="0.9" />
    </svg>
  );
}

/**
 * Master Router: Returns the EXACT unique traditional sacred watermark for each theme
 */
export function ThemeBackgroundWatermark({
  theme = "overview",
  color = "currentColor",
  size = 500,
  className = "",
}: {
  theme?: string;
  color?: string;
  size?: number;
  className?: string;
}) {
  const norm = theme.toLowerCase();

  if (norm.includes("ultra") || norm.includes("akash")) {
    return <AkashCosmosWatermark size={size} color={color} className={className} />;
  }
  if (norm.includes("pro") || norm.includes("drishti")) {
    return <DrishtiYantraWatermark size={size} color={color} className={className} />;
  }
  if (norm.includes("nano") || norm.includes("vayu")) {
    return <VayuMandalaWatermark size={size} color={color} className={className} />;
  }
  if (norm.includes("agni")) {
    return <AgniYantraWatermark size={size} color={color} className={className} />;
  }
  if (norm.includes("prithvi")) {
    return <PrithviYantraWatermark size={size} color={color} className={className} />;
  }
  if (norm.includes("soma")) {
    return <SomaMandalaWatermark size={size} color={color} className={className} />;
  }
  if (norm.includes("models")) {
    return <TriShaktiWatermark size={size} color={color} className={className} />;
  }
  if (norm.includes("manifesto")) {
    return <DharmaChakraWatermark size={size} color={color} className={className} />;
  }
  if (norm.includes("access")) {
    return <SahasraraGateWatermark size={size} color={color} className={className} />;
  }
  if (norm.includes("ide") || norm.includes("cli") || norm.includes("app") || norm.includes("ext") || norm.includes("sdk")) {
    return <SriArchitectureWatermark size={size} color={color} className={className} />;
  }
  return <SuryaMandalaWatermark size={size} color={color} className={className} />;
}

export function getModelTraditionalSymbol(idOrName: string, size = 32, color?: string) {
  const norm = idOrName.toLowerCase();
  if (norm.includes("akash") || norm.includes("ultra")) {
    return <AkashSymbol size={size} color={color || "#E11D48"} />;
  }
  if (norm.includes("drishti") || norm.includes("pro")) {
    return <DrishtiSymbol size={size} color={color || "#D97706"} />;
  }
  if (norm.includes("vayu") || norm.includes("nano")) {
    return <VayuSymbol size={size} color={color || "#059669"} />;
  }
  if (norm.includes("agni")) {
    return <AgniSymbol size={size} color={color || "#EA580C"} />;
  }
  if (norm.includes("prithvi")) {
    return <PrithviSymbol size={size} color={color || "#C2410C"} />;
  }
  if (norm.includes("soma")) {
    return <SomaSymbol size={size} color={color || "#4F46E5"} />;
  }
  return <AkashSymbol size={size} color={color} />;
}
