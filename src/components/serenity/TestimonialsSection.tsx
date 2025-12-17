import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The compassionate staff at Place of Serenity helped me find hope again. Their personalized approach to treatment made all the difference in my recovery.",
    author: "Anonymous Patient",
    role: "Depression Recovery",
  },
  {
    quote: "I felt safe and supported throughout my stay. The peaceful environment and professional care gave me the space I needed to heal.",
    author: "Former Patient",
    role: "Anxiety Treatment",
  },
  {
    quote: "The family therapy sessions helped us understand and support our loved one better. We're grateful for the entire team's dedication.",
    author: "Family Member",
    role: "Family Support Program",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Patient Stories
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Voices of Hope
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 card-shadow relative opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <Quote className="h-10 w-10 text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
