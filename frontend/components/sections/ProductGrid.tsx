"use client"

import { motion } from "framer-motion"
import { Container, SectionHeading } from "../ui"
import { ArrowRight, Globe2 } from "lucide-react"

const products = [
  { name: "Plywood Factory ERP", regions: "Africa & India", color: "from-brand-orange to-orange-500" },
  { name: "Veneer Factory ERP", regions: "Africa & Bhutan", color: "from-brand-teal to-teal-500" },
  { name: "Timber Factory ERP", regions: "Africa & Bhutan", color: "from-brand-yellow to-yellow-500" },
  { name: "Panel Factory ERP", regions: "India", color: "from-brand-red to-red-500" },
  { name: "Log/Timber QR Scan Process", regions: "India", color: "from-orange-400 to-brand-orange" },
  { name: "CRM", regions: "India", color: "from-red-400 to-brand-red" },
  { name: "Retail Inventory & Billing", regions: "India", color: "from-brand-red to-red-600" },
  { name: "Wholesale Inventory & Billing", regions: "India", color: "from-brand-orange to-orange-600" },
  { name: "Warehouse Management ERP", regions: "India", color: "from-brand-teal to-teal-600" },
  { name: "E-Commerce", regions: "India", color: "from-yellow-400 to-brand-yellow" },
  { name: "HR Management ERP", regions: "Africa & India", color: "from-orange-500 to-red-500" },
  { name: "Real Estate Management ERP", regions: "India", color: "from-teal-400 to-brand-teal" },
  { name: "Coal Crushing ERP", regions: "Colombia", color: "from-gray-600 to-gray-700" },
  { name: "EUDR Document Management", regions: "Africa, Dubai & Europe", color: "from-brand-teal to-teal-600" },
  { name: "Stone Crushing Factory ERP", regions: "India", color: "from-gray-500 to-gray-600" },
  { name: "Report Automation", regions: "India", color: "from-brand-orange via-brand-red to-brand-yellow" },
]

export default function ProductGrid() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <SectionHeading
          title="Our Product Suite"
          subtitle="16+ specialized ERP solutions deployed globally"
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-orange/30 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.color} opacity-5 blur-3xl group-hover:opacity-15 transition-opacity`} />
              
              <motion.div 
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${product.color} text-white mb-4 shadow-lg`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-6 h-6 bg-white/30 rounded" />
              </motion.div>
              
              <h3 className="text-base font-bold mb-2 text-gray-900 group-hover:text-brand-orange transition-colors">
                {product.name}
              </h3>
              
              <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
                <Globe2 className="w-3.5 h-3.5" />
                <span>{product.regions}</span>
              </div>
              
              <div className="flex items-center text-sm font-semibold text-brand-orange group-hover:text-brand-red transition-colors">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
