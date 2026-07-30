import { whatsappUrl } from "../constants";
import { therapyRoom } from "../assets/images";

export default function FinalCtaSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={therapyRoom}
          alt="Consultório e acolhimento"
          className="w-full h-full object-cover object-center filter brightness-[0.85]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#5C5853]/30 backdrop-blur-[2px]"></div>
      </div>

      {/* Floating Centered White Content Box matching reference image bottom overlay */}
      <div className="relative z-10 max-w-2xl w-full mx-4 bg-[#F7F4EC]/95 backdrop-blur-md p-8 sm:p-12 md:p-14 rounded-lg border border-[#DDD5C6] shadow-2xl text-center space-y-6">
        <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#8A936F] font-semibold block">
          O PRIMEIRO PASSO
        </span>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#5C5853] font-normal leading-snug tracking-tight">
          Vamos conversar por 30 minutos?
        </h2>

        <p className="font-sans text-sm sm:text-base text-[#5C5853]/80 font-light max-w-lg mx-auto">
          Um bate-papo online, sem compromisso, para eu entender o seu momento, tirar suas dúvidas e pensarmos juntos nos próximos passos.
        </p>

        <div className="pt-2 space-y-3">
          <a
            href={whatsappUrl(
              "Olá, Dra. Cecília! Vi o site e gostaria de agendar uma conversa de 30 minutos."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#8A936F] hover:bg-[#6F7758] text-white px-8 py-3.5 rounded-sm font-sans uppercase text-xs tracking-[0.2em] font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Agendar conversa no WhatsApp
          </a>
          <p className="font-sans text-xs sm:text-sm text-[#5C5853]/70 font-light italic">
            Ou envie sua dúvida pelo formulário abaixo.
          </p>
        </div>
      </div>
    </section>
  );
}
