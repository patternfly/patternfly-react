#!/bin/bash
set -e

if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
  echo "We are in a pull request, not releasing"
  exit 0
fi

if [ "${TRAVIS_REPO_SLUG}" == "${TRIGGER_REPO_SLUG}" -a "$TRAVIS_BRANCH" == "${TRIGGER_REPO_BRANCH}" ]; then
  # note: yarn travis-deploy-once "yarn lerna:publish" currently breaks NPM_TOKEN auth context
  export GITHUB_AUTH="${GH_TOKEN}"
  npm run travis-deploy-once "npm run lerna:changelog; npm run lerna:publish"
fi