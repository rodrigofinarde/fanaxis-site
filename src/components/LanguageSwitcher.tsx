import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { LANGS, currentLang, setLanguage, type Lang } from "@/lib/translate";

/* Seletor PT · EN · DE · IT — traduz a página na hora */
const LanguageSwitcher = ({ className = "" }: { className?: string }) => {
  const [lang, setLang] = useState<Lang>("pt");
  const [busy, setBusy] = useState(false);

  useEffect(() => setLang(currentLang()), []);

  const choose = async (code: Lang) => {
    if (code === lang || busy) return;
    setBusy(true);
    setLang(code);
    await setLanguage(code);
    setBusy(false);
  };

  return (
    <div
      translate="no"
      role="group"
      aria-label="Idioma / Language"
      className={`notranslate flex items-center gap-1.5 ${className}`}
    >
      <Globe className="w-3.5 h-3.5 text-white/40 mr-0.5" aria-hidden="true" />
      {LANGS.map(({ code, label, name }) => {
        const active = code === lang;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            title={name}
            aria-label={name}
            aria-pressed={active}
            onClick={() => choose(code)}
            className={`font-mono text-[11px] tracking-wider px-1.5 py-1 transition-colors ${
              active
                ? "text-[#FE731A] border-b border-[#FE731A]"
                : "text-white/55 hover:text-white border-b border-transparent"
            } ${busy ? "cursor-wait" : ""}`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
