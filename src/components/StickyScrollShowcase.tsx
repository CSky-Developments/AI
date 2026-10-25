"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/FadeIn";

interface ShowcaseSection {
  id: string;
  icon: string;
  tabLabel: string;
  title: string;
  description: string;
  features: string[];
  mockup: "quickstart" | "workflow" | "goals" | "voice" | "connectors" | "insights";
}

export function StickyScrollShowcase() {
  const [activeSection, setActiveSection] = useState<string>("build-fast");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const sections: ShowcaseSection[] = [
    {
      id: "build-fast",
      icon: "✦",
      tabLabel: "Build fast",
      title: "From bare metal to verified inference in minutes.",
      description:
        "Initialize your sovereign cluster with a single CLI command. Pre-quantized kernels run out of the box with zero compilation friction.",
      features: [
        "Single-line installation across Ubuntu, RHEL, and macOS",
        "Automated GPU memory profiling and layer placement",
        "Native Hugging Face, Ollama, and vLLM drop-in support",
      ],
      mockup: "quickstart",
    },
    {
      id: "workflows",
      icon: "⚡",
      tabLabel: "Workflows",
      title: "Build the path every execution should take.",
      description:
        "Shape branching call flows and multi-agent coordination. State machines dynamically route based on deduction outcomes and safety proofs.",
      features: [
        "Deterministic graph routing based on formal theorem validation",
        "Reversible transactions with intermediate proof checkpoints",
        "Seamless tool handoffs to private databases and enterprise APIs",
      ],
      mockup: "workflow",
    },
    {
      id: "goals",
      icon: "🎯",
      tabLabel: "Goals",
      title: "Define verifiable mathematical targets without guesswork.",
      description:
        "Keep multi-step reasoning tightly anchored to formal logic. Automated theorem provers verify each lemma before concluding answers.",
      features: [
        "Define deductive constraints without micro-scripting every step",
        "Lean 4 automated formal verification pipeline",
        "Align specialized sub-agents around single objective goals",
      ],
      mockup: "goals",
    },
    {
      id: "natural-flow",
      icon: "📞",
      tabLabel: "Natural flow",
      title: "Made for real-world interactions across 22 languages.",
      description:
        "Sub-18ms time-to-first-token provides instantaneous, fluid voice and text responses across all 22 scheduled Indian languages.",
      features: [
        "Real-time conversational streaming with low jitter",
        "Native Indic semantic reasoning without English pivots",
        "Audio waveform synthesis with regional accent fidelity",
      ],
      mockup: "voice",
    },
    {
      id: "live-actions",
      icon: "🔌",
      tabLabel: "Live actions",
      title: "Connect tools, compilers, and internal microservices.",
      description:
        "Give your agents safe, audited access to connected infrastructure. Call APIs, query private vector stores, and execute sandbox code safely.",
      features: [
        "Air-gapped execution sandbox with memory isolation",
        "100+ native connectors for enterprise productivity tools",
        "Automated auditing of outbound payload signatures",
      ],
      mockup: "connectors",
    },
    {
      id: "insights",
      icon: "📊",
      tabLabel: "Call insights",
      title: "Inspect every token rationale with zero telemetry leaks.",
      description:
        "Deep audit logs capture step-by-step reasoning traces and hardware tolerances locally. No data ever leaves your perimeter.",
      features: [
        "Detailed chain-of-thought token probability verification",
        "Real-time VRAM allocation and compute efficiency metrics",
        "Compliant with sovereign data retention and privacy statutes",
      ],
      mockup: "insights",
    },
  ];

  // Set up scroll observer to update active section in sticky side-nav
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -45% 0px",
        threshold: 0.1,
      }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Full-Height Track with Sticky Side-Nav (Matches Reference Screenshot 2026-10-25 111511.png -> 111529.png) */}
          <div className="lg:col-span-4 hidden lg:block relative">
            <div className="sticky top-32 space-y-1.5 p-3.5 rounded-3xl bg-[#F8FAFE] border border-[#E8EDF2] shadow-sm">
              <div className="px-3 py-2 text-[11px] font-heading font-semibold text-[#64748B] uppercase tracking-wider">
                Architecture Flow
              </div>
              {sections.map((s) => {
                const isActive = activeSection === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-white text-[#EA580C] shadow-sm font-semibold border border-[#E8EDF2]"
                        : "text-[#475569] hover:bg-white/60 hover:text-[#0F1B2D]"
                    }`}
                  >
                    <span
                      className={`text-sm ${
                        isActive ? "text-[#EA580C]" : "text-[#94A3B8]"
                      }`}
                    >
                      {s.icon}
                    </span>
                    <span className="font-heading text-sm">{s.tabLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Scrolling Showcase Cards */}
          <div className="lg:col-span-8 space-y-12">
            {sections.map((s) => (
              <div
                key={s.id}
                id={s.id}
                ref={(el) => {
                  sectionRefs.current[s.id] = el;
                }}
                className="bg-[#F8FAFE] rounded-[32px] p-6 sm:p-10 border border-[#E8EDF2] shadow-sm transition-all scroll-mt-32"
              >
                {/* Title & Description */}
                <div>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#0F1B2D] tracking-tight">
                    {s.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-[#5A6B7F] mt-3 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                {/* Mockup Canvas */}
                <div className="mt-8 rounded-2xl bg-white border border-[#E8EDF2] p-5 sm:p-6 shadow-inner min-h-[260px] flex items-center justify-center">
                  {s.mockup === "quickstart" && (
                    <div className="w-full bg-[#0F1B2D] rounded-xl p-4 font-mono text-xs text-white space-y-2">
                      <div className="flex items-center gap-2 text-[#94A3B8] border-b border-white/10 pb-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                        <span className="ml-2 text-[11px]">csky-cluster-init.sh</span>
                      </div>
                      <div className="text-emerald-400">$ csky init --cluster sovereign-blr-01</div>
                      <div className="text-[#94A3B8]">✓ Detected 8x NVIDIA H100 SXM5 80GB</div>
                      <div className="text-[#94A3B8]">✓ Allocated FP8 Tensor Cache (Zero Telemetry Mode)</div>
                      <div className="text-white">🚀 Cluster live: 14.8M tok/sec ready at http://localhost:8000</div>
                    </div>
                  )}

                  {s.mockup === "workflow" && (
                    <div className="w-full bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="bg-white p-3.5 rounded-xl border border-emerald-200 shadow-2xs font-body text-xs font-semibold text-[#0F1B2D]">
                        Node 01: Ingest Transaction
                      </div>
                      <div className="text-emerald-500 font-mono text-xs font-bold">───►</div>
                      <div className="bg-white p-3.5 rounded-xl border border-emerald-200 shadow-2xs font-body text-xs font-semibold text-[#0F1B2D]">
                        Node 02: Formal Proof Guard
                      </div>
                      <div className="text-emerald-500 font-mono text-xs font-bold">───►</div>
                      <div className="bg-emerald-600 text-white p-3.5 rounded-xl shadow-xs font-body text-xs font-semibold">
                        Node 03: Q.E.D. Commit
                      </div>
                    </div>
                  )}

                  {s.mockup === "goals" && (
                    <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { step: "1", title: "Axiom Parse", desc: "Extract formal assertions" },
                        { step: "2", title: "Lemma Proof", desc: "Lean 4 automated synthesis" },
                        { step: "3", title: "Bitwise Close", desc: "Zero-hallucination signoff" },
                      ].map((g) => (
                        <div key={g.step} className="bg-[#F8FAFE] p-4 rounded-xl border border-[#E2E8F0] text-center">
                          <div className="w-6 h-6 rounded-full bg-[#2563eb] text-white font-mono text-xs font-bold mx-auto mb-2 flex items-center justify-center">
                            {g.step}
                          </div>
                          <div className="font-heading font-bold text-xs text-[#0F1B2D]">{g.title}</div>
                          <div className="font-body text-[11px] text-[#64748B] mt-1">{g.desc}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {s.mockup === "voice" && (
                    <div className="w-full flex flex-col items-center justify-center text-center p-4">
                      <div className="font-body text-sm font-semibold text-[#0F1B2D] mb-4">
                        Sub-18ms Indic Voice &amp; Reasoning Stream
                      </div>
                      <div className="flex items-center gap-1.5 h-12">
                        {[40, 75, 30, 90, 60, 100, 45, 80, 20, 95, 65, 85, 35, 70, 50].map((h, i) => (
                          <div
                            key={i}
                            className="w-1.5 bg-[#EA580C] rounded-full transition-all duration-300"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                      <div className="mt-4 font-mono text-xs text-emerald-600 font-semibold">
                        ● Live Latency: 14.8ms | Bitrate: 48kHz Uncompressed
                      </div>
                    </div>
                  )}

                  {s.mockup === "connectors" && (
                    <div className="w-full flex flex-wrap gap-2.5 items-center justify-center p-2">
                      {[
                        "PostgreSQL",
                        "Slack",
                        "GitHub",
                        "Linear",
                        "Kafka",
                        "Kubernetes",
                        "Redis",
                        "Elasticsearch",
                        "HuggingFace",
                      ].map((conn) => (
                        <span
                          key={conn}
                          className="px-3.5 py-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] font-heading font-semibold text-xs text-[#334155] shadow-2xs hover:border-[#2563eb] transition-colors cursor-default"
                        >
                          ✦ {conn}
                        </span>
                      ))}
                    </div>
                  )}

                  {s.mockup === "insights" && (
                    <div className="w-full font-mono text-xs space-y-3">
                      <div className="flex justify-between items-center text-[#64748B]">
                        <span>Deductive Confidence Score</span>
                        <span className="font-bold text-emerald-600">99.8%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#E2E8F0] overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: "99.8%" }} />
                      </div>
                      <div className="flex justify-between items-center text-[#64748B]">
                        <span>Air-Gapped Telemetry Check</span>
                        <span className="font-bold text-[#2563eb]">100% On-Premise</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#E2E8F0] overflow-hidden">
                        <div className="h-full bg-[#2563eb] rounded-full" style={{ width: "100%" }} />
                      </div>
                    </div>
                  )}
                </div>

                {/* 3 Checkmark Items at Bottom of Card (Matches Reference Screenshot 2026-10-25 111515.png -> 111529.png) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 pt-6 border-t border-[#E8EDF2]">
                  {s.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
