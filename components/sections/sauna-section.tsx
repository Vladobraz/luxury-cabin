"use client"

import Image from "next/image"

export function SaunaSection() {
  return (
    <section id="sauna" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-deep-forest" />
      
      {/* Blueprint grid */}
      <div className="blueprint-grid-dense" />
      
      {/* Giant Watermark */}
      <div className="watermark watermark-fade text-[10rem] md:text-[18rem] -left-10 top-1/4">
        HEAT
      </div>
      <div className="watermark watermark-vertical watermark-gold text-[6rem] md:text-[10rem] right-4 bottom-32">
        04
      </div>
      
      {/* Animated fog layers */}
      <div className="fog-layer fog-layer-2" style={{ animationDelay: '-18s' }} />
      <div className="fog-layer fog-layer-1" style={{ animationDelay: '-25s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <span className="text-metallic-gold text-xs tracking-[0.4em] font-medium uppercase">04. Sauna</span>
            <div className="coord-marker mt-2">WELLNESS COMPLEX / BIRCH HOUSE</div>
          </div>
          <div className="hidden md:block coord-marker text-right">
            CAPACITY: 6 GUESTS<br />
            EST. 2019
          </div>
        </div>

        {/* Main content grid with overlap */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left - Central info card overlapping into image area */}
          <div className="lg:col-span-4 relative z-20">
            <div className="bg-[#0A0D0B]/80 backdrop-blur-sm p-10 border border-white/[0.04] lg:-mr-16">
              <h2 className="text-4xl lg:text-5xl heading-editorial text-foreground leading-tight mb-6">
                TRADITIONAL<br />FINNISH WELLNESS
              </h2>
              <p className="text-muted-foreground/70 text-base leading-relaxed mb-8">
                Authentic birch-wood fired sauna with traditional steam. Experience the 
                ancient Nordic ritual of heat therapy followed by invigorating cold plunge.
              </p>
              
              {/* Dense technical specs */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "HEAT SOURCE", value: "Birch Wood" },
                  { label: "MAX TEMP", value: "90°C / 194°F" },
                  { label: "CAPACITY", value: "6 Guests" },
                  { label: "STEAM TYPE", value: "Löyly Traditional" },
                  { label: "OILS", value: "Pine & Eucalyptus" },
                  { label: "COLD PLUNGE", value: "8°C Stream-Fed" },
                ].map((spec, i) => (
                  <div key={i} className="spec-card p-4">
                    <div className="text-[10px] tracking-[0.2em] text-muted-foreground/50 uppercase">{spec.label}</div>
                    <div className="text-base font-medium text-foreground mt-1">{spec.value}</div>
                  </div>
                ))}
              </div>
              
              <button className="btn-quiet-luxury px-10 py-4 text-sm tracking-[0.25em] font-medium uppercase w-full">
                Book Sauna
              </button>
            </div>
          </div>
          
          {/* Right - Triangle cluster */}
          <div className="lg:col-span-8">
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-4">
              {/* Card 1 - Triangle Up */}
              <div className="group relative">
                {/* Ghost triangle behind */}
                <div className="absolute -top-6 -left-6 w-full h-full clip-triangle-up opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
                </div>
                <div 
                  className="relative h-[400px] lg:h-[450px] overflow-hidden 
                             clip-triangle-up shape-border-subtle transition-luxury hover-lift"
                >
                  <Image
                    src="/images/cabin-interior.png"
                    alt="Traditional sauna interior"
                    fill
                    className="object-cover scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-foreground">Wood-Fired Sauna</h3>
                    <span className="coord-marker">90°C</span>
                  </div>
                  <p className="text-muted-foreground/60 text-xs">
                    Authentic birch-wood fired with traditional steam
                  </p>
                </div>
              </div>

              {/* Card 2 - Triangle Down - shifted down */}
              <div className="group relative lg:mt-24">
                <div 
                  className="relative h-[400px] lg:h-[450px] overflow-hidden 
                             clip-triangle-down shape-border-gold transition-luxury hover-lift ambient-glow"
                >
                  <Image
                    src="/images/forest-stream.png"
                    alt="Cold plunge area"
                    fill
                    className="object-cover scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent" />
                  {/* Temperature overlay */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 coord-marker">8°C</div>
                </div>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-foreground">Cold Plunge</h3>
                    <span className="coord-marker">STREAM-FED</span>
                  </div>
                  <p className="text-muted-foreground/60 text-xs">
                    Natural stream-fed pool for contrast therapy
                  </p>
                </div>
              </div>

              {/* Card 3 - Triangle Up */}
              <div className="group relative">
                {/* Small overlapping accent triangle */}
                <div className="absolute -bottom-10 -right-6 w-24 h-28 clip-triangle-up opacity-30">
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--gold-metallic)] to-transparent" />
                </div>
                <div 
                  className="relative h-[400px] lg:h-[450px] overflow-hidden 
                             clip-triangle-up shape-border-subtle transition-luxury hover-lift"
                >
                  <Image
                    src="/images/forest-triangle-1.png"
                    alt="Outdoor relaxation area"
                    fill
                    className="object-cover scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-foreground">Forest Terrace</h3>
                    <span className="coord-marker">OUTDOOR</span>
                  </div>
                  <p className="text-muted-foreground/60 text-xs">
                    Private deck for cooling among the trees
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
