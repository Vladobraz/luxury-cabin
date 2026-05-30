"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        if (rect.bottom > 0) {
          setScrollY(window.scrollY * 0.3)
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="cabin" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Deep gradient base */}
      <div className="absolute inset-0 bg-deep-forest" />
      
      {/* Architectural Blueprint Grid */}
      <div className="blueprint-grid-dense" />
      
      {/* Giant Watermark Text */}
      <div className="watermark watermark-fade text-[10rem] md:text-[18rem] lg:text-[24rem] -left-20 top-1/4">
        01
      </div>
      <div className="watermark watermark-vertical watermark-gold text-[8rem] md:text-[14rem] right-8 top-20">
        RETREAT
      </div>
      
      {/* Animated fog layers */}
      <div className="fog-layer fog-layer-1" />
      <div className="fog-layer fog-layer-2" />
      <div className="fog-layer fog-layer-3" />
      
      {/* Parallax background image */}
      <div 
        className="absolute inset-0 z-[2] parallax-slow"
        style={{ transform: `translateY(${scrollY}px)` }}
      >
        <Image
          src="/images/cabin-hero.png"
          alt="A-frame cabin in misty forest"
          fill
          className="object-cover object-center scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D0B]/80 via-[#0A0D0B]/20 to-[#050706]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D0B]/60 via-transparent to-[#0A0D0B]/60" />
      </div>

      {/* Content layer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content - Overlapping the center */}
          <div className="lg:col-span-6 space-y-8 relative z-20">
            {/* Coordinate marker */}
            <div className="coord-marker reveal-on-scroll">51.0000° N / 85.0000° E</div>
            
            {/* Small subtitle */}
            <p className="text-xs tracking-[0.4em] text-muted-foreground/70 uppercase reveal-on-scroll reveal-delay-1">
              Mountain Retreat in Comfort
            </p>
            
            {/* Main Title */}
            <h1 className="text-7xl md:text-9xl lg:text-[10rem] heading-editorial text-foreground reveal-on-scroll reveal-delay-1 leading-none">
              THE CABIN
            </h1>
            
            {/* Description - overlapping toward image */}
            <div className="relative lg:translate-x-12 reveal-on-scroll reveal-delay-2">
              <p className="text-muted-foreground/80 text-base leading-relaxed max-w-lg bg-[#0A0D0B]/60 backdrop-blur-sm p-6 border-l border-white/10">
                Nestled among ancient pines on pristine forest grounds. 
                At your disposal: a spacious retreat area, Finnish sauna, and a crackling fireplace.
              </p>
            </div>
            
            {/* Specs Grid - Dense content */}
            <div className="grid grid-cols-2 gap-4 max-w-lg reveal-on-scroll reveal-delay-3">
              {[
                { label: "ACREAGE", value: "50 Acres" },
                { label: "ELEVATION", value: "1,200m" },
                { label: "CAPACITY", value: "6 Guests" },
                { label: "BEDROOMS", value: "3 Suites" },
              ].map((spec, i) => (
                <div key={i} className="spec-card p-4">
                  <div className="text-[10px] tracking-[0.2em] text-muted-foreground/50 uppercase">{spec.label}</div>
                  <div className="text-base font-medium text-foreground mt-1">{spec.value}</div>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <div className="reveal-on-scroll reveal-delay-4">
              <button className="btn-quiet-luxury px-12 py-5 text-sm tracking-[0.25em] font-medium uppercase">
                Book Now
              </button>
            </div>
          </div>

          {/* Right - Vertical Text & Decorative Elements */}
          <div className="lg:col-span-6 hidden lg:block relative">
            {/* Compass markers around empty space */}
            <div className="absolute top-0 right-24 compass-marker">N</div>
            <div className="absolute bottom-0 right-24 compass-marker">S</div>
            <div className="absolute top-1/2 right-0 compass-marker">E</div>
            <div className="absolute top-1/2 left-0 compass-marker">W</div>
            
            {/* Vertical title */}
            <div 
              className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl md:text-5xl heading-editorial text-foreground/[0.08]"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              FOREST ESCAPE
            </div>
          </div>
        </div>

        {/* Bottom info card with overlap */}
        <div className="absolute bottom-28 right-6 lg:right-12 max-w-xs reveal-on-scroll reveal-delay-5 z-20">
          <div className="bg-white/[0.02] backdrop-blur-md border border-white/[0.06] p-5 rounded-sm relative">
            {/* Corner coordinate */}
            <div className="absolute -top-3 -left-3 coord-marker bg-[#0A0D0B] px-2 py-1">SEC.01</div>
            <h3 className="text-metallic-gold font-medium text-xs tracking-[0.2em] mb-3 uppercase">River View</h3>
            <p className="text-xs text-muted-foreground/70 leading-relaxed">
              A secluded retreat with panoramic river views, stone fireplace, and a terrace overlooking the valley.
            </p>
            {/* Mini specs */}
            <div className="flex gap-4 mt-4 pt-3 border-t border-white/5">
              <div className="text-[9px] text-muted-foreground/50"><span className="text-metallic-gold">180°</span> Views</div>
              <div className="text-[9px] text-muted-foreground/50"><span className="text-metallic-gold">24/7</span> Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 reveal-on-scroll reveal-delay-5">
        <div className="w-5 h-9 border border-white/20 rounded-full flex justify-center">
          <div className="w-0.5 h-2 bg-white/40 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
