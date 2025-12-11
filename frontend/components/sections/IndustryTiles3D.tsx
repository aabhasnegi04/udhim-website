"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Container, SectionHeading } from "../ui"
import { Factory, Trees, ShoppingBag, Package, Users, Building2, FileCheck, ShoppingCart, ArrowRight, Sparkles } from "lucide-react"

const industries = [
  { icon: Factory, title: "Factory & Manufacturing", color: "from-brand-orange to-orange-500", delay: 0 },
  { icon: Trees, title: "Wood Processing", color: "from-brand-teal to-teal-500", delay: 0.1 },
  { icon: ShoppingBag, title: "Retail & Wholesale", color: "from-brand-red to-red-500", delay: 0.2 },
  { icon: Package, title: "Warehouse & Logistics", color: "from-brand-yellow to-yellow-500", delay: 0.3 },
  { icon: Users, title: "HR & Workforce", color: "from-orange-400 to-brand-orange", delay: 0.4 },
  { icon: Building2, title: "Real Estate", color: "from-red-400 to-brand-red", delay: 0.5 },
  { icon: FileCheck, title: "Compliance (EUDR)", color: "from-yellow-400 to-brand-yellow", delay: 0.6 },
  { icon: ShoppingCart, title: "E-Commerce", color: "from-brand-orange via-brand-red to-brand-yellow", delay: 0.7 },
]

export default function IndustryTiles3D() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={ref} className="py-16 lg:py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
      
      {/* Animated mesh */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      </motion.div>

      {/* Floating orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl animate-pulse delay-500" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="px-5 py-2 text-xs font-bold tracking-widest text-brand-orange uppercase border-l-4 border-brand-orange bg-white shadow-sm">
              Industry Solutions
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-hero mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-brand-orange via-brand-red to-brand-yellow bg-clip-text text-transparent">
              Transforming Every Industry
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tailored ERP solutions that revolutionize your operations
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: -90, z: -100 }}
              whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: industry.delay,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                z: 50,
                transition: { duration: 0.3 }
              }}
              className="group relative"
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <div className="relative bg-white rounded-3xl p-8 border border-gray-200 group-hover:border-brand-orange/50 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden">
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Icon with animation */}
                <motion.div 
                  className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${industry.color} mb-6 shadow-lg`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <industry.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-brand-orange transition-colors">
                  {industry.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Revolutionizing operations with cutting-edge technology
                </p>
                
                <motion.div 
                  className="flex items-center text-sm font-bold text-brand-orange group-hover:text-brand-red transition-colors"
                  initial={{ x: 0 }}
                  whileHover={{ x: 10 }}
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.div>

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className={`absolute inset-0 bg-gradient-to-tl ${industry.color} rounded-tl-full`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
