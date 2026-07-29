import { useState, FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.nome && formData.email && formData.mensagem) {
      setSubmitted(true);
    }
  };

  return (
    <section id="duvidas" className="bg-[#EEE8DA] py-20 sm:py-24 md:py-32 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#8A936F] font-medium">
            ENTRE EM CONTATO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#5C5853] font-normal tracking-tight">
            Alguma dúvida?
          </h2>
          <p className="font-sans text-base text-[#5C5853]/80 font-light max-w-lg mx-auto">
            Preencha os campos abaixo para enviar sua mensagem ou tirar dúvidas sobre o acompanhamento.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="bg-[#F7F4EC] border border-[#DDD5C6] p-8 sm:p-12 rounded-lg shadow-sm">
          {submitted ? (
            <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
              <div className="flex justify-center text-[#8A936F]">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="font-serif text-2xl text-[#5C5853]">
                Mensagem enviada com sucesso!
              </h3>
              <p className="font-sans text-sm text-[#5C5853]/80 font-light max-w-md mx-auto">
                Obrigada pelo contato, {formData.nome}. Entrarei em contato em breve para responder suas dúvidas.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ nome: "", email: "", mensagem: "" });
                }}
                className="inline-block mt-4 text-xs font-sans uppercase tracking-widest text-[#8A936F] hover:text-[#6F7758] underline font-medium"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="nome" className="block font-sans text-xs uppercase tracking-widest text-[#5C5853] font-medium">
                  Nome
                </label>
                <input
                  id="nome"
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full bg-[#EEE8DA]/60 border border-[#DDD5C6] rounded-sm px-4 py-3 text-sm text-[#5C5853] placeholder-[#5C5853]/50 focus:outline-none focus:border-[#8A936F] focus:ring-1 focus:ring-[#8A936F] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block font-sans text-xs uppercase tracking-widest text-[#5C5853] font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="seuemail@exemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#EEE8DA]/60 border border-[#DDD5C6] rounded-sm px-4 py-3 text-sm text-[#5C5853] placeholder-[#5C5853]/50 focus:outline-none focus:border-[#8A936F] focus:ring-1 focus:ring-[#8A936F] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="mensagem" className="block font-sans text-xs uppercase tracking-widest text-[#5C5853] font-medium">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  required
                  rows={5}
                  placeholder="Escreva sua mensagem ou dúvida..."
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="w-full bg-[#EEE8DA]/60 border border-[#DDD5C6] rounded-sm px-4 py-3 text-sm text-[#5C5853] placeholder-[#5C5853]/50 focus:outline-none focus:border-[#8A936F] focus:ring-1 focus:ring-[#8A936F] transition-all resize-none"
                ></textarea>
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#8A936F] hover:bg-[#6F7758] text-white px-10 py-3.5 rounded-sm font-sans uppercase text-xs tracking-[0.2em] font-medium transition-all duration-300 shadow-sm hover:shadow"
                >
                  <span>Enviar mensagem</span>
                  <Send size={14} />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
