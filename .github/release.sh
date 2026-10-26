#!/bin/bash
set -euo pipefail

GIT_USERNAME="patternfly-build"
echo "Preparing release environment..."
git config user.email "patternfly-build@redhat.com"
git config user.name "${GIT_USERNAME}"

echo "Preparing the Nx release..."
yarn release:nx --ci-prepare

if [[ ! -f .release/release.json ]]; then
  echo "No changed Felt packages to publish."
  if [[ -n "${GITHUB_OUTPUT:-}" ]]; then
    echo "prepared=false" >> "${GITHUB_OUTPUT}"
  fi
  exit 0
fi

if [[ -n "${GITHUB_OUTPUT:-}" ]]; then
  echo "prepared=true" >> "${GITHUB_OUTPUT}"
fi
