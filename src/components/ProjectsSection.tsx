import { useState } from "react";
import { Play } from "lucide-react";
import rotorCover from "@/assets/rotor-case.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    image: rotorCover,
    video: "/assets/case-rotor-fanaxis.mp4",
    title: "Rotor macho | material 1045",
    badges: ["Reprogramação e otimização"],
    metric: "Tempo de ciclo: 7h → 3h",
    description: "Após a reprogramação e otimização da Fanaxis, o tempo de ciclo caiu de 7 horas para 3 horas.",
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
  const [rotorVideoOpened, setRotorVideoOpened] = useState(false);

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
                {p.video ? (
                  rotorVideoOpened ? (
                    <video
                      src={p.video}
                      poster={p.image}
                      controls
                      autoPlay
                      playsInline
                      preload="none"
                      aria-label="Vídeo do case do rotor Fanaxis"
                      className="w-full h-full object-contain bg-black"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setRotorVideoOpened(true)}
                      aria-label="Reproduzir vídeo do case do rotor Fanaxis"
                      className="relative block w-full h-full overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-primary"
                    >
                      <img
                        src={p.image}
                        alt="Rotor do case de reprogramação e otimização da Fanaxis"
                        width={1180}
                        height={1180}
                        loading="lazy"
                        className="w-full h-full object-cover image-technical transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                      <span className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 via-transparent to-transparent pb-5">
                        <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg">
                          <Play className="h-4 w-4" fill="currentColor" aria-hidden="true" />
                          Assistir ao case
                        </span>
                      </span>
                    </button>
                  )
                ) : (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover image-technical transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                )}
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
                {p.software && (
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-mono">{p.software}</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
