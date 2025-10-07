// components/cta.tsx
import Link from "next/link";

export default function Cta() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-800 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-extrabold text-white">
              Ready to bring your vision to life?
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              Let’s discuss where engineering, software, and operations can deliver the
              highest ROI in your roadmap.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border-2 border-sky-400 bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-300"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center rounded-full border-2 border-sky-300 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              See Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}