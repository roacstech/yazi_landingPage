import { useState } from "react";

const FAQ_DATA = [
  {
    id: "platform-overview",
    question: "What is Yazi Travels and who can use the platform?",
    answer:
      "Yazi Travels is an ARC and IATA-accredited B2B airline ticketing and reservation platform engineered for independent travel agents, agencies, and tour operators. We provide direct inventory access to 500+ global airlines, real-time GDS/NDC feeds, wholesale net fares, and instant automated PNR issuance.",
  },
  {
    id: "ticket-issuance",
    question: "How does ticket issuance and automated PNR work?",
    answer:
      "Once you confirm a flight offer on Yazi, our automated issuance engine generates the carrier PNR and issues the valid e-ticket in real time. E-ticket numbers, itinerary receipts, and accounting invoice PDFs are immediately delivered to your agent dashboard and traveler's email.",
  },
  {
    id: "sub-agents",
    question: "How do I manage sub-agents and team staff in Yazi?",
    answer:
      "Agency administrators can easily create and manage unlimited sub-agents and team members from the Users dashboard. Configure custom booking credit limits, assign granular staff permissions, set specific markup rules per sub-agent, and view performance reports.",
  },
  {
    id: "commissions-fees",
    question: "How do airline commissions and service fees work?",
    answer:
      "Agents retain 100% control over client pricing and profit margins. You can access contracted airline commissions on partner carriers and configure customizable service fee rules (fixed per-passenger fee or percentage markup) that are automatically calculated at checkout.",
  },
  {
    id: "payments-settlement",
    question: "What payment and settlement terms are supported?",
    answer:
      "Yazi supports flexible payment options including agency wallet balances, bank wire transfers, credit/debit cards, and pre-approved agent credit accounts. Standard airline ticket issuances are settled within 24 hours under the Agent Platform Agreement.",
  },
  {
    id: "changes-refunds",
    question: "How are ticket changes, cancellations, and refunds handled?",
    answer:
      "Date changes, route modifications, 24-hour void requests, and cancellation refunds can be submitted directly through your active booking queue in the portal. All changes are processed automatically according to the airline's specific fare rules with live transparent status tracking.",
  },
  {
    id: "agent-support",
    question: "How do I contact Yazi agent support?",
    answer:
      "We provide round-the-clock priority B2B support for travel agents. You can reach our dedicated operations desk directly via the in-platform live chat, ticket management queue, or by email at support@yazitravels.com.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative w-full pt-6 sm:pt-8 lg:pt-10 pb-16 sm:pb-20 lg:pb-24"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F2F7FE 25%, #EAF3FD 60%, #FFFFFF 100%)",
      }}
    >
      {/* Top seamless blend from previous section */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white to-transparent" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 md:px-10">
        
        {/* Main Section Header - Centered like previous sections */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-6 h-[2px] bg-[#DC2626] rounded-full"></span>
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.22em] text-[#0B1B3D]">
              FAQ
            </span>
            <span className="w-6 h-[2px] bg-[#DC2626] rounded-full"></span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0B1B3D] tracking-tight leading-tight mb-2.5">
            Simple Answers for a Smoother <span className="text-[#DC2626]">Booking Experience.</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Find quick answers about our B2B agent booking platform, direct net fares, sub-agent permissions, and ticketing operations.
          </p>
        </div>

        {/* Centered Accordion Column */}
        <div className="w-full max-w-3xl mx-auto flex flex-col divide-y divide-[#BFDAF7] border-t border-b border-[#BFDAF7]">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="py-3.5 sm:py-4 transition-colors">
                {/* Question Trigger */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none group py-0.5"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-[15px] sm:text-base md:text-[17px] font-bold tracking-tight transition-colors duration-200 leading-snug pr-2 ${
                      isOpen
                        ? "text-[#0066FF]"
                        : "text-[#0B1B3D] group-hover:text-[#0066FF]"
                    }`}
                  >
                    {item.question}
                  </span>

                  {/* Rotating Plus/Cross Icon (Right-aligned in straight vertical line) */}
                  <div className="shrink-0 w-6 h-6 flex items-center justify-center text-[#0066FF]">
                    <svg
                      className="w-4 h-4"
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        transition:
                          "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </button>

                {/* Truly Smooth Fluid Grid Accordion (450ms decelerated curve) */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                    transition:
                      "grid-template-rows 450ms cubic-bezier(0.16, 1, 0.3, 1), opacity 320ms ease",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <div className="pt-2 pb-3 pr-6">
                      <p className="text-slate-600 text-xs sm:text-sm md:text-[15px] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
