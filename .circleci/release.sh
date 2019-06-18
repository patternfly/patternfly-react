#!/bin/bash
echo "Preparing release environment..."
git config --global user.email "patternfly-build@redhat.com"
git config --global user.name "patternfly-build"
# git config credential.helper store
# echo "https://${GH_USERNAME}:${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git" > ~/.git-credentials
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc

echo "Doing a release..."
# Lerna is complicated. Commands: https://github.com/lerna/lerna/tree/master/commands
# Identify packages that have been updated since the previous tagged release
# Update their versions and changelogs
npx lerna publish --conventional-commits --github-release --yes
