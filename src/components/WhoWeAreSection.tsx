const WhoWeAreSection = () => {
  return (
    <section id="about" className="py-20 bg-corporate-darker relative">
      <div className="container mx-auto px-6">
        {/* BV Innovation logo/icon */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-bv-blue to-bv-cyan rounded-2xl mb-8 shadow-glow">
            <div className="relative">
              <div className="w-8 h-8 border-3 border-white rounded transform rotate-12"></div>
              <div className="absolute -top-1 -left-1 w-6 h-6 border-2 border-white/60 rounded transform -rotate-12"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-2 border-white/40 rounded transform rotate-45"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Who we are</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-bv-blue to-bv-cyan mx-auto"></div>
        </div>

        {/* Content - Single bubble with two columns */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-corporate-dark to-bv-darker p-12 rounded-3xl shadow-elegant">
            <h3 className="text-2xl font-semibold text-bv-cyan mb-8 text-center">BV INNOVATION</h3>
            <div className="space-y-6">
              <p className="text-white/90 leading-relaxed">
                BV Innovation is a private operating and investment firm that conceives, constructs, and capitalizes the foundational infrastructure and sophisticated financial instruments of the modern economy. We identify critical, systemic bottlenecks and build the technological, financial, and legal frameworks required to solve them at scale.
              </p>
              
              <p className="text-white/90 leading-relaxed">
                Our multi-disciplinary principals operate across global capital markets as hands-on architects of value. We deploy our expertise across the full venture lifecycle—from structuring sovereign-level bonds to the operational execution of new platforms. This approach allows us to engineer and de-risk opportunities in complex, capital-intensive sectors.
              </p>

              <p className="text-white/90 leading-relaxed">
                Our work is concentrated in areas essential for economic security and growth, including:
              </p>

              <div className="pl-6 space-y-2">
                <p className="text-white/90 leading-relaxed">• Next-Generation Energy grids and generation</p>
                <p className="text-white/90 leading-relaxed">• Critical Mineral and real-asset finance</p>
                <p className="text-white/90 leading-relaxed">• Housing Finance and market liquidity</p>
                <p className="text-white/90 leading-relaxed">• Secure Data as a verifiable asset class</p>
              </div>

              <p className="text-white/90 leading-relaxed">
                By transforming historically illiquid or inefficient assets into institutional-grade instruments, we create resilient platforms for long-term value creation. Our sole focus is on executing ventures of national strategic importance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;