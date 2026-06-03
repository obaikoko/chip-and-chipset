import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Amaka O.',
    role: 'Student, NASSI Polytechnic',
    text: 'Bright fixed my laptop screen in less than 2 hours. The price was fair and he even cleaned the keyboard for free. Best tech shop in Maraba!',
    rating: 5,
  },
  {
    name: 'Emmanuel K.',
    role: 'Freelance Designer',
    text: 'Bought my Dell laptop here and got all the accessories at a great price. The team is very knowledgeable and helpful. Highly recommend Chips & Chipset.',
    rating: 5,
  },
  {
    name: 'Fatima B.',
    role: 'Business Owner',
    text: 'They installed Windows and Office on my work laptop in no time. Very professional and affordable. I send all my staff here for their tech needs.',
    rating: 5,
  },
  {
    name: 'Daniel A.',
    role: 'Gamer',
    text: 'Got my PS5 from here and they even set it up for me. They downloaded all my games and tested everything before I left. Absolutely amazing service!',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-[#0A0A0F] py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B2B]/20 to-transparent" />

      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[20vw] text-[#111118] whitespace-nowrap">REVIEWS</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#FF6B2B]" />
            <span className="font-mono text-xs text-[#FF6B2B] tracking-[0.3em] uppercase">Social Proof</span>
            <div className="w-8 h-px bg-[#FF6B2B]" />
          </div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white leading-none">
            WHAT CUSTOMERS SAY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-7 hover:border-[#FF6B2B]/30 transition-all duration-300 card-glow group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#FF6B2B] text-[#FF6B2B]" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-[#FF6B2B]/30 group-hover:text-[#FF6B2B]/60 transition-colors" />
              </div>
              <p className="font-body text-[#BBBBCC] leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FF6B2B]/20 rounded-full flex items-center justify-center">
                  <span className="font-display text-[#FF6B2B] text-lg">{t.name[0]}</span>
                </div>
                <div>
                  <p className="font-body font-semibold text-white text-sm">{t.name}</p>
                  <p className="font-body text-xs text-[#555566]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
