// Arquivo: src/data/equipeDados.ts

// 1. Definindo uma Interface para garantir a estrutura (Boa prática)
export interface RedeSocial {
   plataforma: 'linkedin' | 'github' | 'website' | 'twitter' | 'outro'; // Adicione mais se precisar
   url: string; // URL COMPLETA
  }
  
  export interface SkillMembro {
   nome: string;
   icone?: string; // Opcional: Para adicionar ícones depois, ex: 'simple-icons:figma'
  }
  
  export interface MembroEquipe {
   slug: string;
   nome: string;
   cargo: string;
   foto: string;
   resumo: string; // Renomeado de 'bio' para clareza
   redesSociais: RedeSocial[]; // Agora é um array
   skills: SkillMembro[]; // Agora é um array de objetos
  }
  
  // 2. Exportando a lista com o nome original 'membros', mas usando a nova estrutura
  export const membros: MembroEquipe[] = [
   {
    slug: 'gustavo-barbosa',
    nome: 'Gustavo Barbosa',
    cargo: 'CEO & Desenvolvedor Full-Stack', // Cargo um pouco mais específico
    foto: '/img/equipe/gustavob.jpg',
    // 3. Renomeado para 'resumo'
    resumo: 'Fundador da GL Technology, apaixonado por transformar ideias complexas em soluções digitais elegantes e eficientes, unindo visão de negócio com expertise técnica.',
    redesSociais: [
     // 4. URL completa e dentro do array
     { plataforma: 'linkedin', url: 'https://www.linkedin.com/in/gustavo-barbosa-0909241b7/' },
     { plataforma: 'github', url: 'https://github.com/XablauGtx' } // Adicionando GitHub
    ],
    skills: [
     // 5. Skills como objetos
     { nome: 'Node.js', icone: 'simple-icons:nodedotjs' },
     { nome: 'React', icone: 'simple-icons:react' },
     { nome: 'Gestão de Projetos', icone: 'mdi:account-group-outline' },
     { nome: 'Arquitetura de Software', icone: 'mdi:architecture' }, // Adicionando skill relevante
    ],
   },
   {
    slug: 'thais-barbosa',
    nome: 'Thais Mara Parnieski Barbosa',
    cargo: 'Designer UI/UX',
    foto: '/img/equipe/thayb.jpg',
    resumo: 'Especialista em criar experiências de usuário que não são apenas bonitas, mas também intuitivas, acessíveis e eficazes para os objetivos do negócio.', // Bio um pouco mais completa
    redesSociais: [
     { plataforma: 'linkedin', url: 'https://www.linkedin.com/in/thais-mara-do-carmo-parnieski-barbosa-b49305181' }
    ],
    skills: [
     { nome: 'Figma', icone: 'simple-icons:figma' },
     { nome: 'User Research', icone: 'mdi:account-search-outline' },
     { nome: 'Branding', icone: 'mdi:palette-outline' },
     { nome: 'Design Systems', icone: 'mdi:view-dashboard-outline' }, // Skill relevante
    ],
   },
   {
    slug: 'leonardo-barbosa',
    nome: 'Leonardo Barbosa',
    cargo: 'Designer Gráfico & Motion', // Cargo mais específico
    foto: '/img/equipe/leonardo.jpg',
    resumo: 'Com um olhar apurado para a estética e as tendências visuais, é responsável pela criação de identidades visuais marcantes e animações que dão vida às marcas.',
    // 6. Array vazio quando não há links
    redesSociais: [],
    skills: [
     { nome: 'Photoshop', icone: 'simple-icons:adobephotoshop' },
     { nome: 'Illustrator', icone: 'simple-icons:adobeillustrator' },
     { nome: 'After Effects', icone: 'simple-icons:adobeaftereffects' }, // Adicionando Motion
     { nome: 'Identidade Visual' }, // Sem ícone específico?
    ],
   },
   {
    slug: 'pedro-sabino',
    nome: 'Pedro Sabino',
    cargo: 'Desenvolvedor Front-End & Designer', // Ordem talvez mais alinhada
    foto: '/img/equipe/pedro.jpg',
    resumo: 'Conecta o design com o código, garantindo que a visão criativa seja implementada com pixel-perfect no navegador, focando em performance e acessibilidade.',
    redesSociais: [],
    skills: [
     { nome: 'HTML5', icone: 'simple-icons:html5' },
     { nome: 'CSS3 / Tailwind', icone: 'simple-icons:tailwindcss' }, // Mais específico
     { nome: 'JavaScript', icone: 'simple-icons:javascript' },
     { nome: 'Web Performance', icone: 'mdi:speedometer' }, // Skill relevante
    ],
   },
  ];