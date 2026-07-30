import { WHATSAPP_URL } from "../constants";

export default function ServicesSection() {
  const cards = [
    {
      title: "Como começa o acompanhamento?",
      image: "/src/assets/images/detail_decor_1785334264234.jpg",
      paragraphs: [
        "O primeiro passo é uma consulta individual de avaliação, com duração aproximada de 50 minutos.",
        "Nesse encontro, busco compreender a relação da pessoa com o cigarro, seu estado de saúde, suas tentativas anteriores, seus gatilhos e sua motivação para a mudança.",
        "A partir dessa avaliação, construímos um plano de tratamento individualizado e verificamos a necessidade de recursos medicamentosos.",
      ],
    },
    {
      title: "Um percurso de três meses",
      image: "/src/assets/images/foto_cecilia.jpg",
      paragraphs: [
        "Para quem está pronto para parar de fumar, o tratamento é estruturado ao longo de três meses, com encontros semanais.",
        "Nesse percurso, trabalhamos a preparação para a mudança, o início da vida sem o cigarro e a consolidação de novas estratégias para lidar com a fissura, os hábitos, as emoções e as situações de risco.",
        "Mais do que retirar o cigarro, o objetivo é ajudar cada pessoa a construir uma nova forma de viver sem ele.",
      ],
    },
    {
      title: "Individual ou em grupo",
      image: "/src/assets/images/therapy_room_1785334227896.jpg",
      paragraphs: [
        "O acompanhamento pode ser individual ou em grupos pequenos, com até cinco participantes.",
        "No individual, o processo é totalmente direcionado às necessidades de cada pessoa.",
        "No grupo, os participantes compartilham experiências, dificuldades e conquistas com quem vive um processo semelhante — e o investimento é mais acessível.",
        "Em ambos os formatos, o cuidado e o acompanhamento seguem os mesmos três meses.",
      ],
    },
  ];

  return (
    <section id="processo" className="bg-[#EEE8DA] py-20 sm:py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-16 sm:mb-20">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#8A936F] font-medium">
            ETAPAS DO CUIDADO
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#5C5853] font-normal tracking-tight">
            Como funciona o acompanhamento
          </h2>
        </div>

        {/* 3 Vertical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#F7F4EC] border border-[#DDD5C6] rounded-md p-8 sm:p-10 flex flex-col justify-between space-y-6 hover:border-[#8A936F]/60 transition-all duration-300 shadow-xs hover:shadow-md"
            >
              <div className="space-y-6">
                {/* Arched image container matching reference image 1 */}
                <div className="flex justify-center">
                  <div className="w-24 h-32 sm:w-28 sm:h-36 rounded-t-full overflow-hidden border-2 border-[#DDD5C6] shadow-xs">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#5C5853] text-center font-normal leading-snug">
                  {card.title}
                </h3>

                <div className="space-y-3.5 text-sm sm:text-base text-[#5C5853]/85 font-light leading-relaxed">
                  {card.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Button inside card */}
              <div className="pt-4 text-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#8A936F] hover:bg-[#6F7758] text-white px-6 py-2.5 rounded-sm font-sans uppercase text-[11px] tracking-widest font-medium transition-colors duration-200"
                >
                  Quero saber mais
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
