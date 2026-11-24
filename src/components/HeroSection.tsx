import { useEffect, useRef, useState } from "react";
import CadCorners from "./CadCorners";
import { ArrowDown, FileText } from "lucide-react";

const metrics = [
  { value: "7h → 3h", label: "Rotor macho · ciclo −57%" },
  { value: "4h → 2,5h", label: "Estampo P20 · ciclo −37,5%" },
  { value: "3-4-5 eixos", label: "Posicionado e simultâneo" },
  { value: "NX · hyperMILL", label: "Programação e pós-processadores" },
];

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    if (mq.matches) videoRef.current?.pause();
  }, []);

  return (
    <section className="relative overflow-hidden bg-background pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Grade milimetrada */}
      <div aria-hidden="true" className="absolute inset-0 bg-blueprint opacity-60" />
      <div aria-hidden="true" className="glow w-[640px] h-[640px] -top-40 right-[-120px] md:right-[5%]" />
      <div aria-hidden="true" className="glow-soft w-[520px] h-[520px] top-1/3 -left-40" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center">
          {/* Texto */}
          <div className="order-2 lg:order-1">
            <p className="section-kicker mb-6">
              Gêmeos digitais & programação CAM
            </p>

            <h1 className="text-5xl md:text-6xl xl:text-7xl uppercase leading-[1.02] text-white mb-6">
              Engenharia de métodos e processos de{" "}
              <span className="text-[#FE731A]">usinagem</span>
            </h1>

            <p className="text-lg text-white/75 max-w-xl mb-9 leading-relaxed">
              Programamos e validamos cada peça na réplica digital da sua máquina antes de ela
              chegar ao chão de fábrica.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FE731A] text-white font-medium text-sm rounded-sm hover:bg-[#E5620F] transition-colors"
              >
                Ver projetos técnicos
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/25 text-white font-medium text-sm rounded-sm hover:border-[#FE731A] hover:text-[#FE731A] transition-colors"
              >
                <FileText className="w-4 h-4" />
                Solicitar análise técnica
              </a>
            </div>
          </div>

          {/* Viewport de simulação */}
          <figure className="order-1 lg:order-2 relative">
            <div className="relative p-2 md:p-3">
              <CadCorners size="w-5 h-5" />
              <div className="relative overflow-hidden bg-black border border-white/10">
                <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-[#141414] font-mono text-[10px] md:text-xs tracking-wider uppercase text-white/60">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FE731A] animate-pulse" aria-hidden="true" />
                    Simulação · NX CAM / hyperMILL
                  </span>
                  <span className="hidden xl:inline">Gêmeo digital da máquina</span>
                </div>
                <video
                  ref={videoRef}
                  className="block w-full aspect-video object-cover"
                  src="/assets/hero-gemeo-digital.mp4"
                  poster="/assets/hero-gemeo-digital-poster.jpg"
                  autoPlay={!reduceMotion}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Trechos de simulações FANAXIS no NX CAM e no hyperMILL: centros de usinagem 5 eixos, rotores, apalpamento e trajetórias de ferramenta"
                />
                <div className="flex items-center justify-between px-3 py-2 border-t border-white/10 bg-[#141414] font-mono text-[10px] md:text-xs text-white/50">
                  <span className="hidden sm:inline">Projetos reais FANAXIS</span>
                  <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#FE731A]" aria-hidden="true" />validado antes do chão de fábrica</span>
                </div>
              </div>
            </div>
          </figure>
        </div>

        {/* Números com linha de cota */}
        <div className="mt-14 md:mt-16 border-t border-white/10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
          {metrics.map((m) => (
            <div key={m.label} className="relative pl-4">
              <span aria-hidden="true" className="absolute left-0 top-1 bottom-1 w-px bg-[#FE731A]/60" />
              <p className="font-display text-2xl md:text-3xl xl:text-4xl leading-tight tabular-nums text-[#FE731A]">
                {m.value}
              </p>
              <p className="text-sm text-white/60 mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
