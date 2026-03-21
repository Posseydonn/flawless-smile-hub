import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Услуги", href: "#services" },
  { label: "Врачи", href: "#doctors" },
  { label: "Результаты", href: "#results" },
  { label: "Отзывы", href: "#reviews" },
  { label: "О клинике", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 shadow-card py-3"
          : "bg-transparent py-5"
      }`}
      style={{ backdropFilter: scrolled ? "blur(12px)" : undefined }}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">D</span>
          </div>
          <span className={`font-bold text-lg tracking-tight ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            DentaPremium
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                scrolled ? "text-foreground" : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+74951234567"
            className={`flex items-center gap-2 text-sm font-medium ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            <Phone className="w-4 h-4" />
            +7 (495) 123-45-67
          </a>
          <a
            href="#contacts"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-clinic-red-dark"
          >
            Записаться
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background shadow-elevated border-t border-border">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-foreground text-base font-medium py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacts"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground mt-2"
            >
              Записаться на консультацию
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
