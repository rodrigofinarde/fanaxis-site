import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

// Extrair categorias únicas dos posts
const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = activeCategory
    ? blogPosts.filter((post) => post.category === activeCategory)
    : blogPosts;

  return (
    <>
      <Helmet>
        <title>Blog | Fanaxis - Artigos sobre Usinagem CNC e Tecnologia CAM</title>
        <meta name="description" content="Artigos técnicos sobre usinagem CNC, programação CAM, gêmeos digitais e Indústria 4.0. Conteúdo especializado pela Fanaxis." />

        {/* Open Graph */}
        <meta property="og:title" content="Blog | Fanaxis - Artigos sobre Usinagem CNC e Tecnologia CAM" />
        <meta property="og:description" content="Artigos técnicos sobre usinagem CNC, programação CAM, gêmeos digitais e Indústria 4.0. Conteúdo especializado pela Fanaxis." />
        <meta property="og:image" content="https://www.fanaxis.com.br/logo-icon.png" />
        <meta property="og:url" content="https://www.fanaxis.com.br/blog" />
        <meta property="og:type" content="website" />

        {/* Schema Markup - WebPage */}
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Blog Fanaxis",
          "description": "Artigos técnicos sobre usinagem CNC, programação CAM, gêmeos digitais e Indústria 4.0.",
          "url": "https://www.fanaxis.com.br/blog",
          "isPartOf": {
            "@type": "WebSite",
            "name": "Fanaxis",
            "url": "https://www.fanaxis.com.br"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Fanaxis",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.fanaxis.com.br/logo-icon.png"
            }
          }
        }`}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
      <Header />
      <section className="container pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Blog <span className="text-[#FF6A00]">Fanaxis</span>
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-3xl">
          Artigos sobre usinagem CNC, digitalização de processos, gêmeos
          digitais e otimização de manufatura.
        </p>

        {/* Filtros por categoria */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === null
                ? "bg-[#FF6A00] text-white"
                : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10"
            }`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-[#FF6A00] text-white"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block bg-secondary/50 border border-border rounded-lg overflow-hidden hover:border-[#FF6A00]/60 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-mono text-[#FF6A00] uppercase tracking-wider">
                  {post.category}
                </span>
                <h2 className="text-xl font-semibold text-white mt-2 mb-3 group-hover:text-[#FF6A00] transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-400 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <span className="text-xs text-[#FF6A00] font-medium group-hover:underline">
                    Ler mais →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-gray-500 text-center py-12">
            Nenhum artigo encontrado nesta categoria.
          </p>
        )}
      </section>
      <Footer />
    </div>
    </>
  );
};

export default Blog;
