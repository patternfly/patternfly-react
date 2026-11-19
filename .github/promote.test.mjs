import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { chmodSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import test from 'node:test';
import yaml from 'js-yaml';

const workflow = yaml.load(readFileSync(new URL('./workflows/promote.yml', import.meta.url), 'utf8'));
const script = readFileSync(new URL('./promote.sh', import.meta.url), 'utf8');
const helper = resolve(import.meta.dirname, 'prepare-promote.mjs');
const publish = workflow.jobs.publish.steps.at(-1).run;
const fixture = () => {
  const directory = mkdtempSync(resolve(process.env.RUNNER_TEMP || tmpdir(), 'promote-test-'));
  mkdirSync(resolve(directory, 'bin'));
  return directory;
};
const executable = (directory, name, body) => {
  const file = resolve(directory, 'bin', name);
  writeFileSync(file, `#!/usr/bin/env node\n${body}`);
  chmodSync(file, 0o755);
};
const run = (command, args, directory) =>
  spawnSync(command, args, {
    cwd: directory,
    encoding: 'utf8',
    env: {
      ...process.env,
      PATH: `${resolve(directory, 'bin')}:${process.env.PATH}`,
      RELEASE_DIR: resolve(directory, 'promote'),
      RUNNER_TEMP: directory,
      GITHUB_OUTPUT: resolve(directory, 'github-output'),
      GITHUB_REPOSITORY: 'patternfly/patternfly-react'
    }
  });

for (const scenario of ['changed', 'no-change', 'version-failure', 'pack-failure']) {
  test(`stable preparation: ${scenario}`, () => {
    const directory = fixture();
    for (const name of ['public', 'private', 'unchanged']) {
      mkdirSync(resolve(directory, name));
      writeFileSync(resolve(directory, name, 'package.json'), JSON.stringify({ name, private: name === 'private' }));
    }
    writeFileSync(resolve(directory, 'LICENSE'), 'test license');
    executable(directory, 'git', "console.log('abc123');");
    executable(
      directory,
      'yarn',
      `const fs = require('node:fs');
      const assert = require('node:assert/strict');
      const args = process.argv.slice(2);
      if (args.includes('list')) {
        console.log(JSON.stringify(['public', 'private', 'unchanged'].map(name => ({
          name, version: fs.existsSync('versioned') && name !== 'unchanged' ? '1.1.0' : '1.1.0-prerelease.0', location: process.cwd() + '/' + name
        }))));
      } else if (args.includes('version')) {
        assert.deepEqual(args, ['run', 'lerna', 'version', '--conventional-commits', '--conventional-graduate', '--no-private', '--yes']);
        if (${JSON.stringify(scenario)} === 'version-failure') process.exit(17);
        if (${JSON.stringify(scenario)} !== 'no-change') fs.writeFileSync('versioned', 'yes');
      } else if (args.includes('pack')) {
        const manifest = JSON.parse(fs.readFileSync(args[1] + '/package.json'));
        assert.equal(manifest.gitHead, 'abc123');
        assert.equal(fs.readFileSync(args[1] + '/LICENSE', 'utf8'), 'test license');
        if (${JSON.stringify(scenario)} === 'pack-failure') process.exit(18);
        fs.writeFileSync(args.at(-1), 'archive');
      } else process.exit(99);`
    );
    // Enable stable preparation only in this fixture, never in the source script.
    const enabled = resolve(directory, 'promote.sh');
    writeFileSync(enabled, script.replace('# node .github/prepare-promote.mjs', `node "${helper}"`));
    const result = run('bash', [enabled, 'prepare'], directory);
    assert.equal(result.status, scenario.endsWith('failure') ? 1 : 0, result.stderr);
    assert.equal(JSON.parse(readFileSync(resolve(directory, 'public/package.json'))).gitHead, undefined);
    assert.equal(existsSync(resolve(directory, 'public/LICENSE')), false);
    if (scenario.endsWith('failure')) {
      assert.equal(existsSync(resolve(directory, 'github-output')), false);
      return;
    }
    assert.deepEqual(readdirSync(resolve(directory, 'promote')), scenario === 'changed' ? ['package-000.tgz'] : []);
    assert.equal(readFileSync(resolve(directory, 'github-output'), 'utf8'), `has-packages=${scenario === 'changed'}\n`);
  });
}

test('stable preparation stays disabled by default, including with the optional input', () => {
  const directory = fixture();
  writeFileSync(resolve(directory, 'bin/git'), '#!/bin/bash\nexit 0\n');
  chmodSync(resolve(directory, 'bin/git'), 0o755);
  executable(directory, 'yarn', "require('node:fs').writeFileSync('unexpected-yarn', 'yes'); process.exit(99);");
  writeFileSync(resolve(directory, 'bin/node'), '#!/bin/bash\ntouch unexpected-node\nexit 99\n');
  chmodSync(resolve(directory, 'bin/node'), 0o755);
  writeFileSync(resolve(directory, '.npmrc'), 'existing configuration\n');
  const result = run(
    'bash',
    ['-c', 'PATTERNFLY_VERSION=99.0.0 bash "$1" prepare', '--', resolve(import.meta.dirname, 'promote.sh')],
    directory
  );
  assert.equal(result.status, 0, result.stderr);
  for (const file of ['unexpected-yarn', 'unexpected-node', 'github-output', 'promote']) {
    assert.equal(existsSync(resolve(directory, file)), false);
  }
  assert.equal(readFileSync(resolve(directory, '.npmrc'), 'utf8'), 'existing configuration\n');
});

for (const failure of [false, true]) {
  test(`next prerelease: ${failure ? 'failure' : 'success'}`, () => {
    const directory = fixture();
    executable(directory, 'git', '');
    executable(
      directory,
      'yarn',
      `require('node:assert/strict').deepEqual(process.argv.slice(2), ['run', 'lerna', 'version', 'preminor', '--force-publish', '--conventional-commits', '--no-private', '--yes', '--preid', 'prerelease']); process.exit(${failure ? 42 : 0});`
    );
    const result = run('bash', [resolve(import.meta.dirname, 'promote.sh'), 'next-prerelease'], directory);
    assert.equal(result.status, failure ? 42 : 0, result.stderr);
  });
}

for (const scenario of ['success', 'partial-failure', 'missing-archives']) {
  test(`publishing workflow step: ${scenario}`, () => {
    const directory = fixture();
    mkdirSync(resolve(directory, 'promote'));
    if (scenario !== 'missing-archives') {
      for (let i = 0; i < 12; i++) {
        writeFileSync(resolve(directory, `promote/package-${String(i).padStart(3, '0')}.tgz`), 'archive');
      }
    }
    executable(
      directory,
      'npm',
      `const fs = require('node:fs');
      fs.appendFileSync('calls', JSON.stringify(process.argv.slice(2)) + '\\n');
      if (${scenario === 'partial-failure'} && process.argv[3].endsWith('package-001.tgz')) process.exit(42);`
    );
    const result = run('bash', ['-e', '-o', 'pipefail', '-c', publish], directory);
    assert.equal(result.status === 0, scenario === 'success', result.stderr);
    if (scenario === 'missing-archives') {
      assert.equal(existsSync(resolve(directory, 'calls')), false);
      return;
    }
    const calls = readFileSync(resolve(directory, 'calls'), 'utf8').trim().split('\n').map(JSON.parse);
    assert.equal(calls.length, scenario === 'success' ? 12 : 2);
    for (const [index, args] of calls.entries()) {
      assert.deepEqual(args, [
        'publish',
        resolve(directory, `promote/package-${String(index).padStart(3, '0')}.tgz`),
        '--tag',
        'latest',
        '--access',
        'public',
        '--registry',
        'https://registry.npmjs.org/',
        '--ignore-scripts',
        '--provenance'
      ]);
    }
  });
}

test('only isolated archive publication has OIDC permission', () => {
  assert.deepEqual(workflow.permissions, { contents: 'read' });
  assert.deepEqual(workflow.jobs.prepare.permissions, { contents: 'read' });
  assert.deepEqual(workflow.jobs.publish.permissions, { contents: 'read', 'id-token': 'write' });
  assert.deepEqual(workflow.jobs['next-prerelease'].permissions, { contents: 'read' });
  assert(!JSON.stringify(workflow.jobs.publish).match(/secrets\.|setup-project|yarn|checkout/));
  assert.equal(workflow.jobs.publish.steps.at(-1)['working-directory'], '${{ runner.temp }}');
  assert.match(workflow.jobs.publish.steps[1].run, /npm install --global npm@11\.21\.1 --ignore-scripts/);
  assert.equal(workflow.jobs.publish.needs, 'prepare');
  assert.equal(workflow.jobs.publish.if, "needs.prepare.outputs.has-packages == 'true'");
  assert.equal(workflow.jobs['next-prerelease'].steps[0].with.ref, '${{ github.ref_name }}');
});

test('automation suites run in PR CI, not production release or promotion jobs', () => {
  const ci = yaml.load(readFileSync(new URL('./workflows/main.yml', import.meta.url), 'utf8'));
  const release = yaml.load(readFileSync(new URL('./workflows/release.yml', import.meta.url), 'utf8'));
  const job = ci.jobs['release-automation-tests'];
  assert.equal(job.if, "github.event_name == 'pull_request'");
  assert.deepEqual(job.permissions, { contents: 'read' });
  assert.equal(job.steps[1].with['skip-build'], true);
  assert.equal(job.steps.at(-1).run, 'node --test .github/release.test.mjs .github/promote.test.mjs');
  for (const production of [release, workflow]) {
    for (const job of Object.values(production.jobs)) {
      for (const step of job.steps || []) {
        assert(!step.run?.includes('node --test'));
      }
    }
  }
});

test('next prerelease requires preparation success and publication success or deliberate skip', () => {
  assert.deepEqual(workflow.jobs['next-prerelease'].needs, ['prepare', 'publish']);
  const condition = workflow.jobs['next-prerelease'].if;
  assert.equal(
    condition.trim(),
    "!cancelled() && needs.prepare.result == 'success' && (needs.publish.result == 'success' || needs.publish.result == 'skipped')"
  );
  // Evaluate the workflow's actual guard against every dependency outcome.
  const shouldRun = new Function('needs', 'cancelled', `return (${condition});`);
  for (const prepare of ['success', 'failure', 'skipped', 'cancelled']) {
    for (const publish of ['success', 'failure', 'skipped', 'cancelled']) {
      for (const cancelled of [false, true]) {
        assert.equal(
          shouldRun({ prepare: { result: prepare }, publish: { result: publish } }, () => cancelled),
          !cancelled && prepare === 'success' && ['success', 'skipped'].includes(publish)
        );
      }
    }
  }
});
