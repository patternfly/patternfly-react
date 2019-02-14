#!/bin/bash
# This removes these files so Travis won't cache them after building docs.
# Saves 40s each on doc build job
rm -rf node_modules/.cache
rm -rf packages/patternfly-4/react-core/node_modules/.cache
rm -rf packages/patternfly-4/react-docs/node_modules/.cache