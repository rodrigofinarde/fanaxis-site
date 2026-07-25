import { Award, Cog, Handshake } from "lucide-react";

const metrics = [
  {
    icon: Award,
    value: "20+",
    label: "anos de experiência em usinagem",
  },
  {
    icon: Cog,
    value: "5 eixos",
    label: "especialistas em programação simultânea",
  },
  {
    icon: Handshake,
    value: "Parceiro",
    label: "tecnológico da indústria",
  },
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-[#1a1a1a]">
      <div className="container">
        <p className="font-mono text-sm tracking-widest uppercase text-[#FF6A00] mb-3 text-center">
          Por que nos escolher
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 text-center">
          Confiado por profissionais da indústria
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Mais de duas décadas de experiência em usinagem CNC, com foco em resultados
          mensuráveis para a sua produção.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="text-center border border-white/10 rounded-lg p-8 bg-background/50"
            >
              <m.icon className="w-10 h-10 text-[#FF6A00] mx-auto mb-4" strokeWidth={1.5} />
              <p className="font-mono text-3xl md:text-4xl font-bold text-white mb-2">
                {m.value}
              </p>
              <p className="text-sm text-gray-400">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
