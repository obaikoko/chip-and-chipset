'use client'

import { useState } from 'react'
import {
  Laptop, Package, Wrench, Gamepad2, Settings, Download,
  ArrowRight, ChevronRight
} from 'lucide-react'

const services = [
  {
    icon: Laptop,
    number: '01',
    title: 'Laptop Sales',
    short: 'Premium laptops for every budget',
    description:
      'We stock a wide range of laptops from leading brands — Dell, HP, Lenovo, Asus, and more. Whether you need a productivity workhorse or a gaming powerhouse, we have the perfect device for you.',
    features: ['Brand new & UK-used options', 'Warranty included', 'Budget-friendly pricing', 'All major brands'],
    color: '#FF6B2B',
  },
  {
    icon: Package,
    number: '02',
    title: 'Laptop Accessories',
    short: 'Everything your laptop needs',
    description:
      'Complete your setup with our wide selection of accessories — bags, cooling pads, keyboards, mice, USB hubs, chargers, screen protectors, and more.',
    features: ['Genuine accessories', 'Universal compatibility', 'Affordable prices', 'Same-day availability'],
    color: '#FF8C55',
  },
  {
    icon: Settings,
    number: '03',
    title: 'Gadgets & Electronics',
    short: 'Smart gadgets & cutting-edge tech',
    description:
      'Explore our curated selection of gadgets — smartwatches, earbuds, power banks, flash drives, hard drives, and other electronics that keep you connected and productive.',
    features: ['Latest tech', 'Quality brands', 'Competitive pricing', 'Tech consultation'],
    color: '#00D4FF',
  },
  {
    icon: Wrench,
    number: '04',
    title: 'Laptop Repairs',
    short: 'Expert repairs, fast turnaround',
    description:
      'From screen replacements to motherboard repairs, our skilled technicians diagnose and fix all laptop issues quickly and affordably. We handle all brands.',
    features: ['Screen & keyboard repair', 'Motherboard fixes', 'Battery replacement', 'Fast turnaround'],
    color: '#FF6B2B',
  },
  {
    icon: Gamepad2,
    number: '05',
    title: 'Game Consoles',
    short: 'Sales, installation & repairs',
    description:
      'Your gaming paradise! We sell PlayStation, Xbox, and other consoles. We also handle installations, jailbreaking, and repairs to keep your gaming experience uninterrupted.',
    features: ['PS4, PS5, Xbox', 'Console installation', 'Game downloads', 'Repair services'],
    color: '#9B5CFF',
  },
  {
    icon: Download,
    number: '06',
    title: 'Software Installation',
    short: 'Professional OS & software setup',
    description:
      'Get your device running smoothly with professional software installation. Windows OS, Microsoft Office, Adobe Creative Suite, antivirus, drivers, and more.',
    features: ['Windows installation', 'Office suite setup', 'Driver installation', 'Antivirus setup'],
    color: '#FF6B2B',
  },
]

export default function Services() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="services" className="bg-[#0A0A0F] py-32 relative">
      {/* Section decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B2B]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#FF6B2B]" />
            <span className="font-mono text-xs text-[#FF6B2B] tracking-[0.3em] uppercase">What We Do</span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white leading-none mb-4">
            OUR SERVICES
          </h2>
          <p className="font-body text-[#8888AA] text-lg max-w-2xl">
            Comprehensive tech solutions under one roof. Whatever your technology needs, we've got you covered.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            const isActive = active === i

            return (
              <div
                key={i}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="animated-border rounded-xl p-6 cursor-default card-glow group relative overflow-hidden"
              >
                {/* Background number */}
                <div className="absolute top-4 right-4 font-display text-7xl text-[#1A1A24] group-hover:text-[#22222E] transition-colors select-none">
                  {service.number}
                </div>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${service.color}18`, border: `1px solid ${service.color}40` }}
                >
                  <Icon className="w-7 h-7" style={{ color: service.color }} />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl text-white mb-1 tracking-wide">{service.title}</h3>
                <p className="font-mono text-xs mb-4" style={{ color: service.color }}>{service.short}</p>
                <p className="font-body text-[#8888AA] text-sm leading-relaxed mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 flex-shrink-0" style={{ color: service.color }} />
                      <span className="font-body text-xs text-[#BBBBCC]">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom glow line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
                />
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 font-body font-semibold text-[#FF6B2B] hover:text-white group transition-colors"
          >
            Need a custom solution? Talk to us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
