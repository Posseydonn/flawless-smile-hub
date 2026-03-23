import { ScrollReveal } from "./ScrollReveal";
import { ShieldCheck, Award, FileCheck } from "lucide-react";

const certificates = [
  {
    category: "Лицензия клиники",
    icon: ShieldCheck,
    items: [
      { title: "Лицензия на осуществление медицинской деятельности", number: "Л041-01137-77/00368452", date: "от 15.03.2020" },
    ],
  },
  {
    category: "Сертификаты врачей",
    icon: Award,
    items: [
      { title: "Петрова А.С. — сертификат по хирургической стоматологии", number: "", date: "2023" },
      { title: "Петрова А.С. — сертификат Straumann Pro Arch", number: "", date: "2024" },
      { title: "Орлов Д.В. — сертификат по ортопедической стоматологии", number: "", date: "2022" },
      { title: "Волкова М.И. — сертификат Invisalign Provider", number: "", date: "2024" },
    ],
  },
  {
    category: "Партнёрства",
    icon: FileCheck,
    items: [
      { title: "Официальный партнёр Straumann (Швейцария)", number: "", date: "" },
      { title: "Сертифицированный провайдер Invisalign", number: "", date: "" },
      { title: "Партнёр Nobel Biocare", number: "", date: "" },
      { title: "Авторизованный центр Damon System", number: "", date: "" },
    ],
  },
];

export const Certificates = () => (
  <section className="py-24 md:py-32 bg-surface">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Документы</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-4">
            Лицензии и сертификаты
          </h2>
          <p className="text-muted-foreground text-lg">
            Все документы подтверждают нашу квалификацию и право на медицинскую деятельность.
          </p>
        </div>
      </ScrollReveal>

      <div className="space-y-8">
        {certificates.map((group) => (
          <ScrollReveal key={group.category}>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <group.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{group.category}</h3>
              </div>
              <div className="space-y-4">
                {group.items.map((item) => (
                  <div key={item.title} className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 py-3 border-b border-border last:border-0">
                    <span className="text-foreground font-medium flex-1">{item.title}</span>
                    {item.number && (
                      <span className="text-muted-foreground text-sm font-mono">{item.number}</span>
                    )}
                    {item.date && (
                      <span className="text-muted-foreground text-sm">{item.date}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
