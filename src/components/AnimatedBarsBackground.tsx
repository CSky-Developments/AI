"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ThemeBackgroundWatermark } from "./TraditionalSymbols";

export interface BarThemeColors {
  deep: string;
  mid: string;
  light: string;
  wash: string;
  orb1: string;
  orb2: string;
  orb3: string;
  symbolColor: string;
}

export const BARS_THEMES: Record<string, BarThemeColors> = {
  // Main Hero / Overview (Soft Tranquil Sky Blue - Low Contrast Pastel)
  overview: {
    deep: "#2563eb",
    mid: "#60a5fa",
    light: "#bfdbfe",
    wash: "#F8FAFE",
    orb1: "rgba(96, 165, 250, 0.22)",
    orb2: "rgba(191, 219, 254, 0.28)",
    orb3: "rgba(37, 99, 235, 0.10)",
    symbolColor: "#2563eb",
  },
  models: {
    deep: "#2563eb",
    mid: "#60a5fa",
    light: "#bfdbfe",
    wash: "#F8FAFE",
    orb1: "rgba(96, 165, 250, 0.20)",
    orb2: "rgba(191, 219, 254, 0.26)",
    orb3: "rgba(37, 99, 235, 0.10)",
    symbolColor: "#2563eb",
  },
  manifesto: {
    deep: "#4f46e5",
    mid: "#818cf8",
    light: "#c7d2fe",
    wash: "#F6F7FE",
    orb1: "rgba(129, 140, 248, 0.20)",
    orb2: "rgba(199, 210, 254, 0.26)",
    orb3: "rgba(79, 70, 229, 0.10)",
    symbolColor: "#4f46e5",
  },
  access: {
    deep: "#0284c7",
    mid: "#38bdf8",
    light: "#bae6fd",
    wash: "#F0F9FF",
    orb1: "rgba(56, 189, 248, 0.20)",
    orb2: "rgba(186, 230, 253, 0.26)",
    orb3: "rgba(2, 132, 199, 0.10)",
    symbolColor: "#0284c7",
  },
  pricing: {
    deep: "#0284c7",
    mid: "#38bdf8",
    light: "#bae6fd",
    wash: "#F0F9FF",
    orb1: "rgba(56, 189, 248, 0.20)",
    orb2: "rgba(186, 230, 253, 0.26)",
    orb3: "rgba(2, 132, 199, 0.10)",
    symbolColor: "#0284c7",
  },
  research: {
    deep: "#2563eb",
    mid: "#60a5fa",
    light: "#bfdbfe",
    wash: "#F8FAFE",
    orb1: "rgba(96, 165, 250, 0.20)",
    orb2: "rgba(191, 219, 254, 0.26)",
    orb3: "rgba(37, 99, 235, 0.10)",
    symbolColor: "#2563eb",
  },
  docs: {
    deep: "#0891b2",
    mid: "#06b6d4",
    light: "#a5f3fc",
    wash: "#F0FDFF",
    orb1: "rgba(6, 182, 212, 0.20)",
    orb2: "rgba(165, 243, 252, 0.26)",
    orb3: "rgba(8, 145, 178, 0.10)",
    symbolColor: "#0891b2",
  },
  "use-cases": {
    deep: "#4f46e5",
    mid: "#818cf8",
    light: "#c7d2fe",
    wash: "#F6F7FE",
    orb1: "rgba(129, 140, 248, 0.20)",
    orb2: "rgba(199, 210, 254, 0.26)",
    orb3: "rgba(79, 70, 229, 0.10)",
    symbolColor: "#4f46e5",
  },

  // Akash 405B (Soft Calm Rose / Blush Pastel Red)
  "csky-ultra": {
    deep: "#be185d",
    mid: "#e11d48",
    light: "#fecdd3",
    wash: "#FFF5F6",
    orb1: "rgba(244, 114, 182, 0.22)",
    orb2: "rgba(254, 205, 211, 0.30)",
    orb3: "rgba(190, 24, 93, 0.10)",
    symbolColor: "#be185d",
  },

  // Drishti 70B (Soft Golden Honey / Warm Sand Pastel Amber)
  "csky-pro": {
    deep: "#b45309",
    mid: "#d97706",
    light: "#fef3c7",
    wash: "#FFFDF5",
    orb1: "rgba(251, 191, 36, 0.22)",
    orb2: "rgba(254, 243, 199, 0.32)",
    orb3: "rgba(180, 83, 9, 0.10)",
    symbolColor: "#b45309",
  },

  // Vayu 8B (Soft Sage Mint / Calm Herbal Pastel Green)
  "csky-nano": {
    deep: "#047857",
    mid: "#10b981",
    light: "#d1fae5",
    wash: "#F4FDF8",
    orb1: "rgba(52, 211, 153, 0.22)",
    orb2: "rgba(209, 250, 229, 0.30)",
    orb3: "rgba(4, 120, 87, 0.10)",
    symbolColor: "#047857",
  },

  // Agni 120B (Vibrant Solar Flame Orange)
  "csky-agni": {
    deep: "#c2410c",
    mid: "#ea580c",
    light: "#ffedd5",
    wash: "#FFF7ED",
    orb1: "rgba(234, 88, 12, 0.22)",
    orb2: "rgba(255, 237, 213, 0.32)",
    orb3: "rgba(194, 65, 12, 0.10)",
    symbolColor: "#c2410c",
  },

  // Prithvi 32B (Warm Terracotta / Bronze Earth)
  "csky-prithvi": {
    deep: "#9a3412",
    mid: "#c2410c",
    light: "#ffedd5",
    wash: "#FFFBF7",
    orb1: "rgba(194, 65, 12, 0.22)",
    orb2: "rgba(255, 237, 213, 0.30)",
    orb3: "rgba(154, 52, 18, 0.10)",
    symbolColor: "#9a3412",
  },

  // Soma 14B (Celestial Lunar Indigo)
  "csky-soma": {
    deep: "#3730a3",
    mid: "#4f46e5",
    light: "#eef2ff",
    wash: "#F8F9FF",
    orb1: "rgba(79, 70, 229, 0.22)",
    orb2: "rgba(238, 242, 255, 0.30)",
    orb3: "rgba(55, 48, 163, 0.10)",
    symbolColor: "#3730a3",
  },

  // CSky IDE (Soft Pastel Indigo)
  "csky-ide": {
    deep: "#4338ca",
    mid: "#6366f1",
    light: "#c7d2fe",
    wash: "#F5F6FF",
    orb1: "rgba(99, 102, 241, 0.20)",
    orb2: "rgba(199, 210, 254, 0.26)",
    orb3: "rgba(67, 56, 202, 0.10)",
    symbolColor: "#4338ca",
  },

  // CSky CLI (Soft Pastel Cyan)
  "csky-cli": {
    deep: "#0891b2",
    mid: "#06b6d4",
    light: "#a5f3fc",
    wash: "#F0FDFF",
    orb1: "rgba(6, 182, 212, 0.20)",
    orb2: "rgba(165, 243, 252, 0.26)",
    orb3: "rgba(8, 145, 178, 0.10)",
    symbolColor: "#0891b2",
  },

  // CSky App (Soft Royal Sky)
  "csky-app": {
    deep: "#2563eb",
    mid: "#3b82f6",
    light: "#bfdbfe",
    wash: "#F4F8FF",
    orb1: "rgba(59, 130, 246, 0.20)",
    orb2: "rgba(191, 219, 254, 0.26)",
    orb3: "rgba(37, 99, 235, 0.10)",
    symbolColor: "#2563eb",
  },

  // CSky Extensions (Soft Pastel Violet)
  "csky-extensions": {
    deep: "#6d28d9",
    mid: "#8b5cf6",
    light: "#ddd6fe",
    wash: "#FAF7FF",
    orb1: "rgba(139, 92, 246, 0.20)",
    orb2: "rgba(221, 214, 254, 0.26)",
    orb3: "rgba(109, 40, 217, 0.10)",
    symbolColor: "#6d28d9",
  },

  // CSky SDK (Soft Pastel Coral)
  "csky-sdk": {
    deep: "#be185d",
    mid: "#f43f5e",
    light: "#fecdd3",
    wash: "#FFF5F7",
    orb1: "rgba(244, 63, 94, 0.20)",
    orb2: "rgba(254, 205, 211, 0.26)",
    orb3: "rgba(190, 24, 93, 0.10)",
    symbolColor: "#be185d",
  },
};

// Aliases
BARS_THEMES["akash"] = BARS_THEMES["csky-ultra"];
BARS_THEMES["drishti"] = BARS_THEMES["csky-pro"];
BARS_THEMES["vayu"] = BARS_THEMES["csky-nano"];
BARS_THEMES["ultra"] = BARS_THEMES["csky-ultra"];
BARS_THEMES["pro"] = BARS_THEMES["csky-pro"];
BARS_THEMES["nano"] = BARS_THEMES["csky-nano"];
BARS_THEMES["ide"] = BARS_THEMES["csky-ide"];
BARS_THEMES["cli"] = BARS_THEMES["csky-cli"];
BARS_THEMES["app"] = BARS_THEMES["csky-app"];
BARS_THEMES["extensions"] = BARS_THEMES["csky-extensions"];
BARS_THEMES["sdk"] = BARS_THEMES["csky-sdk"];

interface AnimatedBarsBackgroundProps {
  theme?: string;
  className?: string;
}

export function AnimatedBarsBackground({
  theme = "overview",
  className = "",
}: AnimatedBarsBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  const colors = BARS_THEMES[theme] || BARS_THEMES.overview;

  // 1. Slow, Meditative Ambient Orbs Floating
  useEffect(() => {
    const o1 = orb1Ref.current;
    const o2 = orb2Ref.current;
    const o3 = orb3Ref.current;
    if (!o1 || !o2 || !o3) return;

    // Slow, serene 24-30 second floating drift
    const tween1 = gsap.to(o1, {
      x: "15vw",
      y: "6vh",
      scale: 1.15,
      rotation: 30,
      duration: 24,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const tween2 = gsap.to(o2, {
      x: "-18vw",
      y: "-10vh",
      scale: 1.2,
      rotation: -45,
      duration: 28,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const tween3 = gsap.to(o3, {
      y: "8vh",
      scaleX: 1.25,
      scaleY: 1.1,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    return () => {
      tween1.kill();
      tween2.kill();
      tween3.kill();
    };
  }, []);

  // 2. Slow, Serene Sacred Watermark Rotation (180 seconds full cycle)
  useEffect(() => {
    const wm = watermarkRef.current;
    if (!wm) return;

    const wmTween = gsap.to(wm, {
      rotation: 360,
      duration: 180,
      repeat: -1,
      ease: "none",
    });

    return () => {
      wmTween.kill();
    };
  }, []);

  // 3. GSAP Canvas Fluted Waves Animation with Fluted Bar Blur & Unique Variations
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      if (!canvas || !container) return;
      const rect = container.getBoundingClientRect();
      width = Math.max(300, rect.width);
      height = Math.max(300, rect.height);
      dpr = Math.min(2, window.devicePixelRatio || 1);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const waveState = {
      time: 0,
      pulse: 1.0,
      sheen: 0,
    };

    const isVayu = theme.includes("nano") || theme.includes("vayu");
    const isAkash = theme.includes("ultra") || theme.includes("akash");
    const isDrishti = theme.includes("pro") || theme.includes("drishti");
    const isDevTool = theme.includes("ide") || theme.includes("cli");

    // Very slow, calm, relaxing wave flow speed (220s - 320s per full cycle)
    const flowDuration = isVayu ? 180 : isAkash ? 320 : 260;

    const flowTween = gsap.to(waveState, {
      time: "+=1000",
      duration: flowDuration,
      repeat: -1,
      ease: "none",
    });

    // Slow, serene breathing cycle (12 seconds)
    const pulseTween = gsap.to(waveState, {
      pulse: 1.18,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Slow, gentle specular sheen (18 seconds)
    const sheenTween = gsap.to(waveState, {
      sheen: 1,
      duration: 18,
      repeat: -1,
      ease: "power2.inOut",
    });

    const hexToRgb = (hex: string) => {
      const cleaned = hex.replace("#", "");
      const num = parseInt(cleaned, 16);
      return {
        r: (num >> 16) & 255,
        g: (num >> 8) & 255,
        b: num & 255,
      };
    };

    const cDeep = hexToRgb(colors.deep);
    const cMid = hexToRgb(colors.mid);
    const cLight = hexToRgb(colors.light);
    const cWash = hexToRgb(colors.wash);

    const render = () => {
      if (!ctx || width <= 0 || height <= 0) return;

      ctx.clearRect(0, 0, width, height);

      const t = waveState.time;
      // Per-theme distinct fluted bar geometry
      const barWidth = isVayu ? 5 : isAkash ? 10 : 7;
      const barGap = isVayu ? 4 : 3;
      const step = barWidth + barGap;
      const count = Math.ceil(width / step) + 2;

      for (let i = 0; i < count; i++) {
        const x = i * step;
        const normX = x / width;

        let combined = 0;
        let barHeight = height * 0.70;

        if (isAkash) {
          // 1. AKASH VARIATION: Majestic Cosmic Standing Harmonics (Ether Pillars)
          // Dual counter-phase waves create rhythmic breathing pillar crests
          const wave1 = Math.cos(normX * Math.PI * 2.2) * Math.sin(t * 0.45);
          const wave2 = Math.sin(normX * 3.2 + t * 0.3) * 0.35;
          const wave3 = Math.cos(normX * 6.0 - t * 0.25) * 0.2;
          combined = (wave1 + wave2 + wave3) / 1.55;
          barHeight =
            height * 0.76 +
            Math.sin(normX * 2.0 + t * 0.3) * (height * 0.16) * waveState.pulse;
        } else if (isDrishti) {
          // 2. DRISHTI VARIATION: Converging Optical Focal Beam (Prismatic Eye)
          // Waves concentrate and focus into a sharp central optical axis
          const distFromCenter = Math.abs(normX - 0.5);
          const focusFactor = Math.exp(-distFromCenter * 3.6);
          const wave1 = Math.sin(normX * 4.2 + t * 0.6) * (1 - focusFactor * 0.3);
          const wave2 = Math.cos(t * 0.7) * focusFactor * 0.75;
          combined = (wave1 + wave2) / 1.35;
          barHeight =
            height * 0.68 + focusFactor * (height * 0.26) * waveState.pulse;
        } else if (isVayu) {
          // 3. VAYU VARIATION: Dynamic Fluttering Wind Reeds (Kinetic Breeze)
          // Slender, high-frequency alternating reed ribbons fluttering in the air
          const wave1 = Math.sin(normX * 6.5 + t * 1.1);
          const wave2 = Math.cos(normX * 11.0 - t * 0.8) * 0.3;
          const wave3 = Math.sin(normX * 2.8 + t * 0.5) * 0.35;
          combined = (wave1 + wave2 + wave3) / 1.65;
          barHeight =
            height * 0.68 +
            Math.sin(normX * 4.5 + t * 0.9) * (height * 0.15) * waveState.pulse;
        } else if (isDevTool) {
          // 4. CSky IDE / CLI VARIATION: Quantum Stepped Matrix Equalizer
          const stepX = Math.floor(normX * 24) / 24;
          const wave1 = Math.sin(stepX * 5.5 + t * 0.8);
          const wave2 = Math.cos(stepX * 10.0 - t * 1.0) * 0.35;
          combined = (wave1 + wave2) / 1.35;
          barHeight =
            height * 0.66 +
            Math.abs(Math.sin(stepX * 6.0 + t * 0.7)) * (height * 0.18);
        } else {
          // 5. OVERVIEW / DEFAULT: Classic Sweeping Silky Ocean Waves
          const wave1 = Math.sin(normX * 3.2 + t * 0.5);
          const wave2 = Math.cos(normX * 1.8 - t * 0.35);
          const wave3 = Math.sin(normX * 5.0 + t * 0.7) * 0.25;
          combined = (wave1 + wave2 + wave3) / 2.25;
          barHeight =
            height * 0.72 +
            Math.sin(normX * 2.2 + t * 0.4) * (height * 0.14) * waveState.pulse;
        }

        const centerY = height * 0.52 + combined * (height * 0.18);
        const topY = centerY - barHeight * 0.5;
        const bottomY = centerY + barHeight * 0.5;

        // Gentle, soft intensity (low-contrast calm pastel)
        const intensity = Math.min(
          1,
          Math.max(0, (combined + 1) * 0.5 * waveState.pulse)
        );

        const grad = ctx.createLinearGradient(x, topY, x, bottomY);
        grad.addColorStop(0, `rgba(${cWash.r}, ${cWash.g}, ${cWash.b}, 0.05)`);
        grad.addColorStop(
          0.2,
          `rgba(${cLight.r}, ${cLight.g}, ${cLight.b}, ${0.28 * intensity})`
        );
        grad.addColorStop(
          0.5,
          `rgba(${cMid.r}, ${cMid.g}, ${cMid.b}, ${0.55 * intensity})`
        );
        grad.addColorStop(
          0.72,
          `rgba(${cDeep.r}, ${cDeep.g}, ${cDeep.b}, ${0.48 * intensity})`
        );
        grad.addColorStop(
          0.85,
          `rgba(${cLight.r}, ${cLight.g}, ${cLight.b}, ${0.25 * intensity})`
        );
        grad.addColorStop(1, `rgba(${cWash.r}, ${cWash.g}, ${cWash.b}, 0.05)`);

        ctx.fillStyle = grad;
        ctx.fillRect(x, topY, barWidth, barHeight);
      }

      // Soft, tranquil specular sheen sweep (subtle glint)
      const sweepX = waveState.sheen * (width * 1.6) - width * 0.3;
      const sweepGrad = ctx.createRadialGradient(
        sweepX,
        height * 0.5,
        20,
        sweepX,
        height * 0.5,
        width * 0.4
      );
      sweepGrad.addColorStop(0, "rgba(255, 255, 255, 0.28)");
      sweepGrad.addColorStop(0.5, "rgba(255, 255, 255, 0.08)");
      sweepGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = sweepGrad;
      ctx.fillRect(0, 0, width, height);
    };

    gsap.ticker.add(render);

    return () => {
      window.removeEventListener("resize", resize);
      flowTween.kill();
      pulseTween.kill();
      sheenTween.kill();
      gsap.ticker.remove(render);
    };
  }, [theme, colors]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 z-0 overflow-hidden pointer-events-none select-none transition-colors duration-500 ${className}`}
      style={{ backgroundColor: colors.wash }}
    >
      {/* 1. LAYER 1: SOFT CALM AMBIENT BLUR ORBS (Deep atmospheric drift) */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={orb1Ref}
          className="absolute -top-[15%] left-[10%] w-[52vw] h-[52vw] max-w-[650px] max-h-[650px] rounded-full blur-[90px] md:blur-[120px] transition-colors duration-500 will-change-transform"
          style={{ background: colors.orb1 }}
        />
        <div
          ref={orb2Ref}
          className="absolute top-[20%] -right-[10%] w-[48vw] h-[48vw] max-w-[600px] max-h-[600px] rounded-full blur-[85px] md:blur-[115px] transition-colors duration-500 will-change-transform"
          style={{ background: colors.orb2 }}
        />
        <div
          ref={orb3Ref}
          className="absolute -bottom-[20%] left-[18%] w-[60vw] h-[35vw] max-w-[800px] max-h-[450px] rounded-full blur-[95px] md:blur-[130px] transition-colors duration-500 will-change-transform"
          style={{ background: colors.orb3 }}
        />
      </div>

      {/* 2. LAYER 2: FLUTED GLASS BARS CANVAS WITH SOFT BLUR (Distinct, visible fluted ribs) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full filter blur-[3.5px] md:blur-[4.5px]"
        style={{ willChange: "transform" }}
      />

      {/* 3. LAYER 3: DEDICATED SACRED GEOMETRY WATERMARK (Depth-of-Field: Soft blurred ambient aura + crisp focal geometry) */}
      <div
        ref={watermarkRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transform scale-110 md:scale-130 transition-colors duration-500 will-change-transform"
      >
        {/* Soft Dreamy Ambient Halo (Heavily blurred under-layer, creating glowing aura) */}
        <div className="absolute inset-0 flex items-center justify-center filter blur-[12px] md:blur-[18px] opacity-[0.35]">
          <ThemeBackgroundWatermark theme={theme} color={colors.symbolColor} size={640} />
        </div>

        {/* Medium Optical Dispersion Layer (Frosted glass diffusion on outer details) */}
        <div className="absolute inset-0 flex items-center justify-center filter blur-[4px] md:blur-[6px] opacity-[0.25]">
          <ThemeBackgroundWatermark theme={theme} color={colors.symbolColor} size={640} />
        </div>

        {/* Precision Core Layer (Razor-sharp central sacred geometry, with outer edge blur dispersion) */}
        <div
          className="relative flex items-center justify-center filter blur-[0.3px] opacity-[0.28] md:opacity-[0.32]"
          style={{
            maskImage: "radial-gradient(circle at 50% 50%, black 30%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.2) 80%, transparent 95%)",
            WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 30%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.2) 80%, transparent 95%)",
          }}
        >
          <ThemeBackgroundWatermark theme={theme} color={colors.symbolColor} size={640} />
        </div>
      </div>

      {/* 4. CORNER CELESTIAL WATERMARK ACCENTS (Subtle traditional markings) */}
      <div
        className="absolute top-8 left-8 text-xs font-heading font-medium tracking-widest pointer-events-none opacity-[0.28] select-none filter blur-[0.4px]"
        style={{ color: colors.symbolColor }}
      >
        ✦ ॥ आकाश &middot; अग्नि ॥ ✦
      </div>
      <div
        className="absolute top-8 right-8 text-xs font-heading font-medium tracking-widest pointer-events-none opacity-[0.28] select-none filter blur-[0.4px]"
        style={{ color: colors.symbolColor }}
      >
        ✦ ॥ दृष्टि &middot; सोम ॥ ✦
      </div>
      <div
        className="absolute bottom-8 left-8 text-xs font-heading font-medium tracking-widest pointer-events-none opacity-[0.28] select-none filter blur-[0.4px]"
        style={{ color: colors.symbolColor }}
      >
        ✦ ॥ पृथ्वी &middot; वायु ॥ ✦
      </div>
      <div
        className="absolute bottom-8 right-8 text-xs font-heading font-medium tracking-widest pointer-events-none opacity-[0.28] select-none filter blur-[0.4px]"
        style={{ color: colors.symbolColor }}
      >
        ✦ ॥ अनंत शक्ति ॥ ✦
      </div>

      {/* 5. SOFT READABILITY VIGNETTE (Gentle edges that blend into page wash) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.05) 65%, ${colors.wash} 100%)`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.20) 0%, transparent 40%, transparent 75%, ${colors.wash} 100%)`,
        }}
      />
    </div>
  );
}
