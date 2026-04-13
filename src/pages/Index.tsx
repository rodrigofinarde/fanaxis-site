import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import MethodsSection from "@/components/MethodsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <HeroSection />

        <section id="servicos">
          <ServicesSection />
        </section>

        <ProjectsSection />

        <section id="metodos">
          <MethodsSection />
        </section>

        <ContactSection />
      </main>

      <Footer />

      {/* BOTÃO WHATSAPP PULSANDO */}
      <a
        href="https://wa.me/5511924489409"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "65px",
          height: "65px",
          zIndex: 9999
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{
            width: "100%",
            height: "100%",
            animation: "pulse 1.8s infinite"
          }}
        />
      </a>

      {/* ANIMAÇÃO */}
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.15);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Index;