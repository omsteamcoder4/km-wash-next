'use client'
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FloatingButtons from "@/components/common/FloatingButtons"
import { useEffect, useState } from "react";
import Carousel from '@/components/sections/hero'
import Testimonials from "@/components/sections/testimonials";
import Timeline from "@/components/sections/timeline";
import Disclaimer from "@/components/sections/disclaimer";
import AboutSection from "@/components/sections/about";
import ServiceSection from "@/components/sections/service";
import Form from "@/components/sections/form";


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

      <Form />
      {/* Hero Section */}
      <Carousel />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServiceSection />

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
                src={'/maps.webp'}
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
                    className="font-poppins font-medium text-sm px-4 py-2 bg-white border-2 border-primary-blue text-primary-dark rounded-full hover:bg-primary-blue hover:text-white transition-colors duration-300 cursor-default"
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




      </div>
      <Disclaimer />
      <Footer />
      <FloatingButtons />
    </div>
  )
}
