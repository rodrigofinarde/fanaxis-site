const Footer = () => {
  return (
    <footer className="py-8 bg-foreground">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-primary-foreground/40">
          © 2026 Finarde CAD/CAM — Programação e Processos de Manufatura
        </p>
        <div className="flex gap-6">
          <a href="#projetos" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
            Projetos
          </a>
          <a href="#contato" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
