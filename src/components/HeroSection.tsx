import heroBg from "@/assets/hero-bg.webp";
import { ArrowDown, FileText } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Fresamento CNC em 5 eixos"
          className="w-full h-full object-cover scale-105"
        />

        {/* 🔥 Overlay PERFEITO (equilíbrio entre contraste e imagem) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
      </div>

      {/* Conteúdo */}
      <div className="container relative z-10 py-24">
        <div className="max-w-3xl">
          
          <p className="font-mono text-sm tracking-widest uppercase text-white/70 mb-6">
            FANAXIS • ENGENHARIA DE MANUFATURA
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.02] text-white mb-6">
            Engenharia de métodos e processos de{" "}
            <span className="text-[#FE731A]">
              usinagem
            </span>
          </h1>

          <p className="text-lg text-white/80 max-w-xl mb-10 leading-relaxed">
            Programação CAD/CAM/CNC baseada em gêmeos digitais customizados.
          </p>

          <div className="flex flex-wrap gap-4">
            
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FE731A] text-white font-medium text-sm rounded-sm hover:bg-[#E5620F] transition-all hover:scale-105"
            >
              Ver Projetos Técnicos
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium text-sm rounded-sm hover:bg-white/10 transition-all hover:scale-105"
            >
              <FileText className="w-4 h-4" />
              Solicitar Análise Técnica
            </a>
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
          {[
            { value: "7h → 3h", label: "Rotor macho · ciclo −57%" },
            { value: "4h → 2,5h", label: "Estampo P20 · ciclo −37,5%" },
            { value: "3-4-5 eixos", label: "Programação posicionada e simultânea" },
            { value: "NX · hyperMILL", label: "Programação CAM e pós-processadores" },
          ].map((m) => (
            <div key={m.label} className="border-l border-white/20 pl-4">
              <p className="font-display text-2xl md:text-4xl tabular-nums text-[#FE731A] whitespace-nowrap">
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
