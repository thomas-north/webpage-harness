# Publish With Cloudflare Pages

The project builds a static `dist/` folder. Use your own Cloudflare account.
Check the content, contact route, privacy page, and images with your agent
before publishing. `npm run audit`, `npm run check`, `npm test`, and
`npm run build` should pass locally.

## Recommended: connect your own GitHub repository

This route deploys new versions when you push changes to your production
branch. It is the easiest way to keep your site current.

1. If you used **Use this template** on GitHub, your clone already points to
   your own repository. Check with `git remote -v`. If you cloned the upstream
   project directly, create a new repository in your own account and ask your
   agent to set it as the push destination. Never push your site to the
   upstream `thomas-north/webpage-harness` repository.
2. Commit your finished site and push it to your repository's `main` branch.
   Cloudflare needs a pushed branch to select it as the production branch.
3. In Cloudflare, go to **Workers & Pages**, choose **Create application**,
   select **Pages**, and import your existing Git repository. Authorise the
   GitHub connection for your own website repository.
4. Use these build settings: production branch `main`, project root the
   repository root, build command `npm run build`, output directory `dist`.
   The `.node-version` file selects Node.js 22.16.0.
5. Select **Save and Deploy**. Visit the `*.pages.dev` address Cloudflare gives
   you. Check the main page, privacy page, images, and every contact link.
6. Set `siteUrl` in `site.config.json` to the final `https://` address, then
   commit and push again. This adds canonical and social image URLs to the
   generated pages. Later pushes will deploy updated versions automatically.

Cloudflare's [Git integration guide](https://developers.cloudflare.com/pages/get-started/git-integration/)
and [Astro guide](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
describe the current dashboard flow and `dist` build output.

## Alternative: upload the built folder

If you do not want to connect GitHub, choose **Direct Upload** while creating
the Pages project. Run `npm run build`, then drag the `dist/` folder into the
Cloudflare Pages upload area. Do the same after each future site change.
Cloudflare also accepts a zip of the built files for dashboard upload. Upload
the contents of `dist/`, not your source code, `node_modules/`, or private
notes. A Direct Upload project cannot later be switched to Git integration;
you would create a new Pages project for automatic Git deployments. See
[Cloudflare Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/).

## Add your own domain

The `*.pages.dev` address works without buying a domain. To use a domain you
own, open your Pages project and choose **Custom domains > Set up a domain**.
Follow Cloudflare's instructions for that exact domain.

For a root domain such as `example.com`, Cloudflare requires the domain to be
in the same account and its nameservers to point to Cloudflare. Review the
existing DNS records first, especially email-related records. For a subdomain
such as `www.example.com`, Cloudflare describes a CNAME route that may avoid
moving the root domain's nameservers. Add the domain through the Pages project
before changing DNS. See [Cloudflare custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/).

When the domain works, change `siteUrl` to that final `https://` address and
publish once more. Check both the new domain and the `*.pages.dev` URL.
