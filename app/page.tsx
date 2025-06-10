import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import PersonalProjects from "@/components/personal-projects"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Junaid Asrar | Developer",
  description: "I build powerful websites, AI agents, and WhatsApp automation tools.",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <PersonalProjects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
