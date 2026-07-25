import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Fanaxis - Artigos sobre Usinagem CNC e Tecnologia CAM</title>
        <meta name="description" content="Artigos técnicos sobre usinagem CNC, programação CAM, gêmeos digitais e Indústria 4.0. Conteúdo especializado pela Fanaxis." />
      </Helmet>
      <div className="min-h-screen bg-background">
      <Header />
      <section className="container pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Blog <span className="text-[#FF6A00]">Fanaxis</span>
        </h1>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl">
          Artigos sobre usinagem CNC, digitalização de processos, gêmeos
          digitais e otimização de manufatura.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
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
      </section>
      <Footer />
    </div>
    </>
  );
};

export default Blog;
