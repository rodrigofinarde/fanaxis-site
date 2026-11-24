// Pré-renderização: depois do build normal, gera um HTML completo para cada página.
// O Google, o LinkedIn e o WhatsApp passam a ler o conteúdo e os metadados de cada página
// sem precisar executar o JavaScript. No navegador, o React assume a página normalmente.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const { render, routes } = await import(pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href);

// Remove do modelo as tags que a página define por conta própria, para não duplicar
function dedupe(page, head) {
  let out = page;
  if (/<title[\s>]/.test(head)) out = out.replace(/<title>[\s\S]*?<\/title>\s*/, "");
  for (const m of head.matchAll(/<meta[^>]*\b(name|property)="([^"]+)"/g)) {
    const re = new RegExp(`<meta[^>]*\\b${m[1]}="${m[2].replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[^>]*>\\s*`, "g");
    out = out.replace(re, "");
  }
  if (/rel="canonical"/.test(head)) out = out.replace(/<link[^>]*rel="canonical"[^>]*>\s*/g, "");
  return out;
}

let count = 0;
for (const url of routes) {
  const { html, head } = render(url);
  if (!html || html.length < 500) throw new Error(`Página vazia na pré-renderização: ${url}`);

  let page = dedupe(template, head);
  page = page.replace("</head>", `    ${head}\n  </head>`);
  page = page.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  const file = url === "/" ? "index.html" : `${url.slice(1)}.html`;
  const out = path.join(dist, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page);
  count++;
}

console.log(`Pré-renderização concluída: ${count} páginas.`);
