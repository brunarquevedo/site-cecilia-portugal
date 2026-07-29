import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#DDD5C6]/50 text-[#5C5853] pt-16 pb-12 border-t border-[#DDD5C6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Footer Grid matching reference image 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-12 border-b border-[#5C5853]/15 text-center md:text-left">
          
          {/* Column 1: Identity */}
          <div className="space-y-3">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#8A936F] font-semibold block">
              IDENTIDADE PROFISSIONAL
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#5C5853]">
              Dra Cecília Portugal
            </h3>
            <div className="space-y-1 font-sans text-xs text-[#5C5853]/80 font-light leading-relaxed">
              <p>Médica de Família e comunidade CRM-RJ 52.99913-0</p>
              <p>Terapeuta Ocupacional CREFITO -2 nº 8154-TO</p>
            </div>
          </div>

          {/* Column 2: Logo Monogram / Navigation */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 rounded-full border border-[#8A936F]/40 flex flex-col items-center justify-center bg-[#F7F4EC]">
              <span className="font-serif text-xs text-[#8A936F] tracking-widest">DRA</span>
              <span className="font-serif text-lg font-light text-[#5C5853] -mt-1">CP</span>
            </div>
            <p className="font-serif italic text-sm text-[#6F7758]">
              "Entre a vontade e a mudança, existe acompanhamento."
            </p>
          </div>

          {/* Column 3: Connect & Social */}
          <div className="space-y-3 md:text-right flex flex-col items-center md:items-end">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#8A936F] font-semibold block">
              CONTATO & REDES
            </span>
            <div className="space-y-2 text-xs font-sans text-[#5C5853]/80 font-light">
              <a href="#duvidas" className="flex items-center space-x-2 md:justify-end hover:text-[#6F7758] transition-colors">
                <Instagram size={14} className="text-[#8A936F]" />
                <span>Instagram</span>
              </a>
              <a href="#duvidas" className="flex items-center space-x-2 md:justify-end hover:text-[#6F7758] transition-colors">
                <Linkedin size={14} className="text-[#8A936F]" />
                <span>LinkedIn</span>
              </a>
              <a href="#duvidas" className="flex items-center space-x-2 md:justify-end hover:text-[#6F7758] transition-colors">
                <Mail size={14} className="text-[#8A936F]" />
                <span>Contato via Email</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-center font-sans text-[11px] uppercase tracking-widest text-[#5C5853]/60 font-light">
          <p>© {new Date().getFullYear()} DRA CECÍLIA PORTUGAL • TODOS OS DIREITOS RESERVADOS</p>
        </div>

      </div>
    </footer>
  );
}
