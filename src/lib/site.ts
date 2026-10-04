import { z } from 'zod';
import rawSite from '../../site.config.json';

const text = z.string().trim().min(1);
const colour = z.string().regex(/^#[0-9a-fA-F]{6}$/, 'Use a six-digit hex colour such as #17312f');
const imagePath = z.string().regex(/^\/images\/(?!.*\.\.\/)[a-zA-Z0-9/_-]+\.(?:avif|gif|jpe?g|png|svg|webp)$/i, 'Use a file under public/images/');
const email = z.email();
const httpsUrl = z.url().refine((value) => new URL(value).protocol === 'https:', 'Use an https:// URL');

export const siteSchema = z.object({
  starterContent: z.boolean(),
  siteUrl: z.union([z.literal(''), httpsUrl]),
  name: text,
  descriptor: text,
  seo: z.object({
    title: text,
    description: text,
    image: imagePath.optional(),
  }).strict(),
  theme: z.object({
    ink: colour,
    paper: colour,
    accent: colour,
    highlight: colour,
  }).strict(),
  hero: z.object({
    eyebrow: text,
    lead: text,
    body: text,
    image: z.object({ src: imagePath, alt: text }).strict().nullable(),
  }).strict(),
  offerings: z.object({
    eyebrow: text,
    title: text,
    intro: text,
    items: z.array(z.object({ title: text, body: text }).strict()).min(1),
  }).strict(),
  about: z.object({
    eyebrow: text,
    title: text,
    body: text,
  }).strict(),
  links: z.object({
    eyebrow: text,
    title: text,
    items: z.array(z.object({ label: text, url: httpsUrl }).strict()),
  }).strict(),
  contact: z.object({
    eyebrow: text,
    title: text,
    body: text,
    email,
  }).strict(),
  privacy: z.object({
    reviewed: z.boolean(),
    controller: text,
    contactEmail: email,
    paragraphs: z.array(text).min(1),
  }).strict(),
}).strict();

export type SiteConfig = z.infer<typeof siteSchema>;
export const site = siteSchema.parse(rawSite);
