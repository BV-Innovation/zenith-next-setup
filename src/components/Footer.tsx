const Footer = () => {
  return (
    <footer className="bg-corporate-darker py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/826e1c47-c372-45a8-98f3-e6a205af0d58.png" 
                alt="BV Innovation Logo" 
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold text-white tracking-wide">BV INNOVATION</span>
            </div>
            <p className="text-white/70">
              Redefining investment through visionary leadership and transformative innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-white/70 hover:text-bv-cyan transition-colors">
                Home
              </a>
              <a href="#about" className="block text-white/70 hover:text-bv-cyan transition-colors">
                About
              </a>
              <a href="#mission" className="block text-white/70 hover:text-bv-cyan transition-colors">
                Mission
              </a>
              <a href="#leadership" className="block text-white/70 hover:text-bv-cyan transition-colors">
                Leadership
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-2">
              <p className="text-white/70">Ready to transform your vision into reality?</p>
              <button className="px-6 py-3 bg-bv-blue hover:bg-bv-cyan text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60">
            © 2024 BV Innovation. All rights reserved. | Cross Over Fund ran by the Vargas Family Office
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;