import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GemeoDigital = () => {
  return (
    <>
      <Helmet>
        <title>Gêmeos Digitais para Usinagem CNC | FANAXIS</title>
        <link rel="canonical" href="https://www.fanaxis.com.br/servicos/gemeo-digital" />
        <meta name="description" content="Gêmeos digitais de máquinas CNC: réplica virtual com cinemática, comando e pós-processador reais para validar programas antes da usinagem. Casos reais: ciclo de 7 h para 3 h. NX CAM, hyperMILL e Vericut." />
        <meta name="keywords" content="gêmeos digitais, gêmeo digital, gêmeos digitais usinagem, gêmeo digital CNC, gêmeo digital máquina CNC, simulação de máquina, machine kit NX CAM, Vericut" />

        {/* Open Graph */}
        <meta property="og:title" content="Gêmeos Digitais para Usinagem CNC | FANAXIS" />
        <meta property="og:description" content="Gêmeos digitais de máquinas CNC para validar programas antes da usinagem. Casos reais: 7 h → 3 h e 4 h → 2,5 h." />
        <meta property="og:image" content="https://www.fanaxis.com.br/og-fanaxis.jpg" />
        <meta property="og:url" content="https://www.fanaxis.com.br/servicos/gemeo-digital" />
        <meta property="og:type" content="website" />

        {/* Schema Markup - Service */}
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Gêmeos digitais para usinagem CNC",
          "serviceType": "Gêmeo digital de máquina CNC",
          "description": "Criação de gêmeos digitais de máquinas CNC para simulação completa, detecção de colisões, validação de programas e otimização de processos de usinagem. NX CAM Machine Kits, hyperMILL, Vericut e simulação do código NC pós-processado.",
          "url": "https://www.fanaxis.com.br/servicos/gemeo-digital",
          "provider": {
            "@type": "Organization",
            "name": "Fanaxis",
            "url": "https://www.fanaxis.com.br",
            "logo": "https://www.fanaxis.com.br/og-fanaxis.jpg"
          },
          "areaServed": { "@type": "Country", "name": "Brasil" },
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
        <script type="application/ld+json">{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que são gêmeos digitais?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gêmeos digitais são réplicas virtuais de algo físico que se comportam como o original. Na usinagem CNC, o gêmeo digital da máquina reproduz geometria, cinemática, cursos, comando e pós-processador, permitindo validar programas no computador com resultado igual ao da máquina real."
      }
    },
    {
      "@type": "Question",
      "name": "Gêmeo digital é o mesmo que a simulação do software CAM?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. A simulação comum do CAM mostra a trajetória da ferramenta. O gêmeo digital simula o código NC pós-processado na máquina virtual completa, que é o que revela colisões com cabeçote e mesa, fins de curso e erros de pós-processador."
      }
    },
    {
      "@type": "Question",
      "name": "Quais máquinas e comandos podem ter um gêmeo digital?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Centros de usinagem de 3, 4 e 5 eixos e tornos, inclusive máquinas mais antigas. Os comandos mais comuns são Siemens Sinumerik, Heidenhain e Fanuc. Já trabalhamos com máquinas Hermle, DMG MORI, Grob, Mazak e Okuma."
      }
    },
    {
      "@type": "Question",
      "name": "Preciso trocar meu software CAM para usar gêmeos digitais?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não necessariamente. Trabalhamos com NX CAM (Machine Kits) e hyperMILL, e o Vericut verifica programas de qualquer CAM. A solução é definida a partir do que a empresa já usa."
      }
    },
    {
      "@type": "Question",
      "name": "Quais resultados um gêmeo digital pode trazer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Além de evitar colisões, ele permite otimizar o processo com segurança antes de ocupar a máquina. Em projetos reais da FANAXIS, o ciclo de um rotor macho caiu de 7 h para 3 h e o de uma ferramenta de estampo em P20, de 4 h para 2,5 h."
      }
    }
  ]
}`}</script>
      </Helmet>
      <div className="bg-background text-white min-h-screen">
        <Header />

        {/* Hero */}
        <section className="page-hero container pt-36 pb-20 md:pb-28">
          <p className="section-kicker mb-6">
            Serviços
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl uppercase mb-8 leading-[1.02]">
            Gêmeos <span className="text-[#FE731A]">digitais</span> para usinagem CNC
          </h1>
          <p className="text-lg text-white/70 mb-8 max-w-3xl leading-relaxed">
            Criamos gêmeos digitais de máquinas CNC: a réplica virtual da sua máquina, com cinemática,
            cursos, comando e pós-processador reais. Cada programa é validado no computador antes de
            chegar ao chão de fábrica. Machine Kits no NX CAM, simulação no hyperMILL e verificação no Vericut.
          </p>

          <a
            href="https://wa.me/5511924489409"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FE731A] hover:bg-[#E5620F] text-white font-medium px-8 py-4 transition-colors tracking-wide"
          >
            Solicitar análise técnica
            <ArrowRight className="w-4 h-4" />
          </a>
        </section>

        {/* Descrição detalhada */}
        <section className="container py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl mb-6">
                O que são gêmeos digitais na usinagem CNC?
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Um gêmeo digital CNC é uma réplica virtual fiel da sua máquina-ferramenta, incluindo
                todos os componentes mecânicos, eixos, fusos, mesa e sistema de controle. Ele permite
                simular programas CNC inteiros antes da usinagem real, detectando colisões, violações
                de limites e erros de código G.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                A Fanaxis configura Machine Kits no NX CAM e integra soluções como o Vericut para
                criar gêmeos digitais de alta fidelidade de máquinas 5 eixos como Hermle, DMG Mori,
                Grob, Mazak e Okuma.
              </p>
              <p className="text-white/70 leading-relaxed">
                Quer entender o conceito em detalhe?{" "}
                <Link to="/blog/o-que-e-gemeo-digital-usinagem-cnc" className="text-[#FE731A] underline underline-offset-4 hover:text-white">
                  Leia o guia completo sobre gêmeos digitais na usinagem CNC
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl mb-6">
                Para quem é?
              </h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FE731A] mt-0.5 shrink-0" />
                  <span>Fábricas que querem eliminar colisões e danos caros na máquina</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FE731A] mt-0.5 shrink-0" />
                  <span>Empresas que operam máquinas 5 eixos de alto valor</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FE731A] mt-0.5 shrink-0" />
                  <span>Setores aeronáutico, automotivo e moldes que exigem zero erro</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FE731A] mt-0.5 shrink-0" />
                  <span>Equipes de programação que buscam validar programas remotamente</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FE731A] mt-0.5 shrink-0" />
                  <span>Empresas que querem padronizar e digitalizar a produção</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="relative bg-secondary py-24 md:py-28">
          <div className="container">
            <h2 className="text-2xl md:text-3xl mb-12 text-center">
              Benefícios dos gêmeos digitais na usinagem
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
                  desc: "Configuração e integração do Vericut para verificação independente do código G, com detecção de colisões e comparação com o modelo.",
                },
                {
                  title: "Máquinas atendidas",
                  desc: "Experiência com Hermle, DMG Mori, Grob, Mazak, Okuma e outras máquinas 5 eixos de alto padrão.",
                },
              ].map((item, i) => (
                <div key={i} className="group bg-card border border-white/10 p-6 transition-all duration-300 hover:border-white/20 hover:-translate-y-1">
                  <h3 className="font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como construímos */}
        <section className="container py-24 md:py-28">
          <p className="section-kicker mb-4">Processo</p>
          <h2 className="text-2xl md:text-3xl mb-12">Como criamos o gêmeo digital da sua máquina</h2>
          <ol className="grid md:grid-cols-5 gap-6">
            {[
                { t: "Levantamento", d: "Modelo, eixos, cursos, comando, opcionais e o padrão de programa da sua empresa." },
                { t: "Modelagem e cinemática", d: "Montagem 3D dos componentes e cadeia cinemática com os centros de rotação corretos." },
                { t: "Pós-processador", d: "O mesmo código simulado é o código que vai para a máquina." },
                { t: "Ferramentas e fixações", d: "Porta-ferramentas, ferramentas e dispositivos como estão no chão de fábrica." },
                { t: "Validação na máquina real", d: "Programas de teste controlados confirmam que máquina virtual e física se comportam igual." }
            ].map((s, i) => (
              <li key={s.t} className="border-t border-white/15 pt-5">
                <span className="font-mono text-xs text-[#FE731A] tracking-wider">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-semibold text-white mt-2 mb-2">{s.t}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Resultados reais */}
        <section className="relative bg-secondary py-20 md:py-24">
          <div className="container grid md:grid-cols-[1fr_2fr] gap-10 items-center">
            <div>
              <p className="section-kicker mb-4">Resultados reais</p>
              <h2 className="text-2xl md:text-3xl">Do gêmeo digital ao chão de fábrica</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card border border-white/10 p-6">
                <p translate="no" className="notranslate font-display text-3xl text-[#FE731A]">7h → 3h</p>
                <p className="text-sm text-white/60 mt-2">Rotor macho · desbaste em 4 eixos simultâneos validado na simulação · ciclo −57%</p>
              </div>
              <div className="bg-card border border-white/10 p-6">
                <p translate="no" className="notranslate font-display text-3xl text-[#FE731A]">4h → 2,5h</p>
                <p className="text-sm text-white/60 mt-2">Ferramenta de estampo em P20 · reprogramada e simulada no NX CAM · ciclo −37,5%</p>
              </div>
              <Link to="/#projetos" className="sm:col-span-2 text-sm text-[#FE731A] hover:text-white inline-flex items-center gap-2">
                Ver os vídeos dos casos <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Perguntas frequentes */}
        <section className="container py-24 md:py-28 max-w-4xl">
          <p className="section-kicker mb-4">Perguntas frequentes</p>
          <h2 className="text-2xl md:text-3xl mb-10">Gêmeos digitais: dúvidas comuns</h2>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {[
                { q: "O que são gêmeos digitais?", a: "Gêmeos digitais são réplicas virtuais de algo físico que se comportam como o original. Na usinagem CNC, o gêmeo digital da máquina reproduz geometria, cinemática, cursos, comando e pós-processador, permitindo validar programas no computador com resultado igual ao da máquina real." },
                { q: "Gêmeo digital é o mesmo que a simulação do software CAM?", a: "Não. A simulação comum do CAM mostra a trajetória da ferramenta. O gêmeo digital simula o código NC pós-processado na máquina virtual completa, que é o que revela colisões com cabeçote e mesa, fins de curso e erros de pós-processador." },
                { q: "Quais máquinas e comandos podem ter um gêmeo digital?", a: "Centros de usinagem de 3, 4 e 5 eixos e tornos, inclusive máquinas mais antigas. Os comandos mais comuns são Siemens Sinumerik, Heidenhain e Fanuc. Já trabalhamos com máquinas Hermle, DMG MORI, Grob, Mazak e Okuma." },
                { q: "Preciso trocar meu software CAM para usar gêmeos digitais?", a: "Não necessariamente. Trabalhamos com NX CAM (Machine Kits) e hyperMILL, e o Vericut verifica programas de qualquer CAM. A solução é definida a partir do que a empresa já usa." },
                { q: "Quais resultados um gêmeo digital pode trazer?", a: "Além de evitar colisões, ele permite otimizar o processo com segurança antes de ocupar a máquina. Em projetos reais da FANAXIS, o ciclo de um rotor macho caiu de 7 h para 3 h e o de uma ferramenta de estampo em P20, de 4 h para 2,5 h." }
            ].map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-6 font-semibold text-white">
                  {f.q}
                  <span className="text-[#FE731A] transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-white/65 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="page-cta container py-24 md:py-32 text-center">
          <h2 className="text-2xl md:text-3xl mb-4">
            Elimine riscos na sua usinagem
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            A Fanaxis ajuda empresas a implementarem gêmeos digitais de máquinas CNC para simulação segura
            e otimização de processos. Fale com nossos especialistas.
          </p>
          <Link
            to="/#contato"
            className="inline-flex items-center gap-2 bg-[#FE731A] hover:bg-[#E5620F] text-white font-medium px-8 py-4 transition-colors tracking-wide"
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
