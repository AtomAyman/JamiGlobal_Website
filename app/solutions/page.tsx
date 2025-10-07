// app/solutions/page.tsx
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Solutions — Jami Global",
  description:
    "Case studies and solution patterns across consulting, engineering, software, and operations. Built for measurable outcomes.",
}

export default function SolutionsPage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2400&auto=format&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,.6),rgba(2,6,23,.9))]" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold tracking-[.18em] uppercase text-sky-400">
              Solutions
            </p>
            <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">
              From strategy to shipped
            </h1>
            <p className="mt-4 max-w-2xl text-slate-300">
              Real-world outcomes across product, engineering, software, and operations—
              delivered with executive clarity and hands-on depth.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#case-studies" className="rounded-full border-2 border-sky-400 px-4 py-2 text-sm font-semibold text-sky-100 hover:bg-white/10">Case Studies</a>
              <a href="#process" className="rounded-full border-2 border-sky-400 px-4 py-2 text-sm font-semibold text-sky-100 hover:bg-white/10">Our Process</a>
              <a href="#industries" className="rounded-full border-2 border-sky-400 px-4 py-2 text-sm font-semibold text-sky-100 hover:bg-white/10">Industries</a>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Selected case studies</h2>
            <p className="mt-2 text-sm text-slate-300">A few snapshots of work shipped with measurable impact.</p>
          </div>
          <Link
            href="/contact"
            className="hidden rounded-full border-2 border-sky-300 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:-translate-y-0.5 hover:bg-white/10 sm:inline-flex"
          >
            Start a Project
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Enterprise CAD → PCB → Firmware pipeline",
              blurb:
                "Designed and validated an embedded device: CAD/FEA, custom PCB, firmware, and test fixtures. Cut prototype cycles by 40%.",
              img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1600&auto=format&fit=crop",
              tag: "Engineering & R&D",
            },
            {
              title: "Full-stack platform modernization",
              blurb:
                "Replatformed legacy system to a cloud-native stack with modular APIs and observability. Achieved 99.9% uptime targets.",
              img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
              tag: "Software Development",
            },
            {
              title: "Supply-chain cost-to-serve analytics",
              blurb:
                "Built data model & dashboards to optimize network and inventory. Delivered 30%+ logistics and sourcing savings.",
              img: "/images/website-images/supplychain.jpg",
              tag: "Operations",
            },
            {
              title: "Go-to-market & PMO for a new product line",
              blurb:
                "Aligned strategy, pricing, and delivery. Established PMO and OKRs, accelerating time-to-market by 35%.",
              img: "/images/website-images/gotomarket.jpg",
              tag: "Consulting",
            },
            {
              title: "Mobile + IoT telemetry for field devices",
              blurb:
                "Delivered secure mobile apps, device comms, and cloud ingestion pipeline for real-time insights.",
              img: "/images/website-images/IOT.jpg",
              tag: "Software & IoT",
            },
            {
              title: "Manufacturing quality & reliability uplift",
              blurb:
                "Embedded teams improved yield and root-cause resolution while introducing traceability and SPC dashboards.",
              img: "/images/website-images/Manufacturing.jpg",
              tag: "Operations",
            },
          ].map((c) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-2xl bg-slate-900/70 ring-1 ring-slate-800 transition duration-200 ease-out hover:-translate-y-1 hover:ring-sky-500/40 hover:shadow-lg hover:shadow-sky-500/10"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image src={c.img} alt={c.title} fill className="object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="inline-block rounded-full bg-slate-800 px-2 py-0.5 text-[11px] font-semibold text-sky-300 ring-1 ring-slate-700">
                  {c.tag}
                </span>
                <h3 className="mt-2 text-base font-bold">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{c.blurb}</p>
              </div>
              {/* hover arrow */}
              <span
                className="pointer-events-none absolute bottom-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/70 bg-slate-800/60 text-sky-200 opacity-0 shadow-sm ring-1 ring-slate-700/60 backdrop-blur transition duration-200 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                aria-hidden
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h12M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="border-y border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Our process</h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-300">
            A simple, outcome-driven flow that scales from rapid prototypes to enterprise programs.
          </p>

          <ol className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              { step: "1. Discover", text: "Clarify goals, constraints, and success metrics. Align stakeholders." },
              { step: "2. Design", text: "Architecture, experiments, and roadmaps that de-risk the path." },
              { step: "3. Deliver", text: "Build, test, and ship—short, measurable sprints with demos." },
              { step: "4. Scale", text: "Handover, train, and optimize for reliability and cost." },
            ].map((s) => (
              <li
                key={s.step}
                className="group rounded-2xl bg-slate-900/70 p-5 ring-1 ring-slate-800 transition duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:ring-sky-500/40 hover:shadow-lg hover:shadow-sky-500/10"
              >
                <div className="text-sm font-semibold text-sky-300">{s.step}</div>
                <p className="mt-1 text-sm text-slate-300">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <h2 className="text-2xl font-extrabold sm:text-3xl">Industries</h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-300">
          We’ve partnered with leaders across manufacturing, healthcare, transportation, and technology.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Manufacturing", img: "/images/website-images/manufacturing copy.jpg" },
            { title: "Healthcare & MedTech", img: "/images/website-images/healthcare.jpg" },
            { title: "Transportation", img: "/images/website-images/transpot.jpg" },
            { title: "Technology", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1400&auto=format&fit=crop" },
          ].map((i) => (
            <article
              key={i.title}
              className="group overflow-hidden rounded-2xl bg-slate-900/70 ring-1 ring-slate-800 transition hover:-translate-y-1 hover:ring-sky-500/40"
            >
              <div className="relative h-36 w-full overflow-hidden">
                <Image src={i.img} alt={i.title} fill className="object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold">{i.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TRUSTED BY (logos you already added to /public/images) */}
      <section className="border-y border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <p className="text-xs font-extrabold tracking-[.18em] uppercase text-sky-400 text-center">Trusted by</p>
          <h2 className="mt-2 text-center text-2xl font-extrabold sm:text-3xl">Companies we’ve worked with</h2>
          <div className="mt-8 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-6">
            {[
              { name: "Siemens", src: "/images/Siemens_LOGO.png" },
              { name: "Volkswagen", src: "/images/website-images/Volkswagen-logo.png" },
              { name: "Apple", src: "/images/apple-logo.png" },
              { name: "IBM", src: "/images/website-images/ibm-logo.png" },
              { name: "GE", src: "/images/website-images/GE-logo.png" },
              { name: "Amtrak", src: "/images/Amtrak_logo.png" },
            ].map((l) => (
              <div key={l.name} className="flex items-center justify-center grayscale opacity-80 transition hover:opacity-100 hover:grayscale-0">
                <Image src={l.src} alt={`${l.name} logo`} width={140} height={60} className="h-auto max-h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-800 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-extrabold">Have a problem worth solving?</h3>
              <p className="mt-1 text-sm text-slate-300">
                Share your goals—we’ll map a path from discovery to delivery with measurable ROI.
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
                href="/services"
                className="inline-flex items-center rounded-full border-2 border-sky-300 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}