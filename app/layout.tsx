import type React from "react"
import type { Metadata } from "next"
import {  Inter } from "next/font/google"
import Script from "next/script"                
import "./globals.css"
import { poppins } from "./fonts";



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
    "washing machine repair Pondicherry, washing machine service Pondicherry, appliance repair, doorstep service, Washing machine service in Pondicherry, Washing machine repair in Pondicherry, Washing machine service center Pondicherry, Washing machine repair service Pondicherry, All brand washing machine service in Pondicherry, IFB washing machine service in Pondicherry, LG washing machine repair in Pondicherry, Samsung washing machine service in Pondicherry, Whirlpool washing machine repair in Pondicherry, Bosch washing machine service in Pondicherry, Siemens washing machine service in Pondicherry, Godrej washing machine service in Pondicherry, Haier washing machine service in Pondicherry, Panasonic washing machine service in Pondicherry, Front load washing machine service in Pondicherry, Top load washing machine repair in Pondicherry, Fully automatic washing machine service Pondicherry, Doorstep washing machine repair Pondicherry, Emergency washing machine service in Pondicherry, Washing machine repair near me Pondicherry, Best washing machine service in Pondicherry, Affordable washing machine repair in Pondicherry, Same day washing machine service Pondicherry, Washing machine technician in Pondicherry,Fridge service in Pondicherry, Fridge repair in Pondicherry, Refrigerator service center Pondicherry, Refrigerator repair service Pondicherry, All brand fridge service in Pondicherry, LG fridge repair in Pondicherry, Samsung refrigerator service in Pondicherry, Whirlpool fridge repair in Pondicherry, Godrej refrigerator service in Pondicherry, Bosch fridge repair in Pondicherry, Single door fridge service in Pondicherry, Double door refrigerator repair in Pondicherry, AC service in Pondicherry, AC repair in Pondicherry, Air conditioner service center Pondicherry, Air conditioner repair service Pondicherry, All brand AC service in Pondicherry, LG AC repair in Pondicherry, Samsung AC service in Pondicherry, Whirlpool AC repair in Pondicherry, Voltas AC service in Pondicherry, Hitachi AC repair in Pondicherry, Split AC service in Pondicherry, Window AC repair in Pondicherry, TV service in Pondicherry, TV repair in Pondicherry, Television service center Pondicherry, Television repair service Pondicherry, All brand TV service in Pondicherry, LG TV repair in Pondicherry, Samsung TV service in Pondicherry, Sony TV repair in Pondicherry, Panasonic TV service in Pondicherry, Micromax TV repair in Pondicherry, LED TV service in Pondicherry, Smart TV repair in Pondicherry, Microwave oven service in Pondicherry, Microwave oven repair in Pondicherry, Oven service center Pondicherry, Oven repair service Pondicherry, All brand microwave service in Pondicherry, LG oven repair in Pondicherry, Samsung microwave service in Pondicherry, Whirlpool oven repair in Pondicherry, IFB microwave service in Pondicherry, Godrej oven repair in Pondicherry, Convection microwave service in Pondicherry, Solo microwave oven repair in Pondicherry",
  generator: "v0.app",
  icons: { icon: "/faicon.webp" },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} antialiased`}>
      <body className="font-inter">
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16672888880"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16672888880');
          `}
        </Script>

        {children}
      </body>
    </html>
  )
}
