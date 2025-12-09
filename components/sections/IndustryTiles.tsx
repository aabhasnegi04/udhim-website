"use client"

import { motion } from "framer-motion"
import { Container, SectionHeading } from "../ui"
import { Factory, Trees, ShoppingBag, Package, Users, Building2, FileCheck, ShoppingCart, ArrowRight } from "lucide-react"

const industries = [
  { icon: Factory, title: "Factory & Manufacturing", color: "from-brand-orange to-orange-500" },
  { icon: Trees, title: "Wood Processing", color: "from-brand-teal to-teal-500" },
  { icon: ShoppingBag, title: "Retail & Wholesale", color: "from-brand-red to-red-500" },
  { icon: Package, title: "Warehouse & Logistics", color: "from-brand-yellow to-yellow-500" },
  { icon: Users, title: "HR & Workforce", color: "from-orange-400 to-brand-orange" },
  { icon: Building2, title: "Real Estate", color: "from-red-400 to-brand-red" },
  { icon: FileCheck, title: "Compliance (EUDR)", color: "from-yellow-400 to-brand-yellow" },
  { icon: ShoppingCart, title: "E-Commerce", color: "from-brand-orange via-brand-red to-brand-yellow" },
]

export default function IndustryTiles() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <Container>
        <div className="px-4 md:px-0">
          <SectionHeading
            title="Industry Solutions"
            subtitle="Tailored ERP solutions for every industry vertical"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-white rounded-2xl p-5 md:p-6 border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Subtle gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 md:w-14 md:h-14 rounded-xl md:rounded-xl bg-gradient-to-r ${industry.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <industry.icon className="w-8 h-8 md:w-7 md:h-7" />
                  </div>
                  
                  <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-900 group-hover:text-gray-900">
                    {industry.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-gray-500 mb-3 leading-relaxed">
                    Revolutionizing operations with cutting-edge technology
                  </p>
                  
                  <div className="flex items-center text-xs md:text-sm font-medium text-brand-orange group-hover:text-brand-red transition-colors">
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
