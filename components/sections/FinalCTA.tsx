"use client"

import { motion } from "framer-motion"
import { Container, Button } from "../ui"
import { MessageSquare, Calendar } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange via-brand-red to-brand-yellow" />
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-8 leading-tight">
            Digitize Your Factory Today
          </h2>
          
          <p className="text-2xl md:text-3xl text-white/95 mb-12 leading-relaxed">
            Get a personalized, product-specific demo tailored to your industry needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nilesh@udhim.com&su=Demo%20Request%20for%20Udhim%20Technology%20Solutions&body=Hi%2C%0A%0AI%20would%20like%20to%20schedule%20a%20demo%20of%20your%20ERP%2C%20CRM%20and%20Dashboard%20solutions.%0A%0APlease%20let%20me%20know%20your%20available%20time%20slots.%0A%0AThank%20you." target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold bg-white text-orange-700 rounded-2xl hover:bg-orange-50 transition-all shadow-2xl hover:shadow-3xl">
                  <Calendar className="w-6 h-6 mr-3" />
                  Book Demo
                </button>
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="https://wa.me/918448505889?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20Udhim%20Technology%27s%20ERP%2C%20CRM%20and%20Dashboard%20solutions" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl hover:from-green-600 hover:to-green-700 transition-all shadow-2xl hover:shadow-3xl">
                  <MessageSquare className="w-6 h-6 mr-3" />
                  WhatsApp Us
                </button>
              </a>
            </motion.div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div className="text-5xl font-bold mb-3">15 min</div>
              <div className="text-white/90 text-lg">Average Setup Time</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div className="text-5xl font-bold mb-3">24/7</div>
              <div className="text-white/90 text-lg">Support Available</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div className="text-5xl font-bold mb-3">100%</div>
              <div className="text-white/90 text-lg">Cloud Secure</div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
