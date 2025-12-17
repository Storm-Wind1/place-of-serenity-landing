import { Heart, Brain, Users, Shield } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Our team approaches each patient with empathy, understanding, and genuine concern for their wellbeing.",
    },
    {
      icon: Brain,
      title: "Expert Treatment",
      description: "Evidence-based psychiatric treatments delivered by experienced mental health professionals.",
    },
    {
      icon: Users,
      title: "Family Support",
      description: "We involve families in the healing process, providing education and support throughout recovery.",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "A secure, peaceful sanctuary where patients can focus entirely on their recovery journey.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
            About Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            A Place of Healing & Hope
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Located in the heart of Windhoek, Place of Serenity is Namibia's premier psychiatric hospital. 
            We provide comprehensive mental health services in a peaceful, therapeutic environment designed 
            to support recovery and restoration.
          </p>
        </div>

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
      </div>
    </section>
  );
};

export default AboutSection;
