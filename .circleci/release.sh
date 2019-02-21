#!/bin/bash
# Note: do not do set -x or the passwords will leak!
set -e

echo "Setting release environment..."
git config --global user.email "patternfly-build@redhat.com"
git config --global user.name "patternfly-build"
git config --global push.default simple
git config credential.helper store
echo "https://${GH_USERNAME}:${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git" > ~/.git-credentials

echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> ~/.npmrc


# Lerna is complicated. Commands: https://github.com/lerna/lerna/tree/master/commands
echo "Doing a release..."
git checkout $TRAVIS_BRANCH # Lerna needs to be on a real HEAD
git rev-parse HEAD # helpful for debugging any lerna EUNCOMMIT errors


# It's possible someone manually version-bumped, or we failed to bump for some other reason.


# Bump packages with changes since the last git tags. Update the changelog and commit it.
# Tag this new commit with each package change. Don't push it yet.
npx lerna version --conventional-commits --no-commit-hooks --no-push --yes

# Check each package.json and determe if any package version is not present in the registry.
# Any versions not present in the registry will be published.
if npx lerna publish from-package --no-changelog --no-git-tag-version --no-push --yes ; then
    # Only if it publishes should we also release this commit to Github.
    npx lerna version --conventional-commits --github-release --no-commit-hooks --yes
fi