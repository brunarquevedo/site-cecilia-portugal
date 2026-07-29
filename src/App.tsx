import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatementSection from "./components/StatementSection";
import AboutSection from "./components/AboutSection";
import ApproachSection from "./components/ApproachSection";
import ServicesSection from "./components/ServicesSection";
import SupportSection from "./components/SupportSection";
import BookSection from "./components/BookSection";
import NarrativesSection from "./components/NarrativesSection";
import QuoteSection from "./components/QuoteSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FinalCtaSection from "./components/FinalCtaSection";
import ContactFormSection from "./components/ContactFormSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#EEE8DA] text-[#5C5853] font-sans selection:bg-[#C7D0C4] selection:text-[#5C5853]">
      <Header />
      <main>
        <HeroSection />
        <StatementSection />
        <AboutSection />
        <ApproachSection />
        <ServicesSection />
        <SupportSection />
        <BookSection />
        <NarrativesSection />
        <QuoteSection />
        <TestimonialsSection />
        <FinalCtaSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}

