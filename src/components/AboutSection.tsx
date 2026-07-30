import { whatsappUrl } from "../constants";
import { sobreMim, livroTronco } from "../assets/images";

export default function AboutSection() {
  return (
    <section id="sobre" className="bg-[#EEE8DA] py-20 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background large watermark text effect as seen in reference image */}
      <div className="absolute top-12 left-0 right-0 overflow-hidden pointer-events-none select-none opacity-20">
        <span className="font-serif text-[7rem] sm:text-[10rem] md:text-[14rem] text-[#8A936F] whitespace-nowrap leading-none font-light italic tracking-widest pl-4">
          Acolhimento &nbsp; Cuidado &nbsp; Acolhimento
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Side: Overlapping Editorial Photos */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Main taller portrait */}
              <div className="relative z-10 w-4/5 ml-auto rounded-lg overflow-hidden shadow-md border-4 border-[#F7F4EC]">
                <img
                  src={sobreMim}
                  alt="Dra Cecília Portugal em seu consultório"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Smaller overlapping offset image */}
              <div className="absolute -bottom-8 -left-2 sm:-left-6 z-20 w-3/5 rounded-lg overflow-hidden shadow-xl border-4 border-[#F7F4EC]">
                <img
                  src={livroTronco}
                  alt="Livro Memórias de uma ex-futura fumante"
                  className="w-full h-[220px] sm:h-[260px] object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="lg:col-span-7 space-y-6 pt-6 lg:pt-0">
            <div className="space-y-2">
              <span className="font-script text-3xl sm:text-4xl text-[#8A936F] block">
                Olá, sou Cecília
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#5C5853] font-normal tracking-tight">
                Sobre mim
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#5C5853]/90 font-light leading-relaxed">
              <p>
                Minha primeira graduação foi Terapia Ocupacional — e minha primeira experiência de cuidado com o outro. Trabalhei em Juiz de Fora, atendendo crianças e adultos com problemas neurológicos.
              </p>
              <p>
                Depois me formei em medicina, em 2013, e me mudei para o Rio de Janeiro para a residência em medicina de família e comunidade — a área onde encontrei mais sentido no meu dia a dia. Foram mais de dez anos no território de Manguinhos, cuidando das mesmas pessoas e famílias ao longo do tempo. Nesse período fiz o mestrado em Saúde da Família na FIOCRUZ e fui preceptora do programa de residência da UFRJ/ENSP, acompanhando a formação de médicos que também queriam exercer um cuidado comprometido e acolhedor.
              </p>
              <p>
                Mas sempre senti falta da TO. Depois de anos dedicada à medicina de família, encontrei a forma de reunir as duas: um projeto de cuidado para quem quer parar de fumar. E essa escolha tem raízes na minha própria história — o cigarro fez parte da minha vida até 2006, e eu só consegui deixá-lo com ajuda. É daí que vem a minha convicção de que esse caminho é difícil, mas totalmente possível.
              </p>
            </div>

            <div className="pt-4 space-y-4">
              <p className="font-serif italic text-lg sm:text-xl text-[#6F7758] leading-relaxed">
                Se você já se sente pronto para parar de fumar — ou ainda está procurando por onde começar —, podemos conversar.
              </p>
              <a
                href={whatsappUrl(
                  "Olá, Dra. Cecília! Vi o site e gostaria de agendar uma conversa sobre o acompanhamento para parar de fumar."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#6F7758] text-white hover:bg-[#5C5853] px-8 py-3.5 rounded-sm font-sans text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Agendar uma conversa no WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
