"use client";

import { useState, useRef, useEffect } from "react";
import { Logo } from "@/components/Logo";

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
}

const BUTTON_THEMES: Record<string, { bg: string; hover: string }> = {
  overview: { bg: "#1e40af", hover: "#1e3a8a" },
  models: { bg: "#2563eb", hover: "#1d4ed8" },
  manifesto: { bg: "#4f46e5", hover: "#4338ca" },
  access: { bg: "#0284c7", hover: "#0369a1" },
  pricing: { bg: "#0284c7", hover: "#0369a1" },
  research: { bg: "#2563eb", hover: "#1d4ed8" },
  docs: { bg: "#0891b2", hover: "#0e7490" },
  "use-cases": { bg: "#4f46e5", hover: "#4338ca" },

  // Akash (Warm Rose Red)
  "csky-ultra": { bg: "#e11d48", hover: "#be123c" },
  akash: { bg: "#e11d48", hover: "#be123c" },
  ultra: { bg: "#e11d48", hover: "#be123c" },

  // Drishti (Warm Golden Amber)
  "csky-pro": { bg: "#d97706", hover: "#b45309" },
  drishti: { bg: "#d97706", hover: "#b45309" },
  pro: { bg: "#d97706", hover: "#b45309" },

  // Vayu (Sage Mint Green)
  "csky-nano": { bg: "#059669", hover: "#047857" },
  vayu: { bg: "#059669", hover: "#047857" },
  nano: { bg: "#059669", hover: "#047857" },

  // Agni (Solar Flame Orange)
  "csky-agni": { bg: "#ea580c", hover: "#c2410c" },
  agni: { bg: "#ea580c", hover: "#c2410c" },

  // Prithvi (Terracotta Earth)
  "csky-prithvi": { bg: "#c2410c", hover: "#9a3412" },
  prithvi: { bg: "#c2410c", hover: "#9a3412" },

  // Soma (Celestial Indigo)
  "csky-soma": { bg: "#4f46e5", hover: "#4338ca" },
  soma: { bg: "#4f46e5", hover: "#4338ca" },

  // Developer Tools
  "csky-ide": { bg: "#6366f1", hover: "#4f46e5" },
  "csky-cli": { bg: "#0891b2", hover: "#0e7490" },
  "csky-app": { bg: "#2563eb", hover: "#1d4ed8" },
  "csky-extensions": { bg: "#8b5cf6", hover: "#7c3aed" },
  "csky-sdk": { bg: "#f43f5e", hover: "#e11d48" },
};

export function Navbar({ activeTab, onSelectTab }: NavbarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const currentBtnColor = BUTTON_THEMES[activeTab] || BUTTON_THEMES.overview;

  // Detect scroll position to make navbar invisible when totally at the top
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleTabClick = (tabId: string) => {
    onSelectTab(tabId);
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header
      ref={navRef}
      className={`sticky top-0 -mb-16 z-50 transition-all duration-300 ${
        isScrolled || openDropdown || mobileMenuOpen
          ? "bg-white/85 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
          : "bg-transparent shadow-none"
      }`}
    >
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => handleTabClick("overview")}
            className="flex items-center gap-3.5 hover:opacity-90 transition-opacity"
          >
            {/* Dynamic Color-Adaptive CSky Logo */}
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <Logo size={40} theme={activeTab} className="drop-shadow-xs" />
            </div>
            <span className="font-heading font-bold text-xl text-[#0F1B2D] tracking-tight">
              CSky AI
            </span>
          </button>

          {/* Desktop Nav Links & Dropdowns */}
          <nav className="hidden lg:flex items-center gap-1 font-body text-sm text-[#374151]">
            {/* Products / Models Dropdown */}
            <button
              type="button"
              onClick={() => toggleDropdown("products")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
                openDropdown === "products"
                  ? "bg-[#F1F3F4] text-[#0F1B2D] font-medium"
                  : "hover:bg-[#F8FAFC] text-[#374151]"
              }`}
            >
              <span>Products</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${
                  openDropdown === "products" ? "rotate-180" : ""
                }`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Use Cases Dropdown */}
            <button
              type="button"
              onClick={() => toggleDropdown("usecases")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
                openDropdown === "usecases"
                  ? "bg-[#F1F3F4] text-[#0F1B2D] font-medium"
                  : "hover:bg-[#F8FAFC] text-[#374151]"
              }`}
            >
              <span>Use Cases</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${
                  openDropdown === "usecases" ? "rotate-180" : ""
                }`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Direct Links */}
            <button
              onClick={() => handleTabClick("pricing")}
              className={`px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
                activeTab === "pricing" && !openDropdown
                  ? "text-[#0F1B2D] font-medium"
                  : "hover:bg-[#F8FAFC] text-[#374151]"
              }`}
            >
              Pricing
            </button>

            <button
              onClick={() => handleTabClick("manifesto")}
              className={`px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
                activeTab === "manifesto" && !openDropdown
                  ? "text-[#0F1B2D] font-medium"
                  : "hover:bg-[#F8FAFC] text-[#374151]"
              }`}
            >
              Enterprise
            </button>

            {/* Resources Dropdown */}
            <button
              type="button"
              onClick={() => toggleDropdown("resources")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
                openDropdown === "resources"
                  ? "bg-[#F1F3F4] text-[#0F1B2D] font-medium"
                  : "hover:bg-[#F8FAFC] text-[#374151]"
              }`}
            >
              <span>Resources</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${
                  openDropdown === "resources" ? "rotate-180" : ""
                }`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </nav>
        </div>

        {/* Right Action Button (Dynamic page color-adaptive) */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => handleTabClick("access")}
            className="text-white font-body font-medium text-xs sm:text-sm rounded-full px-5 py-2 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            style={{ backgroundColor: currentBtnColor.bg }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = currentBtnColor.hover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = currentBtnColor.bg;
            }}
          >
            Get early access
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#0F1B2D] p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          )}
        </button>
      </div>

      {/* MEGA MENU: Products (Exact layout from screenshot) */}
      {openDropdown === "products" && (
        <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl rounded-b-3xl transition-all duration-200 animate-in fade-in">
          <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Side: Callout Headline & Models */}
            <div className="md:col-span-5 pr-4">
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-[#0F1B2D] leading-snug tracking-tight">
                Explore our next generation products
              </h2>
              
              {/* Foundation Models Chips */}
              <div className="mt-6 space-y-2">
                <span className="block font-body text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-2">
                  Foundation Models
                </span>
                <button
                  onClick={() => handleTabClick("csky-ultra")}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
                    <span className="font-body text-sm font-medium text-[#1F2937] group-hover:text-[#E11D48]">
                      Akash
                    </span>
                    <span className="text-xs text-[#94A3B8]">आकाश</span>
                  </div>
                  <span className="text-xs font-mono text-[#64748B]">405B</span>
                </button>

                <button
                  onClick={() => handleTabClick("csky-agni")}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
                    <span className="font-body text-sm font-medium text-[#1F2937] group-hover:text-[#EA580C]">
                      Agni
                    </span>
                    <span className="text-xs text-[#94A3B8]">अग्नि</span>
                  </div>
                  <span className="text-xs font-mono text-[#64748B]">120B</span>
                </button>

                <button
                  onClick={() => handleTabClick("csky-pro")}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                    <span className="font-body text-sm font-medium text-[#1F2937] group-hover:text-[#D97706]">
                      Drishti
                    </span>
                    <span className="text-xs text-[#94A3B8]">दृष्टि</span>
                  </div>
                  <span className="text-xs font-mono text-[#64748B]">70B</span>
                </button>

                <button
                  onClick={() => handleTabClick("csky-prithvi")}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#C2410C]" />
                    <span className="font-body text-sm font-medium text-[#1F2937] group-hover:text-[#C2410C]">
                      Prithvi
                    </span>
                    <span className="text-xs text-[#94A3B8]">पृथ्वी</span>
                  </div>
                  <span className="text-xs font-mono text-[#64748B]">32B</span>
                </button>

                <button
                  onClick={() => handleTabClick("csky-soma")}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#4F46E5]" />
                    <span className="font-body text-sm font-medium text-[#1F2937] group-hover:text-[#4F46E5]">
                      Soma
                    </span>
                    <span className="text-xs text-[#94A3B8]">सोम</span>
                  </div>
                  <span className="text-xs font-mono text-[#64748B]">14B</span>
                </button>

                <button
                  onClick={() => handleTabClick("csky-nano")}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#059669]" />
                    <span className="font-body text-sm font-medium text-[#1F2937] group-hover:text-[#059669]">
                      Vayu
                    </span>
                    <span className="text-xs text-[#94A3B8]">वायु</span>
                  </div>
                  <span className="text-xs font-mono text-[#64748B]">8B</span>
                </button>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => handleTabClick("models")}
                  className="font-body text-xs sm:text-sm font-medium text-[#0F1B2D] bg-[#F8FAFC] border border-[#E2E8F0] rounded-full px-5 py-2 hover:bg-[#F1F5F9] transition-all cursor-pointer shadow-xs"
                >
                  See overview
                </button>
              </div>
            </div>

            {/* Right Side: Products List with Outline Icons */}
            <div className="md:col-span-7 md:border-l md:border-[#F1F5F9] md:pl-10">
              <span className="block font-body text-xs font-semibold text-[#6B7280] mb-4">
                Products
              </span>

              <div className="space-y-4">
                {/* Product 1: CSky App */}
                <button
                  onClick={() => handleTabClick("csky-app")}
                  className="w-full flex items-center justify-between text-left group p-2 -mx-2 rounded-xl hover:bg-[#F8FAFC] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#4B5563] group-hover:text-[#3b82f6] transition-colors"
                    >
                      <path d="M12 2L2 22H22L12 2Z" />
                    </svg>
                    <span className="font-body text-sm font-medium text-[#1F2937] group-hover:text-[#0F1B2D]">
                      CSky App
                    </span>
                  </div>
                </button>

                {/* Product 2: CSky Extensions */}
                <button
                  onClick={() => handleTabClick("csky-extensions")}
                  className="w-full flex items-center justify-between text-left group p-2 -mx-2 rounded-xl hover:bg-[#F8FAFC] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#4B5563] group-hover:text-[#3b82f6] transition-colors"
                    >
                      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                      <line x1="16" y1="8" x2="2" y2="22" />
                      <line x1="17.5" y1="15" x2="9" y2="15" />
                    </svg>
                    <span className="font-body text-sm font-medium text-[#1F2937] group-hover:text-[#0F1B2D]">
                      CSky Extensions
                    </span>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-[#9CA3AF]"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </button>

                {/* Product 3: CSky CLI */}
                <button
                  onClick={() => handleTabClick("csky-cli")}
                  className="w-full flex items-center justify-between text-left group p-2 -mx-2 rounded-xl hover:bg-[#F8FAFC] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#4B5563] group-hover:text-[#3b82f6] transition-colors"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M6 9l4 3-4 3" />
                      <path d="M12 15h6" />
                    </svg>
                    <span className="font-body text-sm font-medium text-[#1F2937] group-hover:text-[#0F1B2D]">
                      CSky CLI
                    </span>
                  </div>
                </button>

                {/* Product 4: CSky IDE */}
                <button
                  onClick={() => handleTabClick("csky-ide")}
                  className="w-full flex items-center justify-between text-left group p-2 -mx-2 rounded-xl hover:bg-[#F8FAFC] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#4B5563] group-hover:text-[#3b82f6] transition-colors"
                    >
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                    <span className="font-body text-sm font-medium text-[#1F2937] group-hover:text-[#0F1B2D]">
                      CSky IDE
                    </span>
                  </div>
                </button>

                {/* Product 5: CSky SDK */}
                <button
                  onClick={() => handleTabClick("csky-sdk")}
                  className="w-full flex items-center justify-between text-left group p-2 -mx-2 rounded-xl hover:bg-[#F8FAFC] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#4B5563] group-hover:text-[#3b82f6] transition-colors"
                    >
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <path d="M9 9h6v6H9z" />
                    </svg>
                    <span className="font-body text-sm font-medium text-[#1F2937] group-hover:text-[#0F1B2D]">
                      CSky SDK
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MEGA MENU: Use Cases */}
      {openDropdown === "usecases" && (
        <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl rounded-b-3xl transition-all duration-200 animate-in fade-in">
          <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 pr-4">
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-[#0F1B2D] leading-snug tracking-tight">
                Built for clarity and real-world results
              </h2>
              <div className="mt-8">
                <button
                  onClick={() => handleTabClick("use-cases")}
                  className="font-body text-xs sm:text-sm font-medium text-[#0F1B2D] bg-[#F8FAFC] border border-[#E2E8F0] rounded-full px-5 py-2.5 hover:bg-[#F1F5F9] transition-all cursor-pointer shadow-xs"
                >
                  See customer stories
                </button>
              </div>
            </div>

            <div className="md:col-span-7 md:border-l md:border-[#F1F5F9] md:pl-10">
              <span className="block font-body text-xs font-semibold text-[#6B7280] mb-4">
                Applications
              </span>
              <div className="space-y-4">
                <button
                  onClick={() => handleTabClick("use-cases")}
                  className="w-full text-left p-2 -mx-2 rounded-xl hover:bg-[#F8FAFC] transition-colors"
                >
                  <div className="font-body text-sm font-medium text-[#1F2937]">
                    Autonomous Strategy & Planning
                  </div>
                  <div className="text-xs text-[#6B7280] mt-0.5">
                    Cut research time from weeks to hours with grounded multi-step reasoning.
                  </div>
                </button>
                <button
                  onClick={() => handleTabClick("use-cases")}
                  className="w-full text-left p-2 -mx-2 rounded-xl hover:bg-[#F8FAFC] transition-colors"
                >
                  <div className="font-body text-sm font-medium text-[#1F2937]">
                    Self-Hosted Private AI
                  </div>
                  <div className="text-xs text-[#6B7280] mt-0.5">
                    Deploy open weights locally inside your secure perimeter with zero data leakage.
                  </div>
                </button>
                <button
                  onClick={() => handleTabClick("use-cases")}
                  className="w-full text-left p-2 -mx-2 rounded-xl hover:bg-[#F8FAFC] transition-colors"
                >
                  <div className="font-body text-sm font-medium text-[#1F2937]">
                    Code & Workflow Automation
                  </div>
                  <div className="text-xs text-[#6B7280] mt-0.5">
                    Integrate lightweight 8B and 70B models directly into developer CI/CD pipes.
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MEGA MENU: Resources */}
      {openDropdown === "resources" && (
        <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl rounded-b-3xl transition-all duration-200 animate-in fade-in">
          <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 pr-4">
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-[#0F1B2D] leading-snug tracking-tight">
                Documentation and open research
              </h2>
              <div className="mt-8">
                <button
                  onClick={() => handleTabClick("manifesto")}
                  className="font-body text-xs sm:text-sm font-medium text-[#0F1B2D] bg-[#F8FAFC] border border-[#E2E8F0] rounded-full px-5 py-2.5 hover:bg-[#F1F5F9] transition-all cursor-pointer shadow-xs"
                >
                  Read the manifesto
                </button>
              </div>
            </div>

            <div className="md:col-span-7 md:border-l md:border-[#F1F5F9] md:pl-10">
              <span className="block font-body text-xs font-semibold text-[#6B7280] mb-4">
                Resources
              </span>
              <div className="space-y-4">
                <button
                  onClick={() => handleTabClick("models")}
                  className="w-full flex items-center justify-between text-left p-2 -mx-2 rounded-xl hover:bg-[#F8FAFC] transition-colors"
                >
                  <span className="font-body text-sm font-medium text-[#1F2937]">
                    Model Weights on Hugging Face
                  </span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#9CA3AF]">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </button>
                <button
                  onClick={() => handleTabClick("research")}
                  className="w-full flex items-center justify-between text-left p-2 -mx-2 rounded-xl hover:bg-[#F8FAFC] transition-colors"
                >
                  <span className="font-body text-sm font-medium text-[#1F2937]">
                    Research Papers & Pre-prints
                  </span>
                </button>
                <button
                  onClick={() => handleTabClick("docs")}
                  className="w-full flex items-center justify-between text-left p-2 -mx-2 rounded-xl hover:bg-[#F8FAFC] transition-colors"
                >
                  <span className="font-body text-sm font-medium text-[#1F2937]">
                    Developer API Quickstart
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5E7EB] px-6 py-6 space-y-4 shadow-lg">
          <div className="space-y-2">
            <button
              onClick={() => handleTabClick("overview")}
              className={`block w-full text-left font-body text-base py-2 px-3 rounded-lg ${
                activeTab === "overview" ? "bg-[#F1F5F9] font-semibold text-[#0F1B2D]" : "text-[#4B5563]"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => handleTabClick("models")}
              className={`block w-full text-left font-body text-base py-2 px-3 rounded-lg ${
                activeTab === "models" ? "bg-[#F1F5F9] font-semibold text-[#0F1B2D]" : "text-[#4B5563]"
              }`}
            >
              Products & Models
            </button>
            <button
              onClick={() => handleTabClick("pricing")}
              className={`block w-full text-left font-body text-base py-2 px-3 rounded-lg ${
                activeTab === "pricing" ? "bg-[#F1F5F9] font-semibold text-[#0F1B2D]" : "text-[#4B5563]"
              }`}
            >
              Pricing & Compute
            </button>
            <button
              onClick={() => handleTabClick("research")}
              className={`block w-full text-left font-body text-base py-2 px-3 rounded-lg ${
                activeTab === "research" ? "bg-[#F1F5F9] font-semibold text-[#0F1B2D]" : "text-[#4B5563]"
              }`}
            >
              Research & Papers
            </button>
            <button
              onClick={() => handleTabClick("docs")}
              className={`block w-full text-left font-body text-base py-2 px-3 rounded-lg ${
                activeTab === "docs" ? "bg-[#F1F5F9] font-semibold text-[#0F1B2D]" : "text-[#4B5563]"
              }`}
            >
              Developer Docs
            </button>
            <button
              onClick={() => handleTabClick("use-cases")}
              className={`block w-full text-left font-body text-base py-2 px-3 rounded-lg ${
                activeTab === "use-cases" ? "bg-[#F1F5F9] font-semibold text-[#0F1B2D]" : "text-[#4B5563]"
              }`}
            >
              Case Studies
            </button>
            <button
              onClick={() => handleTabClick("manifesto")}
              className={`block w-full text-left font-body text-base py-2 px-3 rounded-lg ${
                activeTab === "manifesto" ? "bg-[#F1F5F9] font-semibold text-[#0F1B2D]" : "text-[#4B5563]"
              }`}
            >
              Enterprise / Manifesto
            </button>
            <button
              onClick={() => handleTabClick("access")}
              className={`block w-full text-left font-body text-base py-2 px-3 rounded-lg ${
                activeTab === "access" ? "bg-[#F1F5F9] font-semibold text-[#0F1B2D]" : "text-[#4B5563]"
              }`}
            >
              Early Access
            </button>
          </div>

          <div className="pt-4 border-t border-[#F1F5F9]">
            <button
              onClick={() => handleTabClick("access")}
              className="w-full text-center text-white font-body font-medium text-sm rounded-full py-3 transition-all duration-300 shadow-sm cursor-pointer"
              style={{ backgroundColor: currentBtnColor.bg }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = currentBtnColor.hover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = currentBtnColor.bg;
              }}
            >
              Get early access
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
