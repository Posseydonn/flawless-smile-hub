export const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">D</span>
              </div>
              <span className="font-bold text-lg text-background">DentaPremium</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 100% / 0.5)" }}>
              Премиальная стоматология в центре Москвы. Работаем с 2008 года.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Услуги</h4>
            <div className="space-y-2">
              {["Имплантация", "Виниры", "Ортодонтия", "Профгигиена", "Лечение"].map((s) => (
                <a key={s} href="#services" className="block text-sm transition-colors duration-200" style={{ color: "hsl(0 0% 100% / 0.5)" }}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Информация</h4>
            <div className="space-y-2">
              {["О клинике", "Врачи", "Отзывы", "Блог", "Цены"].map((s) => (
                <a key={s} href="#about" className="block text-sm transition-colors duration-200" style={{ color: "hsl(0 0% 100% / 0.5)" }}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Контакты</h4>
            <div className="space-y-2 text-sm" style={{ color: "hsl(0 0% 100% / 0.5)" }}>
              <p>+7 (495) 123-45-67</p>
              <p>info@dentapremium.ru</p>
              <p>Москва, ул. Тверская, д. 12</p>
              <p>Пн–Сб: 9:00–21:00</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid hsl(0 0% 100% / 0.1)" }}>
          <p className="text-xs" style={{ color: "hsl(0 0% 100% / 0.4)" }}>
            © 2025 DentaPremium. Все права защищены. Лицензия № ЛО-77-01-020134
          </p>
          <p className="text-xs" style={{ color: "hsl(0 0% 100% / 0.4)" }}>
            Политика конфиденциальности
          </p>
        </div>
      </div>
    </footer>
  );
};
