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
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-white/90 leading-relaxed">
                  Introducing BV Innovation, a trailblazing venture fund redefining the landscape of investment. Led by a team of visionary entrepreneurs and seasoned business operators, we bring an unconventional approach to the world of finance.
                </p>
                
                <p className="text-white/90 leading-relaxed">
                  With deep-rooted expertise in finance, government, technology, AI, and marketing, our diverse backgrounds form a formidable force, reshaping the future of entrepreneurship.
                </p>

                <p className="text-white/90 leading-relaxed">
                  At BV Innovation, we pride ourselves on being founder-friendly and forging partnerships based on fairness, transparency, and trust. Our philosophy centers around empowering founders, providing them with the necessary resources, and nurturing their entrepreneurial spirit.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-white/90 leading-relaxed">
                  With a bold and rebellious spirit, we challenge the traditional norms of the industry. Our professionalism remains unwavering as we ignite change, drive visionary leadership and unlock new realms of growth. BV Innovation stands as a symbol of audacity, merging capital investment with the transformative power of AI.
                </p>

                <p className="text-white/90 leading-relaxed">
                  We invest across a wide array of businesses, industries, and stages, seeking out opportunities with untapped potential. As growth catalysts, we fuel innovation, propelling our portfolio companies toward unprecedented success.
                </p>

                <p className="text-white/90 leading-relaxed">
                  BV Innovation represents a new breed of venture fund where ambition converges with purpose. Join us on this extraordinary journey as we pave the way for visionary leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;