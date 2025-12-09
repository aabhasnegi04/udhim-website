"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Container, SectionHeading } from "../ui"
import { Factory, Trees, ShoppingBag, Package, Users, Building2 } from "lucide-react"

const industries = [
  { 
    icon: Factory, 
    title: "Factory & Manufacturing", 
    description: "Complete automation for manufacturing operations with real-time tracking, quality control, and production optimization.",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50"
  },
  { 
    icon: Trees, 
    title: "Wood Processing", 
    description: "Streamline veneer and plywood production with QR-based quality control and inventory management.",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50"
  },
  { 
    icon: ShoppingBag, 
    title: "Retail & Wholesale", 
    description: "Modern POS and inventory management for retail operations with multi-location support.",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50"
  },
  { 
    icon: Package, 
    title: "Warehouse & Logistics", 
    description: "Smart warehouse operations with barcode scanning and automated inventory management.",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50"
  },
  { 
    icon: Users, 
    title: "HR & Workforce", 
    description: "Complete workforce management with attendance tracking and payroll automation.",
    color: "from-orange-400 to-orange-500",
    bgColor: "bg-orange-50"
  },
  { 
    icon: Building2, 
    title: "Real Estate", 
    description: "Property management and sales tracking with client management and document automation.",
    color: "from-red-400 to-red-500",
    bgColor: "bg-red-50"
  },
]

export default function IndustryStackedCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <section ref={containerRef} className="relative bg-gradient-to-b from-white via-orange-50/20 to-white">
      {/* Sticky Header section */}
      <div className="sticky top-20 z-40 bg-gradient-to-b from-white via-orange-50/20 to-transparent pt-8 md:pt-12 pb-8 md:pb-12">
        <Container>
          <div className="text-center px-4 md:px-0">
            <SectionHeading
              title="Transforming Every Industry"
              subtitle="Tailored ERP solutions that revolutionize your operations"
            />
          </div>
        </Container>
      </div>

      {/* Cards section */}
      <div className="pb-20 relative z-10">
        {industries.map((industry, index) => {
          const targetScale = 1 - ((industries.length - index) * 0.05)
          const isLast = index === industries.length - 1
          
          return (
            <div key={index} className="sticky top-32 md:top-40 mb-8 md:mb-0" style={{ 
              paddingTop: `${index * 40}px`
            }}>
              <Container>
                <motion.div
                  style={{
                    scale: useTransform(
                      scrollYProgress,
                      [index / industries.length, (index + 1) / industries.length],
                      [1, targetScale]
                    ),
                  }}
                  className="mx-auto max-w-4xl px-4 md:px-0"
                >
                  <div className="relative">
                    {/* Shadow layers */}
                    <div className="absolute inset-0 bg-gray-900 rounded-3xl translate-x-3 translate-y-3 opacity-10" />
                    
                    {/* Card */}
                    <div className={`relative ${industry.bgColor} rounded-3xl p-10 md:p-14 shadow-2xl border-2 border-white overflow-hidden`}>
                      {/* Decorative gradient */}
                      <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${industry.color} opacity-20 rounded-bl-full`} />
                      
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-r ${industry.color} text-white mb-8 shadow-xl`}>
                          <industry.icon className="w-12 h-12" />
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                          {industry.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                          {industry.description}
                        </p>
                        
                        {/* Counter - Top Right */}
                        <div className="absolute top-8 right-8 md:top-10 md:right-10">
                          <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${industry.color} text-white font-bold text-base shadow-lg`}>
                            {index + 1}/{industries.length}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Container>
            </div>
          )
        })}
      </div>

      {/* Reduced space at bottom */}
      <div className="h-32 md:h-40" />
    </section>
  )
}
