import { Instagram, Mail, MessageCircle } from "lucide-react";
import {
  BOOK_URL,
  EMAIL,
  EMAIL_URL,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "../constants";

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
              <p>Médica de Família e Comunidade — CRM-RJ 52.99913-0 · RQE 26980</p>
              <p>Terapeuta Ocupacional — CREFITO-2 nº 8154-TO</p>
            </div>
          </div>

          {/* Column 2: Logo Monogram / Navigation */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <img
              src="/src/assets/images/logo.png"
              alt="Dra Cecília Portugal"
              className="h-20 w-auto object-contain"
            />
            <p className="font-serif italic text-sm text-[#6F7758]">
              "Entre a vontade e a mudança, existe acompanhamento."
            </p>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[11px] uppercase tracking-widest text-[#8A936F] hover:text-[#6F7758] underline font-medium transition-colors"
            >
              Livro na Amazon
            </a>
          </div>

          {/* Column 3: Connect & Social */}
          <div className="space-y-3 md:text-right flex flex-col items-center md:items-end">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#8A936F] font-semibold block">
              CONTATO & REDES
            </span>
            <div className="space-y-2 text-xs font-sans text-[#5C5853]/80 font-light">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 md:justify-end hover:text-[#6F7758] transition-colors"
              >
                <MessageCircle size={14} className="text-[#8A936F]" />
                <span>WhatsApp {WHATSAPP_DISPLAY}</span>
              </a>
              <a
                href={EMAIL_URL}
                className="flex items-center space-x-2 md:justify-end hover:text-[#6F7758] transition-colors"
              >
                <Mail size={14} className="text-[#8A936F]" />
                <span>{EMAIL}</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 md:justify-end hover:text-[#6F7758] transition-colors"
              >
                <Instagram size={14} className="text-[#8A936F]" />
                <span>@draceciliaportugal</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-center space-y-2 font-sans text-[11px] text-[#5C5853]/60 font-light">
          <p className="uppercase tracking-widest">
            © {new Date().getFullYear()} DRA CECÍLIA PORTUGAL • TODOS OS DIREITOS RESERVADOS
          </p>
          <p className="italic">
            Este site tem caráter informativo e não substitui uma consulta médica.
          </p>
        </div>

      </div>
    </footer>
  );
}
