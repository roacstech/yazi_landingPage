import React, { useState } from 'react';

const PROBLEMS = [
  {
    step: '01',
    icon: (
      <svg className="w-5 h-5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    tag: '5+ Portals',
    title: 'Slow Manual Search',
    description: 'Checking multiple airline screens wastes 40% of agency booking time.'
  },
  {
    step: '02',
    icon: (
      <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M7 7h.01M7 3h5a1.99 1.99 0 011.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    tag: 'Hold Delays',
    title: 'Fare Changes',
    description: 'Offline queue holds expire, causing fare jumps and lost customer trust.'
  },
  {
    step: '03',
    icon: (
      <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    tag: 'Split Logins',
    title: 'Fragmented Tools',
    description: 'Juggling separate GDS logins, passwords, and supplier ledgers.'
  },
  {
    step: '04',
    icon: (
      <svg className="w-5 h-5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h4m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M14 14l4 4m0-4l-4 4" />
      </svg>
    ),
    tag: 'Queue Waits',
    title: 'Manual Changes',
    description: 'Hours lost on airline phone queues for basic ticket changes and voids.'
  }
];

const SOLUTIONS = [
  {
    step: '01',
    icon: '/TrustStats/icon_1.png',
    tag: '500+ Airlines',
    title: 'Real-Time Inventory',
    description: 'GDS, NDC, and LCC inventory unified in one instant 2-second search.'
  },
  {
    step: '02',
    icon: '/TrustStats/icon_2.png',
    tag: 'Guaranteed Net',
    title: 'Accurate Live Pricing',
    description: 'Direct wholesale fares with zero hidden cuts and dynamic agency markups.'
  },
  {
    step: '03',
    icon: '/TrustStats/icon_3.png',
    tag: 'Single Wallet',
    title: 'Centralized Workflow',
    description: 'One master agency login, unified wallet, and instant automated tickets.'
  },
  {
    step: '04',
    icon: '/TrustStats/icon_4.png',
    tag: 'Automated 24/7',
    title: 'Agent Dashboard',
    description: 'Instant 24h voids, self-service date changes, and live sales analytics.'
  }
];

export default function PlatformSolution() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section id="platform-solution" className="relative scroll-mt-8 py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
      {/* Anchor for problem link */}
      <span id="problem" className="absolute -top-12"></span>

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0066FF] bg-white/95 border border-[#D0E5FF] mb-3 shadow-2xs backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse"></span>
            TRANSFORM YOUR WORKFLOW
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0B1B3D] tracking-tight leading-tight mb-2.5">
            Turn Daily Booking Friction Into <span className="text-[#0066FF]">Instant Automation</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            Hover or tap any circular point to see how traditional agency obstacles transform with Yazi.
          </p>
        </div>

        {/* Master Comparison Board with Circular UI & Sweeping Curved Ribbons */}
        <div className="bg-white/85 backdrop-blur-xl rounded-[36px] border border-white/95 shadow-[0_20px_60px_-15px_rgba(11,27,61,0.12)] p-5 sm:p-7 lg:p-9 relative overflow-hidden">
          
          {/* Sweeping Dynamic Ribbon Waves (Directly echoing the reference design) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-35" viewBox="0 0 1100 650" fill="none" preserveAspectRatio="none">
            <path
              d="M-50,600 C200,680 400,280 620,340 C840,400 950,120 1150,180"
              stroke="url(#goldCurve)"
              strokeWidth="42"
              strokeLinecap="round"
            />
            <path
              d="M-80,630 C220,710 430,310 650,370 C870,430 980,150 1180,210"
              stroke="url(#blueCurve)"
              strokeWidth="20"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="goldCurve" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#FCD34D" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#D97706" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="blueCurve" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0066FF" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Ambient Corner Glows */}
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-rose-500/10 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-sky-500/10 blur-3xl pointer-events-none"></div>

          {/* Side-by-Side 2x2 Circular Grids */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            
            {/* LEFT COLUMN: THE AGENT'S CHALLENGE (4 Circular Cards) */}
            <div>
              {/* Column Header */}
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-rose-200/80">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-rose-100 border border-rose-300 flex items-center justify-center text-rose-600 text-xs font-black shadow-2xs">
                    ✕
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-rose-700">
                    The Agent's Challenge
                  </h3>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-200">
                  Current Friction
                </span>
              </div>

              {/* 2x2 Grid of Circular Problem Cards */}
              <div className="grid grid-cols-2 gap-3.5 sm:gap-5 justify-items-center">
                {PROBLEMS.map((prob) => {
                  const isHovered = activeStep === prob.step;
                  return (
                    <div
                      key={prob.step}
                      onMouseEnter={() => setActiveStep(prob.step)}
                      onMouseLeave={() => setActiveStep(null)}
                      className={`relative w-full max-w-[215px] sm:max-w-[235px] aspect-square rounded-full p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer select-none group
                        ${isHovered 
                          ? 'bg-rose-50/95 border-[3.5px] border-rose-500 ring-6 ring-rose-200/70 shadow-lg scale-105 -translate-y-1' 
                          : 'bg-white/90 border-[3px] border-rose-200/90 ring-4 ring-rose-100/50 shadow-md hover:border-rose-400 hover:ring-rose-200 hover:shadow-lg hover:scale-103'
                        }
                      `}
                    >
                      {/* Overlapping Corner Circle Badge (Reference Style) */}
                      <div className={`absolute -top-1.5 -left-1.5 sm:-top-2 sm:-left-2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-md border-[2.5px] flex items-center justify-center transition-transform duration-300 z-10
                        ${isHovered ? 'border-rose-600 scale-110' : 'border-rose-400 group-hover:scale-110'}
                      `}>
                        {prob.icon}
                      </div>

                      {/* Small Step Indicator at Top */}
                      <span className="text-[10px] font-black uppercase tracking-wider text-rose-500 mb-0.5">
                        Pain #{prob.step}
                      </span>

                      {/* Title */}
                      <h4 className="text-xs sm:text-[13px] font-black text-[#0B1B3D] tracking-tight leading-tight mb-1 max-w-[150px]">
                        {prob.title}
                      </h4>

                      {/* Description */}
                      <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-snug line-clamp-3 max-w-[145px]">
                        {prob.description}
                      </p>

                      {/* Mini Tag Pill */}
                      <span className="mt-1.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-rose-100/80 text-rose-700 border border-rose-200/60">
                        {prob.tag}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Central Floating Transformation Arrow (Desktop) */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <div className={`w-12 h-12 rounded-full bg-white border-2 border-sky-300 shadow-xl flex items-center justify-center text-[#0066FF] transition-all duration-300
                ${activeStep ? 'scale-125 border-[#0066FF] ring-4 ring-sky-200' : 'scale-100'}
              `}>
                <svg className="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>

            {/* RIGHT COLUMN: THE YAZI SOLUTION (4 Circular Cards) */}
            <div>
              {/* Column Header */}
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-sky-200/80">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#EBF4FF] border border-[#B8D7FF] flex items-center justify-center text-[#0066FF] text-xs font-black shadow-2xs">
                    ✓
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#0066FF]">
                    The Yazi Solution
                  </h3>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Built-in Fix
                </span>
              </div>

              {/* 2x2 Grid of Circular Solution Cards */}
              <div className="grid grid-cols-2 gap-3.5 sm:gap-5 justify-items-center">
                {SOLUTIONS.map((sol) => {
                  const isHovered = activeStep === sol.step;
                  return (
                    <div
                      key={sol.step}
                      onMouseEnter={() => setActiveStep(sol.step)}
                      onMouseLeave={() => setActiveStep(null)}
                      className={`relative w-full max-w-[215px] sm:max-w-[235px] aspect-square rounded-full p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer select-none group
                        ${isHovered 
                          ? 'bg-sky-50/95 border-[3.5px] border-[#0066FF] ring-6 ring-sky-200/80 shadow-lg scale-105 -translate-y-1' 
                          : 'bg-white/95 border-[3px] border-sky-200/90 ring-4 ring-sky-100/50 shadow-md hover:border-[#0066FF] hover:ring-sky-200 hover:shadow-lg hover:scale-103'
                        }
                      `}
                    >
                      {/* Overlapping Corner Circle Badge (Reference Style with Official Icon) */}
                      <div className={`absolute -top-1.5 -left-1.5 sm:-top-2 sm:-left-2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-md border-[2.5px] flex items-center justify-center p-1.5 transition-transform duration-300 z-10
                        ${isHovered ? 'border-[#0066FF] scale-110 ring-2 ring-sky-200' : 'border-sky-300 group-hover:scale-110'}
                      `}>
                        <img
                          src={sol.icon}
                          alt={sol.title}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Small Step Indicator at Top */}
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#0066FF] mb-0.5">
                        Yazi Fix #{sol.step}
                      </span>

                      {/* Title */}
                      <h4 className="text-xs sm:text-[13px] font-black text-[#0B1B3D] tracking-tight leading-tight mb-1 max-w-[150px]">
                        {sol.title}
                      </h4>

                      {/* Description */}
                      <p className="text-[10px] sm:text-[11px] text-slate-600 font-medium leading-snug line-clamp-3 max-w-[145px]">
                        {sol.description}
                      </p>

                      {/* Mini Tag Pill */}
                      <span className="mt-1.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#EBF4FF] text-[#0066FF] border border-[#D0E5FF]">
                        {sol.tag}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Bottom Trust Metrics Bar with Circular Icons */}
          <div className="mt-8 pt-5 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center relative z-10">
            <div className="flex items-center justify-center gap-2 p-1.5 rounded-full bg-white/70 border border-slate-200/60 shadow-2xs">
              <span className="w-6 h-6 rounded-full bg-[#EBF4FF] border border-sky-200 text-[#0066FF] flex items-center justify-center text-xs font-bold">✈</span>
              <span className="text-xs font-extrabold text-[#0B1B3D]">500+ Airlines</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-1.5 rounded-full bg-white/70 border border-slate-200/60 shadow-2xs">
              <span className="w-6 h-6 rounded-full bg-sky-100 border border-sky-200 text-[#0066FF] flex items-center justify-center text-xs font-bold">⚡</span>
              <span className="text-xs font-extrabold text-[#0B1B3D]">&lt; 3s Issuance</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-1.5 rounded-full bg-white/70 border border-slate-200/60 shadow-2xs">
              <span className="w-6 h-6 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center text-xs font-bold">%</span>
              <span className="text-xs font-extrabold text-[#0B1B3D]">100% Net Fares</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-1.5 rounded-full bg-white/70 border border-slate-200/60 shadow-2xs">
              <span className="w-6 h-6 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-700 flex items-center justify-center text-xs font-bold">↺</span>
              <span className="text-xs font-extrabold text-[#0B1B3D]">24/7 Self-Service</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
