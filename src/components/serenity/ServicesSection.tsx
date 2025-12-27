import { useEffect, useRef, useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import wellnessHolistic from "@/assets/wellness-holistic.jpg";
import therapyRoom from "@/assets/therapy-room.jpg";

const conditions = [
  "Depression",
  "Generalised Anxiety Disorder",
  "Panic Disorder",
  "Schizophrenia",
  "Personality Disorders",
  "Post Traumatic Stress Disorder",
  "Social Anxiety",
  "Eating Disorders",
  "Bipolar Disorder",
  "And many more...",
];

const features = [
  "Availability of a comprehensive range of mental health services in one location",
  "Collaborative efforts of a multidisciplinary team with diverse expertise",
  "Integration of medical, psychological, and social aspects of treatment",
  "Personalised care plans addressing individual needs and circumstances",
  "Focus on long-term recovery, well-being, and improved quality of life",
];

const ServicesSection = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [highlight, setHighlight] = useState(false);
  const imageSectionRef = useRef<HTMLDivElement | null>(null);

  /* Highlight images when they scroll into view */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHighlight(true);
      },
      { threshold: 0.4 }
    );

    if (imageSectionRef.current) observer.observe(imageSectionRef.current);
    return () => observer.disconnect();
  }, []);

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
            Patients admitted at Place of Serenity will be assessed for case-specific intervention. 
            They will be under 24/7 observation while undergoing sessions with all the multidisciplinary 
            team members.
          </p>
        </div>

        {/* CONDITIONS */}
        <div className="bg-card rounded-2xl p-8 md:p-12 card-shadow">
          <h3 className="font-serif text-2xl text-foreground mb-8 text-center">
            Conditions We Treat
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {conditions.map((condition) => (
              <div
                key={condition}
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition"
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span>{condition}</span>
              </div>
            ))}
          </div>

          {/* IMAGES */}
          <div
            ref={imageSectionRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14"
          >
            {[wellnessHolistic, therapyRoom].map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImage(img)}
                className={`
                  relative cursor-zoom-in rounded-2xl overflow-hidden
                  transition-all duration-500
                  ${highlight ? "ring-2 ring-primary/40 shadow-xl scale-[1.02]" : ""}
                  hover:scale-105 hover:ring-4 hover:ring-primary/60
                `}
              >
                <img
                  src={img}
                  alt="Facility preview"
                  className="w-full h-[22rem] object-cover"
                />
                <span className="absolute bottom-4 right-4 text-xs bg-black/60 text-white px-3 py-1 rounded-full">
                  Click to expand
                </span>
              </div>
            ))}
          </div>

          {/* FEATURES */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex gap-4 p-5 rounded-xl bg-secondary/40"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* HOW WE HELP */}
        <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/10 text-center">
          <h3 className="font-serif text-2xl mb-4">How We Help</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Patients are equipped with coping and relapse-prevention skills,
            ensuring long-term recovery and continuity of care.
          </p>
        </div>
      </div>

      {/* MODAL */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          onClick={() => setActiveImage(null)}
        >
          <button className="absolute top-6 right-6 text-white">
            <X size={32} />
          </button>
          <img
            src={activeImage}
            alt="Expanded view"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
