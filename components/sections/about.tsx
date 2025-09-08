const AboutSection = () => {


    return (

        <section className="py-20 bg-soft-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Image */}
                    <div className="relative">
                        <img
                            src="/PICS.webp"
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
    )
}

export default AboutSection