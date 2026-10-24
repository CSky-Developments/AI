import { FadeIn } from "@/components/FadeIn";
import { SuryaMandalaWatermark } from "@/components/TraditionalSymbols";

export function Story({ onReadManifesto }: { onReadManifesto?: () => void }) {
  return (
    <section id="story" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle traditional celestial watermark in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.04]">
        <SuryaMandalaWatermark size={480} color="#2563eb" />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFE] border border-[#E8EDF2] text-xs font-heading font-medium text-[#2563eb] mb-4">
            <span>✦</span>
            <span>॥ सत्यमेव जयते ॥ · Open Sky Principle</span>
            <span>✦</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#0F1B2D] mt-2 tracking-tight leading-tight">
            Clarity is a superpower.
          </h2>

          <div className="space-y-6 mt-8 font-body text-base md:text-lg text-[#5A6B7F] leading-relaxed">
            <p>
              Most tools built for intelligence do the opposite of what you need: they drown you in closed dashboards, complex graphs, and obscure technical jargon.
            </p>
            <p>
              We founded CSky with a simple conviction: technology should clear the view, not obstruct it. Like stepping out under an open sky, good analysis gives you perspective so you can decide and build with confidence.
            </p>
          </div>

          {/* Note: Divider border line removed per user request */}
          <div className="mt-12 pt-6 flex flex-col items-center">
            <p className="font-heading font-semibold text-lg md:text-xl text-[#0F1B2D]">
              No black boxes. No buzzwords. Just clarity.
            </p>
            {onReadManifesto && (
              <button
                onClick={onReadManifesto}
                className="mt-6 text-sm font-body font-medium text-[#2563eb] hover:text-[#1d4ed8] flex items-center gap-1.5 cursor-pointer"
              >
                Read our full Manifesto & Principles →
              </button>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
