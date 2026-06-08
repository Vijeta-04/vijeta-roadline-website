'use client'

import { motion } from 'motion/react'
import {
  ShieldCheck,
  MapPinned,
  Headphones,
  BadgeIndianRupee,
  Timer,
  Users,
} from 'lucide-react'
import { Reveal } from './reveal'

const reasons = [
  { icon: ShieldCheck, title: 'Fully Insured Cargo', text: 'Every shipment is protected, giving you complete peace of mind.' },
  { icon: MapPinned, title: 'Live GPS Tracking', text: 'Know exactly where your goods are, at every stage of transit.' },
  { icon: Timer, title: 'On-Time Guarantee', text: 'Disciplined dispatch and routing for dependable transit times.' },
  { icon: BadgeIndianRupee, title: 'Transparent Pricing', text: 'Honest, upfront quotes with no hidden charges, ever.' },
  { icon: Headphones, title: '24/7 Support', text: 'A dedicated team reachable around the clock for your needs.' },
  { icon: Users, title: 'Experienced Drivers', text: 'Trained, verified professionals behind every wheel.' },
]

export function WhyUs() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
            Why Vijeta
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold leading-tight tracking-tight text-foreground text-balance lg:text-5xl">
            Built on trust, driven by results
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i % 3}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-orange/40 hover:shadow-xl hover:shadow-navy/5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                  <reason.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {reason.text}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
