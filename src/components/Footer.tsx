import { Cpu, MapPin, ArrowUpRight } from 'lucide-react'

const links = {
  Services: ['Laptop Sales', 'Laptop Repairs', 'Gadgets', 'Game Consoles', 'Software Install', 'Accessories'],
  Navigate: ['Home', 'Services', 'Products', 'About', 'Contact'],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#060609] border-t border-[#1E1E2E] pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#FF6B2B] rounded flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-display text-xl text-white leading-none tracking-wide">CHIPS & CHIPSET</div>
                <div className="font-mono text-[9px] text-[#FF6B2B] tracking-[0.2em] uppercase">Tech Solutions Hub</div>
              </div>
            </div>
            <p className="font-body text-[#555566] text-sm leading-relaxed max-w-sm mb-6">
              Your trusted technology partner at Hart Plaza, Maraba Market. Quality products, expert repairs, and exceptional service — every time.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#555566]">
              <MapPin className="w-4 h-4 text-[#FF6B2B]" />
              <span className="font-body">Hart Plaza, Maraba Market, Nasarawa State</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-mono text-xs text-[#FF6B2B] tracking-[0.3em] uppercase mb-5">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-body text-sm text-[#555566] hover:text-[#BBBBCC] transition-colors flex items-center gap-1 group"
                    >
                      {item}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E1E2E] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-[#333344]">
            © {year} Chips & Chipset. All rights reserved. Owned by Bright Ajeh.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#22DD88] rounded-full animate-pulse" />
            <span className="font-mono text-xs text-[#333344]">Open for Business</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
