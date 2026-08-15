import { defineCollection, z } from 'astro:content';

const design = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    year: z.string().optional(),
    duration: z.string().optional(),
    role: z.string().optional(),
    discipline: z.string().optional(),
    featured: z.boolean().optional(),
    listed: z.boolean().optional(),
    cardColour: z.string().optional(),
    cardTextColour: z.enum(['dark', 'light']).optional(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
  }),
});

export const collections = { design };
