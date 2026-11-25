import { Link } from "react-router-dom";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import logoText from "@/assets/logo-text.png";

const servicos = [
  ["Programação CAD/CAM/CNC", "/servicos/programacao-cam"],
  ["Gêmeo Digital CNC", "/servicos/gemeo-digital"],
  ["Consultoria em Usinagem", "/servicos/consultoria-usinagem"],
  ["Digitalização de Processos", "/servicos/digitalizacao-processos"],
  ["Programação 5 Eixos", "/programacao-cnc-5-eixos"],
];

const empresa = [
  ["Sobre", "/sobre"],
  ["Projetos", "/#projetos"],
  ["Blog", "/blog"],
  ["FAQ", "/faq"],
];

/* Botões das redes com as cores oficiais de cada marca */
const btnCls =
  "inline-flex h-12 w-12 items-center justify-center border border-white/15 bg-[#1B1D22] transition-all duration-300 hover:border-white/40 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FE731A]";

const InstagramLogo = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7">
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
);

const YouTubeLogo = () => (
  <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8">
    <rect x="3" y="7" width="26" height="18" rx="5.3" fill="#FF0033" />
    <path d="M13 11.5v9l8-4.5-8-4.5Z" fill="#FFFFFF" />
  </svg>
);

const LinkedInLogo = () => (
  <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8">
    <rect x="2" y="2" width="28" height="28" rx="3" fill="#0A66C2" />
    <text x="16" y="23" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, Helvetica, sans-serif" fontSize="18" fontWeight="700" letterSpacing="-1.3">in</text>
  </svg>
);

const redes = [
  { label: "Instagram", href: "https://www.instagram.com/fanaxis.br/", Logo: InstagramLogo },
  { label: "YouTube", href: "https://youtube.com/@fanaxis-s4i?si=y2ff3U_le5ZMa30d", Logo: YouTubeLogo },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/fanaxis/", Logo: LinkedInLogo },
];

const linkCls = "text-sm text-white/50 hover:text-white transition-colors";
const headCls = "font-mono text-[11px] tracking-[0.22em] uppercase text-white/40 mb-5";

const Footer = () => {
  return (
    <footer className="relative bg-[#121418] border-t border-white/10 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 bg-blueprint opacity-25" />
      <div className="container relative pt-20 pb-24">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Marca */}
          <div className="md:col-span-4">
            <Link to="/" aria-label="Fanaxis — página inicial" className="inline-flex items-center gap-3 mb-6">
              <img src={logoIcon} alt="" aria-hidden="true" className="h-9 w-auto" />
              <img src={logoText} alt="Fanaxis" className="h-5 w-auto" />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs mb-6">
              Gêmeos digitais e programação CAM para usinagem CNC de 3 a 5 eixos. Cada programa
              validado antes de chegar à máquina.
            </p>
            <p className="font-display text-2xl tracking-wide text-white">
              WE <span className="text-[#FE731A]">CAM</span> GO FURTHER
            </p>
          </div>

          {/* Serviços */}
          <nav aria-label="Serviços" className="md:col-span-3">
            <p className={headCls}>Serviços</p>
            <ul className="space-y-3">
              {servicos.map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className={linkCls}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Empresa */}
          <nav aria-label="Empresa" className="md:col-span-2">
            <p className={headCls}>Empresa</p>
            <ul className="space-y-3">
              {empresa.map(([label, to]) => (
                <li key={to}>
                  {to.startsWith("/#") ? (
                    <a href={to} className={linkCls}>
                      {label}
                    </a>
                  ) : (
                    <Link to={to} className={linkCls}>
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div className="md:col-span-3">
            <p className={headCls}>Contato</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5511924489409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkCls} inline-flex items-center gap-2.5`}
                >
                  <MessageCircle className="w-4 h-4 text-white/35" aria-hidden="true" />
                  (11) 92448-9409
                </a>
              </li>
              <li>
                <a href="mailto:rodrigo.finarde@fanaxis.com.br" className={`${linkCls} inline-flex items-center gap-2.5 break-all`}>
                  <Mail className="w-4 h-4 text-white/35 shrink-0" aria-hidden="true" />
                  rodrigo.finarde@fanaxis.com.br
                </a>
              </li>
              <li className="text-sm text-white/50 inline-flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-white/35" aria-hidden="true" />
                São Bernardo do Campo · SP
              </li>
            </ul>

            <nav aria-label="Redes sociais" className="flex gap-3 mt-7">
              {redes.map(({ label, href, Logo }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} da Fanaxis`}
                  title={label}
                  className={btnCls}
                >
                  <Logo />
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 md:items-center md:justify-between font-mono text-[11px] tracking-wider text-white/35">
          <p>© {new Date().getFullYear()} FANAXIS · CNPJ 68.159.320/0001-22</p>
          <p>Em parceria com Agile2 Consulting</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
