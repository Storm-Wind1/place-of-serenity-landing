// src/components/serenity/Navbar.tsx
import React, { useState, useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import logo from "@/assets/logo.png";

/* Ultra-smooth scroll helper used across Navbar (slowed by 50%) */
const scrollToIdUltraSmooth = (id: string, duration = 2400) => {
  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector("header");
  const headerOffset = header ? (header as HTMLElement).clientHeight : 80;

  const start = window.pageYOffset;
  const targetY = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
  const distance = targetY - start;
  const startTime = performance.now();

  // easeOutQuart
  const ease = (t: number) => 1 - Math.pow(1 - t, 4);

  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    const eased = ease(progress);
    window.scrollTo(0, Math.round(start + distance * eased));
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToSection = useCallback(
    (id: string) => {
      // Close mobile menu first
      setOpen(false);

      // If already on the Index page, ultra-smooth scroll directly.
      // Add a slightly longer delay so the header/menu has time to settle on mobile
      if (location.pathname === "/") {
        setTimeout(() => {
          scrollToIdUltraSmooth(id, 2400);
        }, 150);
        return;
      }

      // Otherwise navigate to Index and pass the target in state
      navigate("/", { state: { scrollTo: id } });
    },
    [location.pathname, navigate]
  );

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-background/80 backdrop-blur border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <span className="font-semibold hidden sm:inline-block">Place of Serenity</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          <li>
            <button onClick={() => navigateToSection("about")} className="nav-link">
              About
            </button>
          </li>
          <li>
            <button onClick={() => navigateToSection("services")} className="nav-link">
              Services
            </button>
          </li>
          <li>
            <button onClick={() => navigateToSection("facility")} className="nav-link">
              Facility
            </button>
          </li>
          <li>
            <Link to="/admissions" className="nav-link">
              Admissions
            </Link>
          </li>
          <li>
            <button onClick={() => navigateToSection("contact")} className="nav-link">
              Contact
            </button>
          </li>
        </ul>

        {/* Right actions (ALWAYS visible) */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Get Help Today - visible on large screens, hidden on small */}
          <Button
            variant="serenity"
            className="hidden lg:inline-flex rounded-full"
            onClick={() => navigateToSection("contact")}
          >
            Get Help Today
          </Button>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-background/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden px-6 py-6 space-y-4 border-t bg-background">
          <button
            onClick={() => navigateToSection("about")}
            className="block w-full text-left py-2 rounded-md hover:bg-background/50 transition"
          >
            About
          </button>
          <button
            onClick={() => navigateToSection("services")}
            className="block w-full text-left py-2 rounded-md hover:bg-background/50 transition"
          >
            Services
          </button>
          <button
            onClick={() => navigateToSection("facility")}
            className="block w-full text-left py-2 rounded-md hover:bg-background/50 transition"
          >
            Facility
          </button>
          <Link
            to="/admissions"
            onClick={() => setOpen(false)}
            className="block w-full text-left py-2 rounded-md hover:bg-background/50 transition"
          >
            Admissions
          </Link>
          <button
            onClick={() => navigateToSection("contact")}
            className="block w-full text-left py-2 rounded-md hover:bg-background/50 transition"
          >
            Contact
          </button>

          <Button
            variant="serenity"
            className="w-full mt-4 rounded-full"
            onClick={() => navigateToSection("contact")}
          >
            Get Help Today
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;