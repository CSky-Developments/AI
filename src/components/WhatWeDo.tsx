"use client";

import { FadeIn } from "@/components/FadeIn";
import {
  DrishtiSymbol,
  BuddhiYantraSymbol,
  SrishtiPadmaSymbol,
} from "@/components/TraditionalSymbols";

export function WhatWeDo() {
  const items = [
    {
      num: "01",
      title: "See what matters",
      sanskrit: "दृष्टि · Clear Perception",
      description: "Cut through noise and surface the critical signals that drive your next strategic move.",
      icon: <DrishtiSymbol size={28} color="#2563eb" />,
      accentColor: "#2563eb",
      lightBg: "#EFF6FF",
      chips: ["200k Context Auditing", "Semantic Manifold Search", "Zero Hallucination"],
      metric: "38% Faster Signal Extraction",
    },
    {
      num: "02",
      title: "Decide with confidence",
      sanskrit: "बुद्धि · Sound Judgment",
      description: "Get clear recommendations backed by auditable evidence and mathematical rationale, never guesswork.",
      icon: <BuddhiYantraSymbol size={28} color="#D97706" />,
      accentColor: "#D97706",
      lightBg: "#FEF3C7",
      chips: ["Lean 4 Formal Proofs", "Chain-of-Thought Auditing", "Reproducible Bounds"],
      metric: "94.2% MATH-500 Verified",
    },
    {
      num: "03",
      title: "Build what's next",
      sanskrit: "सृष्टि · Open Creation",
      description: "Turn shared understanding into real momentum with open-weight tools that fit into your team's rhythm.",
      icon: <SrishtiPadmaSymbol size={28} color="#059669" />,
      accentColor: "#059669",
      lightBg: "#D1FAE5",
      chips: ["Single-GPU vLLM Deploy", "Apache 2.0 Freedom", "Air-Gapped Sovereign"],
      metric: "100% On-Premise Execution",
    },
  ];

  return (
    <section id="what-we-do" className="pt-24 pb-32 md:pt-32 md:pb-36 bg-[#F8FAFE] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-gradient-to-b from-[#2563eb]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8EDF2] text-xs font-heading font-semibold text-[#2563eb] mb-3.5 shadow-2xs">
            <span>✦</span>
            <span>॥ दृष्टि &middot; बुद्धि &middot; सृष्टि ॥ · The Three Pillars</span>
            <span>✦</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#0F1B2D] tracking-tight">
            Outcomes over complexity
          </h2>
          <p className="font-body text-sm sm:text-base text-[#64748B] mt-4 max-w-md mx-auto leading-relaxed">
            Engineered to replace obscure cloud black boxes with auditable open mathematical rigor.
          </p>
        </div>

        {/* 3 Pillars Cards (Restored Original Layout with Smooth Premium Hover Curves) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 items-stretch">
          {items.map((item, index) => (
            <FadeIn key={item.title} delay={index * 120} className="h-full">
              <div className="card-premium h-full bg-white rounded-3xl p-8 sm:p-9 flex flex-col justify-between group relative overflow-hidden border border-[#E8EDF2] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                {/* Subtle top corner gradient bloom contained safely */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl z-0">
                  <div
                    className="absolute -top-12 -right-12 w-36 h-36 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"
                    style={{ background: item.accentColor }}
                  />
                </div>

                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-center justify-between">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xs transition-transform duration-300 group-hover:scale-105"
                      style={{ background: item.lightBg }}
                    >
                      {item.icon}
                    </div>
                    <span className="font-mono text-xs font-bold text-[#94A3B8]">
                      {item.num}
                    </span>
                  </div>

                  <div
                    className="text-xs font-heading font-semibold mt-6 tracking-wide"
                    style={{ color: item.accentColor }}
                  >
                    {item.sanskrit}
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold mt-1.5 text-[#0F1B2D]">
                    {item.title}
                  </h3>

                  <p className="font-body text-[#5A6B7F] mt-3 leading-relaxed text-sm md:text-base flex-1">
                    {item.description}
                  </p>

                  {/* Capability Chips */}
                  <div className="flex flex-wrap gap-1.5 mt-6">
                    {item.chips.map((chip) => (
                      <span
                        key={chip}
                        className="px-2.5 py-1 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] font-body text-[#475569] transition-colors group-hover:border-[#CBD5E1]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Metric Pill */}
                <div className="mt-8 pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-heading font-medium relative z-10">
                  <span className="text-[#64748B]">Impact Guarantee</span>
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold"
                    style={{ background: item.lightBg, color: item.accentColor }}
                  >
                    {item.metric}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
