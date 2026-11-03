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
      'ci-promote': { type: 'boolean' },
      'ci-graduate': { type: 'boolean' },
      version: { type: 'string' },
      projects: { type: 'string' },
      'git-remote': { type: 'string' },
      help: { type: 'boolean' }
    }
  });
  const selectedModes = [
    values.prepare,
    values.publish,
    values['ci-prepare'],
    values['publish-only'],
    values['ci-promote'],
    values['ci-graduate']
  ];
  if (
    selectedModes.filter(Boolean).length > 1 ||
    (values['dry-run'] && (values.prepare || values.publish || values['publish-only']))
  ) {
    throw new Error('Choose only one release mode');
  }
  if (values.version !== undefined && !values['ci-graduate']) {
    throw new Error('--version is only valid together with --ci-graduate');
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
  } else if (values['ci-promote']) {
    mode = 'ci-promote';
  } else if (values['ci-graduate']) {
    mode = 'ci-graduate';
  }
  return {
    mode,
    version: values.version,
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
  if (
    !['dry-run', 'prepare', 'publish', 'ci-prepare', 'publish-only', 'ci-promote', 'ci-graduate'].includes(options.mode)
  ) {
    throw new Error(`Unknown release mode ${options.mode}`);
  }

  if (options.mode === 'ci-promote') {
    // Promotion unconditionally starts the next prerelease cycle for every public
    // package (the Lerna --force-publish --no-private behavior), so there is no
    // conventional-commit discovery pass. Nothing is packed or published here;
    // the normal prerelease flow publishes the cycle's versions as changes land.
    const projects = options.projects ?? [...packages.keys()];
    if (projects.length === 0 || projects.some((name) => !packages.has(name))) {
      throw new Error('--ci-promote requires the configured public Felt release projects');
    }
    const dryRun = Boolean(options.dryRun);
    const result = await client.releaseVersion({
      ...gitOptions,
      preid: 'prerelease',
      projects,
      // Lerna's preminor promote: 0.0.1-prerelease.7 -> 0.1.0-prerelease.0.
      specifier: 'preminor',
      stageChanges: !dryRun,
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
      gitCommit: !dryRun,
      gitTag: !dryRun,
      gitPush: !dryRun
    });
    log(
      dryRun
        ? 'Dry run complete. No cycle versions or changelogs were written; nothing was committed, tagged, or pushed.'
        : 'Next prerelease cycle started: versions, changelogs, release commit, and tags were pushed.'
    );
    return { projects, versionData };
  }

  if (options.mode === 'ci-graduate') {
    // Stable graduation: apply one explicitly chosen stable version to every public
    // package (the promoter picks it, e.g. 0.1.0 - prerelease suffixes are never
    // auto-stripped), commit and push, then pack a bundle for publication under
    // npm's latest dist-tag. Publication itself happens in the workflow's
    // least-privilege publish job, exactly like prereleases.
    if (!/^\d+\.\d+\.\d+$/.test(options.version ?? '')) {
      throw new Error('--ci-graduate requires --version=X.Y.Z, a stable version without a prerelease suffix');
    }
    const projects = options.projects ?? [...packages.keys()];
    if (projects.length === 0 || projects.some((name) => !packages.has(name))) {
      throw new Error('--ci-graduate requires the configured public Felt release projects');
    }
    const dryRun = Boolean(options.dryRun);
    const result = await client.releaseVersion({
      ...gitOptions,
      projects,
      specifier: options.version,
      stageChanges: !dryRun,
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
      gitCommit: !dryRun,
      gitTag: !dryRun,
      gitPush: !dryRun
    });
    if (dryRun) {
      log(
        'Dry run complete. No stable versions or changelogs were written; nothing was committed, tagged, pushed, or packed.'
      );
      return { projects, versionData };
    }
    const sourceCommit = currentCommit();
    await preparePackages(projects, { versionData, sourceCommit, distTag: 'latest' });
    log(
      'Stable versions committed and pushed; prepared package artifacts are ready for publication under the latest dist-tag.'
    );
    return { projects, versionData, sourceCommit };
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
    if (prepared.distTag !== undefined && !['prerelease', 'latest'].includes(prepared.distTag)) {
      throw new Error(`Prepared release has an unsupported npm dist-tag ${prepared.distTag}`);
    }
    await publishProjects(client, prepared.projects, prepared.versionData, undefined, prepared.distTag ?? 'prerelease');
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

async function publishProjects(client, projects, versionData, releaseGraph, tag = 'prerelease') {
  const published = await client.releasePublish({
    projects,
    versionData,
    releaseGraph,
    tag,
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
    console.log(`Usage: yarn release:nx [--dry-run | --prepare | --publish | --ci-prepare [--dry-run] | --publish-only | --ci-promote [--dry-run] | --ci-graduate --version=X.Y.Z [--dry-run]] [--projects=name,name] [--git-remote=name]

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
--ci-promote starts the next prerelease cycle for every public package (preminor with the prerelease preid, matching Lerna), committing and pushing the release commit and tags. It never packs or publishes.
--ci-graduate applies the explicitly chosen stable --version to every public package, commits and pushes, and packs artifacts for publication under npm's latest dist-tag; run the publish job afterwards. The promoter chooses the version - prerelease suffixes are never auto-stripped.
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
