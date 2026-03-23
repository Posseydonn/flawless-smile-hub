import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Link } from "react-router-dom";
import { Clock, Tag } from "lucide-react";

const allTags = ["Имплантация", "Виниры", "Гигиена", "Ортодонтия", "Здоровье", "Советы"];

const articles = [
  {
    slug: "bolno-li-stavit-implant",
    title: "Больно ли ставить имплант? Честный ответ стоматолога",
    excerpt: "Разбираем мифы и реальность: как проходит имплантация, какую анестезию используют и что вы будете чувствовать.",
    date: "15 марта 2026",
    readTime: "5 мин",
    tags: ["Имплантация", "Советы"],
    image: "/placeholder.svg",
  },
  {
    slug: "skolko-sluzhat-viniry",
    title: "Сколько служат виниры? Полный гид по срокам и уходу",
    excerpt: "E-max, композитные, люминиры — сравниваем сроки службы и даём рекомендации по уходу за винирами.",
    date: "10 марта 2026",
    readTime: "7 мин",
    tags: ["Виниры"],
    image: "/placeholder.svg",
  },
  {
    slug: "profgigiena-zachem",
    title: "Зачем нужна профгигиена и как часто её делать?",
    excerpt: "Профессиональная чистка зубов — это не роскошь, а необходимость. Объясняем почему и как часто.",
    date: "5 марта 2026",
    readTime: "4 мин",
    tags: ["Гигиена", "Здоровье"],
    image: "/placeholder.svg",
  },
  {
    slug: "elaineri-ili-brekety",
    title: "Элайнеры или брекеты: что выбрать в 2026 году?",
    excerpt: "Сравниваем стоимость, комфорт, сроки лечения и результат двух популярных методов выравнивания зубов.",
    date: "28 февраля 2026",
    readTime: "6 мин",
    tags: ["Ортодонтия", "Советы"],
    image: "/placeholder.svg",
  },
  {
    slug: "kak-vybrat-stomatologa",
    title: "Как выбрать стоматолога: 7 признаков хорошей клиники",
    excerpt: "На что обращать внимание при выборе клиники и врача? Чек-лист от главного врача.",
    date: "20 февраля 2026",
    readTime: "5 мин",
    tags: ["Советы", "Здоровье"],
    image: "/placeholder.svg",
  },
  {
    slug: "otbelivanie-doma-ili-v-klinike",
    title: "Отбеливание дома или в клинике: что эффективнее?",
    excerpt: "Сравниваем домашние полоски, каппы и профессиональное отбеливание ZOOM. Плюсы и минусы каждого метода.",
    date: "15 февраля 2026",
    readTime: "6 мин",
    tags: ["Гигиена", "Советы"],
    image: "/placeholder.svg",
  },
];

export const Blog = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const filtered = activeTag ? articles.filter((a) => a.tags.includes(activeTag)) : articles;

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Блог</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-4">
              Полезные статьи
            </h2>
            <p className="text-muted-foreground text-lg">
              Отвечаем на вопросы, развеиваем мифы и помогаем заботиться о здоровье зубов.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveTag(null)}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                !activeTag
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground border-border hover:border-primary/50"
              }`}
            >
              Все
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                  activeTag === tag
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-border hover:border-primary/50"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <ScrollReveal key={article.slug}>
              <Link
                to={`/blog/${article.slug}`}
                className="bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full flex flex-col group"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{article.excerpt}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold uppercase tracking-wide text-accent bg-accent/10 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// Individual blog article page (placeholder template)
export const BlogArticle = () => (
  <section className="py-24 md:py-32">
    <div className="container mx-auto px-6 max-w-3xl">
      <Link to="/blog" className="text-sm text-accent hover:text-accent/80 mb-8 inline-block">
        ← Вернуться к статьям
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Статья</h1>
      <p className="text-muted-foreground leading-relaxed">
        Содержимое статьи будет добавлено позже. Здесь будет развёрнутый текст с изображениями, советами врачей
        и ответами на частые вопросы пациентов.
      </p>
      <div className="mt-12 p-6 bg-surface rounded-2xl">
        <h3 className="font-bold text-foreground mb-2">Нужна консультация?</h3>
        <p className="text-muted-foreground text-sm mb-4">Запишитесь на бесплатный осмотр — ответим на все вопросы лично.</p>
        <Link to="/contacts" className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
          Записаться
        </Link>
      </div>
    </div>
  </section>
);
