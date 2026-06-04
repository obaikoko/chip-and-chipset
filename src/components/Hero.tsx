'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, MapPin, Star, ChevronDown } from 'lucide-react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = []

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
      })
    }

    let animId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,107,43,${p.opacity})`
        ctx.fill()
      })

      // Draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(255,107,43,${0.15 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A0A0F]">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(255,107,43,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,43,0.07) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#FF6B2B] opacity-[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#00D4FF] opacity-[0.02] blur-[100px] pointer-events-none" />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Decorative vertical text */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-[#FF6B2B]" />
        <span
          className="font-mono text-[10px] text-[#FF6B2B]/50 tracking-[0.3em] uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          Est. Since 2020
        </span>
        <div className="w-px h-20 bg-gradient-to-t from-transparent to-[#FF6B2B]" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#1A1A24] border border-[#FF6B2B]/30 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 bg-[#FF6B2B] rounded-full animate-pulse" />
            <span className="font-mono text-xs text-[#FF6B2B] tracking-widest uppercase">
              Heart Plaza · Maraba Market
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display leading-none mb-6">
            <div
              className="glitch text-[clamp(3.5rem,10vw,8rem)] text-white"
              data-text="YOUR TECH"
            >
              YOUR TECH
            </div>
            <div className="text-[clamp(3.5rem,10vw,8rem)] text-[#FF6B2B] relative">
              SOLUTIONS
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FF6B2B] to-transparent" />
            </div>
            <div className="text-[clamp(3.5rem,10vw,8rem)] text-[#22222E] [-webkit-text-stroke:2px_#444455]">
              HUB.
            </div>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-[#8888AA] text-lg max-w-2xl leading-relaxed mb-10">
            From laptops to game consoles, software to repairs — Chips & Chipset is your
            one-stop technology destination at Maraba Market. Quality products. Expert service.
            <span className="text-[#FF6B2B]"> Guaranteed satisfaction.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#services"
              className="flex items-center gap-3 bg-[#FF6B2B] hover:bg-[#FF8C55] text-white font-body font-semibold px-8 py-4 rounded transition-all duration-200 hover:shadow-[0_0_30px_rgba(255,107,43,0.5)] group"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-3 bg-transparent border border-[#333344] hover:border-[#FF6B2B] text-[#BBBBCC] hover:text-white font-body font-semibold px-8 py-4 rounded transition-all duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-8 items-center">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FF6B2B]" />
              <span className="font-body text-sm text-[#8888AA]">Hart Plaza, Maraba Market</span>
            </div>
            <div className="w-px h-4 bg-[#333344] hidden sm:block" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FF6B2B] text-[#FF6B2B]" />
              ))}
              <span className="font-body text-sm text-[#8888AA] ml-1">Top Rated</span>
            </div>
            <div className="w-px h-4 bg-[#333344] hidden sm:block" />
            <div className="font-mono text-sm text-[#8888AA]">
              <span className="text-[#FF6B2B] font-bold">500+</span> Happy Customers
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-[10px] text-[#555566] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-[#FF6B2B]" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0F] to-transparent pointer-events-none" />
    </section>
  )
}
