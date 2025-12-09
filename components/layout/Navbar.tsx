"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Container, Button } from "../ui"
import { WhatsAppIcon } from "../icons"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Products", href: "/products" },
  { name: "Industries", href: "/industries" },
  { name: "About", href: "/about" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <Container>
        <div className="flex items-center justify-between lg:justify-between h-20">
          <div className="flex items-center gap-8 flex-1 lg:flex-initial justify-center lg:justify-start">
            <motion.a
              href="/"
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/logo.png"
                alt="Udhim Technology"
                width={220}
                height={80}
                className="h-14 lg:h-16 w-auto"
                priority
              />
            </motion.a>

            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold text-gray-700 hover:text-brand-orange transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-orange to-brand-yellow group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nilesh@udhim.com&su=Demo%20Request%20for%20Udhim%20Technology%20Solutions&body=Hi%2C%0A%0AI%20would%20like%20to%20schedule%20a%20demo%20of%20your%20ERP%2C%20CRM%20and%20Dashboard%20solutions.%0A%0APlease%20let%20me%20know%20your%20available%20time%20slots.%0A%0AThank%20you." target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="md">
                Book Demo
              </Button>
            </a>
            <a href="https://wa.me/918448505889?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20Udhim%20Technology%27s%20ERP%2C%20CRM%20and%20Dashboard%20solutions" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="md" className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 absolute right-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white border-b border-gray-100"
        >
          <Container>
            <div className="py-4 space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-base font-medium text-gray-700 hover:text-primary-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nilesh@udhim.com&su=Demo%20Request%20for%20Udhim%20Technology%20Solutions&body=Hi%2C%0A%0AI%20would%20like%20to%20schedule%20a%20demo%20of%20your%20ERP%2C%20CRM%20and%20Dashboard%20solutions.%0A%0APlease%20let%20me%20know%20your%20available%20time%20slots.%0A%0AThank%20you." target="_blank" rel="noopener noreferrer" className="w-full block">
                  <Button variant="outline" size="sm" className="w-full">
                    Book Demo
                  </Button>
                </a>
                <a href="https://wa.me/918448505889?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20Udhim%20Technology%27s%20ERP%2C%20CRM%20and%20Dashboard%20solutions" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="primary" size="sm" className="w-full flex items-center justify-center gap-2">
                    <WhatsAppIcon className="w-4 h-4" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </Container>
        </motion.div>
      )}
    </nav>
  )
}
