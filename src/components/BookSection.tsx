export default function BookSection() {
  return (
    <section id="livro" className="bg-[#EEE8DA] py-20 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Large Book Image with editorial framing */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background accent paper box */}
              <div className="absolute -inset-4 bg-[#DDD5C6]/60 rounded-xl rotate-1 pointer-events-none"></div>
              
              <div className="relative rounded-lg overflow-hidden shadow-xl border-2 border-[#DDD5C6] bg-[#F7F4EC]">
                <img
                  src="/src/assets/images/book_cover_1785334248945.jpg"
                  alt="Livro Memórias de uma ex-futura fumante - Dra Cecília Portugal"
                  className="w-full h-[450px] sm:h-[550px] object-cover object-center"
                  referrerPolicy="no-referrer"
                />

                {/* Floating book title badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#F7F4EC]/95 backdrop-blur-sm p-4 sm:p-5 rounded-sm border border-[#DDD5C6] shadow-md text-center">
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8A936F] font-semibold mb-1">
                    OBRA AUTORAL
                  </p>
                  <p className="font-serif italic text-lg sm:text-xl text-[#5C5853]">
                    Memórias de uma ex-futura fumante
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Copy Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#8A936F] font-medium">
                PUBLICAÇÃO & TRAJETÓRIA
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#5C5853] font-normal tracking-tight">
                Livro
              </h2>
            </div>

            {/* Highlighted Intro */}
            <p className="font-serif italic text-2xl sm:text-3xl text-[#6F7758] font-normal leading-snug">
              "Para de fumar me fez reaprender uma nova vida."
            </p>

            {/* Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[#5C5853]/90 font-light leading-relaxed">
              <p>
                Memórias de uma ex-futura fumante é um livro sobre minha relação com o cigarro. A luta contra ele e tudo que eu tive que ressignificar sem sua presença.
              </p>
              <p>
                Foram anos de pequenos momentos de escrita, desabafos, sobre minha relação com a dependência do tabaco.
              </p>
              <p>
                Este livro é sobre o início da minha dependência, lá na época da adolescência. Divido sobre toda a dificuldade que foi parar de fumar, com ajuda profissional, em um grupo terapêutico e todos esses anos de reafirmação sobre minha escolha pela vida, lutando contra recaídas.
              </p>
              <p>
                Quem me conhece sabe o quanto o cigarro me acompanha, mesmo tendo parado há 22 anos. E eu ainda tenho que reafirmar diariamente que não posso fumar.
              </p>
              <p className="font-medium text-[#5C5853]">
                E como parar de fumar me trouxe tantas coisas boas. É muito bom poder dividir minha história com você!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
