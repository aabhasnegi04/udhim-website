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
    // Handle 404 redirects from web.config
    const urlParams = new URLSearchParams(window.location.search)
    const redirectPath = urlParams.get('redirect') // The encoded path from 404.html
    
    if (redirectPath) {
      // Decode and navigate to the original path
      const decodedPath = decodeURIComponent(redirectPath)
      window.history.replaceState({}, '', decodedPath)
    }
    
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
