// components/testimonials.tsx
import Image from "next/image";

const logos = [
   { name: "Siemens", src: "/images/Siemens_LOGO.png" },
              { name: "Volkswagen", src: "/images/website-images/Volkswagen-logo.png" },
              { name: "Apple", src: "/images/apple-logo.png" },
              { name: "IBM", src: "/images/website-images/ibm-logo.png" },
              { name: "GE", src: "/images/website-images/GE-logo.png" },
              { name: "Amtrak", src: "/images/Amtrak_logo.png" },
];

export default function Testimonials() {
  return (
    <section className="border-y border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 text-center">
        <p className="text-xs font-extrabold tracking-[.18em] uppercase text-sky-400">
          Trusted By
        </p>
        <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
          Companies We’ve Worked With
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6 items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={60}
                className="h-auto max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}