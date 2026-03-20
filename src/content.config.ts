import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
const blog = defineCollection({
    loader: glob({ base: './content/blog', pattern: '**/*.{md,mdoc}' }),
    schema: z.object({
        title: z.string(),
    }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { blog };