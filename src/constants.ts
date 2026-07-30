export const WHATSAPP_NUMBER = "5521995938282";
export const WHATSAPP_DISPLAY = "(21) 99593-8282";

const WHATSAPP_MESSAGE =
  "Olá, Dra. Cecília! Vi o site e gostaria de saber mais sobre o acompanhamento para parar de fumar.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const EMAIL = "mcecipb@gmail.com";
export const EMAIL_URL = `mailto:${EMAIL}`;

export const INSTAGRAM_URL = "https://www.instagram.com/draceciliaportugal/";

export const BOOK_URL = "https://a.co/d/0faH5E4P";
export const BOOK_TITLE = "Memórias de uma ex-futura fumante";
