import React from "react";

interface WorldMapVisualProps {
  className?: string;
  showLabels?: boolean;
}

export default function WorldMapVisual({
  className = "",
  showLabels = true,
}: WorldMapVisualProps) {
  return (
    <div className={`relative w-full overflow-hidden select-none ${className}`}>
      <svg
        viewBox="0 0 1000 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_0_15px_rgba(229,169,60,0.2)]"
      >
        <defs>
          {/* Radial gradient for glowing hubs */}
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="1" />
            <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
          </radialGradient>

          {/* Golden flight arc gradient */}
          <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fde68a" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.4" />
          </linearGradient>

          {/* Dotted grid pattern for landmass */}
          <pattern id="gridDots" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.8" fill="#334155" fillOpacity="0.6" />
          </pattern>
        </defs>

        {/* Stylized continent silhouettes with dotted matrix */}
        {/* North America */}
        <path
          d="M 120 100 Q 180 80 250 110 T 320 180 Q 280 260 220 250 T 150 200 Z"
          fill="#13274c"
          fillOpacity="0.5"
          stroke="#1e3a6d"
          strokeWidth="1"
        />
        {/* South America */}
        <path
          d="M 230 270 Q 280 290 290 350 T 260 450 Q 230 420 220 340 Z"
          fill="#13274c"
          fillOpacity="0.5"
          stroke="#1e3a6d"
          strokeWidth="1"
        />
        {/* Europe */}
        <path
          d="M 460 90 Q 540 80 570 140 T 520 200 Q 470 190 450 140 Z"
          fill="#13274c"
          fillOpacity="0.5"
          stroke="#1e3a6d"
          strokeWidth="1"
        />
        {/* Africa */}
        <path
          d="M 470 200 Q 560 210 570 290 T 520 400 Q 470 380 460 270 Z"
          fill="#13274c"
          fillOpacity="0.5"
          stroke="#1e3a6d"
          strokeWidth="1"
        />
        {/* Asia (including India / Hub) */}
        <path
          d="M 570 100 Q 750 90 850 160 T 780 320 Q 670 300 600 240 Z"
          fill="#13274c"
          fillOpacity="0.5"
          stroke="#1e3a6d"
          strokeWidth="1"
        />
        {/* Australia */}
        <path
          d="M 760 340 Q 860 330 870 390 T 800 440 Q 740 420 750 360 Z"
          fill="#13274c"
          fillOpacity="0.5"
          stroke="#1e3a6d"
          strokeWidth="1"
        />

        {/* Global Trade Hub Coordinates */}
        {/* Origin: India (Kolkata Manufacturing HQ) approx (660, 240) */}
        
        {/* Curved Export Arcs from India */}
        {/* Route to Europe (Rotterdam / Hamburg) approx (490, 130) */}
        <path
          d="M 660 240 Q 560 140 490 130"
          stroke="url(#arcGrad)"
          strokeWidth="2.2"
          strokeDasharray="4 2"
          fill="none"
        />
        {/* Route to North America (New York / Los Angeles) approx (230, 160) */}
        <path
          d="M 660 240 Q 420 70 230 160"
          stroke="url(#arcGrad)"
          strokeWidth="2"
          strokeDasharray="5 3"
          fill="none"
        />
        {/* Route to Middle East (Dubai / Riyadh) approx (570, 220) */}
        <path
          d="M 660 240 Q 610 215 570 220"
          stroke="url(#arcGrad)"
          strokeWidth="2.5"
          fill="none"
        />
        {/* Route to East Asia (Tokyo / Osaka) approx (820, 180) */}
        <path
          d="M 660 240 Q 750 180 820 180"
          stroke="url(#arcGrad)"
          strokeWidth="2"
          strokeDasharray="4 2"
          fill="none"
        />
        {/* Route to Australia (Sydney / Melbourne) approx (820, 390) */}
        <path
          d="M 660 240 Q 760 300 820 390"
          stroke="url(#arcGrad)"
          strokeWidth="2"
          strokeDasharray="4 2"
          fill="none"
        />
        {/* Route to Africa (Durban / Cape Town) approx (530, 360) */}
        <path
          d="M 660 240 Q 610 320 530 360"
          stroke="url(#arcGrad)"
          strokeWidth="1.8"
          strokeDasharray="4 2"
          fill="none"
        />
        {/* Route to South America (Santos / Brazil) approx (270, 350) */}
        <path
          d="M 660 240 Q 450 330 270 350"
          stroke="url(#arcGrad)"
          strokeWidth="1.6"
          strokeDasharray="5 3"
          fill="none"
        />

        {/* Global Port / Airport Hub Nodes */}
        {/* Center HQ: India */}
        <circle cx="660" cy="240" r="14" fill="url(#hubGlow)" className="animate-pulse" />
        <circle cx="660" cy="240" r="6" fill="#fde68a" stroke="#d97706" strokeWidth="2" />
        <circle cx="660" cy="240" r="2.5" fill="#ffffff" />

        {/* Europe Destination Node */}
        <circle cx="490" cy="130" r="8" fill="url(#hubGlow)" />
        <circle cx="490" cy="130" r="4" fill="#fbbf24" />

        {/* USA Destination Node */}
        <circle cx="230" cy="160" r="9" fill="url(#hubGlow)" />
        <circle cx="230" cy="160" r="4.5" fill="#fbbf24" />

        {/* UAE Destination Node */}
        <circle cx="570" cy="220" r="7" fill="url(#hubGlow)" />
        <circle cx="570" cy="220" r="3.5" fill="#fbbf24" />

        {/* Japan Destination Node */}
        <circle cx="820" cy="180" r="7" fill="url(#hubGlow)" />
        <circle cx="820" cy="180" r="3.5" fill="#fbbf24" />

        {/* Australia Destination Node */}
        <circle cx="820" cy="390" r="7" fill="url(#hubGlow)" />
        <circle cx="820" cy="390" r="3.5" fill="#fbbf24" />

        {/* South Africa Destination Node */}
        <circle cx="530" cy="360" r="6" fill="url(#hubGlow)" />
        <circle cx="530" cy="360" r="3" fill="#fbbf24" />

        {/* Floating pulse wave on India hub */}
        <circle cx="660" cy="240" r="24" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" fill="none" className="animate-ping" style={{ transformOrigin: "660px 240px" }} />
      </svg>

      {showLabels && (
        <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between text-[11px] text-slate-300 pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
            <span className="font-medium text-amber-200">GlobalTex Manufacturing HQ (India)</span>
          </div>
          <span className="text-slate-400">Regular Shipping to 30+ Ports</span>
        </div>
      )}
    </div>
  );
}

