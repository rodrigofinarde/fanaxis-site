import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "O que é programação CAM?",
    answer:
      "Programação CAM (Computer-Aided Manufacturing) é o processo de transformar modelos 3D de peças em percursos de ferramenta que guiam a máquina CNC durante a usinagem. A Fanaxis domina NX CAM, PowerMill e HyperMILL para programação em fresamento 3, 4 e 5 eixos simultâneos, além de torneamento CNC com ciclos otimizados.",
  },
  {
    question: "O que é um gêmeo digital CNC?",
    answer:
      "Um gêmeo digital CNC é uma réplica virtual fiel da sua máquina-ferramenta que permite simular programas inteiros antes da usinagem real. Ele detecta colisões, violações de limites e erros de código G, eliminando riscos e protegendo sua máquina. A Fanaxis configura Machine Kits no NX CAM e integra o Vericut para máquinas 5 eixos como Hermle, DMG Mori, Grob, Mazak e Okuma.",
  },
  {
    question: "Como a digitalização de processos pode ajudar minha empresa?",
    answer:
      "A digitalização de processos transforma operações manuais em fluxos digitais integrados e rastreáveis. Isso inclui rastreamento de produção em tempo real, redução de erros humanos, integração de dados de máquina com sistemas ERP/MES, e preparação da sua fábrica para a Indústria 4.0 e aplicações de IA.",
  },
  {
    question: "Quais máquinas CNC vocês atendem?",
    answer:
      "A Fanaxis atende máquinas 3, 4 e 5 eixos de diversos fabricantes, incluindo Hermle, DMG Mori, Grob, Mazak e Okuma. Temos experiência com controles Fanuc, Siemens e Heidenhain, e desenvolvemos pós-processadores customizados para cada máquina específica.",
  },
  {
    question: "Como funciona a consultoria da Fanaxis?",
    answer:
      "A consultoria começa com uma análise detalhada dos seus processos atuais de usinagem, avaliando programas, parâmetros de corte, ferramentas e tempos de ciclo. Em seguida, apresentamos um plano de ação com metas mensuráveis e trabalhamos lado a lado com sua equipe para implementar as melhorias. Oferecemos também treinamento técnico e suporte contínuo.",
  },
  {
    question: "Vocês atendem empresas pequenas ou apenas grandes indústrias?",
    answer:
      "A Fanaxis atende empresas de todos os portes. Nossa missão é democratizar o acesso à tecnologia CAD/CAM/CNC de ponta, então oferecemos soluções adaptáveis para pequenas fábricas, médias empresas e grandes indústrias. Cada projeto é personalizado para a necessidade e o orçamento do cliente.",
  },
  {
    question: "Qual o tempo médio para implementar um projeto?",
    answer:
      "O tempo varia conforme a complexidade do projeto. Uma consultoria pontual pode levar de 1 a 2 semanas, enquanto um projeto completo de digitalização pode levar de 1 a 3 meses. Sempre definimos um cronograma claro com marcos de entrega e resultados mensuráveis.",
  },
  {
    question: "Como solicito um orçamento?",
    answer:
      "Você pode entrar em contato pelo WhatsApp clicando no botão verde no canto inferior direito do site, ou através do formulário de contato na página inicial. Responderemos em até 24 horas com uma proposta inicial.",
  },
];

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ | Fanaxis - Perguntas Frequentes sobre Programação CNC e Usinagem</title>
        <meta name="description" content="Perguntas frequentes sobre programação CAM, gêmeo digital CNC, consultoria em usinagem e digitalização de processos. Tire suas dúvidas com a Fanaxis." />

        {/* Open Graph */}
        <meta property="og:title" content="FAQ | Fanaxis - Perguntas Frequentes" />
        <meta property="og:description" content="Perguntas frequentes sobre programação CAM, gêmeo digital CNC, consultoria em usinagem e digitalização de processos." />
        <meta property="og:image" content="https://www.fanaxis.com.br/logo-icon.png" />
        <meta property="og:url" content="https://www.fanaxis.com.br/faq" />
        <meta property="og:type" content="website" />

        {/* Schema Markup - FAQPage */}
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [${faqs
            .map(
              (faq) => `
            {
              "@type": "Question",
              "name": "${faq.question}",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "${faq.answer.replace(/"/g, '\\"')}"
              }
            }`
            )
            .join(",")}]
        }`}</script>
      </Helmet>
      <div className="bg-background text-white min-h-screen">
        <Header />

        <section className="container pt-32 pb-20">
          <p className="font-mono text-sm tracking-widest uppercase text-[#FF6A00] mb-4">
            Dúvidas frequentes
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Perguntas <span className="text-[#FF6A00]">Frequentes</span>
          </h1>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl">
            Tire suas dúvidas sobre programação CAM, gêmeos digitais, consultoria
            e nossos serviços de usinagem CNC.
          </p>

          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-white/10"
                >
                  <AccordionTrigger className="text-left text-white hover:text-[#FF6A00] transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Não encontrou sua dúvida?
            </h2>
            <p className="text-gray-400 mb-8">
              Entre em contato diretamente com nossa equipe.
            </p>
            <Link
              to="/#contato"
              className="inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#e65c00] text-white font-medium px-8 py-4 rounded-sm transition-all hover:scale-105"
            >
              Falar com especialista
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FAQ;
