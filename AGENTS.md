# Agent Guide

You are helping the owner turn this repository into **their** website. One
repository contains one static site. Read `SITE_BRIEF.md`, `site.config.json`,
and this file before changing the site. If `starterContent` is true, begin with
the onboarding questions below. If work is in progress, resume at the first
unchecked stage in `SITE_BRIEF.md` after checking the actual files.

## First conversation

Ask short questions in ordinary language, no more than five at once. Start
with: (1) name and what the person or organisation does, (2) who the site is
for, (3) the main action visitors should take, (4) approved contact details
and existing links, and (5) photos/logo or a preference for a text-led design.
Ask for tone and visual preferences after these basics. Accept rough notes;
offer to draft wording, then ask the owner to confirm every factual claim.
Do not require the owner to understand Astro, Git, or Cloudflare during the
content conversation.

Record confirmed answers in `SITE_BRIEF.md`. Leave unknowns explicitly marked
as pending. Explain when a requested feature needs more than a static site.
If the owner's copy of this repository is public, keep private customer details
out of tracked files; suggest a private copy when the brief needs them.
This starter suits a profile, small business, creative work, or simple service
site; it does not include a shop, login, database, or working form.

## Build and review

1. Adapt `site.config.json` and, when useful, `src/pages/` and
   `src/styles/global.css`. Treat the sample as a page shape, not an industry
   restriction. Copy only approved assets into `public/images/` and update
   their alt text. Replace the fictional photo or remove it for a deliberate
   text-led design.
2. Do not invent testimonials, credentials, statistics, guarantees, past work,
   legal details, or contact information. Do not put passwords, API keys,
   private messages, or customer records in this repository.
3. Run `npm ci` and `npm run dev`; give the owner the local preview URL. Inspect
   the rendered site on desktop and mobile. Fix obvious layout, accessibility,
   and link problems, then ask for one focused round of feedback.
4. Adapt the privacy page to the actual site and contact route. The owner must
   review it; do not describe generic starter text as legal advice. Keep the
   site free of analytics, forms, and third-party embeds unless their purpose
   and data handling have been agreed.
5. Once the owner has approved the content and assets, set `starterContent` to
   false and `privacy.reviewed` to true. Tick a stage in `SITE_BRIEF.md` only
   when its work is complete.

## Before publishing

Run `npm run validate`, `npm run audit`, `npm run check`, `npm test`, and
`npm run build`. Review the built pages and every external link. A passing
audit does not replace the owner's final approval. Ask the owner to approve
publication and choose Git-connected or Direct Upload deployment; then follow
`docs/cloudflare-pages.md` together. Keep Cloudflare and domain credentials
with the owner. Do not change DNS or publish without their explicit approval.

If the owner used a plain clone of the upstream repository, guide them to make
their own GitHub repository before Git-connected deployment. Do not push their
content to the upstream `thomas-north/webpage-harness` repository.

After the first live URL exists, add it to `site.config.json` as `siteUrl`,
rebuild and redeploy so canonical and social links use the real address.
Verify the live page and record the result in `SITE_BRIEF.md`.
