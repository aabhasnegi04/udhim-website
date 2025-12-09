"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui"
import { Navbar, Footer } from "@/components/layout"
import { ProductShowcase } from "@/components/sections"
import { Factory, Users, BarChart3, Building2, Package, TrendingUp } from "lucide-react"

const products = [
  {
    id: "factory-erp",
    name: "Factory ERP",
    tagline: "Complete Manufacturing Control",
    description: "End-to-end ERP solution designed specifically for manufacturing operations. Manage production, inventory, quality, and supply chain from a single platform.",
    icon: Factory,
    color: "from-brand-orange to-orange-600",
    features: [
      "Production Planning & Scheduling",
      "Real-time Inventory Tracking",
      "Quality Control Management",
      "Supply Chain Integration",
      "Cost Analysis & Reporting",
      "Multi-location Support"
    ],
    stats: [
      { label: "Efficiency Gain", value: "45%" },
      { label: "Cost Reduction", value: "30%" },
      { label: "Time Saved", value: "60%" }
    ],
    media: [
      { type: "image" as const, url: "/screenshots/factory-dashboard.jpg", title: "Main Dashboard" },
      { type: "image" as const, url: "/screenshots/factory-production.jpg", title: "Production Planning" },
      { type: "video" as const, url: "/videos/factory-demo.mp4", title: "Full Product Demo" },
      { type: "image" as const, url: "/screenshots/factory-inventory.jpg", title: "Inventory Management" }
    ]
  },
  {
    id: "crm",
    name: "CRM Suite",
    tagline: "Customer Relationships, Simplified",
    description: "Powerful CRM platform to manage your entire customer lifecycle. Track leads, automate sales processes, and build lasting relationships.",
    icon: Users,
    color: "from-orange-500 to-brand-red",
    features: [
      "Lead & Opportunity Management",
      "Sales Pipeline Automation",
      "Customer Communication Hub",
      "Email & SMS Integration",
      "Performance Analytics",
      "Mobile Access"
    ],
    stats: [
      { label: "Sales Growth", value: "55%" },
      { label: "Lead Conversion", value: "40%" },
      { label: "Response Time", value: "-70%" }
    ],
    media: [
      { type: "image" as const, url: "/screenshots/crm-dashboard.jpg", title: "CRM Dashboard" },
      { type: "video" as const, url: "/videos/crm-demo.mp4", title: "CRM Demo Video" },
      { type: "image" as const, url: "/screenshots/crm-pipeline.jpg", title: "Sales Pipeline" }
    ]
  },
  {
    id: "dashboards",
    name: "Analytics Dashboards",
    tagline: "Data-Driven Decisions",
    description: "Interactive dashboards that transform your data into actionable insights. Real-time visualization of KPIs, trends, and business metrics.",
    icon: BarChart3,
    color: "from-brand-red to-red-600",
    features: [
      "Real-time Data Visualization",
      "Custom KPI Tracking",
      "Automated Report Generation",
      "Multi-source Data Integration",
      "Predictive Analytics",
      "Mobile & Desktop Access"
    ],
    stats: [
      { label: "Decision Speed", value: "3x" },
      { label: "Data Accuracy", value: "99%" },
      { label: "Report Time", value: "-80%" }
    ],
    media: [
      { type: "image" as const, url: "/screenshots/dashboard-main.jpg", title: "Analytics Overview" },
      { type: "image" as const, url: "/screenshots/dashboard-reports.jpg", title: "Custom Reports" },
      { type: "video" as const, url: "/videos/dashboard-demo.mp4", title: "Dashboard Demo" }
    ]
  },
  {
    id: "warehouse",
    name: "Warehouse Management",
    tagline: "Smart Inventory Control",
    description: "Optimize your warehouse operations with intelligent inventory management, automated tracking, and seamless logistics coordination.",
    icon: Package,
    color: "from-brand-yellow to-orange-500",
    features: [
      "Barcode & QR Scanning",
      "Automated Stock Alerts",
      "Location Tracking",
      "Order Fulfillment",
      "Shipping Integration",
      "Returns Management"
    ],
    stats: [
      { label: "Accuracy", value: "99.5%" },
      { label: "Picking Speed", value: "+50%" },
      { label: "Space Utilization", value: "+35%" }
    ],
    media: [
      { type: "image" as const, url: "/screenshots/warehouse-inventory.jpg", title: "Inventory View" },
      { type: "video" as const, url: "/videos/warehouse-demo.mp4", title: "Warehouse Demo" }
    ]
  },
  {
    id: "hr",
    name: "HR Management",
    tagline: "People-First Operations",
    description: "Comprehensive HR solution for employee management, payroll, attendance, and performance tracking. Streamline your HR processes.",
    icon: Users,
    color: "from-orange-600 to-brand-red",
    features: [
      "Employee Database",
      "Attendance & Leave Management",
      "Payroll Processing",
      "Performance Reviews",
      "Recruitment Pipeline",
      "Document Management"
    ],
    stats: [
      { label: "HR Time Saved", value: "65%" },
      { label: "Payroll Accuracy", value: "100%" },
      { label: "Employee Satisfaction", value: "+40%" }
    ],
    media: [
      { type: "image" as const, url: "/screenshots/hr-dashboard.jpg", title: "HR Dashboard" },
      { type: "image" as const, url: "/screenshots/hr-attendance.jpg", title: "Attendance Tracking" },
      { type: "video" as const, url: "/videos/hr-demo.mp4", title: "HR System Demo" }
    ]
  },
  {
    id: "real-estate",
    name: "Real Estate ERP",
    tagline: "Property Management Made Easy",
    description: "Complete real estate management solution for property listings, client management, transactions, and documentation.",
    icon: Building2,
    color: "from-brand-orange via-brand-red to-brand-yellow",
    features: [
      "Property Listing Management",
      "Client & Lead Tracking",
      "Transaction Management",
      "Document Automation",
      "Commission Calculation",
      "Market Analytics"
    ],
    stats: [
      { label: "Deal Closure", value: "+45%" },
      { label: "Client Response", value: "2x" },
      { label: "Admin Time", value: "-60%" }
    ],
    media: [
      { type: "image" as const, url: "/screenshots/realestate-listings.jpg", title: "Property Listings" },
      { type: "video" as const, url: "/videos/realestate-demo.mp4", title: "Real Estate Demo" },
      { type: "image" as const, url: "/screenshots/realestate-clients.jpg", title: "Client Management" }
    ]
  }
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-gray-50 via-white to-orange-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(234,88,12,0.08),transparent_50%)]" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-orange/10 to-brand-red/10 rounded-full mb-6 border border-brand-orange/20"
            >
              <TrendingUp className="w-4 h-4 text-brand-orange" />
              <span className="text-sm font-semibold text-gray-700">16+ Specialized Solutions</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              <span className="text-gray-900">Our Software </span>
              <span className="bg-gradient-to-r from-brand-orange via-brand-red to-brand-yellow bg-clip-text text-transparent">
                Products
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Powerful, industry-specific solutions designed to transform your business operations. 
              From manufacturing to real estate, we've got you covered.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Products Showcase */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="space-y-32">
            {products.map((product, index) => (
              <ProductShowcase 
                key={product.id} 
                product={product} 
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-orange via-brand-red to-brand-yellow relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Schedule a personalized demo and see how our solutions can work for you
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nilesh@udhim.com&su=Demo%20Request%20for%20Udhim%20Technology%20Solutions&body=Hi%2C%0A%0AI%20would%20like%20to%20schedule%20a%20demo%20of%20your%20ERP%2C%20CRM%20and%20Dashboard%20solutions.%0A%0APlease%20let%20me%20know%20your%20available%20time%20slots.%0A%0AThank%20you."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-orange font-bold rounded-xl hover:bg-gray-50 transition-all shadow-xl text-lg"
              >
                Book a Demo
              </motion.a>
              
              <motion.a
                href="https://wa.me/918448505889?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20Udhim%20Technology%27s%20ERP%2C%20CRM%20and%20Dashboard%20solutions"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all shadow-xl text-lg"
              >
                WhatsApp Us
              </motion.a>
            </div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </div>
  )
}
