'use client'

import { ShoppingBag, Tag, Zap, Shield } from 'lucide-react'

const categories = [
  {
    label: 'Laptops',
    items: ['Dell Inspiron Series', 'HP Pavilion', 'Lenovo ThinkPad', 'Asus VivoBook', 'Acer Aspire'],
    tag: 'Best Seller',
    tagColor: '#FF6B2B',
  },
  {
    label: 'Accessories',
    items: ['Laptop Bags & Backpacks', 'Cooling Pads', 'External Hard Drives', 'USB Hubs & Adapters', 'Chargers & Cables'],
    tag: 'In Stock',
    tagColor: '#00D4FF',
  },
  {
    label: 'Gadgets',
    items: ['Smartwatches', 'Wireless Earbuds', 'Power Banks', 'Flash Drives', 'Webcams & Mics'],
    tag: 'New Arrivals',
    tagColor: '#9B5CFF',
  },
  {
    label: 'Game Consoles',
    items: ['PlayStation 4 & 5', 'Xbox Series X/S', 'Nintendo Switch', 'Joysticks & Pads', 'Gaming Accessories'],
    tag: 'Hot',
    tagColor: '#FF3B3B',
  },
]

const highlights = [
  { icon: Tag, label: 'Best Prices', desc: 'Competitive market pricing with no hidden fees.' },
  { icon: Shield, label: 'Genuine Products', desc: 'All products are original and quality-tested.' },
  { icon: Zap, label: 'Instant Purchase', desc: 'Walk in, pick, pay and walk out — no delays.' },
  { icon: ShoppingBag, label: 'Wide Selection', desc: 'Hundreds of tech products always in stock.' },
]

export default function Products() {
  return (
    <section id="products" className="bg-[#060609] py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B2B]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#FF6B2B]" />
              <span className="font-mono text-xs text-[#FF6B2B] tracking-[0.3em] uppercase">Our Stock</span>
            </div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white leading-none">
              PRODUCTS
            </h2>
          </div>
          <p className="font-body text-[#8888AA] text-lg max-w-md">
            Explore our wide range of quality tech products — always fresh, always available.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-8 hover:border-[#FF6B2B]/30 transition-all duration-300 group card-glow"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="font-display text-3xl text-white tracking-wide">{cat.label}</h3>
                <span
                  className="font-mono text-[10px] tracking-wider px-3 py-1 rounded-full border"
                  style={{ color: cat.tagColor, borderColor: `${cat.tagColor}40`, background: `${cat.tagColor}12` }}
                >
                  {cat.tag}
                </span>
              </div>
              <ul className="space-y-3">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: cat.tagColor }}
                    />
                    <span className="font-body text-[#BBBBCC] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-[#1E1E2E]">
                <a
                  href="#contact"
                  className="font-body text-sm font-semibold transition-colors duration-200"
                  style={{ color: cat.tagColor }}
                >
                  Inquire about {cat.label} →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Why buy from us */}
        <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-10">
          <h3 className="font-display text-3xl text-white text-center mb-10 tracking-wide">
            WHY SHOP WITH US?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((h, i) => {
              const Icon = h.icon
              return (
                <div key={i} className="flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 bg-[#FF6B2B]/10 border border-[#FF6B2B]/30 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#FF6B2B]" />
                  </div>
                  <p className="font-display text-xl text-white tracking-wide">{h.label}</p>
                  <p className="font-body text-sm text-[#8888AA]">{h.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
