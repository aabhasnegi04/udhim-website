"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container, SectionHeading } from "../ui"
import { MapPin, Globe, TrendingUp } from "lucide-react"
import { useState } from "react"

const locations = [
  { name: "India", x: "68%", y: "42%", products: 12, details: "New Delhi (HQ)", isHub: true, color: "#ff6b35" },
  { name: "Gabon", x: "52%", y: "58%", products: 8, details: "Nkok, Libreville", color: "#ffc947" },
  { name: "Bhutan", x: "72%", y: "40%", products: 4, details: "Thimphu", color: "#ff8c42" },
  { name: "Colombia", x: "24%", y: "56%", products: 2, details: "Bogotá", color: "#ff9a56" },
  { name: "Dubai", x: "62%", y: "44%", products: 3, details: "UAE", color: "#ffb347" },
  { name: "Europe", x: "50%", y: "30%", products: 5, details: "Germany, France", color: "#ffa94d" },
]

export default function GlobalMap() {
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null)
  
  return (
    <section className="py-8 md:py-16 lg:py-24 bg-gradient-to-b from-white via-orange-50/20 to-white overflow-hidden">
      <Container>
        <div className="px-4 md:px-0">
          <SectionHeading
            title="Global Presence"
            subtitle="Transforming manufacturing operations worldwide"
          />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl border-2 md:border-4 border-white"
        >
          {/* Map container - hidden on mobile, shown on tablet+ */}
          <div className="hidden md:block relative w-full aspect-[2/1] max-w-6xl mx-auto bg-gradient-to-br from-brand-teal/10 to-brand-teal/5">
            {/* Animated background gradient overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5"
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            />
            
            <Image
              src="/global_map.jpg"
              alt="Global Presence Map"
              fill
              className="object-cover opacity-90"
              priority
            />
            
            {/* Animated connection lines - Web structure from India */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#ffc947" stopOpacity="0.9" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {locations.slice(1).map((location, index) => (
                <motion.line
                  key={index}
                  x1="68%" y1="42%" 
                  x2={location.x} 
                  y2={location.y}
                  stroke={hoveredLocation === index + 1 ? location.color : "url(#gradient1)"}
                  strokeWidth={hoveredLocation === index + 1 ? "3" : "2"}
                  strokeDasharray="8,4"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: hoveredLocation === index + 1 ? 1 : 0.6,
                  }}
                  transition={{ 
                    duration: 2, 
                    delay: index * 0.2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
              ))}
              
              {/* Animated particles traveling along lines */}
              {locations.slice(1).map((location, index) => (
                <motion.circle
                  key={`particle-${index}`}
                  r="3"
                  fill={location.color}
                  filter="url(#glow)"
                  initial={{ 
                    cx: "68%", 
                    cy: "42%",
                    opacity: 0 
                  }}
                  animate={{ 
                    cx: [68, parseFloat(location.x)],
                    cy: [42, parseFloat(location.y)],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    delay: index * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </svg>
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: location.x, top: location.y }}
                onMouseEnter={() => setHoveredLocation(index)}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                <motion.div
                  animate={{ 
                    scale: hoveredLocation === index ? 1.3 : [1, 1.15, 1],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: hoveredLocation === index ? 0 : Infinity, 
                    delay: index * 0.2 
                  }}
                  className="relative group cursor-pointer z-10"
                >
                  {/* Pulsing glow effect */}
                  <motion.div 
                    className={`absolute inset-0 rounded-full blur-xl opacity-40 group-hover:opacity-80 transition-opacity`}
                    style={{ backgroundColor: location.color }}
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: hoveredLocation === index ? [0.6, 0.9, 0.6] : [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Ripple effect on hover */}
                  {hoveredLocation === index && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2"
                      style={{ borderColor: location.color }}
                      initial={{ scale: 1, opacity: 1 }}
                      animate={{ scale: 2.5, opacity: 0 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                  
                  <div 
                    className={`relative bg-white rounded-full ${location.isHub ? 'p-2.5' : 'p-2'} shadow-xl border-2 transition-all duration-300`}
                    style={{ 
                      borderColor: hoveredLocation === index ? location.color : location.isHub ? '#ff6b35' : '#ffc947',
                      borderWidth: location.isHub ? '3px' : '2px'
                    }}
                  >
                    <MapPin 
                      className={`${location.isHub ? 'w-4 h-4' : 'w-3.5 h-3.5'} fill-current transition-colors`}
                      style={{ color: hoveredLocation === index ? location.color : '#ff6b35' }}
                    />
                  </div>
                  
                  {/* Enhanced tooltip */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ 
                      opacity: hoveredLocation === index ? 1 : 0,
                      y: hoveredLocation === index ? 0 : 10,
                      scale: hoveredLocation === index ? 1 : 0.8
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white px-4 py-3 rounded-xl shadow-2xl pointer-events-none border-2"
                    style={{ borderColor: location.color }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Globe className="w-4 h-4" style={{ color: location.color }} />
                      <p className="text-sm font-bold text-gray-900">{location.name}</p>
                      {location.isHub && (
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-semibold">HQ</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{location.details}</p>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" style={{ color: location.color }} />
                      <p className="text-xs font-semibold" style={{ color: location.color }}>
                        {location.products} Products Deployed
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Enhanced Global Operations Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-0 md:mt-12 p-4 md:p-8 bg-gradient-to-r from-orange-50 via-red-50 to-yellow-50 rounded-2xl md:rounded-3xl border border-orange-100 relative overflow-hidden"
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, #ff6b35 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }} />
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">Our Global Operations</h3>
                <p className="text-xs md:text-sm text-gray-600">Delivering excellence across continents</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
                {locations.map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={() => setHoveredLocation(index)}
                    onMouseLeave={() => setHoveredLocation(null)}
                    onClick={() => setHoveredLocation(hoveredLocation === index ? null : index)}
                    className="text-center bg-white rounded-xl md:rounded-2xl p-3 md:p-5 shadow-md md:shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all cursor-pointer border-2 relative overflow-hidden group"
                    style={{ 
                      borderColor: hoveredLocation === index ? location.color : '#fed7aa'
                    }}
                  >
                    {/* Animated gradient background on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                      style={{ 
                        background: `linear-gradient(135deg, ${location.color}, transparent)` 
                      }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div 
                        className="text-2xl md:text-4xl font-bold mb-1 md:mb-2"
                        style={{ 
                          background: `linear-gradient(135deg, ${location.color}, #ff6b35)`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                        animate={{ 
                          scale: hoveredLocation === index ? [1, 1.1, 1] : 1 
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {location.products}
                      </motion.div>
                      
                      <div className="text-xs md:text-sm font-bold text-gray-800 mb-0.5 md:mb-1">
                        {location.name}
                      </div>
                      
                      <div className="text-[10px] md:text-xs text-gray-500 leading-tight">
                        {location.details}
                      </div>
                      
                      {location.isHub && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="mt-1.5 md:mt-2 inline-block"
                        >
                          <span className="text-[9px] md:text-xs bg-gradient-to-r from-red-500 to-orange-500 text-white px-1.5 md:px-2 py-0.5 md:py-1 rounded-full font-semibold">
                            HQ
                          </span>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
        </div>
      </Container>
    </section>
  )
}
