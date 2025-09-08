"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    const cur = (pathname || "/").replace(/\/+$/, "") || "/";
    const tgt = href.replace(/\/+$/, "") || "/";
    if (tgt === "/") return cur === "/";
    return cur === tgt || cur.startsWith(`${tgt}/`);
  };

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false)
    if (pathname !== href) {
      router.push(href)
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 100)
    } else if (href === "/") {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (pathname !== "/") {
      router.push("/")
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/85 backdrop-blur-lg border-b border-gray-200" : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer"
          >
            {isScrolled ? (
              <Image
                src="/faicon.webp"
                alt="KM Enterprises Logo"
                width={50}
                height={50}
                className="rounded-lg"
              />
            ) : (
              <Image
                src="/faiconwhite.webp"
                alt="KM Enterprises Logo"
                width={50}
                height={50}
                className="rounded-lg"
              />
            )}

            <div className="flex flex-col items-start leading-tight">
              <span
                className={`block font-poppins font-bold text-xl ${isScrolled ? "text-blue-700" : "text-white"
                  }`}
              >
                K M Enterprises
              </span>

              <span
                className={`block font-inter text-sm ${isScrolled ? "text-steel-gray" : "text-white/80"
                  }`}
              >
                Repair Services
              </span>
            </div>

          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`font-poppins font-medium text-sm tracking-wide transition-all duration-300 px-3 py-2 rounded-lg cursor-pointer ${isActive(item.href)
                  ? "bg-blue-400 text-white"
                  : isScrolled
                    ? "text-primary-dark hover:text-primary-blue hover:bg-primary-blue/10"
                    : "text-white hover:text-accent-yellow"
                  }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+919566383338"
              className={`font-poppins font-semibold text-sm px-4 py-2 rounded-lg border-2 transition-all duration-300 cursor-pointer ${isScrolled
                ? "border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
                : "border-white text-white hover:bg-white hover:text-primary-dark"
                }`}
            >
              Call Now
            </a>
            {/* <button
              onClick={() => handleNavigation("/contact")}
              className={`font-poppins font-semibold text-sm px-6 py-2 bg-primary-blue rounded-lg hover:bg-primary-blue/90 transition-all duration-300 btn-glow cursor-pointer ${isScrolled ? "text-black" : "text-white"
                }`}
            >
              Book Service
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors cursor-pointer ${isScrolled ? "text-primary-dark" : "text-white"}`}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-container md:hidden mt-4 p-4 bg-white rounded-lg shadow-lg border animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`font-poppins font-medium text-sm px-3 py-2 rounded-lg transition-colors text-left cursor-pointer ${isActive(item.href)
                    ? "bg-blue-400 text-white"
                    : "text-primary-dark hover:bg-primary-blue/10 hover:text-primary-blue"
                    }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-3 border-t">
                <a
                  href="tel:+919566383338"
                  className="font-poppins font-semibold text-sm px-4 py-2 text-center border-2 border-primary-blue text-primary-blue rounded-lg hover:bg-primary-blue hover:text-white transition-colors cursor-pointer"
                >
                  Call Now
                </a>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="font-poppins font-semibold text-sm px-6 py-2 text-center bg-primary-blue text-white rounded-lg hover:bg-primary-blue/90 transition-colors cursor-pointer"
                >
                  Book Service
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
