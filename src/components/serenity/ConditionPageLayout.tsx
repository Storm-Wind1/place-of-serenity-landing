// src/components/serenity/ConditionPageLayout.tsx
import React, { useMemo } from "react";
import {
  ArrowLeft,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
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

/**
 * Master list of conditions and their routes.
 * Keep this in sync with your routes / conditions data source.
 */
const ALL_CONDITIONS: { name: string; link: string }[] = [
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

/** Fisher–Yates shuffle */
const shuffleArray = <T,>(arr: T[]) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const ConditionPageLayout: React.FC<ConditionPageLayoutProps> = ({
  title,
  subtitle,
  description,
  symptoms,
  treatments,
  additionalInfo,
}) => {
  const navigate = useNavigate();

  /**
   * Compute a lively list of other conditions:
   * - Exclude the current condition by title
   * - Shuffle and pick up to 5 items (adjustable)
   * - useMemo ensures it only recalculates when title changes
   */
  const otherConditions = useMemo(() => {
    const others = ALL_CONDITIONS.filter((c) => c.name !== title);
    const shuffled = shuffleArray(others);
    return shuffled.slice(0, 5);
  }, [title]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm text-muted-foreground mb-6">
            <button
              onClick={() => navigate("/")}
              className="hover:text-primary focus:outline-none"
            >
              Home
            </button>

            <ChevronRight className="h-4 w-4 mx-2" />

            <button
              onClick={() => navigate("/", { state: { scrollTo: "services" } })}
              className="hover:text-primary focus:outline-none"
            >
              Services
            </button>

            <ChevronRight className="h-4 w-4 mx-2" />

            <span className="text-foreground font-medium">{title}</span>
          </nav>

          {/* Back Link */}
          <button
            onClick={() => navigate("/", { state: { scrollTo: "services" } })}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 focus:outline-none"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Services</span>
          </button>

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

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Symptoms */}
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
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Treatment */}
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
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        {treatment}
                      </p>
                    </div>
                  ))}
                </div>

                {additionalInfo && (
                  <p className="mt-6 text-muted-foreground leading-relaxed border-t border-border pt-6">
                    {additionalInfo}
                  </p>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
                <h3 className="font-serif text-xl text-foreground mb-4">
                  Need Help?
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Our compassionate team provides professional on-site mental
                  health care tailored to your needs.
                </p>
                <Button
                  className="w-full"
                  variant="serenity"
                  onClick={() => navigate("/", { state: { scrollTo: "contact" } })}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Get Help Today
                </Button>
              </div>

              {/* Contact Info */}
              <div className="bg-card rounded-2xl p-6 card-shadow">
                <h3 className="font-serif text-xl text-foreground mb-4">
                  Contact Us
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+264817380613"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+264 81 738 0613</span>
                  </a>
                  <a
                    href="mailto:info@placeserenity.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@placeserenity.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>On-site services during operating hours</span>
                  </div>
                </div>
              </div>

              {/* Other Conditions - lively, excludes current */}
              <div className="bg-card rounded-2xl p-6 card-shadow">
                <h3 className="font-serif text-xl text-foreground mb-4">
                  Other Conditions We Treat
                </h3>

                <div className="space-y-2">
                  {otherConditions.map((c) => (
                    <Link
                      key={c.link}
                      to={c.link}
                      className="block text-muted-foreground hover:text-primary transition-colors text-sm flex items-center justify-between gap-3 py-1 px-1 rounded-md hover:bg-secondary/10"
                    >
                      <span>{c.name}</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  ))}

                  {/* Fallback link to view all */}
                  <Link
                    to="/conditions/more"
                    className="mt-3 inline-block text-primary font-medium text-sm hover:underline"
                  >
                    View Other Conditions We Treat →
                  </Link>
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