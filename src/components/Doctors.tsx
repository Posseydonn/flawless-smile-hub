import { ScrollReveal } from "./ScrollReveal";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

const doctors = [
  {
    name: "Анастасия Петрова",
    role: "Главный врач, имплантолог",
    experience: "15 лет опыта",
    image: doctor1,
    achievements: ["Более 3 000 установленных имплантов", "Сертификат Straumann", "Член EAED"],
  },
  {
    name: "Дмитрий Орлов",
    role: "Ортопед, эстетист",
    experience: "12 лет опыта",
    image: doctor2,
    achievements: ["Специалист по винирам E-max", "Обучение в Германии", "Автор 20+ публикаций"],
  },
  {
    name: "Мария Волкова",
    role: "Ортодонт",
    experience: "10 лет опыта",
    image: doctor3,
    achievements: ["Invisalign Diamond Provider", "Более 1 500 случаев", "Кандидат мед. наук"],
  },
];

export const Doctors = () => {
  return (
    <section id="doctors" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Наша команда</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
              Врачи, которым доверяют
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doc, i) => (
            <ScrollReveal key={doc.name} delay={i * 120} animation={i === 0 ? "left" : i === 2 ? "right" : "up"}>
              <div className="group relative overflow-hidden rounded-2xl bg-background shadow-card hover:shadow-card-hover transition-shadow duration-300">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">{doc.name}</h3>
                  <p className="text-primary font-medium text-sm mt-1">{doc.role}</p>
                  <p className="text-muted-foreground text-sm mt-1">{doc.experience}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {doc.achievements.map((a) => (
                      <span
                        key={a}
                        className="inline-block rounded-full bg-clinic-teal-light px-3 py-1 text-xs font-medium text-accent"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
