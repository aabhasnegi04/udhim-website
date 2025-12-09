"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Button, Container, AnimatedText } from "../ui"
import { WhatsAppIcon } from "../icons"
import { Zap, Globe, Cpu, BarChart3, Shield } from "lucide-react"

export default function Hero() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])
  const scale = useTransform(scrollY, [0, 300], [1, 1.1])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24 pb-12 md:pb-16">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0"
        style={{ scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-white to-red-50/50" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </motion.div>

      {/* Floating tech elements - hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        <motion.div
          className="absolute top-20 right-10 text-brand-orange/10"
          style={{ y: y1 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Cpu className="w-32 h-32" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-32 text-brand-yellow/10"
          style={{ y: y2 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Globe className="w-40 h-40" />
        </motion.div>

        <motion.div
          className="absolute top-40 right-60 text-brand-red/10"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        >
          <BarChart3 className="w-24 h-24" />
        </motion.div>
      </div>

      {/* Animated mesh gradient */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#ff6b35", stopOpacity: 0.2 }} />
              <stop offset="50%" style={{ stopColor: "#ee3a4a", stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: "#ffc947", stopOpacity: 0.2 }} />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,100 Q250,50 500,100 T1000,100 L1000,200 L0,200 Z"
            fill="url(#grad1)"
            animate={{
              d: [
                "M0,100 Q250,50 500,100 T1000,100 L1000,200 L0,200 Z",
                "M0,100 Q250,150 500,100 T1000,100 L1000,200 L0,200 Z",
                "M0,100 Q250,50 500,100 T1000,100 L1000,200 L0,200 Z",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </svg>
      </div>
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-start mb-4 md:mb-6"
            >
              <span className="px-3 md:px-5 py-1.5 md:py-2 text-[10px] md:text-xs font-bold tracking-wider md:tracking-widest text-gray-700 uppercase border-l-4 border-brand-orange bg-white/80 backdrop-blur-sm shadow-sm leading-tight inline-block">
                Revolutionizing Factory Operations Worldwide
              </span>
            </motion.div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-hero leading-[1.2] md:leading-[1.3] mb-6 md:mb-8 pb-2 md:pb-4 tracking-tight">
              <AnimatedText
                text="ERP & Factory"
                className="text-gray-900"
                delay={0.5}
              />
              <br />
              <AnimatedText text="Automation for" className="text-gray-900" delay={0.8} />
              <br />
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5, type: "spring", stiffness: 100 }}
                className="inline-block bg-gradient-to-r from-brand-orange via-brand-red to-brand-yellow bg-clip-text text-transparent pb-3"
              >
                Global Manufacturing
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="text-sm md:text-base lg:text-lg text-gray-600 mb-6 md:mb-10 max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              Deployed across 5+ countries with 16+ specialized solutions
            </motion.p>
            
            {/* Buttons - Desktop only */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.6 }}
              className="hidden lg:flex flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nilesh@udhim.com&su=Demo%20Request%20for%20Udhim%20Technology%20Solutions&body=Hi%2C%0A%0AI%20would%20like%20to%20schedule%20a%20demo%20of%20your%20ERP%2C%20CRM%20and%20Dashboard%20solutions.%0A%0APlease%20let%20me%20know%20your%20available%20time%20slots.%0A%0AThank%20you." target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="group relative overflow-hidden shadow-xl shadow-brand-orange/20"
                  >
                    <span className="relative z-10 font-semibold">Book Demo</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-brand-yellow to-brand-orange"
                      initial={{ x: "100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </a>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="https://wa.me/918448505889?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20Udhim%20Technology%27s%20ERP%2C%20CRM%20and%20Dashboard%20solutions" target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="group flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    WhatsApp Us
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Animated stats - Desktop only */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6, duration: 0.6 }}
              className="mt-10 hidden lg:flex flex-wrap gap-6"
            >
              {[
                { icon: Globe, label: "5+ Countries", color: "text-brand-orange" },
                { icon: Zap, label: "16+ Solutions", color: "text-brand-yellow" },
                { icon: Shield, label: "100% Secure", color: "text-brand-teal" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-2 md:gap-2.5 text-gray-700"
                >
                  <stat.icon className={`w-4 h-4 md:w-5 md:h-5 ${stat.color}`} />
                  <span className="text-sm md:text-base font-semibold">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Mobile Dashboard - Simplified */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:hidden relative mt-8 max-w-md mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-red blur-2xl opacity-20" />
              
              <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-4 border-2 border-orange-100 shadow-xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  </div>
                  <span className="text-[10px] text-gray-500 font-semibold">LIVE DASHBOARD</span>
                </div>

                {/* Chart */}
                <div className="relative h-32 mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
                  <svg className="absolute inset-0 w-full h-full">
                    <motion.polyline
                      points="0,80 40,65 80,50 120,55 160,35 200,40 240,25 280,20 320,15"
                      stroke="url(#gradient-mobile)"
                      strokeWidth="2.5"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <defs>
                      <linearGradient id="gradient-mobile">
                        <stop offset="0%" stopColor="#ff6b35" />
                        <stop offset="50%" stopColor="#ee3a4a" />
                        <stop offset="100%" stopColor="#ffc947" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Efficiency", value: "98%" },
                    { label: "Time Saved", value: "50%" },
                    { label: "ROI", value: "6mo" },
                  ].map((stat, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-2 text-center">
                      <p className="text-lg font-bold bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
                        {stat.value}
                      </p>
                      <p className="text-[10px] text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-2 -right-2 bg-white rounded-lg shadow-lg p-2 z-20"
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-semibold whitespace-nowrap">Live Analytics</span>
                </div>
              </motion.div>
            </div>

            {/* Buttons - Mobile only (below dashboard) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col gap-3 mt-6"
            >
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nilesh@udhim.com&su=Demo%20Request%20for%20Udhim%20Technology%20Solutions&body=Hi%2C%0A%0AI%20would%20like%20to%20schedule%20a%20demo%20of%20your%20ERP%2C%20CRM%20and%20Dashboard%20solutions.%0A%0APlease%20let%20me%20know%20your%20available%20time%20slots.%0A%0AThank%20you." target="_blank" rel="noopener noreferrer" className="w-full block">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="group relative overflow-hidden shadow-xl shadow-brand-orange/20 w-full px-8 py-3.5 text-base"
                  >
                    <span className="relative z-10 font-semibold">Book Demo</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-brand-yellow to-brand-orange"
                      initial={{ x: "100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </a>
              </motion.div>
              
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <a href="https://wa.me/918448505889?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20Udhim%20Technology%27s%20ERP%2C%20CRM%20and%20Dashboard%20solutions" target="_blank" rel="noopener noreferrer" className="w-full block">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="group flex items-center justify-center gap-2 w-full px-8 py-3.5 text-base"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    WhatsApp Us
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Animated stats - Mobile only */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-6 flex flex-wrap gap-4 justify-center"
            >
              {[
                { icon: Globe, label: "5+ Countries", color: "text-brand-orange" },
                { icon: Zap, label: "16+ Solutions", color: "text-brand-yellow" },
                { icon: Shield, label: "100% Secure", color: "text-brand-teal" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                  <span className="text-sm font-semibold">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Desktop Dashboard - Full Featured */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
            style={{
              perspective: "1000px",
              transform: `rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
            }}
          >
            <div className="relative">
              {/* 3D Dashboard Card */}
              <motion.div
                animate={{
                  rotateY: [0, 10, 0, -10, 0],
                  z: [0, 50, 0],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-red blur-3xl opacity-20 animate-pulse" />

                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-6 border-2 border-gradient-to-r from-brand-orange/30 to-brand-red/30 shadow-2xl">
                  {/* Holographic header */}
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div className="flex items-center gap-1.5 md:gap-2.5">
                      <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500 animate-pulse" />
                      <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-500 animate-pulse delay-100" />
                      <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-500 animate-pulse delay-200" />
                    </div>
                    <span className="text-[10px] md:text-xs text-gray-500 font-semibold">
                      LIVE DASHBOARD
                    </span>
                  </div>

                  {/* Animated chart */}
                  <div className="relative h-40 md:h-48 mb-4 md:mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
                    <svg className="absolute inset-0 w-full h-full">
                      <motion.polyline
                        points="0,100 50,80 100,60 150,70 200,40 250,50 300,30 350,20 400,10"
                        stroke="url(#gradient2)"
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <defs>
                        <linearGradient id="gradient2">
                          <stop offset="0%" stopColor="#ff6b35" />
                          <stop offset="50%" stopColor="#ee3a4a" />
                          <stop offset="100%" stopColor="#ffc947" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Grid lines */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-full h-px bg-white/10"
                        style={{ top: `${i * 25}%` }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: i * 0.1 }}
                      />
                    ))}
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-3 gap-2 md:gap-3">
                    {[
                      { label: "Production", value: "98.5%", change: "+12%" },
                      { label: "Efficiency", value: "94.2%", change: "+8%" },
                      { label: "Quality", value: "99.9%", change: "+15%" },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2.5 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-3 border border-white/10"
                      >
                        <p className="text-[10px] md:text-xs text-white/50 mb-0.5 md:mb-1">{stat.label}</p>
                        <p className="text-sm md:text-base font-bold text-white">{stat.value}</p>
                        <p className="text-[10px] md:text-xs text-green-400">{stat.change}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-3 md:-top-4 -right-3 md:-right-4 bg-white rounded-lg md:rounded-xl shadow-xl p-2 md:p-3 z-20"
              >
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs md:text-sm font-semibold whitespace-nowrap">Live Analytics</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-3 md:-bottom-4 -left-3 md:-left-4 bg-white rounded-lg md:rounded-xl shadow-xl p-2 md:p-3 z-20"
              >
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-xs md:text-sm font-semibold whitespace-nowrap">Real-time Sync</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
