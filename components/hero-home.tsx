// components/hero-home.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background image, darker + subtle gradient */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1676277755906-ee20b312b036?q=80&w=2400&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Dark gradient overlay to keep text readable */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,.6),rgba(2,6,23,.9))]" />

      <div className="relative mx-auto max-w-6xl px-4 py-28 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold tracking-[.18em] uppercase text-sky-400">
            Jami Global
          </p>
          <h1 className="mt-2 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Global Innovation. Local Impact.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Engineering, software, and operations built for measurable outcomes.
            Trusted by enterprises. Delivered worldwide.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border-2 border-sky-400 bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-300"
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border-2 border-sky-300 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}