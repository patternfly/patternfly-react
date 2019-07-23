#!/bin/bash

PACKAGES=(
  "@patternfly/react-charts"
  "@patternfly/react-core"
  "@patternfly/react-inline-edit-extension"
  "@patternfly/react-styles"
  "@patternfly/react-table"
  "@patternfly/react-tokens"
  "@patternfly/react-topology"
  "@patternfly/react-virtualized-extension"
)

for PACK in "${PACKAGES[@]}"
do
  VERSIONS=$(npm dist-tag ls $PACK)
  LATEST=$(echo $VERSIONS | grep -Poe 'latest: [\d.]+' | sed 's/latest: //g')
  PRERELEASE=$(echo $VERSIONS | grep -Poe 'prerelease: [\d.]+' | sed 's/prerelease: //g')
  echo "Promoting ${PACK}@${PRERELEASE} to latest from ${LATEST}"
  echo "npm dist-tag add latest ${PACK}@${PRERELEASE}"
done