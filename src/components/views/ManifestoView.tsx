import { FadeIn } from "@/components/FadeIn";
import { AnimatedBarsBackground } from "@/components/AnimatedBarsBackground";

export function ManifestoView({ onGetAccess }: { onGetAccess: () => void }) {
  const principles = [
    {
      num: "01",
      title: "Clarity over complexity",
      body: "If a system cannot explain its conclusions in terms a human can evaluate in sixty seconds, it is not an aid — it is a hazard. We optimize for clear reasoning traces, not inscrutable black boxes.",
    },
    {
      num: "02",
      title: "Weights belong to the world",
      body: "Foundational intelligence should not be sequestered behind proprietary API choke points. When research is open-weight, safety is auditable, sovereignty is preserved, and innovation compounds globally.",
    },
    {
      num: "03",
      title: "Tools for thinkers, not replacements",
      body: "We do not believe in replacing human agency with algorithmic fiat. Our models are built to illuminate options, surface edge cases, and amplify sound judgment — leaving decisions where they belong.",
    },
    {
      num: "04",
      title: "Quiet, calm technology",
      body: "Great tools disappear into the background. They don't demand your attention with flashing dashboards or alarmist alerts. They give you the clarity of an open sky so you can do your life's work.",
    },
  ];

  return (
    <div className="bg-[#F8FAFE] min-h-screen">
      {/* 1. GSAP-ANIMATED FLOWING BARS HERO (Full viewport, essay below the fold) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28 pb-20">
        <AnimatedBarsBackground theme="manifesto" />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-md border border-[#E2E8F0] shadow-xs mb-6 text-xs font-heading font-medium text-[#4f46e5]">
            <span>✦</span>
            <span>॥ सत्यं शिवं सुन्दरम् ॥ · The CSky Manifesto</span>
            <span>✦</span>
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-[#0F1B2D] leading-[1.08]">
            Under an Open Sky
          </h1>

          <p className="font-body text-lg sm:text-xl text-[#334155] mt-5 max-w-2xl mx-auto leading-relaxed">
            A thesis on why intelligence must be clear, open, and human-led.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Narrative Essay */}
        <FadeIn delay={100}>
          <div className="mt-16 space-y-6 font-body text-base md:text-lg text-[#0F1B2D]/80 leading-relaxed pt-8">
            <p>
              Every technological epoch begins with promises of liberation, only to settle into walls and gatekeepers. The current trajectory of artificial intelligence is no different: closed APIs, hidden training methodologies, and systems intentionally designed to be mysterious.
            </p>
            <p>
              When a tool is opaque, you cannot trust its foundation. You cannot verify whether an outcome is the product of sound deduction or algorithmic bias. You become a passive consumer rather than an architect of your own work.
            </p>
            <div className="my-10 p-8 rounded-2xl bg-[#F8FAFE] border-l-4 border-[#3b82f6]">
              <p className="font-heading font-semibold text-lg md:text-xl text-[#0F1B2D] italic">
                “We chose the name CSky because clarity is like clear weather: it doesn't give you answers to life, but it lets you see all the way to the horizon.”
              </p>
            </div>
            <p>
              We founded CSky to build an alternative path. We believe that open weights, lightweight architectures, and human-comprehensible outputs are not just technical preferences — they are moral imperatives for the digital age.
            </p>
          </div>
        </FadeIn>

        {/* The 4 Principles */}
        <div className="mt-20 pt-12">
          <FadeIn>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-[#0F1B2D] text-center mb-12">
              Our Core Principles
            </h2>
          </FadeIn>

          <div className="space-y-8">
            {principles.map((principle, index) => (
              <FadeIn key={principle.num} delay={index * 100}>
                <div className="card-premium p-8 rounded-2xl bg-white border border-[#E8EDF2] flex flex-col md:flex-row gap-6 items-start shadow-xs hover:shadow-md transition-all">
                  <span className="font-heading font-bold text-2xl text-[#3b82f6] shrink-0">
                    {principle.num}
                  </span>
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-[#0F1B2D]">
                      {principle.title}
                    </h3>
                    <p className="font-body text-[#5A6B7F] mt-2 leading-relaxed text-sm md:text-base">
                      {principle.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* CTA */}
        <FadeIn delay={200}>
          <div className="mt-20 text-center p-12 rounded-3xl bg-[#dbeafe]/60 border border-[#3b82f6]/30">
            <h3 className="font-heading font-bold text-2xl text-[#0F1B2D]">
              Build with us in the open.
            </h3>
            <p className="font-body text-sm md:text-base text-[#5A6B7F] mt-2 max-w-md mx-auto">
              Our research papers, weights, and pilot APIs are available now.
            </p>
            <button
              onClick={onGetAccess}
              className="mt-6 bg-[#3b82f6] text-white font-body font-medium text-sm rounded-full px-8 py-3.5 hover:bg-[#1e40af] transition-all shadow-sm hover:shadow"
            >
              Get early access
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
