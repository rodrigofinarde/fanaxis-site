import { Mail, Phone, MapPin } from "lucide-react";
import { useState, type FormEvent } from "react";

const ContactSection = () => {
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setEnviando(true);
    setErro(false);

    try {
      const res = await fetch("https://formsubmit.co/ajax/rodrigo.finarde@fanaxis.com.br", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(String(res.status));
      setEnviado(true);
      form.reset();
    } catch {
      setErro(true);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contato" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 bg-blueprint opacity-30" />
      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-kicker justify-center mb-4">Contato</p>
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Solicite uma Análise Técnica
          </h2>
          <p className="text-muted-foreground mb-10">
            Envie os dados da sua peça ou processo atual. Retorno com diagnóstico técnico em até 48h.
          </p>

          <div className="relative bg-card border border-white/10 p-8 md:p-10 text-left">
            
            <form onSubmit={handleSubmit} className="space-y-6">

              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Nova solicitação - Fanaxis" />

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    required
                    className="w-full px-3 py-2 bg-background border border-white/10 focus:border-[#FE731A] focus:outline-none transition-colors rounded-none text-sm"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Empresa</label>
                  <input
                    type="text"
                    name="empresa"
                    className="w-full px-3 py-2 bg-background border border-white/10 focus:border-[#FE731A] focus:outline-none transition-colors rounded-none text-sm"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 bg-background border border-white/10 focus:border-[#FE731A] focus:outline-none transition-colors rounded-none text-sm"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">WhatsApp</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    inputMode="tel"
                    className="w-full px-3 py-2 bg-background border border-white/10 focus:border-[#FE731A] focus:outline-none transition-colors rounded-none text-sm"
                    placeholder="(11) 90000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Descreva o processo ou peça
                </label>
                <textarea
                  rows={4}
                  name="mensagem"
                  required
                  className="w-full px-3 py-2 bg-background border border-white/10 focus:border-[#FE731A] focus:outline-none transition-colors rounded-none text-sm resize-none"
                  placeholder="Peça, material, máquina e comando (ex.: DMU 125P / Siemens 840D), tolerâncias, tempo de ciclo atual..."
                />
              </div>

              <button
                type="submit"
                disabled={enviando}
                className="w-full px-6 py-3.5 bg-primary hover:bg-[#E5620F] text-white font-medium tracking-wide transition-colors disabled:opacity-60"
              >
                {enviando ? "Enviando..." : "Enviar Solicitação"}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Tem desenho, STEP ou programa NC?{" "}
                <a href="https://wa.me/5511924489409" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Envie os arquivos pelo WhatsApp
                </a>
                .
              </p>
            </form>

            {erro && (
              <div className="mt-6 p-4 bg-red-700 text-white rounded text-center text-sm">
                Não foi possível enviar agora. Fale com a gente pelo WhatsApp ou pelo e-mail abaixo.
              </div>
            )}

            {enviado && (
              <div className="mt-6 p-4 bg-green-600 text-white rounded text-center">
                ✅ Sua solicitação foi enviada! Em breve nosso departamento técnico entrará em contato.
              </div>
            )}

            <div className="mt-8 pt-6 border-t flex flex-wrap gap-6 text-sm">
              <a href="mailto:rodrigo.finarde@fanaxis.com.br" className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> rodrigo.finarde@fanaxis.com.br
              </a>

              <a href="https://wa.me/5511924489409" target="_blank" className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> (11) 92448-9409
              </a>

              <span className="flex items-center gap-2">
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