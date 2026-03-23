import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "implants",
    label: "Имплантация",
    items: [
      { name: "Консультация имплантолога", price: "Бесплатно", unit: "" },
      { name: "Имплант Straumann (Швейцария)", price: "от 55 000", unit: "₽" },
      { name: "Имплант Nobel Biocare (Швеция)", price: "от 65 000", unit: "₽" },
      { name: "Имплант Osstem (Корея)", price: "от 35 000", unit: "₽" },
      { name: "Коронка на имплант (металлокерамика)", price: "от 25 000", unit: "₽" },
      { name: "Коронка на имплант (диоксид циркония)", price: "от 40 000", unit: "₽" },
      { name: "All-on-4 (всё включено)", price: "от 280 000", unit: "₽" },
      { name: "Синус-лифтинг", price: "от 30 000", unit: "₽" },
      { name: "Костная пластика", price: "от 25 000", unit: "₽" },
    ],
  },
  {
    id: "veneers",
    label: "Виниры",
    items: [
      { name: "Консультация эстетиста", price: "Бесплатно", unit: "" },
      { name: "Винир E-max (1 зуб)", price: "от 35 000", unit: "₽" },
      { name: "Винир композитный (1 зуб)", price: "от 12 000", unit: "₽" },
      { name: "Люминир (1 зуб)", price: "от 45 000", unit: "₽" },
      { name: "Диагностический wax-up", price: "от 5 000", unit: "₽" },
      { name: "Временные виниры (1 зуб)", price: "от 3 000", unit: "₽" },
    ],
  },
  {
    id: "orthodontics",
    label: "Ортодонтия",
    items: [
      { name: "Консультация ортодонта", price: "Бесплатно", unit: "" },
      { name: "Элайнеры (полный курс)", price: "от 180 000", unit: "₽" },
      { name: "Брекеты металлические", price: "от 45 000", unit: "₽" },
      { name: "Брекеты керамические", price: "от 65 000", unit: "₽" },
      { name: "Брекеты Damon", price: "от 75 000", unit: "₽" },
      { name: "Ретейнер", price: "от 5 000", unit: "₽" },
    ],
  },
  {
    id: "treatment",
    label: "Лечение",
    items: [
      { name: "Осмотр + план лечения", price: "Бесплатно", unit: "" },
      { name: "Лечение кариеса", price: "от 5 000", unit: "₽" },
      { name: "Лечение пульпита (1 канал)", price: "от 8 000", unit: "₽" },
      { name: "Лечение пульпита (3 канала)", price: "от 15 000", unit: "₽" },
      { name: "Лечение под микроскопом", price: "от 12 000", unit: "₽" },
      { name: "Художественная реставрация", price: "от 8 000", unit: "₽" },
    ],
  },
  {
    id: "hygiene",
    label: "Гигиена",
    items: [
      { name: "Профессиональная гигиена полости рта", price: "от 6 000", unit: "₽" },
      { name: "Отбеливание ZOOM 4", price: "от 25 000", unit: "₽" },
      { name: "Отбеливание Amazing White", price: "от 15 000", unit: "₽" },
      { name: "Фторирование (обе челюсти)", price: "от 2 000", unit: "₽" },
      { name: "Air Flow", price: "от 4 000", unit: "₽" },
    ],
  },
  {
    id: "surgery",
    label: "Хирургия",
    items: [
      { name: "Удаление зуба простое", price: "от 3 000", unit: "₽" },
      { name: "Удаление зуба сложное", price: "от 7 000", unit: "₽" },
      { name: "Удаление зуба мудрости", price: "от 10 000", unit: "₽" },
      { name: "Пластика десны", price: "от 8 000", unit: "₽" },
      { name: "Резекция верхушки корня", price: "от 12 000", unit: "₽" },
    ],
  },
];

export const PriceTable = () => {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Стоимость</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-4">
              Прайс-лист
            </h2>
            <p className="text-muted-foreground text-lg">
              Фиксированные цены без скрытых доплат. Окончательная стоимость определяется после консультации.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Tabs defaultValue="implants" className="w-full">
            <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0 mb-8">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary transition-all"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                <div className="bg-background rounded-2xl shadow-card overflow-hidden">
                  <div className="hidden md:grid grid-cols-[1fr_auto_auto] gap-4 px-6 py-4 bg-muted border-b border-border">
                    <span className="text-sm font-semibold text-foreground">Услуга</span>
                    <span className="text-sm font-semibold text-foreground text-right min-w-[120px]">Стоимость</span>
                    <span className="min-w-[120px]" />
                  </div>
                  {cat.items.map((item, i) => (
                    <div
                      key={item.name}
                      className={`grid md:grid-cols-[1fr_auto_auto] gap-2 md:gap-4 px-6 py-4 items-center ${
                        i < cat.items.length - 1 ? "border-b border-border" : ""
                      } hover:bg-muted/50 transition-colors`}
                    >
                      <span className="text-foreground font-medium">{item.name}</span>
                      <span className="text-primary font-bold text-right min-w-[120px]">
                        {item.price} {item.unit}
                      </span>
                      <div className="min-w-[120px] flex justify-end">
                        <Link
                          to="/contacts"
                          className="text-xs font-semibold text-accent hover:text-accent/80 transition-colors"
                        >
                          Записаться →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-8 p-6 bg-background rounded-2xl shadow-card flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0 mt-1.5 md:mt-0" />
            <p className="text-muted-foreground text-sm flex-1">
              Цены указаны в рублях. Точная стоимость лечения определяется после осмотра и диагностики.
              Возможна рассрочка 0% до 24 месяцев.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
