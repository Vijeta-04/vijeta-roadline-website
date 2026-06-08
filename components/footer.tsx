'use client'

import { Truck, Phone, Mail } from 'lucide-react'
import { NAV_LINKS, CONTACT } from '@/lib/site'

const services = [
  'Road Transportation',
  'FTL Services',
  'PTL Services',
  'Industrial Logistics',
  'Express Delivery',
]

export function Footer() {
  return (
    <footer className="relative bg-navy-deep pt-0 text-white">
      {/* Animated wave */}
      <div aria-hidden className="overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-16 w-full text-orange"
        >
          <path
            fill="currentColor"
            fillOpacity="0.15"
            d="M0,40 C300,100 900,-20 1200,40 L1200,120 L0,120 Z"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="M0,40 C300,100 900,-20 1200,40 L1200,120 L0,120 Z;
                      M0,60 C300,0 900,120 1200,60 L1200,120 L0,120 Z;
                      M0,40 C300,100 900,-20 1200,40 L1200,120 L0,120 Z"
            />
          </path>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-10 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange text-white">
                <Truck className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-heading text-base font-bold tracking-tight">
                  VIJETA
                </span>
                <span className="text-[10px] font-medium tracking-[0.25em] text-orange">
                  ROADLINE
                </span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Reliable, premium road transportation and logistics across
              Rajasthan, Punjab, Haryana and Chandigarh.
            </p>
         
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-orange"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-white/60 transition-colors hover:text-orange"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3.5">
              <li>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-orange"
                >
                  <Phone className="h-4 w-4 text-orange" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-orange"
                >
                  <Mail className="h-4 w-4 text-orange" />
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-7 text-sm text-white/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Vijeta Roadline Solutions. All
            rights reserved.
          </p>
          <p>Driving Businesses Forward.</p>
        </div>
      </div>
    </footer>
  )
}
