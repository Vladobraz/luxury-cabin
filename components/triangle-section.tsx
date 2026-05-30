"use client"

import Image from "next/image"

export function TriangleSection() {
  return (
    <section id="forest" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-deep-forest" />
      
      {/* Blueprint grid */}
      <div className="blueprint-grid" />
      
      {/* Giant Watermark */}
      <div className="watermark watermark-fade text-[12rem] md:text-[20rem] -right-16 top-20">
        WILD
      </div>
      <div className="watermark watermark-gold text-[8rem] md:text-[12rem] left-10 bottom-20">
        02
      </div>
      
      {/* Animated fog layers */}
      <div className="fog-layer fog-layer-1" style={{ animationDelay: '-5s' }} />
      <div className="fog-layer fog-layer-2" style={{ animationDelay: '-10s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header with coordinates */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="text-metallic-gold text-xs tracking-[0.4em] font-medium uppercase">01. Forest</span>
            <div className="coord-marker mt-2">SECTOR A / PINE ZONE</div>
          </div>
          <div className="hidden md:block coord-marker text-right">
            ALT. 1,180m - 1,250m<br />
            COVERAGE: 50 ACRES
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left - Triangle Cluster with overlapping shapes */}
          <div className="lg:col-span-7">
            <div className="relative h-[650px] lg:h-[800px]">
              
              {/* Ghost triangle - semi-transparent background layer */}
              <div 
                className="absolute -top-12 -left-12 w-60 h-72 lg:w-72 lg:h-84 overflow-hidden 
                           clip-triangle-up opacity-30 transition-luxury"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f1c] to-transparent" />
              </div>
              
              {/* Triangle 1 - Down-pointing, left position */}
              <div 
                className="absolute top-0 left-4 w-64 h-80 lg:w-72 lg:h-96 overflow-hidden 
                           clip-triangle-down shape-border-subtle transition-luxury hover-lift"
              >
                <Image
                  src="/images/forest-triangle-1.png"
                  alt="Misty forest"
                  fill
                  className="object-cover scale-105"
                />
                {/* Coordinate overlay */}
                <div className="absolute bottom-4 left-4 coord-marker">51.02° N</div>
              </div>

              {/* Triangle 2 - Up-pointing, center - MAIN with gold border */}
              <div 
                className="absolute top-16 left-36 lg:left-44 w-80 h-[28rem] lg:w-[28rem] lg:h-[34rem] overflow-hidden 
                           clip-triangle-up shape-border-gold transition-luxury hover-lift z-10 ambient-glow"
              >
                <Image
                  src="/images/cabin-interior.png"
                  alt="Cabin interior"
                  fill
                  className="object-cover scale-105"
                />
              </div>
              
              {/* Small ghost triangle overlapping main */}
              <div 
                className="absolute top-64 left-80 lg:left-96 w-28 h-32 lg:w-36 lg:h-40 overflow-hidden 
                           clip-triangle-down opacity-20 transition-luxury z-20"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--gold-metallic)] to-transparent" />
              </div>

              {/* Triangle 3 - Down-pointing, right position */}
              <div 
                className="absolute top-4 right-0 lg:right-4 w-56 h-72 lg:w-64 lg:h-80 overflow-hidden 
                           clip-triangle-down shape-border-subtle transition-luxury hover-lift"
              >
                <Image
                  src="/images/forest-stream.png"
                  alt="Forest stream"
                  fill
                  className="object-cover scale-105"
                />
                {/* Coordinate overlay */}
                <div className="absolute top-4 right-4 coord-marker">85.15° E</div>
              </div>
              
              {/* Additional small triangle cluster */}
              <div 
                className="absolute bottom-8 right-12 w-36 h-48 overflow-hidden 
                           clip-triangle-up shape-border-subtle transition-luxury hover-lift opacity-80"
              >
                <Image
                  src="/images/forest-mountains.png"
                  alt="Forest vista"
                  fill
                  className="object-cover scale-110"
                />
              </div>
            </div>
          </div>

          {/* Right - Content overlapping toward images */}
          <div className="lg:col-span-5 relative">
            {/* Content block with negative margin to overlap */}
            <div className="lg:-ml-20 relative z-20 space-y-8 bg-[#0A0D0B]/80 backdrop-blur-sm p-10 border border-white/[0.04]">
              <h2 className="text-4xl lg:text-5xl heading-editorial text-foreground leading-tight text-balance">
                WEARY OF THE<br />CITY NOISE?
              </h2>
              <p className="text-muted-foreground/70 text-base leading-relaxed">
                Slow time and authentic comfort await: forget the rush. Here, your days 
                flow to the rhythm of sunrise and crackling fire.
              </p>
              
              {/* Dense Specs Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "PINE TYPE", value: "Siberian Cedar" },
                  { label: "FOREST AGE", value: "200+ Years" },
                  { label: "WILDLIFE", value: "Protected Zone" },
                  { label: "TRAILS", value: "12 km Marked" },
                  { label: "CLEARINGS", value: "3 Meadows" },
                  { label: "STREAMS", value: "2 Fresh Water" },
                ].map((spec, i) => (
                  <div key={i} className="spec-card p-4">
                    <div className="text-[10px] tracking-[0.2em] text-muted-foreground/50 uppercase">{spec.label}</div>
                    <div className="text-base font-medium text-foreground mt-1">{spec.value}</div>
                  </div>
                ))}
              </div>
              
              <button className="btn-quiet-luxury px-12 py-5 text-sm tracking-[0.25em] font-medium uppercase w-full">
                Explore Forest
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
