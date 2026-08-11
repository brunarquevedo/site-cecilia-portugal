export default function TestimonialsSection() {
  return (
    <section className="bg-[#F7F4EC] py-20 sm:py-24 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center space-y-2 mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#5C5853] font-normal tracking-tight">
            Depoimentos dos pacientes
          </h2>
        </div>

        {/* Featured Testimonial - VAA */}
        <figure className="bg-[#EEE8DA] border border-[#DDD5C6] rounded-lg p-8 sm:p-12 md:p-14 shadow-sm space-y-6">
          <span className="font-serif text-5xl sm:text-6xl text-[#8A936F]/50 block leading-none font-light">
            "
          </span>

          <blockquote className="space-y-4 text-base sm:text-lg text-[#5C5853]/90 font-light leading-relaxed">
            <p>
              Cecília é uma médica atenciosa, calma e muito comprometida. Dá para sentir que este projeto veio do coração e que ela coloca sua experiência a serviço de quem quer fazer essa travessia de se libertar de uma dependência tão desafiadora. É raro ver um médico assim tão acessível e que tenha uma bagagem terapêutica também. Eu recomendo muito este cuidado!
            </p>
          </blockquote>

          <figcaption className="pt-4 border-t border-[#DDD5C6]/70 font-sans text-xs uppercase tracking-[0.2em] text-[#8A936F] font-medium">
            — VAA
          </figcaption>
        </figure>

      </div>
    </section>
  );
}
