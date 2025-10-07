// components/workflows.tsx
import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Consulting & Strategy",
    href: "/services#consulting",
    img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1200&auto=format&fit=crop",
    alt: "Executive strategy session",
    body:
      "Solve complex challenges with clarity. From product roadmaps to operational optimization, we deliver executive-level guidance backed by data.",
    bullets: ["Strategic roadmapping", "Operating model design", "Due-diligence support"],
  },
  {
    title: "Engineering & R&D",
    href: "/services#engineering",
    img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop",
    alt: "Engineer assembling PCB prototype",
    body:
      "Turn ideas into prototypes and products. CAD, PCB, embedded systems, and 3D printing—integrated with software from day one.",
    bullets: ["CAD / FEA", "PCB & Embedded", "Rapid Prototyping"],
  },
  {
    title: "Software Development",
    href: "/services#software",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    alt: "Developer working across multiple screens",
    body:
      "Full-stack platforms and applications built to scale—cloud, web, mobile, and IoT—with secure, maintainable code.",
    bullets: ["Full-stack", "Cloud & APIs", "Mobile & IoT"],
  },
];

export default function Workflows() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <p className="text-xs font-extrabold tracking-[.18em] uppercase text-sky-400">
          What We Do
        </p>
        <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
          Innovative Solutions
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group relative block rounded-2xl bg-slate-900/70 p-5 ring-1 ring-slate-800 transition duration-200 ease-out
                         hover:-translate-y-1 hover:scale-[1.02] hover:ring-sky-500/40 hover:shadow-lg hover:shadow-sky-500/10
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              {/* decorative edge light on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/0 to-white/0 transition
                              group-hover:to-sky-500/5" />

              <div className="relative">
                <div className="relative mb-4 h-40 w-full overflow-hidden rounded-xl">
                  <Image
                    src={c.img}
                    alt={c.alt}
                    fill
                    className="transform-gpu object-cover transition duration-300 ease-out group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>

                <h3 className="text-base font-bold text-white">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{c.body}</p>
                <ul className="mt-3 list-disc pl-5 text-sm text-slate-300">
                  {c.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                {/* Hover arrow */}
                <span
                  className="pointer-events-none absolute bottom-5 right-5 inline-flex h-9 w-9 items-center justify-center rounded-full
                             border border-slate-700/70 bg-slate-800/60 text-sky-200 opacity-0 shadow-sm ring-1 ring-slate-700/60
                             backdrop-blur transition duration-200 ease-out
                             group-hover:opacity-100 group-hover:translate-x-1"
                  aria-hidden
                >
                  {/* inline SVG arrow so no extra image host needed */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5">
                    <path d="M5 12h12M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}