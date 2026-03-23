import { ScrollReveal } from "./ScrollReveal";
import { Sparkles, Smile, Shield, Heart, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Sparkles,
    title: "Имплантация",
    description: "Восстановление зубов за 1 день с пожизненной гарантией. Используем швейцарские импланты Straumann.",
    price: "от 45 000 ₽",
  },
  {
    icon: Smile,
    title: "Виниры",
    description: "Голливудская улыбка без обточки зубов. Ультратонкие виниры E-max с идеальной эстетикой.",
    price: "от 35 000 ₽",
  },
  {
    icon: Shield,
    title: "Брекеты и элайнеры",
    description: "Невидимое выравнивание зубов. Элайнеры Invisalign и керамические брекеты Damon.",
    price: "от 120 000 ₽",
  },
  {
    icon: Heart,
    title: "Профгигиена",
    description: "Комплексная чистка Air Flow + ультразвук. Здоровые дёсны и свежее дыхание.",
    price: "от 6 500 ₽",
  },
  {
    icon: Stethoscope,
    title: "Лечение зубов",
    description: "Безболезненное лечение кариеса и пульпита под микроскопом. Современные пломбы-невидимки.",
    price: "от 5 000 ₽",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Наши услуги</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
              Полный спектр стоматологических услуг
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80} animation="scale">
              <div className="group bg-background rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-accent">{service.price}</span>
                  <Link
                    to="/contacts"
                    className="text-sm font-semibold text-primary hover:text-clinic-red-dark transition-colors duration-200"
                  >
                    Подробнее →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-12 rounded-2xl bg-clinic-gradient p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">Бесплатная консультация</h3>
              <p className="text-primary-foreground/80">3D-диагностика и план лечения в подарок при первом визите</p>
            </div>
            <Link
              to="/contacts"
              className="shrink-0 rounded-lg bg-background px-8 py-4 text-base font-semibold text-foreground transition-all duration-200 hover:shadow-elevated"
            >
              Записаться бесплатно
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
