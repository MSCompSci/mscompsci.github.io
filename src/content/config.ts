// Import utilities from `astro:content`
// Possible tags include:
// UX Design
// UI Design
// Web Design
// App Design
// UX Research
// User Testing
// Prototyping
// Wireframing
// Figma
// Miro
// Maze
// 3D
// Programming
// Team Project
// Individual Project
// Academic Project
// Workplace Project
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const projCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projCollection,
};
