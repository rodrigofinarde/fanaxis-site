import { ArrowRight, AlertTriangle, CheckCircle } from "lucide-react";

const comparisons = [
  {
    problem: {
      title: "Gargalo no Setup",
      items: [
        "4 fixações por peça",
        "Retrabalho por erro de referenciamento",
        "Tempo morto de 25min entre operações",
      ],
    },
    solution: {
      title: "Setup Otimizado",
      items: [
        "2 fixações com dispositivo modular",
        "Zero-point system com repetibilidade de 5µm",
        "Tempo morto reduzido para 8min",
      ],
    },
  },
  {
    problem: {
      title: "Quebra Frequente de Ferramenta",
      items: [
        "Avanço por dente excessivo (fz 0.15mm)",
        "Sem monitoramento de carga do spindle",
        "Troca reativa — apenas após quebra",
      ],
    },
    solution: {
      title: "Gestão de Ferramentas",
      items: [
        "Parâmetros calibrados por material (fz 0.08mm)",
        "Monitoramento de potência em tempo real",
        "Troca preventiva baseada em vida útil calculada",
      ],
    },
  },
];

const MethodsSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
            Análise de Processos
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Métodos & Otimização
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Cada projeto começa com uma análise detalhada do processo atual. 
            Identificamos gargalos e implementamos soluções mensuráveis.
          </p>
        </div>

        <div className="space-y-8">
          {comparisons.map((c, i) => (
            <div
              key={i}
              className="card-technical bg-background rounded-lg overflow-hidden"
            >
              <div className="grid md:grid-cols-[1fr_auto_1fr]">
                {/* Problem */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-4 h-4 text-accent" />
                    <h3 className="font-semibold text-foreground">{c.problem.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {c.problem.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        <span className="font-mono">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center p-4">
                  <ArrowRight className="w-6 h-6 text-primary rotate-90 md:rotate-0" />
                </div>

                {/* Solution */}
                <div className="p-8 bg-primary/[0.03]">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <h3 className="font-semibold text-foreground">{c.solution.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {c.solution.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span className="font-mono">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodsSection;
