import { describe, expect, it } from 'vitest';
import { launchIssues } from '../src/lib/audit.js';
import { site, siteSchema } from '../src/lib/site.js';

describe('launch audit', () => {
  it('blocks the fictional starter from publication', () => {
    const issues = launchIssues(site, () => true);
    expect(issues).toContain('Replace the sample content, review the whole site, then set starterContent to false.');
    expect(issues).toContain('Replace or remove the fictional starter photo.');
  });

  it('passes a reviewed site and catches a missing image', () => {
    const candidate = siteSchema.parse({
      ...site,
      starterContent: false,
      name: 'Alice Morgan',
      hero: {
        eyebrow: 'ALICE MORGAN',
        lead: 'Clear and useful design.',
        body: 'Alice designs helpful websites for small businesses.',
        image: { src: '/images/alice.jpg', alt: 'Alice at work' },
      },
      seo: {
        title: 'Alice Morgan | Independent designer',
        description: 'Web design for small businesses.',
        image: '/images/alice.jpg',
      },
      offerings: { ...site.offerings, intro: 'Design services for small businesses.' },
      about: { ...site.about, body: 'Alice works with local founders to explain their services clearly.' },
      contact: { ...site.contact, email: 'hello@alice.co.uk' },
      privacy: {
        reviewed: true,
        controller: 'Alice Morgan',
        contactEmail: 'hello@alice.co.uk',
        paragraphs: ['Email enquiries are handled by Alice Morgan and deleted after the agreed retention period.'],
      },
    });
    expect(launchIssues(candidate, () => true)).toEqual([]);
    expect(launchIssues(candidate, () => false)).toContain('Missing image: public/images/alice.jpg');
  });
});
