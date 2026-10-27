import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { workspaceRoot } from './prepare-release-packages.mjs';

const require = createRequire(import.meta.url);
const { determineSemverChange } = require('nx/src/command-line/release/utils/semver');
const { filterHiddenChanges } = require('nx/src/command-line/release/changelog/commit-utils');

// Exercise Nx's resolved policy and native commit handling, not a copy of the versioning rules.
const output = execFileSync(
  process.execPath,
  [join(dirname(require.resolve('nx/package.json')), 'dist/bin/nx.js'), 'release', '--print-config=debug'],
  { cwd: workspaceRoot, encoding: 'utf8', env: { ...process.env, NX_DAEMON: 'false' } }
);
const internalConfig = output.split('START FINAL INTERNAL CONFIG')[1].split('END FINAL INTERNAL CONFIG')[0];
const policy = JSON.parse(
  internalConfig.slice(internalConfig.indexOf('{'), internalConfig.lastIndexOf('}') + 1)
).conventionalCommits;
const project = '@rh-felt/react-core';

function nativeBumpFor(type) {
  const commits = new Map([[project, [{ commit: { type, isBreaking: false }, isProjectScopedCommit: true }]]]);
  return determineSemverChange(commits, policy).get(project);
}

test('docs changes trigger native release discovery but stay out of changelogs', () => {
  assert.equal(nativeBumpFor('docs'), 1);
  assert.deepEqual(filterHiddenChanges([{ type: 'docs' }], policy), []);
});

test('ordinary chores neither trigger native release discovery nor appear in mixed release notes', () => {
  assert.equal(nativeBumpFor('chore'), null);
  assert.deepEqual(filterHiddenChanges([{ type: 'docs' }, { type: 'chore' }, { type: 'fix' }], policy), [
    { type: 'fix' }
  ]);
});
