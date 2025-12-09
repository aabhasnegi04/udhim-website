"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui"
import { Navbar, Footer } from "@/components/layout"
import { ContactForm } from "@/components/sections"
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Globe, 
  Zap, 
  TrendingUp,
  Heart,
  Lightbulb,
  Shield
} from "lucide-react"

const stats = [
  { label: "Years of Excellence", value: "10+", icon: Award },
  { label: "Global Clients", value: "500+", icon: Globe },
  { label: "Countries", value: "5+", icon: TrendingUp },
  { label: "Products Deployed", value: "16+", icon: Zap },
]

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We constantly push boundaries to deliver cutting-edge solutions that transform businesses.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Heart,
    title: "Customer Success",
    description: "Your success is our mission. We're committed to delivering exceptional value and support.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Quality & Reliability",
    description: "We build robust, secure systems that you can depend on for your critical operations.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "We stay ahead of technology trends to bring you the most advanced solutions.",
    color: "from-orange-600 to-red-600"
  },
]

const team = [
  {
    icon: Shield,
    title: "Reliable & Trusted",
    description: "A dedicated team committed to your success with proven track record across 5+ countries",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Heart,
    title: "End-to-End Support",
    description: "Complete maintenance and support from implementation to daily operations - we're with you every step",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Always Available",
    description: "Quick response times and personalized attention - you're not just a number to us",
    color: "from-yellow-500 to-orange-500"
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
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
              <Users className="w-4 h-4 text-brand-orange" />
              <span className="text-sm font-semibold text-gray-700">Transforming Industries Since 2014</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              <span className="text-gray-900">Empowering Businesses with </span>
              <span className="bg-gradient-to-r from-brand-orange via-brand-red to-brand-yellow bg-clip-text text-transparent">
                Smart Automation
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              We're a global technology company specializing in ERP and factory automation solutions. 
              Our mission is to revolutionize manufacturing operations worldwide with innovative, 
              reliable, and scalable software.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  <stat.icon className="w-8 h-8 text-brand-orange mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 px-4">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-2xl" />
              <div className="relative bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 md:p-10 border-2 border-orange-100">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-red rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower manufacturing businesses worldwide with intelligent automation solutions 
                  that drive efficiency, reduce costs, and accelerate growth. We believe every factory 
                  deserves access to world-class technology.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-2xl" />
              <div className="relative bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 md:p-10 border-2 border-yellow-100">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow to-brand-orange rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become the global leader in factory automation and ERP solutions, recognized for 
                  innovation, reliability, and customer success. We envision a future where every 
                  manufacturing operation runs seamlessly with our technology.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 px-4"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 px-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 px-4"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Udhim?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Small team, big impact - personalized service with enterprise-grade solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 px-4">
            {team.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-brand-orange/30 transition-all h-full">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional commitment section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 md:p-12 border-2 border-orange-100 mx-4"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Commitment to You
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We believe in building long-term partnerships, not just selling software. From initial 
                consultation to deployment, training, and ongoing maintenance - we're here for you. 
                Our personalized approach means you get direct access to our experts, faster response 
                times, and solutions tailored to your specific needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-orange rounded-full" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-red rounded-full" />
                  <span>Complete Training</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full" />
                  <span>Lifetime Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-orange rounded-full" />
                  <span>Regular Updates</span>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>
  )
}
