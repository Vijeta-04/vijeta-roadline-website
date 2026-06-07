'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Phone, MessageCircle, ArrowRight, MapPin } from 'lucide-react'
import { Particles } from './particles'
import { CONTACT } from '@/lib/site'

const HEADLINE = ['Driving', 'Businesses', 'Forward']

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    CONTACT.whatsappMessage,
  )}`

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-deep"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0"
      >
        <img
          src="/hero-highway.png"
          alt="Fleet of Vijeta Roadline trucks driving on a highway at dusk"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-transparent to-transparent" />
      </motion.div>

      {/* Light streaks */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute h-px w-1/3 bg-gradient-to-r from-transparent via-orange to-transparent"
            style={{ top: `${30 + i * 18}%` }}
            initial={{ x: '-40%', opacity: 0 }}
            animate={{ x: '140%', opacity: [0, 0.8, 0] }}
            transition={{
              duration: 3.5 + i,
              repeat: Infinity,
              delay: i * 1.4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <Particles count={70} />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-md"
        >
          <MapPin className="h-3.5 w-3.5 text-orange" />
          <span className="text-xs font-medium tracking-wide text-white/90">
            Rajasthan • Punjab • Haryana • Chandigarh
          </span>
        </motion.div>

        <h1 className="font-heading text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-8xl">
          {HEADLINE.map((word, i) => (
            <span key={word} className="mr-4 inline-block overflow-hidden align-bottom">
              <motion.span
                className={`inline-block ${i === 2 ? 'text-orange text-glow-orange' : ''}`}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 text-pretty"
        >
          Reliable transportation solutions across Rajasthan, Punjab, Haryana
          and Chandigarh — engineered for businesses that demand precision,
          speed and trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-white transition-all hover:glow-orange"
          >
            Get Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/15"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/15"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-orange"
          />
        </div>
      </motion.div>
    </section>
  )
}
