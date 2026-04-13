import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1f1f1f] border-b border-[#FF6A00]/40">
      <div className="container flex items-center justify-between h-20">

        {/* LOGO HORIZONTAL */}
        <a href="#" className="flex items-center gap-3">
          
          {/* SIMBOLO */}
          <img
            src="/src/assets/logo-icon.png"
            alt="Fanaxis Icon"
            className="h-10 w-auto"
          />

          {/* TEXTO */}
          <img
            src="/src/assets/logo-text.png"
            alt="Fanaxis"
            className="h-6 w-auto"
          />

        </a>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            ["Serviços", "#servicos"],
            ["Projetos", "#projetos"],
            ["Métodos", "#metodos"],
            ["Contato", "#contato"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
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
            {[
              ["Serviços", "#servicos"],
              ["Projetos", "#projetos"],
              ["Métodos", "#metodos"],
              ["Contato", "#contato"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/70 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;