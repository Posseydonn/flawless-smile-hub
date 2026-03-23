import { useCallback, useEffect, useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import smileAfter from "@/assets/smile-after.jpg";
import useEmblaCarousel from "embla-carousel-react";

const cases = [
  { title: "Анна, 34 года — Виниры", desc: "«Всю жизнь стеснялась улыбаться. Теперь не могу перестать! Врачи подобрали идеальный оттенок.»", result: "8 виниров за 2 визита", image: smileAfter },
  { title: "Сергей, 45 лет — Имплантация", desc: "«Потерял два зуба 5 лет назад. Импланты поставили за 1 час, через 3 месяца — как родные.»", result: "2 импланта Straumann", image: smileAfter },
  { title: "Елена, 28 лет — Элайнеры", desc: "«Носила элайнеры 10 месяцев. Никто не замечал! Результат — ровные зубы без брекетов.»", result: "10 месяцев лечения", image: smileAfter },
  { title: "Михаил, 52 года — Протезирование", desc: "«Полное восстановление зубного ряда. Жую, улыбаюсь — всё как 20 лет назад.»", result: "All-on-4 за 1 день", image: smileAfter },
  { title: "Ирина, 39 лет — Отбеливание", desc: "«Зубы стали на 8 тонов светлее за 1 час. Безболезненно и эффект держится уже год!»", result: "ZOOM-отбеливание", image: smileAfter },
];

export const BeforeAfter = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="results" className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Результаты</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
                Реальные результаты наших пациентов
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canPrev}
                className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center transition-colors hover:bg-muted disabled:opacity-30"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canNext}
                className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center transition-colors hover:bg-muted disabled:opacity-30"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {cases.map((item) => (
              <div
                key={item.title}
                className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_32%] min-w-0"
              >
                <div className="bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{item.desc}</p>
                    <span className="text-xs font-semibold text-accent">{item.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile nav dots */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-6">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};
