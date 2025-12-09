import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Udhim Technology | Global ERP & Factory Automation Solutions',
  description: 'Udhim Technology Pvt. Ltd. - Enterprise Resource Planning and Factory Automation solutions for Plywood, Veneer, Timber, Retail, Warehouse, HR, Real Estate & Compliance. Deployed across India, Africa, Bhutan, Colombia & Europe.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
