// src/components/serenity/ServicesSection.tsx
import React, { useEffect, useRef, useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import { Link } from "react-router-dom";
import wellnessHolistic from "@/assets/wellness-holistic.jpg";
import therapyRoom from "@/assets/therapy-room.jpg";

const conditions = [
  { name: "Depression", link: "/conditions/depression" },
  { name: "Generalised Anxiety Disorder", link: "/conditions/anxiety" },
  { name: "Panic Disorder", link: "/conditions/panic" },
  { name: "Schizophrenia", link: "/conditions/schizophrenia" },
  { name: "Personality Disorders", link: "/conditions/personality" },
  { name: "Post Traumatic Stress Disorder", link: "/conditions/ptsd" },
  { name: "Social Anxiety", link: "/conditions/social-anxiety" },
  { name: "Eating Disorders", link: "/conditions/eating" },
  { name: "Bipolar Disorder", link: "/conditions/bipolar" },
  { name: "And many more...", link: "/conditions/more" },
];

const features = [
  "Collaborative efforts of a multidisciplinary team with diverse expertise",
  "Integration of medical, psychological, and social aspects of treatment",
  "Personalised care plans addressing individual needs and circumstances",
  "Focus on long-term recovery, well-being, and improved quality of life",
];

const ServicesSection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [highlight, setHighlight] = useState(false);
  const imageSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHighlight(true);
      },
      { threshold: 0.35 }
    );

    if (imageSectionRef.current) observer.observe(imageSectionRef.current);
    return () => {
      try {
        observer.disconnect();
      } catch {
        /* noop */
      }
    };
  }, []);

  // Close modal helper (used by overlay click and Escape key)
  const closeModal = () => setActiveImage(null);

  // Handle Escape key when modal is open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (activeImage) {
      window.addEventListener("keydown", onKey);
    }
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [activeImage]);

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Comprehensive Mental Health Care
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Patients admitted at Place of Serenity will be assessed for case-specific
            intervention and monitored 24/7 by a multidisciplinary care team.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 card-shadow">
          {/* FEATURES */}
          <h3 className="font-serif text-2xl text-foreground mb-8 text-center">
            Availability of a comprehensive range of mental health services in one location
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {features.map((feature) => (
              <div key={feature} className="flex gap-4 p-5 rounded-xl bg-secondary/40">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* CONDITIONS */}
          <h3 className="font-serif text-2xl text-foreground mb-2 text-center">
            Conditions We Treat
          </h3>

          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            Click on any condition below to learn more about the disorder,
            its symptoms, and how it is treated at Place of Serenity.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {conditions.map((condition) => (
              <Link
                key={condition.name}
                to={condition.link}
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition group"
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="group-hover:text-primary transition-colors">
                  {condition.name}
                </span>
              </Link>
            ))}
          </div>

          {/* HOW WE HELP (images placed here, spaced and unboxed; centered text) */}
          <div
            className="mt-8 p-8 rounded-2xl bg-primary/5 border border-primary/10"
            aria-labelledby="how-we-help-heading"
          >
            <h4
              id="how-we-help-heading"
              className="font-serif text-2xl mb-4 text-foreground text-center"
            >
              How We Help
            </h4>

            <p className="text-muted-foreground max-w-3xl mx-auto mb-6 text-center">
              Patients are equipped with coping and relapse-prevention skills,
              ensuring long-term recovery and continuity of care.
            </p>

            {/* Images: not boxed, spaced with gap, responsive */}
            <div
              ref={imageSectionRef}
              className={`flex flex-col md:flex-row items-stretch gap-6 justify-center ${highlight ? "animate-fade-in" : ""}`}
            >
              <button
                type="button"
                onClick={() => setActiveImage(wellnessHolistic)}
                className="flex-1 overflow-hidden rounded-lg hover:scale-[1.02] transition-transform shadow-sm focus:outline-none"
                aria-label="Open wellness image"
              >
                <img
                  src={wellnessHolistic}
                  alt="Wellness holistic environment at Place of Serenity"
                  className="w-full h-56 md:h-48 object-cover"
                  loading="lazy"
                />
              </button>

              <button
                type="button"
                onClick={() => setActiveImage(therapyRoom)}
                className="flex-1 overflow-hidden rounded-lg hover:scale-[1.02] transition-transform shadow-sm focus:outline-none"
                aria-label="Open therapy room image"
              >
                <img
                  src={therapyRoom}
                  alt="Therapy room at Place of Serenity"
                  className="w-full h-56 md:h-48 object-cover"
                  loading="lazy"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview dialog"
          tabIndex={-1}
        >
          {/* Make this container shrink to content so the backdrop reaches closer to the image.
              Removing w-full prevents the inner wrapper from covering the full viewport width,
              which makes clicks nearer the image hit the overlay and close the modal. */}
          <div
            className="relative inline-block max-w-[90vw] mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/10 focus:outline-none"
              aria-label="Close image"
            >
              <X size={28} />
            </button>

            <img
              src={activeImage}
              className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
              alt="Expanded"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;