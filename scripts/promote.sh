#!/bin/bash
packages=(
  @patternfly/patternfly
  @patternfly/react-catalog-view-extension
  @patternfly/react-charts
  @patternfly/react-core
  @patternfly/react-icons
  @patternfly/react-inline-edit-extension
  @patternfly/react-styles
  @patternfly/react-table
  @patternfly/react-tokens
  @patternfly/react-topology
  @patternfly/react-virtualized-extension
)
prereleaseTag=prerelease

function getPrereleaseVersion {
  local version=$(
    npm dist-tag ls $1 |
    grep $prereleaseTag: |
    sed "s/$prereleaseTag:[[:space:]]*//"
  )
  echo $version
}

for p in ${packages[@]}; do
  version=$(getPrereleaseVersion $p)
  if [ "$1" = "promote" ]; then
    echo "npm dist-tag add $p@$version latest"
  else # list
    echo "\"$p\": \"$version\","
  fi
done
