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

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch("https://formsubmit.co/ajax/e1863bcfb160144b6197b4ec737a0220", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "Name": form.name,
          "Email": form.email,
          "Description": form.description,
          _subject: `New User Registration: ${form.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json();

      if (response.ok || data.success === "true" || data.success === true) {
        setStatus({ loading: false, success: true, error: null });
        setForm({ name: "", email: "", description: "" });

        // Auto-dismiss the success toast after 4 seconds
        setTimeout(() => {
          setStatus((prev) => ({ ...prev, success: false }));
        }, 4000);
      } else {
        throw new Error(data.message || "Failed to submit registration. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus({
        loading: false,
        success: false,
        error: "Unable to submit right now. Please check your connection or contact roacstech@gmail.com directly.",
      });

      // Auto-dismiss the error toast after 6 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, error: null }));
      }, 6000);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/30";

  return (
    <section className="relative flex min-h-[560px] w-full items-center overflow-hidden px-6 pb-16 pt-28 md:min-h-[700px] lg:min-h-[85vh]">
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

      {/* Seamless Soft Bottom Transition into TrustStats */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent via-black/20 to-sky-100/80 z-10" />

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

          {/* <a
            href="https://app.yazitravels.com/register"
            target="_blank"
            rel="noopener noreferrer"
           className="cursor-pointer rounded-full bg-[#FB2C36] px-7 py-3 text-center text-sm font-medium text-white shadow-[0_10px_24px_-12px_rgba(14,27,51,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#155DFC]"
          >
            Register Your Agency
          </a> */}
        </div>

        {/* RIGHT SIDE CONTACT FORM */}
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="w-full max-w-md scroll-mt-24 rounded-2xl bg-white p-6 shadow-xl md:p-8 lg:ml-auto"
        >
          <h2 className="mb-1 text-center text-xl font-bold text-neutral-900">
            Request For Demo
          </h2>

          <p className="mb-5 text-center text-sm text-neutral-500">
            Tell us how we can help your travel business.
          </p>

          {/* SUCCESS BANNER */}
          {status.success && (
            <div className="relative mb-4 rounded-xl border border-emerald-200 bg-emerald-50/90 p-4 text-center transition-all duration-300 animate-in fade-in">
              <button
                type="button"
                onClick={() => setStatus((prev) => ({ ...prev, success: false }))}
                className="absolute top-2 right-2.5 text-emerald-600 hover:text-emerald-900 text-xs font-bold p-1 cursor-pointer"
                title="Dismiss"
              >
                ✕
              </button>
              <div className="flex items-center justify-center gap-1.5 text-sm font-bold text-emerald-800 mb-1">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                Registration Sent!
              </div>
              <p className="text-xs text-emerald-700 leading-relaxed pr-2">
                Thank you! Your information has been delivered to our team at <span className="font-semibold text-emerald-900">roacstech@gmail.com</span>. We will reach out shortly.
              </p>
            </div>
          )}

          {/* ERROR BANNER */}
          {status.error && (
            <div className="mb-4 rounded-xl border border-rose-200 bg-rose-50/90 p-3.5 text-center text-xs text-rose-700 leading-relaxed">
              {status.error}
            </div>
          )}

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
                disabled={status.loading}
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
                disabled={status.loading}
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
                disabled={status.loading}
                value={form.description}
                onChange={handleChange}
                placeholder="How can we help you?"
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={status.loading}
              className={`w-full cursor-pointer rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                status.loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg active:scale-[0.99]"
              }`}
            >
              {status.loading ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                  </svg>
                  <span>Sending Registration...</span>
                </>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}