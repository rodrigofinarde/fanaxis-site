import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import logoIcon from "@/assets/logo-icon.png";
import logoText from "@/assets/logo-text.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Transparente sobre o topo da home; sólido e mais fino ao rolar */
  const solid = scrolled || !isHomePage || open;

  const logoImages = (
    <>
      <img
        src={logoIcon}
        alt=""
        aria-hidden="true"
        className={`w-auto transition-all duration-300 ${solid ? "h-8" : "h-10"}`}
      />
      <img
        src={logoText}
        alt="Fanaxis"
        className={`w-auto transition-all duration-300 ${solid ? "h-5" : "h-6"}`}
      />
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-[#0A0A0A]/85 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className={`container flex items-center justify-between transition-all duration-300 ${solid ? "h-16" : "h-20"}`}>

        {/* LOGO */}
        <Link
          to="/"
          aria-label="Fanaxis — página inicial"
          className="flex flex-col items-start gap-1"
        >
          <span className="flex items-center gap-3">{logoImages}</span>
          <span
            className={`self-stretch text-center font-sans text-[11px] tracking-[0.08em] text-white/60 transition-all duration-300 overflow-hidden ${
              solid ? "max-h-0 opacity-0" : "max-h-5 opacity-100"
            }`}
          >
            Advanced Machining Solutions
          </span>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Dropdown Serviços */}
          <div className="relative group">
            <button
              className="nav-link text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1"
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              Serviços
              <ChevronDown className="w-3 h-3" />
            </button>
            {servicesOpen && (
              <div
                className="absolute top-full left-0 pt-3 w-64"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div className="bg-[#0F0F10]/95 backdrop-blur-md border border-white/10 shadow-2xl py-2">
                <Link
                  to="/servicos/programacao-cam"
                  className="block px-4 py-2.5 text-sm text-white/65 hover:text-white hover:bg-white/5 border-l-2 border-transparent hover:border-[#FE731A] transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  Programação CAD/CAM/CNC
                </Link>
                <Link
                  to="/servicos/gemeo-digital"
                  className="block px-4 py-2.5 text-sm text-white/65 hover:text-white hover:bg-white/5 border-l-2 border-transparent hover:border-[#FE731A] transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  Gêmeo Digital CNC
                </Link>
                <Link
                  to="/servicos/consultoria-usinagem"
                  className="block px-4 py-2.5 text-sm text-white/65 hover:text-white hover:bg-white/5 border-l-2 border-transparent hover:border-[#FE731A] transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  Consultoria em Usinagem
                </Link>
                <Link
                  to="/servicos/digitalizacao-processos"
                  className="block px-4 py-2.5 text-sm text-white/65 hover:text-white hover:bg-white/5 border-l-2 border-transparent hover:border-[#FE731A] transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  Digitalização de Processos
                </Link>
                </div>
              </div>
            )}
          </div>

          {[
            ["Projetos", isHomePage ? "/#projetos" : "/#projetos"],
            ["Métodos", isHomePage ? "/#metodos" : "/#metodos"],
          ].map(([label, href]) => (
            href.startsWith("/#") ? (
              <a
                key={label}
                href={href}
                className="nav-link text-sm text-white/70 hover:text-white transition-colors"
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                to={href}
                className="nav-link text-sm text-white/70 hover:text-white transition-colors"
              >
                {label}
              </Link>
            )
          ))}

          <Link
            to="/sobre"
            className="nav-link text-sm text-white/70 hover:text-white transition-colors"
          >
            Sobre
          </Link>

          <Link
            to="/blog"
            className="nav-link text-sm text-white/70 hover:text-white transition-colors"
          >
            Blog
          </Link>

          <Link
            to="/faq"
            className="nav-link text-sm text-white/70 hover:text-white transition-colors"
          >
            FAQ
          </Link>

          <a
            href={isHomePage ? "/#contato" : "/#contato"}
            className="text-sm border border-[#FE731A] text-white hover:bg-[#FE731A] px-5 py-2 rounded-sm transition-colors font-medium tracking-wide"
          >
            Contato
          </a>
        </nav>

        {/* MOBILE */}
        <button
          className="md:hidden text-white p-2 -mr-2"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-md border-t border-white/10 py-6">
          <div className="container flex flex-col gap-4">
            <p className="section-kicker">Serviços</p>
            <Link
              to="/servicos/programacao-cam"
              onClick={() => setOpen(false)}
              className="text-sm text-white/70 hover:text-white pl-2"
            >
              Programação CAD/CAM/CNC
            </Link>
            <Link
              to="/servicos/gemeo-digital"
              onClick={() => setOpen(false)}
              className="text-sm text-white/70 hover:text-white pl-2"
            >
              Gêmeo Digital CNC
            </Link>
            <Link
              to="/servicos/consultoria-usinagem"
              onClick={() => setOpen(false)}
              className="text-sm text-white/70 hover:text-white pl-2"
            >
              Consultoria em Usinagem
            </Link>
            <Link
              to="/servicos/digitalizacao-processos"
              onClick={() => setOpen(false)}
              className="text-sm text-white/70 hover:text-white pl-2"
            >
              Digitalização de Processos
            </Link>

            <Link
              to="/"
              onClick={() => { setOpen(false); setTimeout(() => window.scrollTo({ top: document.getElementById('projetos')?.offsetTop ?? 0, behavior: 'smooth' }), 100); }}
              className="text-sm text-white/70 hover:text-white"
            >
              Projetos
            </Link>
            <Link
              to="/"
              onClick={() => { setOpen(false); setTimeout(() => window.scrollTo({ top: document.getElementById('metodos')?.offsetTop ?? 0, behavior: 'smooth' }), 100); }}
              className="text-sm text-white/70 hover:text-white"
            >
              Métodos
            </Link>
            <Link
              to="/sobre"
              onClick={() => setOpen(false)}
              className="text-sm text-white/70 hover:text-white"
            >
              Sobre
            </Link>
            <Link
              to="/blog"
              onClick={() => setOpen(false)}
              className="text-sm text-white/70 hover:text-white"
            >
              Blog
            </Link>
            <Link
              to="/faq"
              onClick={() => setOpen(false)}
              className="text-sm text-white/70 hover:text-white"
            >
              FAQ
            </Link>
            <Link
              to="/#contato"
              onClick={() => setOpen(false)}
              className="text-sm bg-[#FE731A] hover:bg-[#E5620F] text-white px-4 py-2 rounded-sm text-center"
            >
              Contato
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
