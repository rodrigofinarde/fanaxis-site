import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Programacao5Eixos from "./pages/Programacao5Eixos";
import ProgramacaoCADCAM from "./pages/ProgramacaoCADCAM";
import GemeoDigital from "./pages/GemeoDigital";
import ConsultoriaUsinagem from "./pages/ConsultoriaUsinagem";
import DigitalizacaoProcessos from "./pages/DigitalizacaoProcessos";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Sobre from "./pages/Sobre";
import FAQ from "./pages/FAQ";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const queryClient = new QueryClient();

/* Rotas e provedores do site — usados pelo navegador (App.tsx) e pela pré-renderização (entry-server.tsx) */
const AppRoutes = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
          <Route path="/" element={<Index />} />

          {/* Serviços */}
          <Route path="/servicos/programacao-cam" element={<ProgramacaoCADCAM />} />
          <Route path="/servicos/gemeo-digital" element={<GemeoDigital />} />
          <Route path="/servicos/consultoria-usinagem" element={<ConsultoriaUsinagem />} />
          <Route path="/servicos/digitalizacao-processos" element={<DigitalizacaoProcessos />} />

          {/* Página existente */}
          <Route path="/programacao-cnc-5-eixos" element={<Programacao5Eixos />} />

          {/* Institucional */}
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/faq" element={<FAQ />} />

          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* SEMPRE DEIXAR O NOTFOUND POR ÚLTIMO */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingWhatsApp />
    </TooltipProvider>
  </QueryClientProvider>
);

export default AppRoutes;
