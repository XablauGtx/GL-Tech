// src/data/techStack.ts

export interface Skill {
     nome: string;
     icone: string;
    }
    
    export interface SkillCategory {
     categoria: string;
     skills: Skill[];
    }
    
    // Aqui adicionamos todas as suas habilidades, já categorizadas
    export const TECH_STACK: SkillCategory[] = [
     {
      categoria: "Desenvolvimento & UI/UX",
      skills: [
       { nome: 'JavaScript', icone: 'simple-icons:javascript' },
       { nome: 'TypeScript', icone: 'simple-icons:typescript' },
       { nome: 'Vue.js', icone: 'simple-icons:vuedotjs' },
       { nome: 'React', icone: 'simple-icons:react' },
       { nome: 'Astro', icone: 'simple-icons:astro' },
       { nome: 'Node.js', icone: 'simple-icons:nodedotjs' },
       { nome: 'HTML5', icone: 'simple-icons:html5' },
       { nome: 'CSS3', icone: 'simple-icons:css3' },
       { nome: 'Figma', icone: 'simple-icons:figma' },
      ]
     },
     {
      categoria: "Automação & DevOps",
      skills: [
       { nome: 'n8n', icone: 'simple-icons:n8n' },
       { nome: 'Docker', icone: 'simple-icons:docker' },
       { nome: 'PowerShell', icone: 'simple-icons:powershell' },
       { nome: 'PostgreSQL', icone: 'simple-icons:postgresql' },
       { nome: 'Redis', icone: 'simple-icons:redis' },
       { nome: 'Grafana', icone: 'simple-icons:grafana' },
      ]
     },
     {
      categoria: "Infraestrutura & Segurança",
      skills: [
       { nome: 'FortiGate', icone: 'simple-icons:fortinet' }, 
       { nome: 'Bitdefender', icone: 'simple-icons:bitdefender' },
       { nome: 'VMware', icone: 'simple-icons:vmware' },
       // --- CORRIGIDO AQUI ---
       { nome: 'Windows Server', icone: 'simple-icons:windows' }, // Trocado de 'windowsserver' para 'windows'
      ]
     }
    ];