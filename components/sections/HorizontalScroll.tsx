"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Factory, Trees, ShoppingBag, Package, Users, Building2, FileCheck, ShoppingCart } from "lucide-react"

const products = [
  { 
    icon: Factory, 
    title: "Plywood Factory ERP", 
    description: "Complete automation for plywood manufacturing with real-time tracking",
    color: "from-brand-orange to-orange-600",
    stats: { efficiency: "98%", time: "50% faster", roi: "6 months" }
  },
  { 
    icon: Trees, 
    title: "Veneer Factory ERP", 
    description: "Streamline veneer production with QR-based quality control",
    color: "from-brand-teal to-teal-600",
    stats: { efficiency: "95%", time: "40% faster", roi: "8 months" }
  },
  { 
    icon: ShoppingBag, 
    title: "Retail & Wholesale", 
    description: "Modern POS and inventory management for retail operations",
    color: "from-brand-red to-red-600",
    stats: { efficiency: "92%", time: "60% faster", roi: "4 months" }
  },
  { 
    icon: Package, 
    title: "Warehouse Management", 
    description: "Smart warehouse operations with barcode scanning and live tracking",
    color: "from-brand-yellow to-yellow-600",
    stats: { efficiency: "97%", time: "55% faster", roi: "5 months" }
  },
  { 
    icon: Users, 
    title: "HR Management", 
    description: "Complete workforce management with attendance and payroll",
    color: "from-orange-500 to-red-500",
    stats: { efficiency: "94%", time: "70% faster", roi: "3 months" }
  },
  { 
    icon: Building2, 
    title: "Real Estate ERP", 
    description: "Property management and sales tracking in one platform",
    color: "from-teal-500 to-brand-teal",
    stats: { efficiency: "96%", time: "45% faster", roi: "7 months" }
  },
  { 
    icon: FileCheck, 
    title: "EUDR Compliance", 
    description: "Document management for European deforestation regulations",
    color: "from-green-500 to-teal-600",
    stats: { efficiency: "99%", time: "80% faster", roi: "2 months" }
  },
  { 
    icon: ShoppingCart, 
    title: "E-Commerce Platform", 
    description: "Full-featured online store with inventory sync",
    color: "from-purple-500 to-pink-600",
    stats: { efficiency: "93%", time: "65% faster", roi: "4 months" }
  },
]

export default function HorizontalScroll() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"])

  return (
    <>
      {/* Desktop: Horizontal scroll experience */}
      <section ref={targetRef} className="relative hidden lg:block h-[350vh] bg-gradient-to-b from-gray-50 to-white">
        {/* Scroll indicator at top */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-20">
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-600 text-base font-semibold bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
          >
            Scroll down to explore →
          </motion.div>
        </div>
        
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8 px-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-none w-[500px] h-[600px] group"
            >
              <div className="relative h-full bg-white rounded-3xl p-10 border-2 border-gray-200 hover:border-brand-orange/50 transition-all duration-500 shadow-xl hover:shadow-2xl overflow-hidden">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Floating orb */}
                <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${product.color} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity rounded-full`} />
                
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div 
                    className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-r ${product.color} text-white mb-8 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <product.icon className="w-12 h-12" />
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-brand-orange transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed flex-grow">
                    {product.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-xl group-hover:bg-orange-50 transition-colors">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                        {product.stats.efficiency}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Efficiency</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl group-hover:bg-orange-50 transition-colors">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                        {product.stats.time}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Time Saved</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl group-hover:bg-orange-50 transition-colors">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                        {product.stats.roi}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">ROI</div>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-xl bg-gradient-to-r ${product.color} text-white font-semibold shadow-lg hover:shadow-xl transition-all`}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Final CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-none w-[500px] h-[600px]"
          >
            <div className="relative h-full bg-gradient-to-br from-brand-orange via-brand-red to-brand-yellow rounded-3xl p-10 shadow-2xl overflow-hidden flex flex-col items-center justify-center text-center">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10">
                <h3 className="text-5xl font-bold text-white mb-6">
                  Ready to Transform?
                </h3>
                <p className="text-2xl text-white/90 mb-8">
                  Get started with a personalized demo
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white text-brand-orange rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all"
                >
                  Book Your Demo
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>

      {/* Mobile & Tablet: Vertical scroll with cards */}
      <section className="lg:hidden py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Solutions</h2>
            <p className="text-sm md:text-base text-gray-600">Swipe to explore our products</p>
          </div>
          
          {/* Horizontal scrollable container for mobile */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-4 md:gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex-none w-[280px] md:w-[340px]"
                >
                  <div className="relative h-full bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg overflow-hidden">
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-5`} />
                    
                    {/* Floating orb */}
                    <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${product.color} opacity-20 blur-2xl rounded-full`} />
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${product.color} text-white mb-4 shadow-lg`}>
                        <product.icon className="w-8 h-8" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                        {product.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        {product.description}
                      </p>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="text-center p-2 bg-gray-50 rounded-lg">
                          <div className={`text-lg font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                            {product.stats.efficiency}
                          </div>
                          <div className="text-[10px] text-gray-500 mt-0.5">Efficiency</div>
                        </div>
                        <div className="text-center p-2 bg-gray-50 rounded-lg">
                          <div className={`text-lg font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                            {product.stats.time}
                          </div>
                          <div className="text-[10px] text-gray-500 mt-0.5">Time Saved</div>
                        </div>
                        <div className="text-center p-2 bg-gray-50 rounded-lg">
                          <div className={`text-lg font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                            {product.stats.roi}
                          </div>
                          <div className="text-[10px] text-gray-500 mt-0.5">ROI</div>
                        </div>
                      </div>
                      
                      {/* CTA */}
                      <button
                        className={`w-full py-3 rounded-xl bg-gradient-to-r ${product.color} text-white font-semibold text-sm shadow-lg active:scale-95 transition-transform`}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Final CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex-none w-[280px] md:w-[340px]"
              >
                <div className="relative h-full bg-gradient-to-br from-brand-orange via-brand-red to-brand-yellow rounded-2xl p-6 shadow-lg overflow-hidden flex flex-col items-center justify-center text-center min-h-[400px]">
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      Ready to Transform?
                    </h3>
                    <p className="text-base md:text-lg text-white/90 mb-6">
                      Get started with a personalized demo
                    </p>
                    <button
                      className="px-8 py-3 bg-white text-brand-orange rounded-xl font-bold text-base shadow-xl active:scale-95 transition-transform"
                    >
                      Book Your Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Scroll hint */}
          <div className="text-center mt-4">
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gray-500 text-xs md:text-sm"
            >
              Swipe to see more →
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
