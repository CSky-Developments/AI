"use client";

import { FadeIn } from "@/components/FadeIn";
import { AnimatedBarsBackground } from "@/components/AnimatedBarsBackground";

interface UseCasesViewProps {
  onNavigate: (tab: string) => void;
}

export function UseCasesView({ onNavigate }: UseCasesViewProps) {
  const cases = [
    {
      id: "finance",
      badge: "Quantitative Finance & Trading",
      title: "Real-Time Algorithmic Risk Auditing and Execution",
      modelUsed: "Akash (405B) + Agni (120B)",
      latency: "4.2ms decision latency",
      highlight: "100% on-prem air-gapped security",
      problem:
        "Global hedge funds and liquidity providers required continuous multi-step theorem verification across high-frequency order books without streaming proprietary alpha strategies to external cloud APIs.",
      solution:
        "Deployed Akash 405B in FP8 across private 4x H100 clusters. Mathematical proof trees verify risk bounds before algorithmic execution with zero external network connectivity.",
      results: [
        "100% data sovereignty with zero external API calls",
        "Sub-5ms formal theorem verification",
        "Reduced quarterly trade simulation times from 3 weeks to 18 hours",
      ],
    },
    {
      id: "biomedical",
      badge: "Biomedical & Clinical Discovery",
      title: "Genomic Sequence Attention and Clinical Hypothesis Deduction",
      modelUsed: "Soma (14B) + Prithvi (32B)",
      latency: "Sub-second cross-reference",
      highlight: "HIPAA & GxP compliant local inference",
      problem:
        "Clinical oncology research labs faced massive computational bottlenecks analyzing dense 4K histology scans and multi-parameter protein docking simulations.",
      solution:
        "Paired Prithvi 32B's native 4K document attention with Soma 14B's formal deductive reasoning engine to cross-reference microscopy scans with formal molecular chemistry papers.",
      results: [
        "94.2% accuracy on complex biological pathway deduction",
        "Direct ingest of high-DPI histology without downsampling",
        "Strict on-prem compliance with zero patient data retention",
      ],
    },
    {
      id: "aerospace",
      badge: "Autonomous Edge & Robotics",
      title: "Offline Drone & Satellite Trajectory Planning",
      modelUsed: "Vayu (8B Edge)",
      latency: "Sub-80ms cold start",
      highlight: "4.8W power draw on embedded hardware",
      problem:
        "Autonomous planetary rovers and remote surveillance drones operating in GPS-denied and radio-silent environments needed on-device spatial reasoning without cloud connectivity.",
      solution:
        "Embedded Vayu 8B directly onto ARM64 edge modules using 4-bit GGUF quantization. Delivers instant spatial reasoning and emergency trajectory replanning within a 5-watt envelope.",
      results: [
        "Operates 100% offline in radio-silent environments",
        "Sub-100ms cold boot time on embedded Linux",
        "Over 60 tokens/sec on battery-powered edge hardware",
      ],
    },
    {
      id: "software",
      badge: "Autonomous Software Engineering",
      title: "Self-Healing CI/CD and Compiler Verification Loops",
      modelUsed: "Agni (120B Code Engine)",
      latency: "140 tokens/sec streaming",
      highlight: "0% syntax compilation hallucination",
      problem:
        "Enterprise infrastructure teams were inundated with flaky build failures and syntax hallucinations produced by generic commercial coding LLMs.",
      solution:
        "Integrated Agni 120B's formal AST grammar checks into developer pull request pipelines. The model autonomously writes, compiles, and verifies unit tests in isolated Linux sandboxes.",
      results: [
        "0% syntax errors in compiled Rust, Go, and TypeScript PRs",
        "3.4x faster autonomous bug triage",
        "Zero proprietary code transmitted to third-party providers",
      ],
    },
  ];

  return (
    <div className="bg-[#F8FAFE] min-h-screen text-[#0F1B2D]">
      {/* 1. HERO (Full viewport, content below fold) */}
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
            Real architectures deployed by quantitative funds, aerospace teams, biomedical laboratories, and defense systems.
          </p>
        </div>
      </section>

      {/* 2. CASE STUDY CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {cases.map((c, idx) => (
            <FadeIn key={c.id} delay={idx * 100}>
              <div className="card-premium group relative overflow-hidden bg-white rounded-3xl p-8 md:p-12 border border-[#E8EDF2] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none group-hover:opacity-100 opacity-40 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full bg-[#EEF2FF] text-[#4f46e5] text-xs font-heading font-semibold">
                      {c.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#F1F5F9] text-[#475569] text-xs font-mono font-medium">
                      {c.modelUsed}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-body text-emerald-700 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200/60 self-start md:self-auto">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{c.latency}</span>
                    <span>&middot;</span>
                    <span>{c.highlight}</span>
                  </div>
                </div>

                <h2 className="font-heading font-bold text-2xl md:text-3xl text-[#0F1B2D] mt-6 leading-snug">
                  {c.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-6 border-t border-[#F1F5F9]">
                  <div>
                    <h3 className="text-xs font-heading font-semibold text-[#64748B] uppercase tracking-wider">
                      The Challenge
                    </h3>
                    <p className="font-body text-sm text-[#475569] mt-2.5 leading-relaxed">
                      {c.problem}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-heading font-semibold text-[#64748B] uppercase tracking-wider">
                      The CSky Solution
                    </h3>
                    <p className="font-body text-sm text-[#475569] mt-2.5 leading-relaxed">
                      {c.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#F1F5F9]">
                  <h3 className="text-xs font-heading font-semibold text-[#64748B] uppercase tracking-wider mb-3">
                    Verified Production Outcomes
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {c.results.map((r) => (
                      <div
                        key={r}
                        className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-body text-[#1E293B] flex items-start gap-2"
                      >
                        <span className="text-[#4f46e5] font-bold">✓</span>
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
          ))}
        </div>
      </section>

      {/* 3. CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <FadeIn delay={100}>
          <div className="bg-[#EEF2FF] rounded-3xl p-10 md:p-14 border border-[#C7D2FE]">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-[#1E1B4B]">
              Ready to architect your sovereign pipeline?
            </h3>
            <p className="font-body text-sm md:text-base text-[#4338CA] mt-3 max-w-xl mx-auto">
              Our theoretical and systems engineering team is ready to assist with model quantization, private cluster topology, and vLLM benchmarking.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => onNavigate("access")}
                className="bg-[#4F46E5] hover:bg-[#4338CA] text-white font-body font-medium text-xs sm:text-sm rounded-full px-8 py-3 transition-colors shadow-sm cursor-pointer"
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
