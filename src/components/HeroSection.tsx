import heroBg from "@/assets/hero-bg.png";
import { ArrowDown, FileText } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="CNC milling in action"
          className="w-full h-full object-cover scale-105"
        />

        {/* 🔥 Overlay PERFEITO (equilíbrio entre contraste e imagem) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
      </div>

      {/* Conteúdo */}
      <div className="container relative z-10 py-24">
        <div className="max-w-3xl">
          
          <p className="font-mono text-sm tracking-widest uppercase text-white/70 mb-6">
            FANAXIS CAD/CAM • NX • PowerMill • HyperMILL
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white mb-6">
            Programação CAM de alta performance para redução real de tempo de usinagem.{" "}
            <span className="font-mono text-[#FF6A00]">
              Precisão e eficiência aplicadas diretamente ao seu processo de usinagem.
            </span>
          </h1>

          <p className="text-lg text-white/80 max-w-xl mb-10 leading-relaxed">
            Programação CAM de alta performance,desenvolvimento,digitalização e análise de processos de usinagem.
            Redução de custos operacionais através da otimização de percursos de ferramenta e diminuição de setup.
          </p>

          <div className="flex flex-wrap gap-4">
            
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6A00] text-white font-medium text-sm rounded-sm hover:bg-[#e65c00] transition-all hover:scale-105"
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
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "-20%", label: "Tempo de ciclo" },
            { value: "+35%", label: "Vida útil da ferramenta" },
            { value: "3-4-5 eixos", label: "Programação posicionada e  simultânea" },
            { value: "15min", label: "Redução média por peça" },
          ].map((m) => (
            <div key={m.label} className="border-l border-white/20 pl-4">
              <p className="font-mono text-2xl md:text-3xl font-semibold tabular-nums text-[#FF6A00]">
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