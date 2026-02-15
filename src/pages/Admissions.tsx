import Navbar from "@/components/serenity/Navbar";
import Footer from "@/components/serenity/Footer";
import { Button } from "@/components/ui/button";
import {
  Phone,
  ClipboardCheck,
  Users,
  Heart,
  Shield,
  AlertTriangle,
  FileText,
  Clock,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";

const Admissions = () => {

  // ✅ Scroll to top ONLY when this page mounts

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-serenity-sage/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Admissions at Place of Serenity
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Taking the first step towards mental wellness is a courageous decision.
              We're here to guide you through our admission process with compassion and understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground text-center mb-12">
              Our Admission Process
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  icon: Phone,
                  title: "Initial Contact",
                  description:
                    "Reach out to us via phone or our contact form. Our team will answer your questions and schedule an assessment.",
                },
                {
                  step: "02",
                  icon: ClipboardCheck,
                  title: "Assessment",
                  description:
                    "Meet with our psychiatric team for a comprehensive evaluation to determine the best treatment approach for you.",
                },
                {
                  step: "03",
                  icon: FileText,
                  title: "Documentation",
                  description:
                    "Complete necessary paperwork including medical history, insurance details, and consent forms.",
                },
                {
                  step: "04",
                  icon: Home,
                  title: "Welcome",
                  description:
                    "Begin your healing journey in our peaceful environment with a personalized treatment plan.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative bg-card rounded-2xl p-6 shadow-elegant border border-border/50"
                >
                  <span className="absolute -top-3 -left-3 w-10 h-10 bg-serenity-sage text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </span>
                  <item.icon className="w-10 h-10 text-serenity-sage mb-4 mt-2" />
                  <h3 className="font-serif text-xl text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-foreground mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-muted-foreground mb-8">
              Our admissions team is available to answer your questions and guide you through the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="serenity" size="lg" asChild>
                <a href="tel:+264817380613">
                  <Phone className="w-5 h-5 mr-2" />
                  Call +264 81 738 0613
                </a>
              </Button>
              <Button variant="serenity-outline" size="lg" asChild>
                <Link to="/#contact">Contact Us Online</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;
