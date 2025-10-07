// app/services/page.tsx
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Services — Jami Global",
  description:
    "Consulting & Strategy, Engineering & R&D, Software Development, and Supply-Chain/Operations designed for measurable outcomes.",
}

export default function ServicesPage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2400&auto=format&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,.6),rgba(2,6,23,.9))]" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold tracking-[.18em] uppercase text-sky-400">
              Services
            </p>
            <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">Built for measurable outcomes</h1>
            <p className="mt-4 max-w-2xl text-slate-300">
              From strategy to delivery, we help executives and investors de-risk decisions,
              accelerate timelines, and unlock ROI across engineering, software, and operations.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#consulting" className="rounded-full border-2 border-sky-400 px-4 py-2 text-sm font-semibold text-sky-100 hover:bg-white/10">Consulting</a>
              <a href="#engineering" className="rounded-full border-2 border-sky-400 px-4 py-2 text-sm font-semibold text-sky-100 hover:bg-white/10">Engineering</a>
              <a href="#software" className="rounded-full border-2 border-sky-400 px-4 py-2 text-sm font-semibold text-sky-100 hover:bg-white/10">Software</a>
              <a href="#supply" className="rounded-full border-2 border-sky-400 px-4 py-2 text-sm font-semibold text-sky-100 hover:bg-white/10">Supply-Chain</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTING & STRATEGY */}
      <section id="consulting" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80">
            <Image
              src="/images/website-images/consulting.webp"
              alt="Executive strategy session"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Consulting &amp; Strategy</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Solve complex challenges with clarity. We align product strategy with operating models,
              quantify trade-offs, and build execution roadmaps that stick.
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-slate-300">
              <li className="group rounded-2xl bg-slate-900/70 p-4 ring-1 ring-slate-800 transition hover:-translate-y-1 hover:ring-sky-500/40">
                Strategic roadmapping
              </li>
              <li className="group rounded-2xl bg-slate-900/70 p-4 ring-1 ring-slate-800 transition hover:-translate-y-1 hover:ring-sky-500/40">
                Operating model design
              </li>
              <li className="group rounded-2xl bg-slate-900/70 p-4 ring-1 ring-slate-800 transition hover:-translate-y-1 hover:ring-sky-500/40">
                Due-diligence / tech assessments
              </li>
              <li className="group rounded-2xl bg-slate-900/70 p-4 ring-1 ring-slate-800 transition hover:-translate-y-1 hover:ring-sky-500/40">
                Program &amp; PMO setup
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ENGINEERING & R&D */}
      <section id="engineering" className="border-y border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">Engineering &amp; R&amp;D</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Turn ideas into prototypes and products. CAD, FEA, PCB &amp; embedded, and 3D printing—
                integrated with software from day one.
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-slate-300">
                <li className="group rounded-2xl bg-slate-900/70 p-4 ring-1 ring-slate-800 transition hover:-translate-y-1 hover:ring-sky-500/40">
                  CAD / FEA
                </li>
                <li className="group rounded-2xl bg-slate-900/70 p-4 ring-1 ring-slate-800 transition hover:-translate-y-1 hover:ring-sky-500/40">
                  PCB &amp; Embedded systems
                </li>
                <li className="group rounded-2xl bg-slate-900/70 p-4 ring-1 ring-slate-800 transition hover:-translate-y-1 hover:ring-sky-500/40">
                  Rapid prototyping / 3D printing
                </li>
                <li className="group rounded-2xl bg-slate-900/70 p-4 ring-1 ring-slate-800 transition hover:-translate-y-1 hover:ring-sky-500/40">
                  Hardware-software integration
                </li>
              </ul>
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80">
              <Image
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1600&auto=format&fit=crop"
                alt="Engineer assembling PCB prototype"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOFTWARE DEVELOPMENT */}
      <section id="software" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80">
            <Image
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop"
              alt="Developer working across multiple screens"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Software Development</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Full-stack platforms and applications built to scale—web, mobile, cloud, and IoT—
              with secure, maintainable code and clear handoff.
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-slate-300">
              <li className="group rounded-2xl bg-slate-900/70 p-4 ring-1 ring-slate-800 transition hover:-translate-y-1 hover:ring-sky-500/40">
                Full-stack (frontend &amp; backend)
              </li>
              <li className="group rounded-2xl bg-slate-900/70 p-4 ring-1 ring-slate-800 transition hover:-translate-y-1 hover:ring-sky-500/40">
                Cloud &amp; APIs
              </li>
              <li className="group rounded-2xl bg-slate-900/70 p-4 ring-1 ring-slate-800 transition hover:-translate-y-1 hover:ring-sky-500/40">
                Mobile &amp; IoT
              </li>
              <li className="group rounded-2xl bg-slate-900/70 p-4 ring-1 ring-slate-800 transition hover:-translate-y-1 hover:ring-sky-500/40">
                DevOps &amp; reliability
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SUPPLY-CHAIN & OPERATIONS */}
      <section id="supply" className="border-y border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">Supply-Chain &amp; Operations</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Optimize costs and resilience from sourcing to delivery. We redesign processes,
                leverage data, and partner with your vendors to improve service levels and margins.
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-slate-300">
                <li className="group rounded-2xl bg-slate-900/70 p-4 ring-1 ring-slate-800 transition hover:-translate-y-1 hover:ring-sky-500/40">
                  Network &amp; inventory optimization
                </li>
                <li className="group rounded-2xl bg-slate-900/70 p-4 ring-1 ring-slate-800 transition hover:-translate-y-1 hover:ring-sky-500/40">
                  Supplier strategy &amp; sourcing
                </li>
                <li className="group rounded-2xl bg-slate-900/70 p-4 ring-1 ring-slate-800 transition hover:-translate-y-1 hover:ring-sky-500/40">
                  Cost-to-serve analytics
                </li>
                <li className="group rounded-2xl bg-slate-900/70 p-4 ring-1 ring-slate-800 transition hover:-translate-y-1 hover:ring-sky-500/40">
                  Ops excellence &amp; quality
                </li>
              </ul>
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80">
              <Image
                src="/images/website-images/supplychain.jpg"
                alt="Logistics and supply chain operations"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROOF / STATS STRIP */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { stat: "20+ yrs", label: "Global delivery" },
              { stat: "35–50%", label: "Cycle-time reductions" },
              { stat: "30%+", label: "Supply-chain savings" },
            ].map((s) => (
              <div
                key={s.stat}
                className="group rounded-2xl bg-slate-900/70 p-5 text-center ring-1 ring-slate-800 transition hover:-translate-y-1 hover:scale-[1.02] hover:ring-sky-500/40 hover:shadow-lg hover:shadow-sky-500/10"
              >
                <div className="text-2xl font-extrabold text-white">{s.stat}</div>
                <div className="text-xs text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <h2 className="text-2xl font-extrabold sm:text-3xl">FAQs</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                q: "How do we start an engagement?",
                a: "We begin with a short discovery call to align on goals, scope, and constraints. Then we propose a phased plan with clear milestones and success metrics.",
              },
              {
                q: "Do you work fixed-scope or retainer?",
                a: "Both. For well-defined deliverables we offer fixed-scope sprints. For ongoing work we structure a monthly retainer with agreed outcomes.",
              },
              {
                q: "Can you integrate with our internal teams?",
                a: "Yes. We regularly embed with product, engineering, and operations teams—using your tools, rituals, and security requirements.",
              },
              {
                q: "Where do you operate?",
                a: "HQ in Michigan with offices in Ontario (Canada) and India. Expansion plans across Türkiye, Saudi Arabia, and the UAE.",
              },
            ].map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl bg-slate-900/70 p-5 ring-1 ring-slate-800 open:ring-sky-500/30 transition"
              >
                <summary className="cursor-pointer list-none text-base font-semibold">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-sky-400 align-middle" /> {f.q}
                </summary>
                <p className="mt-2 text-sm text-slate-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-800 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-extrabold">Ready to prioritize ROI?</h3>
              <p className="mt-1 text-sm text-slate-300">
                Share your roadmap—we’ll highlight where engineering, software, and operations deliver the most impact.
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
    </main>
  )
}