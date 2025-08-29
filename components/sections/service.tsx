


const ServiceSection = () => {


    return (
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
                                "/WMS.jpg",
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
                                "/ac-repair.jpg",
                        },
                        {
                            title: "Microwave oven",
                            description: "Convenient doorstep repair service at your home in Pondicherry",
                            icon: "🏠",
                            image:
                                "/microvawe.jpg",
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
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/80 to-transparent"></div> */}
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
                                    {/* <span className="font-inter font-medium text-sm">Learn More</span> */}
                                    {/* <svg
                                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceSection