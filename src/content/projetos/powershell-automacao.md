---
titulo: "Automação com Scripts PowerShell"
resumo: "Coleção de scripts para automação de tarefas de administração de sistemas Windows, incluindo gestão de AD, inventário remoto e políticas de segurança via GPO."
categoria: "Automação"
data: 2024-03-10
tags: ["PowerShell", "Active Directory", "GPO", "SysAdmin"]
imagem: "/img/projetos/powershell.webp"
link: "https://github.com/XablauGtx/powershell-automations"
linkText: "Ver Scripts"
---
### O Problema
A administração de um ambiente Windows Server com centenas de usuários e máquinas era um processo lento e manual. Tarefas como criar um novo usuário (onboarding), desativar um usuário (offboarding), aplicar políticas de segurança (GPOs) ou fazer um inventário remoto de software eram demoradas e suscetíveis a inconsistências.

### A Solução
Desenvolvi uma biblioteca robusta de scripts **PowerShell** para automatizar todo o ciclo de vida da administração de sistemas Windows. Esses não são apenas comandos simples, mas scripts avançados, parametrizados e reutilizáveis que interagem diretamente com os serviços centrais da rede.

As automações incluem:
* **Gestão de Active Directory:** Scripts para criar, desabilitar e modificar usuários em massa a partir de um arquivo CSV, padronizando a criação de pastas pessoais e permissões.
* **Auditoria de GPO:** Scripts que geram relatórios sobre quais GPOs (Group Policy Objects) estão aplicadas em quais OUs (Organizational Units), facilitando a auditoria de segurança.
* **Inventário Remoto:** Scripts que utilizam WinRM para varrer a rede e coletar informações de hardware e software das estações de trabalho.

### Desafios Técnicos
O desafio foi criar scripts que fossem seguros e confiáveis para rodar em um ambiente de produção. Isso exigiu um profundo conhecimento dos módulos do **Active Directory** e **Group Policy** no PowerShell.

Muitos scripts foram projetados para execução remota (PowerShell Remoting), permitindo a administração de dezenas de servidores a partir de uma única console, de forma paralela e eficiente.

### Resultados e Impacto
O impacto mais significativo foi a **padronização e a velocidade**. O processo de onboarding de um novo colaborador, que antes levava 20 minutos de cliques manuais, foi reduzido para menos de 1 minuto. As auditorias de segurança tornaram-se triviais, e a aplicação de políticas de segurança passou a ser 100% consistente em todo o parque de máquinas.