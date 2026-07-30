import { logo } from "../assets/images";

export default function StatementSection() {
  return (
    <section className="bg-[#F7F4EC] py-16 sm:py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 sm:space-y-10">
        {/* Emblem logo mark above */}
        <div className="flex justify-center">
          <img
            src={logo}
            alt="Dra Cecília Portugal"
            className="h-32 sm:h-40 md:h-44 w-auto object-contain"
          />
        </div>

        {/* Small subtitle label */}
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#8A936F] font-medium">
          ACOMPANHAMENTO ESPECIALIZADO
        </p>

        {/* Main statement */}
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-[#5C5853] font-normal leading-snug tracking-tight max-w-3xl mx-auto">
          Parar de fumar não depende apenas de força de vontade.
        </h2>

        {/* Supporting text */}
        <div className="space-y-6 text-base sm:text-lg text-[#5C5853]/85 font-light leading-relaxed max-w-2xl mx-auto">
          <p>
            O cigarro pode estar ligado à dependência física da nicotina, mas também às emoções, aos hábitos, à rotina e às situações vividas no dia a dia. Por isso, o tratamento precisa considerar a pessoa por inteiro.
          </p>
          <p>
            Como médica de família e comunidade e terapeuta ocupacional, ofereço um acompanhamento clínico, emocional e comportamental, construído a partir da história, das necessidades e do momento de cada pessoa.
          </p>
        </div>

        {/* Closing highlighted line */}
        <div className="pt-4 border-t border-[#DDD5C6]/50 max-w-md mx-auto">
          <p className="font-serif italic text-xl sm:text-2xl text-[#6F7758] font-normal tracking-wide">
            "Entre a vontade e a mudança, existe acompanhamento."
          </p>
        </div>
      </div>
    </section>
  );
}
