import { Cpu, Settings, BarChart3, Wrench } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Programação CAM",
    description: "Fresamento 3, 4 e 5 eixos simultâneos em NX CAM, PowerMill e HyperMILL. Torneamento CNC com ciclos otimizados. Pós-processadores customizados para Fanuc, Siemens e Heidenhain.",
  },
  {
    icon: Settings,
    title: "Análise de Métodos e Processos",
    description: "Estudo de tempos e movimentos. Definição de sequência operacional otimizada. Folha de processo, instrução de trabalho e setup sheet para produção seriada e sob demanda.",
  },
  {
    icon: BarChart3,
    title: "Otimização de Ciclo e Ferramentas",
    description: "Redução de tempo de ciclo através de estratégias avançadas de usinagem (HSM, trochoidal, adaptive). Análise de vida útil de ferramenta e seleção de parâmetros de corte ideais.",
  },
  {
    icon: Wrench,
    title: "Projeto de Dispositivos e Fixações",
    description: "Dispositivos de fixação sob medida. Gabaritos de controle dimensional. Modelagem 3D em NX e Fusion 360 para manufatura e montagem (DFM/DFA).",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
            Competências
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Serviços Técnicos
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="card-technical bg-card rounded-lg p-6">
              <s.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
