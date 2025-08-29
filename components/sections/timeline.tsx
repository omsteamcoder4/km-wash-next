"use client"

import { motion, Variants } from 'framer-motion'

const Timeline = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants: Variants = {
    hidden: (side: number) => ({ 
      opacity: 0, 
      y: 50,
      x: side % 2 === 0 ? -30 : 30
    }),
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97], // Valid cubic-bezier values
        delay: custom * 0.15
      }
    })
  }

  const dotVariants: Variants = {
    hidden: { scale: 0 },
    visible: (custom: number) => ({
      scale: [0, 1.2, 1],
      transition: {
        duration: 0.6,
        delay: 0.4 + custom * 0.15,
        ease: "backOut" // Using named easing function
      }
    })
  }

  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -45 },
    visible: (custom: number) => ({
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.3 + custom * 0.15
      }
    })
  }

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4 + custom * 0.15,
        ease: "easeOut" // Using named easing function
      }
    })
  }

  const timelineLineVariants: Variants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1.5,
        delay: 0.2,
        ease: [0.43, 0.13, 0.23, 0.96] // Valid cubic-bezier values
      }
    }
  }

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: "easeInOut" // Replaced with valid easing
          }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-poppins font-bold text-3xl md:text-4xl text-primary-dark mb-4"
          >
            Our Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-inter text-lg text-steel-gray max-w-2xl mx-auto"
          >
            Two decades of excellence in washing machine repair service across Pondicherry.
          </motion.p>
        </motion.div>

        {/* Rest of the component remains the same */}
        <div className="relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={timelineLineVariants}
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-blue/10 via-primary-blue/30 to-primary-blue/10 hidden lg:block"
          ></motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="space-y-12"
          >
            {[
              {
                year: "2019",
                title: "Founded KM Enterprises",
                description: "Started with a vision to provide reliable washing machine repair service in Pondicherry",
                icon: "🏢",
                side: "left",
              },
              {
                year: "2021",
                title: "10K+ Repairs Completed",
                description: "Achieved milestone of serving over 10,000 satisfied customers across Pondicherry",
                icon: "🔧",
                side: "right",
              },
              {
                year: "2022",
                title: "Brand-Trained Technicians",
                description: "Our team became certified technicians for all major washing machine brands",
                icon: "👨‍🔧",
                side: "left",
              },
              {
                year: "2024",
                title: "5⭐ Reviews & Growing",
                description: "Consistently rated 5 stars by customers with over 2800+ successful repairs",
                icon: "⭐",
                side: "right",
              },
            ].map((milestone, index) => (
              <motion.div 
                key={milestone.year} 
                className="relative"
                custom={index}
                variants={itemVariants}
              >
                <div className={`lg:flex items-center ${milestone.side === "right" ? "lg:flex-row-reverse" : ""}`}>
                  <div className="lg:w-1/2 lg:px-8">
                    <motion.div
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                      variants={contentVariants}
                      whileHover={{ 
                        y: -8,
                        boxShadow: "0 15px 30px -10px rgba(59, 130, 246, 0.2)"
                      }}
                      className={`bg-soft-white p-6 rounded-xl shadow-lg border border-gray-100/50 ${milestone.side === "right" ? "lg:text-right" : ""}`}
                    >
                      <div className={`flex ${milestone.side === "right" ? "lg:justify-end" : ""} items-center space-x-3 mb-3`}>
                        <motion.div 
                          custom={index}
                          variants={iconVariants}
                          whileHover={{ rotate: [0, 10, -5, 0], scale: 1.1 }}
                          className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-2xl shadow-md"
                        >
                          {milestone.icon}
                        </motion.div>
                        <div>
                          <div className="font-poppins font-bold text-xl text-primary-blue">{milestone.year}</div>
                          <motion.h3 
                            whileHover={{ x: milestone.side === "right" ? -3 : 3 }}
                            className="font-poppins font-semibold text-lg text-primary-dark"
                          >
                            {milestone.title}
                          </motion.h3>
                        </div>
                      </div>
                      <motion.p 
                        whileHover={{ x: milestone.side === "right" ? -2 : 2 }}
                        className="font-inter text-steel-gray leading-relaxed"
                      >
                        {milestone.description}
                      </motion.p>
                    </motion.div>
                  </div>

                  <motion.div 
                    custom={index}
                    variants={dotVariants}
                    className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary-blue rounded-full border-4 border-white shadow-lg"
                  ></motion.div>

                  <div className="lg:w-1/2"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Timeline