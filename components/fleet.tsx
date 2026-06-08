'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Gauge, Weight, ArrowLeftRight } from 'lucide-react'
import { Reveal } from './reveal'

const fleet = [
  {
    img: '/fleet-hero.png',
    name: 'Long-Haul Truck',
    type: 'Heavy Freight',
    capacity: 'Up to 7-8 Tons',
    range: 'Pan-North India',
  },
  {
    img: '/truck-container.png',
    name: 'Container Trailer',
    type: 'Secured Cargo',
    capacity: 'Up to 9 Tons',
    range: 'Inter-State',
  },
  {
    img: '/truck-flatbed.png',
    name: 'Industrial Flatbed',
    type: 'Project Cargo',
    capacity: 'Up to 10-11 Tons',
    range: 'Heavy Machinery',
  },
  {
    img: '/truck-express.png',
    name: 'Express Carrier',
    type: 'Time-Critical',
    capacity: 'Up to 9 Tons',
    range: 'City & Regional',
  },
]

function FlipCard({ item, index }: { item: (typeof fleet)[number]; index: number }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <Reveal delay={index % 4}>
      <div
        className="group relative h-80 cursor-pointer [perspective:1200px]"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        onClick={() => setFlipped((v) => !v)}
      >
        <motion.div
          className="relative h-full w-full [transform-style:preserve-3d]"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Front */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl border border-border [backface-visibility:hidden]">
            <img
              src={item.img || '/placeholder.svg'}
              alt={`${item.name} truck`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <span className="rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white">
                {item.type}
              </span>
              <h3 className="mt-2 font-heading text-xl font-bold text-white">
                {item.name}
              </h3>
              <p className="mt-1 flex items-center gap-1 text-xs text-white/60">
                <ArrowLeftRight className="h-3 w-3" /> Hover to view specs
              </p>
            </div>
          </div>

          {/* Back */}
          <div className="absolute inset-0 flex flex-col justify-center gap-5 rounded-2xl border border-orange/30 bg-navy p-7 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <h3 className="font-heading text-xl font-bold text-white">
              {item.name}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Weight className="h-5 w-5 text-orange" />
                <div>
                  <p className="text-xs text-white/50">Capacity</p>
                  <p className="text-sm font-medium text-white">{item.capacity}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Gauge className="h-5 w-5 text-orange" />
                <div>
                  <p className="text-xs text-white/50">Coverage</p>
                  <p className="text-sm font-medium text-white">{item.range}</p>
                </div>
              </div>
            </div>
            <span className="mt-2 inline-block text-sm font-semibold text-orange">
              GPS Tracked • Insured
            </span>
          </div>
        </motion.div>
      </div>
    </Reveal>
  )
}

export function Fleet() {
  return (
    <section id="fleet" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
            Our Fleet
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold leading-tight tracking-tight text-foreground text-balance lg:text-5xl">
            The right vehicle for every load
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            A modern, well-maintained fleet ready to handle anything from express
            parcels to heavy industrial cargo.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {fleet.map((item, i) => (
            <FlipCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
