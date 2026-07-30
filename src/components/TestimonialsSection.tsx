export default function TestimonialsSection() {
  return (
    <section className="bg-[#F7F4EC] py-20 sm:py-24 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center space-y-2 mb-14">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#8A936F] font-medium">
            DEPOIMENTOS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#5C5853] font-normal tracking-tight">
            Histórias de quem escolheu a mudança
          </h2>
        </div>

        {/* Featured Testimonial */}
        <figure className="bg-[#EEE8DA] border border-[#DDD5C6] rounded-lg p-8 sm:p-12 md:p-14 shadow-sm space-y-6">
          <span className="font-serif text-5xl sm:text-6xl text-[#8A936F]/50 block leading-none font-light">
            “
          </span>

          <p className="font-serif italic text-xl sm:text-2xl text-[#6F7758] leading-snug">
            Mesmo ela estando tão longe fisicamente, eu tinha a quem pedir socorro.
          </p>

          <blockquote className="space-y-4 text-base sm:text-lg text-[#5C5853]/90 font-light leading-relaxed">
            <p>
              Fumei por mais de quarenta anos. Resolvi parar e comecei o processo sozinha, apenas diminuindo a quantidade que eu fumava. Depois percebi que, com ajuda, seria menos dolorido.
            </p>
            <p>
              Comecei com algumas consultas com a Dra. Cecília, fizemos atividades semanais e então marcamos o meu dia D — parar mesmo de fumar, uau!
            </p>
            <p>
              O suporte e a atenção que ela me deu fizeram toda a diferença, porque me davam a certeza de que, mesmo estando tão longe fisicamente, eu tinha a quem pedir socorro se precisasse. Nesses momentos, esse apoio é muito importante — principalmente vindo de uma ex-fumante, que sabe o quanto é difícil, mas também o quanto é possível.
            </p>
            <p>
              Só tenho a agradecer. Cecília, muito obrigada!
            </p>
          </blockquote>

          <figcaption className="pt-4 border-t border-[#DDD5C6]/70 font-sans text-xs uppercase tracking-[0.2em] text-[#8A936F] font-medium">
            — E.M.A.
          </figcaption>
        </figure>

      </div>
    </section>
  );
}
