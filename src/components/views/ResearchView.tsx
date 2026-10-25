"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedBarsBackground } from "@/components/AnimatedBarsBackground";

interface ResearchViewProps {
  onNavigate: (tab: string) => void;
}

export function ResearchView({ onNavigate }: ResearchViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [copiedBibtex, setCopiedBibtex] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Publications" },
    { id: "attention", label: "Attention & Scalability" },
    { id: "reasoning", label: "Formal Mathematics & Logic" },
    { id: "multimodal", label: "Spatial Multimodal" },
    { id: "alignment", label: "Constitutional Safety" },
  ];

  const papers = [
    {
      id: "paper-1",
      category: "attention",
      categoryLabel: "Attention & Scalability",
      date: "October 2026",
      arxiv: "arXiv:2610.14920",
      title: "Clarity-Driven Dynamic Sparsification in 200k Context Windows",
      authors: "CSky Theoretical Research Group · Bengaluru & Zurich",
      abstract:
        "We demonstrate an attention formulation that sparsifies redundant token activations during long sequence decoding. By isolating semantic manifold attractors, Akash 405B sustains 200k context windows with 38% less KV-cache memory and zero loss in recall benchmarks.",
      metric: "38% KV-Cache Memory Reduction",
      bibtex: `@article{csky2026clarity,
  title={Clarity-Driven Dynamic Sparsification in 200k Context Windows},
  author={CSky Theoretical Research Group},
  journal={arXiv preprint arXiv:2610.14920},
  year={2026}
}`,
    },
    {
      id: "paper-2",
      category: "reasoning",
      categoryLabel: "Formal Mathematics & Logic",
      date: "September 2026",
      arxiv: "arXiv:2609.08312",
      title: "Verifiable Step-by-Step Rationale in Distilled Small Language Models",
      authors: "Arsh Pathan, et al. · CSky Mathematical Foundation",
      abstract:
        "Training lightweight 14B parameter models (Soma) to synthesize formal Lean 4 theorem definitions and audit step-by-step chain-of-thought traces. Empirical evaluation shows 94.2% accuracy on MATH-500 with zero reliance on opaque reinforcement learning shortcuts.",
      metric: "94.2% MATH-500 Formal Verification",
      bibtex: `@article{csky2026rationale,
  title={Verifiable Step-by-Step Rationale in Distilled Small Language Models},
  author={Pathan, Arsh and CSky Mathematical Foundation},
  journal={arXiv preprint arXiv:2609.08312},
  year={2026}
}`,
    },
    {
      id: "paper-3",
      category: "multimodal",
      categoryLabel: "Spatial Multimodal",
      date: "August 2026",
      arxiv: "arXiv:2608.12501",
      title: "Prithvi: Grounded 3D Spatial Geometry and 4K Blueprint Understanding",
      authors: "CSky Vision & Spatial Intelligence Team",
      abstract:
        "We introduce Prithvi 32B, a grounded multimodal foundation model capable of processing high-resolution visual blueprints, technical schematics, and coordinate point clouds without resolution downsampling artifacts.",
      metric: "Native 4K Document Spatial Grounding",
      bibtex: `@article{csky2026prithvi,
  title={Prithvi: Grounded 3D Spatial Geometry and 4K Blueprint Understanding},
  author={CSky Vision Team},
  journal={arXiv preprint arXiv:2608.12501},
  year={2026}
}`,
    },
    {
      id: "paper-4",
      category: "alignment",
      categoryLabel: "Constitutional Safety",
      date: "July 2026",
      arxiv: "arXiv:2607.05433",
      title: "Constitutional Auditing for Open-Weight Models: Beyond Red-Teaming Theater",
      authors: "CSky Open Governance & Ethics Council",
      abstract:
        "How transparent, downloadable weights enable reproducible third-party safety bounds verification. We prove that closed API filters create false senses of alignment, while open-weight mathematical guarantees allow deterministic auditing.",
      metric: "100% Deterministic Security Auditing",
      bibtex: `@article{csky2026constitutional,
  title={Constitutional Auditing for Open-Weight Models},
  author={CSky Open Governance Council},
  journal={arXiv preprint arXiv:2607.05433},
  year={2026}
}`,
    },
    {
      id: "paper-5",
      category: "attention",
      categoryLabel: "Attention & Scalability",
      date: "June 2026",
      arxiv: "arXiv:2606.02194",
      title: "Lossless FP8 Block Quantization for Frontier 405B Reasoning Models",
      authors: "CSky Systems & High-Performance Kernels Group",
      abstract:
        "Custom CUDA and Triton kernels enabling native FP8 block quantization across Akash 405B with sub-1% perplexity difference from unquantized BF16 baselines, allowing deployment on 4x H100 clusters.",
      metric: "Sub-1% FP8 Perplexity Degradation",
      bibtex: `@article{csky2026fp8kernels,
  title={Lossless FP8 Block Quantization for Frontier 405B Reasoning Models},
  author={CSky Systems Group},
  journal={arXiv preprint arXiv:2606.02194},
  year={2026}
}`,
    },
    {
      id: "paper-6",
      category: "reasoning",
      categoryLabel: "Formal Mathematics & Logic",
      date: "May 2026",
      arxiv: "arXiv:2605.11029",
      title: "Agni: Compiler-Verified Code Synthesis with Formal Grammar Trees",
      authors: "CSky Autonomous Systems Lab",
      abstract:
        "Integrating Abstract Syntax Tree (AST) grammar checks directly into the autoregressive speculative decoding loop. Guarantees 0% syntax hallucination in Rust, Go, and TypeScript compilation targets.",
      metric: "0% Syntax Compilation Hallucination",
      bibtex: `@article{csky2026agni,
  title={Agni: Compiler-Verified Code Synthesis with Formal Grammar Trees},
  author={CSky Autonomous Systems Lab},
  journal={arXiv preprint arXiv:2605.11029},
  year={2026}
}`,
    },
  ];

  const filteredPapers =
    activeCategory === "all"
      ? papers
      : papers.filter((p) => p.category === activeCategory);

  const handleCopyBibtex = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBibtex(id);
    setTimeout(() => setCopiedBibtex(null), 2500);
  };

  return (
    <div className="bg-[#F8FAFE] min-h-screen text-[#0F1B2D]">
      {/* 1. HERO (Full viewport, content below fold) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28 pb-20">
        <AnimatedBarsBackground theme="models" />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/75 backdrop-blur-md border border-[#E2E8F0] shadow-2xs mb-6 text-xs font-heading font-medium text-[#2563eb]">
            <span>✦</span>
            <span>॥ शोध मण्डल ॥ · Open Research & Publications</span>
            <span>✦</span>
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-[#0F1B2D] leading-[1.08]">
            Frontier intelligence verified by formal proof.
          </h1>

          <p className="font-body text-lg sm:text-xl text-[#334155] mt-5 max-w-2xl mx-auto leading-relaxed">
            We publish our architectures, evaluation benchmarks, and loss curves openly. Because science advances through verification, not proprietary claims.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section className="max-w-6xl mx-auto px-6 pt-8 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 rounded-full text-xs font-heading font-medium transition-all cursor-pointer ${
                activeCategory === c.id
                  ? "bg-[#2563eb] text-white shadow-xs"
                  : "bg-white text-[#475569] border border-[#E2E8F0] hover:bg-[#F8FAFC]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. PAPERS LIST */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {filteredPapers.map((paper, idx) => (
            <FadeIn key={paper.id} delay={idx * 80}>
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#E8EDF2] shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#EFF6FF] text-[#2563eb] text-xs font-heading font-semibold">
                      {paper.categoryLabel}
                    </span>
                    <span className="font-mono text-xs text-[#94A3B8]">
                      {paper.arxiv}
                    </span>
                    <span className="text-xs text-[#64748B]">
                      {paper.date}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-heading font-medium border border-emerald-200/60 self-start md:self-auto">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {paper.metric}
                  </span>
                </div>

                <h2 className="font-heading font-bold text-2xl md:text-3xl text-[#0F1B2D] mt-4 leading-snug">
                  {paper.title}
                </h2>

                <p className="font-body text-xs text-[#64748B] mt-2 font-medium">
                  {paper.authors}
                </p>

                <p className="font-body text-[#475569] text-sm md:text-base mt-4 leading-relaxed max-w-4xl">
                  {paper.abstract}
                </p>

                <div className="mt-8 pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleCopyBibtex(paper.id, paper.bibtex)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-[#F1F5F9] text-xs font-body font-medium text-[#0F1B2D] transition-colors cursor-pointer"
                  >
                    {copiedBibtex === paper.id ? (
                      <>
                        <span className="text-emerald-600">✓</span>
                        <span>BibTeX Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <span>📋</span>
                        <span>Copy BibTeX Citation</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onNavigate("models")}
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-[#2563eb] hover:underline cursor-pointer"
                  >
                    View Associated Model Weights →
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4. REPRODUCIBILITY EVALUATION SUITE CALLOUT */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <FadeIn delay={100}>
          <div className="bg-[#0F1B2D] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
            <div className="max-w-2xl relative z-10">
              <span className="px-3 py-1 rounded-full bg-white/10 text-[#60a5fa] text-xs font-heading font-semibold uppercase tracking-wider">
                Verifiable Evaluation
              </span>
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mt-4">
                Reproduce all benchmark evaluations locally
              </h3>
              <p className="font-body text-xs md:text-sm text-white/70 mt-3 leading-relaxed">
                Run our open-source evaluation suite in an isolated Docker container. Verifies MMLU-Pro, MATH-500, HumanEval, and GSM8K against any downloaded model checkpoint.
              </p>

              <div className="mt-6 bg-black/40 rounded-xl p-4 border border-white/10 font-mono text-xs text-[#93c5fd] flex items-center justify-between gap-4 overflow-x-auto">
                <code>docker run --gpus all csky/eval-suite:latest --model akash-405b-fp8</code>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
