"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FloatingButtons from "@/components/common/FloatingButtons"
import PageHeader from "@/components/common/PageHeader"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    brand: "",
    model: "",
    issue: "",
    serviceType: "",
    preferredTime: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Format the message for WhatsApp
    const message = `Hi! I need washing machine repair service.

*Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Address: ${formData.address}

*Service Details:*
Brand: ${formData.brand}
Model: ${formData.model}
Issue: ${formData.issue}
Service Type: ${formData.serviceType}
Preferred Time: ${formData.preferredTime}

Please contact me to schedule the service. Thank you!`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/919566383338?text=${encodedMessage}`

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank")

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      brand: "",
      model: "",
      issue: "",
      serviceType: "",
      preferredTime: "",
    })
  }

  return (
    <div className="min-h-screen">
      <Header />

      <PageHeader
        title="Contact Us"
        subtitle="Get in touch for professional washing machine repair service in Pondicherry"
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-soft-white p-8 rounded-2xl shadow-lg">
              <h2 className="font-poppins font-bold text-2xl md:text-3xl text-primary-dark mb-6">Book Your Service</h2>
              <p className="font-inter text-steel-gray mb-8">
                Fill out the form below and we'll contact you within 30 minutes to schedule your washing machine repair
                service.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-poppins font-medium text-primary-dark mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none font-inter transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-poppins font-medium text-primary-dark mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none font-inter transition-colors duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block font-poppins font-medium text-primary-dark mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none font-inter transition-colors duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block font-poppins font-medium text-primary-dark mb-2">
                    Service Address *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none font-inter transition-colors duration-300 resize-none"
                    placeholder="Enter your complete address in Pondicherry"
                  ></textarea>
                </div>

                {/* Washing Machine Details */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-poppins font-semibold text-lg text-primary-dark mb-4">Washing Machine Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="brand" className="block font-poppins font-medium text-primary-dark mb-2">
                        Brand *
                      </label>
                      <select
                        id="brand"
                        name="brand"
                        value={formData.brand}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none font-inter transition-colors duration-300"
                      >
                        <option value="">Select Brand</option>
                        <option value="IFB">IFB</option>
                        <option value="LG">LG</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Whirlpool">Whirlpool</option>
                        <option value="Bosch">Bosch</option>
                        <option value="Godrej">Godrej</option>
                        <option value="Haier">Haier</option>
                        <option value="Panasonic">Panasonic</option>
                        <option value="Videocon">Videocon</option>
                        <option value="Onida">Onida</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="model" className="block font-poppins font-medium text-primary-dark mb-2">
                        Model Number
                      </label>
                      <input
                        type="text"
                        id="model"
                        name="model"
                        value={formData.model}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none font-inter transition-colors duration-300"
                        placeholder="Enter model number if known"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="serviceType" className="block font-poppins font-medium text-primary-dark mb-2">
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none font-inter transition-colors duration-300"
                  >
                    <option value="">Select Service Type</option>
                    <option value="Repair Service">Repair Service</option>
                    <option value="Annual Maintenance">Annual Maintenance</option>
                    <option value="Installation">Installation</option>
                    <option value="Emergency Service">Emergency Service</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="issue" className="block font-poppins font-medium text-primary-dark mb-2">
                    Describe the Issue *
                  </label>
                  <textarea
                    id="issue"
                    name="issue"
                    value={formData.issue}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none font-inter transition-colors duration-300 resize-none"
                    placeholder="Please describe the problem with your washing machine in detail"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block font-poppins font-medium text-primary-dark mb-2">
                    Preferred Service Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none font-inter transition-colors duration-300"
                  >
                    <option value="">Select Preferred Time</option>
                    <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                    <option value="Anytime">Anytime</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-blue hover:bg-primary-blue/90 text-white font-poppins font-semibold text-lg py-4 rounded-lg transition-all duration-300 hover:scale-105 btn-glow"
                >
                  Send to WhatsApp
                </button>

                <p className="font-inter text-sm text-steel-gray text-center">
                  By submitting this form, you agree to be contacted via WhatsApp for service coordination.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-gradient-to-br from-primary-dark to-deep-teal p-8 rounded-2xl text-white">
                <h3 className="font-poppins font-bold text-2xl mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-lg mb-1">Phone</h4>
                      <a
                        href="tel:+919566383338"
                        className="font-inter text-white/90 hover:text-accent-yellow transition-colors"
                      >
                        +91 9566383338
                      </a>
                      <p className="font-inter text-sm text-white/70 mt-1">Available 8 AM - 8 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-lg mb-1">WhatsApp</h4>
                      <a
                        href="https://wa.me/919566383338"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-inter text-white/90 hover:text-accent-yellow transition-colors"
                      >
                        +91 9566383338
                      </a>
                      <p className="font-inter text-sm text-white/70 mt-1">Quick response guaranteed</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-lg mb-1">Email</h4>
                      <a
                        href="mailto:user@gmail.com"
                        className="font-inter text-white/90 hover:text-accent-yellow transition-colors"
                      >
                        user@gmail.com
                      </a>
                      <p className="font-inter text-sm text-white/70 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-lg mb-1">Service Area</h4>
                      <p className="font-inter text-white/90">All areas of Pondicherry</p>
                      <p className="font-inter text-sm text-white/70 mt-1">Doorstep service available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-primary-blue/20">
                <h3 className="font-poppins font-bold text-xl text-primary-dark mb-6">Working Hours</h3>
                <div className="space-y-3">
                  {[
                    { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM" },
                    { day: "Saturday", hours: "8:00 AM - 8:00 PM" },
                    { day: "Sunday", hours: "8:00 AM - 6:00 PM" },
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-poppins font-medium text-primary-dark">{schedule.day}</span>
                      <span className="font-inter text-steel-gray">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-accent-yellow/10 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-inter text-sm text-primary-dark">
                      Emergency service available 24/7 for urgent repairs
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="tel:+919566383338"
                  className="bg-primary-blue hover:bg-primary-blue/90 text-white p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 btn-glow"
                >
                  <svg className="w-8 h-8 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div className="font-poppins font-semibold">Call Now</div>
                  <div className="font-inter text-sm opacity-90">Instant Support</div>
                </a>
                <a
                  href="https://wa.me/919566383338?text=Hi! I need washing machine repair service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-xl text-center transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-8 h-8 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  <div className="font-poppins font-semibold">WhatsApp</div>
                  <div className="font-inter text-sm opacity-90">Quick Chat</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Map */}
      <section className="py-20 bg-soft-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary-dark mb-4">
              We Serve All Areas of Pondicherry
            </h2>
            <p className="font-inter text-lg text-steel-gray max-w-2xl mx-auto">
              Professional doorstep washing machine repair service available across all localities in Pondicherry with
              same-day service guarantee.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service Areas */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-poppins font-bold text-xl text-primary-dark mb-6">Service Coverage Areas</h3>
                <div className="grid md:grid-cols-3 gap-4">
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
                      className="flex items-center space-x-2 p-3 bg-soft-white rounded-lg hover:bg-primary-blue/10 transition-colors duration-300"
                    >
                      <svg className="w-4 h-4 text-primary-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-inter text-sm text-steel-gray">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                <h3 className="font-poppins font-bold text-xl text-primary-dark mb-6">Location</h3>
                <div className="relative h-64 bg-gradient-to-br from-primary-blue/20 to-deep-teal/20 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Pondicherry map"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg text-center">
                      <svg className="w-8 h-8 text-primary-blue mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="font-poppins font-semibold text-primary-dark">Pondicherry</div>
                      <div className="font-inter text-sm text-steel-gray">Service Area</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-inter text-sm text-steel-gray">Same-day service available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-accent-yellow rounded-full"></div>
                    <span className="font-inter text-sm text-steel-gray">Emergency service 24/7</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary-blue rounded-full"></div>
                    <span className="font-inter text-sm text-steel-gray">Doorstep service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-inter text-lg text-steel-gray max-w-2xl mx-auto">
              Common questions about our washing machine repair service in Pondicherry.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How quickly can you repair my washing machine?",
                answer:
                  "Most repairs are completed the same day. Our technicians carry common spare parts and can diagnose and fix most issues within 2-4 hours of arrival.",
              },
              {
                question: "Do you provide warranty on repairs?",
                answer:
                  "Yes, we provide warranty on all repairs. Parts warranty ranges from 3-6 months depending on the component, and service warranty is 30 days.",
              },
              {
                question: "What brands do you service?",
                answer:
                  "We service all major brands including IFB, LG, Samsung, Whirlpool, Bosch, Godrej, Haier, Panasonic, Videocon, and Onida. Our technicians are trained for all brands.",
              },
              {
                question: "How much do you charge for service?",
                answer:
                  "Service charges vary based on the issue and parts required. We provide transparent pricing with no hidden charges. Call us for a free estimate.",
              },
              {
                question: "Do you provide doorstep service?",
                answer:
                  "Yes, we provide doorstep service across all areas of Pondicherry. No need to transport your heavy washing machine - we come to you.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-soft-white p-6 rounded-xl shadow-lg">
                <h3 className="font-poppins font-semibold text-lg text-primary-dark mb-3">{faq.question}</h3>
                <p className="font-inter text-steel-gray leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  )
}
