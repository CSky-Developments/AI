"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";

interface DemoProps {
  modelName: string;
  primaryColor: string;
}

export function InteractiveReasoningDemo({ modelName, primaryColor }: DemoProps) {
  const [selectedTask, setSelectedTask] = useState<number>(0);

  const demoTasks = [
    {
      id: 0,
      label: "Scientific Deduction",
      prompt: "Determine the thermodynamic feasibility of catalytic methane pyrolysis at 950K.",
      thinking: [
        {
          step: "Decompose reaction thermodynamics",
          detail: "CH₄(g) → C(s) + 2H₂(g). Standard enthalpy ΔH° = +74.8 kJ/mol (endothermic).",
        },
        {
          step: "Evaluate Gibbs Free Energy ΔG = ΔH - TΔS",
          detail: "Entropy ΔS° = +80.7 J/(mol·K). At T = 950K: ΔG = 74,800 - (950 × 80.7) = -1,865 J/mol.",
        },
        {
          step: "Synthesize deduction conclusion",
          detail: "Since ΔG < 0, the reaction is thermodynamically spontaneous at 950K. Nickel-copper matrix catalysts bypass kinetic coking.",
        },
      ],
      output:
        "Thermodynamically feasible. At 950K, ΔG = -1.86 kJ/mol (spontaneous equilibrium shifted toward pure hydrogen generation with solid carbon capture).",
    },
    {
      id: 1,
      label: "Distributed Architecture",
      prompt: "Synthesize a zero-lock, consensus-free distributed ledger architecture for low-latency IoT telematics.",
      thinking: [
        {
          step: "Identify concurrent consistency bottleneck",
          detail: "Traditional Raft/Paxos introduces 2-RTT roundtrip latency overhead intolerable for 10ms telematics bursts.",
        },
        {
          step: "Formulate conflict-free replicated data types (CRDTs)",
          detail: "Employ State-based PN-Counters with Lamport physical clocks and vectorized causal dependencies.",
        },
        {
          step: "Construct immutable append-only hash chains",
          detail: "Local edge nodes commit with monotonic causal merge proofs, verified asynchronously across regional cluster nodes.",
        },
      ],
      output:
        "Architecture configured: Causal CRDT delta-state gossip layer guarantees strong eventual consistency at sub-4ms local commit latency.",
    },
    {
      id: 2,
      label: "Formal Logic Verification",
      prompt: "Verify whether the statement (P → Q) ∧ (¬Q) entails ¬P using natural deduction.",
      thinking: [
        {
          step: "Assume premises and goal",
          detail: "Premise 1: P → Q. Premise 2: ¬Q. Goal: ¬P.",
        },
        {
          step: "Proof by contradiction (Reductio ad Absurdum)",
          detail: "Hypothesize [P] true. Apply Modus Ponens with Premise 1 to derive Q. Conjunction with Premise 2 yields (Q ∧ ¬Q) contradiction.",
        },
        {
          step: "Discharge assumption",
          detail: "Therefore, the hypothesis [P] must be false, concluding ¬P with zero logical gaps.",
        },
      ],
      output:
        "Q.E.D. The implication holds strictly under classical propositional calculus (Modus Tollens via natural deduction).",
    },
  ];

  const current = demoTasks[selectedTask];

  return (
    <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-[#E8EDF2] shadow-sm relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFE] border border-[#E8EDF2] text-xs font-heading font-medium mb-3"
            style={{ color: primaryColor }}
          >
            <span>✦</span>
            <span>॥ विचार प्रवाह ॥ · Live Reasoning Trace Demo</span>
            <span>✦</span>
          </div>
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-[#0F1B2D]">
            Transparent Chain-of-Thought
          </h3>
          <p className="font-body text-sm text-[#5A6B7F] mt-1">
            Observe {modelName}&apos;s auditable multi-step deduction before generating answers
          </p>
        </div>

        {/* Task selector tabs */}
        <div className="flex flex-wrap gap-2">
          {demoTasks.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setSelectedTask(idx)}
              className={`px-4 py-2 rounded-full text-xs font-heading font-medium transition-all duration-200 cursor-pointer ${
                selectedTask === idx
                  ? "bg-[#0F1B2D] text-white shadow-xs"
                  : "bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Visual Trace Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Input Prompt & Deduction Steps */}
        <div className="lg:col-span-7 space-y-4">
          {/* Prompt card */}
          <div className="p-5 rounded-2xl bg-[#F8FAFE] border border-[#E8EDF2]">
            <div className="text-[11px] font-heading font-semibold uppercase tracking-wider text-[#64748B] mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
              Input Challenge
            </div>
            <div className="font-body text-sm sm:text-base font-medium text-[#0F1B2D]">
              &ldquo;{current.prompt}&rdquo;
            </div>
          </div>

          {/* Reasoning Steps */}
          <div className="space-y-3 pt-2">
            <div className="text-[11px] font-heading font-semibold uppercase tracking-wider text-[#64748B] flex items-center justify-between">
              <span>Auditable Reasoning Tokens (Chain-of-Thought)</span>
              <span className="text-[#10B981] font-mono text-[10px] bg-[#ECFDF5] px-2 py-0.5 rounded">
                Verified Invariant
              </span>
            </div>

            {current.thinking.map((th, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white border border-[#E8EDF2] shadow-2xs hover:border-[#CBD5E1] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-6 h-6 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0"
                    style={{ background: `${primaryColor}15`, color: primaryColor }}
                  >
                    {i + 1}
                  </span>
                  <div className="font-heading font-semibold text-xs sm:text-sm text-[#0F1B2D]">
                    {th.step}
                  </div>
                </div>
                <div className="font-mono text-xs text-[#475569] mt-2 pl-9 leading-relaxed">
                  {th.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Final Synthesized Verified Output */}
        <div className="lg:col-span-5 bg-[#0F1B2D] text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between h-full min-h-[340px]">
          {/* Ambient background glow */}
          <div
            className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{ background: primaryColor }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between text-xs text-white/60 mb-6">
              <span className="font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Verified Conclusion
              </span>
              <span className="font-heading text-[11px] px-2.5 py-1 rounded-full bg-white/10 text-white/90">
                Confidence 99.4%
              </span>
            </div>

            <div className="font-body text-sm sm:text-base text-white/95 leading-relaxed">
              {current.output}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50 font-body relative z-10">
            <span>Latent Reasoning: Complete</span>
            <span className="font-mono text-emerald-400">Zero Hallucination Proof</span>
          </div>
        </div>
      </div>
    </div>
  );
}
