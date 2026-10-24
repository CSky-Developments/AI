"use client";

interface AnimatedLogoProps {
  size?: number;
  className?: string;
  glowColor?: string; // e.g. "rgba(59, 130, 246, 0.5)"
}

export function AnimatedLogo({
  size = 180,
  className = "",
  glowColor = "rgba(59, 130, 246, 0.4)",
}: AnimatedLogoProps) {
  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Background Aura Glow */}
      <div
        className="absolute inset-0 rounded-full blur-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${glowColor} 0%, rgba(255,255,255,0) 70%)`,
          animation: "aura-pulse 4s ease-in-out infinite",
        }}
      />

      {/* Outer Floating Wrapper */}
      <div
        className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-500 hover:scale-105"
        style={{ animation: "float-main 6s ease-in-out infinite" }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          <g data-editor-group="true" transform="matrix(1 0 0 1 250.5 250)">
            {/* Bar 1: Deep Navy/Blue Slanted Pillar */}
            <g
              transform="matrix(1 0 0 1 -63.11698 0.05)"
              style={{ animation: "bar-1 5s ease-in-out infinite" }}
            >
              <path
                transform="translate(-163.19329, -249.17437)"
                style={{
                  stroke: "#1e40af",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  fill: "#1e40af",
                }}
                d="M 174.02726 138.77437 L 104.59329 359.57437 L 152.43066 359.49103 L 221.79329 138.87437 Z"
              />
            </g>

            {/* Bar 2: Royal Electric Blue Slanted Pillar */}
            <g
              transform="matrix(1 0 0 1 -4.49011 -0.34167)"
              style={{ animation: "bar-2 5.5s ease-in-out infinite" }}
            >
              <path
                transform="translate(-252.73016, -249.89235)"
                style={{
                  stroke: "#3b82f6",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  fill: "#3b82f6",
                }}
                d="M 204.73726 139.78402 L 253.0033 139.78402 L 300.72307 360.00068 L 252.82307 360.00068 Z"
              />
            </g>

            {/* Bar 3: Sky Blue Lower Block */}
            <g
              transform="matrix(1 0 0 1.28689 97.71698 32.94971)"
              style={{
                transformOrigin: "97.7px 32.9px",
                animation: "bar-3 6s ease-in-out infinite",
              }}
            >
              <path
                transform="translate(-364, -300)"
                style={{
                  stroke: "#60a5fa",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  fill: "#60a5fa",
                }}
                d="M 340 360 L 388 360 L 388 240 L 340 240 Z"
              />
            </g>

            {/* Bar 4: Light Powder Blue Upper Block */}
            <g
              transform="matrix(1 0 0 0.4902 97.71698 -85.55038)"
              style={{
                transformOrigin: "97.7px -85.5px",
                animation: "bar-4 4.8s ease-in-out infinite",
              }}
            >
              <path
                transform="translate(-364, -190)"
                style={{
                  stroke: "#93c5fd",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  fill: "#93c5fd",
                }}
                d="M 340 140 L 388 140 L 388 240 L 340 240 Z"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
