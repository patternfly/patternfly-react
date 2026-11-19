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
  throw new Error('Promotion artifact directory must be empty');
}

const listPackages = () =>
  JSON.parse(run('yarn', ['run', 'lerna', 'list', '--all', '--toposort', '--json', '--loglevel', 'silent']));
const before = listPackages();
// Preserve the stable versioning arguments from the original lerna publish.
// Lerna owns independent versions, changelogs, release commits, and tags.
run('yarn', ['run', 'lerna', 'version', '--conventional-commits', '--conventional-graduate', '--no-private', '--yes'], {
  stdio: 'inherit'
});
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
  // Keep the dependency-first order when the publisher expands its archive glob.
  const file = `package-${String(count).padStart(3, '0')}.tgz`;
  const license = resolve(pkg.location, 'LICENSE');
  const temporaryLicense = !existsSync(license);
  try {
    if (temporaryLicense) {
      copyFileSync('LICENSE', license);
    }
    // Match Lerna's Git metadata and license; Yarn resolves workspace: ranges.
    // All packing lifecycle scripts run here, without OIDC permission.
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

if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `has-packages=${count > 0}\n`);
}
process.stdout.write(count ? `Prepared ${count} packages for promotion\n` : 'No changed packages to promote\n');
