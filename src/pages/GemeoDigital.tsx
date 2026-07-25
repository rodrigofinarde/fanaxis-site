import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GemeoDigital = () => {
  return (
    <>
      <Helmet>
        <title>Gêmeo Digital CNC | Fanaxis - Simulação e Digitalização de Máquinas</title>
        <meta name="description" content="Gêmeo digital CNC: simulação completa da máquina, detecção de colisões e validação de programas antes da usinagem. NX CAM Machine Kits e simulação virtual. Fale com a Fanaxis." />

        {/* Open Graph */}
        <meta property="og:title" content="Gêmeo Digital CNC | Fanaxis" />
        <meta property="og:description" content="Gêmeo digital CNC: simulação completa da máquina, detecção de colisões e validação de programas antes da usinagem." />
        <meta property="og:image" content="https://www.fanaxis.com.br/logo-icon.png" />
        <meta property="og:url" content="https://www.fanaxis.com.br/servicos/gemeo-digital" />
        <meta property="og:type" content="website" />

        {/* Schema Markup - Service */}
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Gêmeo Digital CNC",
          "description": "Criação de gêmeos digitais de máquinas CNC para simulação completa, detecção de colisões, validação de programas e otimização de processos de usinagem. NX CAM Machine Kits, Vericut e simulação virtual.",
          "url": "https://www.fanaxis.com.br/servicos/gemeo-digital",
          "provider": {
            "@type": "Organization",
            "name": "Fanaxis",
            "url": "https://www.fanaxis.com.br",
            "logo": "https://www.fanaxis.com.br/logo-icon.png"
          },
          "areaServed": "BR",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Gêmeo Digital CNC",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Machine Kits NX CAM para simulação de máquina"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Simulação de código G e detecção de colisões"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Configuração e integração de Vericut"
                }
              }
            ]
          }
        }`}</script>
      </Helmet>
      <div className="bg-background text-white min-h-screen">
        <Header />

        {/* Hero */}
        <section className="container pt-32 pb-16">
          <p className="font-mono text-sm tracking-widest uppercase text-[#FF6A00] mb-4">
            Serviços
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Gêmeo <span className="text-[#FF6A00]">Digital</span> CNC
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Criação de gêmeos digitais de máquinas CNC para simulação completa, detecção de colisões
            e validação de programas antes da usinagem real. Utilizamos Machine Kits no NX CAM,
            Vericut e ferramentas de simulação virtual para eliminar riscos e otimizar processos.
          </p>

          <a
            href="https://wa.me/5511924489409"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#e65c00] text-white font-medium px-8 py-4 rounded-sm transition-all hover:scale-105"
          >
            Solicitar análise técnica
            <ArrowRight className="w-4 h-4" />
          </a>
        </section>

        {/* Descrição detalhada */}
        <section className="container py-16 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                O que é um gêmeo digital CNC?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Um gêmeo digital CNC é uma réplica virtual fiel da sua máquina-ferramenta, incluindo
                todos os componentes mecânicos, eixos, fusos, mesa e sistema de controle. Ele permite
                simular programas CNC inteiros antes da usinagem real, detectando colisões, violações
                de limites e erros de código G.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                A Fanaxis configura Machine Kits no NX CAM e integra soluções como o Vericut para
                criar gêmeos digitais de alta fidelidade de máquinas 5 eixos como Hermle, DMG Mori,
                Grob, Mazak e Okuma.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Para quem é?
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6A00] mt-0.5 shrink-0" />
                  <span>Fábricas que querem eliminar colisões e danos caros na máquina</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6A00] mt-0.5 shrink-0" />
                  <span>Empresas que operam máquinas 5 eixos de alto valor</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6A00] mt-0.5 shrink-0" />
                  <span>Setores aeronáutico, automotivo e moldes que exigem zero erro</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6A00] mt-0.5 shrink-0" />
                  <span>Equipes de programação que buscam validar programas remotamente</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6A00] mt-0.5 shrink-0" />
                  <span>Empresas que querem padronizar e digitalizar a produção</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="bg-[#1a1a1a] py-20">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center">
              Benefícios do gêmeo digital CNC
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Zero colisões na máquina",
                  desc: "Simulação completa detecta colisões entre ferramenta, fixação e componentes da máquina antes da usinagem real.",
                },
                {
                  title: "Redução de scrap e retrabalho",
                  desc: "Valide programas virtualmente e elimine peças sucateadas por erros de programação.",
                },
                {
                  title: "Economia de tempo de máquina",
                  desc: "Programas já testados entram na máquina com confiança, reduzindo tempo de setup e ajustes.",
                },
                {
                  title: "Simulação de código G",
                  desc: "Verificação do código G pós-processado com comportamento realista da máquina, incluindo velocidades e acelerações.",
                },
                {
                  title: "Integração Vericut",
                  desc: "Configuração e integração do Vericut para simulação avançada com verificação de corte (CAV) e otimização automática.",
                },
                {
                  title: "Máquinas atendidas",
                  desc: "Experiência com Hermle, DMG Mori, Grob, Mazak, Okuma e outras máquinas 5 eixos de alto padrão.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-background/50 border border-white/10 rounded-lg p-6">
                  <h3 className="font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="container py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Elimine riscos na sua usinagem
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            A Fanaxis ajuda empresas a implementarem gêmeos digitais CNC para simulação segura
            e otimização de processos. Fale com nossos especialistas.
          </p>
          <Link
            to="/#contato"
            className="inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#e65c00] text-white font-medium px-8 py-4 rounded-sm transition-all hover:scale-105"
          >
            Agendar demonstração
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default GemeoDigital;
