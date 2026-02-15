// src/pages/MoreConditions.tsx
import { ArrowLeft, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/serenity/Navbar";
import Footer from "@/components/serenity/Footer";

const conditions = [
  {
    name: "Obsessive-Compulsive Disorder (OCD)",
    description:
      "Characterised by unwanted, intrusive thoughts (obsessions) and repetitive behaviours (compulsions) performed to reduce anxiety.",
  },
  {
    name: "Substance Use Disorders",
    description:
      "Conditions involving the harmful use of alcohol or drugs, including addiction and dependency, requiring integrated treatment.",
  },
  {
    name: "Adjustment Disorders",
    description:
      "Emotional or behavioural symptoms in response to a stressful life event, more severe than would normally be expected.",
  },
  {
    name: "Dissociative Disorders",
    description:
      "Conditions involving disruptions in consciousness, memory, identity, or perception, often related to trauma.",
  },
  {
    name: "Psychotic Disorders",
    description:
      "Conditions involving loss of contact with reality, including hallucinations and delusions beyond schizophrenia.",
  },
  {
    name: "Somatoform Disorders",
    description:
      "Physical symptoms that cannot be fully explained by a medical condition, often linked to psychological distress.",
  },
  {
    name: "Sleep Disorders",
    description:
      "Conditions affecting sleep quality, timing, and amount, including insomnia and hypersomnia related to mental health.",
  },
  {
    name: "Mood Disorders (Other)",
    description:
      "Including cyclothymic disorder, dysthymia, and other mood conditions beyond major depression and bipolar disorder.",
  },
  {
    name: "Phobias",
    description:
      "Intense, irrational fears of specific objects or situations, such as agoraphobia, claustrophobia, or specific phobias.",
  },
  {
    name: "Cognitive Disorders",
    description:
      "Conditions affecting cognitive function including memory, attention, and problem-solving abilities.",
  },
  {
    name: "Self-Harm Behaviours",
    description:
      "Intentional self-injury as a way of coping with emotional pain, requiring specialised therapeutic intervention.",
  },
];

const MoreConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Services</span>
          </Link>

          <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Comprehensive Care
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Other Conditions We Treat
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            At Place of Serenity, we provide treatment for a wide range of mental health
            conditions. Our multidisciplinary team has the expertise to address complex and
            less common disorders with the same level of care and attention as our primary
            treatment areas.
          </p>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition) => (
              <div
                key={condition.name}
                className="bg-card rounded-2xl p-6 card-shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-2">
                      {condition.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {condition.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-primary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Don't See Your Condition Listed?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our team treats many conditions not listed here. If you or a loved one is
              struggling with a mental health challenge, please reach out. We're here to help
              assess your needs and discuss treatment options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="serenity" size="lg">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+264817380613">
                  Call +264 81 738 0613
                </a>
              </Button>
              <Button variant="serenity-outline" size="lg" asChild>
                <Link to="/#contact">Send a Message</Link>
              </Button>
            </div>
          </div>

          {/* Primary Conditions Links */}
          <div className="mt-16">
            <h2 className="font-serif text-2xl text-foreground mb-8 text-center">
              Learn More About Our Primary Treatment Areas
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                to="/conditions/depression"
                className="p-4 bg-card rounded-xl card-shadow hover:bg-secondary/50 transition-colors text-center"
              >
                <span className="text-foreground font-medium">Depression</span>
              </Link>
              <Link
                to="/conditions/anxiety"
                className="p-4 bg-card rounded-xl card-shadow hover:bg-secondary/50 transition-colors text-center"
              >
                <span className="text-foreground font-medium">
                  Generalised Anxiety Disorder
                </span>
              </Link>
              <Link
                to="/conditions/panic"
                className="p-4 bg-card rounded-xl card-shadow hover:bg-secondary/50 transition-colors text-center"
              >
                <span className="text-foreground font-medium">Panic Disorder</span>
              </Link>
              <Link
                to="/conditions/schizophrenia"
                className="p-4 bg-card rounded-xl card-shadow hover:bg-secondary/50 transition-colors text-center"
              >
                <span className="text-foreground font-medium">Schizophrenia</span>
              </Link>
              <Link
                to="/conditions/personality"
                className="p-4 bg-card rounded-xl card-shadow hover:bg-secondary/50 transition-colors text-center"
              >
                <span className="text-foreground font-medium">Personality Disorders</span>
              </Link>
              <Link
                to="/conditions/ptsd"
                className="p-4 bg-card rounded-xl card-shadow hover:bg-secondary/50 transition-colors text-center"
              >
                <span className="text-foreground font-medium">PTSD</span>
              </Link>
              <Link
                to="/conditions/social-anxiety"
                className="p-4 bg-card rounded-xl card-shadow hover:bg-secondary/50 transition-colors text-center"
              >
                <span className="text-foreground font-medium">Social Anxiety</span>
              </Link>
              <Link
                to="/conditions/eating"
                className="p-4 bg-card rounded-xl card-shadow hover:bg-secondary/50 transition-colors text-center"
              >
                <span className="text-foreground font-medium">Eating Disorders</span>
              </Link>
              <Link
                to="/conditions/bipolar"
                className="p-4 bg-card rounded-xl card-shadow hover:bg-secondary/50 transition-colors text-center"
              >
                <span className="text-foreground font-medium">Bipolar Disorder</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MoreConditions;