// src/components/serenity/HeroSection.tsx
import React, { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-serenity.jpg";

/**
 * Ultra-smooth scroll helper (slowed by 50%)
 * - duration default 2400ms (was 1600ms)
 * - accounts for fixed header height if present
 * - uses easeOutQuart for a smooth deceleration
 */
const scrollToIdUltraSmooth = (id: string, duration = 2400) => {
  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector("header");
  const headerOffset = header ? (header as HTMLElement).clientHeight : 80;

  const start = window.pageYOffset;
  const targetY = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
  const distance = targetY - start;
  const startTime = performance.now();

  // easeOutQuart
  const ease = (t: number) => 1 - Math.pow(1 - t, 4);

  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    const eased = ease(progress);
    window.scrollTo(0, Math.round(start + distance * eased));
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSchedule = useCallback(() => {
    // If already on the index page, ultra-smooth scroll to contact section
    if (location.pathname === "/") {
      // small delay to allow UI to settle on mobile
      setTimeout(() => scrollToIdUltraSmooth("contact", 2400), 150);
      return;
    }

    // Otherwise navigate to index and let Index handle scrolling via state
    navigate("/", { state: { scrollTo: "contact" } });
  }, [location.pathname, navigate]);

  const handleArrowClick = useCallback(() => {
    // If already on the index page, ultra-smooth scroll to about
    if (location.pathname === "/") {
      setTimeout(() => scrollToIdUltraSmooth("about", 2400), 150);
      return;
    }

    // If not on index, navigate to index and pass state so Index will scroll after mount
    navigate("/", { state: { scrollTo: "about" } });
  }, [location.pathname, navigate]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Place of Serenity - Peaceful healing environment"
          className="w-full h-full object-cover"
        />

        {/* Neutral overlay */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-2xl">
          <p
            className="uppercase tracking-[0.3em] text-sm mb-6 text-white/80 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Psychiatric Hospital • Windhoek, Namibia
          </p>

          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-8 leading-[1.1] opacity-0 animate-fade-in text-balance"
            style={{ animationDelay: "0.4s" }}
          >
            Find Your Path to{" "}
            <span className="italic text-serenity-sage-light">Inner Peace</span>
          </h1>

          <p
            className="text-lg md:text-xl text-white/85 mb-10 max-w-lg leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            A sanctuary for healing and recovery. Our compassionate team provides
            personalized psychiatric care in a tranquil, supportive environment.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button variant="serenity" size="lg" onClick={handleSchedule}>
              Get In Touch
            </Button>
          </div>

          {/* Short message prompting users to scroll for more */}
          <p
            className="mt-4 text-sm text-white/80 opacity-0 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            Want to learn more? Scroll down to explore our services, facility,
            testimonials, and how to get in touch.
          </p>
        </div>
      </div>

      {/* Ultra-smooth Scroll Indicator (button) */}
      <button
        type="button"
        onClick={handleArrowClick}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-float"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default HeroSection;