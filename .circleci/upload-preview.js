const fs = require('fs');
const Octokit = require("@octokit/rest");
const octokit = new Octokit({ auth: process.env.GH_PR_TOKEN });
const surge = require('surge');
const publishFn = surge().publish();

const owner = process.env.CIRCLE_PROJECT_USERNAME; // patternfly
const repo = process.env.CIRCLE_PROJECT_REPONAME;
const prnum = process.env.CIRCLE_PR_NUMBER;
const prbranch = process.env.CIRCLE_BRANCH;

const uploadFolder = process.argv[2];
if (!uploadFolder) {
  console.log('Usage: upload-preview uploadFolder');
  process.exit(1);
}

let uploadURL = `${repo}-pr-${prnum || prbranch}`.replace(/[\/|\.]/g, '-');

if (uploadFolder === 'coverage') {
  fs.copyFileSync('coverage/report.html', 'coverage/index.html');
}
if (uploadFolder !== 'docs') {
  uploadURL += `-${uploadFolder}`;
}

uploadURL += '.surge.sh';

publishFn({
  project: uploadFolder,
  p: uploadFolder,
  domain: uploadURL,
  d: uploadURL,
  e: 'https://surge.surge.sh',
  endpoint: 'https://surge.surge.sh'
});

function tryAddComment(comment, commentBody) {
  if (!commentBody.includes(comment)) {
    return comment;
  }
  return '';
}

if (prnum) {
  octokit.issues.listComments({
    owner,
    repo,
    issue_number: prnum
  })
    .then(res => res.data)
    .then(comments => {
      let commentBody = '';
      const existingComment = comments.find(comment => comment.user.login === 'patternfly-build');
      if (existingComment) {
        commentBody += existingComment.body;
      }

      commentBody += '\n';
      if (uploadFolder === 'public') {
        commentBody += tryAddComment(`Preview: https://${uploadURL}`, commentBody);
      } else if (uploadFolder === 'allure-report') {
        commentBody += tryAddComment(`Snapshot report: https://${uploadURL}`, commentBody);
      } else if (uploadFolder === 'coverage') {
        commentBody += tryAddComment(`A11y report: https://${uploadURL}`, commentBody);
      }

      if (existingComment) {
        octokit.issues.updateComment({
          owner,
          repo,
          comment_id: existingComment.id,
          body: commentBody
        }).then(() => console.log('Updated comment!'));
      } else {
        octokit.issues.createComment({
          owner,
          repo,
          issue_number: prnum,
          body: commentBody
        }).then(() => console.log('Created comment!'));
      }
    });
}
