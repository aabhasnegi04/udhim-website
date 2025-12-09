"use client"

import { useEffect } from "react"
import { Navbar, Footer } from "@/components/layout"
import { 
  Hero, 
  QuickStats, 
  IndustryStackedCards, 
  HorizontalScroll, 
  GlobalMap, 
  CaseStudies, 
  HowItWorks, 
  ContactForm,
  FinalCTA, 
  FloatingElements 
} from "@/components/sections"
import { ScrollProgress } from "@/components/ui"

export default function Home() {
  useEffect(() => {
    // Scroll to top on page load/reload
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ScrollProgress />
      <FloatingElements />
      <Navbar />
      <main className="min-h-screen relative">
        <Hero />
        <QuickStats />
        <IndustryStackedCards />
        <HorizontalScroll />
        <GlobalMap />
        <CaseStudies />
        <HowItWorks />
        <ContactForm />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}
