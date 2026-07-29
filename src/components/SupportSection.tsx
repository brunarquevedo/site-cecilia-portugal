export default function SupportSection() {
  return (
    <section className="bg-[#F7F4EC] py-20 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Circular stamp, heading, copy, small portrait */}
          <div className="lg:col-span-6 space-y-8 relative">
            {/* Circular Stamp Badge */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
              <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[7px] font-sans uppercase tracking-[0.18em] fill-[#6F7758] font-medium">
                  <textPath href="#circlePath" startOffset="0%">
                    DRA CECÍLIA PORTUGAL • SAÚDE DA FAMÍLIA • TERAPIA OCUPACIONAL •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-[#8A936F] font-light text-xl">CP</span>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#5C5853] font-normal leading-tight">
                Suporte durante o tratamento
              </h2>
              
              <div className="space-y-4 text-base sm:text-lg text-[#5C5853]/90 font-light leading-relaxed max-w-xl">
                <p>
                  Durante o acompanhamento, os pacientes também contam com suporte pelo WhatsApp, em horário comercial, para orientações relacionadas ao processo e aos momentos de maior dificuldade.
                </p>
                <p className="font-serif italic text-xl text-[#6F7758] pt-2">
                  "Parar de fumar é uma decisão pessoal, mas não precisa ser uma caminhada solitária."
                </p>
              </div>
            </div>

            {/* Small supporting photo bottom left */}
            <div className="pt-2">
              <div className="w-28 h-36 rounded-md overflow-hidden border border-[#DDD5C6] shadow-sm">
                <img
                  src="/src/assets/images/about_portrait_1785334212859.jpg"
                  alt="Apoio e acolhimento"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Larger lifestyle interior image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden shadow-lg border-4 border-[#EEE8DA]">
              <img
                src="/src/assets/images/therapy_room_1785334227896.jpg"
                alt="Ambiente calmo e acolhedor"
                className="w-full h-[400px] sm:h-[520px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
