// src/components/serenity/ContactSection.tsx
import React, { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const ADDRESS = "10001, 6 Gous, Windhoek";
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS
)}`;

// WhatsApp contact
const WHATSAPP_NUMBER = "264817380613"; // international format without plus sign
const WHATSAPP_PREFILL = `Hello, I'm contacting from the Place of Serenity website. I would like help with`; // user can finish this message

const openInMaps = () => {
  const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
  const encoded = encodeURIComponent(ADDRESS);

  const iosScheme = `maps://?q=${encoded}`;
  const androidScheme = `geo:0,0?q=${encoded}`;

  const isIOS = /iPad|iPhone|iPod/.test(ua) && !("MSStream" in window);
  const isAndroid = /Android/.test(ua);

  try {
    if (isIOS) {
      window.location.href = iosScheme;
      return;
    }
    if (isAndroid) {
      window.location.href = androidScheme;
      return;
    }

    const a = document.createElement("a");
    a.href = GOOGLE_MAPS_URL;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.remove();
  } catch {
    window.location.href = GOOGLE_MAPS_URL;
  }
};

const ContactSection: React.FC = () => {
  const handleOpenMaps = useCallback(() => {
    openInMaps();
  }, []);

  const openWhatsApp = useCallback(() => {
    const text = `${WHATSAPP_PREFILL}...`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  // Shared classes for interactive contact rows
  const interactiveRow =
    "group w-full flex items-center gap-4 p-3 rounded-xl transition-transform duration-150 transform-gpu hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/20";

  const iconBox =
    "w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0 transition-colors duration-150 group-hover:bg-accent/90";

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Get In Touch
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Ready to Take the First Step?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Our admissions team is here to answer your questions and guide you through the process.
              Reach out today – your journey to healing can begin now.
            </p>

            <div className="space-y-4">
              {/* Phone */}
              <a
                href="tel:+264817380613"
                className={interactiveRow}
                aria-label="Call Place of Serenity"
              >
                <div className={iconBox}>
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground mb-0.5">Phone</p>
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">
                    +264 81 738 0613
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <button
                type="button"
                onClick={openWhatsApp}
                className={interactiveRow}
                aria-label="Chat with Place of Serenity on WhatsApp"
              >
                <div className={iconBox}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-primary"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 .001 5.373.001 12c0 2.116.553 4.183 1.602 6.02L0 24l6.2-1.6A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 22.2c-1.9 0-3.74-.5-5.34-1.44l-.38-.22-3.68.95.98-3.58-.25-.38A9.2 9.2 0 012.8 12c0-5.06 4.14-9.2 9.2-9.2 2.46 0 4.77.96 6.52 2.71A9.16 9.16 0 0121.2 12c0 5.06-4.14 9.2-9.2 9.2z" />
                    <path d="M17.1 14.1c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.36.22-.66.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2 0-.38-.02-.53-.02-.15-.68-1.64-.94-2.24-.25-.58-.5-.5-.68-.51-.18-.02-.38-.02-.58-.02-.2 0-.53.07-.8.38-.28.3-1.06 1.03-1.06 2.5 0 1.47 1.09 2.9 1.24 3.1.15.2 2.14 3.3 5.18 4.63 3.04 1.33 3.04.89 3.58.83.54-.07 1.78-.72 2.03-1.42.25-.7.25-1.3.18-1.42-.07-.12-.28-.2-.58-.35z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground mb-0.5">WhatsApp</p>
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">
                      Chat on WhatsApp
                    </span>
                    <span className="text-xs text-muted-foreground">Quick first contact</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground max-w-sm">
                    Please avoid sharing sensitive personal details on WhatsApp. Use it for initial contact and brief descriptions; we'll arrange a secure follow-up.
                  </p>
                </div>
              </button>

              {/* Email moved directly under WhatsApp */}
              <a
                href="mailto:info@placeserenity.com"
                className={interactiveRow}
                aria-label="Email Place of Serenity"
              >
                <div className={iconBox}>
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground mb-0.5">Email</p>
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">
                    info@placeserenity.com
                  </span>
                </div>
              </a>

              {/* Address */}
              <button
                onClick={handleOpenMaps}
                className={interactiveRow}
                aria-label="Open address in maps"
              >
                <div className={iconBox}>
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground mb-0.5">Address</p>
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">
                    6 Gous Street
                    <br />
                    Windhoek, Khomas
                    <br />
                    Namibia
                  </span>
                </div>
              </button>

              {/* Hours (non-clickable) */}
              <div className="w-full flex items-center gap-4 p-3 rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground mb-0.5">Hours</p>
                  <p className="text-muted-foreground">Admissions: Every Day, 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 md:p-10 card-shadow">
            <h3 className="font-serif text-2xl text-foreground mb-6">Request Information</h3>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full h-12 px-4 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full h-12 px-4 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full h-12 px-4 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full h-12 px-4 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="+264..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  How Can We Help?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <Button variant="serenity" size="lg" className="w-full">
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Your information is kept strictly confidential.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;