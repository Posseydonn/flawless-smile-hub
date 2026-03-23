import { useState, useEffect } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Link } from "react-router-dom";
import { Clock, Gift, Sparkles, Percent } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const useCountdown = (targetDate: Date): TimeLeft => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = Math.max(0, targetDate.getTime() - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
};

const promotions = [
  {
    icon: Gift,
    title: "Бесплатная 3D-диагностика",
    desc: "Компьютерная томография на аппарате Planmeca — в подарок при записи на консультацию. Точная диагностика для точного лечения.",
    badge: "Подарок",
    deadline: new Date(Date.now() + 15 * 86400000),
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Percent,
    title: "Виниры E-max — скидка 15%",
    desc: "При установке от 4 виниров E-max — скидка 15% на каждый. Голливудская улыбка по специальной цене.",
    badge: "−15%",
    deadline: new Date(Date.now() + 22 * 86400000),
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Sparkles,
    title: "Профгигиена + отбеливание",
    desc: "Комплексная чистка Air Flow + отбеливание Amazing White со скидкой 20%. Два шага к белоснежной улыбке.",
    badge: "Комбо",
    deadline: new Date(Date.now() + 10 * 86400000),
    color: "bg-accent/10 text-accent",
  },
];

const CountdownBlock = ({ deadline }: { deadline: Date }) => {
  const t = useCountdown(deadline);
  const units = [
    { val: t.days, label: "дн" },
    { val: t.hours, label: "ч" },
    { val: t.minutes, label: "мин" },
    { val: t.seconds, label: "сек" },
  ];

  return (
    <div className="flex gap-2 mt-4">
      {units.map((u) => (
        <div key={u.label} className="bg-muted rounded-lg px-2.5 py-1.5 text-center min-w-[44px]">
          <span className="text-foreground font-bold text-sm block">{String(u.val).padStart(2, "0")}</span>
          <span className="text-muted-foreground text-[10px] uppercase">{u.label}</span>
        </div>
      ))}
    </div>
  );
};

export const Promotions = () => (
  <section className="py-24 md:py-32 bg-surface">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Акции</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-4">
            Специальные предложения
          </h2>
          <p className="text-muted-foreground text-lg">
            Воспользуйтесь действующими акциями и получите премиальные услуги по лучшей цене.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {promotions.map((promo) => (
          <ScrollReveal key={promo.title}>
            <div className="bg-background rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${promo.color}`}>
                  <promo.icon className="w-5 h-5" />
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${promo.color}`}>
                  {promo.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{promo.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{promo.desc}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-4">
                <Clock className="w-3.5 h-3.5" />
                <span>Осталось:</span>
              </div>
              <CountdownBlock deadline={promo.deadline} />
              <Link
                to="/contacts"
                className="mt-6 block rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-clinic-red-dark"
              >
                Записаться по акции
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
