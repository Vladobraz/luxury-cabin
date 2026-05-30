"use client"

import { Instagram, MessageCircle, Phone, MapPin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-20 lg:py-28 border-t border-white/[0.04]">
      <div className="absolute inset-0 bg-deep-forest" />
      
      {/* Animated fog */}
      <div className="fog-layer fog-layer-3" style={{ animationDelay: '-45s', opacity: 0.5 }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-5">
            <h3 className="text-xl heading-editorial text-foreground">THE CABIN</h3>
            <p className="text-sm text-muted-foreground/50 leading-relaxed">
              Your perfect escape from the city noise into pristine wilderness
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="text-xs font-medium tracking-[0.3em] text-metallic-gold uppercase">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+19999999999" className="flex items-center gap-3 text-muted-foreground/50 hover:text-foreground/70 transition-luxury text-sm">
                <Phone className="w-4 h-4" />
                <span>+1 (999) 999-9999</span>
              </a>
              <a href="mailto:hello@thecabin.com" className="flex items-center gap-3 text-muted-foreground/50 hover:text-foreground/70 transition-luxury text-sm">
                <Mail className="w-4 h-4" />
                <span>hello@thecabin.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground/50 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Mountain Altai Region</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-5">
            <h4 className="text-xs font-medium tracking-[0.3em] text-metallic-gold uppercase">Follow Us</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-muted-foreground/40 hover:text-metallic-gold hover:border-white/[0.1] transition-luxury">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-muted-foreground/40 hover:text-metallic-gold hover:border-white/[0.1] transition-luxury">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-muted-foreground/40 hover:text-metallic-gold hover:border-white/[0.1] transition-luxury">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/30">
            2024 THE CABIN. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-xs text-muted-foreground/30">
            <a href="#" className="hover:text-muted-foreground/60 transition-luxury">Privacy Policy</a>
            <a href="#" className="hover:text-muted-foreground/60 transition-luxury">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
