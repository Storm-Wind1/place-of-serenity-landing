import { Bed, Clock, Users2, Stethoscope, Brain, HeartHandshake } from "lucide-react";
import consultationRoom from "@/assets/consultation-room.jpg";

const amenities = [
  {
    icon: Bed,
    title: "Private Rooms",
    description: "Comfortable, private accommodations designed for rest and recovery",
  },
  {
    icon: Clock,
    title: "24/7 Care",
    description: "Round-the-clock observation and support by dedicated staff",
  },
  {
    icon: Users2,
    title: "Group Therapy Spaces",
    description: "Comfortable areas for therapeutic group sessions and activities",
  },
  {
    icon: Stethoscope,
    title: "Medical Facilities",
    description: "Fully equipped medical rooms for comprehensive health monitoring",
  },
  {
    icon: Brain,
    title: "Therapy Rooms",
    description: "Private consultation rooms for individual therapy sessions",
  },
  {
    icon: HeartHandshake,
    title: "Family Visiting Areas",
    description: "Welcoming spaces for family visits and support sessions",
  },
];

const FacilitySection = () => {
  return (
    <section id="facility" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Our Facility
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              A Tranquil Sanctuary for Healing
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nestled in the lush and tranquil surroundings of Old Pionierspark in Windhoek, 
              our facility provides a peaceful environment designed to support your mental 
              health journey.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {amenities.map((amenity, index) => (
                <div
                  key={amenity.title}
                  className="group p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <amenity.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">{amenity.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{amenity.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <img
              src={consultationRoom}
              alt="Consultation room at Place of Serenity"
              className="rounded-2xl card-shadow w-full h-[500px] object-cover"
            />
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-accent/50 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary/10 -z-10" />
            
            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-card/95 backdrop-blur-sm card-shadow">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-serif text-2xl text-primary font-semibold">24/7</p>
                  <p className="text-xs text-muted-foreground">Care Available</p>
                </div>
                <div>
                  <p className="font-serif text-2xl text-primary font-semibold">10+</p>
                  <p className="text-xs text-muted-foreground">Specialists</p>
                </div>
                <div>
                  <p className="font-serif text-2xl text-primary font-semibold">100%</p>
                  <p className="text-xs text-muted-foreground">Dedicated Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitySection;
