#!/bin/bash
 # Make sure you update the version number when changing this script.
version=2.0
promote=false

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

packagesExtensions=(
  @patternfly/react-topology
  @patternfly/react-virtualized-extension
  @patternfly/quickstarts
  @patternfly/react-user-feedback
  @patternfly/react-console
  @patternfly/react-log-viewer
  @patternfly/react-catalog-view-extension
  @patternfly/react-component-groups
  @patternfly/react-data-view
  @patternfly/chatbot
)

prereleaseTag=prerelease

show_help() {
  echo "Usage: $(basename $0) [OPTIONS]"
  echo "Options:"
  echo "  -h, --help     Display this help message"
  echo "  -v, -version   Display version information"
  echo "  -e             Shows extensions packages prerelease versions"
  echo "  -p             Shows the command to promote to latest tag"
  echo "  -t             Versions are displayed for this tag (default: prerelease)"
  # Add more options and descriptions as needed
  exit 0
}

if [[ "$1" == "-h" || "$1" == "--help" ]]; then
  show_help
fi
if [[ "$1" == "-v" || "$1" == "--version" ]]; then
  echo "Version: $version"
  exit 0
fi
while getopts ept: flag; 
do
  case "${flag}" in
    e) packages+=(${packagesExtensions[@]});;
    p) promote=true;;
    t) prereleaseTag=${OPTARG};;

    *) show_help;;
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
  if [ "$promote" = true ]; then
    echo "npm dist-tag add $p@$version latest"
  else # list
    echo "\"$p\": \"$version\","
  fi
done
