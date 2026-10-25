"use client";

import { useState } from "react";
import { ProductConfig, PRODUCTS_DATA } from "@/data/products";
import { AnimatedBarsBackground } from "@/components/AnimatedBarsBackground";
import { FadeIn } from "@/components/FadeIn";
import { getModelTraditionalSymbol, ThemeBackgroundWatermark } from "@/components/TraditionalSymbols";
import { ModelArchitectureDiagram } from "@/components/ModelArchitectureDiagram";
import { InteractiveReasoningDemo } from "@/components/InteractiveReasoningDemo";
import { BenchmarkComparisonChart } from "@/components/BenchmarkComparisonChart";

interface ProductViewProps {
  product: ProductConfig;
  onNavigate: (tab: string) => void;
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
    <div className="min-h-screen bg-[#F8FAFE] text-[#0F1B2D]">
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

      {/* 2. SPECIFICATIONS & METRICS GRID (Big traditional plinth card with carved niche cards) */}
      <section className="relative z-10 pt-16 pb-20 bg-[#F8FAFE]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            {/* The Big Traditional Plinth Card with Gradient & Sacred Motifs */}
            <div
              className="relative rounded-3xl md:rounded-[36px] p-7 sm:p-11 border shadow-lg overflow-hidden transition-all"
              style={{
                background: `linear-gradient(145deg, #FFFFFF 0%, ${product.colorScheme.bgWash} 50%, #FFFFFF 100%)`,
                borderColor: `${product.colorScheme.light}90`,
                boxShadow: `0 10px 30px -10px rgba(15, 27, 45, 0.06), 0 0 0 1px ${product.colorScheme.light}40`,
              }}
            >
              {/* Subtle Central Traditional Watermark inside the Big Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.035] select-none">
                <ThemeBackgroundWatermark theme={product.id} color={product.colorScheme.primary} size={480} />
              </div>

              {/* Traditional Stepped Chaturasra Corner Brackets */}
              <svg className="absolute top-4 left-4 w-6 h-6 pointer-events-none opacity-40" viewBox="0 0 24 24" fill="none" stroke={product.colorScheme.primary} strokeWidth="1.8">
                <path d="M 0 18 V 4 C 0 1.79 1.79 0 4 0 H 18 M 0 8 H 8 V 0" />
              </svg>
              <svg className="absolute top-4 right-4 w-6 h-6 pointer-events-none opacity-40" viewBox="0 0 24 24" fill="none" stroke={product.colorScheme.primary} strokeWidth="1.8">
                <path d="M 24 18 V 4 C 24 1.79 22.21 0 20 0 H 6 M 24 8 H 16 V 0" />
              </svg>
              <svg className="absolute bottom-4 left-4 w-6 h-6 pointer-events-none opacity-40" viewBox="0 0 24 24" fill="none" stroke={product.colorScheme.primary} strokeWidth="1.8">
                <path d="M 0 6 V 20 C 0 22.21 1.79 24 4 24 H 18 M 0 16 H 8 V 24" />
              </svg>
              <svg className="absolute bottom-4 right-4 w-6 h-6 pointer-events-none opacity-40" viewBox="0 0 24 24" fill="none" stroke={product.colorScheme.primary} strokeWidth="1.8">
                <path d="M 24 6 V 20 C 24 22.21 22.21 24 20 24 H 6 M 24 16 H 16 V 24" />
              </svg>

              {/* Big Card Header Pill */}
              <div className="relative z-10 text-center mb-9">
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border shadow-2xs text-xs font-heading font-semibold"
                  style={{
                    borderColor: `${product.colorScheme.light}`,
                    color: product.colorScheme.primary,
                  }}
                >
                  <span>✦</span>
                  <span>॥ मानदण्ड पीठ ॥ · Verified Specifications & Metrics</span>
                  <span>✦</span>
                </div>
              </div>

              {/* 4 Carved-Out Niche Cards with Torana Arch Crest & Page Scheme Gradient */}
              <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {product.metrics.map((m, idx) => (
                  <div
                    key={m.label}
                    className="card-premium relative pt-6 pb-6 px-4 sm:px-6 rounded-2xl md:rounded-3xl text-center transition-all duration-300 group hover:-translate-y-1"
                    style={{
                      background: `linear-gradient(165deg, #FFFFFF 0%, ${product.colorScheme.light}25 55%, ${product.colorScheme.bgWash} 100%)`,
                      border: `1px solid ${product.colorScheme.light}90`,
                      boxShadow: `0 4px 16px -2px rgba(15, 27, 45, 0.05), inset 0 2px 4px 0 rgba(255, 255, 255, 0.95), inset 0 -3px 8px 0 ${product.colorScheme.light}25`,
                    }}
                  >
                    {/* Carved Torana Arch Crown Header */}
                    <svg viewBox="0 0 120 20" className="w-20 h-3.5 mx-auto mb-3" fill="none">
                      <path
                        d="M 0 18 C 15 18, 25 10, 38 6 C 48 2, 56 0, 60 0 C 64 0, 72 2, 82 6 C 95 10, 105 18, 120 18"
                        stroke={product.colorScheme.primary}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        opacity="0.55"
                      />
                      <circle cx="60" cy="1" r="2" fill={product.colorScheme.primary} opacity="0.8" />
                    </svg>

                    {/* Metric Value */}
                    <div
                      className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight"
                      style={{ color: product.colorScheme.primary }}
                    >
                      {m.value}
                    </div>

                    {/* Metric Label */}
                    <div className="font-body text-xs sm:text-sm text-[#475569] mt-2 font-medium">
                      {m.label}
                    </div>

                    {/* Traditional Stepped Pedestal Base */}
                    <div className="mt-4 flex items-center justify-center gap-1.5 opacity-35 group-hover:opacity-60 transition-opacity">
                      <div className="w-5 h-0.5 rounded-full" style={{ background: product.colorScheme.primary }} />
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: product.colorScheme.primary }} />
                      <div className="w-5 h-0.5 rounded-full" style={{ background: product.colorScheme.primary }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

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
                <div className="card-premium h-full bg-white rounded-3xl p-8 border border-[#E8EDF2] shadow-sm hover:shadow-xl transition-all">
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

      {/* 4. SWITCHER: RELATED PRODUCTS (Divider removed) */}
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
                  className="text-left p-8 rounded-3xl bg-white border border-[#E8EDF2] hover:border-[#3b82f6]/40 hover:shadow-lg transition-all duration-300 group cursor-pointer relative overflow-hidden"
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
