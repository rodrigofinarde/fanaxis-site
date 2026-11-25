import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { preloadRoute } from "./AppRoutes";

// Baixa primeiro o código da página aberta e só então desenha, sem piscar
preloadRoute(window.location.pathname)
  .catch(() => undefined)
  .then(() => {
    createRoot(document.getElementById("root")!).render(
      <HelmetProvider>
        <App />
      </HelmetProvider>,
    );
  });
