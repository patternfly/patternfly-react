#!/bin/bash
set -e
# Note: do not do set -x or the passwords will leak!

if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
  echo "We are in a pull request, not setting up release"
  exit 0
fi

if [ "${TRAVIS_REPO_SLUG}" == "${TRIGGER_REPO_SLUG}" -a "$TRAVIS_BRANCH" == "${TRIGGER_REPO_BRANCH}" ]; then
  rm -rf .git
  git init
  git clean -dfx
  git remote add origin https://github.com/$TRAVIS_REPO_SLUG.git
  git fetch origin
  git clone https://github.com/$TRAVIS_REPO_SLUG.git $TRAVIS_REPO_SLUG
  git checkout $TRAVIS_BRANCH

  git config credential.helper store
  echo "https://${GH_USERNAME}:${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git" > ~/.git-credentials

  npm config set "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" -q
  echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc
  npm prune

  git config --global user.email ${COMMIT_AUTHOR_EMAIL}
  git config --global user.name ${COMMIT_AUTHOR_USERNAME}
  git config --global push.default simple

  git fetch --tags
  git branch -u origin/$TRAVIS_BRANCH
  git fsck --full #debug
  echo "npm whoami"
  npm whoami #debug
  echo "git config --list"
  git config --list #debug
fi