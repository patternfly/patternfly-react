#!/bin/bash
# Note: do not do set -x or the passwords will leak!
set -e

echo "Preparing release environment..."
git config --global user.email "patternfly-build@redhat.com"
git config --global user.name "patternfly-build"

echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc

echo "Doing a release..."
# Lerna is complicated. Commands: https://github.com/lerna/lerna/tree/master/commands
git checkout $TRAVIS_BRANCH # Lerna needs to be on a real HEAD
git rev-parse HEAD # helpful for debugging any lerna EUNCOMMIT errors

# Tag this new commit with each package change. Don't push it yet.
npx lerna version --conventional-commits --no-commit-hooks --no-git-tag-version --no-push --yes

# Check each package.json and determe if any package version is not present in the registry.
# Any versions not present in the registry will be published.
if npx lerna publish from-package --no-changelog --no-git-tag-version --no-push --yes ; then
    # Undo that last commit locally
    git reset --hard HEAD~1
    # Now only if it publishes should we also push this commit to Github and do a Github release.
    npx lerna version --conventional-commits --github-release --no-commit-hooks --yes
fi