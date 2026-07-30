import { Check } from "lucide-react";
import { fotoAcompanhamento } from "../assets/images";

export default function ApproachSection() {
  const listItems = [
    "Consulta de avaliação individual (50 min)",
    "Percurso estruturado de três meses, com encontros semanais",
    "Formato individual ou grupo com até 5 participantes",
    "Suporte por WhatsApp em horário comercial",
    "Avaliação da necessidade de apoio medicamentoso",
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
                  Atendimentos online, individuais ou em grupo, com encontros semanais ao longo de 3 meses.
                </p>
              </div>
            </div>

            {/* Checkmark List */}
            <div className="space-y-3.5 border-t border-white/20 pt-6">
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#EEE8DA]/80 font-medium">
                O que está incluído
              </p>
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
              {/* Main Image */}
              <img
                src={fotoAcompanhamento}
                alt="Dra Cecília Portugal em seu consultório"
                className="w-full h-full object-cover object-center min-h-[380px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
