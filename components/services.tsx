'use client'

import { motion } from 'motion/react'
import {
  Truck,
  PackageCheck,
  Boxes,
  Factory,
  Zap,
  Route,
  ArrowUpRight,
} from 'lucide-react'
import { Reveal } from './reveal'

const services = [
  {
    icon: Truck,
    title: 'Road Transportation',
    text: 'End-to-end road freight across North India with a modern, GPS-tracked fleet.',
  },
  {
    icon: PackageCheck,
    title: 'FTL Services',
    text: 'Full Truck Load solutions for high-volume shipments — dedicated, direct and fast.',
  },
  {
    icon: Boxes,
    title: 'PTL Services',
    text: 'Part Truck Load shipping that keeps costs efficient for smaller consignments.',
  },
  {
    icon: Factory,
    title: 'Industrial Logistics',
    text: 'Heavy machinery, raw materials and project cargo handled with precision.',
  },
  {
    icon: Zap,
    title: 'Express Delivery',
    text: 'Time-critical deliveries with priority dispatch and live route monitoring.',
  },
  {
    icon: Route,
    title: 'Dedicated Transport',
    text: 'Exclusive vehicles and routes tailored to your supply chain needs.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-navy-deep py-24 lg:py-32">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-orange/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
            What We Do
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold leading-tight tracking-tight text-white text-balance lg:text-5xl">
            Logistics services built for scale
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/65 text-pretty">
            From single pallets to full industrial projects, we move it all with
            the same uncompromising standard.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i % 3}>
              <motion.div
                whileHover={{ y: -10, rotateX: 4, rotateY: -4 }}
                transition={{ type: 'spring', stiffness: 250, damping: 18 }}
                style={{ transformPerspective: 800 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors hover:border-orange/40"
              >
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange/0 blur-2xl transition-all duration-500 group-hover:bg-orange/30"
                />
                <div className="relative flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange to-orange-soft text-white shadow-lg shadow-orange/20">
                    <service.icon className="h-7 w-7" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-white/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange" />
                </div>
                <h3 className="relative mt-6 font-heading text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-white/65">
                  {service.text}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
