import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// ✅ IMPORTAÇÃO CORRETA (VITE)
import logoIcon from "@/assets/logo-icon.png";
import logoText from "@/assets/logo-text.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1f1f1f] border-b border-[#FF6A00]/40">
      <div className="container flex items-center justify-between h-20">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoIcon}
            alt="Fanaxis Icon"
            className="h-10 w-auto"
          />
          <img
            src={logoText}
            alt="Fanaxis"
            className="h-6 w-auto"
          />
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Dropdown Serviços */}
          <div className="relative group">
            <button
              className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1"
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              Serviços
              <ChevronDown className="w-3 h-3" />
            </button>
            {servicesOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-64 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl py-2"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to="/servicos/programacao-cam"
                  className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  Programação CAD/CAM/CNC
                </Link>
                <Link
                  to="/servicos/gemeo-digital"
                  className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  Gêmeo Digital CNC
                </Link>
                <Link
                  to="/servicos/consultoria-usinagem"
                  className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  Consultoria em Usinagem
                </Link>
                <Link
                  to="/servicos/digitalizacao-processos"
                  className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  Digitalização de Processos
                </Link>
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
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                to={href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {label}
              </Link>
            )
          ))}

          <Link
            to="/sobre"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Sobre
          </Link>

          <Link
            to="/blog"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Blog
          </Link>

          <Link
            to="/faq"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            FAQ
          </Link>

          <a
            href={isHomePage ? "/#contato" : "/#contato"}
            className="text-sm bg-[#FF6A00] hover:bg-[#e65c00] text-white px-4 py-2 rounded-sm transition-all hover:scale-105 font-medium"
          >
            Contato
          </a>
        </nav>

        {/* MOBILE */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-[#1f1f1f] border-t border-[#FF6A00]/20 py-4">
          <div className="container flex flex-col gap-4">
            <p className="font-mono text-xs text-[#FF6A00] uppercase tracking-wider">Serviços</p>
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
              className="text-sm bg-[#FF6A00] hover:bg-[#e65c00] text-white px-4 py-2 rounded-sm text-center"
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
