import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-secondary">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
            Contato
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Solicite uma Análise Técnica
          </h2>
          <p className="text-muted-foreground mb-10">
            Envie os dados da sua peça ou processo atual. Retorno com diagnóstico técnico em até 48h.
          </p>

          <div className="card-technical bg-background rounded-lg p-8 text-left">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Nome</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-secondary border-none rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Empresa</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-secondary border-none rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">E-mail</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 bg-secondary border-none rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Descreva o processo ou peça
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 bg-secondary border-none rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Material, dimensões, tolerâncias, volume de produção, gargalos atuais..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-sm hover:bg-primary/90 transition-colors"
              >
                Enviar Solicitação
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-6 text-sm text-muted-foreground">
              <a href="mailto:rodrigo.finarde@fanaxis.com.br" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" /> rodrigo.finarde@fanaxis.com.br
              </a>
              <a href="https://wa.me/5511924489409" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" /> (11) 92448-9409
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" /> São Paulo, SP
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
