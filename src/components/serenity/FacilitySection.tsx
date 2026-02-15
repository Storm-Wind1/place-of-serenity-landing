// src/components/serenity/FacilitySection.tsx
import React, { useCallback } from "react";
import {
  Bed,
  Clock,
  Users2,
  Stethoscope,
  Brain,
  HeartHandshake,
  MapPin,
} from "lucide-react";
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

const ADDRESS = "10001, 6 Gous, Windhoek";
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS
)}`;

/**
 * openInMaps
 * - Uses the user click event to open a maps URL so browsers treat it as a direct user action.
 * - Prefers native map schemes on mobile when detected, otherwise falls back to Google Maps web.
 * - Avoids setTimeout and window.open after a delay to prevent popup blockers from blocking the action.
 */
const openInMaps = () => {
  const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
  const encoded = encodeURIComponent(ADDRESS);

  // Native schemes
  const iosScheme = `maps://?q=${encoded}`;
  const androidScheme = `geo:0,0?q=${encoded}`;

  // Decide preferred target based on platform
  const isIOS = /iPad|iPhone|iPod/.test(ua) && !("MSStream" in window);
  const isAndroid = /Android/.test(ua);

  // Try to open native scheme first by setting location.href directly.
  // This is executed inside the click handler so it is a direct user gesture.
  if (isIOS) {
    // On iOS, setting location to maps:// will open Apple Maps if available.
    window.location.href = iosScheme;
    return;
  }

  if (isAndroid) {
    // On Android, geo: scheme is commonly handled by the default maps app.
    window.location.href = androidScheme;
    return;
  }

  // Desktop or unknown device: open Google Maps in a new tab using an anchor click
  // created and clicked synchronously inside the user gesture to avoid popup blockers.
  const a = document.createElement("a");
  a.href = GOOGLE_MAPS_URL;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  // Append to DOM, click, then remove
  document.body.appendChild(a);
  a.click();
  a.remove();
};

const FacilitySection: React.FC = () => {
  const handleOpenMaps = useCallback(() => {
    openInMaps();
  }, []);

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

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Nestled in the lush and tranquil surroundings of Old Pionierspark in Windhoek,
              our facility provides a peaceful environment designed to support your mental
              health journey. Thoughtful spaces, experienced staff, and evidence-based care
              come together to create a place where recovery can begin.
            </p>

            {/* Address and Maps CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Visit Us</p>
                  <p className="text-sm text-muted-foreground">{ADDRESS}</p>
                </div>
              </div>

              <div className="ml-0 sm:ml-auto">
                <button
                  onClick={handleOpenMaps}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition"
                >
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">Open in Maps</span>
                </button>
              </div>
            </div>

            {/* Amenities grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {amenities.map((amenity) => {
                const Icon = amenity.icon;
                return (
                  <div
                    key={amenity.title}
                    className="group p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm mb-1">
                          {amenity.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {amenity.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <img
              src={consultationRoom}
              alt="Consultation room at Place of Serenity"
              className="rounded-2xl card-shadow w-full h-[520px] object-cover"
            />

            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-accent/50 -z-10" />
            <div className="absolute -top-8 -left-8 w-28 h-28 rounded-full bg-primary/10 -z-10" />

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