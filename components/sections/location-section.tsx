"use client"

import { MapPin, Clock, Car, Plane, Mountain, Compass } from "lucide-react"

export function LocationSection() {
  return (
    <section id="location" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-deep-forest" />
      
      {/* Blueprint grid */}
      <div className="blueprint-grid-gold" />
      
      {/* Giant Watermark */}
      <div className="watermark watermark-fade text-[10rem] md:text-[18rem] right-0 top-20">
        MAP
      </div>
      <div className="watermark watermark-vertical watermark-gold text-[6rem] md:text-[10rem] -left-4 bottom-20">
        05
      </div>
      
      {/* Animated fog layers */}
      <div className="fog-layer fog-layer-3" style={{ animationDelay: '-22s' }} />
      <div className="fog-layer fog-layer-2" style={{ animationDelay: '-30s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <span className="text-metallic-gold text-xs tracking-[0.4em] font-medium uppercase">05. Location</span>
            <div className="coord-marker mt-2">COORDINATES / ACCESS ROUTES</div>
          </div>
          <div className="hidden md:block coord-marker text-right">
            REGION: ALTAI<br />
            TIMEZONE: UTC+7
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left - Diamond map with overlapping elements */}
          <div className="lg:col-span-6 relative">
            {/* Background ghost diamonds */}
            <div className="absolute -top-10 -left-10 w-44 h-44 clip-diamond opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-36 h-36 clip-diamond opacity-10">
              <div className="absolute inset-0 bg-gradient-to-tl from-[var(--gold-metallic)]/30 to-transparent" />
            </div>
            
            <div 
              className="relative h-[480px] lg:h-[580px] overflow-hidden 
                         clip-diamond shape-border-gold ambient-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-card via-card/80 to-background flex items-center justify-center">
                {/* Grid inside map */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: 'linear-gradient(to right, rgba(212,178,112,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(212,178,112,0.3) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                  }} />
                </div>
                
                {/* Center content */}
                <div className="text-center space-y-4 relative z-10">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-metallic-gold" />
                  </div>
                  <p className="text-xl font-semibold text-foreground">Mountain Altai Region</p>
                  <div className="space-y-1">
                    <p className="text-metallic-gold text-sm font-mono">51.0000° N</p>
                    <p className="text-metallic-gold text-sm font-mono">85.0000° E</p>
                  </div>
                </div>
                
                {/* Compass directions */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 compass-marker">N</div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 compass-marker">S</div>
                <div className="absolute left-8 top-1/2 -translate-y-1/2 compass-marker">W</div>
                <div className="absolute right-8 top-1/2 -translate-y-1/2 compass-marker">E</div>
              </div>
            </div>
          </div>

          {/* Right - Details with dense specs - overlapping into map */}
          <div className="lg:col-span-6 relative">
            <div className="lg:-ml-12 relative z-20 bg-[#0A0D0B]/80 backdrop-blur-sm p-10 border border-white/[0.04]">
              <h2 className="text-4xl lg:text-5xl heading-editorial text-foreground leading-tight mb-6">
                WHERE SOLITUDE<br />MEETS ACCESSIBILITY
              </h2>
              
              {/* Transportation grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Car, label: "BY CAR", value: "4 Hours from City", detail: "Paved + Gravel" },
                  { icon: Plane, label: "NEAREST AIRPORT", value: "90 min Transfer", detail: "Private Available" },
                  { icon: Clock, label: "CHECK-IN", value: "2:00 PM Onwards", detail: "Flexible Request" },
                  { icon: Mountain, label: "ELEVATION", value: "1,200m Altitude", detail: "Mountain Climate" },
                  { icon: Compass, label: "GPS ACCURACY", value: "10m Precision", detail: "Offline Maps Inc." },
                  { icon: MapPin, label: "LANDMARKS", value: "3 Waypoints", detail: "Photo Guide Inc." },
                ].map((item, i) => (
                  <div key={i} className="spec-card p-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <item.icon className="w-5 h-5 text-metallic-gold" />
                      <span className="text-[10px] tracking-[0.2em] text-muted-foreground/50 uppercase">{item.label}</span>
                    </div>
                    <p className="text-base font-medium text-foreground">{item.value}</p>
                    <p className="text-xs text-muted-foreground/40">{item.detail}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-6 border-t border-white/5">
                <h3 className="text-base font-semibold text-foreground">Getting Here</h3>
                <p className="text-muted-foreground/60 leading-relaxed text-sm">
                  We provide detailed directions upon booking, including GPS coordinates 
                  and offline maps. For guests arriving by air, we offer private transfer 
                  services from the regional airport.
                </p>
                <div className="flex gap-4 text-xs text-muted-foreground/40">
                  <span>4WD Recommended</span>
                  <span>|</span>
                  <span>Snow Chains in Winter</span>
                  <span>|</span>
                  <span>Helipad Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
