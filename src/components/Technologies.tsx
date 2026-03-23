import { ScrollReveal } from "./ScrollReveal";
import { Cpu, Microscope, ScanLine, Zap } from "lucide-react";

const techs = [
  {
    icon: Cpu,
    title: "3D-томограф Planmeca",
    desc: "Трёхмерная диагностика с минимальной дозой излучения. Полная картина за 20 секунд — для точного планирования имплантации и лечения.",
  },
  {
    icon: Zap,
    title: "Лазер Biolase",
    desc: "Лечение без сверления и боли. Лазер стерилизует, заживляет быстрее и позволяет проводить операции без скальпеля.",
  },
  {
    icon: Microscope,
    title: "Микроскоп Carl Zeiss",
    desc: "Увеличение до x25 — врач видит каждую деталь. Микроскопное лечение каналов повышает успех с 60% до 95%.",
  },
  {
    icon: ScanLine,
    title: "Цифровой сканер iTero",
    desc: "Цифровые оттиски без слепочных масс. 3D-модель челюсти за 3 минуты — комфортно, точно, без рвотного рефлекса.",
  },
];

export const Technologies = () => (
  <section className="py-24 md:py-32 bg-surface">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Оборудование</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-4">
            Технологии мирового уровня
          </h2>
          <p className="text-muted-foreground text-lg">
            Мы инвестируем в лучшее оборудование, чтобы ваше лечение было точным, быстрым и комфортным.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6">
        {techs.map((tech) => (
          <ScrollReveal key={tech.title}>
            <div className="bg-background rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full group">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <tech.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{tech.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{tech.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
