"use client"

import { motion } from "framer-motion"
import { Container, SectionHeading } from "../ui"
import { Rocket, Link, Zap } from "lucide-react"

const steps = [
  {
    icon: Rocket,
    title: "Deploy",
    description: "Quick implementation with minimal downtime",
    features: ["Cloud-based setup", "On-premise options", "24/7 support"],
  },
  {
    icon: Link,
    title: "Integrate",
    description: "Connect with your existing systems",
    features: ["QR/Barcode scanners", "Weighing scales", "IoT sensors"],
  },
  {
    icon: Zap,
    title: "Automate",
    description: "Transform your operations instantly",
    features: ["Live dashboards", "Automated reports", "AI insights"],
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(234,88,12,0.05),transparent_50%)]" />
      
      <Container className="relative z-10">
        <SectionHeading
          title="How It Works"
          subtitle="Get started in 3 simple steps"
        />
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative mt-16">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-20 left-[16.66%] right-[16.66%] h-0.5">
            <div className="h-full bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-30" />
            <motion.div 
              className="h-full bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-orange"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{ transformOrigin: "left" }}
            />
          </div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="relative bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand-orange/40 overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Icon container */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-orange via-orange-500 to-brand-red text-white mb-6 shadow-xl group-hover:shadow-2xl transition-shadow"
                  >
                    <step.icon className="w-10 h-10" strokeWidth={2.5} />
                    
                    {/* Step number badge */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                      className="absolute -top-2 -right-2 bg-gradient-to-br from-brand-red to-red-700 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white"
                    >
                      {index + 1}
                    </motion.div>
                  </motion.div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-gray-900 group-hover:text-brand-orange transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-base lg:text-lg leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Features list */}
                  <ul className="space-y-3">
                    {step.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + i * 0.1 + 0.4 }}
                        className="text-sm lg:text-base text-gray-700 flex items-center gap-3 font-medium"
                      >
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-brand-orange to-brand-yellow rounded-full group-hover:scale-150 transition-transform" />
                        <span className="group-hover:translate-x-1 transition-transform">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
