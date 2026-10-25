"use client";

import { useEffect, useRef, useState } from "react";

interface ShowcaseSection {
  id: string;
  icon: React.ReactNode;
  stepNumber: string;
  tabLabel: string;
  title: string;
  description: string;
  features: string[];
  mockupType: "quickstart" | "workflow" | "goals" | "voice" | "connectors" | "insights";
}

export function StickyScrollShowcase({ onNavigate }: { onNavigate?: (tab: string) => void }) {
  const [activeId, setActiveId] = useState<string>("card-build-fast");
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const sections: ShowcaseSection[] = [
    {
      id: "card-build-fast",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      stepNumber: "01",
      tabLabel: "Build Fast",
      title: "From bare metal to verified inference in minutes",
      description:
        "Initialize your sovereign cluster with a single CLI command. Pre-quantized FP8 kernels and memory-efficient attention run out of the box with zero compilation friction.",
      features: [
        "Single-line installation across Ubuntu, RHEL, and macOS",
        "Automated GPU memory profiling and layer placement",
        "Native Hugging Face, Ollama, and vLLM drop-in support",
      ],
      mockupType: "quickstart",
    },
    {
      id: "card-workflows",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
      stepNumber: "02",
      tabLabel: "Agent Workflows",
      title: "Build the path every execution should take",
      description:
        "Shape branching call flows and multi-agent coordination. State machines dynamically route based on deduction outcomes and safety proofs.",
      features: [
        "Deterministic graph routing based on formal theorem validation",
        "Reversible transactions with intermediate proof checkpoints",
        "Seamless tool handoffs to private databases and enterprise APIs",
      ],
      mockupType: "workflow",
    },
    {
      id: "card-goals",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      stepNumber: "03",
      tabLabel: "Formal Goals",
      title: "Define verifiable mathematical targets without guesswork",
      description:
        "Keep multi-step reasoning tightly anchored to formal logic. Automated theorem provers verify each lemma before concluding answers.",
      features: [
        "Define deductive constraints without micro-scripting every step",
        "Lean 4 automated formal verification pipeline",
        "Align specialized sub-agents around single objective goals",
      ],
      mockupType: "goals",
    },
    {
      id: "card-natural-flow",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      stepNumber: "04",
      tabLabel: "Natural Flow",
      title: "Made for real-world interactions across 22 languages",
      description:
        "Sub-18ms time-to-first-token provides instantaneous, fluid voice and text responses across all 22 scheduled Indian languages.",
      features: [
        "Real-time conversational streaming with low jitter",
        "Native Indic semantic reasoning without English pivots",
        "Audio waveform synthesis with regional accent fidelity",
      ],
      mockupType: "voice",
    },
    {
      id: "card-live-actions",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      ),
      stepNumber: "05",
      tabLabel: "Live Connectors",
      title: "Connect tools, compilers, and internal microservices",
      description:
        "Give your agents safe, audited access to connected infrastructure. Call APIs, query private vector stores, and execute sandbox code safely.",
      features: [
        "Air-gapped execution sandbox with memory isolation",
        "100+ native connectors for enterprise productivity tools",
        "Automated auditing of outbound payload signatures",
      ],
      mockupType: "connectors",
    },
    {
      id: "card-insights",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      stepNumber: "06",
      tabLabel: "Call Insights",
      title: "Inspect every token rationale with zero telemetry leaks",
      description:
        "Deep audit logs capture step-by-step reasoning traces and hardware tolerances locally. No data ever leaves your perimeter.",
      features: [
        "Detailed chain-of-thought token probability verification",
        "Real-time VRAM allocation and compute efficiency metrics",
        "Compliant with sovereign data retention and privacy statutes",
      ],
      mockupType: "insights",
    },
  ];

  // Set up scroll observer to update active section in static left panel
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -40% 0px",
        threshold: 0.15,
      }
    );

    Object.values(cardRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCard = (id: string) => {
    const el = cardRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Mobile Header (visible only on mobile) */}
        <div className="lg:hidden mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFE] border border-[#E8EDF2] text-xs font-heading font-semibold text-[#EA580C] mb-3 shadow-2xs">
            <span>✦</span>
            <span>॥ क्रिया स्तम्भ ॥ · Enterprise Execution Flow</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#0F1B2D] tracking-tight leading-tight">
            Architecture built for mission-critical reliability
          </h2>
          <p className="font-body text-sm text-[#5A6B7F] mt-2.5 leading-relaxed">
            While you scroll through our modular execution phases, see how every layer maintains deterministic guarantees and zero telemetry leaks.
          </p>
        </div>

        {/* 
          SPLIT SCREEN PINNED SCROLL (Matches reference screenshot 111511.png):
          - LEFT SIDE: STATIC / PINNED in place for entire section scroll
          - RIGHT SIDE: CARDS SCROLLING smoothly past the stationary text
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 relative">
          {/* 1. LEFT COLUMN: STATIC / PINNED TEXT & INTERACTIVE STEP NAV (col-span-5) */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="sticky top-24 pt-2">
              <div className="bg-[#F8FAFE] rounded-[32px] p-7 border border-[#E8EDF2] shadow-sm space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8EDF2] text-xs font-heading font-semibold text-[#EA580C] mb-3 shadow-2xs">
                    <span>✦</span>
                    <span>॥ क्रिया स्तम्भ ॥ · Enterprise Execution Flow</span>
                  </div>
                  <h2 className="font-heading font-bold text-3xl text-[#0F1B2D] tracking-tight leading-tight">
                    Architecture built for mission-critical reliability
                  </h2>
                  <p className="font-body text-sm text-[#5A6B7F] mt-2.5 leading-relaxed">
                    While you scroll through our modular execution phases, see how every layer maintains deterministic guarantees and zero telemetry leaks.
                  </p>
                </div>

                {/* Interactive Step Navigator */}
                <div className="space-y-1.5 pt-2 border-t border-[#E8EDF2]">
                  <div className="text-[11px] font-heading font-semibold text-[#94A3B8] uppercase tracking-wider px-2 pb-1">
                    Active Execution Stage
                  </div>
                  {sections.map((s) => {
                    const isActive = activeId === s.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => scrollToCard(s.id)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all duration-300 cursor-pointer ${
                          isActive
                            ? "bg-white text-[#EA580C] shadow-sm font-semibold border border-[#E8EDF2] translate-x-1"
                            : "text-[#475569] hover:bg-white/60 hover:text-[#0F1B2D]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`text-sm ${isActive ? "text-[#EA580C]" : "text-[#94A3B8]"}`}>
                            {s.icon}
                          </span>
                          <span className="font-heading text-xs sm:text-sm">
                            {s.stepNumber} &middot; {s.tabLabel}
                          </span>
                        </div>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-pulse" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate?.("access")}
                    className="w-full py-3 rounded-full bg-[#0F1B2D] hover:bg-black text-white font-body font-medium text-xs sm:text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    Deploy Sovereign Cluster →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 2. RIGHT COLUMN: MOVING CARDS SCROLLING (col-span-7) */}
          <div className="lg:col-span-7 space-y-16 sm:space-y-20 py-2">
            {sections.map((s) => (
              <div
                key={s.id}
                id={s.id}
                ref={(el) => {
                  cardRefs.current[s.id] = el;
                }}
                className="card-premium group relative overflow-hidden bg-[#F8FAFE] rounded-[32px] p-7 sm:p-9 border border-[#E8EDF2] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] scroll-mt-28"
              >
                {/* Subtle top corner gradient bloom */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-orange-500/10 blur-xl pointer-events-none group-hover:opacity-100 opacity-40 transition-opacity duration-500" />
                <div className="relative z-10">
                  {/* Micro Step Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-[#2563eb]">
                      Phase {s.stepNumber}
                    </span>
                    <span className="font-heading font-semibold text-xs text-[#64748B]">
                      {s.tabLabel}
                    </span>
                  </div>

                  {/* Card Title & Description */}
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#0F1B2D] tracking-tight leading-snug">
                    {s.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-[#5A6B7F] mt-3 leading-relaxed">
                    {s.description}
                  </p>

                  {/* Card Mockup Visual Stage */}
                  <div className="mt-8 rounded-2xl bg-white border border-[#E8EDF2] p-5 sm:p-6 shadow-inner min-h-[250px] flex items-center justify-center">
                    {s.mockupType === "quickstart" && (
                      <div className="w-full bg-[#0F1B2D] rounded-xl p-4 font-mono text-xs text-white space-y-2 shadow-md">
                        <div className="flex items-center gap-2 text-[#94A3B8] border-b border-white/10 pb-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                          <span className="ml-2 text-[11px] text-[#94A3B8]">csky-quickstart.sh</span>
                        </div>
                        <div className="text-emerald-400">$ csky init --cluster sovereign-blr-01</div>
                        <div className="text-[#94A3B8]">✓ Detected 8x NVIDIA H100 SXM5 80GB</div>
                        <div className="text-[#94A3B8]">✓ Allocated FP8 Tensor Cache (Zero Telemetry Mode)</div>
                        <div className="text-white">● Cluster live: 14.8M tok/sec ready at http://localhost:8000</div>
                      </div>
                    )}

                    {s.mockupType === "workflow" && (
                      <div className="w-full bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 rounded-xl p-5 border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
                        <div className="bg-white p-3 rounded-xl border border-emerald-200 shadow-2xs font-body text-xs font-semibold text-[#0F1B2D]">
                          Node 01: Ingest Context
                        </div>
                        <div className="text-emerald-500 font-mono text-xs font-bold">───►</div>
                        <div className="bg-white p-3 rounded-xl border border-emerald-200 shadow-2xs font-body text-xs font-semibold text-[#0F1B2D]">
                          Node 02: Formal Guard
                        </div>
                        <div className="text-emerald-500 font-mono text-xs font-bold">───►</div>
                        <div className="bg-emerald-600 text-white p-3 rounded-xl shadow-xs font-body text-xs font-semibold">
                          Node 03: Q.E.D. Commit
                        </div>
                      </div>
                    )}

                    {s.mockupType === "goals" && (
                      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          { step: "1", title: "Axiom Parse", desc: "Extract formal assertions" },
                          { step: "2", title: "Lemma Proof", desc: "Lean 4 automated synthesis" },
                          { step: "3", title: "Bitwise Close", desc: "Zero-hallucination signoff" },
                        ].map((g) => (
                          <div key={g.step} className="bg-[#F8FAFE] p-3.5 rounded-xl border border-[#E2E8F0] text-center shadow-2xs">
                            <div className="w-6 h-6 rounded-full bg-[#2563eb] text-white font-mono text-xs font-bold mx-auto mb-2 flex items-center justify-center">
                              {g.step}
                            </div>
                            <div className="font-heading font-bold text-xs text-[#0F1B2D]">{g.title}</div>
                            <div className="font-body text-[11px] text-[#64748B] mt-1">{g.desc}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {s.mockupType === "voice" && (
                      <div className="w-full space-y-3 font-mono text-xs">
                        <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                          <span className="text-[#64748B]">Execution Kernel:</span>
                          <span className="text-[#0F1B2D] font-bold">Akash-Flash FP8 Matrix</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                          <span className="text-[#64748B]">Audited Dialects:</span>
                          <span className="text-[#2563eb] font-bold">22 Scheduled Languages</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                          <span className="text-emerald-700">Formal Verification:</span>
                          <span className="text-emerald-700 font-bold">100% Lean 4 Certified</span>
                        </div>
                      </div>
                    )}

                    {s.mockupType === "connectors" && (
                      <div className="w-full p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-heading font-bold text-[#0F1B2D]">Autonomous Tool Protocol</span>
                          <span className="font-mono text-[11px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md font-semibold">Active Mesh</span>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {["vLLM Driver", "PostgreSQL Adapter", "Ollama Runner", "TensorRT-LLM", "Local Air-Gap"].map((tool) => (
                            <span
                              key={tool}
                              className="px-3 py-1 rounded-lg bg-white border border-[#E2E8F0] font-mono text-[11px] text-[#334155] shadow-2xs"
                            >
                              ✓ {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {s.mockupType === "insights" && (
                      <div className="w-full space-y-3 font-mono text-xs">
                        <div className="p-3 rounded-xl bg-[#0F1B2D] text-white space-y-2">
                          <div className="flex items-center justify-between text-[#94A3B8] text-[11px]">
                            <span>BITWISE EXECUTION TELEMETRY</span>
                            <span className="text-emerald-400">● LIVE</span>
                          </div>
                          <div className="text-emerald-300 font-bold text-sm">
                            14,820,192 tok/sec throughput
                          </div>
                          <div className="text-[#94A3B8] text-[11px]">
                            0 byte outbound telemetry | 100% On-Premise Sovereign Execution
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 3 Checkmarks */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-7 pt-5 border-t border-[#E8EDF2]">
                    {s.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#EA580C] text-white flex items-center justify-center text-[9px] shrink-0 font-bold mt-0.5">
                          ✓
                        </div>
                        <span className="font-body text-xs text-[#475569] leading-snug">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
