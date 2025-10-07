// components/features.tsx
import Image from "next/image";
import Link from "next/link";

export default function Features() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        {/* Why Choose Us */}
        <p className="text-xs font-extrabold tracking-[.18em] uppercase text-sky-400">
          Why Choose Us
        </p>
        <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
          Experience, leadership, and measurable outcomes
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
          We combine executive insight with hands-on technical depth to deliver
          faster development cycles, lower costs, and higher reliability for
          enterprises and high-growth ventures.
        </p>

        {/* Stat cards with hover effects */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { stat: "20+ yrs", label: "Global delivery" },
            { stat: "35–50%", label: "Cycle-time reductions" },
            { stat: "30%+", label: "Supply-chain savings" },
          ].map((item) => (
            <div
              key={item.stat}
              className="group relative rounded-2xl bg-slate-900/70 p-5 text-center ring-1 ring-slate-800 transition duration-200 ease-out
                         hover:-translate-y-1 hover:scale-[1.02] hover:ring-sky-500/40 hover:shadow-lg hover:shadow-sky-500/10"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/0 to-white/0 transition
                              group-hover:to-sky-500/5" />
              <div className="relative">
                <div className="text-2xl font-extrabold text-white">{item.stat}</div>
                <div className="text-xs text-slate-400">{item.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Solutions teaser (unchanged, but you could also add hover on the image) */}
        <div className="mt-12 grid gap-8 border-t border-slate-800 pt-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-extrabold tracking-[.18em] uppercase text-sky-400">
              Solutions
            </p>
            <h3 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
              From strategy to delivery
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Whether developing next-gen software platforms, designing embedded systems,
              or streamlining supply-chains, we partner from strategy through implementation
              to de-risk decisions and accelerate results.
            </p>
            <div className="mt-5">
              <Link
                href="/solutions"
                className="inline-flex items-center rounded-full border-2 border-sky-300 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
              alt="Cross-functional delivery team collaborating"
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}