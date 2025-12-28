import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";
import logo from "@/assets/logo.png"; // 👈 ADD THIS

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Facility", href: "#facility" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center overflow-hidden border border-border">
              <img
                src={logo}
                alt="Place of Serenity logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <span className="font-serif font-semibold text-lg text-foreground">
                Place of Serenity
              </span>
              <p className="text-xs text-muted-foreground -mt-0.5">
                Psychiatric Hospital
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />

            <a
              href="tel:+26461241763"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4" />
              +264 61 241 763
            </a>

            <Button variant="serenity" size="default">
              Get Help Today
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border animate-fade-in space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 text-muted-foreground hover:text-foreground transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 mt-4 border-t border-border space-y-3">
              <ThemeToggle />

              <a
                href="tel:+26461241763"
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <Phone className="h-4 w-4" />
                +264 61 241 763
              </a>

              <Button variant="serenity" className="w-full">
                Get Help Today
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
