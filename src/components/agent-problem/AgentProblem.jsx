import React from 'react';

const PROBLEMS = [
  {
    icon: (
      <svg className="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Multiple Disconnected Portals',
    description:
      'Agents waste valuable time switching between different GDS systems, airline NDC platforms, and budget carrier websites just to compare fares for one inquiry.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Slow & Manual Ticket Issuance',
    description:
      'Waiting for offline consolidator queues often causes airline fare holds to expire, resulting in missed booking windows and unexpected fare increases.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Hidden Fees & Squeezed Margins',
    description:
      'Unclear net fares and hidden intermediary charges erode your agency profits, making it difficult to control customer markups effectively.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Complicated Reschedules & Refunds',
    description:
      'Handling date changes and passenger cancellations manually requires long wait times with airline support desks and complex penalty recalculations.'
  }
];

export default function AgentProblem() {
  return (
    <section id="problem" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50/70 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-700 bg-sky-100/80 mb-4">
            The Agent's Challenge
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            Why Traditional Flight Booking Slows Your Agency Down
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Booking flights for your customers should be fast and straightforward. Yet most travel agencies still struggle with disconnected tools, manual workflows, and unpredictable pricing.
          </p>
        </div>

        {/* 4 Clean Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {PROBLEMS.map((problem, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-white rounded-2xl border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center mb-5">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2.5">
                {problem.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Simple & Clean Solution Bridge Card */}
        <div className="rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-sky-900 to-indigo-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Your agency deserves a unified, faster way to book flights.
            </h3>
            <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed">
              Yazi Travels brings major GDS providers, NDC fares, and low-cost airlines into a single, easy-to-use platform with instant ticketing.
            </p>
          </div>
          <a
            href="#platform-solution"
            className="shrink-0 px-6 py-3 rounded-xl bg-white text-neutral-900 font-semibold text-sm hover:bg-sky-50 transition-colors shadow-sm"
          >
            See How Yazi Solves This
          </a>
        </div>

      </div>
    </section>
  );
}
