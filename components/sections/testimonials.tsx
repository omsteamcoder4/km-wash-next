"use client"

import { useState, useEffect, useMemo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Image from "next/image";




// ---- add: deterministic PRNG + particle generator ----
function makePRNG(seed = 123456789) {
    let s = seed >>> 0;
    return () => {
        s = (1664525 * s + 1013904223) >>> 0; // LCG
        return s / 0xffffffff;
    };
}

function createParticles(count: number, seed = 42) {
    const rand = makePRNG(seed);
    return Array.from({ length: count }, () => {
        const top = rand() * 100;
        const left = rand() * 100;
        const initX = rand() * 100;
        const initY = rand() * 100;
        const animX: [number, number, number] = [rand() * 100, rand() * 100 + 50, rand() * 100];
        const animY: [number, number, number] = [rand() * 100, rand() * 100 + 100, rand() * 100];
        const duration = 15 + rand() * 10;
        return { top, left, initX, initY, animX, animY, duration };
    });
}
// ---- swipe helpers ----
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;
const swipeConfidenceThreshold = 1000;

// ------------------------------------------------------

const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const particles = useMemo(() => createParticles(15, 20240906), []);
    const didDragRef = useRef(false);



    const testimonials = [
        {
            name: "Praveen",
            location: "White Town",
            review: "Excellent service! My LG washing machine was not working for weeks. KM Enterprises fixed it the same day with genuine parts. Very professional and affordable service.",
            rating: 5,
            image: "/u1.webp"
        },
        {
            name: "Rajesh Kumar",
            location: "Bharathi Nagar",
            review: "Quick and reliable service. Fixed my Samsung washing machine in 2 hours. The technician was very knowledgeable and explained everything clearly.",
            rating: 5,
            image: "/u2.webp"
        },
        {
            name: "Meeran",
            location: "French Quarter",
            review: "Professional technicians with genuine spare parts. They arrived on time and completed the repair quickly. Highly recommended! Will definitely use them again.",
            rating: 5,
            image: "/u3.webp"
        }
    ]

    useEffect(() => {
        if (isHovered) return // Pause autoplay when user hovers over carousel

        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [testimonials.length, isHovered])

    return (
        <section className="py-20 bg-gradient-to-br from-primary-dark to-deep-teal relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent-yellow/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-blue/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

            {/* Floating particles */}
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/30 rounded-full"
                    initial={{ x: p.initX, y: p.initY }}
                    animate={{ x: p.animX, y: p.animY }}
                    transition={{ duration: p.duration, repeat: Infinity, repeatType: "reverse" }}
                    style={{ top: `${p.top}%`, left: `${p.left}%` }}
                />
            ))}



            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        What Our <span className="text-accent-yellow">Customers</span> Say
                    </h2>
                    <p className="text-white/80 max-w-2xl mx-auto text-lg">
                        Hear what our satisfied customers have to say about our service
                    </p>

                    {/* Rating summary */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full"
                    >
                        <div className="flex text-accent-yellow mr-3">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-white font-semibold">4.9/5 from 200+ reviews</span>
                    </motion.div>
                </motion.div>

                {/* 3D Stacked Carousel */}
                <div
      className="h-[360px] sm:h-[420px] md:h-[480px] lg:h-[520px] xl:h-[560px]"

                    role="region"
                    aria-roledescription="carousel"
                    aria-label="Customer testimonials"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >

                    <AnimatePresence mode="wait">
                        {testimonials.map((testimonial, index) => {
                            const position = (index - currentTestimonial + testimonials.length) % testimonials.length
                            const isActive = position === 0
                            const isNext = position === 1
                            const isPrev = position === testimonials.length - 1

                            return (
                                <motion.div
                                    key={index}
                                    className={`absolute inset-0 max-w-3xl mx-auto ${isActive ? 'z-10' : 'z-0'}`}
                                    initial={false}
                                    animate={{
                                        x: isActive ? 0 : isNext ? '40%' : isPrev ? '-40%' : Math.sign(position - 1) * 100 + '%',
                                        y: isActive ? 0 : 40,
                                        scale: isActive ? 1 : 0.85,
                                        opacity: isActive ? 1 : (isNext || isPrev) ? 0.7 : 0,
                                        rotateY: isActive ? 0 : isNext ? -15 : 15,
                                    }}
                                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}

                                    /* NEW: let users drag the active slide left/right */
                                    drag={isActive ? "x" : false}
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.2}
                                    onDragStart={() => {
                                        didDragRef.current = true;          // mark as dragging
                                        setIsHovered(true);                 // pause autoplay
                                    }}
                                    onDragEnd={(_, info) => {
                                        const swipe = swipePower(info.offset.x, info.velocity.x);
                                        if (swipe < -swipeConfidenceThreshold) {
                                            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
                                        } else if (swipe > swipeConfidenceThreshold) {
                                            setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                                        }
                                        // resume autoplay and clear drag flag on next tick
                                        setTimeout(() => {
                                            didDragRef.current = false;
                                            setIsHovered(false);
                                        }, 0);
                                    }}


                                    /* NEW: click any card to select it */
                                    onClick={() => {
                                        if (didDragRef.current) return;     // ignore click if it was a drag
                                        setCurrentTestimonial(index);
                                    }}

                                    role="button"
                                    tabIndex={0}
                                    aria-label={`Open testimonial ${index + 1}: ${testimonials[index].name}`}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            setCurrentTestimonial(index);
                                        }
                                        if (isActive) {
                                            if (e.key === 'ArrowRight') {
                                                setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
                                            } else if (e.key === 'ArrowLeft') {
                                                setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                                            }
                                        }
                                    }}
                                    style={{ cursor: isActive ? 'grab' : 'pointer' }}
                                >

                                    <div
                                        className={`
    bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden
    transition-all duration-300
    ${isActive ? 'border-2 border-accent-yellow shadow-lg' : 'border border-white/20 hover:border-accent-yellow/40 hover:shadow-lg'}
    h-auto sm:h-auto md:h-[520px] lg:h-[560px] xl:h-[600px]
  `}
                                    >
                                        <div className="flex flex-col md:flex-row h-full">
                                            {/* Image with decorative frame */}
                                            <div className="md:w-2/5 relative">
                                                {/* Backdrop for wide screens (blurred fill) */}
                                                <div className="absolute inset-0 -z-10 hidden md:block">
                                                    <div className="w-full h-full">
                                                       
                                                        <Image
                                                            src={testimonial.image}
                                                            alt={testimonial.name}
                                                            fill
                                                            priority={isActive}
                                                            sizes="(max-width: 768px) 100vw, 40vw"
                                                            className="object-contain p-2 md:p-3"
                                                        />

                                                    </div>
                                                </div>

                                                {/* Portrait image frame with fixed aspect ratio on small screens */}
                                                <div className="w-full aspect-[9/16] md:aspect-auto md:h-full relative overflow-hidden rounded-none md:rounded-none bg-black/10">
                                                    <div className="absolute inset-0 bg-gradient-to-b from-primary-blue/20 to-transparent z-10 pointer-events-none"></div>

                                                    <motion.div
                                                        initial={{ scale: 1.02 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ duration: 0.4 }}
                                                        className="w-full h-full"
                                                    >
                                                        <img
                                                            src={testimonial.image}
                                                            alt={testimonial.name}
                                                            className="
          w-full h-full
          object-contain md:object-contain
          p-2 md:p-3
        "
                                                            loading="lazy"
                                                        />
                                                    </motion.div>
                                                </div>

                                                {/* Decorative accents (optional) */}
                                                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-4 border-accent-yellow rounded-lg opacity-30 z-0 hidden md:block"></div>
                                                <div className="absolute -top-4 -right-4 w-16 h-16 border-4 border-primary-blue rounded-lg opacity-30 z-0 hidden md:block"></div>

                                                {/* Badge unchanged */}
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                                                    transition={{ delay: 0.5 }}
                                                    className="absolute bottom-4 left-4 bg-accent-yellow text-primary-dark font-semibold px-3 py-1 rounded-lg text-sm z-20"
                                                >
                                                    Verified Customer
                                                </motion.div>
                                            </div>

                                            {/* Content with animated elements */}
                                            <div className="md:w-3/5 p-5 md:p-7 flex flex-col justify-center relative md:overflow-y-auto md:pr-6">
                                                {/* Floating quote icon */}
                                                <motion.div
                                                    initial={{ scale: 0, rotate: -180 }}
                                                    animate={{ scale: 1, rotate: 0 }}
                                                    transition={{ delay: isActive ? 0.3 : 0 }}
                                                    className="absolute top-6 right-6 text-primary-blue/10"
                                                >
                                                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                                    </svg>
                                                </motion.div>

                                                {/* Rating stars with pop-in animation */}
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: isActive ? 1 : 0.5, y: isActive ? 0 : 20 }}
                                                    transition={{ delay: isActive ? 0.4 : 0 }}
                                                    className="flex text-accent-yellow mb-4"
                                                >
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <motion.span
                                                            key={i}
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: 1 }}
                                                            transition={{ delay: isActive ? 0.4 + (i * 0.1) : 0 }}
                                                        >
                                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                        </motion.span>
                                                    ))}
                                                </motion.div>

                                                {/* Review text with typewriter effect */}
                                                <motion.blockquote
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: isActive ? 1 : 0.5 }}
                                                    transition={{ delay: isActive ? 0.5 : 0 }}
                                                    className="text-primary-dark text-lg italic mb-6 leading-relaxed"
                                                >
                                                    "{testimonial.review}"
                                                </motion.blockquote>

                                                {/* Customer info with slide-in effect */}
                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: isActive ? 1 : 0.5, x: isActive ? 0 : -20 }}
                                                    transition={{ delay: isActive ? 0.6 : 0 }}
                                                    className="mt-auto border-t border-gray-100 pt-4"
                                                >
                                                    <h4 className="text-xl font-bold text-primary-blue">{testimonial.name}</h4>
                                                    <p className="text-steel-gray">{testimonial.location}</p>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-center mt-12 space-x-4">
                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-6 h-6 text-white group-hover:text-accent-yellow transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </motion.button>

                    <div className="flex items-center space-x-2">
                        {testimonials.map((_, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === index ? 'bg-accent-yellow w-6' : 'bg-white/30'}`}
                                aria-label={`View testimonial from ${testimonials[index].name}`}
                            />
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-6 h-6 text-white group-hover:text-accent-yellow transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.button>
                </div>

                {/* Additional Reviews - Floating Cards */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-24 grid md:grid-cols-3 gap-6"
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
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-accent-yellow/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group"
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-accent-yellow/10 rounded-bl-full transition-all duration-300 group-hover:bg-accent-yellow/20"></div>

                            <div className="flex text-accent-yellow mb-4 ">
                                {[...Array(review.rating)].map((_, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: index * 0.1 + i * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </motion.span>
                                ))}
                            </div>
                            <blockquote className="text-white/90 mb-6 leading-relaxed relative z-10">"{review.review}"</blockquote>
                            <div className="relative z-10">
                                <div className="font-semibold text-white">{review.name}</div>
                                <div className="text-sm text-white/70">{review.location}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to experience our service?</h3>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(251, 191, 36, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-accent-yellow text-primary-dark font-bold py-4 px-8 rounded-full text-lg inline-flex items-center space-x-2"
                    >
                        <span>Book a Service Now</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials




// "use client"

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

// const Testimonials = () => {
//     const [currentTestimonial, setCurrentTestimonial] = useState(0)

//     const testimonials = [
//         {
//             name: "Priya Sharma",
//             location: "Homemaker, White Town",
//             review: "Excellent service! My LG washing machine was not working for weeks. KM Enterprises fixed it the same day with genuine parts. Very professional and affordable service.",
//             rating: 5,
//             image: "/user1.webp"
//         },
//         {
//             name: "Rajesh Kumar",
//             location: "Bharathi Nagar",
//             review: "Quick and reliable service. Fixed my Samsung washing machine in 2 hours. The technician was very knowledgeable and explained everything clearly.",
//             rating: 5,
//             image: "/user2.webp"
//         },
//         {
//             name: "Meera Devi",
//             location: "French Quarter",
//             review: "Professional technicians with genuine spare parts. They arrived on time and completed the repair quickly. Highly recommended! Will definitely use them again.",
//             rating: 5,
//             image: "/fuser.webp"
//         }
//     ]

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
//         }, 5000)
//         return () => clearInterval(interval)
//     }, [testimonials.length])

//     return (
//         <section className="py-20 bg-gradient-to-br from-primary-dark to-deep-teal relative overflow-hidden">
//             {/* Floating decorative elements */}
//             <div className="absolute top-0 left-0 w-64 h-64 bg-accent-yellow/10 rounded-full blur-3xl"></div>
//             <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-blue/10 rounded-full blur-3xl"></div>
            
//             <div className="container mx-auto px-4 relative z-10">
//                 <motion.div 
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="text-center mb-16"
//                 >
//                     <h2 className="text-4xl font-bold text-white mb-4">Customer Experiences</h2>
//                     <p className="text-white/80 max-w-2xl mx-auto">Hear what our satisfied customers have to say about our service</p>
//                 </motion.div>

//                 {/* 3D Stacked Carousel */}
//                 <div className="relative h-[500px]">
//                     {testimonials.map((testimonial, index) => {
//                         const position = (index - currentTestimonial + testimonials.length) % testimonials.length
//                         const isActive = position === 0
//                         const isNext = position === 1
//                         const isPrev = position === testimonials.length - 1

//                         return (
//                             <motion.div
//                                 key={index}
//                                 className={`absolute inset-0 max-w-3xl mx-auto ${isActive ? 'z-10' : isNext ? 'z-0' : 'z-0'}`}
//                                 initial={false}
//                                 animate={{
//                                     x: isActive ? 0 : isNext ? '40%' : '-40%',
//                                     y: isActive ? 0 : 40,
//                                     scale: isActive ? 1 : 0.9,
//                                     opacity: isActive ? 1 : isNext || isPrev ? 0.7 : 0.4,
//                                     rotateY: isActive ? 0 : isNext ? -15 : 15
//                                 }}
//                                 transition={{ type: 'spring', stiffness: 100, damping: 20 }}
//                             >
//                                 <div className={`bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden h-full transition-all duration-300 ${isActive ? 'border-2 border-accent-yellow' : 'border border-white/20'}`}>
//                                     <div className="flex flex-col md:flex-row h-full">
//                                         {/* Image with decorative frame */}
//                                         <div className="md:w-2/5 relative">
//                                             <div className="absolute inset-0 bg-gradient-to-b from-primary-blue/20 to-transparent"></div>
//                                             <div className="absolute -bottom-4 -left-4 w-24 h-24 border-4 border-accent-yellow rounded-lg opacity-30"></div>
//                                             <div className="absolute -top-4 -right-4 w-16 h-16 border-4 border-primary-blue rounded-lg opacity-30"></div>
//                                             <img
//                                                 src={testimonial.image}
//                                                 alt={testimonial.name}
//                                                 className="w-full h-full object-cover"
//                                                 loading="lazy"
//                                             />
//                                         </div>

//                                         {/* Content with animated elements */}
//                                         <div className="md:w-3/5 p-8 flex flex-col justify-center relative">
//                                             {/* Floating quote icon */}
//                                             <motion.div
//                                                 initial={{ scale: 0 }}
//                                                 animate={{ scale: 1 }}
//                                                 transition={{ delay: isActive ? 0.3 : 0 }}
//                                                 className="absolute top-8 right-8 text-primary-blue/10"
//                                             >
//                                                 <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
//                                                     <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
//                                                 </svg>
//                                             </motion.div>

//                                             {/* Rating stars with pop-in animation */}
//                                             <motion.div
//                                                 initial={{ opacity: 0, y: 20 }}
//                                                 animate={{ opacity: isActive ? 1 : 0.5, y: isActive ? 0 : 20 }}
//                                                 transition={{ delay: isActive ? 0.4 : 0 }}
//                                                 className="flex text-accent-yellow mb-4"
//                                             >
//                                                 {[...Array(testimonial.rating)].map((_, i) => (
//                                                     <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                                                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                                                     </svg>
//                                                 ))}
//                                             </motion.div>

//                                             {/* Review text with typewriter effect */}
//                                             <motion.blockquote
//                                                 initial={{ opacity: 0 }}
//                                                 animate={{ opacity: isActive ? 1 : 0.5 }}
//                                                 transition={{ delay: isActive ? 0.5 : 0 }}
//                                                 className="text-primary-dark text-lg italic mb-6 leading-relaxed"
//                                             >
//                                                 "{testimonial.review}"
//                                             </motion.blockquote>

//                                             {/* Customer info with slide-in effect */}
//                                             <motion.div
//                                                 initial={{ opacity: 0, x: -20 }}
//                                                 animate={{ opacity: isActive ? 1 : 0.5, x: isActive ? 0 : -20 }}
//                                                 transition={{ delay: isActive ? 0.6 : 0 }}
//                                                 className="mt-auto"
//                                             >
//                                                 <h4 className="text-xl font-bold text-primary-blue">{testimonial.name}</h4>
//                                                 <p className="text-steel-gray">{testimonial.location}</p>
//                                             </motion.div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         )
//                     })}
//                 </div>

//                 {/* Navigation Controls */}
//                 <div className="flex justify-center mt-12 space-x-4">
//                     <button 
//                         onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
//                         className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group"
//                         aria-label="Previous testimonial"
//                     >
//                         <svg className="w-6 h-6 text-white group-hover:text-accent-yellow transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//                         </svg>
//                     </button>

//                     <div className="flex items-center space-x-2">
//                         {testimonials.map((_, index) => (
//                             <button
//                                 key={index}
//                                 onClick={() => setCurrentTestimonial(index)}
//                                 className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === index ? 'bg-accent-yellow w-6' : 'bg-white/30'}`}
//                                 aria-label={`View testimonial from ${testimonials[index].name}`}
//                             />
//                         ))}
//                     </div>

//                     <button 
//                         onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
//                         className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group"
//                         aria-label="Next testimonial"
//                     >
//                         <svg className="w-6 h-6 text-white group-hover:text-accent-yellow transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//                         </svg>
//                     </button>
//                 </div>

//                 {/* Additional Reviews - Floating Cards */}
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.5 }}
//                     viewport={{ once: true }}
//                     className="mt-24 grid md:grid-cols-3 gap-6"
//                 >
//                     {[
//                         {
//                             name: "Arun Prakash",
//                             location: "Lawspet",
//                             review: "Best washing machine repair service in Pondicherry. Fair pricing and quality work. The technician was very professional.",
//                             rating: 5,
//                         },
//                         {
//                             name: "Sangeetha R.",
//                             location: "Muthialpet",
//                             review: "Quick response and excellent service. Fixed my IFB washing machine that others couldn't. Very satisfied with their work.",
//                             rating: 5,
//                         },
//                         {
//                             name: "Vijay Anand",
//                             location: "Reddiarpalayam",
//                             review: "Reliable and honest service. They diagnosed the issue correctly and didn't try to sell unnecessary parts. Will recommend to others.",
//                             rating: 5,
//                         },
//                     ].map((review, index) => (
//                         <motion.div
//                             key={review.name}
//                             initial={{ y: 50, opacity: 0 }}
//                             whileInView={{ y: 0, opacity: 1 }}
//                             transition={{ duration: 0.5, delay: index * 0.1 }}
//                             viewport={{ once: true }}
//                             className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-accent-yellow/30 transition-all duration-300 hover:-translate-y-2"
//                             whileHover={{ scale: 1.02 }}
//                         >
//                             <div className="flex text-accent-yellow mb-4">
//                                 {[...Array(review.rating)].map((_, i) => (
//                                     <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                                     </svg>
//                                 ))}
//                             </div>
//                             <blockquote className="text-white/90 mb-6 leading-relaxed">"{review.review}"</blockquote>
//                             <div>
//                                 <div className="font-semibold text-white">{review.name}</div>
//                                 <div className="text-sm text-white/70">{review.location}</div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>
//         </section>
//     )
// }

// export default Testimonials