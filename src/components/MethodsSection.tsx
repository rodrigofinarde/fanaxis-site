import { ClipboardList, Box, Cpu, Factory } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Diagnóstico do processo",
    text: "Levantamos a peça, o programa atual, as ferramentas, a fixação e o tempo de ciclo real. É a linha de base contra a qual o resultado é medido.",
  },
  {
    icon: Box,
    title: "Máquina virtual",
    text: "Montamos ou ajustamos o machine kit e o pós-processador da sua máquina, para que o NC simulado seja o mesmo que vai rodar no comando.",
  },
  {
    icon: Cpu,
    title: "Programação e simulação",
    text: "Reprogramamos no NX CAM ou no hyperMILL com estratégias 3+2 ou 5 eixos simultâneos, validando colisões, cursos e transições antes de liberar.",
  },
  {
    icon: Factory,
    title: "Validação na máquina",
    text: "O novo programa é conferido na máquina e o tempo de ciclo é comparado com a linha de base. O ganho é medido em horas, não em promessa.",
  },
];

const MethodsSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
            Como trabalhamos
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Métodos & Otimização
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Cada projeto começa medindo o processo atual e termina medindo o novo, na máquina.
          </p>
        </div>

        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="card-technical bg-background rounded-lg p-8 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <s.icon className="w-6 h-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
                <span className="font-display text-3xl text-white/15 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default MethodsSection;
