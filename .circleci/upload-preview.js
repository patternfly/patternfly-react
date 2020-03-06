const fs = require('fs');
const path = require('path');
const Octokit = require('@octokit/rest');
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

const uploadFolderName = path.basename(uploadFolder);
let uploadURL = `${repo}-${prnum ? `pr-${prnum}` : prbranch}`.replace(/[\/|\.]/g, '-');

if (uploadFolderName === 'coverage') {
  fs.copyFileSync(
    path.join(uploadFolder, 'report.html'),
    path.join(uploadFolder, 'index.html')
  );
}
if (uploadFolderName === '.out') {
  uploadURL += '-pf3';
}
else if (uploadFolderName === 'results') {
  uploadURL += `-cypress`;
}
else if (uploadFolderName !== 'public') {
  uploadURL += `-${uploadFolderName}`;
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
        commentBody += existingComment.body.trim();
        commentBody += '\n';
      }

      if (uploadFolderName === '.out') {
        commentBody += tryAddComment(`PF3 preview: https://${uploadURL}`, commentBody);
      }
      else if (uploadFolderName === 'public') {
        commentBody += tryAddComment(`PF4 preview: https://${uploadURL}`, commentBody);
      }
      else if (uploadFolderName === 'coverage') {
        commentBody += tryAddComment(`A11y report: https://${uploadURL}`, commentBody);
      }
      else if (uploadFolderName === 'report') {
        commentBody += tryAddComment(`Cypress report: https://${uploadURL}`, commentBody);
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
