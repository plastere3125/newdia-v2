import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Clients from '@/components/Clients'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import Packages from '@/components/Packages'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Clients />
        <Portfolio />
        <Services />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
