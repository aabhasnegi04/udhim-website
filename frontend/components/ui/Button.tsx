"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
  href?: string
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  href,
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200"
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-orange to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-2xl hover:shadow-brand-orange/30",
    secondary: "bg-gradient-to-r from-brand-red to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-2xl hover:shadow-brand-red/30",
    outline: "border-2 border-brand-orange text-brand-orange bg-white hover:bg-brand-orange hover:text-white transition-colors",
  }

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
  }

  const Component = href ? "a" : "button"
  const props = href ? { href } : { onClick }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Component
        {...props}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
      >
        {children}
      </Component>
    </motion.div>
  )
}
