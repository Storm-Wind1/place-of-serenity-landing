// src/components/serenity/Footer.tsx
import React, { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const ADDRESS = "10001, 6 Gous, Windhoek";
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS
)}`;

const openInMaps = () => {
  const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
  const encoded = encodeURIComponent(ADDRESS);

  const iosScheme = `maps://?q=${encoded}`;
  const androidScheme = `geo:0,0?q=${encoded}`;

  const isIOS = /iPad|iPhone|iPod/.test(ua) && !("MSStream" in window);
  const isAndroid = /Android/.test(ua);

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
};

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenMaps = useCallback(() => {
    openInMaps();
  }, []);

  /**
   * Scroll helper used when already on the page that contains the sections.
   * If the element exists, scroll smoothly. If not found, fallback to setting the hash.
   */
  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      try {
        history.replaceState(null, "", `#${id}`);
      } catch {
        // ignore
      }
      return true;
    }
    // fallback
    window.location.hash = `#${id}`;
    return false;
  }, []);

  /**
   * If user is on the home route ("/") attempt to scroll immediately.
   * Otherwise navigate to "/" and pass the target id in location.state.scrollTo.
   */
  const handleScrollTo = useCallback(
    (id: string) => {
      const currentPath = location.pathname;
      const homePath = "/"; // change if your sections live on a different route

      if (currentPath === homePath) {
        scrollToId(id);
        return;
      }

      // Navigate to home and pass the desired scroll target in state
      navigate(homePath, { state: { scrollTo: id } });
    },
    [location.pathname, navigate, scrollToId]
  );

  return (
    <footer className="bg-background text-foreground border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Place of Serenity Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-serif font-semibold text-xl">Place of Serenity</span>
            </div>

            <p className="text-muted-foreground max-w-md mb-6">
              Namibia&apos;s trusted psychiatric hospital providing compassionate mental
              health care in a peaceful, healing environment. Your journey to wellness begins
              here.
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Psychiatric Hospital</span>
              <span>•</span>
              <span>Windhoek, Namibia</span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <button
                  type="button"
                  onClick={() => handleScrollTo("about")}
                  className="p-0 m-0 text-left text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none"
                  aria-label="Scroll to About section"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleScrollTo("services")}
                  className="p-0 m-0 text-left text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none"
                  aria-label="Scroll to Services section"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleScrollTo("facility")}
                  className="p-0 m-0 text-left text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none"
                  aria-label="Scroll to Facility section"
                >
                  Our Facility
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleScrollTo("contact")}
                  className="p-0 m-0 text-left text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none"
                  aria-label="Scroll to Contact section"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <div className="flex flex-col">
                  <button
                    onClick={handleOpenMaps}
                    className="text-left p-0 m-0 text-sm text-foreground hover:underline focus:outline-none"
                    aria-label="Open address in maps"
                  >
                    6 Gous Street, Windhoek, Namibia
                  </button>
                </div>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+264817380613" className="hover:text-foreground transition-colors">
                  +264 81 738 0613
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:info@placeserenity.com"
                  className="hover:text-foreground transition-colors"
                >
                  info@placeserenity.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2026 Place of Serenity. All rights reserved.</p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;