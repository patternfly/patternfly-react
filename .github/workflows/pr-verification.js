const load = require('@commitlint/load');
const lint = require('@commitlint/lint');

const CONFIG = {
  extends: ['@commitlint/config-conventional']
};


const commitMsg = process.argv[2];
const prBody = process.argv[3];
// This is a fun one.
// https://help.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword
// https://regex101.com/r/HDx3ZS/1
const closeRegex = /(close[sd]?|fix(es|ed)?|resolve[sd]?)\s+(#|https?:\/\/(www.)?github\.com\/patternfly\/[^\/]+\/issues\/)\d+/
let returnCode = 0;

load(CONFIG)
  .then(opts => lint(
    commitMsg,
    opts.rules,
    opts.parserPreset ? {parserOpts: opts.parserPreset.parserOpts} : {}
  ))
  .then(report => {
    if (!report.valid) {
      console.error('Problem with commit message:', commitMsg);
      console.error(report.errors.map(error => error.message).join('\n'))
      returnCode -= 1;
    }
  });

if (!closeRegex.test(prBody)) {
  console.error('PR description must close an existing issue');
  returnCode -= 1;
}

process.exit(returnCode);