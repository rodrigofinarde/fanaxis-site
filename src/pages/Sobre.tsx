import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import fotoRodrigo from "@/assets/rodrigo-finarde.webp";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>Sobre a Fanaxis | Programação CAD/CAM/CNC e Consultoria em Usinagem</title>
        <link rel="canonical" href="https://www.fanaxis.com.br/sobre" />
        <meta name="description" content="Conheça a Fanaxis: empresa especializada em programação CAD/CAM/CNC, digitalização de processos e consultoria em usinagem CNC. Fundada por Rodrigo Finarde com 20+ anos de experiência." />

        {/* Open Graph */}
        <meta property="og:title" content="Sobre a Fanaxis | Advanced Machining Solutions" />
        <meta property="og:description" content="Conheça a Fanaxis: empresa especializada em programação CAD/CAM/CNC, digitalização de processos e consultoria em usinagem CNC." />
        <meta property="og:image" content="https://www.fanaxis.com.br/og-fanaxis.jpg" />
        <meta property="og:url" content="https://www.fanaxis.com.br/sobre" />
        <meta property="og:type" content="website" />

        {/* Schema Markup - AboutPage */}
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "Sobre a Fanaxis",
          "description": "Fanaxis é uma empresa especializada em programação CAD/CAM/CNC, digitalização de processos, gêmeos digitais e consultoria em usinagem CNC.",
          "url": "https://www.fanaxis.com.br/sobre",
          "isPartOf": {
            "@type": "WebSite",
            "name": "Fanaxis",
            "url": "https://www.fanaxis.com.br"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Fanaxis",
            "url": "https://www.fanaxis.com.br",
            "logo": "https://www.fanaxis.com.br/og-fanaxis.jpg"
          }
        }`}</script>
      </Helmet>
      <div className="bg-background text-white min-h-screen">
        <Header />

        {/* Hero */}
        <section className="page-hero container pt-36 pb-20 md:pb-28">
          <p className="section-kicker mb-6">
            Quem somos
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl uppercase mb-8 leading-[1.02]">
            Sobre a <span className="text-[#FE731A]">Fanaxis</span>
          </h1>
          <p className="text-lg text-white/70 mb-8 max-w-3xl leading-relaxed">
            A Fanaxis é uma empresa brasileira especializada em soluções avançadas de usinagem CNC,
            com foco em programação CAD/CAM, digitalização de processos, gêmeos digitais e
            consultoria técnica. Nossa missão é democratizar o acesso à tecnologia de ponta em
            manufatura para empresas de todos os portes.
          </p>
        </section>

        {/* História */}
        <section className="container py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl mb-6">
                Nossa história
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                A Fanaxis nasceu da experiência prática de Rodrigo Finarde no chão de fábrica.
                Programador CNC na B. GROB do Brasil — referência mundial em centros de usinagem
                5 eixos — Rodrigo acumula mais de 20 anos atuando diretamente com programação CAM,
                otimização de processos e treinamento técnico.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                A Fanaxis foi fundada com o objetivo de levar para outras empresas o mesmo nível
                de excelência técnica que existe nas grandes indústrias, mas de forma acessível
                e personalizada para cada necessidade.
              </p>
              <p className="text-white/70 leading-relaxed">
                Hoje, a Fanaxis atende empresas de diversos setores — automotivo, aeronáutico,
                moldes e matrizes, bens de capital — oferecendo soluções completas desde a
                programação CAM até a digitalização completa dos processos de manufatura.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl mb-6">
                Sobre o fundador
              </h2>
              <div className="bg-card border border-white/10 p-6 md:p-8 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
                  <div className="relative shrink-0 w-36 h-36 md:w-44 md:h-44">
                    <div aria-hidden="true" className="absolute -inset-3 rounded-full bg-[#FE731A]/20 blur-2xl" />
                    <img
                      src={fotoRodrigo}
                      alt="Rodrigo Finarde, fundador da Fanaxis"
                      width={176}
                      height={176}
                      loading="lazy"
                      className="relative w-full h-full rounded-full object-cover ring-2 ring-[#FE731A] ring-offset-4 ring-offset-[hsl(var(--card))]"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Rodrigo Finarde
                    </h3>
                    <p className="font-mono text-xs tracking-[0.18em] uppercase text-[#FE731A]">
                      Fundador · Especialista CAD/CAM/CNC
                    </p>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed mb-3">
                  Mais de 20 anos de experiência em usinagem CNC. Atua como programador CNC na
                  B. GROB do Brasil, referência mundial em centros de usinagem 5 eixos, trabalhando
                  com máquinas de alto padrão e processos industriais exigentes.
                </p>
                <p className="text-white/70 leading-relaxed mb-4">
                  Especialista em programação CAM para fresamento 3, 4 e 5 eixos simultâneos em
                  NX CAM, PowerMill e HyperMILL. Experiência em desenvolvimento de pós-processadores
                  customizados e simulação de máquinas CNC.
                </p>
                <a
                  href="https://linkedin.com/in/rodrigo-finarde-6641506b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#FE731A] hover:underline"
                >
                  Ver perfil no LinkedIn →
                </a>
              </div>

              <div className="bg-card border border-white/10 p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  O slogan
                </h3>
                <p className="text-white/70 leading-relaxed mb-3">
                  "We <strong className="text-[#FE731A]">CAM</strong> go further"
                </p>
                <p className="text-sm text-white/55">
                  Uma referência ao Computer Aided Manufacturing (CAM) e ao compromisso da Fanaxis
                  de ir além na busca por soluções inovadoras para a indústria.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="relative bg-secondary py-24 md:py-28">
          <div className="container">
            <h2 className="text-2xl md:text-3xl mb-12 text-center">
              Missão, Visão e Valores
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-card border border-white/10 p-8 text-center transition-all duration-300 hover:border-white/20 hover:-translate-y-1">
                <Target className="w-9 h-9 text-white/50 group-hover:text-[#FE731A] transition-colors mx-auto mb-5" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-white mb-3">Missão</h3>
                <p className="text-sm text-white/55 leading-relaxed">
                  Democratizar o acesso à tecnologia CAD/CAM/CNC de ponta, levando soluções de
                  manufatura avançada para empresas de todos os portes.
                </p>
              </div>

              <div className="group bg-card border border-white/10 p-8 text-center transition-all duration-300 hover:border-white/20 hover:-translate-y-1">
                <Eye className="w-9 h-9 text-white/50 group-hover:text-[#FE731A] transition-colors mx-auto mb-5" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-white mb-3">Visão</h3>
                <p className="text-sm text-white/55 leading-relaxed">
                  Ser referência nacional em programação CAM e digitalização de processos de
                  usinagem, conectando a indústria brasileira às melhores tecnologias globais.
                </p>
              </div>

              <div className="group bg-card border border-white/10 p-8 text-center transition-all duration-300 hover:border-white/20 hover:-translate-y-1">
                <Heart className="w-9 h-9 text-white/50 group-hover:text-[#FE731A] transition-colors mx-auto mb-5" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-white mb-3">Valores</h3>
                <p className="text-sm text-white/55 leading-relaxed">
                  Excelência técnica, inovação contínua, resultado mensurável para o cliente,
                  transparência e compromisso com a evolução da indústria de manufatura.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-cta container py-24 md:py-32 text-center">
          <h2 className="text-2xl md:text-3xl mb-4">
            Vamos conversar sobre sua necessidade?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            A Fanaxis está pronta para ajudar sua empresa a alcançar novos níveis de produtividade
            e eficiência na usinagem CNC.
          </p>
          <Link
            to="/#contato"
            className="inline-flex items-center gap-2 bg-[#FE731A] hover:bg-[#E5620F] text-white font-medium px-8 py-4 transition-colors tracking-wide"
          >
            Entrar em contato
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Sobre;
