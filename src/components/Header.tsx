import { useState } from "react";
import { Menu, X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_URL } from "../constants";
import { logo } from "../assets/images";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Acompanhamento", href: "#acompanhamento" },
    { label: "Livro", href: "#livro" },
    { label: "Contato", href: "#duvidas" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#EEE8DA]/95 backdrop-blur-md border-b border-[#DDD5C6]/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex flex-col items-center relative">
        {/* Top Logo / Brand Name */}
        <a
          href="#inicio"
          className="text-center group flex flex-col items-center mb-2 sm:mb-2.5 tracking-wide transition-opacity hover:opacity-90"
        >
          <img
            src={logo}
            alt="Dra Cecília Portugal"
            className="h-11 sm:h-14 md:h-16 w-auto object-contain"
          />
          <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.25em] text-[#8A936F] mt-1 font-medium">
            Médica de Família e Comunidade • Terapeuta Ocupacional
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-5 lg:space-x-8 text-xs uppercase tracking-widest font-sans text-[#5C5853]/80 pt-2 border-t border-[#DDD5C6]/40 w-full max-w-4xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[#6F7758] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#8A936F] hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop WhatsApp CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com a Dra. Cecília no WhatsApp"
          title="Falar no WhatsApp"
          className="hidden md:flex absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center bg-[#8A936F] text-white hover:bg-[#6F7758] rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <WhatsAppIcon size={20} />
        </a>

        {/* Mobile menu button */}
        <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#5C5853] hover:text-[#6F7758] focus:outline-none"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#EEE8DA] border-b border-[#DDD5C6] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 text-sm uppercase tracking-widest text-[#5C5853]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#DDD5C6]/40 hover:text-[#6F7758] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center space-x-2 bg-[#8A936F] text-white hover:bg-[#6F7758] px-6 py-3 rounded-sm font-sans uppercase text-xs tracking-[0.15em] font-medium transition-colors"
          >
            <WhatsAppIcon size={16} />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
