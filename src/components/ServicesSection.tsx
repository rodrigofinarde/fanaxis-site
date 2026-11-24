import { Cpu, Settings, BarChart3, Wrench } from "lucide-react";
import CadCorners from "./CadCorners";

const services = [
  {
    icon: Cpu,
    title: "Programação CAM",
    description:
      "Fresamento 3, 4 e 5 eixos simultâneos em NX CAM, PowerMill e HyperMILL. Torneamento CNC com ciclos otimizados. Pós-processadores customizados para Fanuc, Siemens e Heidenhain.",
  },
  {
    icon: Settings,
    title: "Análise de Métodos e Processos",
    description:
      "Estudo de tempos e movimentos. Definição de sequência operacional otimizada. Folha de processo, instrução de trabalho e setup sheet para produção seriada e sob demanda.",
  },
  {
    icon: BarChart3,
    title: "Otimização de Ciclo e Ferramentas",
    description:
      "Redução de tempo de ciclo através de estratégias avançadas de usinagem (HSM, trocoidal, adaptive). Análise de vida útil de ferramenta e seleção de parâmetros de corte ideais.",
  },
  {
    icon: Wrench,
    title: "Projeto de Dispositivos e Fixações",
    description:
      "Dispositivos de fixação sob medida. Gabaritos de controle dimensional. Modelagem 3D em NX e Fusion 360 para manufatura e montagem (DFM/DFA).",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 bg-blueprint opacity-40" />
      <div aria-hidden="true" className="glow-soft w-[600px] h-[600px] -bottom-60 right-0" />
      <div className="container relative">
        <div className="mb-14 md:mb-20">
          <p className="section-kicker mb-4">
            Competências
          </p>
          <h2 className="text-3xl md:text-4xl text-foreground">Serviços Técnicos</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <article key={s.title} className="relative p-1.5 group">
              <CadCorners size="w-3 h-3" muted />
              <div className="h-full flex flex-col bg-card border border-white/10 transition-all duration-300 group-hover:border-white/20 group-hover:-translate-y-1">
                {/* Barra da janela */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 font-mono text-[10px] tracking-wider uppercase text-white/50">
                  <span>
                    <span className="text-white/40 group-hover:text-[#FE731A] transition-colors">{String(i + 1).padStart(2, "0")}</span>
                  </span>
                  <s.icon className="w-4 h-4 text-white/45 group-hover:text-[#FE731A] transition-colors" strokeWidth={1.5} aria-hidden="true" />
                </div>

                <div className="p-5 flex-1">
                  <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{s.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
