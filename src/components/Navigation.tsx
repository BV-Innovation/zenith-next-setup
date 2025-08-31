import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-corporate-darker/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/826e1c47-c372-45a8-98f3-e6a205af0d58.png" 
              alt="BV Innovation Logo" 
              className="h-12 w-auto"
            />
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