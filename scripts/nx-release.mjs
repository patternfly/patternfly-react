/* eslint-disable no-console */
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import {
  getCurrentCommit,
  getLatestReleaseCommit,
  getReleasePackages,
  hasCompletePreparedRelease,
  prepareReleasePackages,
  readPreparedRelease,
  workspaceRoot
} from './prepare-release-packages.mjs';

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
      'ci-prepare': { type: 'boolean' },
      'publish-only': { type: 'boolean' },
      projects: { type: 'string' },
      'git-remote': { type: 'string' },
      help: { type: 'boolean' }
    }
  });
  const selectedModes = [values.prepare, values.publish, values['ci-prepare'], values['publish-only']];
  if (
    selectedModes.filter(Boolean).length > 1 ||
    (values['dry-run'] && (values.prepare || values.publish || values['publish-only']))
  ) {
    throw new Error('Choose only one release mode');
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
  } else if (values['ci-prepare']) {
    mode = 'ci-prepare';
  } else if (values['publish-only']) {
    mode = 'publish-only';
  }
  return {
    mode,
    projects,
    dryRun: values['dry-run'] ?? false,
    gitRemote: values['git-remote'],
    help: values.help ?? false
  };
}

export async function runRelease(
  options,
  {
    packages,
    client,
    preparePackages,
    readPrepared = readPreparedRelease,
    hasCompletePrepared = hasCompletePreparedRelease,
    currentCommit = getCurrentCommit,
    latestReleaseCommit = getLatestReleaseCommit,
    log = console.log
  }
) {
  if (!['dry-run', 'prepare', 'publish', 'ci-prepare', 'publish-only'].includes(options.mode)) {
    throw new Error(`Unknown release mode ${options.mode}`);
  }

  if (options.mode === 'publish-only') {
    const prepared = readPrepared();
    if (!prepared.projects?.length) {
      throw new Error('Prepared release bundle contains no packages. Restore the original workflow artifact.');
    }
    if (prepared.sourceCommit !== currentCommit()) {
      throw new Error(`Prepared release targets ${prepared.sourceCommit}, but HEAD is ${currentCommit()}`);
    }
    for (const name of prepared.projects) {
      if (!packages.has(name) || !prepared.versionData[name]?.newVersion) {
        throw new Error(`Invalid prepared release project ${name}`);
      }
    }
    if (!hasCompletePrepared(prepared)) {
      throw new Error(
        'Prepared release bundle is incomplete. Restore the complete original workflow artifact; publish-only never rebuilds packages.'
      );
    }
    if (prepared.sourceCommit !== latestReleaseCommit(options.gitRemote)) {
      throw new Error(
        'Refusing stale recovery: prepared packages must belong to the latest release commit on felt-v1.'
      );
    }
    await publishProjects(client, prepared.projects, prepared.versionData);
    log(`Published prepared release for ${prepared.projects.length} packages.`);
    return { projects: prepared.projects, versionData: prepared.versionData };
  }

  const ciPrepare = options.mode === 'ci-prepare';
  const dryRun = options.mode === 'dry-run' || Boolean(options.dryRun);
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
    stageChanges: ciPrepare,
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
    dryRun,
    gitCommit: ciPrepare,
    gitTag: ciPrepare,
    gitPush: ciPrepare
  });
  if (dryRun) {
    log(
      'Dry run complete. No release files/artifacts were written; nothing was committed, tagged, pushed, or published.'
    );
    return { projects, versionData };
  }

  const sourceCommit = currentCommit();
  await preparePackages(projects, { versionData, sourceCommit });
  if (options.mode === 'publish') {
    await publishProjects(client, projects, versionData, result.releaseGraph);
  } else if (ciPrepare) {
    log('Release commit, tags, and push completed; prepared package artifacts are ready for publication.');
  } else {
    log('Prepared local packages only. No Git operations or npm publications were performed.');
  }
  return { projects, versionData, sourceCommit };
}

async function publishProjects(client, projects, versionData, releaseGraph) {
  const published = await client.releasePublish({
    projects,
    versionData,
    releaseGraph,
    dryRun: false
  });
  const failed = projects.filter((name) => published[name]?.code !== 0);
  if (failed.length) {
    throw new Error(`Publication failed or returned no result for: ${failed.join(', ')}`);
  }
}

async function main() {
  const options = parseReleaseOptions(process.argv.slice(2));
  if (options.help) {
    console.log(`Usage: yarn release:nx [--dry-run | --prepare | --publish | --ci-prepare [--dry-run] | --publish-only] [--projects=name,name] [--git-remote=name]

Default: --dry-run previews versions and changelogs without writing or publishing.
Nx discovers changes/dependents, then applies explicit prerelease bumps to that complete set.
Each selected package increments its existing prerelease counter using Nx's version calculation.
--projects passes Nx project filters; Nx includes dependents according to nx.json.
--git-remote selects the Git remote Nx uses for changelog links (defaults to origin).
--prepare writes local versions/changelogs and packs artifacts; build first.
--publish performs the prepare steps and REAL npm publication (OIDC in Actions).
--ci-prepare writes versions/changelogs, creates the release commit/tags, pushes, and packs artifacts.
Combine --ci-prepare with --dry-run to preview those Git operations without writing or publishing.
--publish-only requires the complete original bundle for the latest release on felt-v1; it never rebuilds packages.
GitHub release creation is disabled.`);
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
