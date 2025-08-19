"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos" as any)).default;

      AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 50,
      })
    }
    initAOS()
  }, [])

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  const services = [
    "Washing Machine Repair",
    "Front Load Service",
    "Top Load Service",
    "All Brand Support",
    "Emergency Service",
    "Doorstep Service",
  ]

  return (
    <footer className="bg-primary-dark text-white relative overflow-hidden mt-16 sm:mt-16 lg:mt-56 border-t-0">


      <svg
        className="absolute top-0 left-0 w-full h-10 sm:h-16"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        shapeRendering="crispEdges" // ← Prevents anti-aliasing artifacts
      >
        {/* White shape - matches your clip-path percentages */}
        <polygon
          points="30,0 70,0 65,75 35,75"
          fill="white"
          vectorEffect="non-scaling-stroke" // ← Optional for sharp edges
        />

        {/* Dark shape - intentionally slightly overlaps (0.1 unit) */}
        <polygon
          points="0,100 30,100 5,0 0,0"
          className="fill-primary-dark" />



      </svg>



      <div className="container mx-auto px-4 pt-25 pb-8 border-t-0" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 group" data-aos="fade-up" data-aos-delay="100">
            <Link href={'/'}>
              <div className="flex items-center space-x-3 transform transition-all duration-300 hover:scale-105">

                <div className="relative overflow-hidden rounded-lg">

                  <Image
                    src="/faiconwhite.png"
                    alt="KM Enterprises Logo"
                    width={40}
                    height={40}
                    className="rounded-lg transition-transform duration-300 hover:rotate-6 hover:scale-110"
                  />
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-lg transition-colors duration-300 group-hover:text-primary-blue">
                    KM Enterprises
                  </h3>
                  <p className="font-inter text-sm text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
                    Repair Service
                  </p>
                </div>

              </div></Link>
            <p className="font-inter text-sm text-gray-300 leading-relaxed transition-all duration-300 hover:text-gray-200 hover:translate-x-1 mt-4">
              Professional washing machine repair and service in Pondicherry. We provide doorstep service for all major
              brands with genuine spare parts.
            </p>
          </div>

          <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
            <h4 className="font-poppins font-semibold text-lg border-b-2 border-primary-blue pb-2 inline-block relative overflow-hidden">
              <span className="relative z-10">Quick Links</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-yellow transition-all duration-500 hover:w-full"></div>
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.name} className="transform transition-all duration-300 hover:translate-x-2">
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-gray-300 hover:text-primary-blue transition-all duration-300 relative group inline-block"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-blue transition-all duration-300 group-hover:w-full"></div>
                    <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1">
                      <svg className="w-3 h-3 text-primary-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
            <h4 className="font-poppins font-semibold text-lg border-b-2 border-primary-blue pb-2 inline-block relative overflow-hidden">
              <span className="relative z-10">Our Services</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-yellow transition-all duration-500 hover:w-full"></div>
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li
                  key={service}
                  className="font-inter text-sm text-gray-300 transition-all duration-300 hover:text-gray-100 hover:translate-x-1 cursor-default relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <div className="w-1 h-1 bg-primary-blue rounded-full"></div>
                  </div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4" data-aos="fade-up" data-aos-delay="400">
            <h4 className="font-poppins font-semibold text-lg border-b-2 border-primary-blue pb-2 inline-block relative overflow-hidden">
              <span className="relative z-10">Contact Us</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-yellow transition-all duration-500 hover:w-full"></div>
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group transition-all duration-300 hover:translate-x-1">
                <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <svg
                    className="w-5 h-5 text-primary-blue transition-colors duration-300 group-hover:text-accent-yellow"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <a
                  href="tel:+919566383338"
                  className="font-inter text-sm text-gray-300 hover:text-primary-blue transition-all duration-300 relative group"
                >
                  <span className="relative z-10">+91 9566383338</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-blue transition-all duration-300 group-hover:w-full"></div>
                </a>
              </div>
              <div className="flex items-center space-x-3 group transition-all duration-300 hover:translate-x-1">
                <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12">
                  <svg
                    className="w-5 h-5 text-primary-blue transition-colors duration-300 group-hover:text-accent-yellow"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <a
                  href="mailto:kmenterprises.online@gmail.com"
                  className="font-inter text-sm text-gray-300 hover:text-primary-blue transition-all duration-300 relative group"
                >
                  <span className="relative z-10">kmenterprises.online@gmail.com</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-blue transition-all duration-300 group-hover:w-full"></div>
                </a>
              </div>
              <div className="flex items-start space-x-3 group transition-all duration-300 hover:translate-x-1">
                <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:bounce">
                  <svg
                    className="w-5 h-5 text-primary-blue mt-0.5 transition-colors duration-300 group-hover:text-accent-yellow"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="font-inter text-sm text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
                  No: 57 D NKS Complex First St,<br /> New Saram Opp to Saram Market,<br /> Pondicherry - 605013.
                </p>
              </div>
            </div>

            <div className="pt-4 group">
              <h5 className="font-poppins font-medium text-sm mb-2 transition-colors duration-300 group-hover:text-primary-blue">
                Working Hours
              </h5>
              <p className="font-inter text-sm text-gray-300 transition-all duration-300 group-hover:text-gray-200 group-hover:translate-x-1">
                Mon - Sun: 8:00 AM - 8:00 PM
              </p>
            </div>
          </div>
        </div>

        <div
          className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <p className="font-inter text-xs text-gray-400 text-center md:text-left transition-all duration-300 hover:text-gray-300 hover:scale-105">
            © {currentYear} KM Enterprises. All rights reserved.
          </p>
          <p className="font-inter text-base text-gray-400 text-center md:text-right transition-all duration-300 hover:text-gray-300">
            Developed by{" "}
            <a
              href="https://orangemegasoftware.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-blue hover:text-accent-yellow transition-all duration-300 relative group inline-block transform hover:scale-110"
            >
              <span className="relative z-10">OrangeMegaSoftware</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-yellow transition-all duration-300 group-hover:w-full"></span>
            </a>
          </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer
