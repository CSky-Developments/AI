import { Logo } from "@/components/Logo";

interface FooterProps {
  onSelectTab?: (tabId: string) => void;
  theme?: string;
}

export function Footer({ onSelectTab, theme = "overview" }: FooterProps) {
  const handleNav = (tabId: string) => {
    if (onSelectTab) {
      onSelectTab(tabId);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0F1B2D] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Note */}
          <div className="text-center md:text-left">
            <button
              onClick={() => handleNav("overview")}
              className="font-heading font-bold text-2xl text-white tracking-tight flex items-center gap-3 cursor-pointer"
            >
              <div className="w-9 h-9 flex items-center justify-center shrink-0">
                <Logo size={36} theme={theme} />
              </div>
              <span>CSky AI</span>
            </button>
            <p className="font-body text-xs text-white/50 mt-1">
              Intelligence, made clear.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-8 font-body text-sm text-white/70">
            <button
              onClick={() => handleNav("overview")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Overview
            </button>
            <button
              onClick={() => handleNav("models")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Research & Models
            </button>
            <button
              onClick={() => handleNav("manifesto")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Manifesto
            </button>
            <button
              onClick={() => handleNav("access")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Early Access
            </button>
          </nav>

          {/* Direct Email */}
          <div className="text-center md:text-right font-body text-sm text-white/60">
            <a
              href="mailto:hello@csky.ai"
              className="text-[#60a5fa] hover:underline"
            >
              hello@csky.ai
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-body text-white/40">
          <p>© 2026 CSky AI, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
