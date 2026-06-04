import { User, Award, Heart, TrendingUp } from 'lucide-react'

const values = [
  { icon: Award, title: 'Quality First', desc: 'We never compromise on product quality or service standards.' },
  { icon: Heart, title: 'Customer Care', desc: 'Every customer gets personalized attention and after-sale support.' },
  { icon: TrendingUp, title: 'Always Growing', desc: 'Constantly expanding our product range and skill set to serve you better.' },
]

export default function About() {
  return (
    <section id="about" className="bg-[#060609] py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B2B]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#FF6B2B]" />
              <span className="font-mono text-xs text-[#FF6B2B] tracking-[0.3em] uppercase">Who We Are</span>
            </div>

            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white leading-none mb-6">
              ABOUT<br />
              <span className="text-[#FF6B2B]">CHIPS &</span><br />
              CHIPSET
            </h2>

            <p className="font-body text-[#8888AA] text-lg leading-relaxed mb-6">
              Chips & Chipset is a premier technology store located in the heart of Heart Plaza,
              Maraba Market. We've built our reputation on delivering quality tech products and
              expert services at prices that work for everyone.
            </p>

            <p className="font-body text-[#8888AA] leading-relaxed mb-10">
              Whether you're a student, professional, or gamer — we have exactly what you need.
              Our team of trained technicians and sales experts are always ready to guide you to
              the right choice and provide ongoing support.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((v, i) => {
                const Icon = v.icon
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#FF6B2B]/10 border border-[#FF6B2B]/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-[#FF6B2B]" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-white mb-1">{v.title}</h4>
                      <p className="font-body text-sm text-[#8888AA]">{v.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Owner card + visual */}
          <div className="relative">
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2B]/5 to-transparent rounded-3xl" />
            <div className="absolute top-8 right-8 w-64 h-64 border border-[#FF6B2B]/10 rounded-full" />
            <div className="absolute top-16 right-16 w-48 h-48 border border-[#FF6B2B]/10 rounded-full" />

            {/* Owner card */}
            <div className="relative bg-[#111118] border border-[#1E1E2E] rounded-2xl p-8 mb-6">
              <div className="flex items-center gap-6 mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B2B] to-[#E5501A] rounded-2xl flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#0A0A0F] rounded-full flex items-center justify-center border border-[#FF6B2B]">
                    <div className="w-2.5 h-2.5 bg-[#22DD88] rounded-full animate-pulse" />
                  </div>
                </div>
                <div>
                  <p className="font-mono text-xs text-[#FF6B2B] tracking-widest uppercase mb-1">Owner & Founder</p>
                  <h3 className="font-display text-3xl text-white tracking-wide">BRIGHT AJEH</h3>
                  <p className="font-body text-sm text-[#8888AA] mt-1">Tech Entrepreneur · Maraba Market</p>
                </div>
              </div>

              <blockquote className="font-body text-[#BBBBCC] italic leading-relaxed border-l-2 border-[#FF6B2B] pl-4">
                "My mission is simple — make quality technology accessible to everyone in Maraba
                and beyond. We don't just sell products; we build lasting relationships with every customer."
              </blockquote>
            </div>

            {/* Terminal-style info card */}
            <div className="bg-[#0D0D14] border border-[#1E1E2E] rounded-xl p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#FF3B3B]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBB00]" />
                <div className="w-3 h-3 rounded-full bg-[#22DD88]" />
                <span className="text-[#555566] text-xs ml-2">chips-chipset.sh</span>
              </div>
              <div className="space-y-1.5">
                <p><span className="text-[#FF6B2B]">$</span> <span className="text-[#8888AA]">whoami</span></p>
                <p className="text-[#22DD88] pl-4">Bright Ajeh @ ChipsChipset</p>
                <p className="mt-2"><span className="text-[#FF6B2B]">$</span> <span className="text-[#8888AA]">locate --store</span></p>
                <p className="text-[#22DD88] pl-4">Hart Plaza, Maraba Market</p>
                <p className="mt-2"><span className="text-[#FF6B2B]">$</span> <span className="text-[#8888AA]">status</span></p>
                <p className="text-[#22DD88] pl-4">
                  <span className="inline-block w-2 h-2 bg-[#22DD88] rounded-full mr-2 animate-pulse" />
                  Open for Business
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
