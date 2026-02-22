import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string(),
    excerpt: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { blog };