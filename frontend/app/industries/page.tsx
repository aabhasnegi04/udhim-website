"use client"

import { Container } from "@/components/ui"
import { Navbar, Footer } from "@/components/layout"
import { ContactForm } from "@/components/sections"
import { IndustryHero, IndustryCard } from "@/components/industries"
import { 
  Factory, 
  Trees, 
  ShoppingBag, 
  Package, 
  Users, 
  Building2,
  Warehouse,
  Hammer
} from "lucide-react"

const industries = [
  {
    icon: Factory,
    title: "Manufacturing & Factory",
    description: "Complete automation for manufacturing operations with real-time tracking, quality control, and production optimization.",
    features: [
      "Production planning & scheduling",
      "Real-time machine monitoring",
      "Quality control management",
      "Inventory & supply chain",
      "Cost analysis & reporting"
    ],
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Trees,
    title: "Plywood & Veneer",
    description: "Specialized ERP for plywood and veneer manufacturing with QR-based quality tracking and inventory management.",
    features: [
      "QR code quality tracking",
      "Grade-wise inventory",
      "Production batch tracking",
      "Wastage management",
      "Sales & distribution"
    ],
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: Hammer,
    title: "Timber & Wood Processing",
    description: "End-to-end solution for timber processing with log tracking, cutting optimization, and inventory control.",
    features: [
      "Log tracking & grading",
      "Cutting optimization",
      "Drying process management",
      "Stock management",
      "Customer order tracking"
    ],
    color: "from-green-500 to-green-600"
  },
  {
    icon: ShoppingBag,
    title: "Retail & Wholesale",
    description: "Modern POS and inventory management for retail operations with multi-location support and customer management.",
    features: [
      "Point of Sale (POS)",
      "Multi-store management",
      "Customer loyalty programs",
      "Inventory synchronization",
      "Sales analytics"
    ],
    color: "from-red-500 to-red-600"
  },
  {
    icon: Package,
    title: "Warehouse & Logistics",
    description: "Smart warehouse operations with barcode scanning, automated inventory management, and order fulfillment.",
    features: [
      "Barcode & QR scanning",
      "Location tracking",
      "Order fulfillment",
      "Shipping integration",
      "Returns management"
    ],
    color: "from-yellow-500 to-yellow-600"
  },
  {
    icon: Warehouse,
    title: "Distribution & Supply Chain",
    description: "Streamline your distribution network with route optimization, fleet management, and delivery tracking.",
    features: [
      "Route optimization",
      "Fleet management",
      "Delivery tracking",
      "Vendor management",
      "Purchase orders"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Users,
    title: "HR & Workforce",
    description: "Complete workforce management with attendance tracking, payroll automation, and performance management.",
    features: [
      "Attendance & leave tracking",
      "Payroll processing",
      "Performance reviews",
      "Recruitment pipeline",
      "Employee self-service"
    ],
    color: "from-orange-400 to-orange-500"
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Property management and sales tracking with client management, document automation, and commission calculation.",
    features: [
      "Property listings",
      "Client & lead tracking",
      "Transaction management",
      "Document automation",
      "Commission calculation"
    ],
    color: "from-red-400 to-red-500"
  },
]

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <IndustryHero />

      {/* Industries Grid */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
            {industries.map((industry, index) => (
              <IndustryCard
                key={index}
                {...industry}
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
          <div className="text-center max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Don't See Your Industry?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              We create custom solutions tailored to your specific business needs. 
              Let's discuss how we can help transform your operations.
            </p>
          </div>
        </Container>
      </section>

      <ContactForm />
      
      <Footer />
    </div>
  )
}
