#!/bin/bash

USERNAME=${CIRCLE_PROJECT_USERNAME}
REPONAME=${CIRCLE_PROJECT_REPONAME}
GIT_USERNAME="patternfly-build"
REPO="github.com:${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}.git"
echo "Preparing release environment..."
git config --global user.email "patternfly-build@redhat.com"
git config --global user.name ${GIT_USERNAME}
git config credential.helper store
echo "https://${GIT_USERNAME}:${GH_TOKEN}@${REPO}" > ~/.git-credentials
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc

echo "Doing a release..."

# Lerna is complicated. Commands: https://github.com/lerna/lerna/tree/master/commands
# Identify packages that have been updated since the previous tagged release
# Update their versions and changelogs
if yarn run lerna publish --conventional-commits --create-release=github --yes; # Leave a Github comment
then
  # Use Issues api instead of PR api because
  # PR api requires comments be made on specific files of specific commits
  LOG=$(git log --pretty=oneline -2 | grep -Poe "#\d+")
  PR_NUM=${LOG:1}
  if [ -n "${PR_NUM}" ]
  then
    GITHUB_PR_COMMENTS="https://api.github.com/repos/${USERNAME}/${REPONAME}/issues/${PR_NUM}/comments"
    COMMENT=$(git log -1 --pretty=%B | tail -n +2 | python -c 'import json,sys; print(json.dumps(sys.stdin.read()))' | cut -d '"' -f 2)
    JSON="{\"body\":\"Your changes have been released in: ${COMMENT}\"}"
    echo "Adding github PR comment ${COMMENT}"
    curl -H "Authorization: token ${GH_PR_TOKEN}" --request POST "${GITHUB_PR_COMMENTS}" --data "${JSON}"
  fi
else
  echo "Failed lerna publish"
  exit 1
fi

