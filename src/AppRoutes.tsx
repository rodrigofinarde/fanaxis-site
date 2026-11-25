import { lazy, Suspense, type ComponentType } from "react";
import { Route, Routes, matchPath } from "react-router-dom";
import Index from "./pages/Index.tsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

/*
 * Carregamento por página: a home vem junto no arquivo principal; as demais páginas
 * (serviços, blog, artigos...) só são baixadas quando a pessoa abre cada uma.
 * Antes de desenhar a tela, main.tsx e a pré-renderização chamam preloadRoute(),
 * então a página já está pronta e não há "piscada" de tela vazia.
 */
type Loader = () => Promise<{ default: ComponentType }>;

function lazyPage(loader: Loader) {
  let Loaded: ComponentType | null = null;
  const load = () =>
    loader().then((m) => {
      Loaded = m.default;
      return m;
    });
  const Lazy = lazy(load);
  const Page = () => (Loaded ? <Loaded /> : <Lazy />);
  Page.preload = load;
  return Page;
}

const Programacao5Eixos = lazyPage(() => import("./pages/Programacao5Eixos"));
const ProgramacaoCADCAM = lazyPage(() => import("./pages/ProgramacaoCADCAM"));
const GemeoDigital = lazyPage(() => import("./pages/GemeoDigital"));
const ConsultoriaUsinagem = lazyPage(() => import("./pages/ConsultoriaUsinagem"));
const DigitalizacaoProcessos = lazyPage(() => import("./pages/DigitalizacaoProcessos"));
const Blog = lazyPage(() => import("./pages/Blog"));
const BlogPost = lazyPage(() => import("./pages/BlogPost"));
const Sobre = lazyPage(() => import("./pages/Sobre"));
const FAQ = lazyPage(() => import("./pages/FAQ"));
const NotFound = lazyPage(() => import("./pages/NotFound"));

const routeTable: { path: string; Page: ComponentType & { preload?: () => Promise<unknown> } }[] = [
  { path: "/", Page: Index },
  { path: "/servicos/programacao-cam", Page: ProgramacaoCADCAM },
  { path: "/servicos/gemeo-digital", Page: GemeoDigital },
  { path: "/servicos/consultoria-usinagem", Page: ConsultoriaUsinagem },
  { path: "/servicos/digitalizacao-processos", Page: DigitalizacaoProcessos },
  { path: "/programacao-cnc-5-eixos", Page: Programacao5Eixos },
  { path: "/sobre", Page: Sobre },
  { path: "/faq", Page: FAQ },
  { path: "/blog", Page: Blog },
  { path: "/blog/:slug", Page: BlogPost },
  { path: "*", Page: NotFound },
];

/** Baixa antes a página que corresponde ao endereço, para ela aparecer sem atraso. */
export function preloadRoute(pathname: string) {
  const hit = routeTable.find((r) => r.path !== "*" && matchPath(r.path, pathname)) ?? routeTable[routeTable.length - 1];
  return hit.Page.preload ? hit.Page.preload() : Promise.resolve();
}

/* Rotas do site — usadas pelo navegador (App.tsx) e pela pré-renderização (entry-server.tsx) */
const AppRoutes = () => (
  <>
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <Routes>
        {routeTable.map(({ path, Page }) => (
          <Route key={path} path={path} element={<Page />} />
        ))}
      </Routes>
    </Suspense>
    <FloatingWhatsApp />
  </>
);

export default AppRoutes;
