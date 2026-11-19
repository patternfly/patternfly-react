#!/bin/bash
set -euo pipefail

# Dependency installation, versioning, Git updates, and packing run without OIDC.
git config user.email "patternfly-build@redhat.com"
git config user.name "patternfly-build"
node .github/prepare-release.mjs
