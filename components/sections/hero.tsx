"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      title: "Washing Machine",
      subtitle: "Repair & Service",
      location: "in Pondicherry",
      description: "Professional washing machine repair service for all major brands. Expert technicians, genuine spare parts, and same-day doorstep service in Pondicherry.",
      usps: ["Doorstep Service", "All Brands", "5⭐ Rated"],
      image: "/WM.webp",
      stats: "2800+ Repairs Done"
    },
    {
      title: "Refrigerator",
      subtitle: "Repair & Maintenance",
      location: "in Pondicherry",
      description: "Expert refrigerator repair services with same-day solutions. We handle all cooling issues with professional diagnosis and quality parts.",
      usps: ["Gas Refill", "Compressor Repair", "Warranty Included"],
      image: "/FRIDGE.webp",
      stats: "1800+ Repairs Done"
    },
    {
      title: "Air Conditioner",
      subtitle: "Installation & Service",
      location: "in Pondicherry",
      description: "Complete AC solutions including installation, servicing, and repairs for all types of air conditioners with guaranteed satisfaction.",
      usps: ["Free Installation", "Annual Maintenance", "24/7 Support"],
      image: "/AC.webp",
      stats: "3200+ Installations"
    },
    {
      title: "Televisions TV",
      subtitle: "Installation & Service",
      location: "in Pondicherry",
      description: "Complete TV including installation, servicing, and repairs for all types of TVs with guaranteed satisfaction.",
      usps: ["Free Installation", "Annual Maintenance", "24/7 Support"],
      image: "/TV.webp",
      stats: "3000+ Installations"
    },{
      title: "Microwave Oven",
      subtitle: "Installation & Service",
      location: "in Pondicherry",
      description: "Complete Microwave Oven solutions including installation, servicing, and repairs for all types of Microwave Ovens with guaranteed satisfaction.",
      usps: ["Free Installation", "Annual Maintenance", "24/7 Support"],
      image: "/owen.webp",
      stats: "3200+ Installations"
    },
  ]

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 via-blue-500 to-blue-700 overflow-hidden">
      {/* Background Image */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url(/herobg.webp)",
        }}
      ></div> */}

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-deep-teal/60"></div> */}

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary-blue/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent-yellow/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <AnimatePresence mode='wait'>
            <motion.div
              key={`left-${currentSlide}`}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.7 }}
              className="text-white space-y-8"
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center space-x-2 bg-accent-yellow/20 backdrop-blur-sm px-4 py-2 rounded-full animate-in fade-in-0 slide-in-from-left-4 duration-700 mt-5">
                <span className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse"></span>
                <span className="font-poppins font-semibold text-sm uppercase tracking-wider text-accent-yellow">
                  Pondicherry • Same-Day Service
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                {slides[currentSlide].title}
                <span className="text-primary-blue"> {slides[currentSlide].subtitle}</span>
                <br />
                <span className="text-accent-yellow">{slides[currentSlide].location}</span>
              </h1>

              {/* USPs */}
              <div className="flex flex-wrap gap-4">
                {slides[currentSlide].usps.map((usp, index) => (
                  <motion.div
                    key={usp}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
                  >
                    <svg className="w-5 h-5 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-inter font-medium text-sm">{usp}</span>
                  </motion.div>
                ))}
              </div>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="font-inter text-lg text-white/90 leading-relaxed max-w-xl"
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  href="tel:+919566383338"
                  className="inline-flex items-center justify-center space-x-2 font-poppins font-semibold text-lg px-8 py-4 bg-primary-blue hover:bg-primary-blue/90 text-white rounded-xl transition-all duration-300 btn-glow hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>Call Now</span>
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  href="https://wa.me/919566383338?text=Hi! I need service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 font-poppins font-semibold text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-dark rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  <span>WhatsApp</span>
                </motion.a>
              </div>

              {/* Trust Indicators */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center space-x-6 pt-4"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex text-accent-yellow">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-inter text-sm text-white/80">2800+ Happy Customers</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <div className="font-poppins font-semibold text-sm bg-accent-yellow text-primary-dark px-3 py-1 rounded-full">
                  20+ Years Experience
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Right Content - Image */}
          <AnimatePresence mode='wait'>
            <motion.div
              key={`right-${currentSlide}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src={slides[currentSlide].image}
                  alt={`Professional ${slides[currentSlide].title.toLowerCase()} technician`}
                  className="w-full h-64 sm:64 lg:h-125 rounded-2xl shadow-2xl"
                />
                {/* Floating Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -top-4 -right-4 bg-accent-yellow text-primary-dark font-poppins font-bold text-sm px-4 py-2 rounded-full shadow-lg float-animation"
                >
                  Same Day Service
                </motion.div>
                {/* Stats Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg"
                >
                  <div className="text-center">
                    <div className="font-poppins font-bold text-2xl text-primary-dark">
                      {slides[currentSlide].stats.split('+')[0]}+
                    </div>
                    <div className="font-inter text-sm text-steel-gray">
                      {slides[currentSlide].stats.split('+')[1]}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-accent-yellow w-6' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Carousel