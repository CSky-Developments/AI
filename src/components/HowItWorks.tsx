import { FadeIn } from "@/components/FadeIn";
import {
  SangamYantraSymbol,
  DrishtiSymbol,
  KriyaChakraSymbol,
} from "@/components/TraditionalSymbols";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      sanskrit: "संगम · Connect",
      title: "Connect",
      description: "Link your existing tools and research pipelines in minutes. No complex setups or endless migrations.",
      icon: <SangamYantraSymbol size={26} color="#2563eb" />,
    },
    {
      num: "02",
      sanskrit: "अन्वेषण · Explore",
      title: "Explore",
      description: "Ask questions in plain language. Get concise, grounded reasoning traces instead of endless opaque dashboards.",
      icon: <DrishtiSymbol size={26} color="#2563eb" />,
    },
    {
      num: "03",
      sanskrit: "क्रिया · Act",
      title: "Act",
      description: "Share verified findings with your team and move directly from alignment to production execution.",
      icon: <KriyaChakraSymbol size={26} color="#2563eb" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFE] border border-[#E8EDF2] text-xs font-heading font-medium text-[#2563eb] mb-3">
            <span>✦</span>
            <span>॥ संगम &middot; अन्वेषण &middot; क्रिया ॥</span>
            <span>✦</span>
          </div>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[#0F1B2D]">
            Three simple steps
          </h2>
        </div>

        <div className="relative mt-20 max-w-5xl mx-auto">
          {/* Note: Divider border line removed per user request */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 relative z-10">
            {steps.map((step, index) => (
              <FadeIn key={step.num} delay={index * 150}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#E8F0FE] flex items-center justify-center border border-[#E2E8F0] shadow-2xs">
                    {step.icon}
                  </div>
                  <div className="text-xs font-heading font-medium text-[#2563eb] mt-5">
                    {step.sanskrit}
                  </div>
                  <h3 className="font-heading text-xl font-semibold mt-1 text-[#0F1B2D]">
                    {step.title}
                  </h3>
                  <p className="font-body text-[#5A6B7F] mt-3 leading-relaxed text-sm md:text-base max-w-xs">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
