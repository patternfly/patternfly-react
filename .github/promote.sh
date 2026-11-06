#!/bin/bash
set -euo pipefail

GIT_USERNAME="patternfly-build"
GH_REPO=${GITHUB_REPOSITORY}
REPO="github.com/${GH_REPO}"
echo "Preparing release environment..."
git config user.email "patternfly-build@redhat.com"
git config user.name ${GIT_USERNAME}

# Lerna is complicated. Commands: https://github.com/lerna/lerna/tree/master/commands
# Identify packages that have been updated since the previous tagged release
# Update their versions and changelogs according to angular commit guidelines
# https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit

#if [[ ! -z "${PATTERNFLY_VERSION}" ]]; then
#  echo "Updating to @patternfly/patternfly: ${PATTERNFLY_VERSION}"
#  npm pkg set dependencies.@patternfly/patternfly=${PATTERNFLY_VERSION} --workspace @patternfly/react-docs
#  npm pkg set devDependencies.@patternfly/patternfly=${PATTERNFLY_VERSION} --workspace @patternfly/react-core --workspace @patternfly/react-styles --workspace @patternfly/react-tokens --workspace @patternfly/react-icons 
#fi

case "${1:-prepare}" in
  prepare)
    # Uncomment to enable stable preparation. The workflow publishes the archives
    # in a separate OIDC job before preparing the next prerelease cycle.
    # node .github/prepare-promote.mjs
    ;;
  next-prerelease)
    # Immediately after successful promotion (or when stable publishing is disabled).
    yarn run lerna version preminor --force-publish --conventional-commits --no-private --yes --preid prerelease
    ;;
  *)
    echo "Expected prepare or next-prerelease" >&2
    exit 1
    ;;
esac

# dry run
# yarn run lerna version --conventional-commits --conventional-graduate --no-private --yes --no-git-tag-version --no-push
