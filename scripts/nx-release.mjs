/* eslint-disable no-console */
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { getReleasePackages, prepareReleasePackages, workspaceRoot } from './prepare-release-packages.mjs';

const gitOptions = {
  gitCommit: false,
  gitTag: false,
  gitPush: false,
  stageChanges: false
};

export function parseReleaseOptions(args) {
  const { values } = parseArgs({
    args,
    options: {
      'dry-run': { type: 'boolean' },
      prepare: { type: 'boolean' },
      publish: { type: 'boolean' },
      projects: { type: 'string' },
      'git-remote': { type: 'string' },
      help: { type: 'boolean' }
    }
  });
  if ([values['dry-run'], values.prepare, values.publish].filter(Boolean).length > 1) {
    throw new Error('Choose only one of --dry-run, --prepare, or --publish');
  }
  const projects =
    values.projects === undefined ? undefined : [...new Set(values.projects.split(',').map((p) => p.trim()))];
  if (projects?.some((project) => !project)) {
    throw new Error('--projects must contain comma-separated Nx project filters');
  }
  let mode = 'dry-run';
  if (values.prepare) {
    mode = 'prepare';
  } else if (values.publish) {
    mode = 'publish';
  }
  return { mode, projects, gitRemote: values['git-remote'], help: values.help ?? false };
}

export async function runRelease(options, { packages, client, preparePackages, log = console.log }) {
  if (!['dry-run', 'prepare', 'publish'].includes(options.mode)) {
    throw new Error(`Unknown release mode ${options.mode}`);
  }
  const dryRun = options.mode === 'dry-run';
  const versionOptions = {
    ...gitOptions,
    preid: 'prerelease',
    deleteVersionPlans: false
  };
  // Let Nx discover changes and dependent packages without writing its proposed bumps.
  const detected = await client.releaseVersion({
    ...versionOptions,
    projects: options.projects,
    dryRun: true
  });
  const projects = Object.keys(detected.projectsVersionData).filter(
    (name) => detected.projectsVersionData[name].newVersion !== null
  );
  if (projects.length === 0) {
    log('No changed Felt packages to release.');
    return { projects, versionData: {} };
  }

  for (const name of projects) {
    if (!packages.has(name)) {
      throw new Error(`Nx selected an unconfigured release project ${name}`);
    }
  }
  // Make every selected package an explicit prerelease bump so Nx increments its existing counter.
  const result = await client.releaseVersion({
    ...versionOptions,
    projects,
    specifier: 'prerelease',
    dryRun
  });
  const versionData = result.projectsVersionData;
  for (const name of projects) {
    const { currentVersion, newVersion } = versionData[name];
    log(`${name}: ${currentVersion} -> ${newVersion}`);
  }
  await client.releaseChangelog({
    ...gitOptions,
    gitRemote: options.gitRemote,
    projects,
    versionData,
    releaseGraph: result.releaseGraph,
    createRelease: false,
    deleteVersionPlans: false,
    dryRun
  });
  if (dryRun) {
    log(
      'Dry run complete. No release files/artifacts were written; nothing was committed, tagged, pushed, or published.'
    );
    return { projects, versionData };
  }

  await preparePackages(projects);
  if (options.mode === 'publish') {
    const published = await client.releasePublish({
      projects,
      versionData,
      releaseGraph: result.releaseGraph,
      dryRun: false
    });
    const failed = projects.filter((name) => published[name]?.code !== 0);
    if (failed.length) {
      throw new Error(`Publication failed or returned no result for: ${failed.join(', ')}`);
    }
  } else {
    log('Prepared local packages only. No Git operations or npm publications were performed.');
  }
  return { projects, versionData };
}

async function main() {
  const options = parseReleaseOptions(process.argv.slice(2));
  if (options.help) {
    console.log(`Usage: yarn release:nx [--dry-run | --prepare | --publish] [--projects=name,name] [--git-remote=name]

Default: --dry-run previews versions and changelogs without writing or publishing.
Nx discovers changes/dependents, then applies explicit prerelease bumps to that complete set.
Each selected package increments its existing prerelease counter using Nx's version calculation.
--projects passes Nx project filters; Nx includes dependents according to nx.json.
--git-remote selects the Git remote Nx uses for changelog links (defaults to origin).
--prepare writes local versions/changelogs and packs artifacts; build first.
--publish performs the prepare steps and REAL npm publication (OIDC in Actions).
Git commits, tags, pushes, and GitHub releases are disabled in this prototype.
Partial-publish recovery and CI cutover are pending.`);
    return;
  }
  process.chdir(workspaceRoot);
  const packages = getReleasePackages();
  const { ReleaseClient } = await import('nx/release');
  const client = new ReleaseClient({});
  await runRelease(options, { packages, client, preparePackages: prepareReleasePackages });
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
