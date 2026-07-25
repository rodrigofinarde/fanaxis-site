import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import MethodsSection from "@/components/MethodsSection";
import ContactSection from "@/components/ContactSection";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Fanaxis | Programação CAD/CAM/CNC e Consultoria em Usinagem</title>
        <meta name="description" content="A Fanaxis oferece programação CAD/CAM/CNC, digitalização de processos, gêmeos digitais e consultoria em usinagem CNC. We CAM go further." />

        {/* Open Graph */}
        <meta property="og:title" content="Fanaxis | Programação CAD/CAM/CNC e Consultoria em Usinagem" />
        <meta property="og:description" content="A Fanaxis oferece programação CAD/CAM/CNC, digitalização de processos, gêmeos digitais e consultoria em usinagem CNC. We CAM go further." />
        <meta property="og:image" content="https://www.fanaxis.com.br/logo-icon.png" />
        <meta property="og:url" content="https://www.fanaxis.com.br" />
        <meta property="og:type" content="website" />

        {/* Schema Markup - Organization */}
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Fanaxis",
          "description": "Programação CAD/CAM/CNC, digitalização de processos, gêmeos digitais e consultoria em usinagem CNC",
          "url": "https://www.fanaxis.com.br",
          "logo": "https://www.fanaxis.com.br/logo-icon.png",
          "sameAs": ["https://www.instagram.com/fanaxis.br/"],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["Portuguese"]
          }
        }`}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
      <Header />

      <main>
        <HeroSection />

        <section id="servicos">
          <ServicesSection />
        </section>

        <ProjectsSection />

        <SocialProof />

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
    </>
  );
};

export default Index;