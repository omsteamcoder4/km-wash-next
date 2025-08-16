import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "KM Enterprises - Washing Machine Repair Service in Pondicherry",
  description:
    "Professional washing machine repair and service in Pondicherry. All brands supported - IFB, LG, Samsung, Whirlpool, Bosch, Godrej. Same-day doorstep service.",
  keywords:
    "washing machine repair Pondicherry, washing machine service Pondicherry, appliance repair, doorstep service",
    generator: 'v0.app',
    icons:{
      icon:'/faicon.png'
    }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} antialiased`}>
      <body className="font-inter">{children}</body>
    </html>
  )
}
