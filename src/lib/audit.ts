import type { SiteConfig } from './site.js';

const starterImage = '/images/starter-studio.jpg';
const exampleAddress = /\.(?:invalid|example)(?:$|\.)/i;

export function launchIssues(config: SiteConfig, assetExists: (path: string) => boolean): string[] {
  const issues: string[] = [];
  if (config.starterContent) issues.push('Replace the sample content, review the whole site, then set starterContent to false.');
  if (config.name === 'Northline Studio') issues.push('Replace the fictional Northline Studio identity.');
  if (
    config.seo.title.includes('Northline Studio') ||
    config.seo.description.includes('fictional design studio') ||
    config.hero.eyebrow === 'FICTIONAL STUDIO PREVIEW' ||
    config.hero.body.includes('Northline is a sample studio') ||
    config.offerings.intro.includes('sample services') ||
    config.about.body.includes('Northline Studio is a fictional example')
  ) {
    issues.push('Replace the remaining fictional starter copy and SEO text.');
  }
  if (exampleAddress.test(config.contact.email)) issues.push('Set a working contact email address.');
  if (exampleAddress.test(config.privacy.contactEmail)) issues.push('Set a working privacy contact email address.');
  if (!config.privacy.reviewed) issues.push('Review the privacy page against your real setup, then set privacy.reviewed to true.');
  if (config.privacy.paragraphs.some((paragraph) => paragraph.includes('draft privacy copy'))) {
    issues.push('Replace the sample privacy wording.');
  }
  if (config.hero.image?.src === starterImage || config.seo.image === starterImage) {
    issues.push('Replace or remove the fictional starter photo.');
  }
  if (config.links.items.some((link) => new URL(link.url).hostname === 'example.com')) {
    issues.push('Replace example.com links with real destinations.');
  }

  for (const path of [config.hero.image?.src, config.seo.image]) {
    if (path && !assetExists(path)) issues.push(`Missing image: public${path}`);
  }
  return [...new Set(issues)];
}
