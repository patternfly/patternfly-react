#!/bin/bash
GIT_USERNAME="patternfly-build"
GH_REPO=${GITHUB_REPOSITORY}
REPO="github.com/${GH_REPO}"
echo "Preparing release environment..."
git config user.email "patternfly-build@redhat.com"
git config user.name ${GIT_USERNAME}
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc

echo "Doing a release..."
# Lerna is complicated. Commands: https://github.com/lerna/lerna/tree/master/commands
# Identify packages that have been updated since the previous tagged release
# Update their versions and changelogs according to angular commit guidelines
# https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit

# Grab the log before lerna makes a commit
LOG=$(git log --format="%s" -1 | grep -Poe "#\d+")
PR_NUM=${LOG:1}

yarn run lerna publish --conventional-commits --create-release=github --no-verify-access --yes 2>&1 | tee lerna-output.txt

if grep -i "Successfully published" lerna-output.txt; # Leave a Github comment
then
  if [ -n "${PR_NUM}" ]
  then
    # Use Issues api instead of PR api because
    # PR api requires comments be made on specific files of specific commits
    GH_PR_COMMENTS="https://api.github.com/repos/${GH_REPO}/issues/${PR_NUM}/comments"
    COMMENT=$(git log --author="patternfly-build" -1 --pretty=%B | tail -n +2 | python -c 'import json,sys; print(json.dumps(sys.stdin.read()))' | cut -d '"' -f 2)
    JSON="{\"body\":\"Your changes have been released in: ${COMMENT}Thanks for your contribution! :tada:\"}"
    echo "Adding github PR comment ${GH_PR_COMMENTS} ${JSON}"
    curl -H "Authorization: token ${GH_PR_TOKEN}" --request POST "${GH_PR_COMMENTS}" --data "${JSON}"
  fi
elif grep -i "No changed packages to publish" lerna-output.txt;
then
  echo "No changed packages to publish"
else
  echo "Failed lerna publish"
  exit 1
fi
