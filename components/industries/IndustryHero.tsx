"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui"
import { Factory } from "lucide-react"

export default function IndustryHero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-orange/10 to-brand-red/10 rounded-full mb-6 border border-brand-orange/20"
          >
            <Factory className="w-4 h-4 text-brand-orange" />
            <span className="text-sm font-semibold text-gray-700">Industry-Specific Solutions</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="text-gray-900">Transforming </span>
            <span className="bg-gradient-to-r from-brand-orange via-brand-red to-brand-yellow bg-clip-text text-transparent">
              Every Industry
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Tailored ERP and automation solutions designed specifically for your industry's 
            unique challenges and requirements.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
