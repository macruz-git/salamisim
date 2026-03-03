import { Starfield } from "@/components/starfield"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MisconceptionsSection } from "@/components/misconceptions-section"
import { HumssSubjectsSection } from "@/components/humss-subjects-section"
import { DiscoverSection } from "@/components/discover-section"
import { BeyondSection } from "@/components/beyond-section"
import { OurJourneySection } from "@/components/our-journy-section"
import { MembersPanel } from "@/components/members-panel"
import { Footer } from "@/components/footer"
import { BackgroundMusic } from "@/components/background-music"

export default function Home() {
  return (
    <>
      <Starfield />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <MisconceptionsSection />
        <HumssSubjectsSection />
        <DiscoverSection />
        <OurJourneySection />
        <BeyondSection />
        <MembersPanel />
      </main>
      <Footer />
      <BackgroundMusic />
    </>
  )
}
