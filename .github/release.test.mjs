import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { chmodSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import test from 'node:test';
import yaml from 'js-yaml';

const workflow = yaml.load(readFileSync(new URL('./workflows/release.yml', import.meta.url), 'utf8'));
const publish = workflow.jobs.publish.steps.at(-1).run;
const notify = workflow.jobs.notify.steps.at(-1).run;
const fixture = () => {
  const directory = mkdtempSync(resolve(process.env.RUNNER_TEMP || tmpdir(), 'release-test-'));
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
      RELEASE_DIR: resolve(directory, 'release'),
      RUNNER_TEMP: directory,
      GITHUB_OUTPUT: resolve(directory, 'github-output'),
      GITHUB_REPOSITORY: 'patternfly/patternfly-react',
      PR_NUMBER: '123'
    }
  });

for (const scenario of ['changed', 'no-pr', 'no-change', 'version-failure', 'pack-failure']) {
  test(`prepare: ${scenario}`, () => {
    const directory = fixture();
    for (const name of ['public', 'private', 'unchanged']) {
      mkdirSync(resolve(directory, name));
      writeFileSync(resolve(directory, name, 'package.json'), JSON.stringify({ name, private: name === 'private' }));
    }
    writeFileSync(resolve(directory, 'LICENSE'), 'test license');
    executable(
      directory,
      'git',
      `const args = process.argv.slice(2).join(' ');
      console.log(args.includes('--format=%s') ? ${JSON.stringify(scenario === 'no-pr' ? 'fix: test' : 'fix: test (#123)')} : args.includes('rev-parse') ? 'abc123' : ' - public@1.0.1');`
    );
    executable(
      directory,
      'yarn',
      `const fs = require('node:fs');
      const args = process.argv.slice(2);
      if (args.includes('list')) {
        console.log(JSON.stringify(['public', 'private', 'unchanged'].map(name => ({
          name, version: fs.existsSync('versioned') && name !== 'unchanged' ? '1.0.1' : '1.0.0', location: process.cwd() + '/' + name
        }))));
      } else if (args.includes('version')) {
        require('node:assert/strict').deepEqual(args, ['run', 'lerna', 'version', 'prerelease', '--preid=prerelease', '--yes']);
        if (${JSON.stringify(scenario)} === 'version-failure') process.exit(17);
        if (${JSON.stringify(scenario)} !== 'no-change') fs.writeFileSync('versioned', 'yes');
      } else if (args.includes('pack')) {
        if (${JSON.stringify(scenario)} === 'pack-failure') process.exit(18);
        const manifest = JSON.parse(fs.readFileSync(args[1] + '/package.json'));
        if (manifest.gitHead !== 'abc123' || !fs.existsSync(args[1] + '/LICENSE')) process.exit(99);
        fs.writeFileSync(args.at(-1), 'archive');
      } else process.exit(99);`
    );
    const result = run(process.execPath, [resolve(import.meta.dirname, 'prepare-release.mjs')], directory);
    assert.equal(result.status, scenario.endsWith('failure') ? 1 : 0, result.stderr);
    assert.equal(JSON.parse(readFileSync(resolve(directory, 'public/package.json'))).gitHead, undefined);
    assert.equal(existsSync(resolve(directory, 'public/LICENSE')), false);
    if (scenario.endsWith('failure')) {
      assert.equal(existsSync(resolve(directory, 'github-output')), false);
      return;
    }
    const changed = scenario !== 'no-change';
    const shouldNotify = changed && scenario !== 'no-pr';
    assert.deepEqual(
      readdirSync(resolve(directory, 'release')).filter((file) => file.endsWith('.tgz')),
      changed ? ['package-000.tgz'] : []
    );
    assert.equal(
      readFileSync(resolve(directory, 'github-output'), 'utf8'),
      `has-packages=${changed}\npr-number=${shouldNotify ? '123' : ''}\n`
    );
    assert.equal(existsSync(resolve(directory, 'release/notification.json')), shouldNotify);
    if (shouldNotify) {
      assert.deepEqual(JSON.parse(readFileSync(resolve(directory, 'release/notification.json'))), {
        body: 'Your changes have been released in:  - public@1.0.1\nThanks for your contribution! :tada:'
      });
    }
  });
}

test('Yarn pack resolves workspace dependencies without installing the project', () => {
  const directory = fixture();
  writeFileSync(
    resolve(directory, 'package.json'),
    JSON.stringify({ private: true, packageManager: 'yarn@4.7.0', workspaces: ['public', 'dep'] })
  );
  writeFileSync(resolve(directory, 'yarn.lock'), '');
  for (const name of ['public', 'dep']) {
    mkdirSync(resolve(directory, name));
    writeFileSync(
      resolve(directory, name, 'package.json'),
      JSON.stringify({ name, version: '2.3.4', dependencies: name === 'public' ? { dep: 'workspace:^' } : {} })
    );
  }
  const archive = resolve(directory, 'package.tgz');
  const result = run('yarn', ['workspace', 'public', 'pack', '--out', archive], directory);
  assert.equal(result.status, 0, result.stdout + result.stderr);
  const manifest = JSON.parse(execFileSync('tar', ['-xOf', archive, 'package/package.json'], { encoding: 'utf8' }));
  assert.equal(manifest.dependencies.dep, '^2.3.4');
});

for (const scenario of ['success', 'partial-failure', 'missing-archives']) {
  test(`publishing workflow step: ${scenario}`, () => {
    const directory = fixture();
    mkdirSync(resolve(directory, 'release'));
    if (scenario !== 'missing-archives') {
      for (let i = 0; i < 12; i++) {
        writeFileSync(resolve(directory, `release/package-${String(i).padStart(3, '0')}.tgz`), 'archive');
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
        resolve(directory, `release/package-${String(index).padStart(3, '0')}.tgz`),
        '--tag',
        'prerelease',
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

for (const failure of [false, true]) {
  test(`notification workflow step: ${failure ? 'API failure' : 'success'}`, () => {
    const directory = fixture();
    executable(
      directory,
      'gh',
      `require('node:assert/strict').deepEqual(process.argv.slice(2), ['api', '--method', 'POST', 'repos/patternfly/patternfly-react/issues/123/comments', '--input', process.cwd() + '/release/notification.json']); process.exit(${failure ? 1 : 0});`
    );
    assert.equal(run('bash', ['-e', '-c', notify], directory).status, failure ? 1 : 0);
  });
}

test('release automation tests run in PR CI, not production release jobs', () => {
  const ci = yaml.load(readFileSync(new URL('./workflows/main.yml', import.meta.url), 'utf8'));
  const job = ci.jobs['release-automation-tests'];
  assert.equal(job.if, "github.event_name == 'pull_request'");
  assert.deepEqual(job.permissions, { contents: 'read' });
  assert.equal(job.steps[1].with['skip-build'], true);
  assert(job.steps.at(-1).run.startsWith('node --test '));
  assert(job.steps.at(-1).run.split(/\s+/).includes('.github/release.test.mjs'));
  for (const job of Object.values(workflow.jobs)) {
    for (const step of job.steps || []) {
      assert(!step.run?.includes('node --test'));
    }
  }
});

test('only archive publication has OIDC; notifications require successful publication', () => {
  assert.deepEqual(workflow.permissions, { contents: 'read' });
  assert.deepEqual(workflow.jobs.prepare.permissions, { contents: 'read' });
  assert.deepEqual(workflow.jobs.publish.permissions, { contents: 'read', 'id-token': 'write' });
  assert.deepEqual(workflow.jobs.notify.permissions, { contents: 'read' });
  assert.equal(workflow.jobs.publish.if, "needs.prepare.outputs.has-packages == 'true'");
  assert.deepEqual(workflow.jobs.notify.needs, ['prepare', 'publish']);
  assert.equal(workflow.jobs.notify.if, "needs.prepare.outputs.pr-number != ''");
  assert(!JSON.stringify(workflow.jobs.publish).match(/secrets\.|setup-project|yarn|checkout/));
  assert.equal(workflow.jobs.publish.steps.at(-1)['working-directory'], '${{ runner.temp }}');
});
