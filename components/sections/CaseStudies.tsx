"use client"

import { motion } from "framer-motion"
import { Container, SectionHeading } from "../ui"
import { ArrowRight, TrendingUp, Clock, Target } from "lucide-react"

const caseStudies = [
  {
    title: "Plywood Factory - Kenya",
    challenge: "Manual quality control leading to inconsistencies",
    solution: "Implemented QR-based tracking system",
    result: "95% improvement in quality accuracy",
    icon: Target,
    color: "from-brand-orange to-orange-600",
  },
  {
    title: "Coal Crushing - Colombia",
    challenge: "Lack of real-time production monitoring",
    solution: "Deployed IoT sensors with live dashboard",
    result: "24/7 real-time visibility achieved",
    icon: Clock,
    color: "from-brand-red to-red-600",
  },
  {
    title: "Veneer Factory - Bhutan",
    challenge: "Manual grading causing delays",
    solution: "Automated grading with barcode system",
    result: "3x faster processing time",
    icon: TrendingUp,
    color: "from-brand-yellow to-yellow-600",
  },
]

export default function CaseStudies() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <Container>
        <SectionHeading
          title="Success Stories"
          subtitle="Real results from real factories"
        />
        
        <div className="relative">
          {/* Three columns of scrolling testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-h-[600px] overflow-hidden">
            {/* Column 1 - Scrolling up */}
            <motion.div
              animate={{ y: [0, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="space-y-6"
            >
              {[...caseStudies, ...caseStudies].map((study, index) => (
                <div
                  key={`col1-${index}`}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-orange/50 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${study.color} flex items-center justify-center shadow-lg`}>
                      <study.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{study.title}</h4>
                      <p className="text-xs text-gray-500">Manufacturing Client</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    "{study.challenge}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-orange">{study.result}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-brand-yellow">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Column 2 - Scrolling down */}
            <motion.div
              animate={{ y: [-1000, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="space-y-6 hidden md:block"
            >
              {[...caseStudies, ...caseStudies].map((study, index) => (
                <div
                  key={`col2-${index}`}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-orange/50 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${study.color} flex items-center justify-center shadow-lg`}>
                      <study.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{study.title}</h4>
                      <p className="text-xs text-gray-500">Factory Partner</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    "{study.solution}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-orange">{study.result}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-brand-yellow">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Column 3 - Scrolling up */}
            <motion.div
              animate={{ y: [0, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 10 }}
              className="space-y-6 hidden md:block"
            >
              {[...caseStudies, ...caseStudies].map((study, index) => (
                <div
                  key={`col3-${index}`}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-orange/50 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${study.color} flex items-center justify-center shadow-lg`}>
                      <study.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{study.title}</h4>
                      <p className="text-xs text-gray-500">Industry Leader</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    "Transformed our operations completely. The results exceeded expectations."
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-orange">{study.result}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-brand-yellow">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
        </div>
      </Container>
    </section>
  )
}
