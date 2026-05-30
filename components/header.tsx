"use client"

import { Phone, Instagram, MessageCircle } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left - Navigation hints */}
        <div className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.35em] text-muted-foreground/40 uppercase">
          <span className="hover:text-foreground/70 transition-luxury cursor-pointer">Retreat</span>
          <span className="hover:text-foreground/70 transition-luxury cursor-pointer">Relax</span>
          <span className="hover:text-foreground/70 transition-luxury cursor-pointer">Restore</span>
        </div>

        {/* Right - Rating badge and contact icons */}
        <div className="flex items-center gap-5 ml-auto">
          {/* Rating Badge - quiet luxury style */}
          <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] px-4 py-2 flex items-center gap-2 text-sm">
            <span className="text-amber-400">&#9733;</span>
            <span className="text-metallic-gold font-medium">5.0</span>
            <span className="text-muted-foreground/40 text-xs">/5</span>
          </div>
          
          {/* Contact Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground/40 hover:text-metallic-gold transition-luxury">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-muted-foreground/40 hover:text-metallic-gold transition-luxury">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href="#" className="text-muted-foreground/40 hover:text-metallic-gold transition-luxury">
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
