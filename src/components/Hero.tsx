import { ScrollReveal } from "./ScrollReveal";
import { Shield, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Современный стоматологический кабинет"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, hsl(0 50% 18% / 0.85) 0%, hsl(0 40% 15% / 0.7) 50%, hsl(168 30% 15% / 0.6) 100%)",
          }}
        />
      </div>

      {/* Teal glow accent */}
      <div
        className="absolute bottom-20 right-20 w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(168 76% 42%) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <ScrollReveal delay={200}>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-6"
              style={{ color: "hsl(168 76% 55%)" }}
            >
              Премиальная стоматология
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-8"
              style={{ color: "hsl(0 0% 100%)" }}
            >
              Путь к идеальной
              <br />
              <span className="text-gradient-red inline-block" style={{ backgroundImage: "linear-gradient(135deg, hsl(0 80% 65%), hsl(168 76% 55%))" }}>
                улыбке
              </span>{" "}
              начался
              <br />
              уже сейчас
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <p
              className="text-lg md:text-xl leading-relaxed max-w-xl mb-10"
              style={{ color: "hsl(0 0% 100% / 0.75)" }}
            >
              Цифровые технологии, опытные врачи, гарантированный результат.
              Бесплатная 3D-диагностика при первом визите.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contacts"
                className="inline-flex items-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-200 hover:bg-clinic-red-dark glow-red"
              >
                Записаться на консультацию
              </a>
              <a
                href="#services"
                className="inline-flex items-center rounded-lg px-8 py-4 text-base font-semibold transition-all duration-200 border"
                style={{
                  color: "hsl(0 0% 100%)",
                  borderColor: "hsl(0 0% 100% / 0.2)",
                }}
              >
                Наши услуги
              </a>
            </div>
          </ScrollReveal>

          {/* Trust indicators */}
          <ScrollReveal delay={1000}>
            <div className="flex flex-wrap gap-8 mt-16 pt-8" style={{ borderTop: "1px solid hsl(0 0% 100% / 0.1)" }}>
              {[
                { icon: Users, value: "12 847", label: "довольных пациентов" },
                { icon: Award, value: "18 лет", label: "опыта работы" },
                { icon: Shield, value: "5 лет", label: "гарантия на работу" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "hsl(0 0% 100% / 0.1)" }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: "hsl(168 76% 55%)" }} />
                  </div>
                  <div>
                    <p className="text-lg font-bold" style={{ color: "hsl(0 0% 100%)" }}>{item.value}</p>
                    <p className="text-xs" style={{ color: "hsl(0 0% 100% / 0.6)" }}>{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
