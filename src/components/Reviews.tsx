import { ScrollReveal } from "./ScrollReveal";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ольга М.",
    text: "Лечу зубы только здесь уже 5 лет. Никакой боли, всё предсказуемо, и результат всегда отличный. Особенно благодарна Анастасии Петровой — золотые руки!",
    rating: 5,
    service: "Имплантация",
  },
  {
    name: "Алексей К.",
    text: "Поставил 6 виниров. Результат превзошёл все ожидания. Выглядят абсолютно натурально. Коллеги думают, что это мои настоящие зубы.",
    rating: 5,
    service: "Виниры",
  },
  {
    name: "Марина С.",
    text: "Дочка носит элайнеры уже 6 месяцев. Зубки заметно выровнялись. Спасибо Марии Волковой за индивидуальный подход к ребёнку!",
    rating: 5,
    service: "Ортодонтия",
  },
  {
    name: "Игорь В.",
    text: "Боялся стоматологов всю жизнь. Здесь мне впервые было комфортно. Сделали полную гигиену и вылечили 3 зуба за 2 визита.",
    rating: 5,
    service: "Лечение",
  },
];

export const Reviews = () => {
  return (
    <section id="reviews" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Отзывы</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
              Что говорят наши пациенты
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.name} delay={i * 100}>
              <div className="bg-background rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed flex-1 mb-6">«{review.text}»</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-semibold text-foreground text-sm">{review.name}</span>
                  <span className="text-xs font-medium text-accent">{review.service}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-background rounded-full px-6 py-3 shadow-card">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">4.9 из 5</span>
              <span className="text-xs text-muted-foreground">на основе 847 отзывов</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
