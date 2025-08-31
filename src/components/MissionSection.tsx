const MissionSection = () => {
  return (
    <section id="mission" className="py-20 bg-gradient-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 border border-white/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Mission</h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-elegant">
            <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
              Our mission is to mobilize capital, technology, and operational expertise to construct the critical infrastructure and financial instruments necessary for a more resilient and productive global economy.
            </p>
            
          </div>
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-corporate-darker to-transparent"></div>
    </section>
  );
};

export default MissionSection;