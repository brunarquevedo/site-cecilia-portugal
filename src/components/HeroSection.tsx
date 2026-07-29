import WaveDivider from "./WaveDivider";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative bg-[#EEE8DA] pt-8 sm:pt-12 md:pt-16 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 lg:pr-8">
            <div className="space-y-2">
              <span className="font-script text-2xl sm:text-3xl md:text-4xl text-[#8A936F] block tracking-wide">
                Seja muito bem vindo (a)!
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] text-[#5C5853] font-normal leading-[1.2] tracking-tight">
                Meu propósito é ajudar pessoas a se libertarem do vício do cigarro, com uma abordagem voltada para a dependência física, emocional e comportamental.
              </h1>
            </div>

            <p className="font-sans text-base sm:text-lg text-[#5C5853]/90 leading-relaxed max-w-2xl font-light">
              Eu sou Cecilia Portugal, médica de família e comunidade e terapeuta ocupacional, com grande experiência no cuidado centrado na pessoa, compreendendo seus contextos de vida e valorizando seus repertórios de atividades significativas.
            </p>

            <div className="pt-4">
              <a
                href="#sobre"
                className="inline-block bg-[#8A936F] text-white hover:bg-[#6F7758] px-8 py-3.5 rounded-sm font-sans uppercase text-xs tracking-[0.2em] font-medium transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Saiba mais
              </a>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              {/* Subtle background decorative frame */}
              <div className="absolute -inset-3 bg-[#DDD5C6]/50 rounded-2xl -rotate-1 transform pointer-events-none"></div>
              
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-[#DDD5C6]/80 bg-[#EEE8DA]">
                <img
                  src="/src/assets/images/hero_portrait_1785334196187.jpg"
                  alt="Dra Cecília Portugal"
                  className="w-full h-[450px] sm:h-[550px] object-cover object-center transform hover:scale-[1.01] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <WaveDivider fillColor="#F7F4EC" />
      </div>
    </section>
  );
}
