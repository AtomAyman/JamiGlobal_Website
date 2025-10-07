"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-[#E8E8E8] px-3 border border-gray-300 shadow-sm text-gray-800">          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Main navigation */}
          <nav className="flex flex-1 items-center justify-end gap-4 text-sm text-gray-800">
            <Link href="/services" className="text-gray-800 font-medium transition hover:text-gray-900">Services</Link>
            <Link href="/solutions" className="text-gray-800 font-medium transition hover:text-gray-900">Solutions</Link>
            <Link href="/about" className="text-gray-800 font-medium transition hover:text-gray-900">About</Link>
            <Link
              href="/contact"
              className="btn-sm bg-linear-to-t from-green-600 to-green-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
