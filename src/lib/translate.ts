/*
 * Tradução automática do site (PT → EN / DE / IT) usando o tradutor do Google.
 * O script do Google só é baixado quando o visitante escolhe outro idioma
 * (ou já tinha escolhido antes), então não pesa no carregamento normal.
 */

export const LANGS = [
  { code: "pt", label: "PT", name: "Português" },
  { code: "en", label: "EN", name: "English" },
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "it", label: "IT", name: "Italiano" },
] as const;

export type Lang = (typeof LANGS)[number]["code"];

const isLang = (v: string | undefined): v is Lang => LANGS.some((l) => l.code === v);

export function currentLang(): Lang {
  if (typeof document === "undefined") return "pt";
  const m = document.cookie.match(/(?:^|;\s*)googtrans=\/pt\/([a-z-]+)/i);
  const code = m?.[1]?.toLowerCase();
  return isLang(code) ? code : "pt";
}

function cookieDomains(): string[] {
  const host = window.location.hostname;
  const base = host.replace(/^www\./, "");
  return Array.from(new Set(["", host, `.${base}`]));
}

function writeCookie(value: string, expire = false) {
  const exp = expire ? ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : "";
  for (const d of cookieDomains()) {
    document.cookie = `googtrans=${value};path=/${d ? `;domain=${d}` : ""}${exp}`;
  }
}

let loading: Promise<void> | null = null;

function loadGoogle(): Promise<void> {
  if (loading) return loading;
  loading = new Promise<void>((resolve, reject) => {
    if (!document.getElementById("google_translate_element")) {
      const holder = document.createElement("div");
      holder.id = "google_translate_element";
      document.body.appendChild(holder);
    }
    const w = window as unknown as Record<string, unknown> & {
      google?: { translate?: { TranslateElement: new (o: object, id: string) => unknown } };
    };
    w.googleTranslateElementInit = () => {
      try {
        new w.google!.translate!.TranslateElement(
          { pageLanguage: "pt", includedLanguages: "pt,en,de,it", autoDisplay: false },
          "google_translate_element",
        );
        resolve();
      } catch (e) {
        reject(e);
      }
    };
    const s = document.createElement("script");
    s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    s.async = true;
    s.onerror = () => {
      loading = null;
      reject(new Error("translate script failed"));
    };
    document.head.appendChild(s);
  });
  return loading;
}

function waitForCombo(timeout = 10000): Promise<HTMLSelectElement> {
  return new Promise((resolve, reject) => {
    const t0 = Date.now();
    const tick = () => {
      const el = document.querySelector<HTMLSelectElement>("select.goog-te-combo");
      if (el && el.options.length > 1) return resolve(el);
      if (Date.now() - t0 > timeout) return reject(new Error("translate combo not found"));
      setTimeout(tick, 100);
    };
    tick();
  });
}

export async function setLanguage(lang: Lang): Promise<void> {
  if (lang === currentLang()) return;

  if (lang === "pt") {
    // Volta ao original: apaga a escolha e recarrega a página em português
    writeCookie("", true);
    window.location.reload();
    return;
  }

  writeCookie(`/pt/${lang}`);
  window.dispatchEvent(new Event("fx-lang"));
  try {
    await loadGoogle();
    const combo = await waitForCombo();
    combo.value = lang;
    combo.dispatchEvent(new Event("change"));
  } catch {
    // Se o tradutor demorar ou falhar, o recarregamento aplica pelo cookie
    window.location.reload();
  }
}

/* Chamado na abertura do site: se o visitante já escolheu um idioma, reaplica */
export function initTranslation() {
  if (typeof window === "undefined") return;
  if (currentLang() !== "pt") loadGoogle().catch(() => undefined);
}

/*
 * O tradutor troca os textos da página por versões traduzidas. Isso confunde o
 * React quando ele tenta atualizar a tela; estas duas proteções evitam erros.
 */
export function guardDomForTranslation() {
  if (typeof Node !== "function" || !Node.prototype) return;
  const proto = Node.prototype as Node & { __fxGuard?: boolean };
  if (proto.__fxGuard) return;
  proto.__fxGuard = true;

  const removeChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function <T extends Node>(this: Node, child: T): T {
    if (child.parentNode !== this) return child;
    return removeChild.call(this, child) as T;
  };

  const insertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function <T extends Node>(this: Node, node: T, ref: Node | null): T {
    if (ref && ref.parentNode !== this) return node;
    return insertBefore.call(this, node, ref) as T;
  };
}
