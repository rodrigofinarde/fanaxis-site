import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProgramacaoCADCAM = () => {
  return (
    <>
      <Helmet>
        <title>Programação CAD/CAM/CNC | Fanaxis - Usinagem de Alta Performance</title>
        <meta name="description" content="Programação CAD/CAM/CNC profissional para fresamento 3, 4 e 5 eixos simultâneos. NX CAM, PowerMill e HyperMILL. Redução de tempo de ciclo e otimização de processos. Fale com a Fanaxis." />

        {/* Open Graph */}
        <meta property="og:title" content="Programação CAD/CAM/CNC | Fanaxis" />
        <meta property="og:description" content="Programação CAD/CAM/CNC profissional para fresamento 3, 4 e 5 eixos simultâneos. NX CAM, PowerMill e HyperMILL." />
        <meta property="og:image" content="https://www.fanaxis.com.br/logo-icon.png" />
        <meta property="og:url" content="https://www.fanaxis.com.br/servicos/programacao-cam" />
        <meta property="og:type" content="website" />

        {/* Schema Markup - Service */}
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Programação CAD/CAM/CNC",
          "description": "Programação CAM profissional para fresamento 3, 4 e 5 eixos simultâneos em NX CAM, PowerMill e HyperMILL. Otimização de percursos de ferramenta, redução de tempo de ciclo e pós-processadores customizados.",
          "url": "https://www.fanaxis.com.br/servicos/programacao-cam",
          "provider": {
            "@type": "Organization",
            "name": "Fanaxis",
            "url": "https://www.fanaxis.com.br",
            "logo": "https://www.fanaxis.com.br/logo-icon.png"
          },
          "areaServed": "BR",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Programação CAM",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Fresamento 3, 4 e 5 eixos simultâneos"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Pós-processadores customizados Fanuc, Siemens e Heidenhain"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Torneamento CNC com ciclos otimizados"
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
            Programação <span className="text-[#FF6A00]">CAD/CAM/CNC</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Programação CAM de alta performance para fresamento 3, 4 e 5 eixos simultâneos.
            Trabalhamos com NX CAM, PowerMill e HyperMILL para entregar percursos de ferramenta
            otimizados que reduzem tempo de ciclo e aumentam a produtividade da sua produção.
          </p>

          <a
            href="https://wa.me/5511924489409"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#e65c00] text-white font-medium px-8 py-4 rounded-sm transition-all hover:scale-105"
          >
            Solicitar orçamento
            <ArrowRight className="w-4 h-4" />
          </a>
        </section>

        {/* Descrição detalhada */}
        <section className="container py-16 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                O que é programação CAM?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                A programação CAM (Computer-Aided Manufacturing) é o processo de transformar modelos 3D em
                percursos de ferramenta que guiam a máquina CNC para usinar peças com precisão micrométrica.
                A Fanaxis domina as principais plataformas do mercado — NX CAM, PowerMill e HyperMILL — para
                atender desde peças simples até geometrias complexas com superfícies livres.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Nossa expertise abrange programação posicionada (3+2) e simultânea de 5 eixos, torneamento CNC
                com ciclos otimizados, e desenvolvimento de pós-processadores customizados para controles Fanuc,
                Siemens e Heidenhain.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Para quem é?
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6A00] mt-0.5 shrink-0" />
                  <span>Fábricas que buscam reduzir tempo de usinagem e custo por peça</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6A00] mt-0.5 shrink-0" />
                  <span>Empresas de manufatura com máquinas 3, 4 e 5 eixos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6A00] mt-0.5 shrink-0" />
                  <span>Setores automotivo, aeronáutico, moldes e matrizes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6A00] mt-0.5 shrink-0" />
                  <span>Produtores de peças sob demanda que precisam de programadores experientes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6A00] mt-0.5 shrink-0" />
                  <span>Empresas que buscam digitalizar e padronizar processos de usinagem</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="bg-[#1a1a1a] py-20">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center">
              Benefícios da programação CAM profissional
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Redução de tempo de ciclo",
                  desc: "Percursos de ferramenta otimizados que reduzem até 20% do tempo de usinagem, gerando economia real na produção.",
                },
                {
                  title: "Maior vida útil da ferramenta",
                  desc: "Estratégias avançadas como HSM, trochoidal e adaptive milling reduzem desgaste e prolongam a vida das ferramentas de corte.",
                },
                {
                  title: "Simulação e segurança",
                  desc: "Simulação completa antes da usinagem para eliminar riscos de colisão e desperdício de material.",
                },
                {
                  title: "Consistência e repetibilidade",
                  desc: "Programas padronizados garantem a mesma qualidade em cada lote produzido, eliminando variações humanas.",
                },
                {
                  title: "Pós-processadores sob medida",
                  desc: "Desenvolvimento de pós-processadores customizados para a sua máquina específica, eliminando erros de código G.",
                },
                {
                  title: "Suporte técnico especializado",
                  desc: "Acompanhamento contínuo e suporte para ajustes em tempo real durante a implantação dos programas.",
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
            Pronto para otimizar sua usinagem?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            A Fanaxis tem mais de 20 anos de experiência em programação CAM e já ajudou dezenas de empresas
            a reduzirem custos e aumentarem produtividade.
          </p>
          <Link
            to="/#contato"
            className="inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#e65c00] text-white font-medium px-8 py-4 rounded-sm transition-all hover:scale-105"
          >
            Falar com especialista
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ProgramacaoCADCAM;
