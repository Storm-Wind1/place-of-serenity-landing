import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-serenity.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Place of Serenity - Peaceful healing environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-foreground/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-2xl">
          <p 
            className="text-primary-foreground/80 uppercase tracking-[0.3em] text-sm mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Psychiatric Hospital • Windhoek, Namibia
          </p>
          
          <h1 
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-primary-foreground mb-8 leading-[1.1] opacity-0 animate-fade-in text-balance"
            style={{ animationDelay: "0.4s" }}
          >
            Find Your Path to{" "}
            <span className="italic text-serenity-sage-light">Inner Peace</span>
          </h1>
          
          <p 
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-lg leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            A sanctuary for healing and recovery. Our compassionate team provides personalized psychiatric care in a tranquil, supportive environment.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button variant="serenity" size="lg">
              Schedule Consultation
            </Button>
            <Button variant="serenity-outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-float"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
};

export default HeroSection;
