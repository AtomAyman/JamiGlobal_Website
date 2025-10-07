import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer className="bg-[#E8E8E8]">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>

        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* Brand + tagline */}
          <div className="col-span-2 space-y-3 md:col-span-2 lg:col-span-1">
            <div className="mb-2">
              <Logo />
            </div>
            <p className="text-sm text-gray-700">
              Global innovation with local impact—engineering, software, and operations built for measurable outcomes.
            </p>
          </div>

          {/* Explore */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-900">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="text-gray-700 transition hover:text-indigo-700" href="/services">Services</a></li>
              <li><a className="text-gray-700 transition hover:text-indigo-700" href="/solutions">Solutions</a></li>
              <li><a className="text-gray-700 transition hover:text-indigo-700" href="/about">About</a></li>
              <li><a className="text-gray-700 transition hover:text-indigo-700" href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-900">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="text-gray-700 underline-offset-2 transition hover:text-indigo-700 hover:underline" href="mailto:info@jamiglobal.com">info@jamiglobal.com</a></li>
              <li><a className="text-gray-700 underline-offset-2 transition hover:text-indigo-700 hover:underline" href="tel:+16785576436">+1 (678) 557-6436</a></li>
              <li className="text-gray-700">HQ: Michigan, USA</li>
              <li className="text-gray-700">Offices: Ontario (Canada), India</li>
              <li className="text-gray-700">Expanding: Türkiye, Saudi Arabia, UAE</li>
              <li>
                <a className="text-gray-700 transition hover:text-indigo-700" href="https://www.linkedin.com/company/jami-global" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-900">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="text-gray-700 transition hover:text-indigo-700" href="/privacy">Privacy Policy</a></li>
              <li><a className="text-gray-700 transition hover:text-indigo-700" href="/terms">Terms of Service</a></li>
            </ul>
          </div>

          {/* Right-aligned */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Jami Global. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
