"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";

interface ArchitectureProps {
  modelId: string;
  modelName: string;
  primaryColor: string;
  lightColor: string;
}

export function ModelArchitectureDiagram({
  modelId,
  modelName,
  primaryColor,
  lightColor,
}: ArchitectureProps) {
  const [activeLayer, setActiveLayer] = useState<number>(1);

  const layers = [
    {
      id: 0,
      title: "Context & Input Embedding",
      subtitle: "200k Native Token Window & RoPE",
      desc: "Rotary Positional Embeddings (RoPE) optimized for infinite-horizon cross-document retrieval with zero positional decay.",
      spec: "4096 Embedding Dim · 128k Vocab",
    },
    {
      id: 1,
      title: "Multi-Head Latent Attention",
      subtitle: "Grouped Query Attention (GQA)",
      desc: "8:1 KV-cache compression enables massive concurrent inference on consumer hardware with sub-15ms first-token latency.",
      spec: "64 Query Heads · 8 KV Heads · FlashAttention-3",
    },
    {
      id: 2,
      title: "SwiGLU Reasoning Engine",
      subtitle: "Gated Feed-Forward Networks",
      desc: "Multi-step chain-of-thought reasoning pathways dynamically routing activations to preserve mathematical and logic invariants.",
      spec: "14,336 Hidden Dim · Non-linear gating",
    },
    {
      id: 3,
      title: "Native FP8 / Int4 Quantization",
      subtitle: "Zero-Loss Auditable Weights",
      desc: "Pre-calibrated symmetric block quantization allows running full-precision weights in half the standard VRAM footprint.",
      spec: "FP8 E4M3 · INT4 AWQ · GGUF Mirrors",
    },
  ];

  return (
    <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-[#E8EDF2] shadow-sm relative overflow-hidden">
      {/* Background architectural grid watermark */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(${primaryColor} 1.5px, transparent 1.5px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFE] border border-[#E8EDF2] text-xs font-heading font-medium mb-3" style={{ color: primaryColor }}>
              <span>✦</span>
              <span>॥ यंत्र रचना ॥ · Architecture Topology</span>
              <span>✦</span>
            </div>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-[#0F1B2D]">
              {modelName} Neural Architecture
            </h3>
            <p className="font-body text-sm text-[#5A6B7F] mt-1">
              Interactive structural layers & tensor pathway breakdown
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-body font-medium text-[#64748B] bg-[#F8FAFE] px-4 py-2 rounded-full border border-[#E8EDF2]">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: primaryColor }} />
            <span>Open Weights · Auditable Graph</span>
          </div>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Schematic Diagram (Left / Center) */}
          <div className="lg:col-span-7 bg-[#F8FAFE] rounded-2xl p-6 sm:p-8 border border-[#E8EDF2] relative">
            <div className="space-y-4">
              {layers.map((layer, idx) => {
                const isActive = activeLayer === idx;
                return (
                  <button
                    key={layer.id}
                    onClick={() => setActiveLayer(idx)}
                    className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center justify-between cursor-pointer ${
                      isActive
                        ? "bg-white shadow-md border-2"
                        : "bg-white/60 hover:bg-white border border-[#E8EDF2] shadow-2xs opacity-80"
                    }`}
                    style={{
                      borderColor: isActive ? primaryColor : undefined,
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center font-heading font-bold text-sm shrink-0 transition-colors"
                        style={{
                          background: isActive ? primaryColor : "#F1F5F9",
                          color: isActive ? "#FFFFFF" : "#475569",
                        }}
                      >
                        0{idx + 1}
                      </div>
                      <div>
                        <div className="font-heading font-semibold text-base text-[#0F1B2D]">
                          {layer.title}
                        </div>
                        <div className="font-body text-xs text-[#64748B] mt-0.5">
                          {layer.subtitle}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="hidden sm:inline-block font-mono text-[11px] px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#475569]">
                        {layer.spec.split("·")[0]}
                      </span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={isActive ? primaryColor : "#94A3B8"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-200 ${isActive ? "rotate-90" : ""}`}
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Connecting visual data bus arrow */}
            <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-[#64748B]">
              <span>Token In</span>
              <span className="text-[#3b82f6]">──────▶</span>
              <span className="font-semibold text-[#0F1B2D]">200k Unified Context</span>
              <span className="text-[#3b82f6]">──────▶</span>
              <span>Output Logits</span>
            </div>
          </div>

          {/* Deep-Dive Spec Card (Right) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#E8EDF2] shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="text-xs font-heading font-semibold uppercase tracking-wider mb-2" style={{ color: primaryColor }}>
                Layer 0{activeLayer + 1} Specifications
              </div>
              <h4 className="font-heading font-bold text-xl text-[#0F1B2D]">
                {layers[activeLayer].title}
              </h4>
              <p className="font-body text-sm text-[#475569] mt-3 leading-relaxed">
                {layers[activeLayer].desc}
              </p>

              <div className="mt-6 p-4 rounded-xl bg-[#F8FAFE] border border-[#E8EDF2]">
                <div className="text-xs font-heading font-semibold text-[#64748B] uppercase tracking-wider">
                  Hardware & Parameter Parameters
                </div>
                <div className="font-mono text-xs sm:text-sm text-[#0F1B2D] mt-1.5 font-medium">
                  {layers[activeLayer].spec}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-body text-[#64748B]">
              <span>Architecture Type:</span>
              <span className="font-semibold text-[#0F1B2D]">Dense Transformer Autoregressive</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
