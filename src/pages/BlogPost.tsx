import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Helmet>
          <title>Artigo não encontrado | Fanaxis</title>
        </Helmet>
        <div className="min-h-screen bg-background">
          <Header />
          <section className="container pt-32 pb-20 text-center">
            <h1 className="text-3xl font-bold text-white mb-4">
              Artigo não encontrado
            </h1>
            <Link
              to="/blog"
              className="text-[#FF6A00] hover:underline"
            >
              ← Voltar ao Blog
            </Link>
          </section>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Fanaxis</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <div className="min-h-screen bg-background">
      <Header />
      <article className="container pt-32 pb-20 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link to="/blog" className="text-sm text-[#FF6A00] hover:underline">
            ← Voltar ao Blog
          </Link>
        </nav>

        {/* Header do artigo */}
        <header className="mb-10">
          <span className="text-xs font-mono text-[#FF6A00] uppercase tracking-wider">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} min de leitura</span>
          </div>
        </header>

        {/* Imagem de capa */}
        <div className="aspect-video rounded-lg overflow-hidden mb-10">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Conteúdo do artigo */}
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-l-4 prose-h2:border-[#FF6A00] prose-h2:pl-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
            prose-li:text-gray-300
            prose-strong:text-[#FF6A00]
            prose-a:text-[#FF6A00] prose-a:hover:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-16 p-8 bg-secondary/50 border border-[#FF6A00]/30 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Quer otimizar seus processos de usinagem?
          </h3>
          <p className="text-gray-300 mb-6">
            A Fanaxis pode ajudar sua empresa a reduzir custos e aumentar a
            produtividade com digitalização e tecnologia de ponta.
          </p>
          <a
            href="https://wa.me/5511924489409"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FF6A00] hover:bg-[#e55f00] transition px-8 py-3 rounded font-medium text-white"
          >
            Fale com a Fanaxis
          </a>
        </div>
      </article>
      <Footer />
    </div>
    </>
  );
};

export default BlogPost;
