export default function DifferentialsSection() {
  const items = [
    "Deixar o cigarro é abrir espaço para uma vida com mais liberdade.",
    "Parar de fumar não é apenas abandonar um hábito. É recuperar escolhas.",
    "Parar de fumar é uma decisão pessoal, mas não precisa ser uma caminhada solitária.",
    "Entre a vontade e a mudança, existe acompanhamento.",
  ];

  return (
    <section className="bg-[#EEE8DA] py-20 sm:py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#5C5853] font-normal tracking-tight">
            O que orienta meu cuidado
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <p className="font-serif text-lg sm:text-xl text-[#6F7758] leading-relaxed font-normal">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
