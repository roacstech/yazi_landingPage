export default function Hero() {
  return (
    <section className="relative overflow-hidden w-full min-h-[480px] flex items-center py-16 px-6 border-b border-neutral-200">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source src="/hero_bg_video.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Hero</h2>
        <p className="text-neutral-600">Section content goes here...</p>
      </div>
    </section>
  );
}
