"use client"

import { Check, X, Calendar, CreditCard, Shield, Clock } from "lucide-react"

export function TermsSection() {
  return (
    <section id="terms" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-deep-forest" />
      
      {/* Blueprint grid */}
      <div className="blueprint-grid" />
      
      {/* Giant Watermark */}
      <div className="watermark watermark-fade text-[10rem] md:text-[18rem] -right-10 top-1/4">
        TERMS
      </div>
      <div className="watermark watermark-vertical watermark-gold text-[6rem] md:text-[10rem] -left-4 bottom-20">
        07
      </div>
      
      {/* Animated fog layers */}
      <div className="fog-layer fog-layer-1" style={{ animationDelay: '-35s' }} />
      <div className="fog-layer fog-layer-2" style={{ animationDelay: '-40s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <span className="text-metallic-gold text-xs tracking-[0.4em] font-medium uppercase">07. Terms</span>
            <div className="coord-marker mt-2">BOOKING CONDITIONS / HOUSE RULES</div>
          </div>
          <div className="hidden md:block coord-marker text-right">
            LAST UPDATED: 2024<br />
            POLICY v3.2
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left column - Booking info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0A0D0B]/80 backdrop-blur-sm p-8 border border-white/[0.04]">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-metallic-gold" />
                Booking Details
              </h3>
              <div className="space-y-4">
                {[
                  { label: "MIN STAY", value: "2 Nights" },
                  { label: "CHECK-IN", value: "2:00 PM" },
                  { label: "CHECK-OUT", value: "11:00 AM" },
                  { label: "DEPOSIT", value: "30% on Booking" },
                  { label: "BALANCE", value: "14 Days Before" },
                  { label: "CANCELLATION", value: "7 Days Full Refund" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-xs tracking-[0.15em] text-muted-foreground/50 uppercase">{item.label}</span>
                    <span className="text-base font-medium text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Payment methods */}
            <div className="spec-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <CreditCard className="w-5 h-5 text-metallic-gold" />
                <span className="text-xs tracking-[0.15em] text-muted-foreground/50 uppercase">Payment Methods</span>
              </div>
              <p className="text-sm text-muted-foreground/60">
                Bank Transfer, Credit Card, Cryptocurrency accepted
              </p>
            </div>
            
            {/* Security deposit */}
            <div className="spec-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-5 h-5 text-metallic-gold" />
                <span className="text-xs tracking-[0.15em] text-muted-foreground/50 uppercase">Security Deposit</span>
              </div>
              <p className="text-sm text-muted-foreground/60">
                $500 refundable deposit, returned within 7 days after checkout
              </p>
            </div>
          </div>

          {/* Middle column - Included */}
          <div className="lg:col-span-4">
            <div className="bg-[#0A0D0B]/80 backdrop-blur-sm p-8 border border-white/[0.04] h-full">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-400" />
                </div>
                Included in Your Stay
              </h3>
              <ul className="space-y-4">
                {[
                  "Full access to private forest trails (12km)",
                  "Unlimited sauna sessions",
                  "Firewood for fireplace (restocked daily)",
                  "Fresh linens and towels",
                  "Welcome basket with local products",
                  "WiFi (optional - we encourage unplugging)",
                  "Secure parking for 2 vehicles",
                  "Cold plunge access",
                  "Outdoor BBQ equipment",
                  "Board games and books library",
                  "Telescope for stargazing",
                  "Emergency satellite phone"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground/70 text-sm">
                    <Check className="w-4 h-4 text-emerald-400/70 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column - House Rules */}
          <div className="lg:col-span-4">
            <div className="bg-[#0A0D0B]/80 backdrop-blur-sm p-8 border border-white/[0.04] h-full">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                House Rules
              </h3>
              <ul className="space-y-4">
                {[
                  "No smoking inside the cabin",
                  "No parties or events over 6 guests",
                  "Pets allowed with prior approval (+$50/night)",
                  "Quiet hours: 10 PM - 8 AM",
                  "Maximum 6 guests (including children)",
                  "No open fires outside designated areas",
                  "Respect wildlife - no feeding animals",
                  "Keep food secured (bear country)",
                  "Report any maintenance issues promptly",
                  "No drones without permission",
                  "Leave no trace in forest areas"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground/70 text-sm">
                    <X className="w-4 h-4 text-red-400/70 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-[#0A0D0B]/80 backdrop-blur-sm p-10 border border-white/[0.04]">
            {/* Quick pricing */}
            <div className="grid grid-cols-3 gap-10 mb-8">
              {[
                { season: "LOW SEASON", price: "$350", period: "Oct - Apr" },
                { season: "HIGH SEASON", price: "$550", period: "May - Sep" },
                { season: "HOLIDAYS", price: "$750", period: "Dec 20 - Jan 10" },
              ].map((rate, i) => (
                <div key={i} className="text-center">
                  <div className="text-[10px] tracking-[0.2em] text-muted-foreground/50 uppercase">{rate.season}</div>
                  <div className="text-3xl font-bold text-metallic-gold mt-1.5">{rate.price}</div>
                  <div className="text-xs text-muted-foreground/40 mt-1">{rate.period}</div>
                </div>
              ))}
            </div>
            
            <p className="text-muted-foreground/50 mb-8 text-sm">
              All rates per night | Minimum stay: 2 nights | Prices include all amenities
            </p>
            
            <button className="btn-quiet-luxury px-12 py-6 text-sm tracking-[0.25em] font-medium uppercase">
              Reserve Your Escape
            </button>
            
            <div className="flex justify-center gap-8 mt-8 text-xs text-muted-foreground/40">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Instant Confirmation</span>
              <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> Secure Payment</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4" /> Free Cancellation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
