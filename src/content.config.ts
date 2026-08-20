import { defineCollection, z } from 'astro:content';

const galleryImage = z.object({
  src: z.string(),
  alt: z.string().optional(),
});

const galleryRow = z.object({
  layout: z.enum(['full', 'two-even', 'two-wide-left', 'two-wide-right', 'three-even']),
  images: z.array(galleryImage).min(1).max(3),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    order: z.number().optional(),
    href: z.string().optional(),
    description: z.string().optional(),
    place: z.string().optional(),
    year: z.string().optional(),
    duration: z.string().optional(),
    role: z.string().optional(),
    discipline: z.string().optional(),
    featured: z.boolean().optional(),
    listed: z.boolean().optional(),
    cardColour: z.string().optional(),
    cardTextColour: z.string().optional(),
    cardHoverTextColour: z.string().optional(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    gallery: z.array(galleryRow).optional(),
  }),
});

export const collections = { projects };
