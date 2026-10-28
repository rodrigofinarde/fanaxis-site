import type { BlogPost } from "./blogPosts";

const siemensOnMachineProbingUrl =
  "https://www.siemens.com/en-us/products/nx-manufacturing/cam-software/on-machine-probing/";

export const renishawProbingPost: BlogPost = {
  slug: "apalpador-renishaw-nx-cam-on-machine-probing",
  title: "Apalpador Renishaw em máquinas CNC: precisão, repetibilidade e mais controle no processo",
  seoTitle: "Apalpador Renishaw na CNC: precisão e repetibilidade com NX CAM",
  excerpt:
    "Veja como um apalpador Renishaw, integrado ao NX CAM e a um Machine Kit bem configurado, pode reduzir o setup e reforçar o controle e a repetibilidade na usinagem.",
  category: "Otimização",
  date: "27 Out 2026",
  readTime: 5,
  coverImage: "/blog/nx-cam-on-machine-probing-cover.jpg",
  coverImageAlt:
    "Setup de CNC no NX CAM com uma peça presa em uma morsa e um apalpador medindo.",
  coverCaption:
    "Setup de CNC no NX CAM com uma peça presa em uma morsa e um apalpador medindo.",
  coverImageCreditUrl: siemensOnMachineProbingUrl,
  content: String.raw`
<p>Uma máquina CNC equipada com apalpador touch probe pode localizar a peça e conferir dimensões sem tirá-la da fixação. Bem integrado ao processo, o sistema reduz tarefas manuais, ajuda a encontrar desvios mais cedo e torna o setup mais consistente.</p>
<p>O resultado, porém, não depende só do apalpador. <strong>Máquina, comando, ciclos de medição, pós-processador, calibração e programação CAM</strong> precisam trabalhar juntos — incluindo um Machine Kit configurado para representar a máquina e os opcionais relevantes.</p>
<h2>O que é um touch probe?</h2>
<p>Montado no spindle, o apalpador toca pontos definidos da peça com um estilete. O comando registra as posições e pode usar essas medições para localizar a origem, alinhar a peça ou conferir uma característica antes, durante ou depois da usinagem — conforme o ciclo e a configuração da máquina.</p>
<p>Com isso, a equipe reduz medições manuais entre operações e identifica problemas de posicionamento enquanto a peça ainda está presa. A Renishaw detalha essas aplicações em sua página sobre <a href="https://www.renishaw.com/en/probing-and-tool-measurement-systems-for-machine-tools--6073">sistemas de apalpamento e medição para máquinas-ferramenta</a>.</p>
<h2>Onde estão os ganhos de precisão e competitividade?</h2>
<h3>1. Setup mais rápido e repetível</h3>
<p>Uma rotina programada pode localizar referências e atualizar o zero de trabalho, quando o ciclo e o comando permitem. O processo fica menos dependente de ajustes manuais e mais fácil de repetir entre lotes e operadores.</p>
<h3>2. Desvios detectados antes do refugo</h3>
<p>Medições entre operações ajudam a confirmar a posição da peça ou verificar dimensões críticas. Com uma lógica validada, o comando pode registrar o resultado, interromper o ciclo ou aplicar uma correção prevista — sem depender de ajustes feitos “no escuro”.</p>
<h3>3. Repetibilidade com expectativa realista</h3>
<p>A Renishaw informa repetibilidade <strong>unidirecional de 0,25 µm (10 µin; 2σ)</strong> para modelos como RMP400 e RMP600, conforme a <a href="https://www.renishaw.com/en/high-accuracy-touch-probes-for-cnc-machines--48592">especificação oficial dos apalpadores de alta precisão</a>. É uma especificação do apalpador em condições de ensaio — <strong>não uma garantia de exatidão da máquina ou da peça final</strong>. Calibração, condição térmica, fixação, estilete e limpeza da superfície também influenciam a medição.</p>
<p>Quando essas rotinas atacam um gargalo real, a empresa pode reduzir tempo improdutivo, variação e retrabalho, aproveitando melhor a capacidade instalada. O resultado depende da peça, do volume e do processo; não há um percentual de economia universal.</p>
<h2>O que o On-Machine Probing do NX CAM acrescenta?</h2>
<p>O <strong>On-Machine Probing</strong> do NX CAM permite gerar e visualizar trajetórias de medição e criar ciclos de apalpamento para fresamento e torneamento. O pós-processador gera o código NC e o processo pode ser simulado com o gêmeo digital da peça, do apalpador e da máquina. A Siemens apresenta usos como validação antes da usinagem, localização de offsets e medição de características na <a href="https://www.siemens.com/en-us/products/nx-manufacturing/cam-software/on-machine-probing/">página oficial do recurso</a>.</p>
<p>Na prática, o programador planeja <strong>o que medir e como o apalpador vai se aproximar e se afastar da peça</strong>. O pós-processador precisa traduzir essa intenção para os ciclos aceitos pelo comando CNC. A simulação ajuda a revisar trajetórias e folgas antes do prove-out na máquina.</p>
<figure style="margin:2rem 0;">
  <a href="https://www.siemens.com/en-us/products/nx-manufacturing/cam-software/on-machine-probing/" target="_blank" rel="noopener noreferrer"><img src="/blog/nx-cam-on-machine-probing-workpiece.png" alt="NX CAM On-Machine Probing mostrando um apalpador CNC medindo a superfície de uma peça para alinhamento preciso." loading="lazy" style="width:100%;height:auto;display:block;border-radius:8px;" /></a>
  <figcaption style="font-size:0.875rem;line-height:1.6;color:#a6adb7;border-left:3px solid #FF6A00;padding:0.75rem 1rem;margin-top:0.75rem;">No NX CAM, o apalpador mede a superfície da peça para apoiar o alinhamento do conjunto. Imagem: <a href="https://www.siemens.com/en-us/products/nx-manufacturing/cam-software/on-machine-probing/" target="_blank" rel="noopener noreferrer">Siemens — fonte oficial do recurso</a>.</figcaption>
</figure>
<figure style="margin:2rem 0;">
  <a href="https://www.siemens.com/en-us/products/nx-manufacturing/cam-software/on-machine-probing/" target="_blank" rel="noopener noreferrer"><img src="/blog/nx-cam-on-machine-probing-offsets.png" alt="Apalpador CNC localizando offsets de trabalho em uma peça torneada." loading="lazy" style="width:100%;height:auto;display:block;border-radius:8px;" /></a>
  <figcaption style="font-size:0.875rem;line-height:1.6;color:#a6adb7;border-left:3px solid #FF6A00;padding:0.75rem 1rem;margin-top:0.75rem;">Exemplo de localização de offsets de trabalho em uma peça torneada com apalpador CNC. Imagem: <a href="https://www.siemens.com/en-us/products/nx-manufacturing/cam-software/on-machine-probing/" target="_blank" rel="noopener noreferrer">Siemens — fonte oficial do recurso</a>.</figcaption>
</figure>
<figure style="margin:2rem 0;">
  <a href="https://www.siemens.com/en-us/products/nx-manufacturing/cam-software/on-machine-probing/" target="_blank" rel="noopener noreferrer"><img src="/blog/nx-cam-on-machine-probing-feature.png" alt="Apalpador medindo uma característica usinada para verificação dimensional." loading="lazy" style="width:100%;height:auto;display:block;border-radius:8px;" /></a>
  <figcaption style="font-size:0.875rem;line-height:1.6;color:#a6adb7;border-left:3px solid #FF6A00;padding:0.75rem 1rem;margin-top:0.75rem;">Medição de uma característica usinada para verificação dimensional. Imagem: <a href="https://www.siemens.com/en-us/products/nx-manufacturing/cam-software/on-machine-probing/" target="_blank" rel="noopener noreferrer">Siemens — fonte oficial do recurso</a>.</figcaption>
</figure>
<p>O NX CAM não elimina a necessidade de compatibilizar ciclos, macros, interface do apalpador e pós-processador. A Renishaw oferece, por exemplo, o <a href="https://www.renishaw.com/en/inspection-plus-macro-software-for-cnc-machine-tools--6094">Inspection Plus</a>, com ciclos de setup e inspeção para máquinas compatíveis. A combinação precisa ser verificada para o modelo de máquina e controlador instalados.</p>
<h2>Por que configurar corretamente o Machine Kit?</h2>
<p>O Machine Kit deve representar a cinemática real e usar um pós-processador adequado ao comando. Para simular o apalpamento, o modelo virtual também precisa considerar o apalpador e o estilete, quando suportado, além de movimentos, limites e zonas de segurança. A Siemens descreve seus <a href="https://www.siemens.com/en-us/products/nx-manufacturing/offerings/cam-advanced/">Smart Machine Kits e recursos do NX CAM</a> como um fluxo que pode reunir modelo digital, cinemática, pós-processador e simulação por código G.</p>
<p>Antes de liberar o opcional, confirme:</p>
<ul>
<li><strong>Máquina e comando:</strong> modelo, cinemática, opções instaladas e versão do controle.</li>
<li><strong>Apalpador e interface:</strong> modelo Renishaw, transmissão e interface compatível.</li>
<li><strong>Ciclos e pós:</strong> chamadas, variáveis e formato de saída corretos.</li>
<li><strong>Machine Kit e validação:</strong> geometria do apalpador, calibração, folgas e prove-out controlado.</li>
</ul>
<blockquote>
<p>Apalpador de peça não substitui automaticamente um preset de ferramentas: medir a peça e medir comprimento ou diâmetro da ferramenta são funções diferentes. A Renishaw separa essas aplicações em seus <a href="https://www.renishaw.com/en/probing-and-tool-measurement-systems-for-machine-tools--6073">sistemas de apalpamento e medição</a>.</p>
</blockquote>
<h2>Como implantar com segurança</h2>
<p>Defina primeiro o que medir, em que etapa e como o comando deve reagir a um resultado fora do esperado. Depois, verifique a compatibilidade entre apalpador, interface, ciclos, pós-processador e Machine Kit. Calibre o sistema, simule os movimentos e faça um prove-out controlado antes de levar a rotina à produção.</p>
<p>Um apalpador Renishaw pode contribuir para <strong>mais precisão operacional, repetibilidade e competitividade</strong>, mas o valor depende da integração correta. Quando CAM, CNC e apalpador compartilham a mesma lógica de medição, o caminho entre setup e peça aprovada fica mais previsível.</p>
<p>A Fanaxis trabalha com programação CAD/CAM/CNC, Machine Kits, pós-processadores, gêmeos digitais e consultoria em usinagem. <strong>We CAM go further.</strong></p>
<h3>Quer avaliar um apalpador Renishaw na sua máquina CNC?</h3>
<p>A Fanaxis pode apoiar a análise da máquina, do comando e do fluxo de programação para definir uma implantação compatível com o seu processo.</p>
<p><a href="https://wa.me/5511924489409">Fale com a Fanaxis</a></p>
`,
};
