import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Услуги", href: "/services" },
  { label: "Врачи", href: "/doctors" },
  { label: "Результаты", href: "/results" },
  { label: "Отзывы", href: "/reviews" },
  { label: "О клинике", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

const moreItems = [
  { label: "Прайс-лист", href: "/price" },
  { label: "Акции", href: "/promotions" },
  { label: "Технологии", href: "/technologies" },
  { label: "Блог", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Галерея", href: "/gallery" },
  { label: "Сертификаты", href: "/certificates" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const showTransparent = isHome && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showTransparent
          ? "bg-transparent py-5"
          : "bg-background/95 shadow-card py-3"
      }`}
      style={{ backdropFilter: !showTransparent ? "blur(12px)" : undefined }}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">М</span>
          </div>
          <span className={`font-bold text-lg tracking-tight ${showTransparent ? "text-primary-foreground" : "text-foreground"}`}>
            Мисс Стоматология
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                location.pathname === item.href
                  ? "text-primary"
                  : showTransparent
                    ? "text-primary-foreground/80 hover:text-primary-foreground"
                    : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* More dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 hover:text-primary ${
                showTransparent ? "text-primary-foreground/80" : "text-foreground"
              }`}
            >
              Ещё
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-background rounded-xl shadow-elevated border border-border py-2 z-50">
                {moreItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setDropdownOpen(false)}
                    className={`block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted ${
                      location.pathname === item.href ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+74951234567"
            className={`flex items-center gap-2 text-sm font-medium ${
              showTransparent ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            <Phone className="w-4 h-4" />
            +7 (495) 123-45-67
          </a>
          <Link
            to="/contacts"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-clinic-red-dark"
          >
            Записаться
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 ${showTransparent ? "text-primary-foreground" : "text-foreground"}`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background shadow-elevated border-t border-border max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {[...navItems, ...moreItems].map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={`text-base font-medium py-2 ${
                  location.pathname === item.href ? "text-primary" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contacts"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground mt-2"
            >
              Записаться на консультацию
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
