import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import MissionSection from "@/components/MissionSection";
import LeadershipSection from "@/components/LeadershipSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-corporate-darker">
      <Navigation />
      <HeroSection />
      <WhoWeAreSection />
      <MissionSection />
      <LeadershipSection />
      <Footer />
    </div>
  );
};

export default Index;
