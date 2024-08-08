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

packages-extensions=(
  @patternfly/react-topology
  @patternfly/react-virtualized-extension
  @patternfly/quickstarts
  @patternfly/react-user-feedback
  @patternfly/react-console
  @patternfly/react-log-viewer
  @patternfly/react-catalog-view-extension
  @patternfly/react-component-groups
)

prereleaseTag=prerelease

while getOpts e:p:t: flag; 
do
  case "${flag}" in
    e) packages+=(${packages-extensions[@]});;
    p) promote=true;;
    t) prereleaseTag=${OPTARG};;
  esac
done

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
  if [ "$promote" = true]; then
    echo "npm dist-tag add $p@$version latest"
  else # list
    echo "\"$p\": \"$version\","
  fi
done
