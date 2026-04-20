import Header from "@/components/Header";

const Programacao5Eixos = () => {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen">
      <Header />

      <section className="container pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Programação CNC 5 Eixos
        </h1>

        <p className="text-lg text-gray-300 mb-8 max-w-3xl">
          Especialistas em programação CNC 5 eixos para peças complexas,
          redução de tempo de ciclo e aumento de produtividade na usinagem.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Benefícios</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-2">
          <li>Redução de tempo de usinagem</li>
          <li>Melhor acabamento superficial</li>
          <li>Menos setups</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Serviços</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-2">
          <li>Programação 3+2 e simultâneo</li>
          <li>Otimização de processos</li>
          <li>Simulação completa</li>
        </ul>

        <a
          href="/#contato"
          className="inline-block bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded font-medium"
        >
          Solicitar análise técnica
        </a>
      </section>
    </div>
  );
};

export default Programacao5Eixos;