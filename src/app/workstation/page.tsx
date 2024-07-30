import About from './_components/About'
import { Benefits } from './_components/Benefits'
import { ChangeYourIdeas } from './_components/ChangeYourIdeas'
import Footer from './_components/Footer'
import { Hero } from './_components/Hero'
import { PcComponents } from './_components/PcComponents'
import { Specs } from './_components/Specs'

export default function Page() {
  return (
    <main className="bg-[#0E0D0F] text-white min-h-screen">
      <Hero />
      <Specs />
      <ChangeYourIdeas />
      <PcComponents />
      <Benefits />
      <About />
      <Footer />
    </main>
  )
}
