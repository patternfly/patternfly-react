/* eslint-disable no-console */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const workspaceRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');

export function getReleasePackages(root = workspaceRoot) {
  const config = JSON.parse(readFileSync(join(root, 'nx.json'), 'utf8'));
  const workspaces = execFileSync('yarn', ['workspaces', 'list', '--json'], {
    cwd: root,
    encoding: 'utf8'
  })
    .trim()
    .split('\n')
    .map((line) => JSON.parse(line));

  return new Map(
    config.release.projects.map((name) => {
      const workspace = workspaces.find((project) => project.name === name);
      if (!workspace || !name.startsWith('@rh-felt/')) {
        throw new Error(`Expected a Felt workspace for release project ${name}`);
      }
      const manifest = JSON.parse(readFileSync(join(root, workspace.location, 'package.json'), 'utf8'));
      if (
        manifest.private ||
        manifest.publishConfig?.access !== 'public' ||
        manifest.publishConfig?.tag !== 'prerelease'
      ) {
        throw new Error(`Release project ${name} must be a public prerelease package`);
      }
      if (manifest.repository?.url !== 'https://github.com/patternfly/patternfly-react.git') {
        throw new Error(`Release project ${name} must identify the upstream repository for provenance`);
      }
      return [name, { location: workspace.location, manifest }];
    })
  );
}

export function prepareReleasePackages(projects, { root = workspaceRoot } = {}) {
  const available = getReleasePackages(root);
  const selected = [...new Set(projects ?? available.keys())];
  if (selected.length === 0) {
    return;
  }

  // Validate all selected packages before replacing any prepared artifacts.
  const packages = selected.map((name) => {
    const workspace = available.get(name);
    if (!workspace) {
      throw new Error(`Unknown release project ${name}`);
    }
    if (workspace.manifest.main && !existsSync(join(root, workspace.location, 'dist'))) {
      throw new Error(`Missing build output for ${name}. Run yarn build && yarn build:umd first.`);
    }
    return workspace.manifest;
  });

  const output = join(root, '.release');
  rmSync(output, { recursive: true, force: true });
  mkdirSync(join(output, 'archives'), { recursive: true });

  for (const manifest of packages) {
    const archive = join(output, 'archives', `${manifest.name.replace('/', '-')}.tgz`);
    const destination = join(output, 'packages', manifest.name);
    mkdirSync(destination, { recursive: true });

    // Pack after versioning/changelogs so Yarn resolves final workspace versions.
    // This packs locally; it never publishes or authenticates to npm.
    execFileSync('yarn', ['workspace', manifest.name, 'pack', '--out', archive], {
      cwd: root,
      stdio: ['ignore', 'ignore', 'pipe']
    });
    execFileSync('tar', ['-xzf', archive, '-C', destination, '--strip-components=1'], {
      cwd: root,
      stdio: 'pipe'
    });
    console.log(`Prepared ${manifest.name}@${manifest.version} in ${destination}`);
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  prepareReleasePackages();
}
