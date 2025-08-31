import { Linkedin } from "lucide-react";

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-20 bg-gradient-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-white rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-bv-cyan to-bv-light-blue rounded-2xl mb-8 shadow-glow">
            <div className="relative">
              <div className="w-8 h-8 border-3 border-white rounded transform rotate-12"></div>
              <div className="absolute -top-1 -left-1 w-6 h-6 border-2 border-white/60 rounded transform -rotate-12"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-2 border-white/40 rounded transform rotate-45"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Leadership</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-bv-cyan to-bv-light-blue mx-auto"></div>
        </div>

        {/* Leadership profile */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-bv-cyan to-bv-light-blue p-1 rounded-3xl shadow-glow">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/f0b1427f-e786-40b0-bb41-3acab8a20b0f.png"
                    alt="Bo Vargas, Founder and Managing Director of BV Innovation" 
                    className="w-full h-96 object-cover object-center"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-bv-cyan rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-bv-light-blue rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>

            {/* Profile content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Bo Vargas, Founder and Managing Director</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-bv-cyan to-bv-light-blue"></div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-elegant">
                <p className="text-white/90 leading-relaxed mb-6">
                  Bo's background has been an interesting mix of military, technology, entrepreneurship, and investment. As a serial entrepreneur and investor, he has built companies spanning AI, financial trading, health care, robotics, and software. Along the way he developed a deep understanding of financial markets.
                </p>
                
                <p className="text-white/90 leading-relaxed mb-6">
                  While leading financial strategies and deploying financial systems for global investment funds, he launched BV Innovation.
                </p>

                {/* LinkedIn link */}
                <a 
                  href="https://www.linkedin.com/in/bovargas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/70">Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;