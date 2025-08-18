'use client'
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FloatingButtons from "@/components/common/FloatingButtons"
import { useEffect, useState } from "react";
import Carousel from '@/components/sections/hero'
import Testimonials from "@/components/sections/testimonials";
import Timeline from "@/components/sections/timeline";


export default function HomePage() {


  const slides = [
    { img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1600&q=80", alt: "Technician repairing washer" },
    { img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80", alt: "Washer diagnostics" },
    { img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1600&q=80", alt: "Laundry room setup" },
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);



  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <Carousel />
      {/* About Section */}
      <section className="py-20 bg-soft-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative">
              <img
                src="/service.png"
                alt="Professional technician repairing washing machine"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              {/* Floating KPI Badge */}
              <div className="absolute -top-6 -right-6 bg-accent-yellow text-primary-dark p-4 rounded-xl shadow-lg animate-bounce">
                <div className="text-center">
                  <div className="font-poppins font-bold text-2xl">2.8K+</div>
                  <div className="font-inter text-sm font-medium">Satisfied Clients</div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary-dark">
                Professional Service Center in Pondicherry
              </h2>
              <div className="space-y-4">
                <p className="font-inter text-lg text-steel-gray leading-relaxed">
                  With over 20 years of experience, KM Enterprises is your trusted partner for your home appliances repair
                  and maintenance in Pondicherry. We specialize in all major brands and provide doorstep service with
                  genuine spare parts.
                </p>
                <p className="font-inter text-lg text-steel-gray leading-relaxed">
                  Our certified technicians are trained to handle all types of home appliances issues, from simple
                  repairs to complex technical problems. We ensure quality service with warranty on all repairs.
                </p>
              </div>

              {/* Checkmarks */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Professional Staff",
                  "Accurate Testing",
                  "Quality Control",
                  "Timely Delivery",
                  "All Brands",
                  "Genuine Spares",
                ].map((feature) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="font-inter font-medium text-steel-gray">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary-dark mb-4">Our Services</h2>
            <p className="font-inter text-lg text-steel-gray max-w-2xl mx-auto">
              We provide comprehensive washing machine repair and maintenance services for all major brands in
              Pondicherry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Front Load Washing Machine",
                description: "Expert repair service for front load washing machines of all brands",
                icon: "🔧",
                image:
                  "/front.png",
              },
              {
                title: "Top Load Washing Machine",
                description: "Professional service for top load washing machines with genuine parts",
                icon: "⚙️",
                image:
                  "/top.png",
              },
              {
                title: "Refrigirator",
                description: "Convenient doorstep repair service at your home in Pondicherry",
                icon: "🏠",
                image:
                  "/fridges.png",
              },
              {
                title: "TV",
                description: "Convenient doorstep repair service at your home in Pondicherry",
                icon: "🏠",
                image:
                  "/tvs.png",
              },
              {
                title: "Air Conditioner",
                description: "Convenient doorstep repair service at your home in Pondicherry",
                icon: "🏠",
                image:
                  "/acs.png",
              },
              {
                title: "Microwave oven",
                description: "Convenient doorstep repair service at your home in Pondicherry",
                icon: "🏠",
                image:
                  "/owens.png",
              },
              {
                title: "Fully Automatic Service",
                description: "Complete repair and maintenance for fully automatic washing machines",
                icon: "🔩",
                image:
                  "/service.png",
              },
              {
                title: "All Brand Support",
                description: "IFB, LG, Samsung, Whirlpool, Bosch, Godrej - we service them all",
                icon: "🏷️",
                image:
                  "brand.png",
              },
              {
                title: "Emergency Service",
                description: "24/7 emergency repair service for urgent washing machine issues",
                icon: "🚨",
                image:
                  "/always.png",
              },
              {
                title: "Doorstep Service",
                description: "Convenient doorstep repair service at your home in Pondicherry",
                icon: "🏠",
                image:
                  "/doorstep.png",
              },

            ].map((service, index) => (
              <div
                key={service.title}
                className="group bg-deep-teal rounded-2xl overflow-hidden shadow-lg hover-lift cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/80 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6 text-white">
                  <h3 className="font-poppins font-semibold text-xl mb-3 group-hover:text-accent-yellow transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-inter text-sm text-white/80 leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center text-primary-blue group-hover:text-accent-yellow transition-colors duration-300">
                    <span className="font-inter font-medium text-sm">Learn More</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-soft-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary-dark mb-4">
              We Service All Over Pondicherry
            </h2>
            <p className="font-inter text-lg text-steel-gray max-w-2xl mx-auto">
              Professional washing machine repair service available across all areas of Pondicherry with same-day
              service guarantee.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map/Image */}
            <div className="relative">
              <img
                src={'/maps.png'}
                alt="Pondicherry service areas map"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-primary-blue/20 rounded-2xl flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl text-center">
                  <h3 className="font-poppins font-bold text-2xl text-primary-dark mb-2">Same Day Service</h3>
                  <p className="font-inter text-steel-gray">Available in all areas</p>
                </div>
              </div>
            </div>

            {/* Locality Chips */}
            <div className="space-y-6">
              <h3 className="font-poppins font-bold text-2xl text-primary-dark">Service Areas</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "White Town",
                  "French Quarter",
                  "Bharathi Nagar",
                  "Reddiarpalayam",
                  "Muthialpet",
                  "Lawspet",
                  "Nellithope",
                  "Ariyankuppam",
                  "Villianur",
                  "Bahour",
                  "Embalam",
                  "Kirumampakkam",
                  "Mudaliarpet",
                  "Thattanchavady",
                  "Orleanpet",
                ].map((area) => (
                  <span
                    key={area}
                    className="font-poppins font-medium text-sm px-4 py-2 bg-white border-2 border-primary-blue text-primary-dark rounded-full hover:bg-primary-blue hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {area}
                  </span>
                ))}
              </div>

              {/* Availability Check */}
              {/* <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-primary-blue/20">
                <h4 className="font-poppins font-semibold text-lg text-primary-dark mb-4">
                  Check Service Availability
                </h4>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Enter your pincode"
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none font-inter"
                  />
                  <button className="px-6 py-3 bg-primary-blue text-white font-poppins font-semibold rounded-lg hover:bg-primary-blue/90 transition-colors duration-300">
                    Check
                  </button>
                </div>
                <div className="mt-3 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-accent-yellow rounded-full animate-pulse"></div>
                  <span className="font-inter text-sm text-steel-gray">Same-day service available</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}

      <Timeline />
      {/* Testimonials Section */}
      <Testimonials />
      <div className="relative">

        <svg
          className="absolute top-0 left-0 w-full h-10 sm:h-16"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          shapeRendering="crispEdges" // ← Prevents anti-aliasing artifacts
        >
          {/* White shape - matches your clip-path percentages */}
          <polygon
            points="30,0 69,0 63,100 37,100"
            vectorEffect="non-scaling-stroke" // ← Optional for sharp edges
            className="fill-deep-teal"

          />

          {/* Dark shape - intentionally slightly overlaps (0.1 unit) */}
          <polygon
            points="0,100 34,100 25,0 0,0" // ← 35.1 overlaps with white's 16
            fill="white"
          />

        </svg>


      </div>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
