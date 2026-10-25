"use client";

import { useState } from "react";
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

  const featuredPaper = {
    id: "featured-1",
    category: "attention",
    categoryLabel: "Flagship Breakthrough",
    date: "October 2026",
    arxiv: "arXiv:2610.14920",
    title: "Clarity-Driven Dynamic Sparsification in 200k Context Windows",
    authors: "CSky Theoretical Research Group · Bengaluru & Zurich",
    abstract:
      "We demonstrate an attention formulation that sparsifies redundant token activations during long sequence decoding. By isolating semantic manifold attractors, Akash 405B sustains 200k context windows with 38% less KV-cache memory and zero loss in Needle-In-A-Haystack recall benchmarks.",
    metric: "38% Memory Reduction",
    bibtex: `@article{csky2026clarity,
  title={Clarity-Driven Dynamic Sparsification in 200k Context Windows},
  author={CSky Theoretical Research Group},
  journal={arXiv preprint arXiv:2610.14920},
  year={2026}
}`,
  };

  const papers = [
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
      metric: "94.2% MATH-500 Verified",
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
      title: "Prithvi: Grounded 3D Spatial Geometry & 4K Blueprint Understanding",
      authors: "CSky Vision & Spatial Intelligence Team",
      abstract:
        "We introduce Prithvi 32B, a grounded multimodal foundation model capable of processing high-resolution visual blueprints, technical schematics, and coordinate point clouds without resolution downsampling artifacts.",
      metric: "Native 4K Spatial Ingest",
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
      metric: "100% Deterministic Safety",
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
      arxiv: "arXiv:2606.01944",
      title: "Sub-Quadratic Attention Kernels on FP8 Commodity Hardware",
      authors: "CSky Distributed Systems & Kernel Group",
      abstract:
        "Custom Triton kernels achieving 91% of peak theoretical TFLOPS on consumer RTX 4090 and datacenter H100 SXM5 GPUs using fused memory blocks.",
      metric: "91% Theoretical TFLOPS",
      bibtex: `@article{csky2026kernels,
  title={Sub-Quadratic Attention Kernels on FP8 Commodity Hardware},
  author={CSky Kernel Group},
  journal={arXiv preprint arXiv:2606.01944},
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
    <div className="bg-[#F8FAFE] min-h-screen relative overflow-hidden text-[#0F1B2D]">
      {/* Universal Page Background Sacred Geometry in Gray */}
      <PageBackgroundSymbols theme="research" />

      {/* 1. HERO */}
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

      {/* 2. FEATURED FLAGSHIP RESEARCH CARD (Top-Visual Banner like Reference 111309.png) */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <FadeIn>
          <div className="card-premium group relative overflow-hidden rounded-[36px] bg-white border border-[#E8EDF2] shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Visual Banner Canvas */}
              <div className="lg:col-span-5 h-64 lg:h-full min-h-[280px] bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#60A5FA] p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-64 h-64 rounded-full border-2 border-white animate-pulse" />
                </div>

                <div className="flex items-center justify-between relative z-10">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-heading font-bold text-[#1E40AF]">
                    {featuredPaper.categoryLabel}
                  </span>
                  <span className="font-mono text-xs text-white/80">
                    {featuredPaper.arxiv}
                  </span>
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center mb-4">
                    <AkashSymbol size={32} color="#FFFFFF" />
                  </div>
                  <div className="text-white font-heading font-bold text-2xl tracking-tight">
                    {featuredPaper.metric}
                  </div>
                  <div className="text-white/80 font-body text-xs mt-1">
                    Validated on 200k Needle-In-A-Haystack
                  </div>
                </div>
              </div>

              {/* Right Column: Title, Authors, Abstract & BibTeX */}
              <div className="lg:col-span-7 p-8 lg:py-10 lg:pr-10">
                <div className="flex items-center justify-between text-xs text-[#64748B]">
                  <span className="font-heading font-semibold text-[#2563EB] uppercase tracking-wider">
                    Peer-Reviewed Preprint
                  </span>
                  <span>{featuredPaper.date}</span>
                </div>

                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#0F1B2D] mt-3 leading-snug">
                  {featuredPaper.title}
                </h2>

                <p className="font-body text-xs text-[#64748B] mt-2 font-medium">
                  {featuredPaper.authors}
                </p>

                <p className="font-body text-sm text-[#475569] mt-4 leading-relaxed">
                  {featuredPaper.abstract}
                </p>

                <div className="mt-8 pt-4 border-t border-[#F1F5F9] flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleCopyBibtex(featuredPaper.id, featuredPaper.bibtex)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-[#F1F5F9] text-xs font-body font-medium text-[#0F1B2D] transition-colors cursor-pointer shadow-2xs"
                  >
                    {copiedBibtex === featuredPaper.id ? "✓ BibTeX Copied" : "Copy BibTeX Citation"}
                  </button>

                  <button
                    onClick={() => onNavigate("csky-ultra")}
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-[#2563eb] hover:underline cursor-pointer"
                  >
                    <span>View Akash 405B Architecture</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 3. CATEGORY FILTER TABS */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-4 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 rounded-full text-xs font-heading font-medium transition-all cursor-pointer ${
                activeCategory === c.id
                  ? "bg-[#2563eb] text-white shadow-xs"
                  : "bg-white text-[#475569] border border-[#E8EDF2] hover:bg-[#F8FAFC]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* 4. PAPERS LIST IN REFERENCE CARDS */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPapers.map((paper, idx) => (
            <FadeIn key={paper.id} delay={idx * 100}>
              <div className="card-premium group relative overflow-hidden rounded-[32px] bg-white p-8 border border-[#E8EDF2] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#EFF6FF] text-[#2563eb] font-heading font-semibold text-[11px] border border-blue-100">
                      {paper.categoryLabel}
                    </span>
                    <span className="font-mono text-xs text-[#94A3B8]">
                      {paper.arxiv}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-[#0F1B2D] mt-3 leading-snug group-hover:text-[#2563eb] transition-colors">
                    {paper.title}
                  </h3>

                  <div className="font-body text-xs text-[#64748B] mt-2 font-medium">
                    {paper.authors}
                  </div>

                  <p className="font-body text-sm text-[#5A6B7F] mt-3.5 leading-relaxed">
                    {paper.abstract}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-heading font-medium border border-emerald-200/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {paper.metric}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#F1F5F9] flex items-center justify-between gap-3">
                  <button
                    onClick={() => handleCopyBibtex(paper.id, paper.bibtex)}
                    className="text-xs font-body font-medium text-[#475569] hover:text-[#0F1B2D] cursor-pointer"
                  >
                    {copiedBibtex === paper.id ? "✓ BibTeX Copied" : "BibTeX"}
                  </button>

                  <button
                    onClick={() => onNavigate("models")}
                    className="font-heading text-xs font-semibold text-[#2563eb] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Weights</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 5. REPRODUCIBILITY EVALUATION SUITE CALLOUT */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <FadeIn delay={100}>
          <div className="card-premium group relative overflow-hidden bg-[#0F1B2D] text-white rounded-[32px] p-8 md:p-12 shadow-2xl">
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
