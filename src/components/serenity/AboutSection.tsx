import { Heart, Brain, Users, Shield, Target, Eye } from "lucide-react";
import facilityExterior from "@/assets/facility-exterior.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We approach each patient with empathy, understanding, and genuine concern for their wellbeing.",
    },
    {
      icon: Brain,
      title: "Evidence-Based",
      description: "Employing evidence-based practices to promote mental wellness and facilitate lasting recovery.",
    },
    {
      icon: Users,
      title: "Multidisciplinary Team",
      description: "Social Workers, Psychiatrists, Psychologists, Occupational Therapists, Doctors and nurses working collaboratively.",
    },
    {
      icon: Shield,
      title: "24/7 Observation",
      description: "Round-the-clock care by dedicated staff while undergoing sessions with our team members.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
              About Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              A Place of Healing & Hope
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Place of Serenity is a specialised psychiatric hospital nestled in the lush and tranquil 
              surroundings of Old Pionierspark in Windhoek, Namibia.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              As one of the few private specialised psychiatric hospitals in the country, our mission is to 
              provide exceptional mental health care to patients from near and far and address the severe 
              under-service of psychiatric care in Namibia.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We have assembled a multidisciplinary team of dedicated professionals who work collaboratively 
              to deliver comprehensive and personalised services to our patients.
            </p>
          </div>
          <div className="relative">
            <img
              src={facilityExterior}
              alt="Place of Serenity facility"
              className="rounded-2xl card-shadow w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-accent/50 -z-10" />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-2xl text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver superior mental health care services that empower individuals to overcome their 
              challenges and reclaim their lives. We are dedicated to promoting mental wellness, fostering 
              resilience, and facilitating lasting recovery by employing evidence-based practices, compassion, 
              and personalised care.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-secondary border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-2xl text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the leading provider of exceptional mental health care in Namibia, known for our unwavering 
              commitment to excellence, innovation, and patient-centred care. We strive to reshape the landscape 
              of psychiatric services in the country, championing increased awareness, accessibility, and support 
              for mental health.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group text-center p-8 rounded-2xl bg-card card-shadow hover:card-shadow-hover transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic leading-relaxed mb-4">
            "Mental health… is not a destination, but a process. It's about how you drive, not where you are going."
          </blockquote>
          <cite className="text-primary font-medium">— Noam Shpancer</cite>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;