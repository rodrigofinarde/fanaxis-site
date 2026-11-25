import { useEffect, useRef, useState } from "react";
import CadCorners from "./CadCorners";
import { useLang, tr } from "@/lib/useLang";
import { Play } from "lucide-react";
import rotorCover from "@/assets/rotor-case.jpg";
import stampCover from "@/assets/estampo-p20-cover.jpg";

const projects = [
  {
    image: rotorCover,
    video: "/assets/case-rotor-fanaxis.mp4",
    title: "Rotor macho | material 1045",
    titleT: { pt: "Rotor macho | material 1045", en: "Male rotor | material 1045", de: "Hauptläufer | Werkstoff 1045", it: "Rotore maschio | materiale 1045" },
    badges: ["Reprogramação e otimização"],
    metric: "Tempo de ciclo: 7h → 3h (−57%)",
    before: 7,
    after: 3,
    stage: "Reprogramação → usinagem real",
    description: "Reprogramação e otimização da estratégia CAM pela Fanaxis.",
  },
  {
    image: stampCover,
    video: "/assets/case-ferramenta-estampo-p20.mp4",
    videoLabel: "Vídeo do case da ferramenta de estampo em material P20",
    playButtonLabel: "Reproduzir vídeo do case da ferramenta de estampo em material P20",
    imageAlt: "Foto da peça para a ferramenta de estampo em material P20",
    imageFit: "object-contain bg-black",
    title: "Ferramenta de estampo | material P20",
    badges: ["Reprogramação", "Simulação CAM", "Usinagem real"],
    metric: "Tempo de ciclo: 4h → 2,5h (−37,5%)",
    before: 4,
    after: 2.5,
    stage: "Simulação NX CAM → usinagem real",
    description: "Reprogramação no NX CAM. O vídeo mostra a simulação e a usinagem real da ferramenta de estampo em aço P20.",
    software: "NX CAM",
  },
];

const fmt = (h: number) => `${String(h).replace(".", ",")}h`;

/* Barra de tempo de ciclo que encolhe quando entra na tela */
const CycleBar = ({ before, after }: { before: number; after: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const pct = (after / before) * 100;
  return (
    <div ref={ref} className="space-y-2 font-mono text-xs" aria-label={`Tempo de ciclo de ${fmt(before)} para ${fmt(after)}`}>
      <div className="flex items-center gap-3">
        <span className="w-14 text-white/45 uppercase tracking-wider">Antes</span>
        <div className="flex-1 h-2.5 bg-white/5">
          <div className="h-full bg-white/30 w-full" />
        </div>
        <span translate="no" className="notranslate w-10 text-right text-white/60 tabular-nums">{fmt(before)}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-14 text-[#FE731A] uppercase tracking-wider">Depois</span>
        <div className="flex-1 h-2.5 bg-white/5">
          <div
            className="h-full bg-[#FE731A] transition-[width] duration-[1400ms] ease-out"
            style={{ width: on ? `${pct}%` : "100%" }}
          />
        </div>
        <span translate="no" className="notranslate w-10 text-right text-[#FE731A] tabular-nums">{fmt(after)}</span>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const lang = useLang();
  const [openedVideos, setOpenedVideos] = useState<Record<string, boolean>>({});

  return (
    <section id="projetos" className="relative overflow-hidden py-24 md:py-32 bg-secondary">
      <div aria-hidden="true" className="glow w-[700px] h-[500px] top-1/4 -left-60 opacity-70" />
      <div className="container relative">
        <div className="mb-14 md:mb-20">
          <p className="section-kicker mb-4">
            Do gêmeo digital ao chão de fábrica
          </p>
          <h2 className="text-3xl md:text-4xl text-foreground">Projetos reais</h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            A simulação que você viu no topo, agora na máquina. Assista à usinagem e compare o tempo de ciclo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <article key={i} className="relative p-1.5 group">
              <CadCorners muted />
              <div className="h-full bg-card border border-white/10 overflow-hidden transition-all duration-300 group-hover:border-white/20 group-hover:-translate-y-1">
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 font-mono text-[10px] md:text-xs tracking-wider uppercase text-white/50">
                <span>
                  <span className="text-white/80">Case {String(i + 1).padStart(2, "0")}</span> · {p.stage}
                </span>
              </div>
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
                        <span className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg">
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
                    <span key={b} className="font-mono text-[10px] tracking-wider uppercase px-2 py-1 border border-white/15 text-white/60">{b}</span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {p.titleT ? <span translate="no" className="notranslate">{tr(lang, p.titleT)}</span> : p.title}
                </h3>
                {p.before && p.after ? (
                  <div className="mb-5">
                    <CycleBar before={p.before} after={p.after} />
                  </div>
                ) : (
                  <p className="font-mono text-sm tabular-nums text-primary font-medium mb-3">
                    {p.metric.split(": ")[0]}:{" "}
                    <span translate="no" className="notranslate">{p.metric.split(": ")[1]}</span>
                  </p>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {p.description}
                </p>
                {p.software && (
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-mono">{p.software}</span>
                  </div>
                )}
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
