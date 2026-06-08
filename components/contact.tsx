'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Phone, Mail, MapPin, Send, Check, MessageCircle } from 'lucide-react'
import { Reveal } from './reveal'
import { CONTACT } from '@/lib/site'

export function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    CONTACT.whatsappMessage,
  )}`

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setTimeout(() => setSent(false), 3500)
    }, 1200)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
            Get In Touch
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold leading-tight tracking-tight text-foreground text-balance lg:text-5xl">
            Let&apos;s move your business forward
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Tell us what you need to ship. We&apos;ll get back with a competitive
            quote, fast.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Info + map */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {[
                { icon: Phone, label: 'Call Us', value: CONTACT.phone, href: `tel:${CONTACT.phoneRaw}` },
                 { icon: Phone, label: 'Alternate Number', value: '+91 9549655031', href: 'tel:+919549655031' },
                { icon: MessageCircle, label: 'WhatsApp', value: CONTACT.phone, href: whatsappUrl },
                { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                { icon: MapPin, label: 'Address', value: CONTACT.address },
              ].map((item) => {
                const Wrapper = item.href ? motion.a : motion.div
                return (
                  <Wrapper
                    key={item.label}
                    {...(item.href
                      ? {
                          href: item.href,
                          target: item.href.startsWith('http') ? '_blank' : undefined,
                          rel: 'noopener noreferrer',
                        }
                      : {})}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </Wrapper>
                )
              })}
              <div className="mt-1 flex-1 overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Vijeta Roadline Solutions location"
                  src="https://www.google.com/maps?q=Jaipur,Rajasthan&output=embed"
                  className="h-full min-h-56 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          {/* Glass form */}
          <Reveal className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 lg:p-9">
              <div
                aria-hidden
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange/10 blur-3xl"
              />
              <form onSubmit={handleSubmit} className="relative grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <input
                    id="name"
                    required
                    placeholder="Your name"
                    className="rounded-xl border border-input bg-secondary px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-orange"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+91 00000 00000"
                    className="rounded-xl border border-input bg-secondary px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-orange"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="service" className="text-sm font-medium text-foreground">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    className="rounded-xl border border-input bg-secondary px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-orange"
                  >
                    <option>Road Transportation</option>
                    <option>FTL Services</option>
                    <option>PTL Services</option>
                    <option>Industrial Logistics</option>
                    <option>Express Delivery</option>
                    <option>Dedicated Transport</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your shipment, route and timeline..."
                    className="resize-none rounded-xl border border-input bg-secondary px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-orange"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={loading || sent}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3.5 text-sm font-semibold text-white transition-all hover:glow-orange disabled:opacity-80 sm:col-span-2"
                >
                  {sent ? (
                    <>
                      <Check className="h-4 w-4" /> Request Sent!
                    </>
                  ) : loading ? (
                    'Sending...'
                  ) : (
                    <>
                      Get My Quote
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
