"use client";

import { FadeIn } from "@/components/FadeIn";
import {
  DrishtiSymbol,
  BuddhiYantraSymbol,
  SrishtiPadmaSymbol,
  SahasraraGateWatermark,
} from "@/components/TraditionalSymbols";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="pt-24 pb-32 md:pt-32 md:pb-36 bg-[#F8FAFE] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-gradient-to-b from-[#2563eb]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8EDF2] text-xs font-heading font-semibold text-[#2563eb] mb-3.5 shadow-2xs">
            <span>✦</span>
            <span>॥ दृष्टि &middot; बुद्धि &middot; सृष्टि ॥ · The Three Pillars of Sovereignty</span>
            <span>✦</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#0F1B2D] tracking-tight">
            Outcomes over complexity
          </h2>
          <p className="font-body text-sm sm:text-base text-[#64748B] mt-3.5 max-w-lg mx-auto leading-relaxed">
            Engineered to replace obscure cloud black boxes with auditable open mathematical rigor.
          </p>
        </div>

        {/* 3 Elite Top-Visual Feature Cards (Inspired by Reference Cards Screenshot 2026-10-25 111309.png) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {/* Card 1: Sovereign Foundation Models (Lavender Theme) */}
          <FadeIn delay={0}>
            <div className="bg-white rounded-[32px] p-4 sm:p-5 border border-[#E8EDF2] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                {/* Visual Banner */}
                <div className="relative h-48 sm:h-52 rounded-[24px] overflow-hidden bg-gradient-to-br from-[#E0E7FF] via-[#EDE9FE] to-[#DDD6FE] flex items-center justify-center p-6 mb-6 group-hover:scale-[1.01] transition-transform duration-500">
                  {/* Subtle traditional watermark ripples */}
                  <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
                    <SahasraraGateWatermark size={260} color="#6366F1" />
                  </div>
                  {/* Glowing 3D Emblem Container */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-white/70 backdrop-blur-md border border-white/90 shadow-lg flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <DrishtiSymbol size={42} color="#4F46E5" />
                  </div>
                </div>

                {/* Content */}
                <div className="px-2">
                  <h3 className="font-heading font-bold text-2xl text-[#0F1B2D] tracking-tight">
                    Sovereign Foundation Models
                  </h3>
                  <p className="font-body text-sm text-[#5A6B7F] mt-2.5 leading-relaxed">
                    Trained from scratch on sovereign mathematical corpora, formal theorem proofs, and 22 scheduled Indian languages with transparent weights.
                  </p>
                </div>
              </div>

              {/* Feature Links List */}
              <div className="mt-8 pt-4 border-t border-[#F1F5F9] space-y-2 px-1">
                {[
                  { label: "Akash 405B Deductive Reasoning", badge: "Flagship" },
                  { label: "Agni 120B Compiler & Code Agent", badge: "Agentic" },
                  { label: "Drishti 70B Analytics Workhorse", badge: "Production" },
                  { label: "Vayu 8B Swift Edge Runtime", badge: "Sub-10ms" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-[#F8FAFE] transition-colors group/row cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
                      <span className="font-body text-sm font-medium text-[#334155] group-hover/row:text-[#4F46E5] transition-colors">
                        {row.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#94A3B8] group-hover/row:text-[#4F46E5] transition-all">
                      <span className="text-[11px] font-sans px-2 py-0.5 rounded-full bg-[#F1F5F9] group-hover/row:bg-[#EEF2FF] text-[#64748B] group-hover/row:text-[#4F46E5]">
                        {row.badge}
                      </span>
                      <span className="group-hover/row:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Autonomous Multi-Agent Swarms (Saffron / Terracotta Theme) */}
          <FadeIn delay={120}>
            <div className="bg-white rounded-[32px] p-4 sm:p-5 border border-[#E8EDF2] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                {/* Visual Banner */}
                <div className="relative h-48 sm:h-52 rounded-[24px] overflow-hidden bg-gradient-to-br from-[#FFEDD5] via-[#FED7AA] to-[#FDBA74] flex items-center justify-center p-6 mb-6 group-hover:scale-[1.01] transition-transform duration-500">
                  <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
                    <SrishtiPadmaSymbol size={260} color="#EA580C" />
                  </div>
                  {/* Glowing 3D Lotus / Padma Container */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-white/70 backdrop-blur-md border border-white/90 shadow-lg flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <BuddhiYantraSymbol size={42} color="#EA580C" />
                  </div>
                </div>

                {/* Content */}
                <div className="px-2">
                  <h3 className="font-heading font-bold text-2xl text-[#0F1B2D] tracking-tight">
                    Multi-Agent Consensus Swarms
                  </h3>
                  <p className="font-body text-sm text-[#5A6B7F] mt-2.5 leading-relaxed">
                    Goal-directed agent swarms that formulate multi-step plans, launch isolated sub-agents, and verify intermediate rationale with mathematical bounds.
                  </p>
                </div>
              </div>

              {/* Feature Links List */}
              <div className="mt-8 pt-4 border-t border-[#F1F5F9] space-y-2 px-1">
                {[
                  { label: "Autonomous Theorem Verification", badge: "Lean 4" },
                  { label: "DAG Multi-Agent Coordination", badge: "Orchestration" },
                  { label: "Formal Zero-Hallucination Guard", badge: "94.2% MATH" },
                  { label: "Enterprise Workflow Execution", badge: "Deterministic" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-[#FFF7ED] transition-colors group/row cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
                      <span className="font-body text-sm font-medium text-[#334155] group-hover/row:text-[#EA580C] transition-colors">
                        {row.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#94A3B8] group-hover/row:text-[#EA580C] transition-all">
                      <span className="text-[11px] font-sans px-2 py-0.5 rounded-full bg-[#F1F5F9] group-hover/row:bg-[#FFEDD5] text-[#64748B] group-hover/row:text-[#EA580C]">
                        {row.badge}
                      </span>
                      <span className="group-hover/row:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Card 3: High-Throughput Serving Runtime (Emerald / Mint Theme) */}
          <FadeIn delay={240}>
            <div className="bg-white rounded-[32px] p-4 sm:p-5 border border-[#E8EDF2] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                {/* Visual Banner */}
                <div className="relative h-48 sm:h-52 rounded-[24px] overflow-hidden bg-gradient-to-br from-[#DCFCE7] via-[#BBF7D0] to-[#86EFAC] flex items-center justify-center p-6 mb-6 group-hover:scale-[1.01] transition-transform duration-500">
                  <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
                    <SahasraraGateWatermark size={260} color="#059669" />
                  </div>
                  {/* Glowing 3D Shield Check Container */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-white/70 backdrop-blur-md border border-white/90 shadow-lg flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <SrishtiPadmaSymbol size={42} color="#059669" />
                  </div>
                </div>

                {/* Content */}
                <div className="px-2">
                  <h3 className="font-heading font-bold text-2xl text-[#0F1B2D] tracking-tight">
                    Sovereign Serving Infrastructure
                  </h3>
                  <p className="font-body text-sm text-[#5A6B7F] mt-2.5 leading-relaxed">
                    A distributed token mesh engineered to serve billion-parameter models at scale with FP8 tensor kernels, zero cloud telemetry, and 100% on-premise execution.
                  </p>
                </div>
              </div>

              {/* Verified Metrics Table (Matches Reference Screenshot 2026-10-25 111309.png right card) */}
              <div className="mt-8 pt-4 border-t border-[#F1F5F9] space-y-4 px-2">
                <div className="flex items-center justify-between pb-3 border-b border-[#F8FAFC]">
                  <span className="font-body text-sm text-[#64748B]">Active Cluster Throughput</span>
                  <span className="font-mono text-base font-bold text-[#0F1B2D]">14.8M tok/s</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#F8FAFC]">
                  <span className="font-body text-sm text-[#64748B]">Median Time to First Token</span>
                  <span className="font-mono text-base font-bold text-[#059669]">&lt; 18ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-body text-sm text-[#64748B]">Sovereign Cluster Uptime SLA</span>
                  <span className="font-mono text-base font-bold text-[#0F1B2D]">99.99%</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
