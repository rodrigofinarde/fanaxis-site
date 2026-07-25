import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ConsultoriaUsinagem = () => {
  return (
    <>
      <Helmet>
        <title>Consultoria em Usinagem CNC | Fanaxis - Otimização de Processos de Manufatura</title>
        <meta name="description" content="Consultoria especializada em usinagem CNC: análise de processos, redução de tempo de ciclo, seleção de ferramentas e otimização de parâmetros de corte. 20+ anos de experiência. Fale com a Fanaxis." />

        {/* Open Graph */}
        <meta property="og:title" content="Consultoria em Usinagem CNC | Fanaxis" />
        <meta property="og:description" content="Consultoria especializada em usinagem CNC: análise de processos, redução de tempo de ciclo, seleção de ferramentas e otimização de parâmetros de corte." />
        <meta property="og:image" content="https://www.fanaxis.com.br/logo-icon.png" />
        <meta property="og:url" content="https://www.fanaxis.com.br/servicos/consultoria-usinagem" />
        <meta property="og:type" content="website" />

        {/* Schema Markup - Service */}
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Consultoria em Usinagem CNC",
          "description": "Consultoria especializada em usinagem CNC com mais de 20 anos de experiência. Análise de processos, redução de tempo de ciclo, seleção de ferramentas, otimização de parâmetros de corte e treinamento técnico.",
          "url": "https://www.fanaxis.com.br/servicos/consultoria-usinagem",
          "provider": {
            "@type": "Organization",
            "name": "Fanaxis",
            "url": "https://www.fanaxis.com.br",
            "logo": "https://www.fanaxis.com.br/logo-icon.png"
          },
          "areaServed": "BR",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Consultoria em Usinagem",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Análise e otimização de processos de usinagem"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Seleção de ferramentas e parâmetros de corte"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Treinamento técnico em programação CAM"
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
            Consultoria em <span className="text-[#FF6A00]">Usinagem CNC</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Consultoria especializada em usinagem CNC com mais de 20 anos de experiência no chão
            de fábrica. Análise de processos, redução de tempo de ciclo, seleção de ferramentas,
            otimização de parâmetros de corte e treinamento técnico para sua equipe.
          </p>

          <a
            href="https://wa.me/5511924489409"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#e65c00] text-white font-medium px-8 py-4 rounded-sm transition-all hover:scale-105"
          >
            Solicitar consultoria
            <ArrowRight className="w-4 h-4" />
          </a>
        </section>

        {/* Descrição detalhada */}
        <section className="container py-16 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Como funciona a consultoria?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                A consultoria da Fanaxis começa com uma análise detalhada dos seus processos atuais
                de usinagem. Avaliamos programas, parâmetros de corte, ferramentas, fixações e
                tempos de ciclo para identificar oportunidades reais de melhoria.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Nossa abordagem é prática e orientada a resultados: cada recomendação é fundamentada
                em dados, com metas mensuráveis de redução de custo, tempo e scrap. Trabalhamos lado
                a lado com sua equipe de programação e operadores para garantir a implementação eficaz.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Com passagem pela B. GROB do Brasil e 20 anos de experiência, Rodrigo Finarde traz
                conhecimento profundo em máquinas de alto padrão e processos industriais exigentes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Para quem é?
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6A00] mt-0.5 shrink-0" />
                  <span>Empresas que sentem que seus processos de usinagem estão defasados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6A00] mt-0.5 shrink-0" />
                  <span>Gerentes de produção que precisam reduzir custos operacionais</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6A00] mt-0.5 shrink-0" />
                  <span>Equipes de programação que querem se atualizar com tecnologias CAM modernas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6A00] mt-0.5 shrink-0" />
                  <span>Empresas investindo em máquinas 5 eixos e precisando de suporte especializado</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6A00] mt-0.5 shrink-0" />
                  <span>Indústrias que buscam aumentar produtividade sem contratar mais pessoas</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="bg-[#1a1a1a] py-20">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center">
              Benefícios da consultoria Fanaxis
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Redução de custos operacionais",
                  desc: "Identificação de gargalos e desperdícios com plano de ação para redução mensurável de custos por peça produzida.",
                },
                {
                  title: "Otimização de parâmetros de corte",
                  desc: "Seleção de avanços, velocidades e profundidades de corte ideais para cada operação, material e ferramenta.",
                },
                {
                  title: "Treinamento técnico",
                  desc: "Capacitação da equipe em programação CAM, estratégias de usinagem e melhores práticas do mercado.",
                },
                {
                  title: "Seleção de ferramentas",
                  desc: "Análise e recomendação de ferramentas de corte ideais para cada operação, com justificativa técnica e econômica.",
                },
                {
                  title: "Padronização de processos",
                  desc: "Criação de folhas de processo, checklists e procedimentos operacionais padronizados para a sua planta.",
                },
                {
                  title: "Acompanhamento contínuo",
                  desc: "Suporte pós-consultoria para garantir que as melhorias sejam sustentadas e ampliadas ao longo do tempo.",
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
            Transforme seus processos de usinagem
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            A Fanaxis oferece consultoria prática e orientada a resultados para empresas que querem
            reduzir custos e aumentar a produtividade na usinagem CNC.
          </p>
          <Link
            to="/#contato"
            className="inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#e65c00] text-white font-medium px-8 py-4 rounded-sm transition-all hover:scale-105"
          >
            Agendar diagnóstico gratuito
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ConsultoriaUsinagem;
