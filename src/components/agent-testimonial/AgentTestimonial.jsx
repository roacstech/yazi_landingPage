// NOTE: These are sample testimonials for layout purposes. Replace the names,
// roles, and quotes with real feedback from your agents before publishing.
const testimonials = [
  {
    name: "Priya S.",
    role: "Independent Travel Agent",
    quote:
      "Live inventory and net fares changed how I quote clients. I compare fares in seconds and my margins have improved.",
  },
  {
    name: "Arjun M.",
    role: "Agency Owner",
    quote:
      "Managing all my bookings in one place saves me hours every week. Tracking my earnings is now effortless.",
  },
  {
    name: "Fatima K.",
    role: "Corporate Travel Agent",
    quote:
      "Last-minute changes used to be stressful. With 24/7 support, I get answers fast and my clients stay happy.",
  },
  {
    name: "Daniel R.",
    role: "Travel Consultant",
    quote:
      "The platform is fast and simple. I onboarded in a day and made my first booking the same afternoon.",
  },
  {
    name: "Meera V.",
    role: "Holiday Specialist",
    quote:
      "Competitive fares without any compromise on service. My repeat customers keep coming back because of it.",
  },
  {
    name: "Samuel T.",
    role: "Independent Travel Agent",
    quote:
      "Visa guidance and rescheduling help from the team made me look like an expert in front of my clients.",
  },
];

const avatarColors = [
  "bg-red-600",
  "bg-blue-600",
  "bg-amber-500",
  "bg-emerald-600",
  "bg-purple-600",
  "bg-rose-600",
];

const getInitials = (name) =>
  name
    .replace(".", "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

function Stars() {
  return (
    <div className="mb-3 flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function Card({ item, index }) {
  return (
    <figure className="mr-5 w-[290px] shrink-0 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-red-600 hover:shadow-xl md:w-[340px]">
      <Stars />
      <blockquote className="mb-5 text-sm leading-relaxed text-neutral-600">
        “{item.quote}”
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${
            avatarColors[index % avatarColors.length]
          }`}
        >
          {getInitials(item.name)}
        </div>
        <div>
          <div className="text-sm font-semibold text-neutral-900">
            {item.name}
          </div>
          <div className="text-xs text-neutral-500">{item.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}

function MarqueeRow({ items, reverse = false, duration = 45 }) {
  // Duplicate the list so the loop is seamless (track moves -50%)
  const loop = [...items, ...items];

  return (
    <div className="marquee overflow-hidden">
      <div
        className={`marquee-track flex w-max ${
          reverse ? "marquee-reverse" : "marquee-forward"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((item, i) => (
          <Card key={`${item.name}-${i}`} item={item} index={i % items.length} />
        ))}
      </div>
    </div>
  );
}

export default function AgentTestimonial() {
  // Second row starts from a different position so the rows don't mirror each other
  const rowTwo = [...testimonials.slice(3), ...testimonials.slice(0, 3)];

  return (
    <section id="testimonials" className="relative overflow-hidden bg-white pt-4 sm:pt-6 md:pt-8 pb-6 sm:pb-8 md:pb-10">
      {/* Animation styles */}
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .marquee-forward { animation: marquee-left linear infinite; }
        .marquee-reverse { animation: marquee-right linear infinite; }
        .marquee:hover .marquee-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
        }
      `}</style>

      {/* Soft background accents */}
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-50/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-indigo-50/60 blur-3xl" />

      <div className="relative z-10">
        {/* Main Section Header - Centered like previous sections */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-6 h-[2px] bg-[#DC2626] rounded-full"></span>
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.22em] text-[#0B1B3D]">
              AGENT TESTIMONIALS
            </span>
            <span className="w-6 h-[2px] bg-[#DC2626] rounded-full"></span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0B1B3D] tracking-tight leading-tight mb-2.5">
            Trusted by agents who <span className="text-[#DC2626]">move faster.</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Hear from travel agents who use Yazi Travels to search fares, manage bookings, and grow their business.
          </p>
        </div>

        {/* Auto-scrolling rows with faded edges */}
        <div className="relative space-y-5">
          <MarqueeRow items={testimonials} duration={50} />
          <MarqueeRow items={rowTwo} reverse duration={55} />

          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent md:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent md:w-40" />
        </div>
      </div>
    </section>
  );
}