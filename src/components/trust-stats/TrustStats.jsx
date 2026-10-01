import { useEffect, useRef, useState } from "react";

// Custom count-up animation hook
function useCounter(target, isVisible, duration = 1800) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = null;
    let frame;

    const step = (time) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(ease * target));

      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setVal(target);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isVisible, target, duration]);

  return val;
}

export default function TrustStats({ airlines: initialAirlines = [] }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [airlines, setAirlines] = useState(initialAirlines);

  // Animated counters
  const airlinesCount = useCounter(500, isVisible);
  const countriesCount = useCounter(190, isVisible);
  const agentsCount = useCounter(5000, isVisible);
  const ticketsCount = useCounter(100, isVisible);

  // Keep airlines synced if passed via props or load from Yazi service fees
  useEffect(() => {
    if (initialAirlines && initialAirlines.length > 0) {
      setAirlines(initialAirlines);
      return;
    }

    // Direct fallback query for Yazi's configured service fee airlines
    Promise.all([
      fetch("https://api.yazitravels.com/api/yazi/v1/live/service-fees").then((r) => r.json()),
      fetch("https://api.yazitravels.com/api/yazi/v1/live/airlines/airlines").then((r) => r.json()),
    ])
      .then(([feesRes, airlinesRes]) => {
        if (feesRes?.data && airlinesRes?.data) {
          const map = new Map();
          airlinesRes.data.forEach((a) => map.set(String(a.id), a));
          const list = [];
          feesRes.data.forEach((f) => {
            const matched = map.get(String(f.airlineCode));
            if (matched?.iata) {
              list.push({
                name: matched.name.replace(/\s+Bahrain/i, ""),
                iata: matched.iata.toUpperCase(),
              });
            }
          });
          if (list.length > 0) setAirlines(list);
        }
      })
      .catch((err) => {
        console.error("Failed to load Yazi airlines:", err);
      });
  }, [initialAirlines]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-8 sm:py-10 md:py-8 lg:py-12 xl:py-14 2xl:py-16"
    >
      {/* 1. Background Image (Rich world map, clouds, and blue sky visible) */}
      <img
        src="/TrustStats/bg-1.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-[42%_50%] md:object-center"
      />

      {/* Top Soft Blend with Hero */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-sky-100/90 via-sky-100/30 to-transparent z-10" />

      {/* Bottom Soft Blend with Next Section */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent via-white/70 to-white z-10" />

      {/* 2. Flight Animation (Hidden on mobile screens, shown on md and above) */}
      <div
        className={`
          hidden md:block
          absolute
          top-[4%]
          sm:top-[5%]
          md:top-[7%]
          lg:top-[5%]
          xl:top-[6%]
          2xl:top-[6%]
          right-[1%]
          sm:right-[2%]
          md:right-[2%]
          lg:right-[2%]
          xl:right-[3%]
          2xl:right-[4%]
          w-[42%]
          sm:w-[35%]
          md:w-[32%]
          lg:w-[31%]
          xl:w-[32%]
          2xl:w-[34%]
          pointer-events-none
          z-10
          transition-all
          duration-[1800ms]
          ease-out

          ${
            isVisible
              ? "opacity-100 translate-x-0 translate-y-0"
              : "opacity-0 translate-x-[100px] translate-y-[60px]"
          }
        `}
      >
        <div className="animate-flight-float">
          <img
            src="/TrustStats/flight.png"
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* 3. Content Layer */}
      <div className="relative z-20 w-full px-5 sm:px-8 md:px-8 lg:px-12 xl:px-20 2xl:px-28 flex flex-col">
        
        {/* TOP: Hero Text Block (Centered on mobile, left-aligned on desktop) */}
        <div className="relative w-full md:max-w-[380px] lg:max-w-[520px] xl:max-w-[620px] pt-0 md:pt-1 flex flex-col items-center text-center md:items-start md:text-left mx-auto md:mx-0">
          {/* Category Tag matching site UI */}
          <div className="flex items-center gap-2.5 mb-2 sm:mb-2.5">
            <span className="w-6 h-[2px] bg-[#DC2626] rounded-full"></span>
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.22em] text-[#0B1B3D]">
              LIVE INVENTORY &amp; DIRECT NET FARES
            </span>
            <span className="w-6 h-[2px] bg-[#DC2626] rounded-full"></span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-black text-[#0B1B3D] tracking-tight leading-tight">
            Connecting Travel Agents to <br />
            <span className="text-[#DC2626]">500+ Global Airlines</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-2 text-slate-600 text-xs sm:text-sm lg:text-[14px] font-medium max-w-sm md:max-w-[360px] lg:max-w-[480px] leading-relaxed mx-auto md:mx-0">
            Real-time fares, automated PNRs, and top-tier agent margins on Yazi Travels.
          </p>
        </div>

        {/* MIDDLE: Live Yazi Platform Airlines Marquee (No Hardcoded Lists) */}
        {airlines.length > 0 && (
          <div className="relative w-full my-5 sm:my-6 md:my-5 lg:my-6 xl:my-7 2xl:my-8 overflow-hidden py-2 sm:py-3 marquee-fade-mask">
            <div className="overflow-hidden w-full">
              <div
                className="animate-marquee flex items-center gap-10 sm:gap-14"
                style={{
                  animationDuration: `${Math.max(airlines.length * 4, 35)}s`,
                }}
              >
                {/* Loop 1 */}
                {airlines.map((airline, idx) => (
                  <div
                    key={`airline-1-${airline.iata || idx}-${idx}`}
                    className="flex items-center gap-3.5 px-2 shrink-0 select-none hover:opacity-75 transition-opacity"
                  >
                    {airline.iata && (
                      <img
                        src={`https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/${airline.iata.toUpperCase()}.svg`}
                        alt={airline.name}
                        className="h-8 sm:h-9 md:h-10 w-auto max-w-[48px] sm:max-w-[60px] md:max-w-[72px] object-contain shrink-0"
                        onError={(e) => {
                          if (!e.currentTarget.dataset.fallback) {
                            e.currentTarget.dataset.fallback = "1";
                            e.currentTarget.src = `https://pics.avs.io/200/80/${airline.iata.toUpperCase()}.png`;
                          } else {
                            e.currentTarget.style.display = "none";
                          }
                        }}
                      />
                    )}
                    <span className="text-sm sm:text-base md:text-[17px] font-bold text-[#0B1B3D] whitespace-nowrap tracking-tight">
                      {airline.name}
                    </span>
                  </div>
                ))}
                {/* Loop 2 (seamless continuation) */}
                {airlines.map((airline, idx) => (
                  <div
                    key={`airline-2-${airline.iata || idx}-${idx}`}
                    className="flex items-center gap-3.5 px-2 shrink-0 select-none hover:opacity-75 transition-opacity"
                  >
                    {airline.iata && (
                      <img
                        src={`https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/${airline.iata.toUpperCase()}.svg`}
                        alt={airline.name}
                        className="h-8 sm:h-9 md:h-10 w-auto max-w-[48px] sm:max-w-[60px] md:max-w-[72px] object-contain shrink-0"
                        onError={(e) => {
                          if (!e.currentTarget.dataset.fallback) {
                            e.currentTarget.dataset.fallback = "1";
                            e.currentTarget.src = `https://pics.avs.io/200/80/${airline.iata.toUpperCase()}.png`;
                          } else {
                            e.currentTarget.style.display = "none";
                          }
                        }}
                      />
                    )}
                    <span className="text-sm sm:text-base md:text-[17px] font-bold text-[#0B1B3D] whitespace-nowrap tracking-tight">
                      {airline.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* BOTTOM: 4 Stats Columns with Animated Numbers (Centered) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-4 lg:gap-8 xl:gap-12 pt-1 md:pt-1 lg:pt-2 w-full max-w-6xl 2xl:max-w-7xl mx-auto justify-items-center">
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#0B1B3D] tracking-tight">
              {airlinesCount}
              <span className="text-[#DC2626]">+</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#0B1B3D] mt-1">
              Global Airlines
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 leading-snug">
              Direct GDS & NDC connections
            </div>
            <div className="w-8 sm:w-10 md:w-8 lg:w-10 h-0.5 bg-[#DC2626] rounded-full mt-2 sm:mt-2.5 mx-auto"></div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#0B1B3D] tracking-tight">
              {countriesCount}
              <span className="text-[#DC2626]">+</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#0B1B3D] mt-1">
              Countries Covered
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 leading-snug">
              Worldwide destination network
            </div>
            <div className="w-8 sm:w-10 md:w-8 lg:w-10 h-0.5 bg-[#DC2626] rounded-full mt-2 sm:mt-2.5 mx-auto"></div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#0B1B3D] tracking-tight">
              {agentsCount.toLocaleString()}
              <span className="text-[#DC2626]">+</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#0B1B3D] mt-1">
              Partner Travel Agents
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 leading-snug">
              Active booking agencies worldwide
            </div>
            <div className="w-8 sm:w-10 md:w-8 lg:w-10 h-0.5 bg-[#DC2626] rounded-full mt-2 sm:mt-2.5 mx-auto"></div>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#0B1B3D] tracking-tight">
              {ticketsCount}
              <span className="text-[#DC2626]">k+</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#0B1B3D] mt-1">
              Tickets Issued
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 leading-snug">
              Automated PNR & instant delivery
            </div>
            <div className="w-8 sm:w-10 md:w-8 lg:w-10 h-0.5 bg-[#DC2626] rounded-full mt-2 sm:mt-2.5 mx-auto"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
