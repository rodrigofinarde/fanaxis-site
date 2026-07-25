import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DigitalizacaoProcessos = () => {
  return (
    <>
      <Helmet>
        <title>Digitalização de Processos | Fanaxis - Indústria 4.0 e Manufatura Digital</title>
        <meta name="description" content="Digitalização de processos de usinagem CNC:Industry 4.0, manufatura conectada, rastreabilidade de produção e integração de dados. Modernize sua fábrica com a Fanaxis." />

        {/* Open Graph */}
        <meta property="og:title" content="Digitalização de Processos | Fanaxis" />
        <meta property="og:description" content="Digitalização de processos de usinagem CNC: Industry 4.0, manufatura conectada, rastreabilidade de produção e integração de dados." />
        <meta property="og:image" content="https://www.fanaxis.com.br/logo-icon.png" />
        <meta property="og:url" content="https://www.fanaxis.com.br/servicos/digitalizacao-processos" />
        <meta property="og:type" content="website" />

        {/* Schema Markup - Service */}
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Digitalização de Processos",
          "description": "Digitalização de processos de usinagem CNC com foco em Indústria 4.0, manufatura conectada, rastreabilidade de produção e integração de dados para modernização de fábricas.",
          "url": "https://www.fanaxis.com.br/servicos/digitalizacao-processos",
          "provider": {
            "@type": "Organization",
            "name": "Fanaxis",
            "url": "https://www.fanaxis.com.br",
            "logo": "https://www.fanaxis.com.br/logo-icon.png"
          },
          "areaServed": "BR",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digitalização de Processos",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Mapeamento e modelagem de processos de usinagem"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Integração de dados de máquina e produção"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Rastreabilidade e controle de produção digital"
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
            Digitalização de <span className="text-[#FF6A00]">Processos</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Digitalização de processos de usinagem CNC com foco em Indústria 4.0 e manufatura
            conectada. Mapeamento de fluxos, integração de dados de máquina, rastreabilidade
            de produção e modernização completa da sua fábrica.
          </p>

          <a
            href="https://wa.me/5511924489409"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#e65c00] text-white font-medium px-8 py-4 rounded-sm transition-all hover:scale-105"
          >
            Solicitar diagnóstico
            <ArrowRight className="w-4 h-4" />
          </a>
        </section>

        {/* Descrição detalhada */}
        <section className="container py-16 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                O que é digitalização de processos?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Digitalização de processos na manufatura é a transformação de operações manuais,
                baseadas em papel e experiência pessoal, em fluxos digitais integrados, rastreáveis
                e baseados em dados. Inclui desde a digitalização de folhas de processo até a
                conexão de máquinas CNC com sistemas de gestão.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                A Fanaxis atua em todas as etapas: mapeamento dos processos existentes, identificação
                de gargalos, definição de arquitetura digital, integração de dados de máquina e
                implementação de soluções práticas para modernizar a produção.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Para quem é?
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6A00] mt-0.5 shrink-0" />
                  <span>Fábricas que ainda dependem de processos manuais e papel no chão de fábrica</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6A00] mt-0.5 shrink-0" />
                  <span>Empresas que querem implementar conceitos de Indústria 4.0 de forma prática</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6A00] mt-0.5 shrink-0" />
                  <span>Gerentes industriais que precisam de visibilidade e rastreabilidade da produção</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6A00] mt-0.5 shrink-0" />
                  <span>Empresas que querem integrar dados de máquinas CNC com sistemas ERP/MES</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6A00] mt-0.5 shrink-0" />
                  <span>Organizações que buscam certificações de qualidade e precisam documentar processos</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="bg-[#1a1a1a] py-20">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center">
              Benefícios da digitalização
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Rastreabilidade completa",
                  desc: "Acompanhamento em tempo real de cada peça, processo e operação, com histórico digital completo da produção.",
                },
                {
                  title: "Redução de erros humanos",
                  desc: "Processos digitalizados eliminam interpretações incorretas de folhas de processo e reduzem retrabalho.",
                },
                {
                  title: "Dados para decisões",
                  desc: "Coleta automatizada de dados de máquina para análise de OEE, tempos de ciclo e eficiência operacional.",
                },
                {
                  title: "Integração ERP/MES",
                  desc: "Conexão entre máquinas CNC e sistemas de gestão para fluxo contínuo de informações de produção.",
                },
                {
                  title: "Padronização de processos",
                  desc: "Documentação digital padronizada que facilita treinamento, auditorias e certificações de qualidade.",
                },
                {
                  title: "Preparação para IA",
                  desc: "Infraestrutura de dados preparada para aplicações futuras de inteligência artificial na manufatura.",
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
            Modernize sua fábrica com dados
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            A Fanaxis ajuda empresas a darem o primeiro passo na transformação digital da manufatura
            com soluções práticas e resultados mensuráveis.
          </p>
          <Link
            to="/#contato"
            className="inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#e65c00] text-white font-medium px-8 py-4 rounded-sm transition-all hover:scale-105"
          >
            Solicitar diagnóstico digital
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default DigitalizacaoProcessos;
