'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Cpu, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-[#FF6B2B]/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-[#FF6B2B] rounded flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(255,107,43,0.6)] transition-all duration-300">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#00D4FF] rounded-sm animate-pulse" />
          </div>
          <div>
            <div className="font-display text-xl text-white leading-none tracking-wide">CHIPS & CHIPSET</div>
            <div className="font-mono text-[9px] text-[#FF6B2B] tracking-[0.2em] uppercase">Technologies</div>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-body text-sm font-medium text-[#BBBBCC] hover:text-[#FF6B2B] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B2B] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 bg-[#FF6B2B] hover:bg-[#FF8C55] text-white font-body font-semibold text-sm px-5 py-2.5 rounded transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,107,43,0.4)]"
        >
          <Zap className="w-4 h-4" />
          Get Help
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#111118] border-t border-[#FF6B2B]/20 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block font-body text-[#BBBBCC] hover:text-[#FF6B2B] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#FF6B2B] text-white font-semibold text-sm px-5 py-3 rounded mt-2"
          >
            <Zap className="w-4 h-4" />
            Get Help
          </a>
        </div>
      </div>
    </nav>
  )
}
