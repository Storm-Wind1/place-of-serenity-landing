// src/pages/Index.tsx
import React, { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

import Navbar from "@/components/serenity/Navbar";
import HeroSection from "@/components/serenity/HeroSection";
import AboutSection from "@/components/serenity/AboutSection";
import ServicesSection from "@/components/serenity/ServicesSection";
import FacilitySection from "@/components/serenity/FacilitySection";
import TestimonialsSection from "@/components/serenity/TestimonialsSection";
import ContactSection from "@/components/serenity/ContactSection";
import Footer from "@/components/serenity/Footer";

/* Ultra-smooth scroll helper used by Index (slowed by 50%) */
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

const Index: React.FC = () => {
  const location = useLocation();
  const navType = useNavigationType();
  const triedRef = useRef(false);

  useEffect(() => {
    // Determine target from state or hash
    const state = location.state as { scrollTo?: string } | null;
    const targetFromState = state?.scrollTo;
    const targetFromHash = location.hash ? location.hash.replace("#", "") : undefined;
    const target = targetFromState ?? targetFromHash;

    if (!target) {
      triedRef.current = false;
      return;
    }

    if (triedRef.current) return;

    // Small delay before starting the retry loop so header/menu can settle on mobile
    const startDelay = 180; // ms (increased for extra reliability)
    let cancelled = false;

    const start = () => {
      if (cancelled) return;

      let attempts = 0;
      const maxAttempts = 18;
      let lastHeight = document.body.scrollHeight;

      const tryScroll = () => {
        if (cancelled) return;

        const currentHeight = document.body.scrollHeight;
        const heightChanged = Math.abs(currentHeight - lastHeight) > 8;
        lastHeight = currentHeight;

        if (!heightChanged || attempts >= maxAttempts) {
          // Use ultra-smooth scroll for a very gentle experience
          scrollToIdUltraSmooth(target, 2400);
          triedRef.current = true;
        } else {
          attempts += 1;
          setTimeout(tryScroll, 160);
        }
      };

      tryScroll();
    };

    const t = setTimeout(start, startDelay);

    return () => {
      cancelled = true;
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key, location.hash, location.state, navType]);

  return (
    <>
      <Navbar />

      <main>
        <section id="home"><HeroSection /></section>
        <section id="about"><AboutSection /></section>
        <section id="services"><ServicesSection /></section>
        <section id="facility"><FacilitySection /></section>
        <section id="testimonials"><TestimonialsSection /></section>
        <section id="contact"><ContactSection /></section>
      </main>

      <Footer />
    </>
  );
};

export default Index;