import { Phone } from "lucide-react";

export const StickyCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="tel:+74951234567"
        className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-elevated glow-teal transition-transform duration-200 hover:scale-105"
        aria-label="Позвонить"
      >
        <Phone className="w-6 h-6 text-accent-foreground" />
      </a>
      <a
        href="#contacts"
        className="hidden md:flex w-14 h-14 rounded-full bg-primary items-center justify-center shadow-elevated glow-red transition-transform duration-200 hover:scale-105"
        aria-label="Записаться"
      >
        <span className="text-primary-foreground text-lg font-bold">→</span>
      </a>
    </div>
  );
};
