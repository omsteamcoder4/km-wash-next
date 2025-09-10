import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FloatingButtons from "@/components/common/FloatingButtons"
import PageHeader from "@/components/common/PageHeader"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <PageHeader
        title="Our Services"
        subtitle="Comprehensive repair and maintenance services for all major brands in Pondicherry"
        backgroundImage="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />


      {/* Brands We Service */}
      <section className="py-20 bg-soft-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary-dark mb-4">Brands We Service</h2>
            <p className="font-inter text-lg text-steel-gray max-w-2xl mx-auto">
              We are service providers for all major brands with certified technicians and
              genuine spare parts.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { name: "IFB", description: "Front Load Specialist" },
              { name: "LG", description: "All Models Supported" },
              { name: "Samsung", description: "Latest Technology" },
              { name: "Whirlpool", description: "Top & Front Load" },
              { name: "Bosch", description: "Premium Service" },
              { name: "Godrej", description: "Semi & Fully Auto" },
              { name: "Haier", description: "All Variants" },
              { name: "Panasonic", description: "Expert Care" },
              { name: "Videocon", description: "Reliable Service" },
              { name: "Onida", description: "Quality Repair" },
            ].map((brand, index) => (
              <div
                key={brand.name}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover-lift cursor-pointer group"
              >
                <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                  <span className="font-poppins font-bold text-xl text-primary-blue group-hover:text-white">
                    {brand.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-poppins font-bold text-lg text-primary-dark mb-2">{brand.name}</h3>
                <p className="font-inter text-sm text-steel-gray">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary-dark mb-4">Our Service Process</h2>
            <p className="font-inter text-lg text-steel-gray max-w-2xl mx-auto">
              Simple and transparent process to get your appliances repaired quickly and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Book Service",
                description: "Call us or WhatsApp to book your repair service",
                icon: "📞",
              },
              {
                step: "02",
                title: "Diagnosis",
                description: "Our expert technician will diagnose the issue and provide cost estimate",
                icon: "🔍",
              },
              {
                step: "03",
                title: "Repair",
                description: "Professional repair with genuine spare parts and quality workmanship",
                icon: "🔧",
              },
              {
                step: "04",
                title: "Testing",
                description: "Thorough testing to ensure your appliances works perfectly",
                icon: "✅",
              },
            ].map((process, index) => (
              <div key={process.step} className="text-center relative">
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-primary-blue/20 transform translate-x-4"></div>
                )}

                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-blue to-deep-teal rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-lg">
                    {process.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-yellow rounded-full flex items-center justify-center font-poppins font-bold text-sm text-primary-dark">
                    {process.step}
                  </div>
                </div>

                <h3 className="font-poppins font-bold text-xl text-primary-dark mb-3">{process.title}</h3>
                <p className="font-inter text-steel-gray leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gradient-to-br from-primary-dark to-deep-teal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">Service Coverage</h2>
            <p className="font-inter text-lg text-white/90 max-w-2xl mx-auto">
              We provide doorstep repair service across all areas of Pondicherry with same-day service
              guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            ].map((area, index) => (
              <div
                key={area}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-poppins font-medium">{area}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-accent-yellow text-primary-dark px-6 py-3 rounded-full font-poppins font-semibold">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Same Day Service Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
            Need Repair Service?
          </h2>
          <p className="font-inter text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact KM Enterprises today for professional, reliable, and affordable repair service in
            Pondicherry.
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
