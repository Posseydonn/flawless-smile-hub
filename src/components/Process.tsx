import { ScrollReveal } from "./ScrollReveal";

const steps = [
  { number: "01", title: "Консультация", desc: "Бесплатный осмотр и знакомство с врачом. Обсудим ваши пожелания и ожидания." },
  { number: "02", title: "Диагностика", desc: "3D-снимок и полное обследование. Составим детальную карту здоровья полости рта." },
  { number: "03", title: "План лечения", desc: "Индивидуальный план с фиксированной стоимостью. Никаких сюрпризов." },
  { number: "04", title: "Лечение", desc: "Безболезненные процедуры с использованием современных технологий." },
  { number: "05", title: "Результат", desc: "Идеальная улыбка и гарантия на все виды работ. Поддержка после лечения." },
];

export const Process = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Как мы работаем</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
              5 шагов к идеальной улыбке
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 120} animation={i % 2 === 0 ? "left" : "right"}>
              <div className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-background rounded-xl p-6 shadow-card inline-block max-w-sm">
                    <span className="text-3xl font-bold text-primary/20">{step.number}</span>
                    <h3 className="text-lg font-bold text-foreground mt-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-4 h-4 rounded-full bg-primary shrink-0 mt-8 relative z-10 ring-4 ring-background" />
                <div className="flex-1 hidden md:block" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
