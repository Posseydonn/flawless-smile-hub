import { ScrollReveal } from "./ScrollReveal";
import { Shield, Award, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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
            background: "linear-gradient(160deg, hsl(0 50% 12% / 0.92) 0%, hsl(0 40% 15% / 0.75) 40%, hsl(168 30% 12% / 0.65) 100%)",
          }}
        />
      </div>

      {/* Large teal glow */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(168 76% 42%) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Red glow top-left */}
      <div
        className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(0 65% 51%) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-24">
        <div className="max-w-4xl">
          <ScrollReveal delay={200}>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8" style={{ backgroundColor: "hsl(0 0% 100% / 0.08)", backdropFilter: "blur(10px)" }}>
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium" style={{ color: "hsl(168 76% 55%)" }}>
                Премиальная стоматология в центре Москвы
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.02] mb-8"
              style={{ color: "hsl(0 0% 100%)" }}
            >
              Мисс
              <br />
              <span
                className="inline-block"
                style={{
                  backgroundImage: "linear-gradient(135deg, hsl(0 80% 65%), hsl(168 76% 55%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Стоматология
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <p
              className="text-xl md:text-2xl leading-relaxed max-w-2xl mb-12 font-light"
              style={{ color: "hsl(0 0% 100% / 0.8)" }}
            >
              Цифровые технологии, опытные врачи, гарантированный результат.
              Бесплатная 3D-диагностика при первом визите.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contacts"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-10 py-5 text-lg font-semibold text-primary-foreground transition-all duration-200 hover:bg-clinic-red-dark glow-red group"
              >
                Записаться на консультацию
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center rounded-xl px-10 py-5 text-lg font-semibold transition-all duration-200 border"
                style={{
                  color: "hsl(0 0% 100%)",
                  borderColor: "hsl(0 0% 100% / 0.2)",
                  backgroundColor: "hsl(0 0% 100% / 0.05)",
                }}
              >
                Наши услуги
              </Link>
            </div>
          </ScrollReveal>

          {/* Trust indicators */}
          <ScrollReveal delay={1000}>
            <div className="flex flex-wrap gap-10 mt-20 pt-8" style={{ borderTop: "1px solid hsl(0 0% 100% / 0.1)" }}>
              {[
                { icon: Users, value: "12 847", label: "довольных пациентов" },
                { icon: Award, value: "18 лет", label: "опыта работы" },
                { icon: Shield, value: "5 лет", label: "гарантия на работу" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "hsl(0 0% 100% / 0.08)", backdropFilter: "blur(4px)" }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: "hsl(168 76% 55%)" }} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold" style={{ color: "hsl(0 0% 100%)" }}>{item.value}</p>
                    <p className="text-sm" style={{ color: "hsl(0 0% 100% / 0.6)" }}>{item.label}</p>
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
