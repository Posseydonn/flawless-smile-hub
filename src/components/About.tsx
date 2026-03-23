import { ScrollReveal } from "./ScrollReveal";
import clinicInterior from "@/assets/clinic-interior.jpg";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface-warm">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="left">
            <div className="relative">
              <img
                src={clinicInterior}
                alt="Интерьер клиники Мисс Стоматология"
                className="rounded-2xl shadow-elevated w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary rounded-xl p-6 shadow-elevated hidden md:block">
                <p className="text-3xl font-bold text-primary-foreground">18+</p>
                <p className="text-sm text-primary-foreground/80">лет на рынке</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="right">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">О клинике</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-[1.1] mb-6">
              Мы делаем стоматологию комфортной и предсказуемой
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Мисс Стоматология — это современный стоматологический центр с фокусом на результат и комфорт пациента.
              Мы используем только сертифицированные материалы и оборудование мировых производителей.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "3D-диагностика и цифровое планирование",
                "Безболезненное лечение под седацией",
                "Собственная зуботехническая лаборатория",
                "Фиксированная стоимость до начала лечения",
                "Гарантия на все виды работ до 5 лет",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contacts"
              className="inline-flex items-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-200 hover:bg-clinic-red-dark"
            >
              Записаться на экскурсию
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
