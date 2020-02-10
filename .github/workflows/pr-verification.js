const core = require('@actions/core');
const github = require('@actions/github');
const load = require('@commitlint/load');
const lint = require('@commitlint/lint');

const CONFIG = {
  extends: ['@commitlint/config-conventional']
};

const title = github.context.payload.pull_request.title;
const body = github.context.payload.pull_request.body;
// This is a fun one.
// https://help.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword
// https://regex101.com/r/HDx3ZS/1
const closeRegex = /(close[sd]?|fix(es|ed)?|resolve[sd]?)\s+(#|https?:\/\/(www.)?github\.com\/patternfly\/[^\/]+\/issues\/)\d+/gmi;
let returnCode = 0;

core.info(title);
core.info(body);

// This should be consistent with lerna. I haven't thoroughly tested it, though.
// https://commitlint.js.org/#/reference-api?id=lint
load(CONFIG)
  .then(opts => lint(
    title,
    opts.rules,
    opts.parserPreset ? { parserOpts: opts.parserPreset.parserOpts } : {}
  ))
  .then(report => {
    if (!report.valid) {
      core.setFailed(
        `Pull request title "${title}" must be a valid conventional commit message.`,
        report.errors.map(error => error.message).join('\n')
      );
      returnCode -= 1;
    }
    if (!closeRegex.test(body)) {
      core.setFailed('PR description must close an existing issue');
      returnCode -= 1;
    }

    process.exit(returnCode);
  });
