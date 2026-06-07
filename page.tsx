import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Fleet } from '@/components/fleet'
import { Coverage } from '@/components/coverage'
import { Stats } from '@/components/stats'
import { WhyUs } from '@/components/why-us'
import { Gallery } from '@/components/gallery'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { FloatingButtons } from '@/components/floating-buttons'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Fleet />
        <Coverage />
        <Stats />
        <WhyUs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
