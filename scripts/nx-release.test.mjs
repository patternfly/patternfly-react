import assert from 'node:assert/strict';
import { test } from 'node:test';
import { parseReleaseOptions, runRelease } from './nx-release.mjs';

const name = (suffix) => `@rh-felt/react-${suffix}`;

function harness({ changed = true } = {}) {
  const packages = new Map(['styles', 'core', 'docs', 'icons'].map((suffix) => [name(suffix), {}]));
  const detected = {
    projectsVersionData: {
      [name('styles')]: {
        currentVersion: '0.0.1-prerelease.3',
        newVersion: changed ? '0.0.1-prerelease.4' : null,
        dependentProjects: []
      },
      [name('core')]: {
        currentVersion: '0.0.1-prerelease.3',
        newVersion: changed ? '0.0.2-prerelease.0' : null,
        dependentProjects: []
      },
      [name('docs')]: {
        currentVersion: '0.0.1-prerelease.2',
        newVersion: null,
        dependentProjects: []
      },
      [name('icons')]: {
        currentVersion: '0.0.1-prerelease.2',
        newVersion: null,
        dependentProjects: []
      }
    },
    releaseGraph: { phase: 'discovery' },
    workspaceVersion: undefined
  };
  // Nx's explicit prerelease result is distinct from its implicit dependent prepatch proposal.
  const result = {
    projectsVersionData: {
      [name('styles')]: {
        currentVersion: '0.0.1-prerelease.3',
        newVersion: '0.0.1-prerelease.4',
        dependentProjects: []
      },
      [name('core')]: {
        currentVersion: '0.0.1-prerelease.3',
        newVersion: '0.0.1-prerelease.4',
        dependentProjects: []
      }
    },
    releaseGraph: { phase: 'prerelease' },
    workspaceVersion: undefined
  };
  const calls = [];
  const client = {
    async releaseVersion(options) {
      calls.push({ phase: 'version', options });
      return options.specifier === 'prerelease' ? result : detected;
    },
    async releaseChangelog(options) {
      calls.push({ phase: 'changelog', options });
    },
    async releasePublish(options) {
      calls.push({ phase: 'publish', options });
      return Object.fromEntries(options.projects.map((project) => [project, { code: 0 }]));
    }
  };
  const dependencies = {
    packages,
    client,
    readPrepared: () => ({
      projects: [name('styles'), name('core')],
      versionData: result.projectsVersionData,
      sourceCommit: 'release-commit'
    }),
    hasCompletePrepared: () => true,
    currentCommit: () => 'release-commit',
    latestReleaseCommit: () => 'release-commit',
    async preparePackages(projects, options) {
      calls.push({ phase: 'prepare', projects, ...options });
    },
    log() {}
  };
  return { client, calls, detected, result, dependencies };
}

test('CLI defaults to a non-writing dry run and validates explicit modes', () => {
  assert.equal(parseReleaseOptions([]).mode, 'dry-run');
  assert.equal(parseReleaseOptions(['--prepare']).mode, 'prepare');
  assert.equal(parseReleaseOptions(['--publish']).mode, 'publish');
  assert.equal(parseReleaseOptions(['--ci-prepare']).mode, 'ci-prepare');
  assert.equal(parseReleaseOptions(['--publish-only']).mode, 'publish-only');
  assert.deepEqual(parseReleaseOptions(['--ci-prepare', '--dry-run']), {
    mode: 'ci-prepare',
    projects: undefined,
    dryRun: true,
    gitRemote: undefined,
    help: false
  });
  assert.deepEqual(parseReleaseOptions([`--projects=${name('styles')},${name('styles')}`]).projects, [name('styles')]);
  assert.equal(parseReleaseOptions(['--git-remote=upstream']).gitRemote, 'upstream');
  assert.throws(() => parseReleaseOptions(['--prepare', '--publish']), /Choose only one/);
  assert.throws(() => parseReleaseOptions(['--dry-run', '--publish']), /Choose only one/);
  assert.throws(() => parseReleaseOptions(['--ci-prepare', '--publish-only']), /Choose only one/);
  assert.throws(() => parseReleaseOptions(['--dry-run', '--prepare']), /Choose only one/);
  assert.throws(() => parseReleaseOptions(['--projects=']), /comma-separated/);
  assert.throws(() => parseReleaseOptions(['--publsh']));
});

test('no changes stop before changelogs, packing, or publishing', async () => {
  const h = harness({ changed: false });
  const result = await runRelease({ mode: 'publish' }, h.dependencies);
  assert.deepEqual(result.projects, []);
  assert.deepEqual(
    h.calls.map((call) => call.phase),
    ['version']
  );
  assert.equal(h.calls[0].options.dryRun, true);
});

test('dry run uses Nx discovery followed by explicit counter-only prereleases for every selected package', async () => {
  const h = harness();
  const projects = [name('styles')];
  const result = await runRelease({ mode: 'dry-run', projects, gitRemote: 'upstream' }, h.dependencies);
  assert.deepEqual(result.projects, ['styles', 'core'].map(name));
  assert.equal(result.versionData, h.result.projectsVersionData);
  assert.deepEqual(
    h.calls.map((call) => call.phase),
    ['version', 'version', 'changelog']
  );
  assert.deepEqual(h.calls[0].options.projects, projects);
  assert.equal(h.calls[0].options.specifier, undefined);
  assert.equal(h.calls[0].options.preid, 'prerelease');
  assert.deepEqual(h.calls[1].options.projects, result.projects);
  assert.equal(h.calls[1].options.specifier, 'prerelease');
  assert.equal(h.calls[1].options.preid, 'prerelease');
  assert.equal(h.calls[1].options.releaseGraph, undefined);
  assert.deepEqual(h.calls[2].options.projects, result.projects);
  assert.equal(h.calls[2].options.gitRemote, 'upstream');
  assert.equal(h.calls[2].options.versionData, h.result.projectsVersionData);
  assert.equal(h.calls[2].options.releaseGraph, h.result.releaseGraph);
  assert.equal(result.versionData[name('styles')].newVersion, '0.0.1-prerelease.4');
  assert.equal(result.versionData[name('core')].newVersion, '0.0.1-prerelease.4');
  assert.ok(h.calls.every((call) => call.options.dryRun));
});

test('Nx receives automatic selection or native project patterns without wrapper expansion', async () => {
  for (const projects of [undefined, ['@rh-felt/react-*', '!@rh-felt/react-docs']]) {
    const h = harness();
    const result = await runRelease({ mode: 'dry-run', projects }, h.dependencies);
    assert.deepEqual(h.calls[0].options.projects, projects);
    assert.deepEqual(h.calls[1].options.projects, result.projects);
  }
});

test('the explicit pass preserves independent package counters with different baselines', async () => {
  const h = harness();
  h.detected.projectsVersionData[name('icons')].newVersion = '0.0.1-prerelease.3';
  h.result.projectsVersionData[name('icons')] = { ...h.detected.projectsVersionData[name('icons')] };
  const result = await runRelease({ mode: 'dry-run', projects: ['styles', 'icons'].map(name) }, h.dependencies);
  assert.deepEqual(result.projects, ['styles', 'core', 'icons'].map(name));
  assert.deepEqual(h.calls[1].options.projects, result.projects);
  assert.equal(h.calls[1].options.specifier, 'prerelease');
  assert.equal(result.versionData[name('icons')].newVersion, '0.0.1-prerelease.3');
  assert.equal(result.versionData[name('core')].newVersion, '0.0.1-prerelease.4');
});

test('prepare writes versions and changelogs before packing only changed packages', async () => {
  const h = harness();
  const result = await runRelease({ mode: 'prepare' }, h.dependencies);
  assert.deepEqual(
    h.calls.map((call) => call.phase),
    ['version', 'version', 'changelog', 'prepare']
  );
  assert.deepEqual(h.calls[3].projects, result.projects);
  assert.equal(h.calls[0].options.dryRun, true);
  assert.equal(h.calls[1].options.dryRun, false);
  assert.equal(h.calls[2].options.dryRun, false);
  for (const { options } of h.calls.slice(0, 3)) {
    for (const option of ['gitCommit', 'gitTag', 'gitPush', 'stageChanges', 'deleteVersionPlans']) {
      assert.equal(options[option], false);
    }
  }
  assert.equal(h.calls[2].options.createRelease, false);
});

test('CI preparation uses Nx to stage, commit, tag, and push before producing recovery artifacts', async () => {
  const h = harness();
  const result = await runRelease({ mode: 'ci-prepare' }, h.dependencies);
  assert.deepEqual(
    h.calls.map((call) => call.phase),
    ['version', 'version', 'changelog', 'prepare']
  );
  const version = h.calls[1].options;
  assert.equal(version.dryRun, false);
  assert.equal(version.stageChanges, true);
  const changelog = h.calls[2].options;
  assert.equal(changelog.gitCommit, true);
  assert.equal(changelog.gitTag, true);
  assert.equal(changelog.gitPush, true);
  assert.equal(h.calls[3].sourceCommit, 'release-commit');
  assert.equal(h.calls[3].versionData, result.versionData);
  assert.deepEqual(h.calls[3].projects, result.projects);
  assert.equal(h.calls.at(-1).phase, 'prepare');
  assert.ok(h.calls.every((call) => call.phase !== 'publish'));
});

test('CI dry run previews commit, tag, and push without preparing artifacts or publishing', async () => {
  const h = harness();
  const result = await runRelease({ mode: 'ci-prepare', dryRun: true }, h.dependencies);
  assert.deepEqual(result.projects, ['styles', 'core'].map(name));
  assert.deepEqual(
    h.calls.map((call) => call.phase),
    ['version', 'version', 'changelog']
  );
  assert.equal(h.calls[1].options.stageChanges, true);
  const changelog = h.calls[2].options;
  assert.equal(changelog.dryRun, true);
  assert.equal(changelog.gitCommit, true);
  assert.equal(changelog.gitTag, true);
  assert.equal(changelog.gitPush, true);
  assert.ok(h.calls.every((call) => call.phase !== 'prepare' && call.phase !== 'publish'));
});

test('publish-only recovery does not recalculate versions or generate changelogs', async () => {
  const h = harness();
  const result = await runRelease({ mode: 'publish-only' }, h.dependencies);
  assert.deepEqual(result.projects, ['styles', 'core'].map(name));
  assert.deepEqual(
    h.calls.map((call) => call.phase),
    ['publish']
  );
  assert.equal(h.calls[0].options.versionData, h.result.projectsVersionData);
  assert.equal(h.calls[0].options.dryRun, false);
});

test('publish-only rejects incomplete artifacts without rebuilding or publishing anything', async () => {
  const h = harness();
  h.dependencies.hasCompletePrepared = () => false;
  await assert.rejects(
    runRelease({ mode: 'publish-only' }, h.dependencies),
    /bundle is incomplete.*publish-only never rebuilds/
  );
  assert.deepEqual(h.calls, []);
});

test('publish-only rejects a stale release before Nx can move a newer prerelease tag backward', async () => {
  const h = harness();
  h.dependencies.latestReleaseCommit = () => 'newer-release-commit';
  await assert.rejects(runRelease({ mode: 'publish-only' }, h.dependencies), /Refusing stale recovery/);
  assert.deepEqual(h.calls, []);
});

test('publish-only checks the latest release using the selected remote', async () => {
  const h = harness();
  h.dependencies.latestReleaseCommit = (remote) => {
    assert.equal(remote, 'upstream');
    return 'release-commit';
  };
  await runRelease({ mode: 'publish-only', gitRemote: 'upstream' }, h.dependencies);
  assert.deepEqual(
    h.calls.map((call) => call.phase),
    ['publish']
  );
});

test('publish-only fails closed if the authoritative release history cannot be read', async () => {
  const h = harness();
  h.dependencies.latestReleaseCommit = () => {
    throw new Error('Missing origin/felt-v1 history');
  };
  await assert.rejects(runRelease({ mode: 'publish-only' }, h.dependencies), /Missing origin\/felt-v1/);
  assert.deepEqual(h.calls, []);
});

test('publish-only rejects bundles for a different checkout, empty bundles, and unknown projects', async () => {
  for (const invalid of ['different-commit', 'empty', 'unknown-project']) {
    const h = harness();
    const prepared = h.dependencies.readPrepared();
    if (invalid === 'different-commit') {
      prepared.sourceCommit = 'other-commit';
    } else if (invalid === 'empty') {
      prepared.projects = [];
    } else {
      prepared.projects.push('private-helper');
    }
    h.dependencies.readPrepared = () => prepared;
    await assert.rejects(
      runRelease({ mode: 'publish-only' }, h.dependencies),
      /targets|contains no packages|Invalid prepared/
    );
    assert.deepEqual(h.calls, []);
  }
});

test('publish-only reports partial publication failure without versioning, changelog, or packaging calls', async () => {
  const h = harness();
  h.client.releasePublish = async (options) => {
    h.calls.push({ phase: 'publish', options });
    return { [name('core')]: { code: 0 }, [name('styles')]: { code: 1 } };
  };
  await assert.rejects(runRelease({ mode: 'publish-only' }, h.dependencies), /Publication failed.*react-styles/);
  assert.deepEqual(
    h.calls.map((call) => call.phase),
    ['publish']
  );
});

test('publish follows packaging and uses the explicit pass version data and release graph', async () => {
  const h = harness();
  const result = await runRelease({ mode: 'publish' }, h.dependencies);
  assert.deepEqual(
    h.calls.map((call) => call.phase),
    ['version', 'version', 'changelog', 'prepare', 'publish']
  );
  const publish = h.calls.at(-1);
  assert.deepEqual(publish.options.projects, result.projects);
  assert.equal(publish.options.versionData, h.result.projectsVersionData);
  assert.equal(publish.options.releaseGraph, h.result.releaseGraph);
  assert.equal(h.calls[0].options.dryRun, true);
  assert.equal(publish.options.dryRun, false);
});

test('publication failures and missing results are surfaced even when other packages succeed', async () => {
  for (const result of [{ code: 1 }, undefined]) {
    const h = harness();
    h.client.releasePublish = async (options) => ({
      ...Object.fromEntries(options.projects.map((p) => [p, { code: 0 }])),
      [name('styles')]: result
    });
    await assert.rejects(runRelease({ mode: 'publish' }, h.dependencies), /Publication failed.*react-styles/);
  }
});

test('Nx selection errors propagate without further release phases', async () => {
  const h = harness();
  const error = new Error('Nx project filter did not match');
  h.client.releaseVersion = async () => {
    throw error;
  };
  await assert.rejects(runRelease({ mode: 'publish', projects: ['unknown-project'] }, h.dependencies), error);
  assert.equal(h.calls.length, 0);
});

test('invalid modes fail before invoking Nx and out-of-scope results are not packaged or published', async () => {
  const h = harness();
  await assert.rejects(runRelease({ mode: 'invalid' }, h.dependencies), /Unknown release mode/);
  assert.equal(h.calls.length, 0);
  h.detected.projectsVersionData['private-helper'] = { currentVersion: '1.0.0', newVersion: '1.0.1' };
  await assert.rejects(runRelease({ mode: 'publish' }, h.dependencies), /unconfigured release project private-helper/);
  assert.deepEqual(
    h.calls.map((call) => call.phase),
    ['version']
  );
  assert.equal(h.calls[0].options.dryRun, true);
});

test('explicit versioning, changelog, and packaging failures prevent publication', async () => {
  for (const phase of ['version', 'changelog', 'prepare']) {
    const h = harness();
    const failure = new Error(`${phase} failed`);
    if (phase === 'version') {
      const releaseVersion = h.client.releaseVersion;
      h.client.releaseVersion = async (options) => {
        if (options.specifier === 'prerelease') {
          throw failure;
        }
        return releaseVersion(options);
      };
    } else if (phase === 'changelog') {
      h.client.releaseChangelog = async () => {
        throw failure;
      };
    } else {
      h.dependencies.preparePackages = async () => {
        throw failure;
      };
    }
    await assert.rejects(runRelease({ mode: 'publish' }, h.dependencies), failure);
    assert.ok(h.calls.every((call) => call.phase !== 'publish'));
  }
});
