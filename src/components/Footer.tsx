import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, Mail, MessageCircle, MapPin } from "lucide-react";
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

const redes = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/fanaxis/", Icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/fanaxis.br/", Icon: Instagram },
  { label: "YouTube", href: "https://youtube.com/@fanaxis-s4i?si=y2ff3U_le5ZMa30d", Icon: Youtube },
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

            <div className="flex gap-2 mt-7">
              {redes.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} da Fanaxis`}
                  title={label}
                  className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white/55 transition-colors hover:border-[#FE731A] hover:text-[#FE731A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FE731A]"
                >
                  <Icon className="w-[18px] h-[18px]" strokeWidth={1.6} aria-hidden="true" />
                </a>
              ))}
            </div>
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
