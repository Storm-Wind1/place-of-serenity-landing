import Navbar from "@/components/serenity/Navbar";
import HeroSection from "@/components/serenity/HeroSection";
import AboutSection from "@/components/serenity/AboutSection";
import ServicesSection from "@/components/serenity/ServicesSection";
import TestimonialsSection from "@/components/serenity/TestimonialsSection";
import ContactSection from "@/components/serenity/ContactSection";
import Footer from "@/components/serenity/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
