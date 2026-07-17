import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { Stats } from "@/components/site/stats"
import { Features } from "@/components/site/features"
import { HowItWorks } from "@/components/site/how-it-works"
import { Testimonials } from "@/components/site/testimonials"
import { Faq } from "@/components/site/faq"
import { Cta } from "@/components/site/cta"
import { Footer } from "@/components/site/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
