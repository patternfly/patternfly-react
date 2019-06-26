#!/bin/bash

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
yarn run lerna publish --conventional-commits --create-release=github --yes
