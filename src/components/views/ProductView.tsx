"use client";

import { useState } from "react";
import { ProductConfig, PRODUCTS_DATA } from "@/data/products";
import { AnimatedBarsBackground } from "@/components/AnimatedBarsBackground";
import { FadeIn } from "@/components/FadeIn";
import { getModelTraditionalSymbol } from "@/components/TraditionalSymbols";
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

      {/* 2. SPECIFICATIONS & METRICS GRID (Located below the fold, only visible on scroll) */}
      <section className="relative z-10 pt-20 pb-20 bg-[#F8FAFE]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {product.metrics.map((m, idx) => (
              <FadeIn key={m.label} delay={idx * 80}>
                <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E8EDF2] text-center shadow-sm hover:shadow-md transition-all duration-300">
                  <div
                    className="font-heading font-bold text-3xl md:text-4xl tracking-tight"
                    style={{ color: product.colorScheme.primary }}
                  >
                    {m.value}
                  </div>
                  <div className="font-body text-xs sm:text-sm text-[#5A6B7F] mt-2 font-medium">
                    {m.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
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
                <div className="h-full bg-white rounded-3xl p-8 border border-[#E8EDF2] shadow-sm hover:shadow-md transition-shadow">
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
