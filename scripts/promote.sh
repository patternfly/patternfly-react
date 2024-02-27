#!/bin/bash
packages=(
  @patternfly/patternfly
  @patternfly/react-charts
  @patternfly/react-code-editor
  @patternfly/react-core
  @patternfly/react-drag-drop
  @patternfly/react-icons
  @patternfly/react-styles
  @patternfly/react-table
  @patternfly/react-templates
  @patternfly/react-tokens
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
