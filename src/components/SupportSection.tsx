import { whatsappUrl } from "../constants";

export default function SupportSection() {
  return (
    <section className="bg-[#F7F4EC] py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card block, matching the reference layout */}
        <div className="relative bg-[#EEE8DA] rounded-2xl sm:rounded-[28px] overflow-hidden px-6 sm:px-12 lg:px-16 pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

            {/* Left Side: logo mark, indented heading, copy and CTA */}
            <div className="lg:col-span-7">
              {/* Brand mark, offset to the left of the text column */}
              <div className="lg:pl-16">
                <img
                  src="/src/assets/images/logo.png"
                  alt="Dra Cecília Portugal"
                  className="h-24 sm:h-28 lg:h-32 w-auto object-contain"
                />
              </div>

              {/* Indented text column, as in the reference */}
              <div className="lg:pl-40 lg:pr-6 mt-6 sm:mt-8 lg:mt-10">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] text-[#5C5853] font-normal leading-[1.15] tracking-tight">
                  Você não fica sozinho entre as consultas
                </h2>

                <div className="mt-7 sm:mt-8 space-y-6 text-base sm:text-lg text-[#5C5853]/85 font-light leading-[1.85] max-w-xl">
                  <p>
                    Durante todo o acompanhamento, os pacientes contam com suporte por WhatsApp, em horário comercial, para orientações sobre o processo e para os momentos de maior dificuldade.
                  </p>
                  <p className="font-serif italic text-xl text-[#6F7758] leading-relaxed">
                    "Parar de fumar é uma decisão pessoal, mas não precisa ser uma caminhada solitária."
                  </p>
                </div>

                <div className="mt-9 sm:mt-10">
                  <a
                    href={whatsappUrl(
                      "Olá, Dra. Cecília! Gostaria de entender como funciona o suporte por WhatsApp durante o acompanhamento."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#8A936F] text-white hover:bg-[#6F7758] px-8 py-3.5 rounded-sm font-sans uppercase text-[11px] tracking-[0.2em] font-medium transition-colors duration-300"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </div>

              {/* Small supporting photo — inline on mobile */}
              <div className="mt-10 lg:hidden">
                <div className="w-32 aspect-3/4 rounded-xs overflow-hidden border-[6px] border-[#F7F4EC] shadow-sm">
                  <img
                    src="/src/assets/images/sobre_mim.jpg"
                    alt="Dra Cecília Portugal"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Right Side: framed portrait image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[420px] bg-[#F7F4EC] p-2.5 shadow-sm">
                <div className="aspect-3/4 overflow-hidden">
                  <img
                    src="/src/assets/images/therapy_room_1785334227896.jpg"
                    alt="Ambiente calmo e acolhedor"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Small supporting photo bleeding off the bottom edge — desktop */}
          <div className="hidden lg:block absolute left-10 bottom-0 translate-y-1/4 w-36 xl:w-40">
            <div className="aspect-3/4 overflow-hidden border-[6px] border-[#F7F4EC] shadow-sm">
              <img
                src="/src/assets/images/sobre_mim.jpg"
                alt="Dra Cecília Portugal"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
