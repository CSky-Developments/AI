"use client";

import React from "react";

interface SymbolProps {
  className?: string;
  size?: number;
  color?: string;
}

/**
 * 1. AKASH (आकाश - Infinite Celestial Ether / Sky · 405B)
 */
export function AkashSymbol({ className = "", size = 32, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="32" cy="32" r="30" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      <circle cx="32" cy="32" r="24" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <circle cx="32" cy="32" r="16" stroke={color} strokeWidth="1.5" />
      <circle cx="32" cy="32" r="8" stroke={color} strokeWidth="1.2" opacity="0.8" />
      <circle cx="32" cy="32" r="3" fill={color} />
      <line x1="32" y1="2" x2="32" y2="10" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="54" x2="32" y2="62" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="2" y1="32" x2="10" y2="32" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="54" y1="32" x2="62" y2="32" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <polygon points="32,12 34,16 32,20 30,16" fill={color} opacity="0.7" />
      <polygon points="32,44 34,48 32,52 30,48" fill={color} opacity="0.7" />
      <polygon points="12,32 16,30 20,32 16,34" fill={color} opacity="0.7" />
      <polygon points="44,32 48,30 52,32 48,34" fill={color} opacity="0.7" />
    </svg>
  );
}

/**
 * 2. DRISHTI (दृष्टि - The Eye of Wisdom / Focused Perception · 70B)
 */
export function DrishtiSymbol({ className = "", size = 32, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <polygon points="32,2 62,32 32,62 2,32" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      <polygon points="32,8 56,32 32,56 8,32" stroke={color} strokeWidth="1.2" opacity="0.7" />
      <path d="M4 32 C14 14, 50 14, 60 32 C50 50, 14 50, 4 32 Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <circle cx="32" cy="32" r="13" stroke={color} strokeWidth="1.5" />
      <circle cx="32" cy="32" r="8" stroke={color} strokeWidth="1.2" opacity="0.8" />
      <circle cx="32" cy="32" r="4" fill={color} />
      <line x1="32" y1="12" x2="32" y2="19" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="32" y1="45" x2="32" y2="52" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * 3. VAYU (वायु - Wind, Breath & Dynamic Prana · 8B)
 */
export function VayuSymbol({ className = "", size = 32, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="32" cy="32" r="29" stroke={color} strokeWidth="1" strokeDasharray="4 2" opacity="0.4" />
      <polygon points="32,7 53,44 11,44" stroke={color} strokeWidth="1.4" opacity="0.6" />
      <polygon points="32,57 11,20 53,20" stroke={color} strokeWidth="1.4" opacity="0.6" />
      <path
        d="M20 32 C20 25, 26 21, 32 21 C39 21, 44 26, 44 32 C44 37, 40 41, 35 41 C31 41, 28 38, 28 34 C28 31, 30 29, 33 29 C35 29, 36 30, 36 32"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="32" cy="32" r="2.5" fill={color} />
    </svg>
  );
}

/**
 * 4. AGNI (अग्नि - The Cosmic Fire of Computation & Synthesis · 120B)
 * Upward-pointing sacred flame triangle with inner solar bindu.
 */
export function AgniSymbol({ className = "", size = 32, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="32" cy="32" r="28" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      {/* Sacred Agni Equilateral Triangle (Fire Element in Vedic Yantras) */}
      <polygon points="32,8 54,48 10,48" stroke={color} strokeWidth="2" />
      <polygon points="32,20 45,44 19,44" stroke={color} strokeWidth="1.2" opacity="0.6" />
      {/* Inner Central Flame */}
      <path
        d="M32 26 C35 32, 38 35, 38 39 C38 43, 35 45, 32 45 C29 45, 26 43, 26 39 C26 35, 29 32, 32 26 Z"
        fill={color}
        opacity="0.85"
      />
      <circle cx="32" cy="38" r="2" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * 5. PRITHVI (पृथ्वी - The Grounded Earth / Multimodal World-Model · 32B)
 * Sacred Vedic square (Chaturasra) with 4 cardinal gateways & central lotus foundation.
 */
export function PrithviSymbol({ className = "", size = 32, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="32" cy="32" r="28" stroke={color} strokeWidth="1" strokeDasharray="4 2" opacity="0.4" />
      {/* Sacred Earth Square (Prithvi element yantra) */}
      <rect x="14" y="14" width="36" height="36" rx="2" stroke={color} strokeWidth="2" />
      <rect x="20" y="20" width="24" height="24" rx="1" stroke={color} strokeWidth="1.2" opacity="0.6" />
      <polygon points="32,24 40,32 32,40 24,32" stroke={color} strokeWidth="1.5" />
      <circle cx="32" cy="32" r="3" fill={color} />
      {/* 4 Cardinal Anchor Points */}
      <circle cx="14" cy="32" r="1.5" fill={color} />
      <circle cx="50" cy="32" r="1.5" fill={color} />
      <circle cx="32" cy="14" r="1.5" fill={color} />
      <circle cx="32" cy="50" r="1.5" fill={color} />
    </svg>
  );
}

/**
 * 6. SOMA (सोम - The Nectar of Formal Logic & Mathematics · 14B)
 * Sacred Lunar Crescent with distilled drops of wisdom & constellation bindu.
 */
export function SomaSymbol({ className = "", size = 32, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="32" cy="32" r="28" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      {/* Sacred Moon Crescent (Chandra / Soma) */}
      <path
        d="M26 12 C38 12, 48 22, 48 34 C48 46, 38 52, 26 52 C34 46, 38 38, 38 32 C38 24, 34 18, 26 12 Z"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      {/* Distilled Drop of Nectar (Amrita / Soma) */}
      <path
        d="M24 32 C24 28, 28 24, 28 20 C28 24, 32 28, 32 32 C32 35, 30 37, 28 37 C26 37, 24 35, 24 32 Z"
        fill={color}
        opacity="0.8"
      />
      <circle cx="44" cy="22" r="1.8" fill={color} />
      <circle cx="46" cy="36" r="1.4" fill={color} />
    </svg>
  );
}

/**
 * Additional Sacred Vedic Symbols for Site Architecture
 */
export function BuddhiYantraSymbol({ className = "", size = 32, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="32" cy="32" r="28" stroke={color} strokeWidth="1.2" opacity="0.4" strokeDasharray="3 3" />
      <circle cx="32" cy="32" r="22" stroke={color} strokeWidth="1.5" />
      <polygon points="32,14 48,42 16,42" stroke={color} strokeWidth="1.8" />
      <polygon points="32,50 16,22 48,22" stroke={color} strokeWidth="1.8" />
      <circle cx="32" cy="32" r="7" stroke={color} strokeWidth="1.5" />
      <circle cx="32" cy="32" r="2.5" fill={color} />
    </svg>
  );
}

export function SrishtiPadmaSymbol({ className = "", size = 32, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="32" cy="32" r="28" stroke={color} strokeWidth="1" opacity="0.4" strokeDasharray="3 3" />
      <circle cx="32" cy="32" r="20" stroke={color} strokeWidth="1.2" />
      <circle cx="32" cy="32" r="8" stroke={color} strokeWidth="1.5" />
      <circle cx="32" cy="32" r="2.5" fill={color} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 32 32)`}>
          <path d="M32 20 C28 14, 28 8, 32 3 C36 8, 36 14, 32 20 Z" stroke={color} strokeWidth="1.4" fill="none" />
        </g>
      ))}
    </svg>
  );
}

export function SangamYantraSymbol({ className = "", size = 32, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="32" cy="32" r="28" stroke={color} strokeWidth="1" strokeDasharray="2 4" opacity="0.4" />
      <circle cx="26" cy="28" r="16" stroke={color} strokeWidth="1.5" opacity="0.8" />
      <circle cx="38" cy="28" r="16" stroke={color} strokeWidth="1.5" opacity="0.8" />
      <circle cx="32" cy="40" r="16" stroke={color} strokeWidth="1.5" opacity="0.8" />
      <circle cx="32" cy="32" r="3" fill={color} />
    </svg>
  );
}

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
   DEDICATED FULL-SCALE BACKGROUND WATERMARKS (For all models & pages)
   Deeply detailed, authentic Vedic sacred geometry & astrological mandalas
   ========================================================================= */

/**
 * 1. SURYA MANDALA WATERMARK (Overview / Hero)
 * Cosmic Sun Wheel with selectively blurred outer radiance aura & sun flares,
 * while inner Ashtalakshmi star, lotus chakra, and solar core remain crisp.
 */
export function SuryaMandalaWatermark({ className = "", size = 600, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* --- SELECTIVELY BLURRED AURA & OUTER RADIANCE (Dreamy ethereal glow) --- */}
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

        {/* 32 Radiant Sun Flares / Lotus Rays (Softly blurred outer rays) */}
        {Array.from({ length: 32 }).map((_, i) => (
          <g key={`flare-${i}`} transform={`rotate(${i * 11.25} 300 300)`}>
            <path
              d="M300 135 C304 175, 308 200, 300 245 C292 200, 296 175, 300 135 Z"
              stroke={color}
              strokeWidth="1.2"
              fill="none"
              opacity={i % 2 === 0 ? "0.85" : "0.5"}
            />
            {i % 2 === 0 && (
              <circle cx="300" cy="140" r="2.5" fill={color} opacity="0.8" />
            )}
          </g>
        ))}
      </g>

      {/* --- CRISP, DETAILED FOCAL GEOMETRY (Sharp, precision sacred lines) --- */}
      <circle cx="300" cy="300" r="215" stroke={color} strokeWidth="1.5" opacity="0.8" />
      <circle cx="300" cy="300" r="185" stroke={color} strokeWidth="1" strokeDasharray="4 4" opacity="0.65" />

      {/* 16-Petal Layered Lotus Ring */}
      {Array.from({ length: 16 }).map((_, i) => (
        <g key={`lotus-${i}`} transform={`rotate(${i * 22.5} 300 300)`}>
          <path
            d="M300 185 C316 215, 316 245, 300 260 C284 245, 284 215, 300 185 Z"
            stroke={color}
            strokeWidth="1.4"
            fill="none"
            opacity="0.9"
          />
          <line x1="300" y1="185" x2="300" y2="240" stroke={color} strokeWidth="0.8" opacity="0.6" />
        </g>
      ))}

      {/* Interlocking 8-Point Ashtalakshmi Star */}
      <polygon points="300,150 406,256 406,344 300,450 194,344 194,256" stroke={color} strokeWidth="1.4" opacity="0.75" />
      <polygon points="344,194 450,300 344,406 256,406 150,300 256,194" stroke={color} strokeWidth="1.4" opacity="0.75" />
      <rect x="220" y="220" width="160" height="160" stroke={color} strokeWidth="1.4" transform="rotate(45 300 300)" opacity="0.85" />
      <rect x="220" y="220" width="160" height="160" stroke={color} strokeWidth="1.4" opacity="0.85" />

      {/* Inner Solar Radiance Rings & Bindu */}
      <circle cx="300" cy="300" r="110" stroke={color} strokeWidth="1.6" opacity="0.85" />
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
 * Infinite celestial ether: Deeply blurred outer orbital ellipses & planetary auras,
 * with crisp 12-point astral geometry and focal Sri-bindu.
 */
export function AkashCosmosWatermark({ className = "", size = 600, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* --- SELECTIVELY BLURRED CELESTIAL AURA & ORBITAL SHELLS --- */}
      <g style={{ filter: "blur(9px)" }} opacity="0.32">
        <circle cx="300" cy="300" r="270" stroke={color} strokeWidth="6" />
        <ellipse cx="300" cy="300" rx="275" ry="95" stroke={color} strokeWidth="5" />
        <ellipse cx="300" cy="300" rx="275" ry="95" stroke={color} strokeWidth="5" transform="rotate(90 300 300)" />
      </g>

      <g style={{ filter: "blur(2.6px)" }} opacity="0.75">
        {/* Outer Sapta-Loka Rings & 48 Meridian Ticks */}
        <circle cx="300" cy="300" r="290" stroke={color} strokeWidth="0.8" strokeDasharray="4 6" opacity="0.4" />
        <circle cx="300" cy="300" r="270" stroke={color} strokeWidth="1.2" opacity="0.5" />
        
        {Array.from({ length: 48 }).map((_, i) => (
          <g key={`meridian-${i}`} transform={`rotate(${i * 7.5} 300 300)`}>
            <line x1="300" y1="270" x2="300" y2={i % 4 === 0 ? "258" : "264"} stroke={color} strokeWidth={i % 4 === 0 ? "1.6" : "0.75"} />
          </g>
        ))}

        {/* 4 Intersecting Orbital Ellipses (Dreamy astronomical drift) */}
        <ellipse cx="300" cy="300" rx="275" ry="95" stroke={color} strokeWidth="1.4" opacity="0.7" />
        <ellipse cx="300" cy="300" rx="275" ry="95" stroke={color} strokeWidth="1.4" transform="rotate(45 300 300)" opacity="0.7" />
        <ellipse cx="300" cy="300" rx="275" ry="95" stroke={color} strokeWidth="1.4" transform="rotate(90 300 300)" opacity="0.7" />
        <ellipse cx="300" cy="300" rx="275" ry="95" stroke={color} strokeWidth="1.4" transform="rotate(135 300 300)" opacity="0.7" />

        {/* Orbital Nodes with Soft Atmospheric Halos */}
        <circle cx="430" cy="300" r="5" fill={color} opacity="0.85" />
        <circle cx="170" cy="300" r="5" fill={color} opacity="0.85" />
        <circle cx="300" cy="430" r="5" fill={color} opacity="0.85" />
        <circle cx="300" cy="170" r="5" fill={color} opacity="0.85" />
      </g>

      {/* --- CRISP, PRECISE ASTRAL GEOMETRY --- */}
      <circle cx="300" cy="300" r="205" stroke={color} strokeWidth="1.5" opacity="0.8" />
      <circle cx="300" cy="300" r="165" stroke={color} strokeWidth="1.2" strokeDasharray="3 3" opacity="0.7" />
      <circle cx="300" cy="300" r="125" stroke={color} strokeWidth="1.8" opacity="0.9" />
      <circle cx="300" cy="300" r="85" stroke={color} strokeWidth="1.2" opacity="0.85" />
      <circle cx="300" cy="300" r="45" stroke={color} strokeWidth="2" />
      <circle cx="300" cy="300" r="8" fill={color} />

      {/* 12-Point Astral Geometry (Dual Interlocking Hexagrams) */}
      <polygon points="300,95 477,402 123,402" stroke={color} strokeWidth="1.4" opacity="0.65" />
      <polygon points="300,505 123,198 477,198" stroke={color} strokeWidth="1.4" opacity="0.65" />
      <polygon points="505,300 198,477 198,123" stroke={color} strokeWidth="1.2" opacity="0.55" />
      <polygon points="95,300 402,123 402,477" stroke={color} strokeWidth="1.2" opacity="0.55" />

      {/* Cardinal Axis Radiance Lines */}
      {Array.from({ length: 4 }).map((_, i) => (
        <g key={`axis-${i}`} transform={`rotate(${i * 90} 300 300)`}>
          <line x1="300" y1="15" x2="300" y2="75" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
          <polygon points="300,105 306,115 300,125 294,115" fill={color} opacity="0.9" />
        </g>
      ))}
    </svg>
  );
}

/**
 * 3. DRISHTI YANTRA WATERMARK (Drishti · Production Workhorse 70B)
 * Optical focal clarity: Soft blurred outer diamond boundary & optical wave-fronts,
 * with razor-sharp eye of wisdom, iris striations, pupil, and vernier calipers.
 */
export function DrishtiYantraWatermark({ className = "", size = 600, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* --- SELECTIVELY BLURRED OPTICAL WAVEFRONTS & DIAMOND HALO --- */}
      <g style={{ filter: "blur(9px)" }} opacity="0.32">
        <polygon points="300,20 580,300 300,580 20,300" stroke={color} strokeWidth="7" />
        <circle cx="300" cy="300" r="235" stroke={color} strokeWidth="5" />
      </g>

      <g style={{ filter: "blur(2.4px)" }} opacity="0.75">
        <polygon points="300,15 585,300 300,585 15,300" stroke={color} strokeWidth="1.2" strokeDasharray="5 5" opacity="0.5" />
        <polygon points="300,45 555,300 300,555 45,300" stroke={color} strokeWidth="1.5" opacity="0.7" />
        <polygon points="300,75 525,300 300,525 75,300" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
        <circle cx="300" cy="300" r="235" stroke={color} strokeWidth="1.2" opacity="0.5" />
        <circle cx="300" cy="300" r="195" stroke={color} strokeWidth="1.2" strokeDasharray="4 4" opacity="0.65" />
      </g>

      {/* --- CRISP, FOCUSED EYE OF PERCEPTION & VERNIER MARKERS --- */}
      <rect x="250" y="250" width="100" height="100" stroke={color} strokeWidth="1.4" transform="rotate(45 300 300)" opacity="0.75" />
      <circle cx="300" cy="300" r="150" stroke={color} strokeWidth="1.6" opacity="0.8" />

      {/* Shatkona (Focus & Wisdom) */}
      <polygon points="300,110 465,395 135,395" stroke={color} strokeWidth="1.5" opacity="0.7" />
      <polygon points="300,490 135,205 465,205" stroke={color} strokeWidth="1.5" opacity="0.7" />

      {/* Double-Curved Eye of Wisdom */}
      <path
        d="M25 300 C110 130, 490 130, 575 300 C490 470, 110 470, 25 300 Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
        opacity="0.95"
      />
      <path
        d="M75 300 C145 180, 455 180, 525 300 C455 420, 145 420, 75 300 Z"
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
        opacity="0.7"
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

      {/* Vernier Caliper Axes */}
      <line x1="300" y1="30" x2="300" y2="90" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="300" y1="510" x2="300" y2="570" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="300" x2="70" y2="300" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="530" y1="300" x2="570" y2="300" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * 4. VAYU MANDALA WATERMARK (Vayu · Edge 8B)
 * Kinetic wind & dynamic prana: Selectively blurred spiral vortex arcs & atmospheric ticks,
 * with crisp Shatkona Air hexagram and nested breath cores.
 */
export function VayuMandalaWatermark({ className = "", size = 600, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* --- SELECTIVELY BLURRED WIND VORTEX HALO & SWEEPING CURRENTS --- */}
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
              d="M300 300 C340 260, 390 240, 440 280 C480 310, 490 350, 470 390"
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
      <polygon points="300,65 503,417 97,417" stroke={color} strokeWidth="2.2" opacity="0.8" />
      <polygon points="300,535 97,183 503,183" stroke={color} strokeWidth="2.2" opacity="0.8" />
      <polygon points="300,115 460,392 140,392" stroke={color} strokeWidth="1.3" opacity="0.6" />
      <polygon points="300,485 140,208 460,208" stroke={color} strokeWidth="1.3" opacity="0.6" />

      {/* Concentric Breath Pressure Rings */}
      <circle cx="300" cy="300" r="175" stroke={color} strokeWidth="1.4" strokeDasharray="5 3" opacity="0.7" />
      <circle cx="300" cy="300" r="120" stroke={color} strokeWidth="2" opacity="0.85" />
      <circle cx="300" cy="300" r="75" stroke={color} strokeWidth="1.6" opacity="0.8" />
      <circle cx="300" cy="300" r="40" stroke={color} strokeWidth="2.2" />
      <circle cx="300" cy="300" r="10" fill={color} />
      <circle cx="300" cy="300" r="4" fill="#FFFFFF" />

      {/* 6 Cardinal Wind Beacons */}
      {Array.from({ length: 6 }).map((_, i) => (
        <g key={`breeze-${i}`} transform={`rotate(${i * 60} 300 300)`}>
          <line x1="300" y1="20" x2="300" y2="55" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <circle cx="300" cy="35" r="2.5" fill={color} />
        </g>
      ))}
    </svg>
  );
}

/**
 * 5. AGNI YANTRA WATERMARK (Agni · Code & Agentic 120B)
 * Transformative cosmic fire: Deeply blurred outer flame tongues & solar halo,
 * with razor-sharp 5 ascending Panchagni triangles, central flame teardrop, and white-hot bindu.
 */
export function AgniYantraWatermark({ className = "", size = 600, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* --- SELECTIVELY BLURRED SOLAR FLAME HALO --- */}
      <g style={{ filter: "blur(9px)" }} opacity="0.35">
        <circle cx="300" cy="300" r="260" stroke={color} strokeWidth="7" />
        <polygon points="300,45 525,435 75,435" stroke={color} strokeWidth="5" />
      </g>

      <g style={{ filter: "blur(2.4px)" }} opacity="0.75">
        <circle cx="300" cy="300" r="285" stroke={color} strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
        <circle cx="300" cy="300" r="260" stroke={color} strokeWidth="1.5" opacity="0.7" />

        {/* 24 Radiant Flame Tongues */}
        {Array.from({ length: 24 }).map((_, i) => (
          <g key={`tongue-${i}`} transform={`rotate(${i * 15} 300 300)`}>
            <path
              d="M300 180 C306 205, 308 220, 300 240 C292 220, 294 205, 300 180 Z"
              stroke={color}
              strokeWidth="1.4"
              fill="none"
              opacity={i % 2 === 0 ? "0.9" : "0.55"}
            />
            {i % 2 === 0 && (
              <polygon points="300,165 303,172 300,179 297,172" fill={color} opacity="0.85" />
            )}
          </g>
        ))}
      </g>

      {/* --- CRISP 5 ASCENDING PANCHAGNI TRIANGLES & SYNTHESIS CORE --- */}
      <polygon points="300,45 525,435 75,435" stroke={color} strokeWidth="2.5" opacity="0.9" />
      <polygon points="300,95 480,410 120,410" stroke={color} strokeWidth="1.8" opacity="0.85" />
      <polygon points="300,150 435,385 165,385" stroke={color} strokeWidth="1.5" opacity="0.8" />
      <polygon points="300,210 390,365 210,365" stroke={color} strokeWidth="1.4" opacity="0.75" />
      <polygon points="300,265 350,350 250,350" stroke={color} strokeWidth="1.2" opacity="0.7" />

      {/* Balancing Downward Ether Triangle */}
      <polygon points="300,525 105,185 495,185" stroke={color} strokeWidth="1.3" opacity="0.55" />

      {/* Central Flame Teardrop Mandala */}
      <path
        d="M300 240 C325 295, 345 325, 345 355 C345 385, 325 405, 300 405 C275 405, 255 385, 255 355 C255 325, 275 295, 300 240 Z"
        stroke={color}
        strokeWidth="2.2"
        fill="none"
        opacity="0.95"
      />
      <circle cx="300" cy="355" r="16" stroke={color} strokeWidth="2.2" />
      <circle cx="300" cy="355" r="7" fill={color} />
      <circle cx="300" cy="355" r="2.5" fill="#FFFFFF" />

      {/* 4 Cardinal Flame Scepters */}
      <line x1="300" y1="15" x2="300" y2="40" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="300" y1="560" x2="300" y2="585" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="15" y1="300" x2="40" y2="300" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="560" y1="300" x2="585" y2="300" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * 6. PRITHVI YANTRA WATERMARK (Prithvi · Grounded Multimodal 32B)
 * Grounded earth: Soft blurred outer Bhupura enclosure & perimeter aura,
 * with crisp 8-petaled foundation lotus, 45° diamond Chaturasra, and 3D coordinate crosshairs.
 */
export function PrithviYantraWatermark({ className = "", size = 600, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* --- SELECTIVELY BLURRED BHUPURA AURA --- */}
      <g style={{ filter: "blur(8px)" }} opacity="0.32">
        <rect x="75" y="75" width="450" height="450" stroke={color} strokeWidth="6" />
      </g>

      <g style={{ filter: "blur(2.2px)" }} opacity="0.75">
        <circle cx="300" cy="300" r="285" stroke={color} strokeWidth="1" strokeDasharray="5 3" opacity="0.45" />
        {/* Outer Bhupura Wall with Gopuram Portals */}
        <path
          d="M60 60 H230 V35 H250 V60 H350 V35 H370 V60 H540 V230 H565 V250 H540 V350 H565 V370 H540 V540 H370 V565 H350 V540 H250 V565 H230 V540 H60 V370 H35 V350 H60 V250 H35 V230 H60 Z"
          stroke={color}
          strokeWidth="2.2"
          fill="none"
          opacity="0.85"
        />
        <rect x="90" y="90" width="420" height="420" rx="4" stroke={color} strokeWidth="1.4" opacity="0.7" />
      </g>

      {/* --- CRISP 8-PETALED LOTUS, ROTATED DIAMOND & 3D AXES --- */}
      {/* 8-Petaled Foundation Lotus */}
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={`padma-${i}`} transform={`rotate(${i * 45} 300 300)`}>
          <path
            d="M300 135 C320 165, 320 200, 300 220 C280 200, 280 165, 300 135 Z"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
            opacity="0.85"
          />
          <circle cx="300" cy="145" r="2" fill={color} />
        </g>
      ))}

      <circle cx="300" cy="300" r="165" stroke={color} strokeWidth="1.5" opacity="0.8" />
      
      {/* 45-Degree Rotated Diamond Foundation (Chaturasra) */}
      <rect x="205" y="205" width="190" height="190" rx="3" stroke={color} strokeWidth="2" transform="rotate(45 300 300)" opacity="0.9" />
      <rect x="245" y="245" width="110" height="110" rx="2" stroke={color} strokeWidth="1.5" opacity="0.8" />

      {/* 3D Spatial Coordinate Crosshairs */}
      <line x1="140" y1="300" x2="460" y2="300" stroke={color} strokeWidth="1.6" strokeDasharray="4 2" opacity="0.75" />
      <line x1="300" y1="140" x2="300" y2="460" stroke={color} strokeWidth="1.6" strokeDasharray="4 2" opacity="0.75" />

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
 * Pure deductive logic: Deeply blurred 28 Nakshatra ring & lunar halo,
 * with crisp waxing lunar crescent, amrita proof drops, and deductive reasoning core.
 */
export function SomaMandalaWatermark({ className = "", size = 600, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* --- SELECTIVELY BLURRED LUNAR HALO & NAKSHATRA PERIMETER --- */}
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
              d="M300 175 C310 195, 310 215, 300 230 C306 215, 306 195, 300 175 Z"
              fill={color}
              opacity="0.7"
            />
          </g>
        ))}
      </g>

      {/* --- CRISP WAXING CHANDRA CRESCENT & FORMAL REASONING CORE --- */}
      <circle cx="300" cy="300" r="195" stroke={color} strokeWidth="1.5" opacity="0.75" />

      {/* Grand Waxing Chandra (Lunar Crescent) of Intellect */}
      <path
        d="M230 100 C360 100, 465 190, 465 305 C465 420, 360 510, 230 510 C325 450, 370 380, 370 305 C370 230, 325 160, 230 100 Z"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        opacity="0.95"
      />

      {/* Amrita Proof Drops */}
      <circle cx="300" cy="190" r="5" fill={color} opacity="0.85" />
      <circle cx="360" cy="240" r="6" fill={color} opacity="0.9" />
      <circle cx="390" cy="305" r="7" fill={color} opacity="0.95" />
      <circle cx="360" cy="370" r="6" fill={color} opacity="0.9" />
      <circle cx="300" cy="420" r="5" fill={color} opacity="0.85" />

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
 * 6 Foundation Models: Soft blurred outer 24 lotus petals & 72 division ticks,
 * with crisp 6 interlocking circles and central coordinating star.
 */
export function TriShaktiWatermark({ className = "", size = 600, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* --- SELECTIVELY BLURRED OUTER LOTUS & HORIZON AURA --- */}
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
              d="M300 185 C312 210, 312 235, 300 245 C288 235, 288 210, 300 185 Z"
              stroke={color}
              strokeWidth="1.3"
              fill="none"
              opacity="0.75"
            />
          </g>
        ))}
      </g>

      {/* --- CRISP 6 INTERLOCKING CIRCLES & COORDINATING STAR --- */}
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

      {/* Connecting Shatkona Mesh & Central Core */}
      <polygon points="300,85 486,395 114,395" stroke={color} strokeWidth="1.6" opacity="0.7" />
      <polygon points="300,515 114,205 486,205" stroke={color} strokeWidth="1.6" opacity="0.7" />
      <circle cx="300" cy="300" r="115" stroke={color} strokeWidth="2" opacity="0.9" />
      <circle cx="300" cy="300" r="28" stroke={color} strokeWidth="2.2" />
      <circle cx="300" cy="300" r="8" fill={color} />
    </svg>
  );
}

/**
 * 9. DHARMA CHAKRA WATERMARK (Manifesto / Enterprise)
 * Selectively blurred outer teeth & rim halo, with crisp 24 precision spokes, hub, and sovereign bindu.
 */
export function DharmaChakraWatermark({ className = "", size = 600, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer Blurred Halo */}
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

      {Array.from({ length: 24 }).map((_, i) => (
        <g key={`spoke-${i}`} transform={`rotate(${i * 15} 300 300)`}>
          <line x1="300" y1="95" x2="300" y2="235" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="300" cy="235" r="3.5" fill={color} opacity="0.9" />
          <circle cx="300" cy="95" r="3" fill={color} opacity="0.9" />
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
 * 1000-petal crown lotus: Soft blurred outer 32 crown petals, with crisp inner tiers and radiance bindu.
 */
export function SahasraraGateWatermark({ className = "", size = 600, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer Crown Halo */}
      <g style={{ filter: "blur(9px)" }} opacity="0.32">
        <circle cx="300" cy="300" r="265" stroke={color} strokeWidth="6" />
      </g>

      <g style={{ filter: "blur(2.6px)" }} opacity="0.75">
        <circle cx="300" cy="300" r="285" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.45" />
        {/* Tier 1: 32 Outer Crown Petals */}
        {Array.from({ length: 32 }).map((_, i) => (
          <g key={`crown-32-${i}`} transform={`rotate(${i * 11.25} 300 300)`}>
            <path
              d="M300 135 C310 170, 312 205, 300 225 C288 205, 290 170, 300 135 Z"
              stroke={color}
              strokeWidth="1.3"
              fill="none"
              opacity="0.7"
            />
          </g>
        ))}
      </g>

      {/* --- CRISP MIDDLE & INNER PETALS --- */}
      <circle cx="300" cy="300" r="195" stroke={color} strokeWidth="1.6" opacity="0.8" />
      {Array.from({ length: 16 }).map((_, i) => (
        <g key={`crown-16-${i}`} transform={`rotate(${i * 22.5} 300 300)`}>
          <path
            d="M300 195 C316 225, 316 250, 300 265 C284 250, 284 225, 300 195 Z"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
            opacity="0.85"
          />
          <circle cx="300" cy="200" r="2" fill={color} />
        </g>
      ))}

      <circle cx="300" cy="300" r="130" stroke={color} strokeWidth="1.8" opacity="0.9" />
      <circle cx="300" cy="300" r="45" stroke={color} strokeWidth="2.2" />
      <circle cx="300" cy="300" r="12" fill={color} />
      <circle cx="300" cy="300" r="4" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * 11. SRI ARCHITECTURE WATERMARK (Developer Tools: IDE, CLI, App, SDK)
 * Authentic Sri Chakra: Soft blurred outer Bhupura and 16-petal lotus, with crisp 9 interlocking triangles.
 */
export function SriArchitectureWatermark({ className = "", size = 600, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer Bhupura Halo */}
      <g style={{ filter: "blur(8px)" }} opacity="0.32">
        <rect x="75" y="75" width="450" height="450" stroke={color} strokeWidth="6" />
      </g>

      <g style={{ filter: "blur(2.4px)" }} opacity="0.75">
        <rect x="50" y="50" width="500" height="500" stroke={color} strokeWidth="1.2" opacity="0.5" />
        <rect x="75" y="75" width="450" height="450" stroke={color} strokeWidth="1.5" opacity="0.7" />
        
        {/* Outer 16-Petal Lotus Band */}
        <circle cx="300" cy="300" r="225" stroke={color} strokeWidth="1.4" opacity="0.75" />
        {Array.from({ length: 16 }).map((_, i) => (
          <g key={`sri-16-${i}`} transform={`rotate(${i * 22.5} 300 300)`}>
            <path
              d="M300 160 C312 185, 312 210, 300 225 C288 210, 288 185, 300 160 Z"
              stroke={color}
              strokeWidth="1.2"
              fill="none"
              opacity="0.7"
            />
          </g>
        ))}
      </g>

      {/* --- CRISP 9 INTERLOCKING NAVAYONI TRIANGLES --- */}
      <circle cx="300" cy="300" r="160" stroke={color} strokeWidth="1.6" opacity="0.85" />
      
      {/* 4 Upward Shiva Triangles */}
      <polygon points="300,140 435,370 165,370" stroke={color} strokeWidth="2" opacity="0.9" />
      <polygon points="300,175 405,395 195,395" stroke={color} strokeWidth="1.6" opacity="0.85" />
      <polygon points="300,210 375,415 225,415" stroke={color} strokeWidth="1.5" opacity="0.8" />
      <polygon points="300,240 345,430 255,430" stroke={color} strokeWidth="1.3" opacity="0.75" />

      {/* 5 Downward Shakti Triangles */}
      <polygon points="300,460 165,230 435,230" stroke={color} strokeWidth="2" opacity="0.9" />
      <polygon points="300,425 195,205 405,205" stroke={color} strokeWidth="1.6" opacity="0.85" />
      <polygon points="300,390 225,185 375,185" stroke={color} strokeWidth="1.5" opacity="0.8" />
      <polygon points="300,360 255,170 345,170" stroke={color} strokeWidth="1.3" opacity="0.75" />

      {/* Central Mahabindu */}
      <circle cx="300" cy="300" r="14" stroke={color} strokeWidth="1.8" />
      <circle cx="300" cy="300" r="6" fill={color} />
      <circle cx="300" cy="300" r="2" fill="#FFFFFF" />
    </svg>
  );
}

export function LotusMandalaWatermark({ className = "", size = 260, color = "currentColor" }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="100" cy="100" r="95" stroke={color} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
      <circle cx="100" cy="100" r="82" stroke={color} strokeWidth="0.8" opacity="0.6" />
      <circle cx="100" cy="100" r="32" stroke={color} strokeWidth="1" />
      <circle cx="100" cy="100" r="6" fill={color} opacity="0.8" />
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
