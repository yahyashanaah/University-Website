"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Vision } from "@/components/vision"
import { Faculties } from "@/components/faculties"
import { StudySystem } from "@/components/study-system"
import { TeachingMethods } from "@/components/teaching-methods"
import { Registration } from "@/components/registration"
import { StudentOffers } from "@/components/student-offers"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <section id="about">
          <Vision />
          </section>
          <section id="programs">
          <Faculties />
          </section>
          <StudySystem />
          <TeachingMethods />
          <section id="registration"> <Registration /> </section>
          <StudentOffers />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  )
}
