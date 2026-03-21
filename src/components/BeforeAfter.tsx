import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import smileAfter from "@/assets/smile-after.jpg";

export const BeforeAfter = () => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="results" className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Результаты</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
              Реальные результаты наших пациентов
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="left">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-[4/3]">
              <img
                src={smileAfter}
                alt="Результат лечения — красивая улыбка"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: "linear-gradient(to top, hsl(0 0% 0% / 0.6), transparent)" }}>
                <p className="text-sm font-semibold" style={{ color: "hsl(0 0% 100%)" }}>Виниры E-max, 8 единиц</p>
                <p className="text-xs mt-1" style={{ color: "hsl(0 0% 100% / 0.7)" }}>Срок лечения: 2 недели</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="right">
            <div className="space-y-8">
              {[
                { title: "Анна, 34 года — Виниры", desc: "«Всю жизнь стеснялась улыбаться. Теперь не могу перестать! Врачи подобрали идеальный оттенок.»", result: "8 виниров за 2 визита" },
                { title: "Сергей, 45 лет — Имплантация", desc: "«Потерял два зуба 5 лет назад. Импланты поставили за 1 час, через 3 месяца — как родные.»", result: "2 импланта Straumann" },
                { title: "Елена, 28 лет — Элайнеры", desc: "«Носила элайнеры 10 месяцев. Никто не замечал! Результат — ровные зубы без брекетов.»", result: "10 месяцев лечения" },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="bg-background rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
                >
                  <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.desc}</p>
                  <span className="text-xs font-semibold text-accent">{item.result}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
