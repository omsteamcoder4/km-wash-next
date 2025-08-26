'use client'
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FloatingButtons from "@/components/common/FloatingButtons"
import PageHeader from "@/components/common/PageHeader"
import { User } from 'lucide-react'
import { useState, useEffect } from "react"



export default function AboutPage() {

  const [isScrolled, setIsScrolled] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <div className="min-h-screen">
      <Header />

      <PageHeader
        title="About KM Enterprises"
        subtitle="20+ years of excellence in repair service across Pondicherry"
        backgroundImage="/user1.png"
      />

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary-dark">
                Your Trusted Repair Service Partner
              </h2>
              <div className="space-y-4">
                <p className="font-inter text-lg text-steel-gray leading-relaxed">
                   KM Enterprises has been the leading repair service provider in
                  Pondicherry for over two decades. What started as a small repair shop has grown into the most trusted
                  name for appliance repair in the region.
                </p>
                <p className="font-inter text-lg text-steel-gray leading-relaxed">
                  Our commitment to quality service, genuine spare parts, and customer satisfaction has earned us the
                  trust of over 2,800 families across Pondicherry. We specialize in all major brands and provide
                  doorstep service with same-day repair guarantee.
                </p>
                <p className="font-inter text-lg text-steel-gray leading-relaxed">
                  With certified technicians and state-of-the-art diagnostic tools, we ensure your services gets
                  the best care possible. Our transparent pricing and warranty on all repairs make us the preferred
                  choice for service in Pondicherry.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/aboutimg.png"
                alt="KM Enterprises workshop"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-blue text-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="font-poppins font-bold text-2xl">20+</div>
                  <div className="font-inter text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-soft-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary-dark mb-4">Why Choose Us?</h2>
            <p className="font-inter text-lg text-steel-gray max-w-2xl mx-auto">
              We stand out from the competition with our commitment to quality, reliability, and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Technicians",
                description:
                  "Our certified technicians are trained by major brands and have extensive experience in repair.",
                icon: "👨‍🔧",
                image:
                  "/technicians.png",
              },
              {
                title: "Genuine Spare Parts",
                description:
                  "We use only genuine spare parts from dealers to ensure long-lasting repairs and optimal performance.",
                icon: "⚙️",
                image:
                  "/spare.png",
              },
              {
                title: "Same Day Service",
                description:
                  "Most repairs are completed the same day. We understand the importance of your Home Appliances in daily life.",
                icon: "⚡",
                image:
                  "/sameday.png",
              },
              {
                title: "Doorstep Service",
                description:
                  "Convenient doorstep service across all areas of Pondicherry. No need to transport your heavy appliance.",
                icon: "🏠",
                image:
                  "/doorstep.png",
              },
              {
                title: "Transparent Pricing",
                description:
                  "No hidden charges. We provide upfront pricing with detailed breakdown of service charges and parts cost.",
                icon: "💰",
                image:
                  "/charge.png",
              },
              {
                title: "Service Warranty",
                description:
                  "All our repairs come with warranty. We stand behind our work and ensure your complete satisfaction.",
                icon: "🛡️",
                image:
                  "/warranty.png",
              },
            ].map((feature, index) => (
              <div key={feature.title} className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift">
                <div className="relative h-55 overflow-hidden">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg">
                    {feature.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-poppins font-semibold text-xl text-primary-dark mb-3">{feature.title}</h3>
                  <p className="font-inter text-steel-gray leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary-dark to-deep-teal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">Our Achievements</h2>
            <p className="font-inter text-lg text-white/90 max-w-2xl mx-auto">
              Numbers that speak for our commitment to excellence and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "2800+", label: "Happy Customers", icon: "😊" },
              { number: "20+", label: "Years Experience", icon: "📅" },
              { number: "15+", label: "Brands Supported", icon: "🏷️" },
              { number: "98%", label: "Success Rate", icon: "✅" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="w-20 h-20 bg-accent-yellow rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="font-poppins font-bold text-4xl text-white mb-2">{stat.number}</div>
                <div className="font-inter text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary-dark mb-4">Our Expert Team</h2>
            <p className="font-inter text-lg text-steel-gray max-w-2xl mx-auto">
              Meet our certified technicians who bring years of experience and expertise to every repair job.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Name 1",
                role: "Senior Technician",
                experience: "15+ Years",
                specialization: "Front Load Specialist",
                image: User,
              },
              {
                name: "Name 2",
                role: "Lead Technician",
                experience: "12+ Years",
                specialization: "All Brands Expert",
                image: User,
              },
              {
                name: "Name 3",
                role: "Service Manager",
                experience: "18+ Years",
                specialization: "Quality Control",
                image: User,
              },
            ].map((member) => {
              const IconImage = member.image; // component reference
              return (
                <div key={member.name} className="bg-soft-white rounded-2xl p-6 text-center hover-lift">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    {/* Render the member's icon/image component */}
                    <IconImage className="h-full w-full" aria-hidden="true" />

                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent-yellow rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-dark" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="font-poppins font-bold text-xl text-primary-dark mb-2">{member.name}</h3>
                  <p className="font-inter font-medium text-primary-blue mb-1">{member.role}</p>
                  <p className="font-inter text-sm text-steel-gray mb-2">{member.experience}</p>
                  <div className="inline-block bg-primary-blue/10 text-primary-blue px-3 py-1 rounded-full font-inter text-sm">
                    {member.specialization}
                  </div>
                </div>
              );
            })}
          </div>


        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
            Ready to Get Your Appliances Fixed?
          </h2>
          <p className="font-inter text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for professional repair service in Pondicherry. Same-day service available!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919566383338"
              className="inline-flex items-center justify-center space-x-2 font-poppins font-semibold text-lg px-8 py-4 bg-white text-primary-blue rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Call +91 9566383338</span>
            </a>
            <a
              href="https://wa.me/919566383338?text=Hi! I need repair service."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 font-poppins font-semibold text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-blue rounded-xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
        <div className={`${isScrolled ? "w-[80%] bg-green-300" : "w-[100%] bg-red-400"} transition`}></div>

      </section>
      <div className="relative">

        {/* <svg
          className="absolute top-0 left-0 w-full h-10 sm:h-16"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          shapeRendering="crispEdges" 
        >
          <polygon
            points="30,0 69,0 63,100 37,100"
            vectorEffect="non-scaling-stroke" 
            className="fill-blue-400"

          />

          <polygon
            points="0,100 34,100 25,0 0,0" 
            fill="white"
          />

        </svg> */}
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
