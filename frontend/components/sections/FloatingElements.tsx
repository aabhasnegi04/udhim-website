"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-brand-orange/30 to-brand-yellow/30 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{ top: "10%", left: "10%" }}
      />
      
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-brand-red/30 to-brand-orange/30 blur-3xl"
        animate={{
          x: [0, -150, 0],
          y: [0, 150, 0],
        }}
        transition={{ duration: 25, repeat: Infinity }}
        style={{ bottom: "20%", right: "15%" }}
      />
      
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-brand-teal/30 to-cyan-400/30 blur-3xl"
        animate={{
          x: [0, 200, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 30, repeat: Infinity }}
        style={{ top: "50%", right: "30%" }}
      />

      {/* Parallax geometric shapes */}
      {isClient && (
        <>
          <motion.div
            className="absolute w-32 h-32"
            style={{
              top: "20%",
              left: "80%",
              x: mousePosition.x * 0.02,
              y: mousePosition.y * 0.02,
            }}
          >
            <div className="w-full h-full border-4 border-brand-orange/20 rotate-45" />
          </motion.div>

          <motion.div
            className="absolute w-24 h-24"
            style={{
              bottom: "30%",
              left: "10%",
              x: mousePosition.x * -0.03,
              y: mousePosition.y * -0.03,
            }}
          >
            <div className="w-full h-full border-4 border-brand-yellow/20 rounded-full" />
          </motion.div>

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => {
            const seed = i * 123; // Use index-based seed for consistent positioning
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-brand-orange/40 rounded-full"
                initial={{
                  x: (seed % 1920),
                  y: ((seed * 7) % 1080),
                }}
                animate={{
                  x: ((seed * 3) % 1920),
                  y: ((seed * 11) % 1080),
                }}
                transition={{
                  duration: (seed % 20) + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            )
          })}
        </>
      )}
    </div>
  )
}
