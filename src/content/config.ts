// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projetosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    categoria: z.enum(['Web', 'Mobile', 'Design']),
    imagem: z.string(),
    link: z.string().url().optional(),
    tags: z.array(z.string()),
    data: z.date(), // Tornamos a data obrigatória para uma ordenação confiável
    
    // --- NOVOS CAMPOS PARA A PÁGINA DE DETALHE ---
    cliente: z.string().optional(), // Nome do cliente
    resumo: z.string(), // Um resumo curto para o card
    servicos: z.array(z.string()).optional(), // Lista de serviços prestados
  }),
});

export const collections = {
  'projetos': projetosCollection,
};