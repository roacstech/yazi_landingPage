"use client";

import { useEffect, useState } from "react";

const DURATION = 4000;

const features = [
  {
    title: "Personalized support",
    description:
      "Dedicated support designed around your agency, customers, and booking needs.",
    icon: (
      <>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </>
    ),
  },
  {
    title: "Best fares",
    description:
      "Live inventory and competitive net fares that help you protect every booking margin.",
    icon: (
      <>
        <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
        <path d="M7 7h.01" />
      </>
    ),
  },
  {
    title: "Expert guidance",
    description:
      "Get help with bookings, visa support, rescheduling, cancellations, and complex requests.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "24/7 assistance",
    description:
      "Round-the-clock help whenever your agency faces urgent changes or booking issues.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
  },
];

function CheckIcon({ className = "h-3.5 w-3.5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function PreviewTitle({ children, aside }) {
  return (
    <div className="mb-5 flex items-baseline justify-between gap-4">
      <h4 className="text-lg sm:text-xl font-bold text-[#0B1B3D]">
        {children}
      </h4>

      {aside}
    </div>
  );
}

function Row({ children, className = "" }) {
  return (
    <div
      className={`flex items-center justify-between rounded-2xl border border-[#E3E6EC] bg-white px-4 py-3.5 ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------------- PREVIEW 1 ---------------- */

function SupportPreview() {
  const rows = [
    "Client preferences saved",
    "Preferred airlines set",
    "Custom markup rules active",
  ];

  return (
    <div>
      <PreviewTitle>Your support desk</PreviewTitle>

      <p className="-mt-3 mb-5 text-sm text-[#5B6478]">
        Set up around your agency.
      </p>

      <div className="space-y-2.5">
        {rows.map((row) => (
          <Row key={row}>
            <span className="text-sm text-[#0E1B33]">{row}</span>

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F6E7E8] text-[#A61E2B]">
              <CheckIcon />
            </span>
          </Row>
        ))}
      </div>
    </div>
  );
}

/* ---------------- PREVIEW 2 ---------------- */

function FaresPreview() {
  const fares = [
    {
      route: "MSP to NBO",
      time: "07:30 – 19:45 (+1)",
      price: "$780",
      best: true,
    },
    {
      route: "JFK to NBO",
      time: "11:20 – 10:15 (+1)",
      price: "$825",
    },
    {
      route: "IAD to NBO",
      time: "17:45 – 15:30 (+1)",
      price: "$860",
    },
  ];

  return (
    <div>
      <PreviewTitle
        aside={
          <span className="flex items-center gap-1.5 text-xs font-medium text-[#DC2626]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#DC2626]" />
            Live
          </span>
        }
      >
        Net fares
      </PreviewTitle>

      <div className="space-y-2.5">
        {fares.map((fare) => (
          <Row
            key={fare.time}
            className={
              fare.best
                ? "!border-[#DC2626]/40 !bg-[#FCF6F6]"
                : ""
            }
          >
            <div>
              <div className="text-sm font-semibold text-[#0B1B3D]">
                {fare.route}
              </div>

              <div className="mt-0.5 text-xs text-slate-500">
                {fare.time}
              </div>
            </div>

            <div className="text-right">
              <div className="text-base font-bold text-[#0B1B3D]">
                {fare.price}
              </div>

              {fare.best && (
                <div className="mt-0.5 text-[11px] font-semibold text-[#DC2626]">
                  Best net fare
                </div>
              )}
            </div>
          </Row>
        ))}
      </div>
    </div>
  );
}

/* ---------------- PREVIEW 3 ---------------- */

function GuidancePreview() {
  const items = [
    {
      label: "Visa documents checked",
      status: "Done",
      tone: "bg-[#EAF3EE] text-[#2F6B4F]",
    },
    {
      label: "Reschedule request",
      status: "In progress",
      tone: "bg-[#F7F0E2] text-[#8A6420]",
    },
    {
      label: "Cancellation refund",
      status: "Approved",
      tone: "bg-[#EAF3EE] text-[#2F6B4F]",
    },
  ];

  return (
    <div>
      <PreviewTitle>Request tracker</PreviewTitle>

      <div className="space-y-2.5">
        {items.map((item) => (
          <Row key={item.label}>
            <span className="text-sm text-[#0E1B33]">
              {item.label}
            </span>

            <span
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${item.tone}`}
            >
              {item.status}
            </span>
          </Row>
        ))}
      </div>
    </div>
  );
}

/* ---------------- PREVIEW 4 ---------------- */

function AssistancePreview() {
  return (
    <div>
      <PreviewTitle
        aside={
          <span className="flex items-center gap-1.5 text-xs font-medium text-[#2F6B4F]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#3E9C72]" />
            Online now
          </span>
        }
      >
        Support chat
      </PreviewTitle>

      <div className="space-y-3">
        <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-[#0E1B33] px-4 py-2.5 text-sm leading-relaxed text-white">
          My client missed a connection. Can you rebook tonight?
        </div>

        <div className="w-fit max-w-[85%] rounded-2xl rounded-bl-md border border-[#E3E6EC] bg-white px-4 py-2.5 text-sm leading-relaxed text-[#0E1B33]">
          On it. Checking the next available flights now.
        </div>

        <div className="pt-1 text-center text-[11px] text-[#8A93A6]">
          2:14 AM, replied in minutes
        </div>
      </div>
    </div>
  );
}

const previews = [
  SupportPreview,
  FaresPreview,
  GuidancePreview,
  AssistancePreview,
];

export default function WhyChooseUs() {
  const [active, setActive] = useState(0);
  const [resetTimer, setResetTimer] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((current) => (current + 1) % features.length);
    }, DURATION);

    return () => clearTimeout(timer);
  }, [active, resetTimer]);

  const selectFeature = (index) => {
    setActive(index);
    setResetTimer((prev) => prev + 1);
  };

  const handleContactClick = () => {
    const form = document.getElementById("contact-form");

    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      setTimeout(() => {
        document.getElementById("name")?.focus();
      }, 700);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const Preview = previews[active];

  return (
    <section id="why-choose-us" className="relative overflow-hidden bg-white px-5 pt-4 pb-6 md:px-8 md:pt-6 md:pb-10">
      <style>{`
        @keyframes feature-progress {
          from {
            height: 0%;
          }

          to {
            height: 100%;
          }
        }

        @keyframes preview-enter {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Subtle Ambient Glow */}
      <div className="pointer-events-none absolute -left-32 top-[20%] h-[440px] w-[440px] rounded-full bg-blue-50/50 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Main Section Header - Centered like 1st image */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-6 h-[2px] bg-[#DC2626] rounded-full"></span>
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.22em] text-[#0B1B3D]">
              WHY CHOOSE US
            </span>
            <span className="w-6 h-[2px] bg-[#DC2626] rounded-full"></span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0B1B3D] tracking-tight leading-tight mb-2.5">
            Built for travel agents who <span className="text-[#DC2626]">expect more.</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Quote faster, earn better margins, and support every customer with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* LEFT SIDE */}
          <div className="lg:col-span-6">
            {/* FEATURE LIST */}
            <div>
              {features.map((item, index) => {
                const isActive = active === index;

                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => selectFeature(index)}
                    aria-pressed={isActive}
                    className="group relative flex w-full cursor-pointer items-start gap-5 py-4 pl-6 text-left outline-none focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-[#A61E2B]/40"
                  >
                    {/* BASE LINE */}
                    <span className="absolute bottom-0 left-0 top-0 w-px bg-[#DADEE6]" />

                    {/* ACTIVE PROGRESS */}
                    {isActive && (
                      <span className="absolute -left-px bottom-0 top-0 w-[3px] overflow-hidden">
                        <span
                          key={`${active}-${resetTimer}`}
                          className="block w-full bg-[#A61E2B]"
                          style={{
                            animation: `feature-progress ${DURATION}ms linear forwards`,
                          }}
                        />
                      </span>
                    )}

                    {/* ICON */}
                    <span
                      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                        isActive
                          ? "scale-105 border-[#A61E2B] bg-[#A61E2B] text-white shadow-[0_8px_20px_rgba(166,30,43,0.22)]"
                          : "border-[#DADEE6] bg-white text-[#6D768B] group-hover:border-[#A61E2B]/60 group-hover:text-[#A61E2B]"
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-[18px] w-[18px]"
                        aria-hidden="true"
                      >
                        {item.icon}
                      </svg>
                    </span>

                    {/* TEXT */}
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-lg sm:text-xl font-bold transition-all duration-300 ${
                          isActive
                            ? "text-[#0B1B3D]"
                            : "text-slate-400 group-hover:text-[#0B1B3D]"
                        }`}
                      >
                        {item.title}
                      </span>

                      <span
                        className={`grid overflow-hidden transition-all duration-500 ease-out ${
                          isActive
                            ? "mt-1.5 grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <span className="min-h-0 overflow-hidden">
                          <span className="block max-w-md pb-1 text-sm leading-relaxed text-[#5B6478]">
                            {item.description}
                          </span>
                        </span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* BUTTONS */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleContactClick}
                className="cursor-pointer rounded-full bg-[#FB2C36] px-7 py-3 text-center text-sm font-medium text-white shadow-[0_10px_24px_-12px_rgba(14,27,51,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#155DFC] focus:outline-none focus:ring-2 focus:ring-red-500/40"
              >
               Request For Demo
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative mx-auto w-full max-w-md lg:col-span-6 lg:max-w-none">
            <div className="relative mx-auto h-[520px] w-full max-w-[420px] md:h-[580px]">
              {/* BACK ARCH */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[999px] rounded-b-[2.5rem] border border-[#CBD0DB]" />

              {/* MAIN ARCH */}
              <div className="absolute inset-0 rounded-t-[999px] rounded-b-[2.5rem] bg-[#E9ECF1]" />

              {/* DECOR */}
              <div className="absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full bg-white/70" />

              <div className="absolute left-1/2 top-[3.6rem] h-24 w-24 -translate-x-1/2 rounded-full bg-[#F6E7E8]" />

              {/* PORTAL CARD */}
              <div className="absolute inset-x-0 bottom-8 -mx-6 md:-mx-14">
                <div className="overflow-hidden rounded-[1.75rem] border border-[#E3E6EC] bg-[#FBFCFD] shadow-[0_40px_80px_-30px_rgba(14,27,51,0.35)]">
                  {/* HEADER */}
                  <div className="flex items-center justify-between border-b border-[#E9ECF1] bg-white px-5 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FB2C36] text-xs font-bold text-white">
                        Y
                      </span>

                      <span className="text-xs font-medium text-[#5B6478]">
                        Yazi Travels agent portal
                      </span>
                    </div>

                    <span className="text-[10px] font-semibold tracking-[0.15em] text-[#A61E2B]">
                      0{active + 1} / 04
                    </span>
                  </div>

                  {/* ACTIVE PREVIEW */}
                  <div
                    key={active}
                    className="min-h-[300px] p-5 md:p-6"
                    style={{
                      animation:
                        "preview-enter 0.45s cubic-bezier(.22,.8,.25,1)",
                    }}
                  >
                    <Preview />
                  </div>

                  {/* FOOTER */}
                  <div className="border-t border-[#E9ECF1] bg-white px-5 py-2.5 text-center text-[11px] text-[#8A93A6]">
                    Sample data for illustration
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}