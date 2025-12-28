import { ArrowLeft, Phone, Mail, Clock, CheckCircle2, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface ConditionPageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  symptoms: string[];
  treatments: string[];
  additionalInfo?: string;
}

const ConditionPageLayout = ({
  title,
  subtitle,
  description,
  symptoms,
  treatments,
  additionalInfo,
}: ConditionPageLayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">

          {/* BREADCRUMBS */}
          <nav className="flex items-center text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/#services" className="hover:text-primary">Services</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-foreground font-medium">{title}</span>
          </nav>

          {/* BACK LINK */}
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Services</span>
          </Link>

          <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
            {subtitle}
          </p>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            {title}
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* MAIN */}
            <div className="lg:col-span-2 space-y-12">

              {/* SYMPTOMS */}
              <div className="bg-card rounded-2xl p-8 card-shadow">
                <h2 className="font-serif text-2xl text-foreground mb-6">
                  Common Signs & Symptoms
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  {symptoms.map((symptom) => (
                    <div
                      key={symptom}
                      className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* TREATMENT */}
              <div className="bg-card rounded-2xl p-8 card-shadow">
                <h2 className="font-serif text-2xl text-foreground mb-6">
                  Our Treatment Approach at Place of Serenity
                </h2>

                <div className="space-y-4">
                  {treatments.map((treatment) => (
                    <div
                      key={treatment}
                      className="flex gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        {treatment}
                      </p>
                    </div>
                  ))}
                </div>

                {additionalInfo && (
                  <p className="mt-6 pt-6 border-t border-border text-muted-foreground">
                    {additionalInfo}
                  </p>
                )}
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="space-y-6">

              <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
                <h3 className="font-serif text-xl mb-4">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Our compassionate team is here to support you.
                </p>
                <Button variant="serenity" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Get Help Today
                </Button>
              </div>

              <div className="bg-card rounded-2xl p-6 card-shadow">
                <h3 className="font-serif text-xl mb-4">Contact Us</h3>

                <div className="space-y-4">
                  <a href="tel:+26461241763" className="flex gap-3 items-center hover:text-primary">
                    <Phone className="h-5 w-5 text-primary" />
                    +264 61 241 763
                  </a>

                  <a href="mailto:info@placeofserenity.na" className="flex gap-3 items-center hover:text-primary">
                    <Mail className="h-5 w-5 text-primary" />
                    info@placeofserenity.na
                  </a>

                  <div className="flex gap-3 items-center text-muted-foreground">
                    <Clock className="h-5 w-5 text-primary" />
                    24/7 Support Available
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConditionPageLayout;
