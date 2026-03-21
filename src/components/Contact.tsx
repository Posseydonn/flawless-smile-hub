import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { MapPin, Phone, Clock, Send } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", service: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", service: "" });
  };

  return (
    <section id="contacts" className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <ScrollReveal animation="left">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Контакты</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-[1.1] mb-8">
              Запишитесь на бесплатную консультацию
            </h2>

            <div className="space-y-6 mb-10">
              {[
                { icon: MapPin, label: "Адрес", value: "Москва, ул. Тверская, д. 12, стр. 1" },
                { icon: Phone, label: "Телефон", value: "+7 (495) 123-45-67" },
                { icon: Clock, label: "Режим работы", value: "Пн–Сб: 9:00–21:00, Вс: 10:00–18:00" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{item.label}</p>
                    <p className="text-foreground font-medium mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-background rounded-xl p-4 shadow-card flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium text-foreground">Без боли</span>
              </div>
              <div className="bg-background rounded-xl p-4 shadow-card flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium text-foreground">Фиксированная стоимость</span>
              </div>
              <div className="bg-background rounded-xl p-4 shadow-card flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium text-foreground">Гарантия результата</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="right">
            <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 shadow-elevated">
              <h3 className="text-xl font-bold text-foreground mb-6">Онлайн-запись</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Ваше имя</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    placeholder="Введите имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Телефон</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Услуга</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  >
                    <option value="">Выберите услугу</option>
                    <option value="implants">Имплантация</option>
                    <option value="veneers">Виниры</option>
                    <option value="braces">Брекеты / Элайнеры</option>
                    <option value="hygiene">Профгигиена</option>
                    <option value="treatment">Лечение зубов</option>
                    <option value="consultation">Консультация</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-all duration-200 hover:bg-clinic-red-dark flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-4 h-4" />
                  Записаться на приём
                </button>
              </div>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
