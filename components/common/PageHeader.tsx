interface PageHeaderProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
  return (
    <section
      className="relative py-24 md:py-32 bg-gradient-to-br from-primary-dark via-deep-teal to-primary-blue overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-dark/70"></div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent-yellow/20 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
            {title}
          </h1>
          {subtitle && (
            <p className="font-inter text-lg md:text-xl text-white/90 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-200">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default PageHeader
