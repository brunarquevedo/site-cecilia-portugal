import { Users, CalendarDays, Monitor, HeartHandshake } from "lucide-react";
import { whatsappUrl } from "../constants";

export default function GroupSection() {
  const details = [
    { icon: CalendarDays, label: "3 meses de percurso, com encontros semanais" },
    { icon: Monitor, label: "Totalmente online, de onde você estiver" },
    { icon: Users, label: "Grupo pequeno, de até 5 participantes" },
    { icon: HeartHandshake, label: "Investimento mais acessível que o individual" },
  ];

  return (
    <section id="grupo" className="bg-[#DDD5C6]/40 py-20 sm:py-24 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F4EC] border border-[#DDD5C6] rounded-lg p-8 sm:p-12 md:p-14 shadow-sm space-y-8">

          <div className="text-center space-y-3">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#8A936F] font-medium block">
              GRUPO TERAPÊUTICO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.6rem] text-[#5C5853] font-normal leading-snug tracking-tight">
              Grupo para parar de fumar
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#5C5853]/85 font-light leading-relaxed text-center max-w-2xl mx-auto">
            Encontros semanais online, por três meses, em um grupo de até cinco pessoas. Um espaço para dividir dificuldades e conquistas com quem está vivendo o mesmo processo — com o mesmo cuidado do acompanhamento individual.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2">
            {details.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-start space-x-3 bg-[#EEE8DA]/70 border border-[#DDD5C6]/70 rounded-md px-5 py-4"
              >
                <Icon size={18} className="text-[#8A936F] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-[#5C5853]/90 font-light leading-snug">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4 pt-2">
            <a
              href={whatsappUrl(
                "Olá, Dra. Cecília! Vi o site e gostaria de saber como entrar no grupo para parar de fumar."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#8A936F] text-white hover:bg-[#6F7758] px-8 py-3.5 rounded-sm font-sans uppercase text-xs tracking-[0.2em] font-medium transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Quero saber sobre a próxima turma
            </a>
            <p className="font-sans text-sm text-[#5C5853]/70 font-light italic">
              Prefere um processo só seu? O acompanhamento individual começa a qualquer momento.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
