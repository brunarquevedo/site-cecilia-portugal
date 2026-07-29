export default function AboutSection() {
  return (
    <section id="sobre" className="bg-[#EEE8DA] py-20 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background large watermark text effect as seen in reference image */}
      <div className="absolute top-12 left-0 right-0 overflow-hidden pointer-events-none select-none opacity-20">
        <span className="font-serif text-[7rem] sm:text-[10rem] md:text-[14rem] text-[#8A936F] whitespace-nowrap leading-none font-light italic tracking-widest pl-4">
          Acolhimento &nbsp; Care &nbsp; Acolhimento
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
                  src="/src/assets/images/about_portrait_1785334212859.jpg"
                  alt="Dra Cecília Portugal em seu consultório"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Smaller overlapping offset image */}
              <div className="absolute -bottom-8 -left-2 sm:-left-6 z-20 w-3/5 rounded-lg overflow-hidden shadow-xl border-4 border-[#F7F4EC]">
                <img
                  src="/src/assets/images/detail_decor_1785334264234.jpg"
                  alt="Detalhes do consultório e objetos poéticos"
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
                Sobre:
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#5C5853]/90 font-light leading-relaxed">
              <p>
                Tenho a Terapia Ocupacional como minha primeira graduação e minha primeira experiência de cuidado com o outro. Trabalhei em Juiz de Fora, no atendimento de crianças e adultos com problemas neurológicos.
              </p>
              <p>
                Posteriormente, fiz minha graduação em medicina, finalizando em 2013. Me mudei para o Rio de Janeiro para fazer residência em medicina de família e comunidade, área que encontrei muito sentido no meu dia a dia. Atuando por mais de dez anos no território de Manguinhos, pude cuidar das pessoas e famílias ao longo do tempo. Neste período fiz o mestrado em Saúde da Família, pela FIOCRUZ e também exerci a função de preceptora do programa de residência da UFRJ/ENSP, participando do processo de ensino e aprendizagem de médicos que também tinham o propósito de acolher e serem comprometidos com os usuários.
              </p>
              <p>
                Mas sempre senti falta da TO. E agora, depois de anos dedicada à medicina de família, consegui conciliar a medicina e a terapia ocupacional, com este novo projeto para o cuidado das pessoas que desejam parar de fumar. É uma grande realização pessoal poder unir essas duas paixões, que se relacionam também com minha própria experiência de parar de fumar e lutar há tantos anos contra esse vício.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="#duvidas"
                className="inline-block bg-[#6F7758] text-white hover:bg-[#5C5853] px-6 sm:px-8 py-3.5 rounded-sm font-sans text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 shadow-sm hover:shadow-md text-center max-w-full"
              >
                Se você se sente pronto para parar de fumar ou precisa de ajuda para encontrar esse caminho, agende uma consulta comigo.
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
