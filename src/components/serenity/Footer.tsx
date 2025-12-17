import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">S</span>
              </div>
              <span className="font-serif font-semibold text-xl">Place of Serenity</span>
            </div>
            <p className="text-background/70 max-w-md mb-6">
              Namibia's trusted psychiatric hospital providing compassionate mental health care 
              in a peaceful, healing environment. Your journey to wellness begins here.
            </p>
            <div className="flex items-center gap-4 text-sm text-background/60">
              <span>Psychiatric Hospital</span>
              <span>•</span>
              <span>Windhoek, Namibia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><a href="#about" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Our Services</a></li>
              <li><a href="#facility" className="hover:text-background transition-colors">Our Facility</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>6 Gous Street, Windhoek, Namibia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+26461241763" className="hover:text-background transition-colors">
                  +264 61 241 763
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info@placeofserenity.na" className="hover:text-background transition-colors">
                  info@placeofserenity.na
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © 2024 Place of Serenity. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
