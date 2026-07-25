import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 bg-foreground border-t border-white/5">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1 - Logo e descrição */}
          <div>
            <p className="font-mono text-xs text-primary-foreground/60 mb-3">
              Fanaxis
            </p>
            <p className="text-sm text-primary-foreground/40 leading-relaxed">
              Programação CAD/CAM/CNC, digitalização de processos, gêmeos digitais e
              consultoria em usinagem CNC. We <strong className="text-[#FF6A00]">CAM</strong> go further.
            </p>
          </div>

          {/* Coluna 2 - Navegação */}
          <div>
            <p className="font-mono text-xs text-primary-foreground/60 mb-3">
              Navegação
            </p>
            <div className="flex flex-col gap-2">
              <Link to="/sobre" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
                Sobre
              </Link>
              <Link to="/servicos/programacao-cam" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
                Programação CAM
              </Link>
              <Link to="/servicos/gemeo-digital" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
                Gêmeo Digital
              </Link>
              <Link to="/blog" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
                Blog
              </Link>
              <Link to="/faq" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <p className="font-mono text-xs text-primary-foreground/60 mb-3">
              Contato
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/5511924489409"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/fanaxis.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/in/rodrigo-finarde-6641506b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-primary-foreground/40">
            © 2026 Fanaxis — Advanced Machining Solutions
          </p>
          <div className="flex gap-6">
            <Link to="/sobre" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
              Sobre
            </Link>
            <Link to="/blog" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
              Blog
            </Link>
            <Link to="/faq" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
