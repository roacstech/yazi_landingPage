import { useState, useEffect } from "react";

const TYPED_WORD = "Travel agents";

export default function Hero() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let delay = deleting ? 50 : 110;

    if (!deleting && typed === TYPED_WORD) {
      delay = 1800;
    }

    if (deleting && typed === "") {
      delay = 500;
    }

    const timeout = setTimeout(() => {
      if (!deleting && typed === TYPED_WORD) {
        setDeleting(true);
      } else if (deleting && typed === "") {
        setDeleting(false);
      } else {
        setTyped(
          TYPED_WORD.slice(
            0,
            typed.length + (deleting ? -1 : 1)
          )
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [typed, deleting]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: send form data to API
    console.log(form);
  };

  const inputClass =
    "w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/30";

  return (
    <section className="relative flex min-h-[560px] w-full items-center overflow-hidden border-b border-neutral-200 px-6 pb-16 pt-28 md:min-h-[700px] lg:min-h-[85vh]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero_bg_video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/50" />

      {/* Logo */}
      <a
        href="/"
        className="absolute left-0 top-5 z-20 cursor-pointer rounded-r-full bg-white pb-4 pl-2 pr-8 pt-3 shadow-lg"
      >
        <img
          src="/yazi_logo.png"
          alt="Yazi Travels"
          className="h-10 w-auto object-contain md:h-12"
        />
      </a>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        {/* LEFT SIDE */}
        <div>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-6xl">
            Built for{" "}
            <span className="relative inline-block whitespace-nowrap text-red-600">
              {/* reserve width */}
              <span
                className="invisible"
                aria-hidden="true"
              >
                {TYPED_WORD}
              </span>

              {/* animated word */}
              <span
                className="absolute left-0 top-0 whitespace-nowrap"
                aria-label={TYPED_WORD}
              >
                {typed}

                <span className="ml-1 inline-block h-[0.85em] w-[4px] translate-y-[0.1em] animate-pulse bg-amber-300" />
              </span>
            </span>{" "}
            designed for faster business
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-neutral-200 md:text-xl lg:text-xl">
            Search global flight inventory, compare fares, manage bookings,
            and track your earnings from one powerful platform.
          </p>

          <a
            href="https://app.yazitravels.com/register"
            target="_blank"
            rel="noopener noreferrer"
           className="cursor-pointer rounded-full bg-[#FB2C36] px-7 py-3 text-center text-sm font-medium text-white shadow-[0_10px_24px_-12px_rgba(14,27,51,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#155DFC]"
          >
            Register Your Agency
          </a>
        </div>

        {/* RIGHT SIDE CONTACT FORM */}
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="w-full max-w-md scroll-mt-24 rounded-2xl bg-white p-6 shadow-xl md:p-8 lg:ml-auto"
        >
          <h2 className="mb-1 text-center text-xl font-bold text-neutral-900">
            Contact Us
          </h2>

          <p className="mb-5 text-center text-sm text-neutral-500">
            Tell us how we can help your travel business.
          </p>

          <div className="space-y-4">
            {/* NAME */}
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-neutral-700"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={inputClass}
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-neutral-700"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>

            {/* DESCRIPTION */}
            <div>
              <label
                htmlFor="description"
                className="mb-1 block text-sm font-medium text-neutral-700"
              >
                Description
              </label>

              <textarea
                id="description"
                name="description"
                rows={4}
                required
                value={form.description}
                onChange={handleChange}
                placeholder="How can we help you?"
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full cursor-pointer rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}