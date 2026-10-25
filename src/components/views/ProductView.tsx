"use client";

import { useState } from "react";
import { ProductConfig, PRODUCTS_DATA } from "@/data/products";
import { AnimatedBarsBackground } from "@/components/AnimatedBarsBackground";
import { FadeIn } from "@/components/FadeIn";
import { getModelTraditionalSymbol } from "@/components/TraditionalSymbols";
import { ModelArchitectureDiagram } from "@/components/ModelArchitectureDiagram";
import { InteractiveReasoningDemo } from "@/components/InteractiveReasoningDemo";
import { BenchmarkComparisonChart } from "@/components/BenchmarkComparisonChart";
import { PageBackgroundSymbols } from "@/components/PageBackgroundSymbols";

interface ProductViewProps {
  product: ProductConfig;
  onNavigate: (tab: string) => void;
}

function getMetricMeta(label: string) {
  const lower = label.toLowerCase();
  if (lower.includes("sanskrit") || lower.includes("meaning")) {
    return {
      tag: "Heritage Roots",
      subtitle: "Philosophical foundation",
      badge: "Sanskrit",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      ),
    };
  }
  if (lower.includes("param") || lower.includes("size")) {
    return {
      tag: "Model Capacity",
      subtitle: "Dense attention weights",
      badge: "FP8 Ready",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
    };
  }
  if (lower.includes("context") || lower.includes("window") || lower.includes("token")) {
    return {
      tag: "Context Horizon",
      subtitle: "Needle-in-haystack 100%",
      badge: "Tokens",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    };
  }
  if (lower.includes("license") || lower.includes("access")) {
    return {
      tag: "Sovereign Rights",
      subtitle: "Permissive commercial use",
      badge: "Verified",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
    };
  }
  return {
    tag: label.toUpperCase(),
    subtitle: "Enterprise runtime spec",
    badge: "Official",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  };
}

export function ProductView({ product, onNavigate }: ProductViewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Find related products in same category
  const related = Object.values(PRODUCTS_DATA).filter(
    (p) => p.id !== product.id && p.category === product.category
  );

  return (
    <div className="min-h-screen bg-[#F8FAFE] text-[#0F1B2D] relative overflow-hidden">
      {/* Traditional Sacred Geometric Watermarks in Soft Architectural Gray */}
      <PageBackgroundSymbols theme={product.id} />

      {/* 1. DEDICATED FULL-VIEWPORT HERO (Clean, immersive, cards below the fold) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28 pb-20">
        {/* GSAP-Animated Real Flowing Fluted Glass Bars & Ambient Blur Clouds */}
        <AnimatedBarsBackground theme={product.id} />

        {/* Hero Content (Clean & Spacious) */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Traditional Celestial Emblem (For Indian Celestial Model Suite) */}
          {product.category === "model" && (
            <div className="mb-5 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-[#E8EDF2] shadow-2xs">
              {getModelTraditionalSymbol(product.name, 22, product.colorScheme.primary)}
              <span
                className="font-heading font-semibold text-xs tracking-wider"
                style={{ color: product.colorScheme.primary }}
              >
                ॥ {product.name} ॥
              </span>
            </div>
          )}

          {/* Big Bold Headline */}
          <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#0F1B2D] leading-[1.05]">
            {product.name}
          </h1>

          {/* Tagline */}
          <p className="font-body text-lg sm:text-xl md:text-2xl text-[#334155] mt-6 max-w-2xl mx-auto font-medium">
            {product.tagline}
          </p>

          {/* Description */}
          <p className="font-body text-sm sm:text-base md:text-lg text-[#64748B] mt-5 max-w-2xl mx-auto leading-relaxed">
            {product.description}
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => onNavigate("access")}
              className="w-full sm:w-auto inline-flex items-center justify-center text-white font-body font-medium text-base rounded-full px-9 py-4 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              style={{
                background: product.colorScheme.primary,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = product.colorScheme.buttonHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = product.colorScheme.primary;
              }}
            >
              {product.primaryCta.label}
            </button>

            {product.secondaryCta && (
              <button
                onClick={() => onNavigate("access")}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white/80 hover:bg-white text-[#0F1B2D] font-body font-medium text-base rounded-full px-8 py-4 border border-[#E2E8F0] backdrop-blur-md transition-all shadow-xs hover:shadow cursor-pointer"
              >
                {product.secondaryCta.label} →
              </button>
            )}
          </div>
        </div>

        {/* Seamless bottom feather into page */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-[2]"
          style={{
            background: `linear-gradient(to bottom, transparent 0%, ${product.colorScheme.bgWash} 40%, #F8FAFE 100%)`,
          }}
        />
      </section>

      {/* 2. SPECIFICATIONS & METRICS GRID (Located below the fold, only visible on scroll) */}
      <section className="relative z-10 pt-20 pb-20 bg-[#F8FAFE]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-heading font-semibold mb-3.5 shadow-2xs"
              style={{
                backgroundColor: product.colorScheme.light,
                borderColor: `${product.colorScheme.primary}30`,
                color: product.colorScheme.primary,
              }}
            >
              <span>✦</span>
              <span>॥ मानस्तम्भ &middot; विनिर्देश ॥ · Model Specifications</span>
              <span>✦</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#0F1B2D] tracking-tight">
              Engineered for deterministic scale
            </h2>
            <p className="font-body text-xs sm:text-sm text-[#5A6B7F] mt-2.5 max-w-lg mx-auto leading-relaxed">
              Formal computational guarantees and execution parameters verified for enterprise sovereign clusters.
            </p>
          </div>

          {/* 4 Equal-Height Flagship Architectural Metric Bento Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
            {product.metrics.map((m, idx) => {
              const meta = getMetricMeta(m.label);
              const isLongValue = m.value.length > 12;

              return (
                <FadeIn key={m.label} delay={idx * 70} className="h-full">
                  <div className="card-premium group relative overflow-hidden h-full min-h-[220px] p-6 sm:p-7 rounded-[28px] bg-white border border-[#E8EDF2] hover:border-slate-300 flex flex-col justify-between shadow-[0_4px_24px_rgba(15,27,45,0.04)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                    {/* Top Continuous Color Accent Bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-70 group-hover:opacity-100"
                      style={{
                        background: `linear-gradient(90deg, ${product.colorScheme.primary}, ${product.colorScheme.primary}40, transparent)`,
                      }}
                    />

                    {/* Top Corner Ambient Glow */}
                    <div
                      className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                      style={{ background: product.colorScheme.primary }}
                    />

                    {/* Card Top Row: Semantic Icon + Micro Category Tag */}
                    <div className="relative z-10 flex items-center justify-between pb-3.5 border-b border-[#F1F5F9]">
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-2xs"
                        style={{
                          backgroundColor: product.colorScheme.light,
                          color: product.colorScheme.primary,
                        }}
                      >
                        {meta.icon}
                      </div>
                      <span className="font-heading text-[10px] sm:text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">
                        {meta.tag}
                      </span>
                    </div>

                    {/* Card Center: Value with proper responsive font size so words never blow out */}
                    <div className="relative z-10 my-auto py-3 text-center">
                      <div
                        className={`font-heading font-bold tracking-tight text-[#0F1B2D] transition-colors ${
                          isLongValue
                            ? "text-xl sm:text-2xl leading-snug"
                            : "text-2xl sm:text-3xl leading-tight"
                        }`}
                        style={{ color: product.colorScheme.primary }}
                      >
                        {m.value}
                      </div>
                      <div className="font-body text-xs text-[#5A6B7F] font-medium mt-1.5">
                        {m.label}
                      </div>
                    </div>

                    {/* Card Bottom Row: Capability subtitle + verified badge */}
                    <div className="relative z-10 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-body text-[#94A3B8]">
                      <span className="truncate max-w-[130px] sm:max-w-[150px]">{meta.subtitle}</span>
                      <span
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold shrink-0 shadow-2xs"
                        style={{
                          backgroundColor: product.colorScheme.light,
                          color: product.colorScheme.primary,
                        }}
                      >
                        {meta.badge}
                      </span>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quickstart Deployment Card (Inspired by Home Page Interactive Code Showcase) */}
      {product.codeSnippet && (
        <section className="relative z-10 pb-12 bg-[#F8FAFE]">
          <div className="max-w-4xl mx-auto px-6">
            <FadeIn delay={100}>
              <div className="card-premium group relative overflow-hidden bg-white rounded-3xl p-6 sm:p-8 border border-[#E8EDF2] shadow-sm hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div
                  className="absolute -top-16 -right-16 w-44 h-44 rounded-full blur-2xl pointer-events-none opacity-25 group-hover:opacity-50 transition-opacity duration-500"
                  style={{ background: product.colorScheme.primary }}
                />

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: product.colorScheme.primary }} />
                      <span className="font-heading font-bold text-sm text-[#0F1B2D]">
                        Quickstart Initialization
                      </span>
                      <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[#F1F5F9] text-[#64748B]">
                        {product.codeSnippet.language}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 font-semibold">
                      <span>✓ Open Sovereign Weights</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#0F1B2D] p-4 sm:p-5 font-mono text-xs text-white shadow-inner flex items-center justify-between gap-4 overflow-x-auto">
                    <div className="flex items-center gap-3 truncate">
                      <span className="text-[#94A3B8] select-none">$</span>
                      <code className="text-[#E2E8F0] truncate font-medium">
                        {product.codeSnippet.code}
                      </code>
                    </div>

                    <button
                      onClick={() => handleCopy(product.codeSnippet!.code)}
                      className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-all cursor-pointer shrink-0 font-medium active:scale-95 shadow-2xs"
                    >
                      {copied ? "Copied ✓" : "Copy"}
                    </button>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex flex-wrap items-center justify-between gap-3 text-xs font-body text-[#64748B]">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        FP8 / BF16 Verified
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: product.colorScheme.primary }} />
                        Zero Telemetry Leakage
                      </span>
                    </div>
                    <span className="font-heading text-xs font-medium text-[#0F1B2D]">
                      Run locally or deploy to private VPC
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* 3. HIGHLIGHTS & ARCHITECTURE */}
      <section className="py-24 bg-[#F8FAFE]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-xl mx-auto mb-16">
              <span
                className="font-body text-xs font-semibold uppercase tracking-widest"
                style={{ color: product.colorScheme.primary }}
              >
                Deep-Dive
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0F1B2D] mt-3">
                Engineered for verifiable performance
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.highlights.map((h, idx) => (
              <FadeIn key={h.title} delay={idx * 120}>
                <div className="card-premium group relative overflow-hidden h-full bg-white rounded-3xl p-8 border border-[#E8EDF2] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <div
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-20 group-hover:opacity-50 transition-opacity duration-500"
                    style={{ background: product.colorScheme.primary }}
                  />
                  <div className="absolute right-3 -bottom-3 pointer-events-none opacity-[0.04] group-hover:opacity-[0.08] group-hover:scale-105 transition-all duration-500 select-none">
                    {getModelTraditionalSymbol(product.name, 110, product.colorScheme.primary)}
                  </div>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-heading font-bold text-sm mb-6"
                    style={{
                      background: product.colorScheme.light,
                      color: product.colorScheme.primary,
                    }}
                  >
                    0{idx + 1}
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-[#0F1B2D]">
                    {h.title}
                  </h3>
                  <p className="font-body text-sm md:text-base text-[#5A6B7F] mt-3 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* 1. Interactive Model Architecture Visualizer & Diagram */}
          <FadeIn delay={150}>
            <ModelArchitectureDiagram
              modelId={product.id}
              modelName={product.name}
              primaryColor={product.colorScheme.primary}
              lightColor={product.colorScheme.light}
            />
          </FadeIn>

          {/* 2. Live Interactive Reasoning Trace & Multi-Step Deduction Demo */}
          <FadeIn delay={200}>
            <InteractiveReasoningDemo
              modelName={product.name}
              primaryColor={product.colorScheme.primary}
            />
          </FadeIn>

          {/* 3. Rigorous Benchmark Performance Evaluation (For Models) */}
          {product.category === "model" && (
            <FadeIn delay={250}>
              <BenchmarkComparisonChart
                modelName={product.name}
                primaryColor={product.colorScheme.primary}
              />
            </FadeIn>
          )}
        </div>
      </section>

      {/* 4. SWITCHER: RELATED PRODUCTS */}
      {related.length > 0 && (
        <section className="py-24 bg-[#F8FAFE]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
              <div>
                <h3 className="font-heading font-bold text-2xl text-[#0F1B2D]">
                  Explore other {product.category === "model" ? "models" : "tools"}
                </h3>
                <p className="font-body text-sm text-[#5A6B7F] mt-1">
                  Discover the full CSky open ecosystem
                </p>
              </div>
              <button
                onClick={() => onNavigate("models")}
                className="font-body text-sm font-semibold text-[#3b82f6] hover:underline cursor-pointer"
              >
                View all models & tools →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.slice(0, 2).map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="text-left p-8 rounded-3xl bg-white border border-[#E8EDF2] hover:border-[#3b82f6]/40 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group cursor-pointer relative overflow-hidden"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#F8FAFE] border border-[#E8EDF2] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      {getModelTraditionalSymbol(item.name, 28, item.colorScheme.primary)}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-heading font-bold text-2xl text-[#0F1B2D] group-hover:text-[#3b82f6] transition-colors">
                          {item.name}
                        </span>
                        <span
                          className="font-heading text-xs font-semibold px-3 py-1 rounded-full bg-[#F8FAFE] border border-[#E8EDF2]"
                          style={{ color: item.colorScheme.primary }}
                        >
                          {item.badge}
                        </span>
                      </div>
                      <p className="font-body text-xs sm:text-sm text-[#64748B] mt-2 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
