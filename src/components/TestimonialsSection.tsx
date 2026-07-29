export default function TestimonialsSection() {
  return (
    <section className="bg-[#F7F4EC] py-20 sm:py-24 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-14">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#8A936F] font-medium">
            DEPOIMENTOS & TRANSFORMAÇÕES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#5C5853] font-normal tracking-tight">
            Depoimentos
          </h2>
          <p className="font-script text-2xl text-[#8A936F]">
            Histórias de quem escolheu a mudança
          </p>
        </div>

        {/* Room for Future Testimonials - Clean Neutral Frames */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="border border-dashed border-[#DDD5C6] rounded-md p-8 text-center space-y-4 bg-[#EEE8DA]/30 flex flex-col items-center justify-center min-h-[200px]"
            >
              <div className="w-10 h-10 rounded-full border border-[#8A936F]/30 flex items-center justify-center text-[#8A936F]">
                <span className="font-serif italic text-lg">“</span>
              </div>
              <p className="font-sans text-xs uppercase tracking-widest text-[#8A936F]/70 font-medium">
                Espaço para relato de paciente
              </p>
              <div className="w-8 h-[1px] bg-[#DDD5C6]"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
