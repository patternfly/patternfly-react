#!/bin/bash
GIT_USERNAME="patternfly-build"
GH_REPO=${GITHUB_REPOSITORY}
REPO="github.com/${GH_REPO}"
echo "Preparing release environment..."
git config user.email "patternfly-build@redhat.com"
git config user.name ${GIT_USERNAME}
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc

# Lerna is complicated. Commands: https://github.com/lerna/lerna/tree/master/commands
# Identify packages that have been updated since the previous tagged release
# Update their versions and changelogs according to angular commit guidelines
# https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit

# if [[ ! -z "${PATTERNFLY_VERSION}" ]]; then
#   echo "Updating to @patternfly/patternfly: ${PATTERNFLY_VERSION}"
#   npm pkg set dependencies.@patternfly/patternfly=${PATTERNFLY_VERSION} --workspace @patternfly/react-docs
#   npm pkg set devDependencies.@patternfly/patternfly=${PATTERNFLY_VERSION} --workspace @patternfly/react-core --workspace @patternfly/react-styles --workspace @patternfly/react-tokens --workspace @patternfly/react-icons 
# fi

# publish to npm
# yarn run lerna publish --conventional-commits --conventional-graduate --no-private --dist-tag=latest --yes

# Promote - set up repo for alpha
# yarn run lerna version preminor --force-publish --conventional-commits --no-private --yes --preid alpha

# Promote - To set up repo for a alpha patch release
# yarn run lerna version prepatch --force-publish --conventional-commits --no-private --yes --preid alpha
yarn run lerna version prepatch --conventional-commits --no-private --yes --no-push --preid alpha

# dry run
# yarn run lerna version --conventional-commits --conventional-graduate --no-private --yes --no-git-tag-version --no-push


