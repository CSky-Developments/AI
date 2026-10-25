"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedBarsBackground } from "@/components/AnimatedBarsBackground";
import {
  getModelTraditionalSymbol,
  AkashSymbol,
  AgniSymbol,
  DrishtiSymbol,
  PrithviSymbol,
  SomaSymbol,
  VayuSymbol,
} from "@/components/TraditionalSymbols";
import { BenchmarkComparisonChart } from "@/components/BenchmarkComparisonChart";
import { PageBackgroundSymbols } from "@/components/PageBackgroundSymbols";

interface ModelsViewProps {
  onGetAccess: () => void;
  onNavigate?: (tab: string) => void;
}

export function ModelsView({ onGetAccess, onNavigate }: ModelsViewProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeCliModel, setActiveCliModel] = useState<string>("akash");

  const flagshipModels = [
    {
      id: "ultra",
      name: "Akash",
      sanskrit: "आकाश · The Infinite Sky",
      tag: "Flagship 405B",
      params: "405B Parameters",
      context: "200k Context Window",
      license: "Open Research License",
      description:
        "Akash represents the boundless celestial ether. Built for scientific deduction, complex formal reasoning, and multi-step theorem verification across massive token sequences.",
      weights: "Available in FP8 & 4-bit GGUF",
      hfCommand: "huggingface-cli download csky/akash-405b",
      accentColor: "#0284C7",
      lightBg: "#F0F9FF",
      bannerGradient: "from-[#0284C7] via-[#0EA5E9] to-[#38BDF8]",
      chips: ["200k RoPE Attention", "FP8 Sparsified Cache", "Lean 4 Verifier"],
      symbol: <AkashSymbol size={54} color="#FFFFFF" />,
    },
    {
      id: "agni",
      name: "Agni",
      sanskrit: "अग्नि · The Cosmic Fire",
      tag: "Code & Agentic 120B",
      params: "120B Parameters",
      context: "256k Context Window",
      license: "Apache 2.0 Permissive",
      description:
        "Agni channels the transformative flame of pure logic. Specifically trained for high-velocity algorithmic code synthesis, compiler verification, and multi-agent coordination with zero hallucination.",
      weights: "Available in FP8 & BF16",
      hfCommand: "huggingface-cli download csky/agni-120b",
      accentColor: "#EA580C",
      lightBg: "#FFF7ED",
      bannerGradient: "from-[#EA580C] via-[#F97316] to-[#FB923C]",
      chips: ["AST Formal Grammar", "140 tok/sec Streaming", "Multi-Agent Mesh"],
      symbol: <AgniSymbol size={54} color="#FFFFFF" />,
    },
    {
      id: "pro",
      name: "Drishti",
      sanskrit: "दृष्टि · Clear Vision",
      tag: "Workhorse 70B",
      params: "70B Parameters",
      context: "128k Context Window",
      license: "Apache 2.0 Permissive",
      description:
        "Drishti embodies unclouded insight and precision sight. The production sweet spot of speed, cost, and analytical depth for enterprise workflows and mission-critical workloads.",
      weights: "Available in BF16 & 8-bit quantized",
      hfCommand: "ollama run csky/drishti:70b",
      accentColor: "#2563EB",
      lightBg: "#EFF6FF",
      bannerGradient: "from-[#1D4ED8] via-[#2563EB] to-[#60A5FA]",
      chips: ["Sub-30ms Latency", "Apache 2.0 Freedom", "Air-Gapped Sovereign"],
      symbol: <DrishtiSymbol size={54} color="#FFFFFF" />,
    },
  ];

  const specializedModels = [
    {
      id: "prithvi",
      name: "Prithvi",
      sanskrit: "पृथ्वी · Grounded Earth",
      badge: "Multimodal 32B",
      desc: "Native 4K document attention, architectural blueprint ingestion, and 3D spatial geometry.",
      accent: "#059669",
      bgLight: "#ECFDF5",
      pills: ["4K Blueprints", "Spatial Pointclouds", "Direct PDF Ingest", "Zero Downsampling"],
      symbol: <PrithviSymbol size={28} color="#059669" />,
      hfCommand: "ollama run csky/prithvi:32b",
    },
    {
      id: "soma",
      name: "Soma",
      sanskrit: "सोम · Celestial Nectar",
      badge: "Formal Math 14B",
      desc: "Distilled exclusively for formal mathematical proofs, Lean 4 theorem synthesis, and Olympiad derivations.",
      accent: "#7C3AED",
      bgLight: "#F5F3FF",
      pills: ["94.2% MATH-500", "Lean 4 Synthesis", "Automated Lemmas", "Bitwise Verifiable"],
      symbol: <SomaSymbol size={28} color="#7C3AED" />,
      hfCommand: "ollama run csky/soma:14b",
    },
    {
      id: "nano",
      name: "Vayu",
      sanskrit: "वायु · Swift Wind",
      badge: "Edge 8B",
      desc: "Ultra-compact, blazing fast, and designed to run locally on laptops, drones, and edge ARM64 modules.",
      accent: "#0891B2",
      bgLight: "#ECFEFF",
      pills: ["5-Watt Envelope", "ARM64 Native", "Sub-80ms Cold Start", "100% Offline"],
      symbol: <VayuSymbol size={28} color="#0891B2" />,
      hfCommand: "curl -fsSL csky.ai/get-vayu.sh | sh",
    },
  ];

  const papers = [
    {
      category: "Architecture",
      date: "October 2026",
      title: "Clarity-Driven Attention: Reducing Computational Overhead in Long Sequences",
      abstract:
        "We demonstrate an attention formulation that sparsifies redundant token activations, sustaining 200k context windows with 38% less compute.",
    },
    {
      category: "Safety & Transparency",
      date: "September 2026",
      title: "Constitutional Auditing for Open-Weight Models",
      abstract:
        "How transparent weights enable independent verification of safety bounds and alignment without proprietary gates.",
    },
    {
      category: "Reasoning",
      date: "August 2026",
      title: "Verifiable Step-by-Step Rationale in Small Language Models",
      abstract:
        "Training 8B parameter models to produce faithful chain-of-thought traces that humans can review in under 30 seconds.",
    },
  ];

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const cliSnippets: Record<string, { cmd: string; desc: string }> = {
    akash: {
      cmd: "huggingface-cli download csky/akash-405b --local-dir ./akash-weights",
      desc: "Download full 405B FP8 research checkpoint for 4x H100 clusters",
    },
    agni: {
      cmd: "vllm serve csky/agni-120b --tensor-parallel-size 2 --enforce-eager",
      desc: "Launch Agni 120B code reasoning server with drop-in OpenAI API compatibility",
    },
    drishti: {
      cmd: "ollama run csky/drishti:70b",
      desc: "Run production 70B model with instant terminal streaming in seconds",
    },
    prithvi: {
      cmd: "ollama run csky/prithvi:32b --keepalive 24h",
      desc: "Load 32B grounded spatial multimodal model for high-resolution document parsing",
    },
    soma: {
      cmd: "ollama run csky/soma:14b-q8",
      desc: "Spin up formal Lean 4 theorem synthesis engine on local Mac or desktop GPU",
    },
    vayu: {
      cmd: "curl -fsSL csky.ai/get-vayu.sh | sh",
      desc: "Install lightweight 8B edge engine directly onto Ubuntu, macOS, or embedded ARM",
    },
  };

  return (
    <div className="bg-[#F8FAFE] min-h-screen relative overflow-hidden text-[#0F1B2D]">
      {/* Universal Page Background Sacred Geometry in Gray */}
      <PageBackgroundSymbols theme="models" />

      {/* 1. GSAP-ANIMATED FLOWING BARS HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28 pb-20">
        <AnimatedBarsBackground theme="models" />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-md border border-[#E2E8F0] shadow-xs mb-6 text-xs font-heading font-medium text-[#2563eb]">
            <span>✦</span>
            <span>॥ षट्शक्ति मण्डल ॥ · The Six Open Celestial Models</span>
            <span>✦</span>
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-[#0F1B2D] leading-[1.08]">
            Intelligence you can inspect, run, and own.
          </h1>

          <p className="font-body text-lg sm:text-xl text-[#334155] mt-5 max-w-2xl mx-auto leading-relaxed">
            We release open weights because progress happens fastest in the open. No walled gardens, no proprietary choke points.
          </p>
        </div>
      </section>

      {/* 2. TOP-VISUAL FEATURED FLAGSHIP CARDS (Directly inspired by Reference Screenshot 2026-10-25 111309.png) */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <FadeIn>
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8EDF2] text-xs font-heading font-semibold text-[#2563eb] mb-3 shadow-2xs">
              <span>✦</span>
              <span>Primary Foundation Models</span>
              <span>✦</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#0F1B2D] tracking-tight">
              Frontier scale for mission-critical workloads
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {flagshipModels.map((m, idx) => (
            <FadeIn key={m.id} delay={idx * 120}>
              <div className="card-premium group relative overflow-hidden rounded-[32px] bg-white border border-[#E8EDF2] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] h-full flex flex-col justify-between">
                <div>
                  {/* Top 40% Visual Canvas with Vibrant Pastel/Gradient Texture & 3D Relief Emblem */}
                  <div
                    className={`relative h-44 sm:h-52 w-full bg-gradient-to-br ${m.bannerGradient} p-6 flex items-center justify-center overflow-hidden`}
                  >
                    {/* Concentric Ambient Rings in Banner */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-25">
                      <div className="w-56 h-56 rounded-full border border-white/50 animate-pulse" />
                      <div className="absolute w-40 h-40 rounded-full border border-white/40" />
                    </div>

                    {/* Central 3D Sacred Emblem */}
                    <div className="relative z-10 w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      {m.symbol}
                    </div>

                    {/* Top Right Floating Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-heading font-bold text-[#0F1B2D] shadow-xs">
                      {m.tag}
                    </div>
                  </div>

                  {/* Lower Content Section */}
                  <div className="p-7 sm:p-8">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading font-bold text-2xl text-[#0F1B2D]">
                        {m.name}
                      </h3>
                      <span className="font-mono text-xs font-semibold text-[#64748B]">
                        {m.params}
                      </span>
                    </div>

                    <div
                      className="font-body text-xs font-semibold mt-1 tracking-wide"
                      style={{ color: m.accentColor }}
                    >
                      {m.sanskrit}
                    </div>

                    <p className="font-body text-sm text-[#5A6B7F] mt-3.5 leading-relaxed">
                      {m.description}
                    </p>

                    {/* Capability Chips */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {m.chips.map((chip) => (
                        <span
                          key={chip}
                          className="px-2.5 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] font-body font-medium text-[#475569]"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>

                    {/* Instant Pull Snippet Pill */}
                    <div className="mt-5 flex items-center gap-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3 py-2">
                      <span className="font-mono text-xs text-[#94A3B8] select-none">$</span>
                      <code className="font-mono text-[11px] text-[#0F1B2D] flex-1 truncate">
                        {m.hfCommand}
                      </code>
                      <button
                        onClick={() => handleCopy(m.id, m.hfCommand)}
                        className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-white border border-[#CBD5E1] text-[#334155] hover:text-[#0F1B2D] shadow-2xs transition-all cursor-pointer shrink-0 font-medium active:scale-95"
                      >
                        {copiedId === m.id ? "✓" : "Copy"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-7 sm:p-8 pt-0 flex items-center justify-between gap-3 border-t border-[#F1F5F9] mt-4">
                  {onNavigate && (
                    <button
                      onClick={() => onNavigate(`csky-${m.id}`)}
                      className="text-xs font-heading font-semibold text-[#0F1B2D] hover:text-[#2563eb] flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Deep-dive specs</span>
                      <span>→</span>
                    </button>
                  )}
                  <button
                    data-magnetic
                    onClick={onGetAccess}
                    className="text-white font-heading font-medium text-xs rounded-full px-5 py-2 transition-all shadow-xs hover:shadow-md cursor-pointer"
                    style={{ backgroundColor: m.accentColor }}
                  >
                    Get weights
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 3. SPECIALIZED FOUNDATION MODELS BENTO SHOWCASE (Inspired by Reference Screenshot 111614.png) */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <FadeIn>
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-8">
            <div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#0F1B2D]">
                Specialized architectural engines
              </h3>
              <p className="font-body text-sm text-[#64748B] mt-1">
                Domain-optimized models trained with formal mathematical invariants
              </p>
            </div>
            <span className="font-mono text-xs text-[#2563eb] mt-2 sm:mt-0 font-semibold">
              ● 100% Permissive Open Weights
            </span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {specializedModels.map((sm, idx) => (
            <FadeIn key={sm.id} delay={idx * 120}>
              <div className="card-premium group relative overflow-hidden rounded-[32px] bg-white p-7 border border-[#E8EDF2] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] h-[380px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform"
                      style={{
                        backgroundColor: sm.bgLight,
                        borderColor: `${sm.accent}30`,
                      }}
                    >
                      {sm.symbol}
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-heading font-semibold border shadow-2xs"
                      style={{
                        backgroundColor: sm.bgLight,
                        color: sm.accent,
                        borderColor: `${sm.accent}30`,
                      }}
                    >
                      {sm.badge}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-xl text-[#0F1B2D]">
                    {sm.name}
                  </h4>
                  <div className="font-body text-xs font-semibold text-[#64748B] mt-0.5">
                    {sm.sanskrit}
                  </div>
                  <p className="font-body text-xs sm:text-sm text-[#5A6B7F] mt-2.5 leading-relaxed">
                    {sm.desc}
                  </p>
                </div>

                {/* Scalloped Hill with Floating Pills (From Reference Bento Screenshot 111614.png) */}
                <div
                  className="relative rounded-2xl p-4 overflow-hidden flex flex-wrap gap-2 items-center justify-center border"
                  style={{
                    backgroundColor: `${sm.bgLight}90`,
                    borderColor: `${sm.accent}25`,
                  }}
                >
                  {sm.pills.map((pill) => (
                    <span
                      key={pill}
                      className="px-2.5 py-1 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs font-body text-[11px] font-semibold text-[#0F1B2D]"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between text-xs">
                  {onNavigate && (
                    <button
                      onClick={() => onNavigate(`csky-${sm.id}`)}
                      className="font-heading font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                      style={{ color: sm.accent }}
                    >
                      <span>Explore specs</span>
                      <span>→</span>
                    </button>
                  )}
                  <button
                    onClick={() => handleCopy(sm.id, sm.hfCommand)}
                    className="font-mono text-[11px] text-[#64748B] hover:text-[#0F1B2D] cursor-pointer"
                  >
                    {copiedId === sm.id ? "✓ Copied" : "$ Pull command"}
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE CLI QUICKSTART & MATRIX (Inspired by Reference Screenshot 2026-10-25 111339.png) */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Terminal Box */}
          <div className="lg:col-span-6">
            <FadeIn>
              <div className="card-premium group relative overflow-hidden bg-white rounded-[32px] p-6 sm:p-8 border border-[#E8EDF2] shadow-sm hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#0F1B2D] tracking-tight">
                  Deploy foundation weights <br />
                  in a single command
                </h3>

                {/* Model Tab Selectors */}
                <div className="mt-6 flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0]">
                  {Object.keys(cliSnippets).map((mKey) => (
                    <button
                      key={mKey}
                      onClick={() => setActiveCliModel(mKey)}
                      className={`px-3 py-1 rounded-lg text-xs font-heading font-semibold capitalize transition-all cursor-pointer ${
                        activeCliModel === mKey
                          ? "bg-white text-[#2563eb] shadow-xs"
                          : "text-[#64748B] hover:text-[#0F1B2D]"
                      }`}
                    >
                      {mKey}
                    </button>
                  ))}
                </div>

                {/* Dark Terminal Box */}
                <div className="mt-4 rounded-2xl bg-[#0F1B2D] overflow-hidden shadow-inner">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#17253D] border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span className="ml-2 font-mono text-[11px] text-[#94A3B8]">
                        csky-{activeCliModel}-quickstart
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopy("terminal", cliSnippets[activeCliModel].cmd)}
                      className="font-mono text-[11px] text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
                    >
                      {copiedId === "terminal" ? "✓ Copied" : "Copy"}
                    </button>
                  </div>

                  <div className="p-5 font-mono text-xs sm:text-sm text-[#E2E8F0] overflow-x-auto leading-relaxed">
                    <div className="text-emerald-400 select-none">$</div>
                    <code className="text-[#93C5FD] break-all">
                      {cliSnippets[activeCliModel].cmd}
                    </code>
                    <div className="mt-3 text-[11px] text-[#94A3B8] border-t border-white/10 pt-2">
                      # {cliSnippets[activeCliModel].desc}
                    </div>
                  </div>
                </div>

                <button
                  onClick={onGetAccess}
                  className="mt-6 w-full py-3.5 rounded-full bg-[#0F1B2D] hover:bg-black text-white font-body font-medium text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  Request Model Checkpoint Access Keys →
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: 2x2 Capabilities Matrix (From Reference Screenshot 111339.png) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FadeIn delay={80}>
                <div className="card-premium bg-white rounded-[28px] p-6 border border-[#E8EDF2] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#DDD6FE]/60 via-[#EDE9FE]/30 to-transparent rounded-bl-full pointer-events-none" />
                  <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-4">
                    <AkashSymbol size={22} color="#4F46E5" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-[#0F1B2D]">
                    FP8 Native Cache
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                    Pre-quantized FP8 weights reduce KV-cache memory by 38% with zero precision degradation.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={140}>
                <div className="card-premium bg-white rounded-[28px] p-6 border border-[#E8EDF2] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FED7AA]/60 via-[#FFEDD5]/30 to-transparent rounded-bl-full pointer-events-none" />
                  <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] flex items-center justify-center mb-4">
                    <AgniSymbol size={22} color="#EA580C" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-[#0F1B2D]">
                    Lean 4 Formal Proofs
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                    Automated theorem prover pipeline verifies each mathematical lemma before commit.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="card-premium bg-white rounded-[28px] p-6 border border-[#E8EDF2] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#BBF7D0]/60 via-[#DCFCE7]/30 to-transparent rounded-bl-full pointer-events-none" />
                  <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] flex items-center justify-center mb-4">
                    <PrithviSymbol size={22} color="#059669" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-[#0F1B2D]">
                    22 Indic Languages
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                    Native multilingual semantics without English pivots, maintaining cultural idioms and legal nuance.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={260}>
                <div className="card-premium bg-white rounded-[28px] p-6 border border-[#E8EDF2] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#BAE6FD]/60 via-[#E0F2FE]/30 to-transparent rounded-bl-full pointer-events-none" />
                  <div className="w-10 h-10 rounded-xl bg-[#F0F9FF] flex items-center justify-center mb-4">
                    <DrishtiSymbol size={22} color="#0284C7" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-[#0F1B2D]">
                    Air-Gapped Sovereign
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                    Weights run 100% locally on commodity hardware or isolated VPCs with zero external telemetry.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Bottom 3 Mini SDK Integration Pills (Reference 111339.png) */}
            <FadeIn delay={320}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="card-premium bg-white rounded-2xl p-4 border border-[#E8EDF2] text-left hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="font-heading font-bold text-sm text-[#0F1B2D]">vLLM Native</div>
                  <p className="font-body text-xs text-[#64748B] mt-1 leading-snug">
                    Drop-in server compatible with vLLM PagedAttention
                  </p>
                </div>

                <div className="card-premium bg-white rounded-2xl p-4 border border-[#E8EDF2] text-left hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="font-heading font-bold text-sm text-[#0F1B2D]">Ollama GGUF</div>
                  <p className="font-body text-xs text-[#64748B] mt-1 leading-snug">
                    Quantized 4-bit and 8-bit weights for local laptops
                  </p>
                </div>

                <div className="card-premium bg-white rounded-2xl p-4 border border-[#E8EDF2] text-left hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="font-heading font-bold text-sm text-[#0F1B2D]">OpenAI Drop-In</div>
                  <p className="font-body text-xs text-[#64748B] mt-1 leading-snug">
                    Compatible with OpenAI Python & TS SDK clients
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. FRONTIER BENCHMARK COMPARISON CHART */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <FadeIn delay={150}>
          <BenchmarkComparisonChart
            modelName="Akash (405B)"
            primaryColor="#2563eb"
          />
        </FadeIn>
      </section>

      {/* 6. PEER-REVIEWED RESEARCH PUBLICATIONS */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <FadeIn>
          <div className="flex flex-col sm:flex-row items-center justify-between mb-14 gap-4">
            <div>
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-[#3b82f6]">
                Publications & Preprints
              </span>
              <h2 className="font-heading font-bold text-3xl text-[#0F1B2D] mt-2">
                Peer-Reviewed Research
              </h2>
            </div>
            {onNavigate && (
              <button
                onClick={() => onNavigate("research")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#E2E8F0] text-xs font-heading font-semibold text-[#2563eb] hover:bg-[#F8FAFE] transition-all shadow-xs cursor-pointer"
              >
                <span>Browse Full Research Archive (6 Papers)</span>
                <span>→</span>
              </button>
            )}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {papers.map((paper, idx) => (
            <FadeIn key={paper.title} delay={idx * 120}>
              <div className="card-premium group relative overflow-hidden h-full bg-white rounded-3xl p-8 border border-[#E8EDF2] shadow-sm flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-blue-500/10 blur-xl pointer-events-none group-hover:opacity-100 opacity-40 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between text-xs font-body text-[#8A95A5]">
                    <span className="font-heading font-semibold text-[#2563eb] uppercase tracking-wider text-[11px] px-2.5 py-0.5 rounded-full bg-[#EFF6FF] border border-blue-100">
                      {paper.category}
                    </span>
                    <span>{paper.date}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#0F1B2D] mt-4 leading-snug group-hover:text-[#2563eb] transition-colors duration-300">
                    {paper.title}
                  </h3>
                  <p className="font-body text-sm text-[#5A6B7F] mt-3 leading-relaxed">
                    {paper.abstract}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#F1F5F9] relative z-10">
                  <button
                    onClick={() => onNavigate ? onNavigate("research") : onGetAccess()}
                    className="font-heading text-xs font-semibold text-[#2563eb] group-hover:text-[#1e40af] flex items-center gap-1.5 cursor-pointer transition-all duration-300 group-hover:translate-x-1"
                  >
                    <span>Read full paper & BibTeX citation</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
