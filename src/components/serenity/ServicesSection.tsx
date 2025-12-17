import therapyRoom from "@/assets/therapy-room.jpg";
import consultationRoom from "@/assets/consultation-room.jpg";

const services = [
  {
    title: "Psychiatric Evaluation",
    description: "Comprehensive assessments to understand your unique mental health needs and develop personalized treatment plans.",
  },
  {
    title: "Inpatient Treatment",
    description: "24/7 care in a safe, structured environment for those requiring intensive psychiatric support.",
  },
  {
    title: "Depression & Anxiety",
    description: "Specialized programs addressing mood and anxiety disorders through therapy and medication management.",
  },
  {
    title: "Addiction Recovery",
    description: "Integrated treatment for substance abuse and co-occurring mental health conditions.",
  },
  {
    title: "Trauma & PTSD",
    description: "Evidence-based therapies to help process and heal from traumatic experiences.",
  },
  {
    title: "Family Therapy",
    description: "Supporting families through education, counseling, and collaborative treatment planning.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={therapyRoom}
                alt="Therapy room"
                className="rounded-2xl card-shadow w-full h-64 object-cover"
              />
              <img
                src={consultationRoom}
                alt="Consultation room"
                className="rounded-2xl card-shadow w-full h-64 object-cover mt-8"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-accent/50 -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-primary/10 -z-10" />
          </div>

          {/* Services List */}
          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Our Services
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
              Comprehensive Mental Health Care
            </h2>
            
            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group flex gap-4 p-4 rounded-xl hover:bg-card hover:card-shadow transition-all duration-300 cursor-default"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0 group-hover:scale-150 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
