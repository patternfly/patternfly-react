import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { hasCompletePreparedRelease, readPreparedRelease } from './prepare-release-packages.mjs';

function bundleFixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'felt-prepared-release-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const name = '@rh-felt/react-core';
  const version = '0.0.1-prerelease.4';
  const release = {
    projects: [name],
    versionData: { [name]: { currentVersion: '0.0.1-prerelease.3', newVersion: version } },
    sourceCommit: 'recorded-release-commit'
  };
  const manifestPath = join(root, '.release', 'packages', name, 'package.json');
  const archivePath = join(root, '.release', 'archives', '@rh-felt-react-core.tgz');
  mkdirSync(join(root, '.release', 'packages', name), { recursive: true });
  mkdirSync(join(root, '.release', 'archives'), { recursive: true });
  writeFileSync(manifestPath, JSON.stringify({ name, version }));
  writeFileSync(archivePath, 'original prepared archive');
  writeFileSync(join(root, '.release', 'release.json'), JSON.stringify(release));
  return { root, release, manifestPath, archivePath, name, version };
}

test('reads and validates the original prepared bundle without modifying its files', (t) => {
  const fixture = bundleFixture(t);
  const originalManifest = readFileSync(fixture.manifestPath);
  const originalArchive = readFileSync(fixture.archivePath);
  assert.deepEqual(readPreparedRelease(fixture.root), fixture.release);
  assert.equal(hasCompletePreparedRelease(fixture.release, { root: fixture.root }), true);
  assert.deepEqual(readFileSync(fixture.manifestPath), originalManifest);
  assert.deepEqual(readFileSync(fixture.archivePath), originalArchive);
});

test('missing release metadata reports how to restore the original artifact', (t) => {
  const fixture = bundleFixture(t);
  rmSync(join(fixture.root, '.release', 'release.json'));
  assert.throws(() => readPreparedRelease(fixture.root), /Missing prepared release bundle.*original/);
});

test('missing archive or package manifest makes the prepared bundle incomplete', (t) => {
  for (const field of ['archivePath', 'manifestPath']) {
    const fixture = bundleFixture(t);
    rmSync(fixture[field]);
    assert.equal(hasCompletePreparedRelease(fixture.release, { root: fixture.root }), false);
  }
});

test('wrong package identity or version makes the prepared bundle incomplete', (t) => {
  for (const manifest of [
    { name: '@rh-felt/react-table', version: '0.0.1-prerelease.4' },
    { name: '@rh-felt/react-core', version: '0.0.1-prerelease.3' }
  ]) {
    const fixture = bundleFixture(t);
    writeFileSync(fixture.manifestPath, JSON.stringify(manifest));
    assert.equal(hasCompletePreparedRelease(fixture.release, { root: fixture.root }), false);
  }
});
