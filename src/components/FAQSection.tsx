import { ScrollReveal } from "./ScrollReveal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    id: "general",
    label: "Общие",
    items: [
      { q: "Сколько стоит бесплатная консультация?", a: "Первичная консультация и осмотр у нас абсолютно бесплатны. Врач проведёт осмотр, составит план лечения и ответит на все ваши вопросы. Дополнительная 3D-диагностика — в подарок при записи через сайт." },
      { q: "Работаете ли вы с ОМС?", a: "Мы специализируемся на премиальной стоматологии и работаем по ДМС. Также у нас есть собственные программы рассрочки 0% до 24 месяцев." },
      { q: "Можно ли лечить зубы во время беременности?", a: "Да, во втором триместре можно проводить большинство стоматологических процедур. Мы используем безопасные материалы и анестезию, разрешённые при беременности." },
      { q: "Есть ли парковка рядом с клиникой?", a: "Да, рядом с клиникой есть бесплатная наземная парковка на 15 мест, а также подземный паркинг в соседнем здании." },
    ],
  },
  {
    id: "implants",
    label: "Имплантация",
    items: [
      { q: "Больно ли ставить импланты?", a: "Нет. Процедура проходит под местной анестезией, при желании — под седацией (медикаментозный сон). Вы не почувствуете ничего. После операции возможен лёгкий дискомфорт 2–3 дня, который снимается обычным обезболивающим." },
      { q: "Сколько длится приживление импланта?", a: "На нижней челюсти — 2–3 месяца, на верхней — 3–4 месяца. При методике All-on-4 временные зубы устанавливаются в день операции." },
      { q: "Какая гарантия на импланты?", a: "Мы даём 5 лет гарантии на работу врача. Производители имплантов Straumann и Nobel Biocare предоставляют пожизненную гарантию на сам имплант." },
    ],
  },
  {
    id: "veneers",
    label: "Виниры",
    items: [
      { q: "Сколько служат виниры?", a: "Виниры E-max служат 15–20 лет при правильном уходе. Композитные виниры — 5–7 лет. Мы даём подробные рекомендации по уходу каждому пациенту." },
      { q: "Нужно ли стачивать зубы под виниры?", a: "Минимальное препарирование — 0,3–0,5 мм. Это сохраняет здоровую эмаль. В некоторых случаях устанавливаем люминиры вообще без обточки." },
      { q: "Можно ли есть всё с винирами?", a: "Да, виниры E-max выдерживают нормальную жевательную нагрузку. Рекомендуем избегать откусывания очень твёрдых предметов (орехи в скорлупе, лёд)." },
    ],
  },
  {
    id: "orthodontics",
    label: "Ортодонтия",
    items: [
      { q: "Элайнеры или брекеты — что лучше?", a: "Зависит от клинической ситуации. Элайнеры невидимы и комфортнее, но подходят не для всех случаев. Брекеты эффективнее при сложных патологиях прикуса. Ортодонт подберёт оптимальный вариант." },
      { q: "Сколько длится лечение элайнерами?", a: "Средний срок — 8–14 месяцев. Точный срок определяется после 3D-сканирования и составления плана лечения." },
    ],
  },
  {
    id: "payment",
    label: "Оплата",
    items: [
      { q: "Есть ли рассрочка?", a: "Да, мы предоставляем рассрочку 0% до 24 месяцев без переплат. Оформление занимает 15 минут прямо в клинике." },
      { q: "Можно ли вернуть налоговый вычет?", a: "Да! Стоматологические услуги подлежат налоговому вычету 13%. Мы предоставляем все необходимые документы. Максимальная сумма вычета — 15 600 ₽ в год." },
      { q: "Фиксируете ли вы цену лечения?", a: "Да, после диагностики мы составляем план лечения с фиксированной стоимостью. Цена не изменится в процессе лечения." },
    ],
  },
];

export const FAQSection = () => (
  <section className="py-24 md:py-32 bg-surface">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-4">
            Частые вопросы
          </h2>
          <p className="text-muted-foreground text-lg">
            Ответы на самые популярные вопросы наших пациентов.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0 mb-8">
            {faqCategories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary transition-all"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {faqCategories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <Accordion type="single" collapsible className="space-y-3">
                {cat.items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`${cat.id}-${i}`}
                    className="bg-background rounded-xl border border-border px-6 shadow-card"
                  >
                    <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </ScrollReveal>
    </div>
  </section>
);
