import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 bg-[#111111] border-t border-white/5">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1 - Logo e descrição */}
          <div>
            <p className="font-mono text-xs text-white/60 mb-3">
              Fanaxis
            </p>
            <p className="text-sm text-white/40 leading-relaxed">
              Programação CAD/CAM/CNC, digitalização de processos, gêmeos digitais e
              consultoria em usinagem CNC. We <strong className="text-[#FE731A]">CAM</strong> go further.
            </p>
          </div>

          {/* Coluna 2 - Navegação */}
          <div>
            <p className="font-mono text-xs text-white/60 mb-3">
              Navegação
            </p>
            <div className="flex flex-col gap-2">
              <Link to="/sobre" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                Sobre
              </Link>
              <Link to="/servicos/programacao-cam" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                Programação CAM
              </Link>
              <Link to="/servicos/gemeo-digital" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                Gêmeo Digital
              </Link>
              <Link to="/blog" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                Blog
              </Link>
              <Link to="/faq" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <p className="font-mono text-xs text-white/60 mb-3">
              Contato
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/5511924489409"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/fanaxis.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/in/rodrigo-finarde-6641506b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/40">
            © 2026 Fanaxis — Advanced Machining Solutions
          </p>
          <div className="flex gap-6">
            <Link to="/sobre" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Sobre
            </Link>
            <Link to="/blog" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Blog
            </Link>
            <Link to="/faq" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              FAQ
            </Link>
          </div>
        </div>
        <nav aria-label="Redes sociais" className="mt-6 flex justify-center gap-3">
          <a
            href="https://www.instagram.com/fanaxis.br/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Fanaxis"
            title="Instagram"
            className="inline-flex h-14 w-14 items-center justify-center rounded-md border border-white/20 bg-[#171717] transition hover:border-white/40 hover:bg-[#202020] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FE731A]"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8">
              <defs>
                <linearGradient id="instagram-logo-gradient" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FFDC80" />
                  <stop offset="45%" stopColor="#F77737" />
                  <stop offset="72%" stopColor="#E1306C" />
                  <stop offset="100%" stopColor="#833AB4" />
                </linearGradient>
              </defs>
              <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" fill="none" stroke="url(#instagram-logo-gradient)" strokeWidth="2.2" />
              <circle cx="12" cy="12" r="4.1" fill="none" stroke="url(#instagram-logo-gradient)" strokeWidth="2.2" />
              <circle cx="17.45" cy="6.7" r="1.25" fill="#F77737" />
            </svg>
          </a>
          <a
            href="https://youtube.com/@fanaxis-s4i?si=y2ff3U_le5ZMa30d"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube da Fanaxis"
            title="YouTube"
            className="inline-flex h-14 w-14 items-center justify-center rounded-md border border-white/20 bg-[#171717] transition hover:border-white/40 hover:bg-[#202020] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FE731A]"
          >
            <svg aria-hidden="true" viewBox="0 0 32 32" className="h-9 w-9">
              <rect x="3" y="7" width="26" height="18" rx="5.3" fill="#FF0033" />
              <path d="M13 11.5v9l8-4.5-8-4.5Z" fill="#FFFFFF" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/fanaxis/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn da Fanaxis"
            title="LinkedIn"
            className="inline-flex h-14 w-14 items-center justify-center rounded-md border border-white/20 bg-[#171717] transition hover:border-white/40 hover:bg-[#202020] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FE731A]"
          >
            <svg aria-hidden="true" viewBox="0 0 32 32" className="h-9 w-9">
              <rect x="2" y="2" width="28" height="28" rx="3" fill="#0A66C2" />
              <text x="16" y="23" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, Helvetica, sans-serif" fontSize="18" fontWeight="700" letterSpacing="-1.3">in</text>
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
