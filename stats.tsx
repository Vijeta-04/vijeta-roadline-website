'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

const stats = [
  { value: 1000, suffix: '+', label: 'Deliveries Completed' },
  { value: 500, suffix: '+', label: 'Happy Clients' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Customer Focus' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const duration = 1800
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-orange py-16 lg:py-20">
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 18px, rgba(255,255,255,0.15) 18px, rgba(255,255,255,0.15) 20px)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-heading text-5xl font-bold text-white lg:text-6xl">
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-white/85">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
