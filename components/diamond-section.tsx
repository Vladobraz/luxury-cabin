"use client"

import Image from "next/image"

export function DiamondSection() {
  return (
    <section id="overview" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-deep-forest" />
      
      {/* Blueprint grid */}
      <div className="blueprint-grid-dense" />
      
      {/* Giant Watermarks */}
      <div className="watermark watermark-fade text-[12rem] md:text-[22rem] -left-20 top-1/3">
        ESCAPE
      </div>
      <div className="watermark watermark-vertical watermark-gold text-[8rem] md:text-[14rem] right-0 top-20">
        06
      </div>
      
      {/* Animated fog layers */}
      <div className="fog-layer fog-layer-2" style={{ animationDelay: '-8s' }} />
      <div className="fog-layer fog-layer-3" style={{ animationDelay: '-15s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-metallic-gold text-xs tracking-[0.4em] font-medium uppercase">06. Overview</span>
            <div className="coord-marker mt-2">COMPLETE EXPERIENCE / SUMMARY</div>
          </div>
          <div className="hidden md:block coord-marker text-right">
            ESTABLISHED 2019<br />
            5.0 / 5.0 RATING
          </div>
        </div>

        {/* Title - overlapping into diamond grid */}
        <div className="text-center mb-8 relative z-20">
          <h2 className="text-6xl md:text-7xl lg:text-8xl heading-editorial text-foreground inline-block bg-[#0A0D0B]/60 px-10 py-5">
            THE CABIN
          </h2>
        </div>

        {/* Diamond Grid with clusters */}
        <div className="relative flex justify-center items-center min-h-[680px] lg:min-h-[820px]">
          <div className="relative">
            
            {/* Background ghost diamonds for depth */}
            <div className="absolute -top-64 lg:-top-72 left-1/2 -translate-x-1/2 -translate-x-10 w-44 h-44 lg:w-56 lg:h-56 clip-diamond opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
            </div>
            <div className="absolute -bottom-64 lg:-bottom-72 left-1/2 -translate-x-1/2 translate-x-10 w-40 h-40 lg:w-52 lg:h-52 clip-diamond opacity-10">
              <div className="absolute inset-0 bg-gradient-to-tl from-[var(--gold-metallic)]/30 to-transparent" />
            </div>
            
            {/* Top diamond cluster */}
            <div className="absolute -top-52 lg:-top-68 left-1/2 -translate-x-1/2">
              {/* Small accent diamond */}
              <div className="absolute -top-6 -right-16 w-20 h-20 lg:w-28 lg:h-28 clip-diamond opacity-40">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold-metallic)]/40 to-transparent" />
              </div>
              <div 
                className="w-56 h-56 lg:w-[17rem] lg:h-[17rem] overflow-hidden 
                           clip-diamond shape-border-subtle transition-luxury hover-lift"
              >
                <Image
                  src="/images/forest-mountains.png"
                  alt="Misty mountains"
                  fill
                  className="object-cover scale-110"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 coord-marker">PEAKS</div>
            </div>

            {/* Left diamond cluster */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-44 lg:-left-60">
              {/* Small back diamond */}
              <div className="absolute -top-8 -left-8 w-32 h-32 clip-diamond opacity-30">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
              </div>
              <div 
                className="w-52 h-52 lg:w-64 lg:h-64 overflow-hidden 
                           clip-diamond shape-border-subtle transition-luxury hover-lift"
              >
                <Image
                  src="/images/forest-triangle-1.png"
                  alt="Forest"
                  fill
                  className="object-cover scale-110"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 coord-marker">FOREST</div>
            </div>

            {/* Center diamond - Main with ambient glow */}
            <div 
              className="w-72 h-72 lg:w-[24rem] lg:h-[24rem] overflow-hidden 
                         clip-diamond shape-border-gold transition-luxury hover-lift z-10 ambient-glow"
            >
              <Image
                src="/images/forest-bird.png"
                alt="Bird flying over forest"
                fill
                className="object-cover scale-110"
              />
            </div>

            {/* Right diamond cluster */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-44 lg:-right-60">
              <div 
                className="w-52 h-52 lg:w-64 lg:h-64 overflow-hidden 
                           clip-diamond shape-border-subtle transition-luxury hover-lift"
              >
                <Image
                  src="/images/cabin-interior.png"
                  alt="Cabin interior"
                  fill
                  className="object-cover scale-110"
                />
              </div>
              {/* Small accent diamond */}
              <div className="absolute -bottom-6 -right-12 w-28 h-28 clip-diamond opacity-40">
                <div className="absolute inset-0 bg-gradient-to-l from-[var(--gold-metallic)]/40 to-transparent" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 coord-marker">INTERIOR</div>
            </div>

            {/* Bottom diamond cluster */}
            <div className="absolute -bottom-52 lg:-bottom-68 left-1/2 -translate-x-1/2">
              <div 
                className="w-56 h-56 lg:w-[17rem] lg:h-[17rem] overflow-hidden 
                           clip-diamond shape-border-subtle transition-luxury hover-lift"
              >
                <Image
                  src="/images/forest-stream.png"
                  alt="Forest stream"
                  fill
                  className="object-cover scale-110"
                />
              </div>
              {/* Small back diamond */}
              <div className="absolute -bottom-6 -left-12 w-20 h-20 lg:w-28 lg:h-28 clip-diamond opacity-30">
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 coord-marker">STREAM</div>
            </div>
          </div>
        </div>

        {/* Bottom content with specs - overlapping up into diamonds */}
        <div className="relative -mt-8 lg:-mt-16 z-20">
          <div className="max-w-4xl mx-auto bg-[#0A0D0B]/80 backdrop-blur-sm p-10 border border-white/[0.04]">
            <p className="text-center text-muted-foreground/60 text-lg lg:text-xl tracking-wide italic mb-8">
              a place for your perfect retreat
            </p>
            
            {/* Quick stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "50", unit: "Acres", label: "Private Forest" },
                { value: "1,200", unit: "m", label: "Elevation" },
                { value: "6", unit: "Guests", label: "Max Capacity" },
                { value: "5.0", unit: "/ 5.0", label: "Guest Rating" },
              ].map((stat, i) => (
                <div key={i} className="text-center spec-card p-6">
                  <div className="text-3xl font-bold text-metallic-gold">
                    {stat.value}<span className="text-base font-normal text-muted-foreground/50">{stat.unit}</span>
                  </div>
                  <div className="text-xs tracking-[0.15em] text-muted-foreground/40 uppercase mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
