import { defineCollection, z } from 'astro:content';

// Alumni collection schema
const alumniCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    photo: z.string().optional(),
    faculty: z.string(),
    year: z.number(),
    long_bio: z.string(),
    short_bio: z.string(),
    email: z.string().email().optional(),
    location: z.string().optional(),
    company: z.string().optional(),
    position: z.string().optional(),
    skills: z.array(z.string()).optional(),
    projects: z.array(z.object({
      name: z.string(),
      description: z.string(),
      url: z.string().url().optional()
    })).optional(),
    work_experience: z.array(z.object({
      company: z.string(),
      position: z.string(),
      duration: z.string(),
      description: z.string()
    })).optional(),
    education: z.array(z.object({
      degree: z.string(),
      institution: z.string(),
      year: z.number(),
      gpa: z.string().optional()
    })).optional(),
    achievements: z.array(z.string()).optional(),
    interests: z.array(z.string()).optional(),
    social: z.object({
      portfolio: z.string().url().optional(),
      linkedin: z.string().url().optional(),
      twitter: z.string().url().optional(),
      github: z.string().url().optional(),
    }).optional()
  })
});

// Events collection schema
const eventsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.string(),
    description: z.string(),
    content: z.string(),
    location: z.string(),
    registration_url: z.string().url().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false)
  })
});

// Blog collection schema
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    publishDate: z.string(),
    image: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).optional()
  })
});

export const collections = {
  'alumni': alumniCollection,
  'events': eventsCollection,
  'blog': blogCollection,
};
