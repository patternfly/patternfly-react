#!/bin/bash
set -euo pipefail

GIT_USERNAME="Patternfly CI/CD"
echo "Preparing promotion environment..."
git config user.email "patternfly-ci@redhat.com"
git config user.name "${GIT_USERNAME}"

#if [[ ! -z "${STYLES_VERSION}" ]]; then
#  echo "Updating to @rh-felt/styles: ${STYLES_VERSION}"
#  npm pkg set dependencies.@rh-felt/styles=${STYLES_VERSION} --workspace @rh-felt/react-docs
#  npm pkg set dependencies.@patternfly/patternfly=npm:@rh-felt/styles@${STYLES_VERSION} --workspace @rh-felt/react-docs
#  npm pkg set devDependencies.@rh-felt/styles=${STYLES_VERSION} --workspace @rh-felt/react-core --workspace @rh-felt/react-styles --workspace @rh-felt/react-tokens --workspace @rh-felt/react-icons
#fi

if [[ "${PROMOTE_MODE:-cycle}" == "graduate" ]]; then
  # Stable graduation: apply the chosen stable version to every public package,
  # commit, tag, push, and pack artifacts for the publish job (npm latest tag).
  yarn release:nx --ci-graduate --version="${STABLE_VERSION}"
  echo "prepared=true" >> "${GITHUB_OUTPUT:-/dev/null}"
else
  # Start the next prerelease cycle for every public package (Lerna's preminor
  # promote: 0.0.1-prerelease.7 -> 0.1.0-prerelease.0). This commits, tags, and
  # pushes, but never packs or publishes.
  yarn release:nx --ci-promote
  echo "prepared=false" >> "${GITHUB_OUTPUT:-/dev/null}"
fi

# dry runs
# yarn release:nx --ci-promote --dry-run
# yarn release:nx --ci-graduate --version=0.1.0 --dry-run
