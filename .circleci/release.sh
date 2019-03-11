#!/bin/bash
# Note: do not do set -x or the passwords will leak!
set -e

echo "Preparing release environment..."
git config --global user.email "patternfly-build@redhat.com"
git config --global user.name "patternfly-build"
git config credential.helper store

echo "https://${GH_USERNAME}:${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git" > ~/.git-credentials
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc

echo "Doing a release..."
# Lerna is complicated. Commands: https://github.com/lerna/lerna/tree/master/commands
git checkout $TRAVIS_BRANCH # Lerna can't have a detached HEAD
git rev-parse HEAD

# Identify packages that have been updated since the previous tagged release
# Update their versions and changelogs
npx lerna version --conventional-commits --no-git-tag-version --no-commit-hooks --no-push --yes

# Amend the commit to avoid lerna ERR! EUNCOMMIT
git add **/package.json **/CHANGELOG.md
git commit --amend --no-edit --no-verify

# Check each package.json and determine if any package version is not present in the registry;
# any versions not present in the registry will be published
if npx lerna publish from-package --no-git-tag-version --no-push --yes ; then
    # Undo that last amended commit locally, because we don't actually want to push it
    git reset --hard origin/$TRAVIS_BRANCH
    # Now only if it publishes should we also push this commit to Github and do a Github release
    if ! npx lerna version --conventional-commits --github-release --no-commit-hooks --yes ; then
        echo "Something went wrong committing or making a Github release."
        exit 0 # Publishing to the registry is what matters...
    fi
else # Failed to publish to npm
    echo "Failed to publish to npm :("
    exit 1
fi