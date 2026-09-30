import React from 'react';

const PROBLEMS = [
  {
    iconBg: 'bg-rose-50',
    icon: (
      <svg className="w-6 h-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Slow Manual Search',
    description: 'Checking multiple websites takes time and reduces productivity.'
  },
  {
    iconBg: 'bg-amber-50',
    icon: (
      <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M7 7h.01M7 3h5a1.99 1.99 0 011.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    title: 'Fare Changes Before Booking',
    description: 'Prices change frequently, leading to lost sales and unhappy customers.'
  },
  {
    iconBg: 'bg-indigo-50',
    icon: (
      <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Too Many Disconnected Tools',
    description: 'Multiple systems and logins make the booking process inefficient.'
  },
  {
    iconBg: 'bg-rose-50',
    icon: (
      <svg className="w-6 h-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h4m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M14 14l4 4m0-4l-4 4" />
      </svg>
    ),
    title: 'Hard to Manage Bookings',
    description: 'Managing PNRs, changes and cancellations across different channels is difficult.'
  }
];

export default function AgentProblem() {
  return (
    <section id="problem" className="relative pt-10 sm:pt-14 pb-2 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-9">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0066FF] bg-[#EBF4FF]/90 border border-[#D0E5FF] mb-3 sm:mb-4 shadow-2xs backdrop-blur-xs">
            THE AGENT'S CHALLENGE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B1B3D] tracking-tight leading-tight mb-3">
            Why Traditional Flight Booking Slows Your Agency
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-xl mx-auto">
            Manual processes, scattered tools, and constant fare changes make flight booking time-consuming and frustrating for travel agents.
          </p>
        </div>

        {/* 2x2 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
          {PROBLEMS.map((problem, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 bg-white/95 backdrop-blur-xs rounded-2xl border border-white/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-lg hover:border-sky-200 transition-all flex items-center gap-4 sm:gap-5"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${problem.iconBg} flex items-center justify-center shrink-0`}>
                {problem.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B1B3D] tracking-tight mb-1">
                  {problem.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Vertical Connector Line with Down Arrow */}
        <div className="flex flex-col items-center justify-center pt-2 pb-0">
          <div className="w-px h-7 border-l-2 border-dashed border-sky-300"></div>
          <a
            href="#platform-solution"
            aria-label="Scroll to Yazi Solution"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('platform-solution');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', '#platform-solution');
              }
            }}
            className="w-8 h-8 rounded-full bg-white text-[#0066FF] border border-[#D0E5FF] flex items-center justify-center hover:scale-110 transition-transform shadow-sm cursor-pointer mt-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
