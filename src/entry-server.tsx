/* Entrada usada só no build: gera o HTML de cada página para o Google e para as prévias de link */
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import AppRoutes, { preloadRoute } from "./AppRoutes";
import { blogPosts } from "./data/blogPosts";

export const routes: string[] = [
  "/",
  "/sobre",
  "/faq",
  "/blog",
  "/programacao-cnc-5-eixos",
  "/servicos/programacao-cam",
  "/servicos/gemeo-digital",
  "/servicos/consultoria-usinagem",
  "/servicos/digitalizacao-processos",
  ...blogPosts.map((p) => `/blog/${p.slug}`),
];

export async function render(url: string) {
  await preloadRoute(url);
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>,
  );
  const h = helmetContext.helmet;
  const head = h
    ? [h.title.toString(), h.meta.toString(), h.link.toString(), h.script.toString()].filter(Boolean).join("\n    ")
    : "";
  return { html, head };
}
