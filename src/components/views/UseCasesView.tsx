"use client";

import { FadeIn } from "@/components/FadeIn";
import { AnimatedBarsBackground } from "@/components/AnimatedBarsBackground";
import { PageBackgroundSymbols } from "@/components/PageBackgroundSymbols";
import {
  AkashSymbol,
  AgniSymbol,
  DrishtiSymbol,
  PrithviSymbol,
  SomaSymbol,
  VayuSymbol,
} from "@/components/TraditionalSymbols";

interface UseCasesViewProps {
  onNavigate: (tab: string) => void;
}

export function UseCasesView({ onNavigate }: UseCasesViewProps) {
  const cases = [
    {
      id: "finance",
      badge: "Quantitative Finance & Trading",
      title: "Real-Time Algorithmic Risk Auditing & Execution",
      modelUsed: "Akash (405B) + Agni (120B)",
      latency: "4.2ms decision latency",
      highlight: "100% on-prem air-gapped security",
      accent: "#2563EB",
      bgGradient: "from-[#1D4ED8] via-[#2563EB] to-[#60A5FA]",
      problem:
        "Global hedge funds and algorithmic market makers needed continuous multi-step theorem verification across order books without streaming proprietary alpha strategies to closed cloud APIs.",
      solution:
        "Deployed Akash 405B in FP8 across private 4x H100 clusters. Mathematical proof trees verify risk bounds before algorithmic execution with zero external network connectivity.",
      results: [
        "100% data sovereignty with zero external API calls",
        "Sub-5ms formal theorem verification per order block",
        "Reduced trade simulation runtimes from 3 weeks to 18 hours",
      ],
      mockupType: "finance",
    },
    {
      id: "biomedical",
      badge: "Biomedical & Clinical Discovery",
      title: "Genomic Sequence Attention & Clinical Deduction",
      modelUsed: "Soma (14B) + Prithvi (32B)",
      latency: "Sub-second cross-reference",
      highlight: "HIPAA & GxP compliant local inference",
      accent: "#7C3AED",
      bgGradient: "from-[#6D28D9] via-[#7C3AED] to-[#A78BFA]",
      problem:
        "Clinical oncology research labs faced massive computational bottlenecks analyzing dense 4K histology scans and multi-parameter protein docking simulations.",
      solution:
        "Paired Prithvi 32B's native 4K document attention with Soma 14B's formal deductive reasoning engine to cross-reference microscopy scans with formal molecular chemistry papers.",
      results: [
        "94.2% accuracy on complex biological pathway deduction",
        "Direct ingest of high-DPI histology without downsampling",
        "Strict on-prem compliance with zero patient data retention",
      ],
      mockupType: "biomedical",
    },
    {
      id: "aerospace",
      badge: "Autonomous Edge & Robotics",
      title: "Offline Drone & Satellite Trajectory Planning",
      modelUsed: "Vayu (8B Edge)",
      latency: "Sub-80ms cold start",
      highlight: "4.8W power draw on embedded hardware",
      accent: "#0891B2",
      bgGradient: "from-[#0E7490] via-[#0891B2] to-[#38BDF8]",
      problem:
        "Autonomous planetary rovers and remote surveillance drones operating in GPS-denied and radio-silent environments needed on-device spatial reasoning without cloud connectivity.",
      solution:
        "Embedded Vayu 8B directly onto ARM64 edge modules using 4-bit GGUF quantization. Delivers instant spatial reasoning and emergency trajectory replanning within a 5-watt envelope.",
      results: [
        "Operates 100% offline in radio-silent environments",
        "Sub-100ms cold boot time on embedded Linux",
        "Over 60 tokens/sec on battery-powered edge hardware",
      ],
      mockupType: "aerospace",
    },
    {
      id: "software",
      badge: "Autonomous Software Engineering",
      title: "Self-Healing CI/CD & Compiler Verification Loops",
      modelUsed: "Agni (120B Code Engine)",
      latency: "140 tokens/sec streaming",
      highlight: "0% syntax compilation hallucination",
      accent: "#EA580C",
      bgGradient: "from-[#C2410C] via-[#EA580C] to-[#FB923C]",
      problem:
        "Enterprise infrastructure teams were inundated with flaky build failures and syntax hallucinations produced by generic commercial coding LLMs.",
      solution:
        "Integrated Agni 120B's formal AST grammar checks into developer pull request pipelines. The model autonomously writes, compiles, and verifies unit tests in isolated Linux sandboxes.",
      results: [
        "0% syntax errors in compiled Rust, Go, and TypeScript PRs",
        "3.4x faster autonomous bug triage & lemma synthesis",
        "Zero proprietary code transmitted to third-party cloud gates",
      ],
      mockupType: "software",
    },
  ];

  return (
    <div className="bg-[#F8FAFE] min-h-screen relative overflow-hidden text-[#0F1B2D]">
      {/* Universal Page Background Sacred Geometry in Gray */}
      <PageBackgroundSymbols theme="use-cases" />

      {/* 1. HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28 pb-20">
        <AnimatedBarsBackground theme="manifesto" />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/75 backdrop-blur-md border border-[#E2E8F0] shadow-2xs mb-6 text-xs font-heading font-medium text-[#4f46e5]">
            <span>✦</span>
            <span>॥ प्रयोग मण्डल ॥ · Production Architectures</span>
            <span>✦</span>
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-[#0F1B2D] leading-[1.08]">
            How sovereign teams build with CSky.
          </h1>

          <p className="font-body text-lg sm:text-xl text-[#334155] mt-5 max-w-2xl mx-auto leading-relaxed">
            Real production architectures deployed by quantitative hedge funds, aerospace teams, biomedical laboratories, and defense operations.
          </p>
        </div>
      </section>

      {/* 2. PRODUCTION CASE STUDIES IN SPLIT REFERENCE CARD ARCHITECTURE */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-14">
          {cases.map((c, idx) => (
            <FadeIn key={c.id} delay={idx * 120}>
              <div className="card-premium group relative overflow-hidden bg-white rounded-[36px] p-8 md:p-12 border border-[#E8EDF2] shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                {/* Subtle top corner gradient bloom */}
                <div
                  className="absolute -top-16 -right-16 w-52 h-52 rounded-full blur-2xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ background: c.accent }}
                />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Left Column (col-span-7): Narrative, Challenge, Solution, Outcomes */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span
                            className="px-3.5 py-1 rounded-full text-xs font-heading font-semibold border shadow-2xs"
                            style={{
                              color: c.accent,
                              backgroundColor: `${c.accent}12`,
                              borderColor: `${c.accent}30`,
                            }}
                          >
                            {c.badge}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#F1F5F9] text-[#475569] text-xs font-mono font-medium">
                            {c.modelUsed}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-body text-emerald-700 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200/60 shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>{c.latency}</span>
                          <span>&middot;</span>
                          <span>{c.highlight}</span>
                        </div>
                      </div>

                      <h3 className="font-heading font-bold text-2xl md:text-3xl text-[#0F1B2D] mt-5 leading-snug">
                        {c.title}
                      </h3>

                      {/* Challenge & Solution Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-5 border-t border-[#F1F5F9]">
                        <div>
                          <div className="text-xs font-heading font-semibold text-[#64748B] uppercase tracking-wider">
                            The Challenge
                          </div>
                          <p className="font-body text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
                            {c.problem}
                          </p>
                        </div>
                        <div>
                          <div className="text-xs font-heading font-semibold text-[#64748B] uppercase tracking-wider">
                            The CSky Solution
                          </div>
                          <p className="font-body text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
                            {c.solution}
                          </p>
                        </div>
                      </div>

                      {/* Verified Outcomes Checklist */}
                      <div className="mt-6 pt-5 border-t border-[#F1F5F9]">
                        <div className="text-xs font-heading font-semibold text-[#64748B] uppercase tracking-wider mb-3">
                          Verified Production Outcomes
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          {c.results.map((r) => (
                            <div
                              key={r}
                              className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-body text-[#1E293B] flex items-start gap-2 shadow-2xs"
                            >
                              <span className="text-emerald-600 font-bold shrink-0">✓</span>
                              <span className="leading-snug">{r}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column (col-span-5): Rich Interactive Visual Architecture Stage */}
                  <div className="lg:col-span-5">
                    <div
                      className={`relative rounded-[28px] overflow-hidden bg-gradient-to-br ${c.bgGradient} p-6 sm:p-7 min-h-[340px] flex items-center justify-center shadow-inner`}
                    >
                      {/* Ambient Halo */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                        <div className="w-56 h-56 rounded-full border border-white/60 animate-ping" />
                      </div>

                      {/* White Visual Stage Card */}
                      <div className="relative z-10 w-full bg-white rounded-2xl p-5 shadow-2xl border border-white/40 space-y-3.5">
                        <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                          <div className="flex items-center gap-2">
                            <span
                              className="w-2.5 h-2.5 rounded-full animate-pulse"
                              style={{ backgroundColor: c.accent }}
                            />
                            <span className="font-heading font-bold text-xs text-[#0F1B2D]">
                              Architecture Topology
                            </span>
                          </div>
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-[#F1F5F9] text-[#475569] font-semibold">
                            Air-Gapped Node
                          </span>
                        </div>

                        {c.mockupType === "finance" && (
                          <div className="space-y-2.5 font-mono text-xs">
                            <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex justify-between items-center">
                              <span className="text-[#64748B]">Order Execution SLA</span>
                              <span className="font-bold text-emerald-600">4.2ms P99.9</span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex justify-between items-center">
                              <span className="text-[#64748B]">Byzantine Partition</span>
                              <span className="font-bold text-[#2563EB]">Lean 4 Q.E.D.</span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-[#EFF6FF] border border-blue-200 flex justify-between items-center">
                              <span className="text-blue-900 font-semibold">External Leakage</span>
                              <span className="font-bold text-emerald-600">0.00% Zero</span>
                            </div>
                          </div>
                        )}

                        {c.mockupType === "biomedical" && (
                          <div className="space-y-2.5 font-mono text-xs">
                            <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex justify-between items-center">
                              <span className="text-[#64748B]">Document Window</span>
                              <span className="font-bold text-[#7C3AED]">200k Native RoPE</span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex justify-between items-center">
                              <span className="text-[#64748B]">Pathology Accuracy</span>
                              <span className="font-bold text-emerald-600">94.2% MATH-500</span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-[#F5F3FF] border border-purple-200 flex justify-between items-center">
                              <span className="text-purple-900 font-semibold">HIPAA BAA Local</span>
                              <span className="font-bold text-emerald-600">100% Compliant</span>
                            </div>
                          </div>
                        )}

                        {c.mockupType === "aerospace" && (
                          <div className="space-y-2.5 font-mono text-xs">
                            <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex justify-between items-center">
                              <span className="text-[#64748B]">Cold Boot Time</span>
                              <span className="font-bold text-[#0891B2]">Sub-80ms</span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex justify-between items-center">
                              <span className="text-[#64748B]">Total Power Envelope</span>
                              <span className="font-bold text-emerald-600">4.8W Max Load</span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-[#ECFEFF] border border-cyan-200 flex justify-between items-center">
                              <span className="text-cyan-900 font-semibold">Radio-Silent Mode</span>
                              <span className="font-bold text-[#0891B2]">Active Offline</span>
                            </div>
                          </div>
                        )}

                        {c.mockupType === "software" && (
                          <div className="space-y-2.5 font-mono text-xs">
                            <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex justify-between items-center">
                              <span className="text-[#64748B]">Compiler Verification</span>
                              <span className="font-bold text-emerald-600">100% Rust / Go</span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex justify-between items-center">
                              <span className="text-[#64748B]">Throughput Rate</span>
                              <span className="font-bold text-[#EA580C]">140 tokens/sec</span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-[#FFF7ED] border border-orange-200 flex justify-between items-center">
                              <span className="text-orange-900 font-semibold">Syntax Hallucination</span>
                              <span className="font-bold text-emerald-600">0.00% Zero AST Drift</span>
                            </div>
                          </div>
                        )}

                        <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                          <span>Runtime Status: <b className="text-emerald-600">Active</b></span>
                          <span className="font-semibold" style={{ color: c.accent }}>
                            Verified Q.E.D.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 3. CTA */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center">
        <FadeIn delay={100}>
          <div className="card-premium group relative overflow-hidden bg-[#EEF2FF] rounded-[32px] p-10 md:p-14 border border-[#C7D2FE] shadow-sm hover:shadow-xl transition-all duration-500">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-[#1E1B4B]">
              Ready to architect your sovereign pipeline?
            </h3>
            <p className="font-body text-sm md:text-base text-[#4338CA] mt-3 max-w-xl mx-auto">
              Our theoretical and systems engineering team is ready to assist with model quantization, private cluster topology, and vLLM benchmarking.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                data-magnetic
                onClick={() => onNavigate("access")}
                className="bg-[#4F46E5] hover:bg-[#4338CA] text-white font-body font-medium text-xs sm:text-sm rounded-full px-8 py-3.5 transition-colors shadow-md hover:shadow-lg cursor-pointer"
              >
                Request Sovereign Architecture Review →
              </button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
