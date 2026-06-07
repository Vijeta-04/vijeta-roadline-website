'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedY: number
  speedX: number
  opacity: number
}

export function Particles({ count = 60 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const scrollRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId = 0
    let particles: Particle[] = []
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      const n = window.innerWidth < 768 ? Math.floor(count / 2) : count
      particles = Array.from({ length: n }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.4 + 0.6,
        speedY: Math.random() * 0.4 + 0.1,
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.15,
      }))
    }
    resize()
    window.addEventListener('resize', resize)

    const onScroll = () => {
      scrollRef.current = window.scrollY
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const drift = scrollRef.current * 0.04
      for (const p of particles) {
        let y = p.y - drift
        y = ((y % canvas.height) + canvas.height) % canvas.height
        ctx.beginPath()
        ctx.arc(p.x, y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 138, 51, ${p.opacity})`
        ctx.fill()
        if (!prefersReduced) {
          p.y += p.speedY
          p.x += p.speedX
          if (p.y > canvas.height) p.y = 0
          if (p.x > canvas.width) p.x = 0
          if (p.x < 0) p.x = canvas.width
        }
      }
      animationId = requestAnimationFrame(render)
    }
    render()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}
