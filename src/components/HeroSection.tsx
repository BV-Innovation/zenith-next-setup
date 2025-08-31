const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Curved gradient background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-hero-overlay"></div>
        {/* Curved shape overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-corporate-darker to-transparent"></div>
        <svg
          className="absolute bottom-0 w-full h-48"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,200 C300,50 600,100 1200,0 L1200,200 Z"
            fill="url(#curveGradient)"
          />
          <defs>
            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(220, 30%, 10%)" />
              <stop offset="50%" stopColor="hsl(200, 95%, 45%)" />
              <stop offset="100%" stopColor="hsl(185, 85%, 55%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Large BV Innovation Logo */}
        <div className="mb-12">
          <div className="inline-block">
            {/* <img 
              src="/lovable-uploads/826e1c47-c372-45a8-98f3-e6a205af0d58.png" 
              alt="BV Innovation Logo" 
              className="h-32 w-auto mx-auto"
            /> */}
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Strategic Capital. Foundational Assets.
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#mission"
            className="px-8 py-4 bg-bv-blue hover:bg-bv-cyan text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-glow inline-block text-center"
          >
            Learn More
          </a>
          <a 
            href="mailto:investments@bvinnovation.com"
            className="px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm inline-block text-center"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-bv-cyan rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-bv-light-blue rounded-full opacity-50 animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;