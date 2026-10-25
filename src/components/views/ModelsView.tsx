"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedBarsBackground } from "@/components/AnimatedBarsBackground";
import { getModelTraditionalSymbol } from "@/components/TraditionalSymbols";
import { BenchmarkComparisonChart } from "@/components/BenchmarkComparisonChart";

interface ModelsViewProps {
  onGetAccess: () => void;
  onNavigate?: (tab: string) => void;
}

export function ModelsView({ onGetAccess, onNavigate }: ModelsViewProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const models = [
    {
      id: "ultra",
      name: "Akash",
      sanskrit: "आकाश",
      meaning: "The Infinite Sky",
      tag: "Flagship 405B",
      params: "405B Parameters",
      context: "200k Context Window",
      license: "Open Research License",
      description:
        "Akash represents the boundless celestial ether. Built for scientific deduction, complex formal reasoning, and multi-step theorem verification.",
      weights: "Available in FP8 & 4-bit GGUF",
      hfCommand: "huggingface-cli download csky/akash-405b",
    },
    {
      id: "agni",
      name: "Agni",
      sanskrit: "अग्नि",
      meaning: "The Cosmic Fire",
      tag: "Code & Agentic 120B",
      params: "120B Parameters",
      context: "256k Context Window",
      license: "Apache 2.0 Permissive",
      description:
        "Agni channels the sacred transformative flame. Specifically trained for high-velocity algorithmic code synthesis, compiler verification, and multi-agent coordination with zero hallucination.",
      weights: "Available in FP8 & BF16",
      hfCommand: "huggingface-cli download csky/agni-120b",
    },
    {
      id: "pro",
      name: "Drishti",
      sanskrit: "दृष्टि",
      meaning: "Clear Vision",
      tag: "Workhorse 70B",
      params: "70B Parameters",
      context: "128k Context Window",
      license: "Apache 2.0 Permissive",
      description:
        "Drishti embodies focused sight and unclouded insight. The sweet spot of speed, cost, and analytical depth for production workloads.",
      weights: "Available in BF16 & 8-bit quantized",
      hfCommand: "ollama run csky/drishti:70b",
    },
    {
      id: "prithvi",
      name: "Prithvi",
      sanskrit: "पृथ्वी",
      meaning: "The Grounded Earth",
      tag: "Grounded Multimodal 32B",
      params: "32B Parameters",
      context: "128k Context Window",
      license: "Apache 2.0 Permissive",
      description:
        "Prithvi represents the steadfast physical earth. A grounded multimodal foundation model capable of processing high-resolution visual documents, architectural blueprints, and 3D spatial geometry.",
      weights: "Available in Q4_K_M & FP8",
      hfCommand: "ollama run csky/prithvi:32b",
    },
    {
      id: "soma",
      name: "Soma",
      sanskrit: "सोम",
      meaning: "Celestial Nectar",
      tag: "Formal Math & Logic 14B",
      params: "14B Parameters",
      context: "64k Context Window",
      license: "Apache 2.0 Permissive",
      description:
        "Soma embodies the celestial nectar of concentrated intellect. Distilled exclusively for formal mathematical proofs, Lean 4 theorem synthesis, and Olympiad-level deductive derivations.",
      weights: "Available in BF16 & Q8 GGUF",
      hfCommand: "ollama run csky/soma:14b",
    },
    {
      id: "nano",
      name: "Vayu",
      sanskrit: "वायु",
      meaning: "Swift Wind",
      tag: "Edge 8B",
      params: "8B Parameters",
      context: "32k Context Window",
      license: "Apache 2.0 Permissive",
      description:
        "Vayu signifies the vital breath and swift wind. Ultra-compact, blazing fast, and designed to run locally on laptops and edge devices.",
      weights: "Available in Q4_K_M GGUF & BF16",
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

  return (
    <div className="bg-[#F8FAFE] min-h-screen">
      {/* 1. GSAP-ANIMATED FLOWING BARS HERO (Full viewport, cards below the fold) */}
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

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Model Cards */}
        <div className="mt-16 space-y-8">
          {models.map((model, idx) => (
            <FadeIn key={model.id} delay={idx * 100}>
              <div className="card-premium bg-white rounded-3xl p-8 md:p-10 border border-[#E8EDF2] shadow-sm hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#F8FAFE] border border-[#E8EDF2] flex items-center justify-center shrink-0 shadow-2xs">
                      {getModelTraditionalSymbol(model.name, 28)}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-heading font-bold text-2xl md:text-3xl text-[#0F1B2D]">
                          {model.name}
                        </span>
                        <span className="font-body text-sm text-[#64748B] font-normal">
                          ({model.sanskrit} &middot; {model.meaning})
                        </span>
                        <span className="font-body text-xs font-medium px-3 py-1 rounded-full bg-[#E8F0FE] text-[#3b82f6]">
                          {model.tag}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 mt-2 text-xs md:text-sm font-body text-[#5A6B7F]">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                          {model.params}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                          {model.context}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5A6B7F]" />
                          {model.license}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-start md:self-auto">
                    {onNavigate && (
                      <button
                        onClick={() => onNavigate(`csky-${model.id}`)}
                        className="bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F1B2D] font-heading font-semibold text-xs sm:text-sm rounded-full px-5 py-2.5 transition-all cursor-pointer"
                      >
                        Model specs & deep-dive →
                      </button>
                    )}
                    <button
                      onClick={onGetAccess}
                      className="bg-[#3b82f6] text-white font-heading font-medium text-xs sm:text-sm rounded-full px-5 py-2.5 hover:bg-[#1e40af] transition-all cursor-pointer shadow-sm hover:shadow"
                    >
                      Get weights
                    </button>
                  </div>
                </div>

                <p className="font-body text-[#5A6B7F] text-base mt-6 leading-relaxed max-w-3xl">
                  {model.description}
                </p>

                {/* Instant Pull Snippet Pill */}
                <div className="mt-5 flex items-center gap-2 bg-[#F1F5F9] border border-[#E2E8F0] rounded-xl px-3.5 py-2 max-w-xl">
                  <span className="font-mono text-xs text-[#64748B] select-none">$</span>
                  <code className="font-mono text-xs text-[#0F1B2D] flex-1 truncate">
                    {model.hfCommand}
                  </code>
                  <button
                    onClick={() => handleCopy(model.id, model.hfCommand)}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white border border-[#CBD5E1] text-[#334155] hover:text-[#2563eb] transition-all cursor-pointer shrink-0"
                  >
                    {copiedId === model.id ? "Copied ✓" : "Copy"}
                  </button>
                </div>

                {/* Model Capabilities & Production Ready Badge Bar */}
                <div className="mt-6 pt-4 flex flex-wrap items-center justify-between gap-4 bg-[#F8FAFE] rounded-2xl p-4 border border-[#E8EDF2]/60">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-body text-[#475569]">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      FP8 / BF16 Verified
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                      vLLM & Ollama Native
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      200k RoPE Attention
                    </span>
                  </div>

                  {onNavigate && (
                    <button
                      onClick={() => onNavigate(`csky-${model.id}`)}
                      className="text-xs font-heading font-semibold text-[#2563eb] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      View Architecture Diagram & Demo →
                    </button>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Frontier Benchmark Evaluation Chart */}
        <FadeIn delay={150}>
          <BenchmarkComparisonChart
            modelName="Akash (405B)"
            primaryColor="#2563eb"
          />
        </FadeIn>

        {/* Research Publications */}
        <div className="mt-28">
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
                <div className="card-premium h-full bg-white rounded-2xl p-8 border border-[#E8EDF2] shadow-sm flex flex-col justify-between hover:shadow-lg transition-all">
                  <div>
                    <div className="flex items-center justify-between text-xs font-body text-[#8A95A5]">
                      <span className="font-semibold text-[#3b82f6] uppercase tracking-wider">
                        {paper.category}
                      </span>
                      <span>{paper.date}</span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-[#0F1B2D] mt-4 leading-snug">
                      {paper.title}
                    </h3>
                    <p className="font-body text-sm text-[#5A6B7F] mt-3 leading-relaxed">
                      {paper.abstract}
                    </p>
                  </div>
                  <div className="mt-6 pt-2">
                    <button
                      onClick={() => onNavigate ? onNavigate("research") : onGetAccess()}
                      className="font-heading text-xs font-semibold text-[#3b82f6] hover:text-[#1e40af] flex items-center gap-1 cursor-pointer"
                    >
                      Read full paper & BibTeX citation →
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
