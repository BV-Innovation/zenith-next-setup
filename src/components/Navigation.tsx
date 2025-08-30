import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-corporate-darker/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-bv-blue to-bv-cyan rounded-xl flex items-center justify-center shadow-glow">
              <div className="relative">
                <div className="w-6 h-6 border-2 border-white rounded transform rotate-45"></div>
                <div className="absolute -top-0.5 -left-0.5 w-4 h-4 border border-white/60 rounded transform -rotate-12"></div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border border-white/40 rounded transform rotate-45"></div>
              </div>
            </div>
            <span className="text-2xl font-bold text-white tracking-wide">BV INNOVATION</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-bv-cyan transition-colors">
              Home
            </a>
            <a href="#about" className="text-white hover:text-bv-cyan transition-colors">
              About
            </a>
            <a href="#mission" className="text-white hover:text-bv-cyan transition-colors">
              Mission
            </a>
            <a href="#leadership" className="text-white hover:text-bv-cyan transition-colors">
              Leadership
            </a>
            <Button variant="outline" className="border-bv-blue text-bv-blue hover:bg-bv-blue hover:text-white">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;