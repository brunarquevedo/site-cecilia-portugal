import { Check } from "lucide-react";

export default function ApproachSection() {
  const listItems = [
    "Como começa o acompanhamento?",
    "Um percurso de três meses",
    "Atendimento individual ou em grupo",
    "Suporte durante o tratamento",
  ];

  return (
    <section id="acompanhamento" className="bg-[#DDD5C6]/40 py-16 sm:py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Solid Olive/Taupe Block */}
          <div className="lg:col-span-6 bg-[#8A936F] text-white p-8 sm:p-12 md:p-14 rounded-lg shadow-md flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="font-script text-2xl sm:text-3xl text-[#EEE8DA] block">
                Uma escolha diária pela vida
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white">
                Acompanhamento para parar de fumar
              </h2>
              
              <div className="space-y-3 pt-2 text-[#EEE8DA]/90 font-light text-base sm:text-lg leading-relaxed">
                <p>
                  Atendimentos online, individual ou em grupo, com acompanhamento semanal durante 3 meses.
                </p>
                <p>
                  A minha proposta são atendimentos online, individual ou em grupo, com acompanhamento semanal durante 3 meses.
                </p>
              </div>
            </div>

            {/* Checkmark List */}
            <div className="space-y-3.5 border-t border-white/20 pt-6">
              {listItems.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-sm sm:text-base font-light tracking-wide text-white">
                  <div className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center shrink-0 bg-white/10">
                    <Check size={12} className="text-white" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#processo"
                className="inline-block bg-[#EEE8DA] text-[#5C5853] hover:bg-white px-7 py-3 rounded-sm font-sans uppercase text-xs tracking-widest font-medium transition-all duration-300 shadow-sm"
              >
                Conheça as etapas
              </a>
            </div>
          </div>

          {/* Right Side: Editorial Overlapping Images */}
          <div className="lg:col-span-6 relative flex items-center min-h-[380px] sm:min-h-[480px]">
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg border border-[#DDD5C6]">
              {/* Main Room Image */}
              <img
                src="/src/assets/images/therapy_room_1785334227896.jpg"
                alt="Ambiente de consulta acolhedor"
                className="w-full h-full object-cover object-center min-h-[380px]"
                referrerPolicy="no-referrer"
              />

              {/* Overlapping portrait thumbnail in reference image style */}
              <div className="absolute bottom-6 left-6 w-36 sm:w-48 rounded-md overflow-hidden border-2 border-white shadow-xl hidden sm:block">
                <img
                  src="/src/assets/images/hero_portrait_1785334196187.jpg"
                  alt="Dra Cecília Portugal"
                  className="w-full h-44 sm:h-56 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
