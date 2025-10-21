---
titulo: "Aplicativo Ministerio Chama Coral"
resumo: "Plataforma completa (App iOS/Android e painel web) para resolver os desafios de logística e comunicação de um grupo musical com mais de 100 membros."
categoria: "Desenvolvimento"
data: 2024-05-20
tags: ["Flutter", "Dart", "Firebase", "React"]
imagem: "/img/projetos/chama-coral.webp"
link: "https://github.com/XablauGtx/Chama-APP-PF"
linkText: "Ver Estudo de Caso"
googlePlayLink: "https://play.google.com/store/apps/details?id=br.com.glinfo.chamacoral&hl=pt_BR"
appleStoreLink: "https://apps.apple.com/br/app/ministério-chama-coral/id6749340847"
---
### O Problema
O Ministério Chama Coral, um grupo musical com mais de 100 membros, enfrentava desafios logísticos e de comunicação significativos. A gestão de eventos, confirmação de presença, compartilhamento de materiais (partituras, áudios) e comunicados oficiais estavam espalhados por diversos grupos de WhatsApp, gerando ruído e desorganização.

### A Solução
Para resolver isso, desenvolvi uma plataforma completa e centralizada. A solução consiste em duas partes principais:

1.  **Aplicativo Móvel (iOS/Android):** Construído em **Flutter**, o app permite que os membros acessem a agenda de eventos, confirmem presença (com controle de logística como "precisa de van?"), acessem a biblioteca de materiais e recebam notificações push.
2.  **Painel de Administração (Web):** Desenvolvido em **React**, o painel permite que a liderança crie e gerencie eventos, envie comunicados, visualize um dashboard de confirmações e faça a gestão de todos os membros.

### Desafios Técnicos
O maior desafio foi garantir a sincronização de dados em tempo real para mais de 100 usuários. Para isso, utilizei o **Firebase** como backend:

* **Firestore:** Serviu como banco de dados NoSQL em tempo real para todos os eventos e usuários.
* **Firebase Authentication:** Para um sistema de login seguro e individual.
* **Firebase Cloud Messaging (FCM):** Para o envio de notificações push, garantindo que comunicados urgentes chegassem a todos instantaneamente.
* **Flutter (Dart):** A escolha foi crucial para entregar um app nativo de alta performance para iOS e Android com um único código-base.

### Resultados e Impacto
A plataforma transformou a gestão do grupo. A comunicação foi 100% centralizada, reduzindo drasticamente o ruído e a perda de informação. A logística de eventos tornou-se transparente, com a liderança tendo visibilidade total das confirmações em tempo real, otimizando a contratação de transporte e a organização geral.