import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    image: project1,
    title: "Flange Aeronáutica – Alumínio 7075",
    badges: ["Fresamento 5 eixos", "Desbaste HPC"],
    metric: "Tempo de ciclo: 12min → 9min45s",
    metricDelta: "-18%",
    description: "Otimização de percurso trocoidal com redução de 18% no tempo de ciclo. Estratégia de desbaste HPC com fresa de metal duro Ø12mm.",
    software: "Mastercam",
  },
  {
    image: project2,
    title: "Base de Molde – Aço P20",
    badges: ["Fresamento 3+2", "Simulação CAM"],
    metric: "Setup: 4 fixações → 2 fixações",
    metricDelta: "-50%",
    description: "Reprogramação completa com redução de setups. Análise de colisão integrada e pós-processamento customizado para Fanuc 0i-MF.",
    software: "Fusion 360",
  },
  {
    image: project3,
    title: "Eixo de Transmissão – SAE 4140",
    badges: ["Torno CNC", "Ciclo Fixo"],
    metric: "Acabamento: Ra 0.8µm",
    metricDelta: "Ra 0.8",
    description: "Programação de torneamento com ciclos fixos otimizados. Rosca M24x2 com entrada e saída controlada. Tolerância h6 no diâmetro principal.",
    software: "Siemens NX",
  },
  {
    image: project4,
    title: "Cavidade de Molde de Injeção",
    badges: ["HSM", "Eletroerosão", "Acabamento"],
    metric: "Vida da ferramenta: +40%",
    metricDelta: "+40%",
    description: "Estratégia HSM com passo constante para acabamento de superfícies complexas. Redução de 40% no desgaste de ferramenta com parâmetros otimizados.",
    software: "Mastercam",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 bg-background">
      <div className="container">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
            Portfólio Técnico
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Projetos Recentes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={i}
              className="card-technical bg-card rounded-lg overflow-hidden group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover image-technical transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.badges.map((b) => (
                    <span key={b} className="badge-technical">{b}</span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="font-mono text-sm tabular-nums text-primary font-medium mb-3">
                  {p.metric}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-mono">{p.software}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
