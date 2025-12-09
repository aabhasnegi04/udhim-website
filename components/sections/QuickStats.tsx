"use client"

import { motion } from "framer-motion"
import { Container } from "../ui"
import { Globe, Building, Users, BarChart3, QrCode, Shield } from "lucide-react"

const stats = [
  { icon: Globe, label: "Operating in 5+ Countries" },
  { icon: Building, label: "16+ Industry Solutions" },
  { icon: Users, label: "Trusted by Factories Globally" },
  { icon: BarChart3, label: "Real-time Analytics" },
  { icon: QrCode, label: "QR/Barcode Automation" },
  { icon: Shield, label: "EUDR Compliant" },
]

export default function QuickStats() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 text-orange-700 mb-4 group-hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              >
                <stat.icon className="w-7 h-7" />
              </motion.div>
              <p className="text-sm font-semibold text-gray-800">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
