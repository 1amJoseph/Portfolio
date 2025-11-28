// src/content/config.ts
import { defineCollection, z } from "astro:content";

const proyects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    tech: z.array(z.string()),
    github: z.string().url(),
  }),
});

export const collections = { proyects };
