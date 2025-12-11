"use client"

import { Container } from "../ui"
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"
import { WhatsAppIcon } from "../icons"

const navigation = {
  solutions: [
    { name: "Factory ERP", href: "#" },
    { name: "Warehouse Management", href: "#" },
    { name: "HR Management", href: "#" },
    { name: "Real Estate", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
  ],
  support: [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Contact Support", href: "#" },
    { name: "Status", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR", href: "#" },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 border-t border-gray-800">
      <Container className="py-16 lg:py-20 pb-8 lg:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-brand-orange to-brand-yellow bg-clip-text text-transparent">Udhim Technology</h3>
              <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                Transforming manufacturing worldwide
              </p>
            </div>
            
            <div className="space-y-3 text-sm">
              <a href="mailto:nilesh@udhim.com" className="flex items-center gap-3 hover:text-brand-orange transition-colors group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                nilesh@udhim.com
              </a>
              <a href="tel:+918448505889" className="flex items-center gap-3 hover:text-brand-orange transition-colors group">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                (+91) 8448505889
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span className="leading-relaxed">
                  111B, 2/F, Govindpuri<br />
                  New Delhi - 110019<br />
                  India
                </span>
              </div>
            </div>
            
            <a
              href="https://wa.me/918448505889?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20Udhim%20Technology%27s%20ERP%2C%20CRM%20and%20Dashboard%20solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl hover:scale-105 font-semibold"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-5 text-lg">Solutions</h4>
            <ul className="space-y-3 text-sm">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-brand-orange transition-colors hover:translate-x-1 inline-block">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-5 text-lg">Company</h4>
            <ul className="space-y-3 text-sm">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-brand-orange transition-colors hover:translate-x-1 inline-block">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-5 text-lg">Support</h4>
            <ul className="space-y-3 text-sm">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-brand-orange transition-colors hover:translate-x-1 inline-block">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-5 text-lg">Legal</h4>
            <ul className="space-y-3 text-sm">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-brand-orange transition-colors hover:translate-x-1 inline-block">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-400">
              © 2025 Udhim Technology Pvt. Ltd. All rights reserved.
            </p>
            
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gray-800 hover:bg-gradient-to-r hover:from-brand-orange hover:to-brand-red transition-all hover:scale-110 shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
