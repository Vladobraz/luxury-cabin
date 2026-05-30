"use client"

import { useEffect, useState, useCallback } from "react"

const menuItems = [
  { id: "forest", num: "01", label: "FOREST" },
  { id: "cabin", num: "02", label: "CABIN" },
  { id: "mountains", num: "03", label: "MOUNTAINS" },
  { id: "sauna", num: "04", label: "SAUNA" },
  { id: "location", num: "05", label: "LOCATION" },
  { id: "overview", num: "06", label: "OVERVIEW" },
  { id: "terms", num: "07", label: "TERMS" },
]

export function SideNavigation() {
  const [activeSection, setActiveSection] = useState("cabin")

  const handleScroll = useCallback(() => {
    const sections = menuItems.map(item => document.getElementById(item.id))
    const scrollPosition = window.scrollY + window.innerHeight / 3

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i]
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(menuItems[i].id)
        break
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      })
    }
  }

  return (
    <nav className="fixed right-8 lg:right-14 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="space-y-1">
        {menuItems.map((item, index) => (
          <div key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`nav-item flex items-baseline gap-3 py-2.5 text-right w-full group ${
                activeSection === item.id ? 'active' : ''
              }`}
            >
              <span className={`nav-number text-[10px] tracking-wider transition-luxury ${
                activeSection === item.id 
                  ? 'text-metallic-gold/70' 
                  : 'text-muted-foreground/30 group-hover:text-muted-foreground/50'
              }`}>
                {item.num}.
              </span>
              <span className={`nav-label text-sm font-semibold tracking-tight transition-luxury ${
                activeSection === item.id 
                  ? 'text-metallic-gold' 
                  : 'text-muted-foreground/25 group-hover:text-muted-foreground/50'
              }`}>
                {item.label}
              </span>
            </button>
            {index < menuItems.length - 1 && (
              <div className={`h-px ml-6 transition-luxury ${
                activeSection === item.id ? 'bg-white/10' : 'bg-white/[0.03]'
              }`} />
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}
