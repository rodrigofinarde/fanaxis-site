import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => (
  <>
    <Helmet>
      <title>Página não encontrada | Fanaxis</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <div className="bg-background text-white min-h-screen">
      <Header />
      <section className="page-hero container pt-40 pb-32 text-center">
        <p className="section-kicker justify-center mb-6">Erro 404</p>
        <h1 className="text-6xl md:text-8xl uppercase leading-none mb-6">
          Fora do <span className="text-[#FE731A]">curso</span>
        </h1>
        <p className="text-white/60 max-w-md mx-auto mb-10">
          Esta página não existe ou mudou de endereço. Volte para o início ou fale com a gente.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-[#FE731A] hover:bg-[#E5620F] text-white font-medium text-sm tracking-wide transition-colors"
          >
            Ir para o início
          </Link>
          <a
            href="https://wa.me/5511924489409"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-white/25 hover:border-[#FE731A] hover:text-[#FE731A] text-white font-medium text-sm tracking-wide transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>
      <Footer />
    </div>
  </>
);

export default NotFound;
