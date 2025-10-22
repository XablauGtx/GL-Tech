import { defineCollection, z } from 'astro:content';

const projetosCollection = defineCollection({
 type: 'content', 
 schema: z.object({
  titulo: z.string(),
  resumo: z.string(), 
  categoria: z.string(), 
  data: z.date(), 
  tags: z.array(z.string()),
  imagem: z.string(), 

  link: z.string().optional(), 
  linkText: z.string().optional(), 
  appleStoreLink: z.string().optional(), 
  googlePlayLink: z.string().optional(),
 }),
});

export const collections = {
 'projetos': projetosCollection,
};