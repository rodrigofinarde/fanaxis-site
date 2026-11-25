/* Faixa de credibilidade técnica: só nomes em texto (sem logos de terceiros) */
const groups = [
  { label: "Máquinas", items: ["Hermle", "DMG MORI", "Grob", "Mazak", "Okuma"] },
  { label: "Comandos", items: ["Siemens Sinumerik", "Heidenhain", "Fanuc"] },
  { label: "Softwares", items: ["NX CAM", "hyperMILL", "PowerMill", "Vericut", "Fusion 360"] },
];

const TechStrip = () => (
  <section aria-label="Máquinas, comandos e softwares com que trabalhamos" className="relative bg-background">
    <div aria-hidden="true" className="section-divider absolute top-0 inset-x-0" />
    <div className="container py-10 md:py-12">
      <dl className="grid gap-8 md:grid-cols-3 md:gap-0">
        {groups.map((g, i) => (
          <div key={g.label} className={`md:px-8 ${i === 0 ? "md:pl-0" : "md:border-l border-white/10"}`}>
            <dt className="section-kicker mb-4">{g.label}</dt>
            <dd className="flex flex-wrap gap-x-4 gap-y-2">
              {g.items.map((item) => (
                <span key={item} translate="no" className="notranslate font-mono text-sm tracking-wide text-white/75">
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
    <div aria-hidden="true" className="section-divider absolute bottom-0 inset-x-0" />
  </section>
);

export default TechStrip;
