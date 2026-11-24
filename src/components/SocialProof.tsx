const metrics = [
  {
    value: "20+",
    label: "anos de experiência em usinagem",
  },
  {
    value: "5 eixos",
    label: "especialistas em programação simultânea",
  },
  {
    value: "Gêmeo digital",
    label: "machine kits e pós-processadores sob medida para a sua máquina",
  },
];

const SocialProof = () => {
  return (
    <section className="relative py-24 md:py-32 bg-background">
      <div aria-hidden="true" className="section-divider absolute top-0 inset-x-0" />
      <div aria-hidden="true" className="section-divider absolute bottom-0 inset-x-0" />
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-5">
            <p className="section-kicker mb-4">Por que nos escolher</p>
            <h2 className="text-3xl md:text-4xl text-white mb-5">Experiência de chão de fábrica</h2>
            <p className="text-white/55 max-w-md leading-relaxed">
              Mais de duas décadas de experiência em usinagem CNC, com foco em resultados
              medidos na máquina, não na apresentação.
            </p>
          </div>

          <dl className="lg:col-span-7 grid sm:grid-cols-3 border-t border-white/10 sm:border-t-0">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="py-6 sm:py-2 sm:px-8 first:sm:pl-0 border-b sm:border-b-0 sm:border-l first:sm:border-l-0 border-white/10"
              >
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <p className="font-display text-4xl md:text-5xl text-white leading-none mb-3">{m.value}</p>
                  <p className="text-sm text-white/50 leading-snug">{m.label}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
