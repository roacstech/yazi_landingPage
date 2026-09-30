const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Our Services", href: "/our-services" },
  { label: "Contact us", href: "/contact-us" },
];

const services = [
  { label: "Flight Booking", href: "/our-services#flight-booking" },
  { label: "Hotel Booking", href: "/our-services#hotel-booking" },
  { label: "Visa Assistance", href: "/our-services#visa-assistance" },
  { label: "Travel Insurance", href: "/our-services#travel-insurance" },
];

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-black text-white">
      {/* Top panel with rounded bottom corners */}
      <div className="bg-[#ffff] px-6 py-16 md:py-4"></div>

      {/* Giant faded wordmark */}
      <div className="px-4 pt-10 md:pt-14" aria-hidden="true">
        <div className="select-none whitespace-nowrap bg-[linear-gradient(to_bottom,#454545_0%,#1c1c1c_55%,#000_95%)] bg-clip-text text-center text-[12.5vw] font-extrabold uppercase leading-[0.85] tracking-tight text-transparent">
          Yazi Travels
        </div>
      </div>

      {/* Copyright */}
      <div className="px-6 pb-10 pt-8 text-center">
        <p className="text-sm font-medium text-neutral-400">
          © {new Date().getFullYear()} Yazi Travels. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center gap-4 text-xs text-neutral-500">
          <a href="/privacy-policy" className="transition-colors hover:text-neutral-300">
            Privacy Policy
          </a>
          <a href="/terms-conditions" className="transition-colors hover:text-neutral-300">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}