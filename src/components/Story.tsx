import { FadeIn } from "@/components/FadeIn";
import { SuryaMandalaWatermark } from "@/components/TraditionalSymbols";

export function Story({ onReadManifesto }: { onReadManifesto?: () => void }) {
  const pillars = [
    {
      sanskrit: "॥ सत्यम् ॥",
      title: "Radical Weight Transparency",
      description: "Full weights, tokenizer configs, and training curricula published under open licenses. Zero closed gates or silent API drift.",
      tag: "Audit Ready"
    },
    {
      sanskrit: "॥ ज्ञानम् ॥",
      title: "Scientific Deductive Depth",
      description: "Trained on vetted mathematical corpora, formal theorem proofs, and multi-lingual semantics with verifiable citations.",
      tag: "Formal Logic"
    },
    {
      sanskrit: "॥ स्वातन्त्र्यम् ॥",
      title: "Sovereign Infrastructure",
      description: "Deploy on your private VPC, edge clusters, or air-gapped on-premise hardware without outbound telemetry dependencies.",
      tag: "Air-Gapped"
    }
  ];

  return (
    <section id="story" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle traditional celestial watermark in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.035]">
        <SuryaMandalaWatermark size={560} color="#2563eb" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8FAFE] border border-[#E8EDF2] text-xs font-heading font-medium text-[#2563eb] mb-4 shadow-2xs">
              <span>✦</span>
              <span>॥ सत्यमेव जयते ॥ · Open Sky Principle</span>
              <span>✦</span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#0F1B2D] mt-2 tracking-tight leading-tight">
              Clarity is a superpower.
            </h2>

            <div className="space-y-6 mt-6 font-body text-base md:text-lg text-[#5A6B7F] leading-relaxed">
              <p>
                Most tools built for intelligence do the opposite of what you need: they drown you in closed dashboards, complex graphs, and obscure technical jargon.
              </p>
              <p>
                We founded CSky with a simple conviction: technology should clear the view, not obstruct it. Like stepping out under an open sky, good analysis gives you perspective so you can decide and build with confidence.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* 3 Pillars of Open Sky Clarity */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {pillars.map((pillar, idx) => (
            <FadeIn key={pillar.title} delay={idx * 100}>
              <div className="card-premium p-8 rounded-3xl bg-[#F8FAFE]/60 border border-[#E8EDF2] hover:bg-white transition-all h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-medium text-[#2563eb] bg-[#EFF6FF] px-2.5 py-1 rounded-md">
                      {pillar.sanskrit}
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider bg-white border border-[#E2E8F0] px-2 py-0.5 rounded-full">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#0F1B2D] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-sm text-[#5A6B7F] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-14 text-center">
          <FadeIn delay={300}>
            <p className="font-heading font-semibold text-lg md:text-xl text-[#0F1B2D]">
              No black boxes. No buzzwords. Just clarity.
            </p>
            {onReadManifesto && (
              <button
                onClick={onReadManifesto}
                className="mt-5 inline-flex items-center gap-2 text-sm font-heading font-semibold text-[#2563eb] hover:text-[#1d4ed8] hover:gap-3 transition-all cursor-pointer"
              >
                <span>Read our full Manifesto & Principles</span>
                <span>→</span>
              </button>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
