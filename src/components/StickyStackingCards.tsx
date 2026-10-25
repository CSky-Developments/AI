"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";

export function StickyStackingCards({ onNavigate }: { onNavigate?: (tab: string) => void }) {
  const [selectedLang, setSelectedLang] = useState("Hindi");

  const languages = [
    { name: "Hindi", script: "हिन्दी", region: "National" },
    { name: "Tamil", script: "தமிழ்", region: "Southern" },
    { name: "Telugu", script: "తెలుగు", region: "Southern" },
    { name: "Bengali", script: "বাংলা", region: "Eastern" },
    { name: "Marathi", script: "मराठी", region: "Western" },
    { name: "Gujarati", script: "ગુજરાતી", region: "Western" },
    { name: "Kannada", script: "ಕನ್ನಡ", region: "Southern" },
    { name: "Malayalam", script: "മലയാളം", region: "Southern" },
    { name: "Punjabi", script: "ਪੰਜਾਬੀ", region: "Northern" },
    { name: "Sanskrit", script: "संस्कृतम्", region: "Classical" },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F8FAFE] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8EDF2] text-xs font-heading font-semibold text-[#2563eb] mb-3.5 shadow-2xs">
            <span>✦</span>
            <span>॥ बहुभाषा &middot; स्वातन्त्र्यम् ॥ · Sovereign Foundations</span>
            <span>✦</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#0F1B2D] tracking-tight">
            Built for enterprise depth &amp; sovereign scale
          </h2>
          <p className="font-body text-sm sm:text-base text-[#64748B] mt-3.5 max-w-lg mx-auto leading-relaxed">
            Every layer from tokenization to formal proof auditing is engineered without proprietary walled gardens.
          </p>
        </div>

        {/* 
          STACKING OVERLAPPING CARDS CONTAINER:
          Matches reference "Card Overlap scroll animation" (Screenshot 2026-10-25 111642.png -> 111656.png)
          Each card uses `sticky` with progressive stacking and rich visual preview stage.
        */}
        <div className="space-y-12 pb-24 md:space-y-16 md:pb-32">
          {/* Card 1: Multilingual Reasoning (Saffron / Amber Canvas) */}
          <div className="sticky top-20 z-10 bg-white rounded-[36px] p-7 md:p-10 border border-[#E8EDF2] shadow-[0_10px_30px_rgba(15,27,45,0.06)] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Text & CTA */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-3xl sm:text-4xl text-[#0F1B2D] tracking-tight leading-tight">
                    One model suite. 22 languages. <br className="hidden sm:inline" />
                    Zero translation loss.
                  </h3>
                  <p className="font-body text-sm sm:text-base text-[#5A6B7F] mt-4 leading-relaxed">
                    Deploy across India without translating through English as an intermediate bottleneck.
                    Preserve nuanced regional idiom, cultural context, and legal terminology with verified precision.
                  </p>

                  <div className="mt-7">
                    <button
                      data-magnetic
                      onClick={() => onNavigate?.("csky-ultra")}
                      className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#0F1B2D] hover:bg-black text-white font-body font-medium text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
                    >
                      Explore Akash 405B Reasoning →
                    </button>
                  </div>
                </div>

                {/* 3 Checkmark Items */}
                <div className="mt-10 pt-6 border-t border-[#F1F5F9] space-y-3">
                  {[
                    "Native Indic Tokenizer with 0.78 compression ratio",
                    "Direct formal semantics in Sanskrit & regional vernaculars",
                    "Transparent token weights published under open research licenses",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EA580C] text-white flex items-center justify-center text-[10px] shrink-0 font-bold">
                        ✓
                      </div>
                      <span className="font-body text-xs sm:text-sm text-[#334155] font-medium">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Saffron / Terracotta Interactive Visual Preview */}
              <div className="lg:col-span-6">
                <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-[#EA580C] via-[#F97316] to-[#FB923C] p-6 sm:p-8 min-h-[360px] flex items-center justify-center shadow-inner">
                  {/* Floating Language Matrix Box */}
                  <div className="relative z-10 w-full max-w-md bg-white rounded-2xl p-5 shadow-2xl border border-white/40">
                    <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                      <span className="font-heading font-bold text-sm text-[#0F1B2D]">
                        Active Dialect Matrix
                      </span>
                      <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[#FFF7ED] text-[#EA580C] font-semibold">
                        22 Scheduled
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-3 max-h-48 overflow-y-auto pr-1">
                      {languages.map((l) => (
                        <button
                          key={l.name}
                          onClick={() => setSelectedLang(l.name)}
                          className={`flex items-center justify-between p-2 rounded-xl text-left transition-all cursor-pointer ${
                            selectedLang === l.name
                              ? "bg-[#FFF7ED] border border-[#EA580C]/40 text-[#EA580C]"
                              : "bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:bg-[#F1F5F9]"
                          }`}
                        >
                          <div>
                            <div className="font-heading font-semibold text-xs leading-none">
                              {l.name}
                            </div>
                            <div className="font-body text-[10px] text-[#94A3B8] mt-0.5">
                              {l.script}
                            </div>
                          </div>
                          <span
                            className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[8px] ${
                              selectedLang === l.name
                                ? "border-[#EA580C] bg-[#EA580C] text-white"
                                : "border-[#CBD5E1]"
                            }`}
                          >
                            {selectedLang === l.name && "✓"}
                          </span>
                        </button>
                      ))}
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                      <span>Selected: <b className="text-[#0F1B2D]">{selectedLang}</b></span>
                      <span className="text-emerald-600 font-semibold">● 100% Sovereign Weights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Autonomous Multi-Agent Swarms (Lavender / Violet Canvas) */}
          <div className="sticky top-28 z-20 bg-white rounded-[36px] p-7 md:p-10 border border-[#E8EDF2] shadow-[0_20px_50px_rgba(15,27,45,0.12)] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Text & CTA */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-3xl sm:text-4xl text-[#0F1B2D] tracking-tight leading-tight">
                    Fix one step, <br className="hidden sm:inline" />
                    not the whole pipeline.
                  </h3>
                  <p className="font-body text-sm sm:text-base text-[#5A6B7F] mt-4 leading-relaxed">
                    A lead agent decomposes complex engineering objectives, assigns tasks to isolated sub-agents,
                    and validates intermediate mathematical proofs before output commitment.
                  </p>

                  <div className="mt-7">
                    <button
                      data-magnetic
                      onClick={() => onNavigate?.("csky-agni")}
                      className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#0F1B2D] hover:bg-black text-white font-body font-medium text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
                    >
                      Launch Agni 120B Agent Mesh →
                    </button>
                  </div>
                </div>

                {/* 3 Checkmark Items */}
                <div className="mt-10 pt-6 border-t border-[#F1F5F9] space-y-3">
                  {[
                    "Isolated sub-agent sandboxes with custom tool capabilities",
                    "Automated Lean 4 theorem validation on deductive derivations",
                    "Bitwise reproducible execution logs for rigorous auditing",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#6366F1] text-white flex items-center justify-center text-[10px] shrink-0 font-bold">
                        ✓
                      </div>
                      <span className="font-body text-xs sm:text-sm text-[#334155] font-medium">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Lavender / Violet Interactive Agent Studio */}
              <div className="lg:col-span-6">
                <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-[#6366F1] via-[#818CF8] to-[#C7D2FE] p-6 sm:p-8 min-h-[360px] flex items-center justify-center shadow-inner">
                  {/* Floating Agent Task Planner UI */}
                  <div className="relative z-10 w-full max-w-md bg-white rounded-2xl p-5 shadow-2xl border border-white/40 space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#6366F1] animate-pulse" />
                        <span className="font-heading font-bold text-sm text-[#0F1B2D]">
                          Task: Distributed Split-Brain Audit
                        </span>
                      </div>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-[#EEF2FF] text-[#4F46E5] font-semibold">
                        Agni Swarm Active
                      </span>
                    </div>

                    {/* Step Checklist */}
                    {[
                      { step: "01", label: "Decompose consensus state machine into axioms", done: true },
                      { step: "02", label: "Dispatch sub-agent to synthesize formal proof", done: true },
                      { step: "03", label: "Verify Byzantine partition resistance in Lean 4", active: true },
                      { step: "04", label: "Commit zero-hallucination auditor report", done: false },
                    ].map((s) => (
                      <div
                        key={s.step}
                        className={`flex items-center gap-3 p-2.5 rounded-xl text-xs font-body ${
                          s.active
                            ? "bg-[#EEF2FF] border border-[#6366F1]/30 text-[#4F46E5] font-semibold"
                            : s.done
                            ? "bg-[#F8FAFC] text-[#334155]"
                            : "bg-white text-[#94A3B8]"
                        }`}
                      >
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono shrink-0 ${
                            s.done
                              ? "bg-emerald-500 text-white"
                              : s.active
                              ? "bg-[#6366F1] text-white animate-spin"
                              : "bg-[#E2E8F0] text-[#64748B]"
                          }`}
                        >
                          {s.done ? "✓" : s.active ? "◌" : s.step}
                        </span>
                        <span className="truncate">{s.label}</span>
                      </div>
                    ))}

                    <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                      <span>Latency: <b className="text-[#0F1B2D]">18.4ms/step</b></span>
                      <span className="text-emerald-600 font-semibold">Q.E.D. Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Air-Gapped Sovereign Deployment (Emerald / Mint Canvas) */}
          <div className="sticky top-36 z-30 bg-white rounded-[36px] p-7 md:p-10 border border-[#E8EDF2] shadow-[0_30px_70px_rgba(15,27,45,0.18)] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Text & CTA */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-3xl sm:text-4xl text-[#0F1B2D] tracking-tight leading-tight">
                    Deploy once. <br className="hidden sm:inline" />
                    Own the runtime forever.
                  </h3>
                  <p className="font-body text-sm sm:text-base text-[#5A6B7F] mt-4 leading-relaxed">
                    Native FP8 quantization and sub-quadratic attention kernels allow billion-parameter models
                    to run directly on commodity hardware, air-gapped clusters, or private cloud VPCs.
                  </p>

                  <div className="mt-7">
                    <button
                      data-magnetic
                      onClick={() => onNavigate?.("pricing")}
                      className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#0F1B2D] hover:bg-black text-white font-body font-medium text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
                    >
                      View Deployment Specs →
                    </button>
                  </div>
                </div>

                {/* 3 Checkmark Items */}
                <div className="mt-10 pt-6 border-t border-[#F1F5F9] space-y-3">
                  {[
                    "Zero telemetry and zero outbound phone-home callbacks",
                    "vLLM, TensorRT-LLM, and Ollama compatible packaging",
                    "100% on-premise data confidentiality with strict compliance",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#059669] text-white flex items-center justify-center text-[10px] shrink-0 font-bold">
                        ✓
                      </div>
                      <span className="font-body text-xs sm:text-sm text-[#334155] font-medium">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Emerald / Mint Interactive Hardware Telemetry */}
              <div className="lg:col-span-6">
                <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-[#059669] via-[#10B981] to-[#6EE7B7] p-6 sm:p-8 min-h-[360px] flex items-center justify-center shadow-inner">
                  {/* Floating Hardware Monitor Box */}
                  <div className="relative z-10 w-full max-w-md bg-white rounded-2xl p-5 shadow-2xl border border-white/40 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                      <span className="font-heading font-bold text-sm text-[#0F1B2D]">
                        Cluster Execution Bounds
                      </span>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                        POSIX Conforming
                      </span>
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      <div>
                        <div className="flex justify-between text-[#64748B] mb-1">
                          <span>VRAM Utilization (Akash 405B FP8)</span>
                          <span className="font-bold text-[#0F1B2D]">184 GB / 320 GB</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-[#E2E8F0] overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: "57.5%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[#64748B] mb-1">
                          <span>Time to First Token (TTFT)</span>
                          <span className="font-bold text-emerald-600">14.2ms</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-[#E2E8F0] overflow-hidden">
                          <div className="h-full bg-emerald-600 rounded-full" style={{ width: "88%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[#64748B] mb-1">
                          <span>Telemetry Outbound Sockets</span>
                          <span className="font-bold text-[#0F1B2D]">0 (Air-Gapped)</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-[#E2E8F0] overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: "100%" }} />
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                      <span>Target: <b className="text-[#0F1B2D]">4x H100 SXM5</b></span>
                      <span className="text-emerald-600 font-semibold">● Production Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
