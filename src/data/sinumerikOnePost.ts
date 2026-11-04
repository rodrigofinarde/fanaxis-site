import type { BlogPost } from "./blogPosts";

export const sinumerikOnePost: BlogPost = {
  slug: "sinumerik-one-myvirtual-machine-nx-cam-validacao-virtual",
  title: "SINUMERIK ONE + MyVirtual Machine: NX CAM do programa NC à validação virtual",
  seoTitle: "SINUMERIK ONE + MyVirtual Machine: NX CAM do programa NC à validação virtual",
  excerpt:
    "Veja como integrar NX CAM, Create/Run MyVirtual Machine e SINUMERIK ONE para validar o programa NC, a cinemática e o setup digital antes da usinagem.",
  category: "CAD/CAM",
  date: "04 Nov 2026",
  readTime: 5,
  coverImage: "/blog/sinumerik-one-nx-cam/sinumerik-one.jpg",
  coverImageAlt: "Máquina CNC, painel SINUMERIK e telas de engenharia virtual",
  coverCaption: "SINUMERIK ONE e ambiente de máquina virtual. Crédito: Siemens.",
  coverImageCreditUrl: "https://www.siemens.com/en-us/products/sinumerik/one/",
  content: String.raw`
<p>Como conectar a programação CAM ao comando virtual para revisar código, cinemática e setup antes de liberar o processo para a produção.</p>
<h2>SINUMERIK ONE: uma base digital para o processo CNC</h2>
<p>O SINUMERIK ONE é a geração digital-native de CNC da Siemens. A integração com o ambiente de engenharia TIA Portal permite usar dados de automação como base para desenvolver o gêmeo digital do sistema de controle. Com o <strong>Create MyVirtual Machine</strong>, equipes podem trabalhar na engenharia e no comissionamento virtual da máquina; com o <strong>Run MyVirtual Machine</strong>, o foco passa à simulação do processo CNC e à verificação de programas. A Siemens descreve o Run MyVirtual Machine como uma plataforma baseada em tecnologia original de CNC e PLC, com simulação 3D da cinemática e da remoção de material (<a href="https://www.siemens.com/en-us/products/sinumerik/one/" target="_blank" rel="noopener noreferrer">Siemens — SINUMERIK ONE</a> e <a href="https://www.siemens.com/en-us/products/sinumerik/run-my-virtual-machine/" target="_blank" rel="noopener noreferrer">Run MyVirtual Machine</a>).</p>
<p>A distinção importa: a proposta não é apenas visualizar uma trajetória CAM em 3D. É aproximar a preparação do comportamento do controle SINUMERIK e da máquina configurada, para investigar o programa NC antes de ocupar o equipamento real.</p>
<h2>Do NX CAM à máquina virtual: um fluxo de dados</h2>
<p>O NX CAM gera operações, trajetórias e, por meio do pós-processador, o programa NC destinado à máquina. Também oferece simulação integrada orientada por código G. A integração com Create/Run MyVirtual Machine acrescenta outra etapa: testar o programa pós-processado com o gêmeo da máquina CNC correspondente, em vez de tratar a simulação de ferramenta como a única verificação (<a href="https://www.siemens.com/en-us/products/nx-manufacturing/cam-software/" target="_blank" rel="noopener noreferrer">Siemens — NX CAM</a>).</p>
<figure style="margin:2rem 0;">
  <img src="/blog/sinumerik-one-nx-cam/nx-cam-create-myvirtual-machine.jpg" alt="Simulação da máquina no NX CAM junto da janela Create MyVirtual Machine com a interface SINUMERIK ONE" loading="lazy" style="width:100%;height:auto;display:block;border-radius:8px;" />
  <figcaption style="margin-top:.75rem;font-size:.875rem;line-height:1.5;color:#9ca3af;">Simulação no NX CAM com a interface SINUMERIK ONE do Create MyVirtual Machine na mesma demonstração. Crédito: Siemens Digital Industries Software. <a href="https://community.sw.siemens.com/s/article/Machine-Tool-Simulation-with-Sinumerik-One" target="_blank" rel="noopener noreferrer">Fonte oficial da imagem</a> · <a href="https://www.youtube.com/watch?v=zO3q92WoWoI" target="_blank" rel="noopener noreferrer">Vídeo da demonstração</a>.</figcaption>
</figure>
<p>Em um fluxo técnico publicado pela Siemens, a máquina pode ser criada ou ajustada no <strong>NX Machine Tool Builder</strong>; a cinemática e a geometria são exportadas, incluindo os dados STEP, e importadas no Create MyVirtual Machine ou no 3D Builder. Depois da validação, a configuração da máquina pode ser exportada em arquivo MKC. Para o setup do trabalho, o <strong>NX Connector</strong> do Run MyVirtual Machine, disponível pelo Post Hub, transfere dados como ferramentas, fixações e peça do NX CAM para a simulação. O artigo técnico da Siemens detalha esse intercâmbio; ele não deve ser interpretado como uma promessa de compatibilidade automática entre qualquer versão ou configuração (<a href="https://community.sw.siemens.com/s/article/Seamless-Data-Exchange-Bridging-Siemens-NX-CAM-and-Sinumeriks-Create-Run-MyVirtual-Machine" target="_blank" rel="noopener noreferrer">Siemens Community — Seamless Data Exchange</a>).</p>
<p>Na prática, a sequência é: programar no NX CAM, pós-processar para a combinação específica de máquina e SINUMERIK, transferir ou conferir o setup, carregar o NC no Run MyVirtual Machine e analisar os movimentos simulados. O valor está na continuidade dos dados — e em evitar reconstruir manualmente, em cada etapa, aquilo que já foi definido no CAM.</p>
<figure style="margin:2rem 0;">
  <img src="/blog/sinumerik-one-nx-cam/run-myvirtual-main.jpg" alt="Interface do Run MyVirtual Machine com painel SINUMERIK e simulação 3D da usinagem" loading="lazy" style="width:100%;height:auto;display:block;border-radius:8px;" />
  <figcaption style="margin-top:.75rem;font-size:.875rem;line-height:1.5;color:#9ca3af;">Interface do Run MyVirtual Machine com simulação 3D e ambiente SINUMERIK. Crédito: Siemens. <a href="https://www.siemens.com/en-us/products/sinumerik/run-my-virtual-machine/" target="_blank" rel="noopener noreferrer">Fonte oficial da imagem</a>.</figcaption>
</figure>
<h2>O que precisa estar modelado com fidelidade</h2>
<p>Uma simulação confiável depende da correspondência entre o modelo virtual e o processo que será executado. Isso inclui a cinemática e os limites da máquina, ferramentas e porta-ferramentas, peça e material bruto, dispositivo de fixação, orientações, origens e offsets relevantes. O pós-processador também precisa corresponder à máquina e à configuração SINUMERIK, e o arquivo NC validado precisa ser o mesmo que seguirá para a produção.</p>
<p>Quando máquina e cinemática, CAM, NC pós-processado, setup, ferramenta e porta-ferramenta, peça e bruto, fixação, offsets e movimentos estão fielmente modelados e são respeitados na execução real, a simulação garante a ausência de colisões no cenário validado. Qualquer divergência entre as condições modeladas e validadas e a execução real invalida essa garantia. Condições que não foram representadas no modelo não estão cobertas; por isso, mantenha os procedimentos de validação e segurança da fábrica e confirme as condições instaladas antes da execução.</p>
<figure style="margin:2rem 0;">
  <img src="/blog/sinumerik-one-nx-cam/collision-detection.jpg" alt="Simulação de ferramenta aproximando-se de peça e fixação em uma mesa rotativa" loading="lazy" style="width:100%;height:auto;display:block;border-radius:8px;" />
  <figcaption style="margin-top:.75rem;font-size:.875rem;line-height:1.5;color:#9ca3af;">Exemplo de detecção de colisão em uma simulação de máquina. Crédito: Siemens. <a href="https://www.siemens.com/en-us/products/sinumerik/run-my-virtual-machine/" target="_blank" rel="noopener noreferrer">Fonte oficial da imagem</a>.</figcaption>
</figure>
<h2>Da simulação à liberação: o que conferir</h2>
<p>Antes de liberar o programa, confirme que a máquina virtual corresponde ao equipamento real e que os eixos, ferramentas, fixações, peça, origens e offsets foram atualizados. Revise a saída do pós-processador, os movimentos rápidos e de aproximação, trocas de ferramenta, retrações, limites dos eixos rotativos e transições entre operações. Depois de qualquer ajuste no NC ou no setup, execute novamente a verificação do arquivo final.</p>
<p>A simulação complementa — não elimina — os procedimentos de validação e segurança da fábrica, nem substitui a confirmação das condições instaladas na máquina. Versões, licenças, opções de software e configurações precisam ser verificadas para o ambiente específico. Esse cuidado transforma a integração em um método de engenharia: reduz incertezas antes da usinagem sem confundir um modelo virtual com a realidade quando os dados não coincidem.</p>
<figure style="margin:2rem 0;">
  <img src="/blog/sinumerik-one-nx-cam/real-cnc-behavior.jpg" alt="Tela do Run MyVirtual Machine com estado do CNC e simulação 3D do processo" loading="lazy" style="width:100%;height:auto;display:block;border-radius:8px;" />
  <figcaption style="margin-top:.75rem;font-size:.875rem;line-height:1.5;color:#9ca3af;">Simulação do comportamento CNC e do processo em ambiente virtual. Crédito: Siemens. <a href="https://www.siemens.com/en-us/products/sinumerik/run-my-virtual-machine/" target="_blank" rel="noopener noreferrer">Fonte oficial da imagem</a>.</figcaption>
</figure>
<h3>Vamos avaliar a integração no seu cenário?</h3>
<p>A Fanaxis atua na engenharia integrada de métodos, processos e CAD/CAM/CNC. Se sua equipe está estruturando um fluxo entre NX CAM e SINUMERIK ONE, converse com a Fanaxis para avaliar pós-processador, modelo de máquina, setup digital e validação do NC no contexto do seu processo.</p>
<h3>Fontes oficiais</h3>
<ul>
  <li><a href="https://www.siemens.com/en-us/products/sinumerik/one/" target="_blank" rel="noopener noreferrer">SINUMERIK ONE — Siemens</a></li>
  <li><a href="https://www.siemens.com/en-us/products/sinumerik/run-my-virtual-machine/" target="_blank" rel="noopener noreferrer">Run MyVirtual Machine — Siemens</a></li>
  <li><a href="https://www.siemens.com/en-us/products/nx-manufacturing/cam-software/" target="_blank" rel="noopener noreferrer">NX CAM — Siemens</a></li>
  <li><a href="https://community.sw.siemens.com/s/article/Seamless-Data-Exchange-Bridging-Siemens-NX-CAM-and-Sinumeriks-Create-Run-MyVirtual-Machine" target="_blank" rel="noopener noreferrer">Seamless Data Exchange: NX CAM e Create/Run MyVirtual Machine — Siemens Community</a></li>
</ul>
`,
};
