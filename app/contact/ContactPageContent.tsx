// app/contact/ContactPageContent.tsx
"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      topic: String(fd.get("topic") || ""),
      message: String(fd.get("message") || ""),
    };

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data: any = null;
      const raw = await res.text();
      try {
        data = raw ? JSON.parse(raw) : null;
      } catch {
        // response wasn't JSON; that's okay, we'll show the raw text
      }

      if (!res.ok || data?.success !== true) {
        const msg = data?.error || raw || `HTTP ${res.status}`;
        setStatus("error");
        setErrorMsg(msg);
        return;
      }

      setStatus("sent");
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error reaching /api/send. Check dev server logs.");
    }
  }, []);

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-800">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-xs font-semibold text-slate-300">Name</label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-xs font-semibold text-slate-300">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-1 block text-xs font-semibold text-slate-300">Company</label>
          <input
            id="company"
            name="company"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
            placeholder="Organization"
          />
        </div>
        <div>
          <label htmlFor="topic" className="mb-1 block text-xs font-semibold text-slate-300">Topic</label>
          <select
            id="topic"
            name="topic"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-sky-500 focus:outline-none"
          >
            <option>Consulting &amp; Strategy</option>
            <option>Engineering &amp; R&amp;D</option>
            <option>Software Development</option>
            <option>Supply-Chain &amp; Operations</option>
            <option>Partnerships</option>
            <option>General</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1 block text-xs font-semibold text-slate-300">How can we help?</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
          placeholder="Share goals, constraints, timeline, and success metrics."
        />
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center rounded-full border-2 border-sky-400 bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-300 disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send Inquiry"}
        </button>

        {status === "sent" && (
          <span className="text-xs font-semibold text-green-300">
            Thanks! We’ll reply within one business day.
          </span>
        )}
      </div>
    </form>
  );
}

export default function ContactPageContent() {
  return (
    <main className="bg-slate-950 text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2400&auto=format&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,.6),rgba(2,6,23,.9))]" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold tracking-[.18em] uppercase text-sky-400">Contact</p>
            <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">Let’s build what’s next</h1>
            <p className="mt-4 max-w-2xl text-slate-300">
              Share your roadmap—we’ll pinpoint where engineering, software, and operations can deliver the highest ROI.
              Our team typically replies within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT + SIDEBAR */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* Form */}
          <ContactForm />

          {/* Sidebar */}
          <aside className="space-y-5 rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-800">
            <h2 className="text-lg font-extrabold">Details</h2>
            <div className="grid gap-4 text-sm text-slate-300">
              <p>
                <span className="block text-xs font-semibold text-slate-400">Email</span>
                <a href="mailto:info@jamiglobal.com" className="underline-offset-2 hover:underline">
                  info@jamiglobal.com
                </a>
              </p>
              <p>
                <span className="block text-xs font-semibold text-slate-400">Phone</span>
                <a href="tel:+16785576436" className="underline-offset-2 hover:underline">
                  +1 (678) 557-6436
                </a>
              </p>
              <div>
                <span className="block text-xs font-semibold text-slate-400">Locations</span>
                <ul className="mt-1 space-y-1">
                  <li>Michigan, USA (HQ)</li>
                  <li>Ontario, Canada</li>
                  <li>India</li>
                  <li className="text-slate-400">Expanding: Türkiye, Saudi Arabia, UAE</li>
                </ul>
              </div>
              <p>
                <span className="block text-xs font-semibold text-slate-400">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/company/jami-global"
                  target="_blank"
                  rel="noreferrer"
                  className="underline-offset-2 hover:underline"
                >
                  /company/jami-global
                </a>
              </p>
            </div>

            <div className="relative h-40 w-full overflow-hidden rounded-xl">
              <Image
                src="/images/website-images/contact.jpg"
                alt="World map"
                fill
                className="object-cover"
              />
            </div>
          </aside>
        </div>
      </section>

      {/* MAP */}
      <section className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="overflow-hidden rounded-2xl ring-1 ring-slate-800">
            <iframe
              title="Jami Global HQ vicinity map"
              src="https://www.google.com/maps?q=Michigan&output=embed"
              className="h-[340px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-800 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-extrabold">Prefer to talk?</h3>
              <p className="mt-1 text-sm text-slate-300">
                Book a quick intro and we’ll align on goals, timelines, and outcomes.
              </p>
            </div>
            <a
              href="mailto:info@jamiglobal.com?subject=Intro%20call%20request"
              className="inline-flex items-center rounded-full border-2 border-sky-400 bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-300"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}