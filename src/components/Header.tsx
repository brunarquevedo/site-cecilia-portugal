import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Página inicial", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Livro", href: "#livro" },
    { label: "Acompanhamento para parar de fumar", href: "#acompanhamento" },
    { label: "Alguma dúvida?", href: "#duvidas" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#EEE8DA]/95 backdrop-blur-md border-b border-[#DDD5C6]/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col items-center">
        {/* Top Logo / Brand Name */}
        <a
          href="#inicio"
          className="text-center group flex flex-col items-center mb-3 sm:mb-4 tracking-wide transition-opacity hover:opacity-90"
        >
          <span className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#5C5853] tracking-wider uppercase">
            Dra Cecília Portugal
          </span>
          <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.25em] text-[#8A936F] mt-1 font-medium">
            Médica de Família • Terapeuta Ocupacional
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-6 lg:space-x-10 text-xs sm:text-sm uppercase tracking-widest font-sans text-[#5C5853]/80 pt-2 border-t border-[#DDD5C6]/40 w-full max-w-4xl">
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

        {/* Mobile menu button */}
        <div className="md:hidden absolute right-4 top-5">
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
        </div>
      )}
    </header>
  );
}
