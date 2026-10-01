import React from 'react';

const PROBLEMS = [
  {
    title: 'Searching Across Multiple Portals',
    description: 'Checking different GDSs and websites wastes time and reduces productivity.',
    icon: (
      <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    title: 'Unstable & Changing Prices',
    description: 'Prices change frequently, leading to lost sales and unhappy customers.',
    icon: (
      <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <ellipse cx="9" cy="8" rx="5" ry="2.5" strokeWidth="2" stroke="currentColor" />
        <path d="M4 8v4c0 1.38 2.24 2.5 5 2.5s5-1.12 5-2.5V8" strokeWidth="2" stroke="currentColor" />
        <path d="M4 12v4c0 1.38 2.24 2.5 5 2.5s5-1.12 5-2.5V12" strokeWidth="2" stroke="currentColor" />
        <path d="M16 11l3-3m0 0l3 3m-3-3v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
        <path d="M19 19l-3 3m0 0l-3-3m3 3V14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
      </svg>
    )
  },
  {
    title: 'Manual Booking Management',
    description: 'PNRs, changes and cancellations are difficult to track across multiple systems.',
    icon: (
      <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h4m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 9h.01M5 13h.01M5 17h.01" />
      </svg>
    )
  },
  {
    title: 'Limited Support & Tools',
    description: 'Lack of real-time support and essential tools makes daily operations harder.',
    icon: (
      <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 18v-6a9 9 0 0118 0v6" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
      </svg>
    )
  }
];

const SOLUTIONS = [
  {
    title: 'One Search, Multiple Sources',
    description: 'Compare flights across NDC, GDS and multiple airlines in real time.',
    icon: (
      <svg className="w-5 h-5 text-[#0066FF] -rotate-45" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>
    )
  },
  {
    title: 'Accurate & Real-Time Fares',
    description: 'Get up-to-date prices with fewer surprises and better margins.',
    icon: (
      <svg className="w-5 h-5 text-[#0066FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5a1.99 1.99 0 011.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    )
  },
  {
    title: 'All-in-One Booking Management',
    description: 'Search, book, manage PNRs, changes and cancellations in one place.',
    icon: (
      <svg className="w-5 h-5 text-[#0066FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 16l2 2 4-4" />
      </svg>
    )
  },
  {
    title: 'Powerful Tools & Dedicated Support',
    description: 'Work faster with agent-friendly tools and reliable support for your business growth.',
    icon: (
      <svg className="w-5 h-5 text-[#0066FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

export default function AgentProblem() {
  return (
    <section id="challenges-solutions" className="relative w-full overflow-hidden pt-8 sm:pt-12 lg:pt-14 pb-6 sm:pb-8 lg:pb-10">
      {/* Anchor targets for smooth scrolling navigation */}
      <span id="problem" className="absolute -top-16"></span>
      <span id="platform-solution" className="absolute -top-16"></span>

      {/* Full Size Scenic Background Image */}
      {/* <img
        src="/agent-problem/challenges_bg.png"
        alt="Yazi Travel Challenges and Solutions Background"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      /> */}

      {/* Seamless Soft Top Blend with TrustStats */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white via-white/50 to-transparent z-10" />

      {/* Seamless Soft Bottom Blend into WhyChooseUs */}
      {/* <div className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent via-white/40 to-white z-10" /> */}

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-6 h-[2px] bg-[#DC2626] rounded-full"></span>
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.22em] text-[#0B1B3D]">
              CHALLENGES &amp; SOLUTIONS
            </span>
            <span className="w-6 h-[2px] bg-[#DC2626] rounded-full"></span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0B1B3D] tracking-tight leading-tight mb-2.5">
            The Everyday Challenges of <span className="text-[#DC2626]">Travel Agents</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            From complex searches to booking management — Yazi Travels simplifies it all in one powerful platform.
          </p>
        </div>

        {/* 2-Column Split Layout with Center Airplane Clearance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
          
          {/* LEFT COLUMN: THE PROBLEM */}
          <div className="lg:col-span-5">
            <div className="mb-5 sm:mb-6 pl-2">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-4 h-[2px] bg-rose-500 rounded-full"></span>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-rose-600">
                  THE PROBLEM
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3D] tracking-tight leading-snug">
                What Slows <br />
                Travel Agents Down?
              </h3>
            </div>

            {/* Problem Cards with Vertical Connected Line */}
            <div className="relative pl-7">
              {/* Connecting Vertical Line */}
              <div className="absolute left-[13px] top-6 bottom-6 w-[2px] bg-rose-300/80 rounded-full"></div>

              <div className="space-y-3 sm:space-y-3.5">
                {PROBLEMS.map((problem, index) => (
                  <div key={index} className="relative flex items-center group">
                    {/* Dot centered directly on the line */}
                    <div className="absolute left-[-14px] top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-rose-500 ring-4 ring-rose-100 group-hover:scale-125 transition-transform duration-200 z-10"></div>

                    {/* Card Body */}
                    <div className="w-full bg-white/85 hover:bg-white/95 backdrop-blur-md rounded-2xl border border-white/80 p-3 sm:p-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-lg hover:border-rose-200 transition-all duration-300 flex items-center gap-3 sm:gap-3.5">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-rose-50/90 border border-rose-100 flex items-center justify-center shrink-0">
                        {problem.icon}
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-[13.5px] font-bold text-[#0B1B3D] tracking-tight leading-snug mb-0.5">
                          {problem.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-600 leading-snug font-normal">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Central Transition Chevron Badge (Clearance for Airplane) */}
          <div className="lg:col-span-2 flex items-center justify-center py-4 lg:py-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-xl border border-rose-100/80 flex items-center justify-center text-rose-500 hover:scale-110 transition-transform duration-300 cursor-pointer shadow-rose-500/10">
              <svg className="w-5 h-5 rotate-90 lg:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* RIGHT COLUMN: THE YAZI SOLUTION */}
          <div className="lg:col-span-5">
            <div className="mb-5 sm:mb-6 pl-2">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-4 h-[2px] bg-[#0066FF] rounded-full"></span>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0066FF]">
                  THE YAZI SOLUTION
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3D] tracking-tight leading-snug">
                A Smarter Way <br />
                to Grow Your Travel Business
              </h3>
            </div>

            {/* Solution Cards with Vertical Connected Line */}
            <div className="relative pl-7">
              {/* Connecting Vertical Line */}
              <div className="absolute left-[13px] top-6 bottom-6 w-[2px] bg-sky-300/80 rounded-full"></div>

              <div className="space-y-3 sm:space-y-3.5">
                {SOLUTIONS.map((solution, index) => (
                  <div key={index} className="relative flex items-center group">
                    {/* Dot centered directly on the line */}
                    <div className="absolute left-[-14px] top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#0066FF] ring-4 ring-sky-100 group-hover:scale-125 transition-transform duration-200 z-10"></div>

                    {/* Card Body */}
                    <div className="w-full bg-white/85 hover:bg-white/95 backdrop-blur-md rounded-2xl border border-white/80 p-3 sm:p-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-lg hover:border-sky-200 transition-all duration-300 flex items-center gap-3 sm:gap-3.5">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-sky-50/90 border border-sky-100 flex items-center justify-center shrink-0">
                        {solution.icon}
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-[13.5px] font-bold text-[#0B1B3D] tracking-tight leading-snug mb-0.5">
                          {solution.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-600 leading-snug font-normal">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


