'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Target, Eye, ShieldCheck, Clock } from 'lucide-react'
import { Reveal } from './reveal'

const timeline = [
  { year: '2014', title: 'The Beginning', text: 'Founded with a single truck and a promise of reliability across Rajasthan.' },
  { year: '2017', title: 'Regional Expansion', text: 'Extended dedicated routes into Punjab and Haryana for industrial clients.' },
  { year: '2020', title: 'Fleet Modernization', text: 'Invested in a GPS-tracked, modern fleet for full transparency.' },
  { year: '2024', title: 'Trusted Network', text: '500+ clients and 1000+ deliveries across North India and beyond.' },
]

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="about" className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image */}
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <motion.img
                style={{ y: imgY, scale: 1.12 }}
                src="/about-fleet.png"
                alt="Vijeta Roadline truck fleet parked at a depot"
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-2 rounded-2xl bg-orange px-7 py-5 text-white shadow-xl shadow-orange/20 lg:right-6">
              <p className="font-heading text-3xl font-bold">10+</p>
              <p className="text-sm font-medium text-white/90">Years on the road</p>
            </div>
          </Reveal>

          {/* Story */}
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
                Our Story
              </span>
              <h2 className="mt-3 font-heading text-4xl font-bold leading-tight tracking-tight text-foreground text-balance lg:text-5xl">
                A decade of moving India forward
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
                Vijeta Roadline Solutions was built on a simple belief: every
                shipment carries someone&apos;s business, reputation and
                livelihood. From a single truck to a trusted regional network,
                we&apos;ve never stopped delivering on that promise.
              </p>
            </Reveal>

            <div className="mt-9 space-y-0">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i}>
                  <div className="flex gap-5 pb-7 last:pb-0">
                    <div className="flex flex-col items-center">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange/10 font-heading text-sm font-bold text-orange">
                        {item.year}
                      </span>
                      {i < timeline.length - 1 && (
                        <span className="mt-1 w-px flex-1 bg-border" />
                      )}
                    </div>
                    <div className="pt-1.5">
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Mission / Vision cards */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Target, title: 'Mission', text: 'To deliver every consignment safely, on time, every single time.' },
            { icon: Eye, title: 'Vision', text: 'To be North India\u2019s most trusted name in road transportation.' },
            { icon: ShieldCheck, title: 'Safety First', text: 'Insured cargo and trained drivers on every route we serve.' },
            { icon: Clock, title: 'On-Time', text: 'Dedicated dispatch and live tracking for total reliability.' },
          ].map((card, i) => (
            <Reveal key={card.title} delay={i}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group h-full rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-xl hover:shadow-navy/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                  <card.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.text}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
