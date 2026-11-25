import { MessageCircle } from "lucide-react";

/* Botão discreto, com a cara da marca: preto, borda laranja, sempre visível */
const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/5511924489409"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale com a Fanaxis pelo WhatsApp"
    title="Fale com a Fanaxis pelo WhatsApp"
    className="group fixed z-[60] right-[max(20px,env(safe-area-inset-right))] bottom-[max(20px,env(safe-area-inset-bottom))] flex items-center gap-2.5 h-12 pl-3.5 pr-3.5 sm:pr-5 rounded-full bg-[#0A0A0A]/90 backdrop-blur border border-[#FE731A]/70 text-white shadow-[0_8px_30px_rgba(0,0,0,0.55)] transition-all duration-300 hover:border-[#FE731A] hover:bg-[#FE731A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FE731A] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
  >
    <span className="relative flex">
      <MessageCircle className="w-5 h-5" strokeWidth={1.8} aria-hidden="true" />
      <span
        aria-hidden="true"
        className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#25D366] ring-2 ring-[#0A0A0A] group-hover:ring-[#FE731A]"
      />
    </span>
    <span translate="no" className="notranslate hidden sm:inline text-sm font-medium tracking-wide">WhatsApp</span>
  </a>
);

export default FloatingWhatsApp;
