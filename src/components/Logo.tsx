"use client";

export interface LogoColors {
  bar1: string; // Deep anchor
  bar2: string; // Primary
  bar3: string; // Medium highlight
  bar4: string; // Soft highlight
}

export const LOGO_THEMES: Record<string, LogoColors> = {
  // Default Sky Blue
  overview: {
    bar1: "#1e40af",
    bar2: "#3b82f6",
    bar3: "#60a5fa",
    bar4: "#93c5fd",
  },
  models: {
    bar1: "#1e40af",
    bar2: "#3b82f6",
    bar3: "#60a5fa",
    bar4: "#93c5fd",
  },
  manifesto: {
    bar1: "#1e40af",
    bar2: "#3b82f6",
    bar3: "#60a5fa",
    bar4: "#93c5fd",
  },
  access: {
    bar1: "#1e40af",
    bar2: "#3b82f6",
    bar3: "#60a5fa",
    bar4: "#93c5fd",
  },
  pricing: {
    bar1: "#0369a1",
    bar2: "#0284c7",
    bar3: "#38bdf8",
    bar4: "#bae6fd",
  },
  research: {
    bar1: "#1e40af",
    bar2: "#3b82f6",
    bar3: "#60a5fa",
    bar4: "#bfdbfe",
  },
  docs: {
    bar1: "#0e7490",
    bar2: "#0891b2",
    bar3: "#06b6d4",
    bar4: "#a5f3fc",
  },
  "use-cases": {
    bar1: "#3730a3",
    bar2: "#4f46e5",
    bar3: "#818cf8",
    bar4: "#c7d2fe",
  },

  // Soft Rose-Red for CSky-1 Ultra
  "csky-ultra": {
    bar1: "#9f1239",
    bar2: "#e11d48",
    bar3: "#fb7185",
    bar4: "#fecdd3",
  },

  // Soft Golden Yellow / Amber for CSky-1 Pro
  "csky-pro": {
    bar1: "#b45309",
    bar2: "#d97706",
    bar3: "#f59e0b",
    bar4: "#fde047",
  },

  // Soft Sage / Mint Green for CSky-1 Nano
  "csky-nano": {
    bar1: "#065f46",
    bar2: "#059669",
    bar3: "#10b981",
    bar4: "#6ee7b7",
  },

  // Solar Flame Orange for CSky Agni (120B)
  "csky-agni": {
    bar1: "#9a3412",
    bar2: "#ea580c",
    bar3: "#f97316",
    bar4: "#fed7aa",
  },

  // Terracotta Bronze for CSky Prithvi (32B)
  "csky-prithvi": {
    bar1: "#7c2d12",
    bar2: "#c2410c",
    bar3: "#ea580c",
    bar4: "#ffedd5",
  },

  // Lunar Celestial Indigo for CSky Soma (14B)
  "csky-soma": {
    bar1: "#312e81",
    bar2: "#4f46e5",
    bar3: "#6366f1",
    bar4: "#c7d2fe",
  },

  // Soft Indigo for CSky IDE
  "csky-ide": {
    bar1: "#3730a3",
    bar2: "#6366f1",
    bar3: "#818cf8",
    bar4: "#c7d2fe",
  },

  // Soft Cyan for CSky CLI
  "csky-cli": {
    bar1: "#155e75",
    bar2: "#0284c7",
    bar3: "#06b6d4",
    bar4: "#67e8f9",
  },

  // Soft Sky Blue for CSky App
  "csky-app": {
    bar1: "#1e40af",
    bar2: "#3b82f6",
    bar3: "#60a5fa",
    bar4: "#93c5fd",
  },

  // Soft Violet for CSky Extensions
  "csky-extensions": {
    bar1: "#581c87",
    bar2: "#8b5cf6",
    bar3: "#a855f7",
    bar4: "#d8b4fe",
  },

  // Soft Coral Pink for CSky SDK
  "csky-sdk": {
    bar1: "#881337",
    bar2: "#f43f5e",
    bar3: "#fb7185",
    bar4: "#ffe4e6",
  },
};

interface LogoProps {
  size?: number;
  theme?: string;
  className?: string;
  customColors?: LogoColors;
}

export function Logo({
  size = 40,
  theme = "overview",
  className = "",
  customColors,
}: LogoProps) {
  const colors = customColors || LOGO_THEMES[theme] || LOGO_THEMES.overview;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-colors duration-500 ease-out ${className}`}
    >
      <g data-editor-group="true" transform="matrix(1 0 0 1 250.5 250)">
        {/* Bar 1: Deep Anchor Pillar */}
        <g transform="matrix(1 0 0 1 -63.11698 0.05)">
          <path
            transform="translate(-163.19329, -249.17437)"
            style={{
              fill: colors.bar1,
              stroke: colors.bar1,
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transition: "fill 0.4s ease, stroke 0.4s ease",
            }}
            d="M 174.02726 138.77437 L 104.59329 359.57437 L 152.43066 359.49103 L 221.79329 138.87437 Z"
          />
        </g>

        {/* Bar 2: Primary Vibrant Pillar */}
        <g transform="matrix(1 0 0 1 -4.49011 -0.34167)">
          <path
            transform="translate(-252.73016, -249.89235)"
            style={{
              fill: colors.bar2,
              stroke: colors.bar2,
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transition: "fill 0.4s ease, stroke 0.4s ease",
            }}
            d="M 204.73726 139.78402 L 253.0033 139.78402 L 300.72307 360.00068 L 252.82307 360.00068 Z"
          />
        </g>

        {/* Bar 3: Medium Highlight Block */}
        <g transform="matrix(1 0 0 1.28689 97.71698 32.94971)">
          <path
            transform="translate(-364, -300)"
            style={{
              fill: colors.bar3,
              stroke: colors.bar3,
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transition: "fill 0.4s ease, stroke 0.4s ease",
            }}
            d="M 340 360 L 388 360 L 388 240 L 340 240 Z"
          />
        </g>

        {/* Bar 4: Light Highlight Block */}
        <g transform="matrix(1 0 0 0.4902 97.71698 -85.55038)">
          <path
            transform="translate(-364, -190)"
            style={{
              fill: colors.bar4,
              stroke: colors.bar4,
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transition: "fill 0.4s ease, stroke 0.4s ease",
            }}
            d="M 340 140 L 388 140 L 388 240 L 340 240 Z"
          />
        </g>
      </g>
    </svg>
  );
}
