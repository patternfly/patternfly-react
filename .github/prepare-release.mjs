import { execFileSync } from 'node:child_process';
import {
  appendFileSync,
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  unlinkSync,
  writeFileSync
} from 'node:fs';
import { resolve } from 'node:path';

const run = (command, args, options = {}) => execFileSync(command, args, { encoding: 'utf8', ...options });
const directory = resolve(process.env.RELEASE_DIR);
mkdirSync(directory, { recursive: true });
if (readdirSync(directory).length) {
  throw new Error('Release artifact directory must be empty');
}

const listPackages = () =>
  JSON.parse(run('yarn', ['run', 'lerna', 'list', '--all', '--toposort', '--json', '--loglevel', 'silent']));
const before = listPackages();
const subject = run('git', ['log', '-1', '--format=%s']);
const pr = subject.match(/#(\d+)/)?.[1];

// Lerna still owns package selection, independent versions, changelogs, commits,
// and tags. As with lerna publish, these Git updates precede npm publication.
run('yarn', ['run', 'lerna', 'version', 'prerelease', '--preid=prerelease', '--yes'], { stdio: 'inherit' });
const previousVersions = new Map(before.map((pkg) => [pkg.name, pkg.version]));
const gitHead = run('git', ['rev-parse', 'HEAD']).trim();
let count = 0;
for (const pkg of listPackages()) {
  const manifestPath = resolve(pkg.location, 'package.json');
  const original = readFileSync(manifestPath, 'utf8');
  const manifest = JSON.parse(original);
  if (manifest.private || previousVersions.get(pkg.name) === pkg.version) {
    continue;
  }
  // Zero padding keeps the publishing glob in Lerna's dependency-first order.
  const file = `package-${String(count).padStart(3, '0')}.tgz`;
  // Yarn pack resolves workspace: ranges to the newly versioned dependencies.
  // Any packing lifecycle scripts run here, never in the publishing job.
  // Match Lerna's injected Git metadata and root license without committing them.
  const license = resolve(pkg.location, 'LICENSE');
  const temporaryLicense = !existsSync(license);
  try {
    if (temporaryLicense) {
      copyFileSync('LICENSE', license);
    }
    writeFileSync(manifestPath, `${JSON.stringify({ ...manifest, gitHead }, null, 2)}\n`);
    run('yarn', ['workspace', pkg.name, 'pack', '--out', resolve(directory, file)], { stdio: 'inherit' });
  } finally {
    writeFileSync(manifestPath, original);
    if (temporaryLicense && existsSync(license)) {
      unlinkSync(license);
    }
  }
  count++;
}

if (count && pr) {
  const comment = run('git', ['log', '-1', '--format=%b']);
  writeFileSync(
    resolve(directory, 'notification.json'),
    JSON.stringify({ body: `Your changes have been released in: ${comment}Thanks for your contribution! :tada:` })
  );
}
if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `has-packages=${count > 0}\npr-number=${count && pr ? pr : ''}\n`);
}
process.stdout.write(count ? `Prepared ${count} packages\n` : 'No changed packages to publish\n');
