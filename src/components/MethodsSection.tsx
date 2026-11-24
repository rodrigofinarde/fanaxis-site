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
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="mb-14 md:mb-20">
          <p className="section-kicker mb-4">Como trabalhamos</p>
          <h2 className="text-3xl md:text-4xl text-foreground">
            Métodos & Otimização
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Cada projeto começa medindo o processo atual e termina medindo o novo, na máquina.
          </p>
        </div>

        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative bg-background border border-white/10 p-8 flex flex-col transition-all duration-300 hover:border-white/20 hover:-translate-y-1 group">
              <span aria-hidden="true" className="absolute top-0 left-0 h-px w-0 bg-[#FE731A] transition-all duration-500 group-hover:w-full" />
              <div className="flex items-center justify-between mb-6">
                <s.icon className="w-6 h-6 text-white/50 group-hover:text-[#FE731A] transition-colors" strokeWidth={1.5} aria-hidden="true" />
                <span className="font-display text-3xl text-white/15 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default MethodsSection;
