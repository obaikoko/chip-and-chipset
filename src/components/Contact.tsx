'use client'

import { MapPin, Phone, Clock, MessageCircle, Mail, Send } from 'lucide-react'
import { useState } from 'react'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Hart Plaza, Maraba Market',
    sub: 'Maraba, Nasarawa State',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+234 800 000 0000',
    sub: 'Call or WhatsApp',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon – Sat: 8AM – 7PM',
    sub: 'Sun: 10AM – 5PM',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us instantly',
    sub: 'Fast response guaranteed',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    if (!form.name || !form.message) return
    // Compose WhatsApp message
    const text = encodeURIComponent(
      `Hi Bright! I'm ${form.name}. ${form.phone ? `My number is ${form.phone}. ` : ''}${form.message}`
    )
    window.open(`https://wa.me/2348000000000?text=${text}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="bg-[#060609] py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B2B]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#FF6B2B]" />
              <span className="font-mono text-xs text-[#FF6B2B] tracking-[0.3em] uppercase">Reach Us</span>
            </div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white leading-none mb-6">
              GET IN<br />
              <span className="text-[#FF6B2B]">TOUCH</span>
            </h2>
            <p className="font-body text-[#8888AA] text-lg leading-relaxed mb-12">
              Have a question, need a repair, or want to know if a product is available?
              Reach out — we're always here to help.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((c, i) => {
                const Icon = c.icon
                return (
                  <div
                    key={i}
                    className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-5 hover:border-[#FF6B2B]/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-[#FF6B2B]/10 border border-[#FF6B2B]/20 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-[#FF6B2B]" />
                    </div>
                    <p className="font-mono text-[10px] text-[#555566] tracking-widest uppercase mb-1">{c.label}</p>
                    <p className="font-body font-semibold text-white text-sm">{c.value}</p>
                    <p className="font-body text-xs text-[#555566]">{c.sub}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-8">
            <h3 className="font-display text-2xl text-white tracking-wide mb-8">
              SEND A MESSAGE
            </h3>

            <div className="space-y-5">
              <div>
                <label className="font-mono text-[10px] text-[#FF6B2B] tracking-widest uppercase block mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full bg-[#0A0A0F] border border-[#1E1E2E] text-white font-body text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-[#FF6B2B] transition-colors placeholder:text-[#333344]"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] text-[#FF6B2B] tracking-widest uppercase block mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+234 000 000 0000"
                  className="w-full bg-[#0A0A0F] border border-[#1E1E2E] text-white font-body text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-[#FF6B2B] transition-colors placeholder:text-[#333344]"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] text-[#FF6B2B] tracking-widest uppercase block mb-2">
                  Message *
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="What do you need? Describe your request..."
                  className="w-full bg-[#0A0A0F] border border-[#1E1E2E] text-white font-body text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-[#FF6B2B] transition-colors placeholder:text-[#333344] resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className={`w-full flex items-center justify-center gap-3 font-body font-semibold py-4 rounded-lg transition-all duration-200 ${
                  sent
                    ? 'bg-[#22DD88] text-[#0A0A0F]'
                    : 'bg-[#FF6B2B] hover:bg-[#FF8C55] text-white hover:shadow-[0_0_30px_rgba(255,107,43,0.4)]'
                }`}
              >
                {sent ? (
                  <>Message Sent via WhatsApp ✓</>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send via WhatsApp
                  </>
                )}
              </button>

              <p className="font-body text-xs text-[#555566] text-center">
                This will open WhatsApp with your message pre-filled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
