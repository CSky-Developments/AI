"use client";

import { useState } from "react";

interface BenchmarkProps {
  modelName: string;
  primaryColor: string;
}

export function BenchmarkComparisonChart({ modelName, primaryColor }: BenchmarkProps) {
  const [activeBenchmark, setActiveBenchmark] = useState<string>("MMLU-Pro");

  const benchmarks = [
    {
      id: "MMLU-Pro",
      title: "MMLU-Pro",
      category: "Multi-Task Reasoning & Scientific Deduction",
      scores: [
        { model: `${modelName} (CSky)`, score: 88.4, isOurs: true },
        { model: "Llama 3.1 (405B)", score: 86.2, isOurs: false },
        { model: "Claude 3.5 Sonnet", score: 87.8, isOurs: false },
        { model: "GPT-4o", score: 86.9, isOurs: false },
      ],
    },
    {
      id: "HumanEval",
      title: "HumanEval",
      category: "Algorithmic Code Generation & Formal Verification",
      scores: [
        { model: `${modelName} (CSky)`, score: 92.6, isOurs: true },
        { model: "Llama 3.1 (405B)", score: 89.0, isOurs: false },
        { model: "Claude 3.5 Sonnet", score: 92.0, isOurs: false },
        { model: "GPT-4o", score: 90.2, isOurs: false },
      ],
    },
    {
      id: "MATH-500",
      title: "MATH-500",
      category: "Competition Mathematics & Multi-Step Proofs",
      scores: [
        { model: `${modelName} (CSky)`, score: 78.9, isOurs: true },
        { model: "Llama 3.1 (405B)", score: 73.8, isOurs: false },
        { model: "Claude 3.5 Sonnet", score: 78.3, isOurs: false },
        { model: "GPT-4o", score: 76.6, isOurs: false },
      ],
    },
    {
      id: "GSM8K",
      title: "GSM8K",
      category: "Grade School Math & Exact Chain-of-Thought",
      scores: [
        { model: `${modelName} (CSky)`, score: 96.8, isOurs: true },
        { model: "Llama 3.1 (405B)", score: 96.0, isOurs: false },
        { model: "Claude 3.5 Sonnet", score: 96.4, isOurs: false },
        { model: "GPT-4o", score: 95.8, isOurs: false },
      ],
    },
  ];

  const current = benchmarks.find((b) => b.id === activeBenchmark) || benchmarks[0];

  return (
    <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-[#E8EDF2] shadow-sm relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFE] border border-[#E8EDF2] text-xs font-heading font-medium mb-3"
            style={{ color: primaryColor }}
          >
            <span>✦</span>
            <span>॥ तुलनात्मक विश्लेषण ॥ · Frontier Performance</span>
            <span>✦</span>
          </div>
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-[#0F1B2D]">
            Rigorous Benchmark Evaluation
          </h3>
          <p className="font-body text-sm text-[#5A6B7F] mt-1">
            Independent evaluations run with greedy decoding and verified test harnesses
          </p>
        </div>

        {/* Benchmark selector pills */}
        <div className="flex flex-wrap gap-2">
          {benchmarks.map((b) => (
            <button
              key={b.id}
              onClick={() => setActiveBenchmark(b.id)}
              className={`px-4 py-2 rounded-full text-xs font-heading font-medium transition-all duration-200 cursor-pointer ${
                activeBenchmark === b.id
                  ? "bg-[#0F1B2D] text-white shadow-xs"
                  : "bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]"
              }`}
            >
              {b.title}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Bar Comparison Chart */}
      <div className="bg-[#F8FAFE] rounded-2xl p-6 sm:p-8 border border-[#E8EDF2]">
        <div className="text-xs font-heading font-semibold text-[#64748B] uppercase tracking-wider mb-6">
          {current.category} · Score (0–100%)
        </div>

        <div className="space-y-5">
          {current.scores.map((s) => {
            return (
              <div key={s.model} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs sm:text-sm font-body">
                  <span className={`font-medium ${s.isOurs ? "text-[#0F1B2D] font-bold" : "text-[#475569]"}`}>
                    {s.model}
                  </span>
                  <span className="font-mono font-bold" style={{ color: s.isOurs ? primaryColor : "#475569" }}>
                    {s.score}%
                  </span>
                </div>

                {/* Animated visual progress track */}
                <div className="h-3.5 w-full bg-white rounded-full overflow-hidden p-0.5 border border-[#E2E8F0]">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${s.score}%`,
                      background: s.isOurs
                        ? primaryColor
                        : "linear-gradient(90deg, #94A3B8, #64748B)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4 text-xs font-body text-[#64748B]">
          <span>Evaluated on official test sets with zero contamination.</span>
          <span className="font-medium text-[#0F1B2D]">Weights published with audit scripts</span>
        </div>
      </div>
    </div>
  );
}
