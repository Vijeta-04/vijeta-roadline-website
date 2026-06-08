'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'
import { Reveal } from './reveal'

const images = [
  { src: '/gallery-1.png', alt: 'Fleet lined up at a logistics depot at dawn', span: 'lg:row-span-2' },
  { src: '/gallery-2.png', alt: 'Workers loading cargo into a truck', span: '' },
  { src: '/gallery-3.png', alt: 'Truck driver in cab at golden hour', span: '' },
  { src: '/gallery-4.png', alt: 'Highway light trails at night', span: 'lg:col-span-2' },
  { src: '/gallery-5.png', alt: 'Modern logistics control room', span: '' },
]

export function Gallery() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="gallery" className="bg-navy-deep py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
            On The Road
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold leading-tight tracking-tight text-white text-balance lg:text-5xl">
            A look inside our operations
          </h2>
        </Reveal>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-3">
          {images.map((img, i) => (
            <Reveal
              key={img.src}
              delay={i % 3}
              className={`${img.span} overflow-hidden rounded-2xl`}
            >
              <motion.button
                onClick={() => setActive(img.src)}
                className="group relative h-full w-full overflow-hidden rounded-2xl border border-white/10"
                whileHover={{ scale: 0.99 }}
              >
                <img
                  src={img.src || '/placeholder.svg'}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-deep/30 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/90 p-5 backdrop-blur-md"
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close preview"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={active || '/placeholder.svg'}
              alt="Gallery preview"
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-5xl rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
