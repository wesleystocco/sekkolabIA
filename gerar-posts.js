// gerar-posts.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

const postsDir = path.join(__dirname, 'src', 'content', 'blog');

// Garantir que a pasta existe
if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir, { recursive: true });
}

// Lista de 15 posts
const posts = [{
        slug: 'ecommerce-aumento-vendas-chatgpt',
        title: 'Como um pequeno e-commerce aumentou vendas em 40% usando ChatGPT para copy',
        date: '2026-03-01',
        category: 'E-commerce',
        excerpt: 'Estudo de caso de uma loja virtual que usou IA para reescrever descrições de produtos, e-mails de recuperação de carrinho e posts em redes sociais, resultando em aumento de conversão.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200',
        content: `
O comércio eletrônico é um dos setores que mais se beneficia da Inteligência Artificial. Neste case, vamos contar a história da loja "Moda Express", que conseguiu um aumento de 40% nas vendas após implementar o ChatGPT em sua estratégia de copywriting.

## O desafio

A Moda Express é uma loja virtual de roupas femininas que enfrentava dois problemas comuns:
- Descrições de produtos genéricas, que não convertiam
- Baixa taxa de recuperação de carrinhos abandonados
- Posts nas redes sociais sem engajamento

A equipe de marketing gastava horas criando conteúdo, mas os resultados não apareciam.

## A solução com IA

Decidimos usar o ChatGPT para:
1. **Reescrever descrições de produtos** com tom mais persuasivo e foco nos benefícios
2. **Criar sequências de e-mails** para recuperar carrinhos abandonados
3. **Gerar ideias e roteiros** para posts no Instagram e Facebook

## Os prompts utilizados

**Para descrições de produtos:**
\`\`\`
Você é um copywriter especializado em moda feminina. Reescreva a descrição do produto abaixo, destacando benefícios, criando uma conexão emocional e usando linguagem persuasiva. Inclua chamada para ação.

[Descrição original: Vestido azul de seda, tamanho P, M, G]
\`\`\`

**Para e-mails de carrinho abandonado:**
\`\`\`
Crie um e-mail de 5 parágrafos para recuperar carrinhos abandonados. Use tom amigável, ofereça um pequeno desconto (10%) e crie senso de urgência.
\`\`\`

## Resultados

- **+40% nas vendas** nos primeiros 30 dias
- **Taxa de abertura de e-mails** subiu de 15% para 28%
- **Engajamento no Instagram** aumentou em 60%

A Moda Express continua usando IA para criar conteúdo, e agora a equipe foca em estratégia e análise, enquanto a IA cuida da produção inicial.
    `
    },
    {
        slug: 'consultora-carreira-500-leads',
        title: 'Do zero aos primeiros 500 leads: a jornada de uma consultora de carreira com IA',
        date: '2026-03-03',
        category: 'Geração de Leads',
        excerpt: 'Relato de uma profissional que usou IA para criar um ebook, planejar uma campanha de e-mail marketing e automatizar posts no LinkedIn, conquistando seus primeiros clientes.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
        content: `
Muitos profissionais têm conhecimento mas não sabem como transformá-lo em negócio. A consultora de carreira Ana Paula estava nessa situação. Com a ajuda da IA, ela estruturou sua oferta e conquistou os primeiros 500 leads em 3 meses.

## O ponto de partida

Ana Paula oferecia mentorias individuais, mas tinha dificuldade em atrair clientes. Ela sabia que precisava de um lead magnet e presença no LinkedIn, mas não tinha tempo para criar tudo.

## O plano com IA

1. **Criação de um ebook** com ChatGPT: estrutura, capítulos, dicas práticas.
2. **Planejamento de e-mail marketing**: sequência de nutrição para leads.
3. **Automação de posts no LinkedIn**: ideias, roteiros e agendamento.

## Prompts usados

**Para o ebook:**
\`\`\`
Crie um esboço detalhado para um ebook de 10 capítulos sobre "Transição de Carreira para Profissionais de TI". Inclua título, subtítulos e principais pontos de cada capítulo.
\`\`\`

**Para posts no LinkedIn:**
\`\`\`
Gere 10 ideias de posts para LinkedIn sobre desenvolvimento de carreira. Cada post deve ter um gancho, desenvolvimento e call-to-action. Use tom profissional e inspirador.
\`\`\`

## Resultados

- **500 leads** capturados em 3 meses
- **+2.000 seguidores** no LinkedIn
- **15 clientes** fechados a partir da nutrição

Hoje, Ana Paula usa IA para manter uma produção constante de conteúdo e continua crescendo.
    `
    },
    {
        slug: 'blog-nicho-antes-depois',
        title: 'IA na criação de conteúdo: o antes e depois de um blog de nicho',
        date: '2026-03-05',
        category: 'Blogging',
        excerpt: 'Análise de um blog que passou a usar IA para gerar ideias, títulos e rascunhos, mantendo a curadoria humana. Comparação de tráfego e engajamento antes e depois.',
        image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80&w=1200',
        content: `
O blog "Tecnologia Simplificada" existia há 2 anos, com posts esporádicos e pouco tráfego. A dona, Carla, decidiu experimentar a IA para aumentar a frequência e qualidade dos posts.

## Antes da IA

- 1 post por mês (quando dava)
- Tráfego médio de 500 visitas/mês
- Conteúdo baseado em opiniões pessoais

## Depois da IA

- 4 posts por semana
- Tráfego saltou para 8.000 visitas/mês em 4 meses
- Conteúdo mais estruturado e focado em palavras-chave

## Como Carla usa IA

1. **Geração de ideias**: ChatGPT sugere tópicos baseados em tendências.
2. **Criação de títulos**: ela pede 5 opções e escolhe a melhor.
3. **Rascunho inicial**: IA escreve um rascunho, ela revisa e adiciona exemplos pessoais.
4. **Otimização para SEO**: IA sugere palavras-chave e meta descrições.

## Exemplo de prompt

\`\`\`
Você é um especialista em SEO e conteúdo. Para o blog de tecnologia, gere um rascunho de 800 palavras sobre "As melhores ferramentas de IA para pequenas empresas em 2026". Inclua introdução, 5 ferramentas com descrição e conclusão.
\`\`\`

## Lições aprendidas

- A IA não substitui a curadoria humana.
- Posts revisados têm muito mais engajamento.
- Consistência é mais importante que perfeição.

Carla planeja agora expandir para YouTube, usando IA para roteiros.
    `
    },
    {
        slug: 'fotografo-midjourney',
        title: 'Como um fotógrafo está usando Midjourney para criar imagens de conceito e vender mais',
        date: '2026-03-07',
        category: 'Criatividade',
        excerpt: 'Case de um fotógrafo que usa IA para gerar imagens de conceito para clientes, reduzindo tempo de produção e aumentando o ticket médio.',
        image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1200',
        content: `
O fotógrafo comercial Ricardo sempre enfrentava o mesmo problema: clientes pediam alterações em fotos já produzidas, o que consumia tempo e gerava retrabalho. Com o Midjourney, ele passou a apresentar conceitos antes da sessão.

## O processo antigo

- Cliente descrevia a ideia.
- Ricardo fotografava baseado na descrição.
- Muitas vezes, o resultado não era o esperado, exigindo novas sessões.

## O novo fluxo

1. **Briefing**: Ricardo usa ChatGPT para estruturar melhor o briefing.
2. **Geração de conceitos**: Ele insere o briefing no Midjourney e gera 10 imagens de conceito.
3. **Aprovação**: Cliente escolhe o estilo desejado.
4. **Produção**: Ricardo fotografa seguindo o conceito aprovado.

## Exemplo de prompt no Midjourney

\`\`\`
Product photography of a luxury watch, minimalist style, white background, soft lighting, high resolution --ar 3:2
\`\`\`

## Resultados

- **Redução de 50%** no tempo de produção
- **Aumento de 30%** no ticket médio (clientes pagam mais pelo planejamento)
- **Clientes mais satisfeitos** e menos retrabalho

Ricardo agora oferece um pacote "conceito + fotografia" e vende muito mais.
    `
    },
    {
        slug: 'agencia-instagram-automacao',
        title: 'Automação de respostas no Instagram: uma agência que economizou 20h por mês',
        date: '2026-03-09',
        category: 'Gestão de Redes',
        excerpt: 'Exemplo de como uma agência usou IA para criar respostas automáticas para comentários e DMs, melhorando o tempo de resposta e liberando a equipe para tarefas estratégicas.',
        image: 'https://images.unsplash.com/photo-1611162616306-cb18fd5a5d6f?auto=format&fit=crop&q=80&w=1200',
        content: `
A agência de marketing "SocialPro" gerenciava 15 contas de clientes. A equipe passava horas respondendo comentários e DMs. Com a automação baseada em IA, eles reduziram esse tempo drasticamente.

## O problema

- Média de 200 comentários/dia no total.
- Respostas repetitivas (ex: "Obrigado!", "Enviei no privado").
- Tempo gasto: cerca de 20h por mês só com respostas.

## A solução

Criaram um sistema com:
- **Base de respostas** geradas por IA para perguntas frequentes.
- **Scripts de automação** (usando ferramentas como ManyChat) que sugerem respostas personalizadas.
- **Revisão humana** apenas para casos complexos.

## Prompts para criar respostas

\`\`\`
Crie 20 respostas automáticas para comentários no Instagram sobre serviços de marketing. Inclua variações para agradecimentos, dúvidas sobre preços, e solicitações de contato.
\`\`\`

## Resultados

- **Economia de 18h por mês**.
- **Tempo de resposta** caiu de 2h para 10 minutos.
- **Satisfação dos clientes** aumentou.

Agora a equipe foca em estratégia e criatividade, enquanto a IA cuida do atendimento básico.
    `
    },
    {
        slug: 'youtuber-roteiros-ia',
        title: 'O método que um youtuber usou para roteirizar 50 vídeos em 2 dias com IA',
        date: '2026-03-11',
        category: 'YouTube',
        excerpt: 'Tutorial prático de como um criador de conteúdo usou prompts no ChatGPT para gerar roteiros em lote, mantendo a qualidade e consistência. Inclui os prompts usados.',
        image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=1200',
        content: `
O youtuber Felipe, do canal "Tecnologia Descomplicada", precisava aumentar a frequência de posts sem perder qualidade. Com a ajuda do ChatGPT, ele roteirizou 50 vídeos em apenas 2 dias.

## O método

1. **Definiu 10 temas principais** (ex: aplicativos, gadgets, dicas de produtividade).
2. **Para cada tema, pediu 5 variações de roteiro** para a IA.
3. **Revisou e adaptou** cada roteiro, adicionando exemplos pessoais.

## Prompts utilizados

\`\`\`
Você é um roteirista para YouTube. Crie 5 roteiros para vídeos de 8-10 minutos sobre "aplicativos de produtividade". Cada roteiro deve ter: introdução, 3 aplicativos destacados, e conclusão com CTA. Use linguagem descontraída.
\`\`\`

\`\`\`
Agora, gere 5 roteiros sobre "gadgets baratos que parecem caros". Mesma estrutura.
\`\`\`

## Resultados

- **50 roteiros prontos** em 2 dias.
- **Frequência de posts** subiu de 1 para 3 por semana.
- **Visualizações** aumentaram 70% em 2 meses.

Felipe aprendeu que a IA é uma ferramenta de aceleração, não substitui sua experiência.
    `
    },
    {
        slug: 'linkedin-executivo-crescimento',
        title: 'LinkedIn com IA: como um executivo passou de 500 para 5.000 seguidores em 3 meses',
        date: '2026-03-13',
        category: 'LinkedIn',
        excerpt: 'Estudo de caso de um profissional que usou IA para planejar posts, gerar ideias e otimizar o perfil, resultando em crescimento orgânico e novas oportunidades de negócio.',
        image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=1200',
        content: `
João, consultor de vendas B2B, sempre teve dificuldade em manter uma presença ativa no LinkedIn. Com a IA, ele conseguiu criar uma estratégia de conteúdo consistente e atrair seguidores qualificados.

## O plano

1. **Otimização do perfil**: IA sugeriu melhorias na headline, resumo e experiência.
2. **Planejamento de conteúdo**: IA gerou 30 ideias de posts baseadas nas dores do seu público.
3. **Criação de posts**: Para cada ideia, IA escrevia um rascunho que João revisava.
4. **Engajamento**: IA sugeria comentários relevantes em posts de influenciadores.

## Prompts

**Para otimização do perfil:**
\`\`\`
Analise este perfil do LinkedIn e sugira melhorias na headline, resumo e seção de experiência para atrair mais leads B2B. [cole o texto atual]
\`\`\`

**Para ideias de posts:**
\`\`\`
Gere 30 ideias de posts para LinkedIn sobre vendas B2B. Inclua dicas, reflexões, perguntas e cases. Priorize temas que gerem engajamento.
\`\`\`

## Resultados

- **5.000 seguidores** em 3 meses.
- **+50 conexões** qualificadas por semana.
- **3 novos contratos** fechados via LinkedIn.

João agora usa IA para manter o ritmo e continua crescendo.
    `
    },
    {
        slug: 'professora-curso-online',
        title: 'IA na educação: uma professora que criou um curso online em 1 semana',
        date: '2026-03-15',
        category: 'Educação',
        excerpt: 'Relato de uma educadora que usou IA para estruturar o curso, gerar material de apoio e criar exercícios, lançando seu primeiro produto digital rapidamente.',
        image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1200',
        content: `
A professora de inglês Carla queria criar um curso online para complementar a renda, mas não tinha experiência em produção de conteúdo. Com a ajuda da IA, ela estruturou tudo em apenas uma semana.

## O processo

1. **Definiu o objetivo do curso**: "Inglês para viagens".
2. **Usou IA para criar a ementa**: módulos, aulas, carga horária.
3. **Gerou material de apoio**: PDFs, exercícios, flashcards.
4. **Criou roteiros para as videoaulas**.
5. **Produziu as aulas** baseadas nos roteiros.

## Prompts usados

\`\`\`
Crie uma ementa detalhada para um curso online de 20 horas sobre "Inglês para Viagens". Divida em 5 módulos, cada um com 4 aulas. Descreva o conteúdo de cada aula.
\`\`\`

\`\`\`
Gere 50 exercícios de vocabulário para viagens, com respostas. Inclua situações como aeroporto, hotel, restaurante, etc.
\`\`\`

## Resultados

- **Curso lançado** em 7 dias.
- **Primeiros 50 alunos** em 2 semanas.
- **Avaliações positivas** (4.8/5).

Carla agora planeja criar mais cursos usando a mesma metodologia.
    `
    },
    {
        slug: 'saas-conteudo-seo',
        title: 'Como uma startup de SaaS usou IA para escrever 100 artigos de blog e rankear no Google',
        date: '2026-03-17',
        category: 'SEO',
        excerpt: 'Análise aprofundada de uma empresa que integrou IA em sua estratégia de conteúdo, produzindo artigos otimizados para SEO e conquistando tráfego orgânico.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
        content: `
A startup "TaskFlow", de software de gestão de tarefas, precisava aumentar o tráfego orgânico para gerar leads. Com uma equipe pequena, decidiram usar IA para produzir conteúdo em escala.

## Estratégia

1. **Pesquisa de palavras-chave**: Usaram IA para sugerir termos de cauda longa.
2. **Criação de briefings**: Para cada palavra, a IA gerava um briefing com título, subtítulos e pontos a abordar.
3. **Produção dos artigos**: IA escrevia um rascunho que era revisado por um humano.
4. **Otimização on-page**: IA sugeria meta descrições e tags.

## Resultados

- **100 artigos publicados** em 3 meses.
- **Tráfego orgânico** saltou de 2.000 para 15.000 visitas/mês.
- **Leads** aumentaram 300%.

## Exemplo de prompt

\`\`\`
Para a palavra-chave "como organizar tarefas em equipe", crie um briefing de artigo com: título sugerido, introdução, 5 subtítulos (H2) com explicação, e conclusão. Inclua palavras relacionadas e perguntas frequentes.
\`\`\`

A startup hoje tem um blog robusto e continua usando IA para manter o ritmo.
    `
    },
    {
        slug: 'atendimento-chatbot',
        title: 'O impacto da IA no atendimento ao cliente: uma pequena empresa que reduziu reclamações',
        date: '2026-03-19',
        category: 'Atendimento',
        excerpt: 'Case de uma empresa que implementou um chatbot com IA para responder perguntas frequentes, melhorando a satisfação do cliente e reduzindo a carga de trabalho da equipe.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',
        content: `
A loja online "PetLovers" vendia produtos para animais e recebia dezenas de perguntas repetitivas todos os dias. A equipe de atendimento estava sobrecarregada. Com um chatbot baseado em IA, eles automatizaram 80% das respostas.

## Antes do chatbot

- Média de 100 atendimentos/dia.
- Respostas demoravam até 2 horas.
- Clientes reclamavam da demora.

## Depois do chatbot

- Chatbot respondia perguntas comuns (horário de funcionamento, prazo de entrega, trocas).
- Equipe focava em casos complexos.
- Tempo de resposta caiu para 5 minutos.

## Resultados

- **Redução de 40%** nas reclamações.
- **Aumento de 20%** na satisfação do cliente.
- **Equipe mais produtiva** e menos estressada.

A empresa agora planeja expandir o chatbot para WhatsApp.
    `
    },
    {
        slug: 'traducao-internacionalizacao',
        title: 'IA para tradução e localização: como um criador expandiu para o mercado internacional',
        date: '2026-03-21',
        category: 'Internacionalização',
        excerpt: 'Exemplo de um produtor de conteúdo que usou IA para traduzir seus vídeos e artigos, alcançando audiências em outros países e aumentando sua receita.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
        content: `
O criador de conteúdo Lucas, do canal "Tecnologia em Português", queria alcançar o público de língua inglesa, mas não tinha orçamento para tradutores profissionais. Ele usou IA para traduzir e adaptar seu conteúdo.

## O processo

1. **Tradução dos roteiros**: ChatGPT traduzia os roteiros para inglês, mantendo o tom.
2. **Legendas**: Usou ferramentas como Subtitle Edit para gerar legendas em inglês.
3. **Descrições e títulos**: IA otimizava para SEO em inglês.
4. **Dublagem com IA**: Testou ferramentas como ElevenLabs para dublar os vídeos (opcional).

## Resultados

- **+50.000 inscritos** no canal em inglês.
- **Receita de Adsense** dobrou.
- **Parcerias internacionais** começaram a aparecer.

## Exemplo de prompt

\`\`\`
Traduza este roteiro de vídeo para o inglês, mantendo o tom descontraído e adaptando expressões culturais quando necessário. [cole o roteiro]
\`\`\`

Lucas agora considera criar um canal totalmente em inglês, com IA ajudando na produção.
    `
    },
    {
        slug: 'erros-ao-usar-ia',
        title: 'Os 3 maiores erros ao usar IA para criar conteúdo (e como evitá-los)',
        date: '2026-03-23',
        category: 'Melhores Práticas',
        excerpt: 'Post educativo sobre armadilhas comuns: conteúdo genérico, falta de revisão humana, dependência excessiva. Dicas para usar IA de forma inteligente.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
        content: `
A IA é uma ferramenta poderosa, mas muitos cometem erros que comprometem os resultados. Neste post, listamos os três principais e como evitá-los.

## Erro 1: Conteúdo genérico e sem personalidade

A IA tende a produzir textos padronizados. Se você não personalizar, seu conteúdo será igual ao de todo mundo.

**Como evitar:**
- Use a IA como base, mas adicione exemplos pessoais, experiências e opiniões.
- Revise cada texto, ajustando o tom e incluindo referências do seu nicho.

## Erro 2: Falta de revisão humana

Confiar cegamente na IA pode gerar informações incorretas ou desatualizadas.

**Como evitar:**
- Sempre verifique fatos e dados.
- Leia o texto em voz alta para identificar problemas de fluência.

## Erro 3: Dependência excessiva

Se você depende 100% da IA, perde a oportunidade de desenvolver sua própria voz e criatividade.

**Como evitar:**
- Use IA para tarefas repetitivas (gerar ideias, rascunhos) e guarde sua energia para o que realmente importa: estratégia e conexão com o público.

A IA é uma aliada, não uma substituta. Use com sabedoria!
    `
    },
    {
        slug: 'instagram-30-dias',
        title: 'Instagram com IA: 30 dias de conteúdo automatizado (estudo de caso completo)',
        date: '2026-03-25',
        category: 'Instagram',
        excerpt: 'Detalhamento do case do Instagram, mostrando passo a passo como uma conta foi do zero a 1.000 seguidores em 30 dias usando as técnicas do nosso mini-ebook.',
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200',
        content: `
Este post é um complemento ao nosso mini-ebook "Alavancando Instagram com IA". Aqui, detalhamos a jornada de uma conta real que seguiu o método e atingiu 1.000 seguidores em 30 dias.

## A conta

- Nicho: finanças pessoais para jovens.
- Público: 18-30 anos, interessados em investimentos.
- Objetivo: construir autoridade e gerar leads.

## O plano de 30 dias

**Dias 1-3: Foundation**
- Persona criada com IA.
- Tendências mapeadas.
- Identidade visual definida.

**Dias 4-20: Content Creation**
- 30 roteiros gerados com IA.
- Imagens criadas no Leonardo AI.
- Edição no CapCut.

**Dias 21-30: Automation & Scaling**
- Posts agendados no Meta Business Suite.
- Respostas automáticas configuradas.
- Análise semanal de resultados.

## Resultados

- **1.024 seguidores** no dia 30.
- **Engajamento médio** de 8% (acima da média do nicho).
- **50 leads** capturados via link na bio.

## Lições aprendidas

- A consistência foi o fator mais importante.
- A IA acelerou a produção, mas a curadoria humana fez a diferença.
- Responder comentários nos primeiros minutos ajudou no alcance.

Se você quer replicar, baixe os templates no final deste post.
    `
    },
    {
        slug: 'shorts-60-dias',
        title: 'YouTube Shorts: do zero aos primeiros $500 em 60 dias (case completo)',
        date: '2026-03-27',
        category: 'YouTube',
        excerpt: 'Relato detalhado de um canal que seguiu nosso método de Shorts e alcançou a primeira receita em dois meses.',
        image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=1200',
        content: `
Complementando nosso mini-ebook sobre Shorts, apresentamos o caso do canal "Dicas Rápidas", que atingiu os primeiros $500 de receita em 60 dias.

## O canal

- Nicho: produtividade e organização.
- Formato: vídeos de 30-60 segundos com dicas práticas.
- Frequência: 2 vídeos por dia.

## Estratégia

**Fase 1 (dias 1-20): Setup e produção em massa**
- 50 roteiros gerados com IA.
- Edição rápida no CapCut (10 min/vídeo).
- Primeiros 30 vídeos publicados.

**Fase 2 (dias 21-40): Otimização**
- Análise de desempenho no YouTube Studio.
- Ajustes nos hooks e hashtags.
- Séries temáticas criadas.

**Fase 3 (dias 41-60): Monetização**
- 10 milhões de visualizações acumuladas.
- Entrada no Programa de Parcerias.
- Primeiros $500 recebidos.

## Números

- **12 milhões** de visualizações totais.
- **25 mil inscritos**.
- **Receita média** de $0.02 por visualização.

## Dicas do criador

- "O segredo foi a consistência e a adaptação rápida."
- "Usei IA para roteiros, mas sempre adaptei para meu tom."
- "As hashtags de nicho fizeram diferença."

Baixe o checklist completo no link abaixo.
    `
    },
    {
        slug: 'tiktok-1-milhao',
        title: 'TikTok do zero ao 1 milhão de visualizações: o case que viralizou',
        date: '2026-03-29',
        category: 'TikTok',
        excerpt: 'A história de uma conta que alcançou 1 milhão de visualizações em 90 dias usando as técnicas do nosso mini-ebook.',
        image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=1200',
        content: `
O TikTok é a plataforma com maior potencial de viralização. Neste case, mostramos como a conta "Aprenda Inglês Rápido" atingiu 1 milhão de visualizações em 90 dias.

## A conta

- Nicho: ensino de inglês para brasileiros.
- Conteúdo: dicas rápidas, vocabulário, pronúncia.
- Frequência: 3 vídeos por dia.

## Estratégia

**Fase 1 (dias 1-30): Fundamentos**
- Análise de concorrentes e tendências.
- Definição de formato: vídeos com texto sobreposto e áudio em inglês.
- Produção de 90 vídeos iniciais.

**Fase 2 (dias 31-60): Crescimento**
- Identificação de vídeos com bom desempenho.
- Criação de séries (ex: "Palavra do dia").
- Engajamento ativo nos comentários.

**Fase 3 (dias 61-90): Viralização**
- Um vídeo atingiu 500 mil visualizações.
- Conta chegou a 1 milhão de views totais.
- Parcerias com marcas começaram.

## Resultados

- **1,2 milhão** de visualizações.
- **50 mil seguidores**.
- **R$ 2.000** em parcerias nos primeiros 3 meses.

## Aprendizados

- "O hook é tudo; perdi muito tempo com introduções fracas no começo."
- "Acompanhar tendências de áudio foi crucial."
- "Responder comentários gerou engajamento e novos vídeos."

Quer tentar? Baixe nosso template de planejamento para TikTok.
    `
    }
];

// Função para gerar o frontmatter em YAML
function gerarFrontmatter(post) {
    return `---
title: "${post.title}"
date: ${post.date}
category: "${post.category}"
excerpt: "${post.excerpt}"
image: "${post.image}"
---`;
}

// Criar cada arquivo
posts.forEach(post => {
    const filePath = path.join(postsDir, `${post.slug}.mdx`);
    const content = `${gerarFrontmatter(post)}\n\n${post.content.trim()}\n`;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Arquivo criado: ${filePath}`);
});

console.log('✅ 15 posts gerados com sucesso!');