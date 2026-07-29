export default function QuoteSection() {
  return (
    <section className="bg-[#EEE8DA] py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="font-serif text-5xl sm:text-6xl text-[#8A936F]/50 block leading-none font-light">
          “
        </span>
        <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#5C5853] font-normal leading-snug tracking-tight max-w-3xl mx-auto">
          "Vencer o cigarro me deu a certeza de que também sou capaz de atravessar outros momentos difíceis da vida."
        </blockquote>
        <div className="pt-2">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#8A936F] font-medium">
            — Dra Cecília Portugal
          </span>
        </div>
      </div>
    </section>
  );
}
