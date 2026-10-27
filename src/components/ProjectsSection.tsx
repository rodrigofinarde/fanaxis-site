import { useState } from "react";
import { Play } from "lucide-react";
import rotorCover from "@/assets/rotor-case.jpg";
import stampCover from "@/assets/estampo-p20-cover.jpg";
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
    image: stampCover,
    video: "/assets/case-ferramenta-estampo-p20.mp4",
    videoLabel: "Vídeo do case da ferramenta de estampo em material P20",
    playButtonLabel: "Reproduzir vídeo do case da ferramenta de estampo em material P20",
    imageAlt: "Foto da peça para a ferramenta de estampo em material P20",
    imageFit: "object-contain bg-black",
    title: "Ferramenta de estampo | material P20",
    badges: ["Simulação CAM", "Usinagem real"],
    metric: "Simulação CAM + usinagem real",
    description: "O vídeo apresenta a simulação CAM no NX CAM e a usinagem real da ferramenta de estampo em material P20.",
    software: "NX CAM",
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
  const [openedVideos, setOpenedVideos] = useState<Record<string, boolean>>({});

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
                  openedVideos[p.video] ? (
                    <video
                      src={p.video}
                      poster={p.image}
                      controls
                      autoPlay
                      playsInline
                      preload="none"
                      aria-label={p.videoLabel ?? "Vídeo do case do rotor Fanaxis"}
                      className="w-full h-full object-contain bg-black"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        if (p.video) {
                          setOpenedVideos((current) => ({ ...current, [p.video]: true }));
                        }
                      }}
                      aria-label={p.playButtonLabel ?? "Reproduzir vídeo do case do rotor Fanaxis"}
                      className="relative block w-full h-full overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-primary"
                    >
                      <img
                        src={p.image}
                        alt={p.imageAlt ?? "Rotor do case de reprogramação e otimização da Fanaxis"}
                        width={1180}
                        height={1180}
                        loading="lazy"
                        className={`w-full h-full ${p.imageFit ?? "object-cover"} image-technical transition-transform duration-300 group-hover:scale-[1.02]`}
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
