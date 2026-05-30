import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TriangleSection } from "@/components/triangle-section"
import { MountainsSection } from "@/components/sections/mountains-section"
import { SaunaSection } from "@/components/sections/sauna-section"
import { LocationSection } from "@/components/sections/location-section"
import { DiamondSection } from "@/components/diamond-section"
import { TermsSection } from "@/components/sections/terms-section"
import { Footer } from "@/components/footer"
import { SideNavigation } from "@/components/side-navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-forest">
      <Header />
      <SideNavigation />
      <HeroSection />
      <TriangleSection />
      <MountainsSection />
      <SaunaSection />
      <LocationSection />
      <DiamondSection />
      <TermsSection />
      <Footer />
    </main>
  )
}
