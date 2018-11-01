#!/usr/bin/env bash

RED='\033[0;31m'
NC='\033[0m' # No Color

echo "Build all pf-react docs"
yarn storybook:build
yarn build:prdocs
cp -r .out/ .public/patternfly-3
cp -r packages/patternfly-4/react-docs/public .public/patternfly-4
cp -r packages/patternfly-4/react-docs/public/assets .public/assets

if [ "${TRAVIS_REPO_SLUG}" != "${TRIGGER_REPO_SLUG}" -o "${TRAVIS_BRANCH}" != "${TRIGGER_REPO_BRANCH}" ]; then
  echo -e "${RED}Exiting, this is not a production release.${NC}"
  exit 0;
fi
