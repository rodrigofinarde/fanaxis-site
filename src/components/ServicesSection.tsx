import { Cpu, Settings, BarChart3, Wrench } from "lucide-react";
import CadCorners from "./CadCorners";

/* Cada serviço tem um "painel" próprio no estilo da tela do CAM — sem repetir peças */
const services = [
  {
    icon: Cpu,
    tag: "NC",
    title: "Programação CAM",
    description:
      "Fresamento 3, 4 e 5 eixos simultâneos em NX CAM, PowerMill e HyperMILL. Torneamento CNC com ciclos otimizados. Pós-processadores customizados para Fanuc, Siemens e Heidenhain.",
    panel: [
      ["N10", "CYCLE800(1,\"TC1\",200000,57,0,0,0,-30,0,0,0,0,0,-1)"],
      ["N20", "TRAORI"],
      ["N30", "G1 X42.18 Y-8.06 Z12.40 F2400"],
    ],
  },
  {
    icon: Settings,
    tag: "OP",
    title: "Análise de Métodos e Processos",
    description:
      "Estudo de tempos e movimentos. Definição de sequência operacional otimizada. Folha de processo, instrução de trabalho e setup sheet para produção seriada e sob demanda.",
    panel: [
      ["OP10", "Desbaste 3+2 ........ T12 Ø16"],
      ["OP20", "Semiacabamento ...... T07 Ø10R2"],
      ["OP30", "Acabamento 5X ....... T03 Ø6R3"],
    ],
  },
  {
    icon: BarChart3,
    tag: "VC",
    title: "Otimização de Ciclo e Ferramentas",
    description:
      "Redução de tempo de ciclo através de estratégias avançadas de usinagem (HSM, trocoidal, adaptive). Análise de vida útil de ferramenta e seleção de parâmetros de corte ideais.",
    panel: [
      ["vc", "parâmetros por material"],
      ["ae", "engajamento constante · HSM"],
      ["T", "vida útil monitorada"],
    ],
  },
  {
    icon: Wrench,
    tag: "G54",
    title: "Projeto de Dispositivos e Fixações",
    description:
      "Dispositivos de fixação sob medida. Gabaritos de controle dimensional. Modelagem 3D em NX e Fusion 360 para manufatura e montagem (DFM/DFA).",
    panel: [
      ["G54", "X0 Y0 Z0 · referência"],
      ["FIX", "zero-point · grampos"],
      ["DFM", "acesso da ferramenta"],
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 bg-blueprint opacity-40" />
      <div className="container relative">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#FE731A] mb-3 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-[#FE731A]" aria-hidden="true" />
            Competências
          </p>
          <h2 className="text-3xl md:text-4xl text-foreground">Serviços Técnicos</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <article key={s.title} className="relative p-1.5 group">
              <CadCorners size="w-3 h-3" />
              <div className="h-full flex flex-col bg-[#141414] border border-white/10 transition-colors group-hover:border-[#FE731A]/50">
                {/* Barra da janela */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 font-mono text-[10px] tracking-wider uppercase text-white/50">
                  <span>
                    <span className="text-[#FE731A]">{String(i + 1).padStart(2, "0")}</span> / {s.tag}
                  </span>
                  <s.icon className="w-4 h-4 text-[#FE731A]" strokeWidth={1.5} aria-hidden="true" />
                </div>

                {/* Painel técnico */}
                <div aria-hidden="true" className="px-3 py-3 bg-black/60 border-b border-white/10 font-mono text-[10.5px] leading-relaxed overflow-hidden">
                  {s.panel.map(([k, v]) => (
                    <div key={k} className="flex gap-2 whitespace-nowrap">
                      <span className="text-[#FE731A] w-9 shrink-0">{k}</span>
                      <span className="text-white/55 truncate">{v}</span>
                    </div>
                  ))}
                </div>

                <div className="p-5 flex-1">
                  <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
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
