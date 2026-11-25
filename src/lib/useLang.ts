import { useEffect, useState } from "react";
import { currentLang, type Lang } from "./translate";

/* Idioma escolhido no seletor; atualiza na hora quando o visitante troca */
export function useLang(): Lang {
  const [lang, setLang] = useState<Lang>("pt");
  useEffect(() => {
    const sync = () => setLang(currentLang());
    sync();
    window.addEventListener("fx-lang", sync);
    return () => window.removeEventListener("fx-lang", sync);
  }, []);
  return lang;
}

/* Textos curtos traduzidos à mão (o tradutor automático erra palavras soltas) */
export type T = Record<Lang, string>;
export const tr = (lang: Lang, t: T) => t[lang] ?? t.pt;

/* Marca um trecho para o tradutor automático não mexer */
export const NO_TR = { translate: "no" as const, className: "notranslate" };
