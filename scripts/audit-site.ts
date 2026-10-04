import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { launchIssues } from '../src/lib/audit.js';
import { site } from '../src/lib/site.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const issues = launchIssues(site, (path) => existsSync(resolve(root, 'public', path.slice(1))));

if (issues.length > 0) {
  console.error('Launch audit needs attention:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exitCode = 1;
} else {
  console.log('Launch audit passed. Review the rendered site and get the owner\'s approval before publishing.');
}
