#!/bin/bash
# Note: do not do set -x or the passwords will leak!
set -e

echo "Doing a release..."
git config --global user.email "patternfly-build@redhat.com"
git config --global user.name "patternfly-build"
git config --global push.default simple
git config credential.helper store
echo "https://${GH_USERNAME}:${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git" > ~/.git-credentials

echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> ~/.npmrc

git checkout $TRAVIS_BRANCH
git rev-parse HEAD # helpful for debugging any lerna EUNCOMMIT errors
npx lerna changed || true
npx lerna version --github-release --conventional-commits --yes
npx lerna publish from-package