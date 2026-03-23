import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { X } from "lucide-react";

const galleryItems = {
  interior: [
    { src: "/placeholder.svg", alt: "Ресепшн клиники Мисс Стоматология" },
    { src: "/placeholder.svg", alt: "Зона ожидания" },
    { src: "/placeholder.svg", alt: "Кабинет лечения" },
    { src: "/placeholder.svg", alt: "Стерилизационная" },
    { src: "/placeholder.svg", alt: "Рентген-кабинет" },
    { src: "/placeholder.svg", alt: "Холл второго этажа" },
  ],
  team: [
    { src: "/placeholder.svg", alt: "Команда врачей" },
    { src: "/placeholder.svg", alt: "Анастасия Петрова — главврач" },
    { src: "/placeholder.svg", alt: "Дмитрий Орлов — ортопед" },
    { src: "/placeholder.svg", alt: "Мария Волкова — ортодонт" },
  ],
  equipment: [
    { src: "/placeholder.svg", alt: "3D-томограф Planmeca" },
    { src: "/placeholder.svg", alt: "Микроскоп Carl Zeiss" },
    { src: "/placeholder.svg", alt: "Цифровой сканер iTero" },
    { src: "/placeholder.svg", alt: "Лазер Biolase" },
  ],
};

type Category = keyof typeof galleryItems;

export const Gallery = () => {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Галерея</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-4">
              Наша клиника
            </h2>
            <p className="text-muted-foreground text-lg">
              Современный интерьер, передовое оборудование и команда профессионалов.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Tabs defaultValue="interior" className="w-full">
            <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0 mb-8">
              <TabsTrigger value="interior" className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary transition-all">
                Интерьер
              </TabsTrigger>
              <TabsTrigger value="team" className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary transition-all">
                Команда
              </TabsTrigger>
              <TabsTrigger value="equipment" className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary transition-all">
                Оборудование
              </TabsTrigger>
            </TabsList>

            {(Object.keys(galleryItems) as Category[]).map((cat) => (
              <TabsContent key={cat} value={cat}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryItems[cat].map((item) => (
                    <button
                      key={item.alt}
                      onClick={() => setLightbox(item)}
                      className="aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </button>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[85vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
