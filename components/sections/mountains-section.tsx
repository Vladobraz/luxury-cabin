"use client"

import Image from "next/image"

export function MountainsSection() {
  return (
    <section id="mountains" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-deep-forest" />
      
      {/* Blueprint grid */}
      <div className="blueprint-grid-gold" />
      
      {/* Giant Watermark */}
      <div className="watermark watermark-vertical watermark-fade text-[10rem] md:text-[16rem] -left-8 top-32">
        PEAKS
      </div>
      <div className="watermark watermark-gold text-[8rem] md:text-[12rem] right-0 bottom-10">
        03
      </div>
      
      {/* Animated fog layers */}
      <div className="fog-layer fog-layer-1" style={{ animationDelay: '-12s' }} />
      <div className="fog-layer fog-layer-3" style={{ animationDelay: '-20s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <span className="text-metallic-gold text-xs tracking-[0.4em] font-medium uppercase">03. Mountains</span>
            <div className="coord-marker mt-2">ALTAI RANGE / WESTERN SECTOR</div>
          </div>
          <div className="hidden md:block coord-marker text-right">
            SUMMIT: 2,450m<br />
            RANGE: 180° PANORAMA
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left - Content with overlap */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="lg:translate-x-16 relative z-20 space-y-8 bg-[#0A0D0B]/70 backdrop-blur-sm p-10 border border-white/[0.04]">
              <h2 className="text-4xl lg:text-5xl heading-editorial text-foreground leading-tight text-balance">
                MAJESTIC PEAKS<br />& VALLEY VIEWS
              </h2>
              <p className="text-muted-foreground/70 leading-relaxed text-base">
                Wake up to breathtaking panoramas of mist-shrouded mountain ranges. 
                The cabin sits at the perfect elevation to witness dramatic sunrises 
                painting the peaks in gold and amber.
              </p>
              
              {/* Dense Specs Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "HIGHEST PEAK", value: "2,450m" },
                  { label: "VIEW RANGE", value: "180° Panoramic" },
                  { label: "HIKING TRAILS", value: "8 Routes" },
                  { label: "ALPINE LAKES", value: "3 Pristine" },
                  { label: "SUNRISE", value: "5:12 AM (Summer)" },
                  { label: "GOLDEN HOUR", value: "8:45 PM" },
                ].map((spec, i) => (
                  <div key={i} className="spec-card p-4">
                    <div className="text-[10px] tracking-[0.2em] text-muted-foreground/50 uppercase">{spec.label}</div>
                    <div className="text-base font-medium text-foreground mt-1">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Triangle Mountain Cluster */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <div className="relative h-[500px] lg:h-[600px]">
              
              {/* Background ghost triangles - mountain silhouette effect */}
              <div 
                className="absolute -bottom-8 left-0 w-full h-48 overflow-hidden 
                           clip-triangle-up opacity-10"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20" />
              </div>
              
              {/* Small back triangle */}
              <div 
                className="absolute top-4 left-4 w-48 h-[15rem] overflow-hidden 
                           clip-triangle-up shape-border-subtle transition-luxury hover-lift opacity-70"
              >
                <Image
                  src="/images/forest-triangle-1.png"
                  alt="Mountain forest"
                  fill
                  className="object-cover scale-110"
                />
              </div>
              
              {/* Main large triangle */}
              <div 
                className="absolute top-0 left-28 lg:left-36 w-80 h-[28rem] lg:w-[24rem] lg:h-[34rem] overflow-hidden 
                           clip-triangle-up shape-border-gold transition-luxury hover-lift z-10 ambient-glow"
              >
                <Image
                  src="/images/forest-mountains.png"
                  alt="Mountain vista"
                  fill
                  className="object-cover scale-105"
                />
                {/* Altitude marker */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 coord-marker text-center">
                  ALT. 1,200m
                </div>
              </div>
              
              {/* Overlapping medium triangle */}
              <div 
                className="absolute top-24 right-10 lg:right-20 w-56 h-[18rem] overflow-hidden 
                           clip-triangle-up shape-border-subtle transition-luxury hover-lift opacity-90"
              >
                <Image
                  src="/images/forest-bird.png"
                  alt="Mountain peaks"
                  fill
                  className="object-cover scale-110"
                />
              </div>
              
              {/* Small accent triangle */}
              <div 
                className="absolute bottom-16 right-4 w-36 h-[11rem] overflow-hidden 
                           clip-triangle-up opacity-40"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--gold-metallic)] to-transparent" />
              </div>
              
              {/* Compass/coordinate decorations */}
              <div className="absolute top-4 right-4 space-y-1 text-right">
                <div className="compass-marker">N 51.0234°</div>
                <div className="compass-marker">E 85.1456°</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
