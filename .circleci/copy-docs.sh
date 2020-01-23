#!/bin/bash
# Build the docs/ folder from pf3 and pf4 docs
mkdir -p docs
cp -r .out docs/patternfly-3
cp -r packages/patternfly-4/react-docs/public docs/patternfly-4
cp .circleci/index.html docs/index.html
cp -r packages/patternfly-4/react-integration/results/test-html-report.html docs/patternfly-4
# These need to be at the root for CSS variables
cp -r docs/patternfly-4/assets docs/assets
# Use newer favicon
cp docs/patternfly-4/favicon* docs
