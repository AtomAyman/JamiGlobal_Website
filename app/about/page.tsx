// app/about/page.tsx
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "About — Jami Global",
  description:
    "Learn about Jami Global’s mission, leadership, and global presence. 20+ years delivering engineering, software, and operations with measurable outcomes.",
}

export default function AboutPage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: 'url(/images/website-images/background.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,.6),rgba(2,6,23,.9))]" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold tracking-[.18em] uppercase text-sky-400">
              About Us
            </p>
            <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">
              Global Innovation. Local Impact.
            </h1>
            <p className="mt-4 max-w-2xl text-slate-300">
              Jami Global is a consulting, design, and solutions firm with 20+ years of experience.
              We partner with executives and investors to de-risk decisions, accelerate timelines,
              and unlock measurable ROI across engineering, software, and operations.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VALUES */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Our Mission</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Deliver innovation that moves markets—turning strategy into systems, and ideas into
              reliable, scalable products. We measure success by cycle-time reduced, cost saved,
              reliability gained, and growth unlocked.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "Outcome-Driven", body: "Ship value fast, with proof in the metrics." },
              { title: "Hands-On", body: "Executive clarity + engineering depth." },
              { title: "Global-Local", body: "Operate worldwide, adapt locally." },
            ].map((v) => (
              <div
                key={v.title}
                className="group rounded-2xl bg-slate-900/70 p-5 ring-1 ring-slate-800 transition duration-200 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:ring-sky-500/40 hover:shadow-lg hover:shadow-sky-500/10"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/0 to-white/0 transition group-hover:to-sky-500/5" />
                <h3 className="text-base font-bold">{v.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="border-y border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80">
              <Image
                src="/images/website-images/company.jpg"
                alt="Strategy workshop"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">Our Story</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Founded by engineers and operators, Jami Global grew from a simple premise:
                enterprises don’t need more slideware—they need execution. Over the last two decades,
                we’ve helped leaders across industries bring new products to market, modernize supply
                chains, and scale platforms without sacrificing quality.
              </p>
              <ul className="mt-4 list-disc pl-5 text-sm text-slate-300">
                <li>20+ years delivering outcomes for global enterprises</li>
                <li>Engineering &amp; software under one roof</li>
                <li>Embedded, PCB, CAD/FEA, 3D printing, full-stack, cloud, mobile, IoT</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20" id="leadership">
        <p className="text-xs font-extrabold tracking-[.18em] uppercase text-sky-400">Leadership</p>
        <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Executive Team</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            {
              name: "Jaleel Suhrawardy",
              title: "CEO & Managing Partner",
              img: "/images/website-images/Jal.png",
            },
            {
              name: "Zaki Mohammad",
              title: "VP of Software — Full-stack, Cloud, Mobile",
              img: "/images/website-images/Zaki.jpg",
            },
            {
              name: "Ayman Mujtaba",
              title: "R&D Engineer — 3D Printing, CAD, PCB, Embedded",
              img: "/images/website-images/Ayman%20Headsht.jpg",
            },

            {
              name: "Naseer Mir",
              title: "Supply-Chain & Operations Advisor",
              img: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1200&auto=format&fit=crop",
            },
            {
              name: "Ibrahim Khalil",
              title: "Cybersecurity & Portfolio Advisor",
              img: "/images/website-images/khalil.jpeg",
            },
          ].map((p) => (
            <article
              key={p.name}
              className="group rounded-2xl bg-slate-900/70 p-5 ring-1 ring-slate-800 transition duration-200 ease-out hover:-translate-y-1 hover:ring-sky-500/40 hover:shadow-lg hover:shadow-sky-500/10"
            >
              <div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl">
                <Image src={p.img} alt={`${p.name} headshot`} fill className="object-cover transition duration-300 group-hover:scale-[1.03]" />
              </div>
              <h3 className="text-sm font-bold">{p.name}</h3>
              <p className="text-xs text-slate-400">{p.title}</p>
            </article>
          ))}
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="border-y border-slate-800" id="global">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <p className="text-xs font-extrabold tracking-[.18em] uppercase text-sky-400">Global Presence</p>
          <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Global footprint, local insight</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            HQ in Michigan with offices in Ontario (Canada) and India. Expansion plans across Türkiye, Saudi Arabia, and the UAE.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <ul className="list-disc pl-5 text-sm text-slate-300">
              <li>Michigan, USA (HQ)</li>
              <li>Ontario, Canada</li>
              <li>India</li>
            </ul>
            <ul className="list-disc pl-5 text-sm text-slate-300">
              <li>Türkiye (planned)</li>
              <li>Saudi Arabia (planned)</li>
              <li>United Arab Emirates (planned)</li>
            </ul>
          </div>
          <div className="relative mt-6 h-64 w-full overflow-hidden rounded-2xl sm:h-80">
            <Image
              src="/images/website-images/global.webp"
              alt="World map with location markers"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* TIMELINE / MILESTONES */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <p className="text-xs font-extrabold tracking-[.18em] uppercase text-sky-400">Milestones</p>
        <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">A track record of delivery</h2>
        <ol className="mt-6 border-l border-slate-800 pl-6">
          {[
            { year: "2003", text: "Founded with a focus on engineering execution and rapid prototyping." },
            { year: "2012", text: "Expanded into full-stack software and cloud integrations." },
            { year: "2017", text: "Scaled delivery with global partners and enterprise programs." },
            { year: "2025", text: "Strengthened global footprint; expansion plans in Türkiye, Saudi Arabia, UAE." },
          ].map((m) => (
            <li key={m.year} className="group mb-6">
              <div className="-ml-[31px] mb-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-400 ring-4 ring-slate-950 transition group-hover:scale-110" />
              <div className="text-sm">
                <span className="mr-3 rounded-full bg-slate-900/70 px-2 py-0.5 text-xs font-semibold ring-1 ring-slate-800 group-hover:ring-sky-500/40">
                  {m.year}
                </span>
                <span className="text-slate-300">{m.text}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-800 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-extrabold">Let’s build what’s next</h3>
              <p className="mt-1 text-sm text-slate-300">
                Share your roadmap—we’ll pinpoint where engineering, software, and operations can deliver the highest ROI.
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