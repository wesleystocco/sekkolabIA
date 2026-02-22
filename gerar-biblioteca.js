// gerar-biblioteca.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

const outputPath = path.join(__dirname, 'src', 'pages', 'biblioteca.astro');

// Garantir que a pasta pages existe
const pagesDir = path.join(__dirname, 'src', 'pages');
if (!fs.existsSync(pagesDir)) {
    fs.mkdirSync(pagesDir, { recursive: true });
}

// Conteúdo da página
const bibliotecaContent = `---
import MainLayout from '../layouts/MainLayout.astro';
import { 
  BookOpen, 
  Sparkles, 
  Image, 
  Video, 
  Mic, 
  Zap, 
  Search, 
  Coffee, 
  Code, 
  Download,
  Star,
  ExternalLink,
  Layers,
  Bot,
  PenTool,
  Music,
  Globe,
  Smartphone,
  Target
} from 'lucide-astro';

// Dados das ferramentas organizadas por categoria
const ferramentas = {
  chatbots: [
    {
      nome: "ChatGPT",
      descricao: "O modelo mais versátil, excelente para conversas, brainstorming e tarefas gerais. A versão paga (Plus) oferece acesso a modelos mais avançados e geração de imagens via DALL-E.",
      precos: ["Grátis (GPT-3.5)", "Plus: $20/mês", "Pro: $200/mês"],
      link: "https://chat.openai.com",
      icone: "Bot",
      tags: ["Conversação", "Pesquisa", "Geração de Texto"]
    },
    {
      nome: "Claude (Anthropic)",
      descricao: "Especialista em escrita criativa, análise de documentos longos e programação. Possui a maior janela de contexto (200k tokens) e é considerado superior para tarefas que exigem raciocínio profundo.",
      precos: ["Grátis (limitado)", "Pro: $20/mês", "Team: $25/usuário/mês"],
      link: "https://claude.ai",
      icone: "Sparkles",
      tags: ["Escrita", "Programação", "Análise"]
    },
    {
      nome: "Gemini (Google)",
      descricao: "Integrado ao ecossistema Google, com forte capacidade multimodal (texto, imagem, vídeo). O modelo Ultra é um dos mais avançados do mercado.",
      precos: ["Grátis (Gemini 1.5 Flash)", "Advanced: $20/mês (via Google One)"],
      link: "https://gemini.google.com",
      icone: "Globe",
      tags: ["Multimodal", "Pesquisa", "Integração Google"]
    },
    {
      nome: "DeepSeek",
      descricao: "Modelo chinês de código aberto que rivaliza com o GPT-4, com excelente desempenho em matemática e programação. Versões menores podem rodar localmente.",
      precos: ["Grátz (via app/web)", "API: pago por uso"],
      link: "https://chat.deepseek.com",
      icone: "Zap",
      tags: ["Código Aberto", "Matemática", "Programação"]
    },
    {
      nome: "Perplexity AI",
      descricao: "Motor de busca conversacional com citações em linha. Ideal para pesquisa rápida com fontes verificadas. O novo navegador Comet promete revolucionar a navegação.",
      precos: ["Grátis (limitado)", "Pro: $20/mês"],
      link: "https://www.perplexity.ai",
      icone: "Search",
      tags: ["Busca", "Pesquisa", "Citações"]
    },
    {
      nome: "Microsoft Copilot",
      descricao: "Integrado ao Bing, Edge e Windows. Oferece acesso gratuito ao GPT-4 e DALL-E 3. Versão Pro disponível para empresas.",
      precos: ["Grátis", "Pro: $20/usuário/mês"],
      link: "https://copilot.microsoft.com",
      icone: "Zap",
      tags: ["Integração Windows", "Grátis", "DALL-E"]
    }
  ],
  
  escrita: [
    {
      nome: "Jasper AI",
      descricao: "Focado em marketing e copywriting, com templates prontos para blogs, anúncios e e-mails. Oferece integração com Surfer SEO.",
      precos: ["Creator: $39/mês", "Pro: $59/mês", "Business: sob consulta"],
      link: "https://www.jasper.ai",
      icone: "PenTool",
      tags: ["Copywriting", "Marketing", "SEO"]
    },
    {
      nome: "Copy.ai",
      descricao: "Ferramenta para geração rápida de textos de marketing, descrições de produtos e posts para redes sociais. Interface simples e eficaz.",
      precos: ["Grátis (2.000 palavras/mês)", "Pro: $36/mês"],
      link: "https://www.copy.ai",
      icone: "PenTool",
      tags: ["Marketing", "Redes Sociais", "Rápido"]
    },
    {
      nome: "Writesonic",
      descricao: "Alternativa ao Jasper, com foco em SEO e criação de artigos longos. Inclui gerador de imagens e voz.",
      precos: ["Grátis (10.000 palavras/mês)", "Pro: $20/mês"],
      link: "https://writesonic.com",
      icone: "PenTool",
      tags: ["Artigos", "SEO", "Multimodal"]
    },
    {
      nome: "Notion AI",
      descricao: "Assistente integrado ao Notion para resumir notas, gerar ideias e escrever documentos. Perfeito para quem já usa o Notion.",
      precos: ["Add-on: $8/usuário/mês (além do plano Notion)"],
      link: "https://www.notion.so/product/ai",
      icone: "Layers",
      tags: ["Produtividade", "Notas", "Integração"]
    },
    {
      nome: "Grammarly",
      descricao: "Corretor ortográfico e de estilo com IA, agora com recursos generativos para reescrever frases e ajustar tom.",
      precos: ["Grátis (básico)", "Premium: $12/mês", "Business: $15/usuário/mês"],
      link: "https://www.grammarly.com",
      icone: "PenTool",
      tags: ["Revisão", "Gramática", "Estilo"]
    },
    {
      nome: "Sudowrite",
      descricao: "Ferramenta avançada para escritores de ficção, com recursos para desenvolver personagens, enredos e descrições. Muito usado por romancistas.",
      precos: ["Hobby: $19/mês", "Pro: $29/mês", "Max: $129/mês"],
      link: "https://www.sudowrite.com",
      icone: "BookOpen",
      tags: ["Ficção", "Criatividade", "Romance"]
    },
    {
      nome: "Rytr",
      descricao: "Assistente de escrita acessível, com suporte a vários idiomas e templates para diferentes finalidades.",
      precos: ["Grátis (2.000 caracteres/mês)", "Saver: $9/mês", "Unlimited: $29/mês"],
      link: "https://rytr.me",
      icone: "PenTool",
      tags: ["Econômico", "Multilíngue", "Templates"]
    }
  ],

  imagem: [
    {
      nome: "Midjourney",
      descricao: "Considerado por muitos o melhor gerador de imagens artísticas, com estilo único e alta qualidade. Acessível via Discord.",
      precos: ["Básico: $10/mês", "Padrão: $30/mês", "Pro: $60/mês"],
      link: "https://www.midjourney.com",
      icone: "Image",
      tags: ["Arte", "Estilo único", "Discord"]
    },
    {
      nome: "DALL-E 3 (OpenAI)",
      descricao: "Integrado ao ChatGPT Plus, excelente para seguir instruções complexas e gerar imagens realistas. Menos estilizado que o Midjourney.",
      precos: ["Via ChatGPT Plus: $20/mês", "API: pago por imagem"],
      link: "https://openai.com/dall-e-3",
      icone: "Image",
      tags: ["Realista", "Precisão", "Integração ChatGPT"]
    },
    {
      nome: "Stable Diffusion",
      descricao: "Modelo de código aberto que pode ser executado localmente (via Automatic1111, ComfyUI). Totalmente gratuito e personalizável.",
      precos: ["Grátis (auto-hospedado)", "Serviços em nuvem: pago"],
      link: "https://stability.ai",
      icone: "Image",
      tags: ["Código Aberto", "Local", "Personalizável"]
    },
    {
      nome: "Leonardo AI",
      descricao: "Plataforma amigável com muitos modelos pré-treinados e ferramentas de edição. Ótimo para criação de assets para jogos e design.",
      precos: ["Grátis (créditos diários)", "Pro: $10/mês"],
      link: "https://leonardo.ai",
      icone: "Image",
      tags: ["Grátis", "Jogos", "Design"]
    },
    {
      nome: "Ideogram",
      descricao: "Especialista em gerar texto dentro de imagens (logotipos, posters). Resultados impressionantes para tipografia.",
      precos: ["Grátis (limitado)", "Pro: $8/mês", "Business: $30/mês"],
      link: "https://ideogram.ai",
      icone: "Image",
      tags: ["Tipografia", "Logos", "Design Gráfico"]
    },
    {
      nome: "Adobe Firefly",
      descricao: "Integrado ao Photoshop e Illustrator, focado em edição e geração de imagens para design profissional. Ético (treinado com Adobe Stock).",
      precos: ["Incluso nos planos Creative Cloud"],
      link: "https://firefly.adobe.com",
      icone: "Image",
      tags: ["Design", "Edição", "Integração Adobe"]
    },
    {
      nome: "Playground AI",
      descricao: "Interface simples para gerar imagens com vários modelos (SDXL, DALL-E). Ideal para experimentação rápida.",
      precos: ["Grátis (500 imagens/mês)", "Pro: $15/mês"],
      link: "https://playgroundai.com",
      icone: "Image",
      tags: ["Fácil", "Experimentação", "SDXL"]
    },
    {
      nome: "Clipdrop (Stability AI)",
      descricao: "Conjunto de ferramentas para edição de imagens com IA: remoção de fundo, relighting, upscaling, etc.",
      precos: ["Grátis (limitado)", "Pago por uso"],
      link: "https://clipdrop.co",
      icone: "Image",
      tags: ["Edição", "Ferramentas", "Rápido"]
    }
  ],

  video: [
    {
      nome: "Runway Gen-3",
      descricao: "Plataforma líder para geração e edição de vídeos com IA. Recursos como remoção de objetos, geração a partir de texto e muito mais.",
      precos: ["Grátis (25 créditos/mês)", "Pro: $15/mês", "Empresarial: sob consulta"],
      link: "https://runwayml.com",
      icone: "Video",
      tags: ["Edição", "Geração", "Profissional"]
    },
    {
      nome: "Sora (OpenAI)",
      descricao: "Modelo de geração de vídeo de alta qualidade, com até 1 minuto de duração. Fotorrealista e com compreensão de física.",
      precos: ["Ainda em fase de testes", "Deve ser incluído no ChatGPT Pro"],
      link: "https://openai.com/sora",
      icone: "Video",
      tags: ["Fotorrealismo", "Alta Qualidade", "Novidade"]
    },
    {
      nome: "HeyGen",
      descricao: "Criação de avatares digitais e vídeos com apresentadores virtuais. Ideal para treinamentos e marketing.",
      precos: ["Grátis (1 minuto)", "Creator: $29/mês", "Business: $99/mês"],
      link: "https://www.heygen.com",
      icone: "Video",
      tags: ["Avatar", "Apresentador", "Tradução"]
    },
    {
      nome: "Synthesia",
      descricao: "Plataforma profissional para criação de vídeos com avatares realistas. Muito usado por empresas para treinamentos.",
      precos: ["Personal: $29/mês", "Business: sob consulta"],
      link: "https://www.synthesia.io",
      icone: "Video",
      tags: ["Avatar", "Corporativo", "Treinamento"]
    },
    {
      nome: "Pika Labs",
      descricao: "Ferramenta popular para geração rápida de vídeos a partir de texto ou imagem. Comunidade ativa no Discord.",
      precos: ["Grátis (créditos diários)", "Pro: $10/mês"],
      link: "https://pika.art",
      icone: "Video",
      tags: ["Rápido", "Comunidade", "Discord"]
    },
    {
      nome: "Kaiber",
      descricao: "Foco em vídeos artísticos e animações, com estilos variados. Usado por músicos para clipes.",
      precos: ["Explorer: $5/mês", "Pro: $15/mês", "Artist: $30/mês"],
      link: "https://kaiber.ai",
      icone: "Video",
      tags: ["Arte", "Música", "Animação"]
    },
    {
      nome: "CapCut",
      descricao: "Editor de vídeo gratuito com poderosas ferramentas de IA: legendas automáticas, remoção de fundo, geração de roteiros.",
      precos: ["Grátis", "Pro: $8/mês"],
      link: "https://www.capcut.com",
      icone: "Video",
      tags: ["Edição", "Legendas", "Grátis"]
    }
  ],

  audio: [
    {
      nome: "ElevenLabs",
      descricao: "Síntese de voz ultra-realista, com clonagem de voz e múltiplos idiomas. Padrão ouro para narração.",
      precos: ["Grátis (10.000 caracteres/mês)", "Starter: $5/mês", "Creator: $22/mês"],
      link: "https://elevenlabs.io",
      icone: "Mic",
      tags: ["Voz", "Realista", "Clonagem"]
    },
    {
      nome: "Suno AI",
      descricao: "Geração de músicas completas (letra e melodia) a partir de prompts. Qualidade impressionante.",
      precos: ["Grátis (50 créditos/dia)", "Pro: $10/mês", "Premier: $30/mês"],
      link: "https://suno.ai",
      icone: "Music",
      tags: ["Música", "Letra", "Criatividade"]
    },
    {
      nome: "Udio",
      descricao: "Alternativa ao Suno, também focada em geração musical. Permite estender músicas e criar variações.",
      precos: ["Grátis (limitado)", "Pro: $10/mês"],
      link: "https://www.udio.com",
      icone: "Music",
      tags: ["Música", "Variações", "Grátis"]
    },
    {
      nome: "Descript",
      descricao: "Edição de áudio e vídeo baseada em texto. Edite o podcast como se fosse um documento. Inclui overdub (voz gerada).",
      precos: ["Grátis (3 horas)", "Creator: $15/mês", "Pro: $30/mês"],
      link: "https://www.descript.com",
      icone: "Mic",
      tags: ["Edição", "Podcast", "Overdub"]
    },
    {
      nome: "Adobe Podcast",
      descricao: "Ferramentas gratuitas para melhorar qualidade de áudio (remover ruído, equalizar). Versão web.",
      precos: ["Grátis", "Premium (Creative Cloud)"],
      link: "https://podcast.adobe.com",
      icone: "Mic",
      tags: ["Podcast", "Melhoria", "Grátis"]
    },
    {
      nome: "Otter.ai",
      descricao: "Transcrição de reuniões em tempo real, com resumos automáticos e identificação de falantes.",
      precos: ["Grátis (300 min/mês)", "Pro: $10/mês", "Business: $20/usuário/mês"],
      link: "https://otter.ai",
      icone: "Mic",
      tags: ["Transcrição", "Reuniões", "Resumos"]
    },
    {
      nome: "Wispr Flow",
      descricao: "Ditado por voz com IA, reconhecimento contextual. Escreva e-mails e documentos falando.",
      precos: ["Grátis (limitado)", "Pro: $12/mês"],
      link: "https://wisprflow.ai",
      icone: "Mic",
      tags: ["Ditado", "Produtividade", "Voz"]
    }
  ],

  automacao: [
    {
      nome: "n8n",
      descricao: "Ferramenta de automação de código aberto (self-hosted). Conecta APIs e serviços com interface visual. Muito flexível.",
      precos: ["Grátis (self-hosted)", "Cloud: a partir de $20/mês"],
      link: "https://n8n.io",
      icone: "Zap",
      tags: ["Automação", "Código Aberto", "Self-hosted"]
    },
    {
      nome: "Zapier",
      descricao: "O clássico conector de apps, agora com IA para sugerir Zaps e mapear dados automaticamente.",
      precos: ["Grátis (5 Zaps)", "Starter: $20/mês", "Profissional: $49/mês"],
      link: "https://zapier.com",
      icone: "Zap",
      tags: ["Automação", "Fácil", "Integrações"]
    },
    {
      nome: "Make (ex-Integromat)",
      descricao: "Alternativa visual ao Zapier, com fluxos mais complexos e preços competitivos.",
      precos: ["Grátis (1.000 ops/mês)", "Core: $9/mês", "Pro: $16/mês"],
      link: "https://www.make.com",
      icone: "Zap",
      tags: ["Automação", "Visual", "Econômico"]
    },
    {
      nome: "ManyChat",
      descricao: "Automação de marketing no Instagram e Facebook Messenger. Captura leads via comentários e DMs.",
      precos: ["Grátis (1.000 contatos)", "Pro: $15/mês"],
      link: "https://manychat.com",
      icone: "Smartphone",
      tags: ["Marketing", "Instagram", "Chatbot"]
    },
    {
      nome: "Relevance AI",
      descricao: "Plataforma para construir times de agentes de IA que executam tarefas complexas de forma autônoma.",
      precos: ["Grátis (100 tarefas)", "Starter: $30/mês", "Growth: $150/mês"],
      link: "https://relevanceai.com",
      icone: "Bot",
      tags: ["Agentes", "Automação", "Equipes IA"]
    },
    {
      nome: "Claude Projects",
      descricao: "Criação de agentes personalizados treinados com seus documentos e processos. Atua como membro da equipe.",
      precos: ["Incluso no Claude Pro"],
      link: "https://claude.ai",
      icone: "Bot",
      tags: ["Agentes", "Personalizado", "Documentos"]
    }
  ],

  pesquisa: [
    {
      nome: "NotebookLM (Google)",
      descricao: "Assistente de pesquisa baseado em documentos. Você faz upload de PDFs, links, e ele responde com base apenas nesse material. Gera resumos, FAQs e até podcasts.",
      precos: ["Grátis"],
      link: "https://notebooklm.google",
      icone: "BookOpen",
      tags: ["Pesquisa", "Documentos", "Resumos"]
    },
    {
      nome: "Consensus",
      descricao: "Motor de busca para artigos científicos. Responde perguntas com base em papers reais e mostra o consenso da literatura.",
      precos: ["Grátis (básico)", "Premium: $9/mês"],
      link: "https://consensus.app",
      icone: "Search",
      tags: ["Ciência", "Artigos", "Acadêmico"]
    },
    {
      nome: "Elicit",
      descricao: "Assistente de pesquisa acadêmica que encontra papers, extrai dados e resume conclusões. Focado em eficiência.",
      precos: ["Grátis"],
      link: "https://elicit.org",
      icone: "Search",
      tags: ["Acadêmico", "Papers", "Resumos"]
    },
    {
      nome: "Scite",
      descricao: "Mostra como um artigo foi citado (se foi apoiado, contestado ou apenas mencionado). Útil para avaliar impacto.",
      precos: ["Grátis (limitado)", "Individual: $20/mês"],
      link: "https://scite.ai",
      icone: "Search",
      tags: ["Citações", "Acadêmico", "Métricas"]
    },
    {
      nome: "Perplexity Pages",
      descricao: "Recurso do Perplexity que compila pesquisas em formato de artigo, com seções e citações. Ideal para criar relatórios.",
      precos: ["Incluso no Perplexity Pro"],
      link: "https://www.perplexity.ai",
      icone: "Layers",
      tags: ["Relatórios", "Compilação", "Citações"]
    }
  ],

  produtividade: [
    {
      nome: "Gamma",
      descricao: "Criação de apresentações, documentos e sites com IA. Gera slides a partir de prompts, com design impecável.",
      precos: ["Grátis (400 créditos)", "Pro: $10/mês", "Business: $20/usuário/mês"],
      link: "https://gamma.app",
      icone: "Layers",
      tags: ["Apresentações", "Design", "Rápido"]
    },
    {
      nome: "Napkin AI",
      descricao: "Transforma texto em infográficos e diagramas visuais automaticamente. Perfeito para explicar ideias complexas.",
      precos: ["Grátis (em beta)", "Preços a definir"],
      link: "https://napkin.ai",
      icone: "Image",
      tags: ["Infográficos", "Visual", "Diagramas"]
    },
    {
      nome: "Mem",
      descricao: "App de notas com IA que organiza automaticamente suas anotações, conecta ideias e sugere lembretes.",
      precos: ["Grátis", "Pro: $8/mês"],
      link: "https://mem.ai",
      icone: "Layers",
      tags: ["Notas", "Organização", "Memória"]
    },
    {
      nome: "Reclaim.ai",
      descricao: "Assistente de calendário que agenda tarefas, hábitos e reuniões automaticamente nos horários vagos.",
      precos: ["Grátis (básico)", "Pro: $12/mês"],
      link: "https://reclaim.ai",
      icone: "Coffee",
      tags: ["Calendário", "Agendamento", "Produtividade"]
    },
    {
      nome: "Motion",
      descricao: "Gerenciador de tarefas com IA que agenda automaticamente seu dia e reajusta conforme mudanças.",
      precos: ["$19/mês"],
      link: "https://www.usemotion.com",
      icone: "Coffee",
      tags: ["Tarefas", "Agenda", "Automação"]
    },
    {
      nome: "Fireflies.ai",
      descricao: "Gravador e transcritor de reuniões, com resumos automáticos e integração com CRMs.",
      precos: ["Grátis (8 horas/usuário)", "Pro: $18/usuário/mês"],
      link: "https://fireflies.ai",
      icone: "Mic",
      tags: ["Reuniões", "Transcrição", "Resumos"]
    },
    {
      nome: "Fathom",
      descricao: "Assistente de reuniões gratuito que grava, transcreve e resume chamadas (Zoom, Meet). Destaque momentos importantes.",
      precos: ["Grátis"],
      link: "https://fathom.video",
      icone: "Video",
      tags: ["Reuniões", "Grátis", "Zoom"]
    }
  ],

  programacao: [
    {
      nome: "Cursor",
      descricao: "Editor de código (fork do VSCode) com IA integrada. Escreve, edita e depura código com base em comandos de texto.",
      precos: ["Grátis (2 semanas)", "Pro: $20/mês"],
      link: "https://cursor.sh",
      icone: "Code",
      tags: ["Editor", "Código", "Automação"]
    },
    {
      nome: "GitHub Copilot",
      descricao: "Assistente de programação da Microsoft, integrado a vários IDEs. Sugere linhas e funções completas em tempo real.",
      precos: ["$10/mês ou $100/ano"],
      link: "https://github.com/features/copilot",
      icone: "Code",
      tags: ["Programação", "Sugestões", "GitHub"]
    },
    {
      nome: "Replit Agent",
      descricao: "Ambiente de desenvolvimento online onde um agente de IA pode criar, executar e depurar projetos completos a partir de uma descrição.",
      precos: ["Grátis (limitado)", "Replit Core: $10/mês"],
      link: "https://replit.com",
      icone: "Code",
      tags: ["Agente", "Online", "Prototipagem"]
    },
    {
      nome: "v0 (Vercel)",
      descricao: "Geração de componentes e interfaces React a partir de prompts. Ideal para front-end.",
      precos: ["Grátis (50 prompts)", "Pro: $20/mês"],
      link: "https://v0.dev",
      icone: "Code",
      tags: ["Front-end", "React", "UI"]
    },
    {
      nome: "Bolt.new",
      descricao: "Ferramenta similar ao v0, mas com foco em aplicações full-stack. Gera código pronto para deploy.",
      precos: ["Grátis (limitado)", "Pro: $20/mês"],
      link: "https://bolt.new",
      icone: "Code",
      tags: ["Full-stack", "Deploy", "Rápido"]
    }
  ],

  plataformas: [
    {
      nome: "SiliconFlow",
      descricao: "Plataforma de nuvem unificada para inferência e fine-tuning de modelos. Oferece acesso a centenas de modelos (LLaMA, Qwen, DeepSeek) com preços competitivos.",
      precos: ["Pago por uso (tokens)"],
      link: "https://siliconflow.cn",
      icone: "Zap",
      tags: ["API", "Modelos", "Nuvem"]
    },
    {
      nome: "Hugging Face",
      descricao: "Repositório com mais de 1 milhão de modelos e datasets. Hub para a comunidade de IA, com espaços para testar modelos.",
      precos: ["Grátis (público)", "Empresarial: pago"],
      link: "https://huggingface.co",
      icone: "Layers",
      tags: ["Modelos", "Comunidade", "Código Aberto"]
    },
    {
      nome: "Replicate",
      descricao: "Plataforma que roda modelos de código aberto na nuvem via API simples. Muitos modelos de imagem, vídeo e áudio.",
      precos: ["Pago por uso (tempo de GPU)"],
      link: "https://replicate.com",
      icone: "Zap",
      tags: ["API", "GPU", "Código Aberto"]
    },
    {
      nome: "Poe (Quora)",
      descricao: "Agregador de vários bots (ChatGPT, Claude, etc.) em uma única interface. Permite criar bots personalizados.",
      precos: ["Grátis (limitado)", "Pro: $20/mês"],
      link: "https://poe.com",
      icone: "Bot",
      tags: ["Agregador", "Múltiplos bots", "Fácil"]
    },
    {
      nome: "You.com",
      descricao: "Motor de busca com IA e acesso a vários modelos (GPT-4, Claude) em uma única interface.",
      precos: ["Grátis (com anúncios)", "Pro: $15/mês"],
      link: "https://you.com",
      icone: "Search",
      tags: ["Busca", "Agregador", "Privacidade"]
    }
  ]
};

// Função para obter o componente de ícone
function getIconComponent(iconName) {
  const icons = {
    Bot: Bot,
    Sparkles: Sparkles,
    Globe: Globe,
    Zap: Zap,
    Search: Search,
    PenTool: PenTool,
    BookOpen: BookOpen,
    Layers: Layers,
    Image: Image,
    Video: Video,
    Mic: Mic,
    Music: Music,
    Code: Code,
    Coffee: Coffee,
    Smartphone: Smartphone,
    Target: Target
  };
  return icons[iconName] || Sparkles;
}
---

<MainLayout title="Biblioteca de IA – SekkoLab">
  <div class="max-w-7xl mx-auto px-4 py-12">
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-heading font-black text-white mb-4">
        Biblioteca <span class="text-cyan-400">de IA</span>
      </h1>
      <p class="text-xl text-slate-400 max-w-3xl mx-auto">
        Mais de 200 ferramentas de IA organizadas por categoria – desde chatbots e geradores de imagem até automação e programação. 
        Tudo o que você precisa para potencializar sua criatividade e produtividade.
      </p>
    </div>

    <!-- Categorias -->
    <div class="space-y-16">
      <!-- Chatbots e Assistentes -->
      <section>
        <h2 class="text-3xl font-heading font-bold text-white mb-8 flex items-center gap-3">
          <Bot class="w-8 h-8 text-cyan-400" />
          Chatbots e Assistentes
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ferramentas.chatbots.map((f) => {
            const Icon = getIconComponent(f.icone);
            return (
              <div class="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/5">
                <div class="flex items-start justify-between mb-4">
                  <div class="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Icon class="w-6 h-6" />
                  </div>
                  <div class="flex gap-1">
                    {f.tags.slice(0, 2).map(tag => (
                      <span class="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">{f.nome}</h3>
                <p class="text-slate-400 text-sm mb-4">{f.descricao}</p>
                <div class="space-y-2 mb-4">
                  {f.precos.map(preco => (
                    <div class="flex items-center gap-2 text-sm">
                      <span class="w-2 h-2 bg-amber-400 rounded-full"></span>
                      <span class="text-slate-300">{preco}</span>
                    </div>
                  ))}
                </div>
                <a 
                  href={f.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  Acessar <ExternalLink class="w-3 h-3" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <!-- Escrita e Criação de Conteúdo -->
      <section>
        <h2 class="text-3xl font-heading font-bold text-white mb-8 flex items-center gap-3">
          <PenTool class="w-8 h-8 text-cyan-400" />
          Escrita e Criação de Conteúdo
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ferramentas.escrita.map((f) => {
            const Icon = getIconComponent(f.icone);
            return (
              <div class="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/5">
                <div class="flex items-start justify-between mb-4">
                  <div class="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Icon class="w-6 h-6" />
                  </div>
                  <div class="flex gap-1">
                    {f.tags.slice(0, 2).map(tag => (
                      <span class="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">{f.nome}</h3>
                <p class="text-slate-400 text-sm mb-4">{f.descricao}</p>
                <div class="space-y-2 mb-4">
                  {f.precos.map(preco => (
                    <div class="flex items-center gap-2 text-sm">
                      <span class="w-2 h-2 bg-amber-400 rounded-full"></span>
                      <span class="text-slate-300">{preco}</span>
                    </div>
                  ))}
                </div>
                <a 
                  href={f.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  Acessar <ExternalLink class="w-3 h-3" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <!-- Geração de Imagem -->
      <section>
        <h2 class="text-3xl font-heading font-bold text-white mb-8 flex items-center gap-3">
          <Image class="w-8 h-8 text-cyan-400" />
          Geração e Edição de Imagem
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ferramentas.imagem.map((f) => {
            const Icon = getIconComponent(f.icone);
            return (
              <div class="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/5">
                <div class="flex items-start justify-between mb-4">
                  <div class="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Icon class="w-6 h-6" />
                  </div>
                  <div class="flex gap-1">
                    {f.tags.slice(0, 2).map(tag => (
                      <span class="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">{f.nome}</h3>
                <p class="text-slate-400 text-sm mb-4">{f.descricao}</p>
                <div class="space-y-2 mb-4">
                  {f.precos.map(preco => (
                    <div class="flex items-center gap-2 text-sm">
                      <span class="w-2 h-2 bg-amber-400 rounded-full"></span>
                      <span class="text-slate-300">{preco}</span>
                    </div>
                  ))}
                </div>
                <a 
                  href={f.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  Acessar <ExternalLink class="w-3 h-3" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <!-- Vídeo -->
      <section>
        <h2 class="text-3xl font-heading font-bold text-white mb-8 flex items-center gap-3">
          <Video class="w-8 h-8 text-cyan-400" />
          Geração e Edição de Vídeo
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ferramentas.video.map((f) => {
            const Icon = getIconComponent(f.icone);
            return (
              <div class="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/5">
                <div class="flex items-start justify-between mb-4">
                  <div class="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Icon class="w-6 h-6" />
                  </div>
                  <div class="flex gap-1">
                    {f.tags.slice(0, 2).map(tag => (
                      <span class="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">{f.nome}</h3>
                <p class="text-slate-400 text-sm mb-4">{f.descricao}</p>
                <div class="space-y-2 mb-4">
                  {f.precos.map(preco => (
                    <div class="flex items-center gap-2 text-sm">
                      <span class="w-2 h-2 bg-amber-400 rounded-full"></span>
                      <span class="text-slate-300">{preco}</span>
                    </div>
                  ))}
                </div>
                <a 
                  href={f.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  Acessar <ExternalLink class="w-3 h-3" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <!-- Áudio e Música -->
      <section>
        <h2 class="text-3xl font-heading font-bold text-white mb-8 flex items-center gap-3">
          <Music class="w-8 h-8 text-cyan-400" />
          Áudio, Música e Voz
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ferramentas.audio.map((f) => {
            const Icon = getIconComponent(f.icone);
            return (
              <div class="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/5">
                <div class="flex items-start justify-between mb-4">
                  <div class="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Icon class="w-6 h-6" />
                  </div>
                  <div class="flex gap-1">
                    {f.tags.slice(0, 2).map(tag => (
                      <span class="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">{f.nome}</h3>
                <p class="text-slate-400 text-sm mb-4">{f.descricao}</p>
                <div class="space-y-2 mb-4">
                  {f.precos.map(preco => (
                    <div class="flex items-center gap-2 text-sm">
                      <span class="w-2 h-2 bg-amber-400 rounded-full"></span>
                      <span class="text-slate-300">{preco}</span>
                    </div>
                  ))}
                </div>
                <a 
                  href={f.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  Acessar <ExternalLink class="w-3 h-3" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <!-- Automação e Agentes -->
      <section>
        <h2 class="text-3xl font-heading font-bold text-white mb-8 flex items-center gap-3">
          <Zap class="w-8 h-8 text-cyan-400" />
          Automação e Agentes de IA
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ferramentas.automacao.map((f) => {
            const Icon = getIconComponent(f.icone);
            return (
              <div class="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/5">
                <div class="flex items-start justify-between mb-4">
                  <div class="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Icon class="w-6 h-6" />
                  </div>
                  <div class="flex gap-1">
                    {f.tags.slice(0, 2).map(tag => (
                      <span class="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">{f.nome}</h3>
                <p class="text-slate-400 text-sm mb-4">{f.descricao}</p>
                <div class="space-y-2 mb-4">
                  {f.precos.map(preco => (
                    <div class="flex items-center gap-2 text-sm">
                      <span class="w-2 h-2 bg-amber-400 rounded-full"></span>
                      <span class="text-slate-300">{preco}</span>
                    </div>
                  ))}
                </div>
                <a 
                  href={f.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  Acessar <ExternalLink class="w-3 h-3" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <!-- Pesquisa e Estudo -->
      <section>
        <h2 class="text-3xl font-heading font-bold text-white mb-8 flex items-center gap-3">
          <Search class="w-8 h-8 text-cyan-400" />
          Pesquisa e Estudo
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ferramentas.pesquisa.map((f) => {
            const Icon = getIconComponent(f.icone);
            return (
              <div class="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/5">
                <div class="flex items-start justify-between mb-4">
                  <div class="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Icon class="w-6 h-6" />
                  </div>
                  <div class="flex gap-1">
                    {f.tags.slice(0, 2).map(tag => (
                      <span class="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">{f.nome}</h3>
                <p class="text-slate-400 text-sm mb-4">{f.descricao}</p>
                <div class="space-y-2 mb-4">
                  {f.precos.map(preco => (
                    <div class="flex items-center gap-2 text-sm">
                      <span class="w-2 h-2 bg-amber-400 rounded-full"></span>
                      <span class="text-slate-300">{preco}</span>
                    </div>
                  ))}
                </div>
                <a 
                  href={f.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  Acessar <ExternalLink class="w-3 h-3" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <!-- Produtividade -->
      <section>
        <h2 class="text-3xl font-heading font-bold text-white mb-8 flex items-center gap-3">
          <Coffee class="w-8 h-8 text-cyan-400" />
          Produtividade e Organização
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ferramentas.produtividade.map((f) => {
            const Icon = getIconComponent(f.icone);
            return (
              <div class="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/5">
                <div class="flex items-start justify-between mb-4">
                  <div class="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Icon class="w-6 h-6" />
                  </div>
                  <div class="flex gap-1">
                    {f.tags.slice(0, 2).map(tag => (
                      <span class="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">{f.nome}</h3>
                <p class="text-slate-400 text-sm mb-4">{f.descricao}</p>
                <div class="space-y-2 mb-4">
                  {f.precos.map(preco => (
                    <div class="flex items-center gap-2 text-sm">
                      <span class="w-2 h-2 bg-amber-400 rounded-full"></span>
                      <span class="text-slate-300">{preco}</span>
                    </div>
                  ))}
                </div>
                <a 
                  href={f.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  Acessar <ExternalLink class="w-3 h-3" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <!-- Programação -->
      <section>
        <h2 class="text-3xl font-heading font-bold text-white mb-8 flex items-center gap-3">
          <Code class="w-8 h-8 text-cyan-400" />
          Programação e Desenvolvimento
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ferramentas.programacao.map((f) => {
            const Icon = getIconComponent(f.icone);
            return (
              <div class="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/5">
                <div class="flex items-start justify-between mb-4">
                  <div class="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Icon class="w-6 h-6" />
                  </div>
                  <div class="flex gap-1">
                    {f.tags.slice(0, 2).map(tag => (
                      <span class="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">{f.nome}</h3>
                <p class="text-slate-400 text-sm mb-4">{f.descricao}</p>
                <div class="space-y-2 mb-4">
                  {f.precos.map(preco => (
                    <div class="flex items-center gap-2 text-sm">
                      <span class="w-2 h-2 bg-amber-400 rounded-full"></span>
                      <span class="text-slate-300">{preco}</span>
                    </div>
                  ))}
                </div>
                <a 
                  href={f.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  Acessar <ExternalLink class="w-3 h-3" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <!-- Plataformas e Agregadores -->
      <section>
        <h2 class="text-3xl font-heading font-bold text-white mb-8 flex items-center gap-3">
          <Layers class="w-8 h-8 text-cyan-400" />
          Plataformas e Agregadores
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ferramentas.plataformas.map((f) => {
            const Icon = getIconComponent(f.icone);
            return (
              <div class="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/5">
                <div class="flex items-start justify-between mb-4">
                  <div class="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Icon class="w-6 h-6" />
                  </div>
                  <div class="flex gap-1">
                    {f.tags.slice(0, 2).map(tag => (
                      <span class="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">{f.nome}</h3>
                <p class="text-slate-400 text-sm mb-4">{f.descricao}</p>
                <div class="space-y-2 mb-4">
                  {f.precos.map(preco => (
                    <div class="flex items-center gap-2 text-sm">
                      <span class="w-2 h-2 bg-amber-400 rounded-full"></span>
                      <span class="text-slate-300">{preco}</span>
                    </div>
                  ))}
                </div>
                <a 
                  href={f.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  Acessar <ExternalLink class="w-3 h-3" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </div>

    <!-- Livros Recomendados (seção existente) -->
    <section class="mt-24">
      <h2 class="text-3xl font-heading font-bold text-white mb-8 flex items-center gap-3">
        <BookOpen class="w-8 h-8 text-cyan-400" />
        Livros Recomendados
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-slate-900/50 border border-white/5 rounded-2xl p-6">
          <div class="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
            <BookOpen class="w-6 h-6" />
          </div>
          <h3 class="text-xl font-bold text-white mb-2">O Poder do Hábito</h3>
          <p class="text-slate-400 text-sm mb-3">Charles Duhigg</p>
          <p class="text-sm text-slate-500 mb-4">Entenda como hábitos funcionam e como mudá-los.</p>
        </div>
        <div class="bg-slate-900/50 border border-white/5 rounded-2xl p-6">
          <div class="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
            <BookOpen class="w-6 h-6" />
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Marketing 5.0</h3>
          <p class="text-slate-400 text-sm mb-3">Philip Kotler</p>
          <p class="text-sm text-slate-500 mb-4">Tecnologia a serviço do marketing.</p>
        </div>
        <div class="bg-slate-900/50 border border-white/5 rounded-2xl p-6">
          <div class="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
            <BookOpen class="w-6 h-6" />
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Hooked</h3>
          <p class="text-slate-400 text-sm mb-3">Nir Eyal</p>
          <p class="text-sm text-slate-500 mb-4">Como construir produtos formadores de hábitos.</p>
        </div>
        <div class="bg-slate-900/50 border border-white/5 rounded-2xl p-6">
          <div class="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
            <BookOpen class="w-6 h-6" />
          </div>
          <h3 class="text-xl font-bold text-white mb-2">A Bíblia de Vendas</h3>
          <p class="text-slate-400 text-sm mb-3">Jeffrey Gitomer</p>
          <p class="text-sm text-slate-500 mb-4">Técnicas atemporais para vender mais.</p>
        </div>
        <div class="bg-slate-900/50 border border-white/5 rounded-2xl p-6">
          <div class="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
            <BookOpen class="w-6 h-6" />
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Rápido e Devagar</h3>
          <p class="text-slate-400 text-sm mb-3">Daniel Kahneman</p>
          <p class="text-sm text-slate-500 mb-4">Os dois sistemas da mente e como tomamos decisões.</p>
        </div>
        <div class="bg-slate-900/50 border border-white/5 rounded-2xl p-6">
          <div class="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
            <BookOpen class="w-6 h-6" />
          </div>
          <h3 class="text-xl font-bold text-white mb-2">De Zero a Um</h3>
          <p class="text-slate-400 text-sm mb-3">Peter Thiel</p>
          <p class="text-sm text-slate-500 mb-4">Inovação e construção de negócios únicos.</p>
        </div>
      </div>
    </section>

    <!-- Nota sobre a lista -->
    <div class="mt-16 text-center text-slate-500 text-sm border-t border-white/5 pt-8">
      <p>
        Lista atualizada em fevereiro de 2026. Mais de 200 ferramentas catalogadas. 
        As informações de preço são aproximadas e podem variar.
      </p>
    </div>
  </div>
</MainLayout>
`;

// Escrever o arquivo
fs.writeFileSync(outputPath, bibliotecaContent, 'utf8');
console.log(`✅ Página gerada com sucesso: ${outputPath}`);