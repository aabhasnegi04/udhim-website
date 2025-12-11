"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { Container } from "../ui"
import { Send, CheckCircle, AlertCircle, Loader2, ChevronDown } from "lucide-react"
import { api } from "../../lib/api"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productInterest: "",
    message: "",
  })
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      // Use centralized API configuration
      const data = await api.contact.submit(formData)
      
      setStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        productInterest: "",
        message: "",
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000)
    } catch (error: any) {
      setStatus("error")
      setErrorMessage(error.message || "Failed to submit form. Please try again.")
    }
  }

  const products = [
    "Factory ERP",
    "Plywood ERP",
    "Veneer ERP",
    "Timber ERP",
    "Retail POS",
    "Warehouse Management",
    "HR Management",
    "Real Estate CRM",
  ]

  return (
    <section className="py-8 md:py-10 lg:py-12 pb-16 md:pb-20 relative overflow-visible">
      {/* Vibrant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-red-50 to-yellow-100" />
      
      {/* Animated mesh gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-60"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(239, 68, 68, 0.4) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(251, 146, 60, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 146, 60, 0.5) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />

      {/* Large floating orbs */}
      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-br from-orange-400/30 to-red-400/30 blur-3xl"
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute top-1/4 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-yellow-400/30 to-orange-400/30 blur-3xl"
        animate={{
          y: [0, 60, 0],
          x: [0, -40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -bottom-32 left-1/3 w-72 h-72 rounded-full bg-gradient-to-br from-red-400/25 to-pink-400/25 blur-3xl"
        animate={{
          y: [0, -40, 0],
          x: [0, 25, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Geometric shapes with strong colors */}
      <motion.div
        className="absolute top-20 left-[15%] w-32 h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-40 right-[20%] w-24 h-24 border-8 border-yellow-500/20 rounded-2xl"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-32 right-[15%] w-28 h-28 bg-gradient-to-br from-red-500/15 to-orange-500/15 rounded-full"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Simplified decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-orange-400/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-red-400/30 to-transparent" />
      </div>

      {/* Static decorative elements - no random values to avoid hydration mismatch */}

      {/* Pulsing rings */}
      <motion.div
        className="absolute top-1/3 left-[10%] w-40 h-40 border-4 border-orange-400/20 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
      />

      <motion.div
        className="absolute bottom-1/4 right-[12%] w-32 h-32 border-4 border-red-400/20 rounded-full"
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeOut", delay: 1 }}
      />
      
      <Container className="relative z-10">
        <div className="text-center mb-6 md:mb-8 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1.5 md:mb-2"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base lg:text-lg text-gray-600"
          >
            Let's discuss how we can transform your business
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-6 lg:p-8 border border-gray-100 pb-8 md:pb-10"
          >
            {status === "success" ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-6 md:py-8"
              >
                <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-green-500 mx-auto mb-3 md:mb-4" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Thank You!</h3>
                <p className="text-sm md:text-base text-gray-600">
                  We've received your message and will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs md:text-sm font-semibold text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 md:py-2.5 text-sm md:text-base rounded-lg md:rounded-xl border-2 border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all bg-white caret-brand-orange"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm font-semibold text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 md:py-2.5 text-sm md:text-base rounded-lg md:rounded-xl border-2 border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all bg-white caret-brand-orange"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs md:text-sm font-semibold text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 md:py-2.5 text-sm md:text-base rounded-lg md:rounded-xl border-2 border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all bg-white caret-brand-orange"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs md:text-sm font-semibold text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 md:py-2.5 text-sm md:text-base rounded-lg md:rounded-xl border-2 border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all bg-white caret-brand-orange"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                {/* Product Interest - Custom Dropdown */}
                <div ref={dropdownRef} className="relative">
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1">
                    Product Interest
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full px-3 md:px-4 py-2 md:py-2.5 text-sm md:text-base rounded-lg md:rounded-xl border-2 transition-all bg-white text-left flex items-center justify-between group ${
                      isDropdownOpen 
                        ? "border-brand-orange ring-2 ring-brand-orange/20" 
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <span className={formData.productInterest ? "text-gray-900 font-medium" : "text-gray-400"}>
                      {formData.productInterest || "Select a product..."}
                    </span>
                    <motion.div
                      animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-brand-orange" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute z-[100] w-full mt-2 bg-white border-2 border-brand-orange/30 rounded-lg md:rounded-xl shadow-2xl overflow-hidden"
                      >
                        <div className="py-1">
                          {products.map((product, index) => (
                            <motion.button
                              key={product}
                              type="button"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.03 }}
                              onClick={() => {
                                setFormData({ ...formData, productInterest: product })
                                setIsDropdownOpen(false)
                              }}
                              className={`w-full px-3 md:px-4 py-2.5 md:py-3 text-left text-sm md:text-base transition-all relative group ${
                                formData.productInterest === product 
                                  ? "bg-gradient-to-r from-brand-orange to-brand-red text-white font-semibold shadow-md" 
                                  : "text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50"
                              }`}
                            >
                              <span className="relative z-10">{product}</span>
                              {formData.productInterest === product && (
                                <motion.div
                                  layoutId="selected"
                                  className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-red"
                                  initial={false}
                                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                              )}
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm font-semibold text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 md:py-2.5 text-sm md:text-base rounded-lg md:rounded-xl border-2 border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all resize-none bg-white caret-brand-orange"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                {/* Error Message */}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-2.5 md:p-3 bg-red-50 border border-red-200 rounded-lg md:rounded-xl text-red-700"
                  >
                    <AlertCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <p className="text-xs md:text-sm font-medium">{errorMessage}</p>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                  whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-brand-orange via-brand-red to-brand-yellow text-white font-bold py-2.5 md:py-3 px-6 md:px-8 text-sm md:text-base rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 md:w-5 md:h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
