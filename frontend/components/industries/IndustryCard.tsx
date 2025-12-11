"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface IndustryCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color: string
  index: number
}

export default function IndustryCard({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  color, 
  index 
}: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="relative group h-full"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
      
      <div className="relative bg-white rounded-2xl p-6 md:p-8 border-2 border-gray-100 hover:border-brand-orange/30 transition-all h-full flex flex-col">
        <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-5">
          {description}
        </p>
        
        <div className="mt-auto">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-1.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
