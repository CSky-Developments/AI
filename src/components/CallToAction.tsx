import { FadeIn } from "@/components/FadeIn";
import { LotusMandalaWatermark } from "@/components/TraditionalSymbols";

export function CallToAction({ onGetEarlyAccess }: { onGetEarlyAccess?: () => void }) {
  return (
    <section id="cta" className="py-24 md:py-32 bg-[#F8FAFE] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div
            className="rounded-3xl p-10 sm:p-14 md:p-20 text-center border border-[#E8EDF2] shadow-lg relative overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #EFF6FF 0%, #DBEAFE 100%)",
            }}
          >
            {/* Subtle traditional celestial lotus watermark in background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.06] transform scale-150">
              <LotusMandalaWatermark size={460} color="#2563eb" />
            </div>

            {/* Subtle light ambient glow */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/50 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#E2E8F0] shadow-xs mb-6 text-xs font-heading font-medium text-[#2563eb]">
                <span>✦</span>
                <span>॥ अनंत आकाश ॥ · Start Building Under an Open Sky</span>
                <span>✦</span>
              </div>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#0F1B2D] tracking-tight">
                Ready to see further?
              </h2>
              <p className="font-body text-base sm:text-lg text-[#475569] mt-4 max-w-xl mx-auto leading-relaxed">
                Join forward-thinking engineers and research labs currently running CSky open-weight foundation models.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() =>
                    onGetEarlyAccess
                      ? onGetEarlyAccess()
                      : window.location.assign("mailto:access@csky.ai")
                  }
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#2563eb] text-white font-body font-medium rounded-full px-9 py-4 hover:bg-[#1d4ed8] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                >
                  Get early access
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
