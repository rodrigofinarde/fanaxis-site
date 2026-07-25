import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>Sobre a Fanaxis | Programação CAD/CAM/CNC e Consultoria em Usinagem</title>
        <meta name="description" content="Conheça a Fanaxis: empresa especializada em programação CAD/CAM/CNC, digitalização de processos e consultoria em usinagem CNC. Fundada por Rodrigo Finarde com 20+ anos de experiência." />

        {/* Open Graph */}
        <meta property="og:title" content="Sobre a Fanaxis | Advanced Machining Solutions" />
        <meta property="og:description" content="Conheça a Fanaxis: empresa especializada em programação CAD/CAM/CNC, digitalização de processos e consultoria em usinagem CNC." />
        <meta property="og:image" content="https://www.fanaxis.com.br/logo-icon.png" />
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
            "logo": "https://www.fanaxis.com.br/logo-icon.png"
          }
        }`}</script>
      </Helmet>
      <div className="bg-background text-white min-h-screen">
        <Header />

        {/* Hero */}
        <section className="container pt-32 pb-16">
          <p className="font-mono text-sm tracking-widest uppercase text-[#FF6A00] mb-4">
            Quem somos
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Sobre a <span className="text-[#FF6A00]">Fanaxis</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
            A Fanaxis é uma empresa brasileira especializada em soluções avançadas de usinagem CNC,
            com foco em programação CAD/CAM, digitalização de processos, gêmeos digitais e
            consultoria técnica. Nossa missão é democratizar o acesso à tecnologia de ponta em
            manufatura para empresas de todos os portes.
          </p>
        </section>

        {/* História */}
        <section className="container py-16 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Nossa história
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                A Fanaxis nasceu da experiência prática de Rodrigo Finarde no chão de fábrica.
                Com passagem pela B. GROB do Brasil — referência mundial em centros de usinagem
                5 eixos — Rodrigo acumula mais de 20 anos atuando diretamente com programação CAM,
                otimização de processos e treinamento técnico.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                A Fanaxis foi fundada com o objetivo de levar para outras empresas o mesmo nível
                de excelência técnica que existe nas grandes indústrias, mas de forma acessível
                e personalizada para cada necessidade.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Hoje, a Fanaxis atende empresas de diversos setores — automotivo, aeronáutico,
                moldes e matrizes, bens de capital — oferecendo soluções completas desde a
                programação CAM até a digitalização completa dos processos de manufatura.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Sobre o fundador
              </h2>
              <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Rodrigo Finarde
                </h3>
                <p className="text-[#FF6A00] text-sm mb-4">
                  Fundador & Especialista CAD/CAM/CNC
                </p>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Mais de 20 anos de experiência em usinagem CNC, com passagem pela B. GROB do Brasil,
                  onde atuou com máquinas de alto padrão e processos industriais exigentes.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Especialista em programação CAM para fresamento 3, 4 e 5 eixos simultâneos em
                  NX CAM, PowerMill e HyperMILL. Experiência em desenvolvimento de pós-processadores
                  customizados e simulação de máquinas CNC.
                </p>
                <a
                  href="https://linkedin.com/in/rodrigo-finarde-6641506b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#FF6A00] hover:underline"
                >
                  Ver perfil no LinkedIn →
                </a>
              </div>

              <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  O slogan
                </h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  "We <strong className="text-[#FF6A00]">CAM</strong> go further"
                </p>
                <p className="text-sm text-gray-400">
                  Uma referência ao Computer Aided Manufacturing (CAM) e ao compromisso da Fanaxis
                  de ir além na busca por soluções inovadoras para a indústria.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="bg-[#1a1a1a] py-20">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center">
              Missão, Visão e Valores
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background/50 border border-white/10 rounded-lg p-8 text-center">
                <Target className="w-10 h-10 text-[#FF6A00] mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-white mb-3">Missão</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Democratizar o acesso à tecnologia CAD/CAM/CNC de ponta, levando soluções de
                  manufatura avançada para empresas de todos os portes.
                </p>
              </div>

              <div className="bg-background/50 border border-white/10 rounded-lg p-8 text-center">
                <Eye className="w-10 h-10 text-[#FF6A00] mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-white mb-3">Visão</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Ser referência nacional em programação CAM e digitalização de processos de
                  usinagem, conectando a indústria brasileira às melhores tecnologias globais.
                </p>
              </div>

              <div className="bg-background/50 border border-white/10 rounded-lg p-8 text-center">
                <Heart className="w-10 h-10 text-[#FF6A00] mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-white mb-3">Valores</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Excelência técnica, inovação contínua, resultado mensurável para o cliente,
                  transparência e compromisso com a evolução da indústria de manufatura.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Vamos conversar sobre sua necessidade?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            A Fanaxis está pronta para ajudar sua empresa a alcançar novos níveis de produtividade
            e eficiência na usinagem CNC.
          </p>
          <Link
            to="/#contato"
            className="inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#e65c00] text-white font-medium px-8 py-4 rounded-sm transition-all hover:scale-105"
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
