"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    const testimonials = [
        {
            name: "Priya Sharma",
            location: "Homemaker, White Town",
            review: "Excellent service! My LG washing machine was not working for weeks. KM Enterprises fixed it the same day with genuine parts. Very professional and affordable service.",
            rating: 5,
            image: "/user1.png"
        },
        {
            name: "Rajesh Kumar",
            location: "Bharathi Nagar",
            review: "Quick and reliable service. Fixed my Samsung washing machine in 2 hours. The technician was very knowledgeable and explained everything clearly.",
            rating: 5,
            image: "/user2.png"
        },
        {
            name: "Meera Devi",
            location: "French Quarter",
            review: "Professional technicians with genuine spare parts. They arrived on time and completed the repair quickly. Highly recommended! Will definitely use them again.",
            rating: 5,
            image: "/fuser.png"
        }
    ]

    // Auto-rotate testimonials every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [testimonials.length])

    return (
        <section className="py-20 bg-gradient-to-br from-primary-dark to-deep-teal">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Testimonial Card */}
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={`testimonial-${currentTestimonial}`}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
                                {/* Quote Icon */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                    className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mb-6"
                                >
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                    </svg>
                                </motion.div>

                                {/* Review */}
                                <motion.blockquote
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.3 }}
                                    className="font-poppins font-semibold text-xl text-primary-dark mb-6 italic leading-relaxed"
                                >
                                    "{testimonials[currentTestimonial].review}"
                                </motion.blockquote>

                                {/* Stars */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.4 }}
                                    className="flex text-accent-yellow mb-4"
                                >
                                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                        <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </motion.div>

                                {/* Customer Info */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.5 }}
                                >
                                    <div className="font-poppins font-bold text-lg text-primary-blue">
                                        {testimonials[currentTestimonial].name}
                                    </div>
                                    <div className="font-inter text-sm text-steel-gray">
                                        {testimonials[currentTestimonial].location}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Background decoration */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                className="absolute -top-4 -right-4 w-24 h-24 bg-accent-yellow/20 rounded-full blur-2xl"
                            ></motion.div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Right - Image */}
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={`image-${currentTestimonial}`}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="relative rounded-2xl overflow-hidden h-[420px] md:h-[520px] lg:h-[560px]"
                        >

                            <img
                                src={testimonials[currentTestimonial].image}
                                alt={`Happy customer ${testimonials[currentTestimonial].name}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent rounded-2xl"></div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Carousel Controls */}
                <div className="flex justify-center mt-12 space-x-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === index ? 'bg-accent-yellow w-8' : 'bg-white/30'}`}
                            aria-label={`View testimonial from ${testimonials[index].name}`}
                        />
                    ))}
                </div>

                {/* Additional Reviews (Static) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16 grid md:grid-cols-3 gap-8"
                >
                    {[
                        {
                            name: "Arun Prakash",
                            location: "Lawspet",
                            review: "Best washing machine repair service in Pondicherry. Fair pricing and quality work. The technician was very professional.",
                            rating: 5,
                        },
                        {
                            name: "Sangeetha R.",
                            location: "Muthialpet",
                            review: "Quick response and excellent service. Fixed my IFB washing machine that others couldn't. Very satisfied with their work.",
                            rating: 5,
                        },
                        {
                            name: "Vijay Anand",
                            location: "Reddiarpalayam",
                            review: "Reliable and honest service. They diagnosed the issue correctly and didn't try to sell unnecessary parts. Will recommend to others.",
                            rating: 5,
                        },
                    ].map((review, index) => (
                        <motion.div
                            key={review.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white hover:bg-white/20 transition-colors duration-300"
                        >
                            <div className="flex text-accent-yellow mb-3">
                                {[...Array(review.rating)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="font-inter text-sm text-white/90 mb-4 leading-relaxed">"{review.review}"</p>
                            <div>
                                <div className="font-poppins font-semibold text-sm">{review.name}</div>
                                <div className="font-inter text-xs text-white/70">{review.location}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials